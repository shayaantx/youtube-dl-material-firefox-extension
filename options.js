function save_options() {
    var frontend_url = document.getElementById('frontend_url').value;
    chrome.storage.sync.set({
        "frontend_url": frontend_url
    }, function() {
      $('#collapseExample').collapse('show');
      setTimeout(function() {
        $('#collapseExample').collapse('hide');
      }, 2000);
    });
  }
  
  function restore_options() {
    chrome.storage.sync.get({
        frontend_url: 'http://localhost'
    }, function(items) {
      document.getElementById('frontend_url').value = items.frontend_url;
    });
  }
  document.addEventListener('DOMContentLoaded', restore_options);
  document.getElementById('save').addEventListener('click',
      save_options);