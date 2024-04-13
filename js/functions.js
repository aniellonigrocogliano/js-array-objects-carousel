
/**
 * Legge array e con for key ogni elemento dell'oggetto infine stampa il risultato DOM
 * @date 11/4/2024 - 18:17:04
 *
 * @param {array di oggetti} team
 */
function printInDom(photo) {
    const caroselClass = document.querySelector(".my-carousel-images");
    for (let i = 0; i < photo.length; i++) {
        const singlePhoto = photo[i];
        caroselClass.innerHTML += `
        <div class="my-carousel-item" carousel-item="${i+1}">
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
        console.log(caroselClass)
    }
}