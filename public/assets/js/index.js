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
let current_sectionId = "";

function scrollActive() {
  const scrollY = main__content.scrollTop;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      const section = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

      section.classList.add("active-link");

      current_sectionId = sectionId;

      // ENABLE VIDEO ON SCREEN AT INSIGHT TAB
      const video__container = document.getElementById("video__container");
      if (sectionId == "insight") {
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

function toggleVideo() {
  if (
    !!(
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2
    )
  ) {
    pauseVideo();
  } else {
    playVideo();
  }
}