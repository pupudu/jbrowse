/**
* RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
* LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables
*/

var disqus_config = function () {
  this.page.identifier = "identifier_5";   // Not usefull in the context of JBrowse
};

function reload(id_num){
  DISQUS.reset({
  reload: true,
  config: function () {  
    //alert(this.page.url);
    this.page.identifier = "identifier_"+id_num;   // Not usefull in the context of JBrowse
    // this.page.url = "http://sid.projects.mrt.ac.lk/id_test_3";
    // this.page.title = "New Thread id_test_3";
  }
  });
}
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');

s.src = '//jbrowse.disqus.com/embed.js';

s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();