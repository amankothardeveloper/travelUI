// Slider For Popular Destinations ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$(".dest-card-slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  variableWidth: true,
  loop: false,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});

// Wait For Dom Parsing ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  // Theme Dark and Light mode switcher with localstorage sync ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  let themeMode = localStorage.getItem("theme-mode");

  if (themeMode == "dark") {
    $(".themer,.mode-switcher").addClass("dark");
  } else {
    $(".themer,.mode-switcher").removeClass("dark");
  }

  $(".mode-switcher").click(() => {
    if ($(".themer").hasClass("dark")) {
      $(".themer,.mode-switcher").removeClass("dark");
      localStorage.setItem("theme-mode", "light");
    } else {
      $(".themer,.mode-switcher").addClass("dark");
      localStorage.setItem("theme-mode", "dark");
    }
  });
  // Theme Dark and Light mode switcher with localstorage sync -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  let themeColor = localStorage.getItem("theme-color");

  if (themeColor != null) {
    document.getElementById("theme-color").value = themeColor;
    $("html, .neg-theme").css("--theme-color", themeColor);
  }

  $("#theme-color").change((e) => {
    let color = e.currentTarget.value;
    localStorage.setItem("theme-color", color);
    $("html, .neg-theme").css("--theme-color", color);
  });

  // Newsletter data submition and form submition alert for user ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  $(".newsletter-form").submit((e) => {
    e.preventDefault();
    alert(`Updates will notified you on ${e.currentTarget[0].value}`);
  });
});
