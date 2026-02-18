import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- State ---
const state = {
    cart: [],
    products: [
        { id: 1, name: 'Midnight Fountain Pen', category: 'Pens', price: 10999, image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?q=80&w=300&auto=format&fit=crop' },
        { id: 2, name: 'Handcrafted Ledger', category: 'Notebooks', price: 3999, image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=300&auto=format&fit=crop' },
        { id: 3, name: 'Imperial Gold Planner', category: 'Planners', price: 5499, image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=300&auto=format&fit=crop' },
        { id: 4, name: 'Technical Drawing Set', category: 'Pens', price: 2999, image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=300&auto=format&fit=crop' },
        { id: 5, name: 'Sable Black Ink Set', category: 'Accessories', price: 7599, image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=300&auto=format&fit=crop' },
        { id: 6, name: 'Artisan Sketchbook', category: 'Notebooks', price: 4699, image: 'https://images.unsplash.com/photo-1517842644237-488353e5de3f?q=80&w=300&auto=format&fit=crop' },
        { id: 7, name: 'Vintage Paper Pack', category: 'Paper', price: 2199, image: 'https://images.unsplash.com/photo-1586075010640-08f33b1e8e81?q=80&w=300&auto=format&fit=crop' },
        { id: 8, name: 'Brass Weight Set', category: 'Accessories', price: 3599, image: 'https://images.unsplash.com/photo-1516962080544-eac695c93791?q=80&w=300&auto=format&fit=crop' },
        { id: 9, name: 'Silver Nib Calligraphy Pen', category: 'Pens', price: 8499, image: 'https://images.unsplash.com/photo-1511108690759-001dd2bf95a0?q=80&w=300&auto=format&fit=crop' },
        { id: 10, name: 'Cerulean Velvet Journal', category: 'Notebooks', price: 5999, image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=300&auto=format&fit=crop' },
        { id: 11, name: 'Antique Copper Ruler', category: 'Accessories', price: 2499, image: 'https://images.unsplash.com/photo-1582213782179-e0d01842bda0?q=80&w=300&auto=format&fit=crop' },
        { id: 12, name: 'Premium Parchment Roll', category: 'Paper', price: 3299, image: 'https://images.unsplash.com/photo-1594235836831-29177a5ea2eb?q=80&w=300&auto=format&fit=crop' },
        { id: 13, name: 'Executive Walnut Desk Set', category: 'Accessories', price: 15999, image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=300&auto=format&fit=crop' },
        { id: 14, name: 'Glass Dip Pen Set', category: 'Pens', price: 6299, image: 'https://images.unsplash.com/photo-1576722216692-75d3159045b4?q=80&w=300&auto=format&fit=crop' },
        { id: 15, name: 'Minimalist Grid Notebook', category: 'Notebooks', price: 1899, image: 'https://images.unsplash.com/photo-1527866959252-deab83ef0d09?q=80&w=300&auto=format&fit=crop' },
        { id: 16, name: 'Golden Quill & Inkstand', category: 'Pens', price: 12499, image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=300&auto=format&fit=crop' },
        { id: 17, name: 'Architects Canvas Bag', category: 'Accessories', price: 4599, image: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=300&auto=format&fit=crop' },
        { id: 18, name: 'Emerald Velvet Planner', category: 'Planners', price: 7299, image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=300&auto=format&fit=crop' },
        { id: 19, name: 'Precision Graphite Kit', category: 'Pens', price: 3899, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=300&auto=format&fit=crop' },
        { id: 20, name: 'Recycled Fiber Notecards', category: 'Paper', price: 1599, image: 'https://images.unsplash.com/photo-1586075010640-08f33b1e8e81?q=80&w=300&auto=format&fit=crop' },
        { id: 21, name: 'Slate Gray Fineliners', category: 'Pens', price: 2199, image: 'https://images.unsplash.com/photo-1518128485934-30de6da55627?q=80&w=300&auto=format&fit=crop' },
        { id: 22, name: 'Hand-sewn Travel Journal', category: 'Notebooks', price: 4299, image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=300&auto=format&fit=crop' },
        { id: 23, name: 'Brass Compass Divider', category: 'Accessories', price: 5499, image: 'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=300&auto=format&fit=crop' },
        { id: 24, name: 'Classic Azure Ballpoint', category: 'Pens', price: 499, image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=300&auto=format&fit=crop' },
        { id: 25, name: 'Sovereign Onyx Fountain', category: 'Pens', price: 14599, image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=300&auto=format&fit=crop' },
        { id: 26, name: 'Royal Blue Executive', category: 'Pens', price: 6899, image: 'https://images.unsplash.com/photo-1565104445350-01053187ca0b?q=80&w=300&auto=format&fit=crop' },
        { id: 27, name: 'Noir Prestige Rollerball', category: 'Pens', price: 9299, image: 'https://images.unsplash.com/photo-1511108690759-001dd2bf95a0?q=80&w=300&auto=format&fit=crop' },
        { id: 28, name: 'Precision Cobalt Marker', category: 'Pens', price: 1299, image: 'https://images.unsplash.com/photo-1516962295816-dcad4ed9f2e4?q=80&w=300&auto=format&fit=crop' },
    ]
};

// --- Three.js Setup ---
let scene, camera, renderer, pen;

function init3D() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#canvas3d'),
        alpha: true,
        antialias: false, // Turned off for performance boost
        powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 15);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create a 3D Pen Placeholder (Cylinder + Cone)
    const penGroup = new THREE.Group();

    // Body
    const bodyGeom = new THREE.CylinderGeometry(0.1, 0.1, 3, 32);
    const bodyMat = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.8,
        roughness: 0.2
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    penGroup.add(body);

    // Tip
    const tipGeom = new THREE.ConeGeometry(0.1, 0.4, 32);
    const tipMat = new THREE.MeshStandardMaterial({
        color: 0xc9a86a,
        metalness: 0.9,
        roughness: 0.1
    });
    const tip = new THREE.Mesh(tipGeom, tipMat);
    tip.position.y = 1.7;
    penGroup.add(tip);

    // Small Nib
    const nibGeom = new THREE.ConeGeometry(0.02, 0.1, 32);
    const nibMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
    const nib = new THREE.Mesh(nibGeom, nibMat);
    nib.position.y = 1.9;
    penGroup.add(nib);

    // Accent Ring 1
    const ringGeom = new THREE.TorusGeometry(0.105, 0.01, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0xc9a86a, metalness: 1 });
    const ring1 = new THREE.Mesh(ringGeom, ringMat);
    ring1.rotation.x = Math.PI / 2;
    ring1.position.y = 1.4;
    penGroup.add(ring1);

    // Accent Ring 2
    const ring2 = ring1.clone();
    ring2.position.y = -1.4;
    penGroup.add(ring2);

    // Cap Clip
    const clipGeom = new THREE.BoxGeometry(0.05, 0.8, 0.2);
    const clipMat = new THREE.MeshStandardMaterial({ color: 0xc9a86a, metalness: 1 });
    const clip = new THREE.Mesh(clipGeom, clipMat);
    clip.position.set(0.12, -0.8, 0);
    penGroup.add(clip);

    pen = penGroup;
    pen.rotation.z = -Math.PI / 4;
    pen.position.x = 2; // Offset to the right
    scene.add(pen);

    // Animation Loop
    // Create a 3D Ink Bottle
    const bottleGroup = new THREE.Group();
    const bottleBaseGeom = new THREE.BoxGeometry(0.8, 1, 0.8);
    const bottleBaseMat = new THREE.MeshStandardMaterial({ color: 0x050505, transparent: true, opacity: 0.8 });
    const bottleBase = new THREE.Mesh(bottleBaseGeom, bottleBaseMat);
    bottleGroup.add(bottleBase);
    const bottleCapGeom = new THREE.CylinderGeometry(0.3, 0.3, 0.3, 32);
    const bottleCapMat = new THREE.MeshStandardMaterial({ color: 0xc9a86a, metalness: 1 });
    const bottleCap = new THREE.Mesh(bottleCapGeom, bottleCapMat);
    bottleCap.position.y = 0.6;
    bottleGroup.add(bottleCap);
    bottleGroup.position.set(-2, 0, -1);
    scene.add(bottleGroup);

    // Mouse Interaction State
    let targetMouseX = 0, targetMouseY = 0;
    let currentMouseX = 0, currentMouseY = 0;

    // Mouse Point Light
    const mousePointLight = new THREE.PointLight(0xc9a86a, 25, 12);
    scene.add(mousePointLight);

    window.addEventListener('mousemove', (e) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    // Floating Particles
    const particlesGeom = new THREE.BufferGeometry();
    const particlesCount = 400; // Slightly reduced for performance
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({ size: 0.02, color: 0xc9a86a, transparent: true, opacity: 0.5 });
    const particles = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particles);

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        // Smoothly interpolate mouse position
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;

        // Update Camera based on mouse
        camera.position.x = currentMouseX * 0.5;
        camera.position.y = -currentMouseY * 0.5;
        camera.lookAt(0, 0, 0);

        if (pen) {
            pen.rotation.y += 0.005;
            pen.position.y = Math.sin(Date.now() * 0.001) * 0.2;
            // Mouse tilt for pen
            pen.rotation.x = currentMouseY * 0.2;
            pen.rotation.z = -Math.PI / 4 + currentMouseX * 0.2;
        }

        if (bottleGroup) {
            bottleGroup.rotation.y -= 0.003;
            bottleGroup.position.y = Math.cos(Date.now() * 0.001) * 0.1;
        }

        if (particles) {
            particles.rotation.y += 0.001;
        }

        // Update Mouse Light
        if (mousePointLight) {
            mousePointLight.position.set(currentMouseX * 5, -currentMouseY * 5, 2);
        }

        renderer.render(scene, camera);
    }
    animate();

    // Resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }, { passive: true });
}

// --- UI Logic ---
function initUI() {
    const productGrid = document.getElementById('product-grid');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartBtn = document.getElementById('cart-btn');
    const closeCart = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalAmount = document.getElementById('total-amount');

    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderProducts(filter = 'All') {
        productGrid.innerHTML = '';
        const filtered = filter === 'All' ? state.products : state.products.filter(p => p.category === filter);

        filtered.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.category}</p>
                    <div class="product-footer">
                        <span class="price">₹${product.price.toLocaleString('en-IN')}</span>
                        <button class="add-btn" data-id="${product.id}">
                            <i data-lucide="plus"></i>
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);

            // Hover Tilt Effect
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(card, { rotationY: x * 15, rotationX: -y * 15, transformPerspective: 1000, duration: 0.5, ease: "power2.out" });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5, ease: "power2.out" });
            });
        });
        lucide.createIcons();
    }

    renderProducts();

    filterBtns.forEach(btn => {
        btn.onclick = () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.textContent);
        };
    });

    // Cart Handlers
    cartBtn.onclick = () => cartSidebar.classList.add('open');
    closeCart.onclick = () => cartSidebar.classList.remove('open');

    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.onclick = () => {
        if (state.cart.length === 0) return;

        checkoutBtn.textContent = "Processing...";
        checkoutBtn.disabled = true;

        setTimeout(() => {
            alert("Thank you for your order! Your aura has been elevated.");
            state.cart = [];
            updateCartUI();
            cartSidebar.classList.remove('open');
            checkoutBtn.textContent = "Checkout";
            checkoutBtn.disabled = false;
        }, 2000);
    };

    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-btn')) {
            const id = parseInt(e.target.closest('.add-btn').dataset.id);
            const product = state.products.find(p => p.id === id);
            addToCart(product);
        }
        if (e.target.closest('.remove-item')) {
            const index = parseInt(e.target.closest('.remove-item').dataset.index);
            removeFromCart(index);
        }
    });

    function addToCart(product) {
        state.cart.push(product);
        updateCartUI();

        // Button feedback
        const btn = document.querySelector(`.add-btn[data-id="${product.id}"]`);
        gsap.to(btn, { scale: 1.2, duration: 0.1, yoyo: true, repeat: 1 });
    }

    function removeFromCart(index) {
        state.cart.splice(index, 1);
        updateCartUI();
    }

    function updateCartUI() {
        cartCount.textContent = state.cart.length;

        if (state.cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart-msg">Your bag is empty</div>';
            totalAmount.textContent = '₹0';
            return;
        }

        cartItemsContainer.innerHTML = state.cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-img"><img src="${item.image}"></div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="price">₹${item.price.toLocaleString('en-IN')}</span>
                    <button class="remove-item" data-index="${index}">Remove</button>
                </div>
            </div>
        `).join('');

        const total = state.cart.reduce((sum, item) => sum + item.price, 0);
        totalAmount.textContent = `₹${total.toLocaleString('en-IN')}`;
    }

    // Scroll Effects
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    // Move pen on scroll
    gsap.to(pen.position, {
        scrollTrigger: {
            trigger: "#shop",
            start: "top bottom",
            end: "top top",
            scrub: 1
        },
        x: -2,
        y: -1,
        z: -2,
        duration: 1
    });

    gsap.to(pen.rotation, {
        scrollTrigger: {
            trigger: "#shop",
            start: "top bottom",
            end: "top top",
            scrub: 1
        },
        x: Math.PI / 2,
        y: Math.PI / 4,
        duration: 1
    });

    gsap.to(bottleGroup.position, {
        scrollTrigger: {
            trigger: "#shop",
            start: "top bottom",
            end: "top top",
            scrub: 1
        },
        x: 2,
        y: -2,
        duration: 1
    });

    // Reveal Products
    gsap.from(".product-card", {
        scrollTrigger: {
            trigger: ".product-grid",
            start: "top 80%"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out"
    });

    // Reveal About
    gsap.from(".about-section .reveal-up", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Custom Cursor & Trail
    const cursor = document.getElementById('cursor');
    let lastX = 0, lastY = 0;

    document.addEventListener('mousemove', (e) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1
        });

        // Create trail dot if moved enough
        const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
        if (dist > 25) {
            createTrailDot(e.clientX, e.clientY);
            lastX = e.clientX;
            lastY = e.clientY;
        }
    });

    function createTrailDot(x, y) {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        document.body.appendChild(dot);

        gsap.to(dot, {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => dot.remove()
        });
    }

    document.addEventListener('mousedown', () => gsap.to(cursor, { scale: 1.5, duration: 0.1 }));
    document.addEventListener('mouseup', () => gsap.to(cursor, { scale: 1, duration: 0.1 }));

    // Cursor Hover Effect
    const hoverables = document.querySelectorAll('a, button, .product-card, .filter-btn');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => gsap.to(cursor, { scale: 2.5, duration: 0.3 }));
        el.addEventListener('mouseleave', () => gsap.to(cursor, { scale: 1, duration: 0.3 }));
    });

    // Reveal Contact
    gsap.from(".contact-section .reveal-up", {
        scrollTrigger: {
            trigger: ".contact-section",
            start: "top 70%"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });

    // Back to Top
    const btt = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btt.classList.add('visible');
        } else {
            btt.classList.remove('visible');
        }
    }, { passive: true });

    btt.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- Lifecycle ---
window.addEventListener('load', () => {
    // Fake loading progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        document.querySelector('.progress').style.width = progress + '%';

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('loader').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('loader').style.display = 'none';
                    init3D();
                    initUI();
                }, 1000);
            }, 500);
        }
    }, 100);
});
