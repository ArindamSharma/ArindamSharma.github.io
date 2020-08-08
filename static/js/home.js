function myopen(){
    var active=document.getElementsByClassName("top-navbar-item-menu")[0];
    var labels=document.getElementsByClassName("left-navbar-item-box-label");
    if (active.classList.contains('top-navbar-item-menu-toggle')) {
        active.classList.remove('top-navbar-item-menu-toggle');
        if(getComputedStyle(labels[0]).fontSize=='0px'){
            for(var i=0;i<labels.length;i++){
                labels[i].style.fontSize="1.25rem";
            }
        }
        else{
            for(var i=0;i<labels.length;i++){
                labels[i].style.fontSize="0";
            }
        }
    }
    else{
        active.classList.add('top-navbar-item-menu-toggle');
        if(getComputedStyle(labels[0]).fontSize=='0px'){
            for(var i=0;i<labels.length;i++){
                labels[i].style.fontSize="1.25rem";
            }
        }
        else{
            for(var i=0;i<labels.length;i++){
                labels[i].style.fontSize="0";
            }
        }
    }
}