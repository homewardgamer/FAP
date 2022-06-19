// window.onload = ()=>{
//   console.log('loaded');
//   var fs = require('fs');
//   var files = fs.readdirSync('/downloads');
// }

function handleGallerySwitch() {
  var galleryBtn = document.getElementById("gallery-toggle");
  var galleryContainer = document.getElementById("gallery-container");
  var newsBtn = document.getElementById("news-toggle");
  var newsContainer = document.getElementById("news-container");
  // var eminentsBtn = document.getElementById("eminents-toggle");
  // var eminentsContainer = document.getElementById("eminents-container");

  galleryBtn.onclick = () => {
    if (galleryContainer) {
      galleryContainer.style.display = "flex";
    }
    if (newsContainer) {
      newsContainer.style.display = "none";
    }
    // if(eminentsContainer){
    //   eminentsContainer.style.display = "none";
    // }
  };
  newsBtn.onclick = () => {
    if (galleryContainer) {
      galleryContainer.style.display = "none";
    }
    if (newsContainer) {
      newsContainer.style.display = "flex";
    }
    // if(eminentsContainer){
    //   eminentsContainer.style.display = "none";
    // }
  };
  // eminentsBtn.onclick = () => {
  //   galleryContainer.style.display = "none";
  //   newsContainer.style.display = "none";
  // if(eminentsContainer){
  //   eminentsContainer.style.display = "block";
  // }
  // };
}

handleGallerySwitch();

function galleryImgLoader() {
  var galleryContainer = document.getElementById("gallery-container");
  var galleryItem = document.getElementsByClassName("gallery-item");
  var galleryImg = galleryItem[0].firstElementChild;
  // galleryContainer.appendChild()
  let x = document.createElement("div");
  x.className = "gallery-item";
  x.appendChild(galleryImg);
  galleryContainer.appendChild(x);
  // for (let i = 0; i < 15; i++) {
  //   console.log(i)
  //   galleryContainer.appendChild(galleryItem[0])
  //   console.log(galleryContainer.children[i]);
  //   galleryItem[i].children[i].src= `/src/images/gallery/gallery-${i + 1}.jpg`;
  // }
  // console.log(galleryImages);
}

// galleryImgLoader();
