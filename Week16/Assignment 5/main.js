let images = document.querySelectorAll("img");

for(i = 0; i < images.length; i++){
    if(images[i].hasAttribute("alt")){
        images[i].alt = "old";
    }else{
        images[i].alt = "Elzero New";
    }
}


