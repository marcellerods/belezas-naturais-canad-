const contactform = document.querySelector('.formulario-contato')
const mask = document.querySelector(".mascara-formulario")


function buttonClicked() {
    contactform.style.left = "50%"
    contactform.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function maskClicked() {
    contactform.style.left = "-300px"
    contactform.style.transform = "translateX(0)"
    mask.style.visibility = " hidden"
}