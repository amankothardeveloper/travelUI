$(".dest-card-slider").slick({
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  variableWidth: true,
  loop: false,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
});
window.addEventListener("DOMContentLoaded", () => {
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

  $(".newsletter-form").submit((e) => {
    e.preventDefault();
    alert(
      `Updates will notified you on ${e.currentTarget[0].value}`
    );
  });
});
