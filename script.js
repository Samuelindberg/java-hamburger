let hamburgerMenu = {
    icon: document.getElementById("hamburger-icon"),
    menu: document.getElementById("menu"),
    test: document.getElementById("test"),
    menuOpen : false
}

hamburgerMenu.icon.addEventListener("click",function(){
    if(hamburgerMenu.menuOpen){
        hamburgerMenu.menu.style.transform="translateX(-100%)";
        hamburgerMenu.menuOpen=false;
    }
    else{
        hamburgerMenu.menu.style.transform="translateX(0)";
        hamburgerMenu.menuOpen=true;
    }
      
    
});

