chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var user = document.getElementById("LoginUserPassword_auth_username");
        var pwd = document.getElementById("LoginUserPassword_auth_password");

        user.value = '<username>';
        pwd.value = '<password>';
      }
    }
  );