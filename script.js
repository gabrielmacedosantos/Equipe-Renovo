function subirTela() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function decidirScrooll() {
    if(window.scrollY == 0)
    //Ocultar botão
    document.querySelector(".scollbutton").style.display = "none"
    //Mostrando
    else {
        document.querySelector(".scollbutton").style.display = "block"
    }
}

window.addEventListener("scroll", decidirScrooll)

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})