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
  



  
  /**
   * To-Do List:
   * Submit the page
   * Program the timer 
   * 
   */

  /**
   * 
   * https://stackoverflow.com/questions/58132891/chrome-timer-extension-how-to-keep-timer-running-even-when-extension-is-closed
   * 
   * 
   * 
   */