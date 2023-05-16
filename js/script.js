let lightSwitch = document.getElementById('lightSwitch');

let switchToLight = function switchToLight() {
    var body = document.body;
    var about = document.getElementById('about');
    var port = document.getElementById('portfolio');
    body.classList.toggle("lightMode");
    about.classList.toggle("lightMode");
    port.classList.toggle("lightMode");
};

lightSwitch.onclick = switchToLight;