function changeImageSource() {
  const imageHeader = document.querySelector(".header__background-image");
  const imageLogo = document.querySelector("#wbt-logo");

  if (window.innerWidth <= 700) {
    imageHeader.src = "./assets/mobile-header-image.png";
    imageLogo.src = "./assets/logo-mobile.png";
  } else {
    imageHeader.src = "./assets/header-bg-image.png";
    imageLogo.src = "./assets/wbt-logo.png";
  }
}

// Call the function on initial load
document.addEventListener("DOMContentLoaded", changeImageSource);
