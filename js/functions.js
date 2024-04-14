
/**
 * Legge array e stampa il risultato DOM
 *
 * @param {array di oggetti} photo
 */
function printInDom(photo) {
    const caroselClass = document.querySelector(".my-carousel-images");
    for (let i = 0; i < photo.length; i++) {
        const singlePhoto = photo[i];
        caroselClass.innerHTML += `
        <div class="my-carousel-item" carousel-item="${i + 1}">
        <img
          class="img-fluid"
          src="./${singlePhoto.image}"
          alt="${singlePhoto.title}"
        />
        <div class="item-description px-3">
          <h2>${singlePhoto.title}</h2>
          <p>
          ${singlePhoto.text}
          </p>
        </div>
      </div>
        `;
        const photoClass = document.querySelector(".my-carousel-item");
        photoClass.classList.add("active");
    }
}

function nextPhoto() {
    const photoClass = document.querySelectorAll(".my-carousel-item");
    const thum = document.querySelectorAll(".my-thumbnail");
    photoClass[actualPhoto].classList.remove("active");
    thum[actualPhoto].classList.remove("active");
    if (actualPhoto < photoClass.length - 1) {
        actualPhoto++;
    } else {
        actualPhoto = 0;
    }
    photoClass[actualPhoto].classList.add("active");
    thum[actualPhoto].classList.add("active");
}

function prevPhoto() {
    const photoClass = document.querySelectorAll(".my-carousel-item");
    const thum = document.querySelectorAll(".my-thumbnail");
    photoClass[actualPhoto].classList.remove("active");
    thum[actualPhoto].classList.remove("active");
    if (actualPhoto > 0) {
        actualPhoto--;
    } else {
        actualPhoto = 4;
    }
    photoClass[actualPhoto].classList.add("active");
    thum[actualPhoto].classList.add("active");
}

function printInDomTh(photo) {
    const caroselClass = document.querySelector(".my-thumbnails");
    caroselClass.innerHTML += `<div class="my-previous position-absolute">
    <span class="my-prev-hook"></span>
  </div>
  <!-- next -->
  <div class="my-next position-absolute">
    <span class="my-next-hook"></span>
  </div>`;
    for (let i = 0; i < photo.length; i++) {
        const singlePhoto = photo[i];
        caroselClass.innerHTML += `
        <img
                  class="img-fluid my-thumbnail"
                  src="./${singlePhoto.image}"
                  alt="${singlePhoto.title}"
                />
        `;
        const photoClass = document.querySelector(".my-thumbnail");
        photoClass.classList.add("active");
    }
}
function clickTh() {
    const photoClass = document.querySelectorAll(".my-carousel-item");
    const thum = document.querySelectorAll(".my-thumbnail");
    for (let i = 0; i < photoClass.length; i++) {
        thum[i].addEventListener("click", function () {
            photoClass[actualPhoto].classList.remove("active");
            thum[actualPhoto].classList.remove("active");
            photoClass[i].classList.add("active");
            thum[i].classList.add("active");
            actualPhoto = i;
        })

    }
}