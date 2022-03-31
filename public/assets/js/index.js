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

      // ENABLE VIDEO ON SCREEN AT PROGRAM TAB
      const video__container = document.getElementById("video__container");
      if (sectionId == "program") {
        video__container.classList.add("active");
      } else {
        video__container.classList.remove("active");
        pauseVideo();
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
  .find("a.nav__link")
  .click(function (e) {
    e.preventDefault();
    const sectionId = $(this).attr("href").replace("#", "");
    const section = document.querySelector(".section[id=" + sectionId + "]");

    section.scrollIntoView();
  });

/*==================== FUNCTION TO PLAY VIDEO ====================*/
const video = document.getElementById("video__box");
const playBtn = document.getElementById("play__btn");
function playVideo() {
  playBtn.classList.add("playing");
  video.play();
}

function pauseVideo() {
  playBtn.classList.remove("playing");
  video.pause();
}
