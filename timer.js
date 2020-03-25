function submitFunction() {
  var userName = document.getElementById("userName").value;
  var subName = document.getElementById("subName").value;
  var num_months = document.getElementById("mm").value;
  var num_weeks = document.getElementById("ww").value;
  var num_days = document.getElementById("dd").value;
  var email = document.getElementById("email").value;

  var now = new Date().getTime();
  var weeks_in_mil = num_weeks * (7 * 24 * 60 * 60 * 1000);
  var days_in_mil = num_days * (24 * 60 * 60 * 1000);
  var months_in_mil = num_months * (30 * 24 * 60 * 60 * 1000);
  var tot_incr = months_in_mil + weeks_in_mil + days_in_mil;
  var end_date = new Date(now + tot_incr);

  chrome.runtime.sendMessage({ ed: end_date, incr: tot_incr}, response => {
    if (response.time) {
      const time = new Date(response.time);
      startTimer(time)
    }
  });
}