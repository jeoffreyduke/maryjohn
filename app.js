let firstOpen = false;
let secOpen = false;
let thirdOpen = false;

let firstRow = document.querySelector(".details1");
let secRow = document.querySelector(".details2");
let thirdRow = document.querySelector(".details3");

let firstImg = document.querySelector(".openImg1");
let secImg = document.querySelector(".openImg2");
let thirdImg = document.querySelector(".openImg3");

const handleShowDetails = (row) => {
  if (row === "First") {
    firstOpen = !firstOpen;

    if (firstOpen) {
      firstImg.src = "./assets/images/open.svg";
      firstRow.style.display = "block";
    } else {
      firstImg.src = "./assets/images/close.svg";
      firstRow.style.display = "none";
    }
  }

  if (row === "Second") {
    secOpen = !secOpen;

    if (secOpen) {
      secImg.src = "./assets/images/open.svg";
      secRow.style.display = "block";
    } else {
      secImg.src = "./assets/images/close.svg";
      secRow.style.display = "none";
    }
  }

  if (row === "Third") {
    thirdOpen = !thirdOpen;

    if (thirdOpen) {
      thirdImg.src = "./assets/images/open.svg";
      thirdRow.style.display = "block";
    } else {
      thirdImg.src = "./assets/images/close.svg";
      thirdRow.style.display = "none";
    }
  }
};
