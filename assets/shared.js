
  // OPTIONAL: Remove the custom style sheet, if the user is signed in
  (function() {
    var timer;
    function check() {
      if ( document.getElementById('public_site') || document.getElementById('cms_tools_top')) {
        var stylesheets = document.querySelectorAll('style[data-custom-code]');
        for (var index = 0; index < stylesheets.length; index++) {
          stylesheets[index].parentNode.removeChild(stylesheets[index]);
        }
        clearInterval(timer);
      }
    }

    // Check frequently
    timer = setInterval(check, 10);

    // Check one last time when the DOM has loaded
    document.addEventListener('DOMContentLoaded', function() {
      check();
      clearInterval(timer);
    });
    // Stop checking when everything has loaded
    document.addEventListener('load', function() {
      clearInterval(timer);
    });

    // If all else fails, stop checking after five seconds
    setTimeout(function() {
      clearInterval(timer);
    }, 5000);
  })();


  // OPTIONAL: Increase the resolution of the image in the header, by changing its “src” attribute
  document.addEventListener('DOMContentLoaded', function() {
    // Check to see if the page HTML matches a certain pattern (the HTML that we expect to see on School Loop 1.0)
    // If it does match, look for an image that appears right after the main headline
    // If that image is found, update it’s URL from wXXX to w2000

    // These selectors were taken directly from the style sheet, “custom.css”
    var image = document.querySelector(
      '#container_content_home > .content_full > div > div[style="width: 100%; width: 970px"] > img[width="970"]:first-of-type'
      + ', ' +
      '#page_title + table > tbody > tr > td > #block_hub_main_b > .block_content_main > div > div[style="width: 100%; width: 350px"] > img[width="350"]:first-of-type'
      + ', ' +
      '#page_title + table > tbody > tr > td > #block_hub_main > .block_content_main > div > div[style="width: 100%; width: 465px"] > img[width="465"]:first-of-type'
      + ', ' +
      '#page_title + #block_wide_main > .block_content_main > div > div[style="width: 100%; width: 700px"] > img[width="700"]:first-of-type'
    );
    if (image) {
      var url = image.getAttribute('src').
                  replace('w350', 'w2000').
                  replace('w465', 'w2000').
                  replace('w700', 'w2000').
                  replace('w970', 'w2000')

      image.setAttribute('src', url);
    }        
  });

