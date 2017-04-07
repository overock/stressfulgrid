(function(ns) {
  var loadTemplate = function(url) {
    var templateHolder = document.createElement('script');
    document.head.appendChild(templateHolder);
    templateHolder.setAttribute('type', 'text/x-template');
    templateHolder.setAttribute('id', 'template-' + generateUUID());

    //$.get(url, function(data) { templateHolder.innerHTML = data; }, 'text');
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'text',
      success: function(data) {
        templateHolder.innerHTML = data;
      }
    });

    return '#' + templateHolder.id;
  };

  var generateUUID = function() {
      var d = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
      });
      return uuid;
  };
  
  window[ns] = loadTemplate;
})('templer');