document.addEventListener('DOMContentLoaded', function() {
    // Your Three.js code here
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(1, 1, 1);
    const camera = new THREE.PerspectiveCamera(75, (window.innerWidth/2) / (window.innerHeight/2), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRoatate = true;
    controls.target = new THREE.Vector3(0, 1, 0);
    // controls.minPolarAngle = Math.PI / 4;
    // controls.maxPolarAngle = math.PI / 2;
    controls.maxDistance = 5;

    // Set camera position and update controls
    camera.position.set(0, 0, 3);
    controls.update();

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Load the GLTF model
    const loader = new THREE.GLTFLoader();
    loader.load(
        'redhead.glb', // URL to the model
        function (gltf) {
            // called when the resource is loaded
            scene.add(gltf.scene);
        },
        function (xhr) {
            // called while loading is progressing
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            // called when loading has errors
            console.error('An error happened', error);
        }
    );

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
});
