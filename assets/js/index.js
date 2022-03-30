/*==================== INITIALIZE DEFAULT SECTION ====================*/
const default_selected_section_link = document
  .querySelector("a.active-link")
  .getAttribute("href")
  .replace("#", "");
const section = document.querySelector(
  ".section[id=" + default_selected_section_link + "]"
);

section.scrollIntoView();

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");
const main__content = document.getElementById("main__content");

function scrollActive() {
  const scrollY = main__content.scrollTop;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");

      // PLAY VIDEO AT WORK TAB
      const video__container = document.getElementById("video__container");
      const video = document.getElementById("video__box");
      if (sectionId == "work") {
        video__container.classList.add("active")
        video.play();
      } else {
        video__container.classList.remove("active")
        video.pause();
      }
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
main__content.addEventListener("scroll", scrollActive);

/*==================== SCROLL TO CLICK NAV LINK ====================*/
$("nav")
  .find("a")
  .click(function (e) {
    e.preventDefault();
    const sectionId = $(this).attr("href").replace("#", "");
    const section = document.querySelector(".section[id=" + sectionId + "]");

    section.scrollIntoView();
  });
