import * as THREE from '../lib/three_module.js'
import {WEBGL} from '../lib/WEBGL.js'
import {OrbitControls} from '../lib/OrbitControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 60);

var planet = document.getElementById('planet');

camera.position.set(18, 0, 0);
const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      })
renderer.setSize(window.innerWidth, window.innerHeight);

planet.appendChild(renderer.domElement);


const controls = new OrbitControls(camera, renderer.domElement);

var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;

function onWindowResize() {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'resize', onWindowResize );

const loadingManager = new THREE.LoadingManager( () => {
	
        const loadingScreen = document.getElementById( 'loading-screen' );
        loadingScreen.classList.add( 'fade-out' );
        
        loadingScreen.addEventListener('transitionend', (e) => {
                e.target.remove();
              });
} );

const loader = new THREE.TextureLoader(loadingManager);
loader.load('../images/background.png' , function(texture)
            {
             scene.background = texture;  
            });

const earthTexture = loader.load("../images/ziemia.png");
const earthGeometry = new THREE.SphereGeometry(1, 40, 40);
const earthMaterial = new THREE.MeshBasicMaterial({
  map: earthTexture
})

const cloudTexture = loader.load("../images/chmury.png");
const cloudGeometry = new THREE.SphereGeometry(1.01, 40, 40);
const cloudMaterial = new THREE.MeshBasicMaterial({
  map: cloudTexture,
  transparent: true
});
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(clouds);
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const animate = function () {
        renderer.autoClear = false;
        renderer.clear();

	requestAnimationFrame( animate );
        earth.rotation.y += 0.0005
              
        clouds.rotation.y -= 0.001
	renderer.render( scene, camera );
}

if ( WEBGL.isWebGLAvailable() ) {
        console.log("WEBGL loaded");

	animate();

} else {
        console.log("WEBGL error");

	const warning = WEBGL.getWebGLErrorMessage();
	document.getElementById( 'planet' ).appendChild( warning );

}