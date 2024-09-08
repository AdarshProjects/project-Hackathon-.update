let container_popup = document.getElementById("container_popup");

function open_container_popup(){
    container_popup.classList.add("open-container-popup");
}

function close_container_popup(){
    container_popup.classList.remove("open-container-popup");
}

function directingtopage(){
    alert("Thankyou for submitting Your Checklist");
    window.location.href="HouseBuilding.html"
}

var x = document.getElementById("location");
function getPreciseLocation(){
    alert("wait for 2 or 3 seconds for getting your location")
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showExactPosition)
    }else{
        x.innerHTML = "Geolocation is not supported"
    }
}
function showExactPosition(position){
    x.innerHTML = "Latitude: "+ position.coords.latitude+ 
    "<br>Longitude: "+position.coords.longitude;
}
function Budget(){
    alert("coming Soon");
}