chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'developer.chrome.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });

 document.addEventListener('DOMContentLoaded', setButtonListener);

 function setButtonListener() {
   document.querySelector('settimer').addEventListener('click', function() {
     chrome.runtime.sendMessage({ cmd: "set"}, response => {
       console.log("nigga?");
     })
   });
 }



let timerID;
var time;
var orig_distance;
  
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.ed && request.incr) {
    time = request.ed
    orig_distance = request.incr;
    var week_mil = 7 * 24 * 60 * 60 * 1000;
    
    var notification1 = 24 * 60 * 60 * 1000;
    var notification2 = 12 * 60 * 60 * 1000;
    var notification3 = null;
    var sent_not3 = false;
    var sent_not2 = false;
    var sent_not1 = false;

    if (orig_distance >= week_mil) {
      notification3 = 48 * 60 * 60 * 1000;
    }

    var x = setInterval(function() {
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";
    
      var now = new Date().now();
      var distance = time - now;

      //call method to send chrome message in "to do"
      //display countdown

      if (notification3) {
        if (distance < notification3 && sent_not3 == false) {
          sent_not3 = true;
          //to do
        }
      }

      if (distance < notification2 && sent_not2 == false) {
        sent_not2 = true;
        //to do
      }

      if (distance < notification1 && sent_not1 == false) {
        sent_not1 = true;
        //to do
      }

      if (distance < 0) {
        clearInterval(x);
        //document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    //dfghjkl
  } else if (request.cmd === 'GET_TIME') {
    sendResponse({ time: timerTime });
  }
});
  

  
  /**
   * To-Do List:
   * Submit the page
   * Program the timer 
   * 
   * If they have opened the browser within the email period, try to open up the 
   * pop-up itself to remind. (They do not have to rely on checking their email)
   * 
   * Check to see if it was a montly, weekly, or less than a week trial and
   * come up with emailing system accordingly. 
   * 
   * For length of subscription consider using 3 different input boxes that handles 
   * the month, days, and hours. 
   * 
   */

  /**
   * Intergrate Timer to background.js:
   * https://stackoverflow.com/questions/58132891/chrome-timer-extension-how-to-keep-timer-running-even-when-extension-is-closed
   * Coding the timer:
   * https://www.w3schools.com/howto/howto_js_countdown.asp 
   * 
   * 
   * 
   */