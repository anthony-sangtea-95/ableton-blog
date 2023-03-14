let bar = document.querySelector(".bar");
let left_links = document.querySelector(".nav-top__left-links");
bar.onclick = function (){
    console.log(this.src);
    left_links.classList.toggle("show");

    if(this.src === "http://127.0.0.1:5501/images/bar.svg")
    {
        this.src = "http://127.0.0.1:5501/images/cross.svg";
    }
    else {
        this.src = "http://127.0.0.1:5501/images/bar.svg";
    }
};