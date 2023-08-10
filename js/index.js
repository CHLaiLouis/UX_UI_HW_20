console.log("testing")


$(document).ready(function() {
    // Event listener for navigation item clicks
    $("ul.navbar li").on("click", function() {
      // Remove the 'active' class from all navigation items and add it to the clicked item
      $("ul.navbar li").removeClass("active");
      $(this).addClass("active");
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $(".back_to_top").fadeIn();
    } else {
      $(".back_to_top").fadeOut();
    }
  });

  // Scroll to top when the back-to-top button is clicked
  $(".back_to_top").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 800); // 800 milliseconds (0.8 seconds) to scroll to top
  });