let container_popup = document.getElementById("container_popup");

function open_container_popup(){
    container_popup.classList.add("open-container-popup");
}

function close_container_popup(){
    container_popup.classList.remove("open-container-popup");
}

let Interior_popup = document.getElementById("Interior_popup");

function opening_Interior_popup(){
    Interior_popup.classList.add("open_Interior_popup");
}
function closing_Interior_popup(){
    Interior_popup.classList.remove("open_Interior_popup");
}

function Submitting_information(){
    alert("Thanku for submitting your checklist");
    window.location.href="rennovation.html"
}