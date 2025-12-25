import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const texture = new THREE.TextureLoader().load('cat.jpg')
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const donut_geo = new THREE.TorusGeometry(10, 3, 16, 100);
const donut_texture = new THREE.TextureLoader().load('donut.webp')
const donut_tex = new THREE.MeshBasicMaterial({ map: donut_texture });
const donut = new THREE.Mesh(donut_geo, donut_tex);
scene.add(donut);

camera.position.z = 18;

function animate() {
    donut.rotation.x += 0.01;
    donut.rotation.y += 0.01;

    renderer.render( scene, camera );

    requestAnimationFrame(animate);
}

animate();