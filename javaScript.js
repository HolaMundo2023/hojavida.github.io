let visible = false;

function clickMenu(){
    if(visible){
        document.getElementById("opciones").classList ="";
        visible = false;
    }else{
        document.getElementById("opciones").classList ="menuLateral";
        visible = true;
    }
}

function subMenu(){
    document.getElementById("opciones").classList = "";
    visible = false;
}