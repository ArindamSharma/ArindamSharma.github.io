function myopen(active_id,inactive_id){
    var active=document.getElementById(active_id);
    console.log(active);
    var inactive=document.getElementById(inactive_id);
    var labels=document.getElementsByClassName("left-navbar-item-box-label");
    console.log(getComputedStyle(labels[0]).fontSize);
    if(getComputedStyle(active).fontSize!=0){
        active.style.fontSize="0";
        inactive.style.fontSize="3rem";
        if(getComputedStyle(labels[0]).fontSize=='0px'){
            for(var i=0;i<labels.length;i++){
                labels[i].style.fontSize="1.5rem";
            }
        }
        else{
            for(var i=0;i<labels.length;i++){
                labels[i].style.fontSize="0";
            }
        }
        // active.style.transform="rotate(180deg)";
        // inactive.style.transform="rotate(180deg)";
    }
    else{
        active.style.fontSize="3rem";
        inactive.style.fontSize="0";
        if(getComputedStyle(labels[0]).fontSize=='0px'){
            for(var i=0;i<labels.length;i++){
                labels[i].style.fontSize="1.5rem";
            }
        }
        else{
            for(var i=0;i<labels.length;i++){
                labels[i].style.fontSize="0";
            }
        }
        // active.style.transform="rotate(180deg)";
        // inactive.style.transform="rotate(180deg)";
    }
    // console.log("yse");
}