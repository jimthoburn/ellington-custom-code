
  // Remove the custom style sheet, if the user is signed in
  (function() {
    var timer;
    function check() {
      if ( document.getElementById('public_site') || document.getElementById('cms_tools_top')) {
        var stylesheets = document.querySelectorAll('link[href*="jimthoburn.github.io"]');
        for (var index = 0; index < stylesheets.length; index++) {
          stylesheets[index].parentNode.removeChild(stylesheets[index]);
        }
      }
      clearInterval(timer);
    }
    timer = setInterval(check, 10);
    document.addEventListener('DOMContentLoaded', function() {
      check();
      clearInterval(timer);
    });
  })();


/*  (function() {
    if (window.location.host === 'ahs-ausd-ca.schoolloop.com' && document.head) {

      //var canonicalURL = 'http://www.azusahighschool.net' + window.location.pathname + window.location.search + window.location.hash;

      var canonicalURL = location.href.replace('ahs-ausd-ca.schoolloop.com', 'www.azusahighschool.net');

      // Add a rel canonical
      var link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', canonicalURL);
      document.head.appendChild(link);

      document.addEventListener('DOMContentLoaded', function() {

        function signedOut() {
          var footer = document.getElementById('container_footer');
          if (footer && footer.querySelector) {
            var button = footer.querySelector('.footer_login .button1');
            if (button && button.textContent === 'Staff Login') {
              return true;
            }
          }

          return false;
        }

        // If the domain name is not www.azusahighschool.net
        // Redirect to www.azusahighschool.net
        if (signedOut()) {
          var meta = document.createElement('meta');
          meta.setAttribute('http-equiv', 'refresh');
          meta.setAttribute('content', '0; url=' + canonicalURL);
          document.head.appendChild(meta);
        }
      });
    }
  })();*/




  (function() {
    try {
      document.documentElement.setAttribute('data-azusa-uri', window.location.pathname);

      // Check to see if the page HTML matches a certain pattern (the HTML that we expect to see on School Loop 1.0)
      // If it does match, look for an image that appears right after the main headline
      // If that image is found, update it’s URL from w700 to w2000
      document.addEventListener('DOMContentLoaded', function() {
        var image = document.querySelector(
          '#page_title + table > tbody > tr > td > #block_hub_main_b > .block_content_main > div > div[style="width: 100%; width: 350px"] > img[width="350"]'
          + ', ' +
          '#page_title + #block_wide_main > .block_content_main > div > div[style="width: 100%; width: 700px"] > img[width="700"]'
        );
        if (image) {
          image.setAttribute('src', image.getAttribute('src').replace('w350', 'w2000').replace('w700', 'w2000'));          
        }        
      });

    } catch(e) {
      if (console && console.error) console.error(e);
    }
  })();




  // Wait for the page to load, and update the HTML.
  //document.addEventListener('DOMContentLoaded', function() {




    /*
    var title = document.getElementById('page_title')
    if (!title) return;


    title = title.textContent;
    */

    /*
    function titleHas() {
      for (var index = 0; index < arguments.length; index++) {
        if (title.indexOf(arguments[index]) >= 0) return true;
      }
      return false;
    }
    */


    /*
    function getPageCategory(className) {
      if (titleHas('Staff')) {
        return 'staff';
      } else if (titleHas('Parents')) {
        return 'parents';
      } else if (titleHas('News')) {
        return 'news';
      } else if (titleHas(
                  'Our School'
                )) {
        return 'about';
      } else {
        return 'students';
      }
    }

    var category = getPageCategory();
    if (category) document.body.classList.add('azusa-' + getPageCategory());
    */

    // Get a reference to the header element
    // Update the HTML

    // Get a reference to the footer element
    // Update the HTML
  //});


  // Replace the placeholder image with a video element, if the link to the video has been pressed
  document.addEventListener('DOMContentLoaded', function() {

    // Do we have the features we need?
    if (!document.body.addEventListener || !document.body.querySelector || !document.body.classList) return;

    document.body.addEventListener('click', function(e) {
      if (e.target && e.target.parentNode &&
        (
          e.target.parentNode.classList.contains('azusa-home-video-link') || 
          (e.target.parentNode.parentNode && e.target.parentNode.parentNode.classList.contains('azusa-home-video-link'))
        )
      ) {

        var header   = document.querySelector('.azusa-home-introduction');
        var template = document.getElementById('azusa-home-video-template');

        if (header && template) {
          header.className += ' video-playing';
          header.innerHTML = template.innerHTML;
          e.preventDefault();
          if (window.azusa && window.azusa.stopHomeSlideshow) window.azusa.stopHomeSlideshow();
        }

      }
    }, false);
  });

