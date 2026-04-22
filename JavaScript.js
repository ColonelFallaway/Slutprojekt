let scroll=0;

window.addEventListener("scroll", function(){
    let nuvarandeScroll=this.window.pageYOffset;
    let navbar=this.document.querySelector("header");
    if(nuvarandeScroll>scroll){
        navbar.style.top="-80px";
    }
    else{
        navbar.style.top="0";
    }

    scroll=nuvarandeScroll;
});