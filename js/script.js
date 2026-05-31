const slides = document.querySelectorAll(".slide");
let i = 0;

setInterval(() => {
    slides[i].classList.remove("active");
    i++;
    if(i == slides.length){

        i = 0;
    }

    slides[i].classList.add("active");
},3000);

function mudarTema(tema){
    document.body.className = "";
    document.body.classList.add(tema);
}