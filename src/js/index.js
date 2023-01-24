

const botaoTrailer = document.querySelector(".botao-trailer");
const botaofecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () =>{
    alternarModal();
    console.log("clicou no botão de veja o trailer");
    video.setAttribute("src", linkDoVideo);

} );

botaofecharModal.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "");
});











