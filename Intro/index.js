const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth -100, window.innerHeight - 100);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;
camera.position.x = 0;

// let speedX = 0.05;
let speedZ = 0.05;

function animate() {
	requestAnimationFrame( animate );

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;

  camera.position.z += speedZ;
  

  if (camera.position.z > 20) {
    let color = getRandomColor();
    cube.material.color.setHex(color);
    speedZ = -0.05;
  }
  if (camera.position.z < 1) {
    let color = getRandomColor();
    cube.material.color.setHex(getRandomColor());
    speedZ = 0.05;
  }
  

	renderer.render( scene, camera );
}

function getRandomColor() {
  return '0x' + Math.floor(Math.random() * 16777216).toString(16);
}

animate();