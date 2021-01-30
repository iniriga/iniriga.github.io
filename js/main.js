let tombol = document.getElementById("tombol");
let spn = document.getElementById("spn");
tombol.addEventListener("click", function(){
    tombol.classList.toggle("active");
    spn.classList.toggle("fa-times");
}); 