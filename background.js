

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

let timerID;
let timerTime;
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.cmd === 'START_TIMER') {
      timerTime = new Date(request.when);
      timerID = setTimeout(() => {}, timerTime.getTime() - Date.now());
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