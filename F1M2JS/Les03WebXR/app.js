// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(3.04114, 1.54, -9.55352);
minecraftModel.setScale(1.34, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

//create model cube model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(-2.5, 0.91, -3.2);
cuberoom.setScale(0.3, 0.4, 0.16);
cuberoom.setRotation(0, -36.95, 0);
// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

// create some text
const testText = new Text('Javascript les 4');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(30);
testText.setColor('green')
// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-1.48819, 2.45839, -5);
// create an image
const image1 = new XRImage('assets/images/Lisse-049.jpg');
image1.setPosition(-1.48819, 3.85839, -5);

// create a 360 image
const image360 = new Sky('assets/images/FolkertdeJong.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));