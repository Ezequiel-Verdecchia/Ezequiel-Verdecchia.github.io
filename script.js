/*bandera*/
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

// function seleccionar(){
//     //oculto el menu una vez que selecciono una opcion
//     document.getElementById("nav").classList = "";
//     menuVisible = false;
// }
// //buscamos el canvas usando el id
// const canvas = document.getElementById("canv");
// //ahora seleccionamos su contexto y nos guardamos su ancho y su alto
// const ctx = canvas.getContext("2d");
// const w = canvas.width = document.body.offsetWidth;
// const h = canvas.height = document.body.offsetHeight;
// //dividimos el lienzo a utilizar en columnas y comenzamos a pintar desde arriba, arranca en 0
// const cols = Math.floor(w/20)+1;
// const ypos = Array(cols).fill(0);
// //ahora seleccionamos un color para pintar y lo pintamos entero
// ctx.fillStyle ="#000";
// ctx.fillRect(0, 0, w, h);
 
// function SVGFEColorMatrixElement(){
// ctx.fillStyle = "#0001";
// ctx.fillRect ="15pt monospace";
// ypos.forEach((y,ind)=>{
//     const text = string.fromCharCode(Math.random()* 128);
//     const x = ind * 20 ;
//     ctx.fillText(text, x, y);
//     if(y > 100 + Math.random()* 10000) ypos [ind] = 0;
//     else ypos [ind] = y + 20;
// })
// }
// setInterval(matrix)





/*const container = document.querySelector('.inicio')
const colors = ['#CB51EE', '#0073BC', '#38B75E', '#DE365C']

const figures = () => {
    for(let i = 0; i <= 50; i++){
        let figure = document.createElement('span')
        let select = Math.round(colors.length * Math.random())

        figure.style.top = innerHeight * Math.random() + 'px'
        figure.style.left = innerWidth * Math.random() + 'px'
        figure.style.background = colors[select >= colors.length ? select - 1 : select]

        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px'
            figure.style.left = innerWidth * Math.random() + 'px'
        }, 5000)
    }
}

figures()*/