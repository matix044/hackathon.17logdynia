import * as THREE from '../lib/three_module.js'
import {WEBGL} from '../lib/WEBGL.js'
import {OrbitControls} from '../lib/OrbitControls.js'
import {ScreenShake} from '../lib/ScreenShake.js'

var planet = document.getElementById('planet');

var screenShake = ScreenShake();



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, planet.clientWidth/ planet.clientHeight, 0.1, 60);

camera.position.set(4, 0, 0);
const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      })
renderer.setSize(planet.clientWidth, planet.clientHeight);
function shake(shake) {
        screenShake.shake( camera, new THREE.Vector3(0.2, 0, 0), shake );
}

planet.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

var windowHalfX = planet.clientWidth/ 2;
var windowHalfY = planet.clientHeight / 2;

function onWindowResize() {

        windowHalfX = planet.clientWidth/ 2;
        windowHalfY = planet.clientHeight / 2;

        camera.aspect = planet.clientWidth/ planet.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( planet.clientWidth, planet.clientHeight );
}
window.addEventListener( 'resize', onWindowResize );

const loading = new THREE.LoadingManager( () => {
	
        const loadingScreen = document.getElementById( 'loading-screen' );
        loadingScreen.classList.add( 'fade-out' );
        
        loadingScreen.addEventListener('transitionend', (e) => {
                e.target.remove();
              });
} );

const textureLoader = new THREE.TextureLoader(loading);
const earthTexture = textureLoader.load("../images/ziemia.png");
const earthGeometry = new THREE.SphereGeometry(1, 40, 40);
const earthMaterial = new THREE.MeshBasicMaterial({
  map: earthTexture
})

const cloudTexture = textureLoader.load("../images/chmury.png");
const cloudGeometry = new THREE.SphereGeometry(1.01, 40, 40);
const cloudMaterial = new THREE.MeshBasicMaterial({
  map: cloudTexture,
  transparent: true
});
const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(clouds);
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

//[0] - wariant niecałkowity, [1] - wariant całkowity
//normal jest taki sam w obu przypadkach dla zachowania ciągłości
const lazyTextureLoader = new THREE.TextureLoader();
const blank = undefined;
const planetVariants = {
        normal: ["../images/ziemia.png", "../images/ziemia.png"],
        nuclear: [ "../images/atomic/ziemia_po_wybuchach_ale_prawie.png",  "../images/atomic/ziemia_po_wybuchach.png"],
        frozen: [ "../images/frozen/ziemia_prawie_zamrozona.png",  "../images/frozen/ziemia_zamrozona.png"],
        dry: [ "../images/susza/ziemia_prawie_wysuszona.png",  "../images/susza/ziemia_wysuszona.png"],
        noforest: [ "../images/wylesienie/ziemia_prawie_wylesienie.png",  "../images/wylesienie/ziemia_wylesienie.png"],
        toxic: [ "../images/zanieczyszczenie/ziemia_prawie_zanieczyszczona.png",  "../images/zanieczyszczenie/ziemia_zanieczyszczona.png"],
        watery: [ "../images/zalana/ziemia_prawie_zalana.png",  "../images/zalana/ziemia_zalana.png"]
}
const cloudVariants = {
        normal: ["../images/chmury.png", "../images/chmury.png"],
        nuclear: [ "../images/atomic/chmurki_wybuch_atomowy_pomiedzy.png",  "../images/atomic/chmurki_wybuch_atomowy.png"],
        frozen: [blank, blank],
        dry: [blank, blank],
        noforest: ["../images/chmury.png", "../images/chmury.png"],
        toxic: [ "../images/zanieczyszczenie/Chmury_skazone_pomiedzy.png",  "../images/zanieczyszczenie/Chmury_skazone.png"],
        watery: [ "../images/zalana/Ziemia_zalana_pomiedzy.png",  "../images/zalana/Ziemia_zalana_chmury.png"]
}

export function changeTexture(type, isFullyDestroyed, noShake) {
        var destroyedState = isFullyDestroyed ? 1 : 0;
        
        if(typeof cloudVariants[type][0] == "undefined") {
                earthMaterial.map = lazyTextureLoader.load(planetVariants[type][destroyedState], function () {
                        if(!noShake) {shake(300 * (5-(destroyedState*4)/5))};
                        earthMaterial.map.needsUpdate = true;
                }); 
        } 
        if(typeof cloudVariants[type][0] == "string") {
                cloudMaterial.map = lazyTextureLoader.load(cloudVariants[type][destroyedState], function () {
                        cloudMaterial.map.needsUpdate = true;
                });
                earthMaterial.map = lazyTextureLoader.load(planetVariants[type][destroyedState], function () {
                        if(!noShake) {shake(300 * (5-(destroyedState*4)/5))};
                        earthMaterial.map.needsUpdate = true;
                });
        } else if(typeof cloudVariants[type][0] == "object") {
                cloudMaterial.map = cloudVariants[type][destroyedState];
                earthMaterial.map = planetVariants[type][destroyedState];
        }

}
var index = 0;
var types = ['normal', 'nuclear', 'frozen', 'dry', 'noforest', 'toxic', 'watery'];



if (window.location.href.indexOf("planet") > -1) {
        var earthCache = [];
        var cloudCache = [];
for(var i = 0; i < types.length; i++) {
        var t = types[i];
        if(typeof cloudVariants[t][1] != "undefined") {
        var c = lazyTextureLoader.load(cloudVariants[t][1]);
        cloudCache.push(c);
        }
        var e = lazyTextureLoader.load(planetVariants[t][1]);
        earthCache.push(e);
}
        
setInterval(() => {
        cloudMaterial.map = cloudCache[index];
        earthMaterial.map = earthCache[index];
        console.log("up!")
                if(index >= 6) {
                index = 0
                } else index++;
}, 800);
        
}

const stillCameraPosition = new THREE.Vector3(4, 0, 0);

const animate = function () {
        camera.position.lerp(stillCameraPosition, 0.2);
        
        renderer.autoClear = false;
        renderer.clear();

        screenShake.update(camera);

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