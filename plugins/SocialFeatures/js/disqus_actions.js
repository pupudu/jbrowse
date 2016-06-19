/**
*  Load initial comment thread on site load
*/
var disqus_config = function () {
  this.page.identifier = "identifier_1";   
};

/**
* Load exisiting thread and refresh disqus comments section
*/
function reload(identifier){
  DISQUS.reset({
    reload: true,
    config: function () {  
      this.page.identifier = identifier;  
    }
  });
}

/**
* Start a new thread and refresh disqus comment section
*/
function startThread(url,identifier,title){
  DISQUS.reset({
    reload: true,
    config: function () {  
      this.page.identifier = identifier;   
      this.page.url = url;
      this.page.title = title;
    }
  });
}

(function() { // DON'T EDIT BELOW THIS LINE
  var d = document, s = d.createElement('script');
  s.src = '//jbrowse.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();