var music_list = ["", "", ""];
var music_item = music_list[getRandomInt(3)];
var audio = new Audio('mm.mp3');
//audio.play();

scene = new THREE.Scene();
camera = new THREE.perspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

render = new THREE.WebGLRenderer({alpha: true, antialias: true});
render.setClearColor(0x000000, 0);
renderer.setSize(1280, 720);

rendere.domElement.setAtribute("id", "3d");

document.body.insertBefore(renderer.domElement, document.body.firstChild);

const aLight = new THREE.AmbientLight(0x404040, 1.2);
scene.add(aLight);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}



