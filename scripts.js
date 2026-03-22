const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    

}
   

function cliqueiNaMascara(){
    mascara.style.visibility = "hidden"
    form.style.left = "-400px"
    form.style.transform = "translateX(0)"
}
