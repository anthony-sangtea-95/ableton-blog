let bar = document.querySelector(".bar");
let left_links = document.querySelector(".nav-top__left-links");
bar.onclick = function (){
    left_links.classList.toggle("show");
    let url = window.location.origin;
    if(this.src === `${url}/images/bar.svg`)
    {
        this.src = `${url}/images/cross.svg`;
    }
    else {
        this.src = `${url}/images/bar.svg`;
    }
};