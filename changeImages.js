function changeImageSource() {
  const imageHeader = document.querySelector(".header__background-image");
  const imageLogo = document.querySelector("#wbt-logo");
  const photoGallery = document.getElementById("photo-gallery");

  if (window.innerWidth <= 700) {
    imageHeader.src = "./assets/mobile-header-image.png";
    imageLogo.src = "./assets/logo-mobile.png";
  } else {
    imageHeader.src = "./assets/header-bg-image.png";
    imageLogo.src = "./assets/wbt-logo.png";
  }

  if (localStorage.getItem("selectedLanguage") === "en") {
    photoGallery.src = "./assets/photo-collage-en.png";
  } else if (localStorage.getItem("selectedLanguage") === "pl") {
    photoGallery.src = "./assets/photo-collage-pl.png";
  } else {
    photoGallery.src = "./assets/photo-collage-ru.png";
  }
}

// Call the function on initial load
document.addEventListener("DOMContentLoaded", changeImageSource);
