$(document).ready(function () {
  const menuList = ["home", "about", "why_choose_us", "our_services"];

  $.each(menuList, (i) => {
    $(`.${menuList[i]}`).click(function () {
      $("html, body").animate(
        {
          scrollTop: $(`#to_${menuList[i]}`).offset().top,
        },
        1000
      );
    });
  });
});
