let img_id = document.getElementById('logo');
let src = img_id.getAttribute('src');

function mouseOn(){
    img_id.setAttribute('src', 'iniad-logo-w.png');   
}

function mouseOff(){
    img_id.setAttribute('src', 'iniadcollab.png'); 
}