chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
      chrome.tabs.executeScript(tab.id,{
      code: "document.getElementById('UserCheck_Login_Button').click();"
    })
    });  
  });
