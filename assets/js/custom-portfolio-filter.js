/*=========

//////////////////////////////////////////////////////
Final Author Start
//////////////////////////////////////////////////////
Final Author @ Mohammad Aminul Islam
//////////////////////////////////////////////////////
Final Author End
//////////////////////////////////////////////////////

=========*/

/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Portfolio Tabbing JS
=========*/

$(document).ready(function ($) {
  // Whole Script Strict Mode Syntax
  "use strict";

  // Portfolio Tabbing JS Start
  $(function () {
    var filterList = {
      init: function () {
        // MixItUp plugin
        // http://mixitup.io
        $("#portfoliolist").mixItUp({
          selectors: {
            target: ".portfolio-filter",
            filter: ".filter",
          },
          load: {
            filter:
              ".all, .web-development, .on-page-seo, .off-page-seo, .seo-content",
          },
        });
      },
    };
    // Run the show!
    filterList.init();
  });
  // Portfolio Tabbing JS End
});
