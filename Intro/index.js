const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth -100, window.innerHeight - 100);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 4;

let speed = 0.10;

function animate() {
	requestAnimationFrame( animate );

  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;
  camera.position.z += speed;

  if (camera.position.z > 10) speed = -0.05;
  if (camera.position.z < 1) speed = 0.05;

  

	renderer.render( scene, camera );
}
animate();