function parlat() {
    var logo = document.getElementById('parlayanLogo');
    logo.classList.add('parlayan');
    setTimeout(function() {
        logo.classList.remove('parlayan');
    }, 500); 
}

function baslat() {
    setInterval(parlat, 4000); 
}

window.onload = baslat;