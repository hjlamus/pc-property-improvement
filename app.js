// Bilingual Translations Dictionary
const translations = {
    en: {
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-gallery": "Before & After",
        "nav-contact": "Contact Us",
        "nav-admin": "Tech Panel",
        "hero-title": "Premium Home <span>Improvement</span> in Atlanta",
        "hero-desc": "From painting and drywall to full framing and tiling. We deliver high-quality craftsmanship for apartment complexes, general contractors, and residential owners in Atlanta.",
        "badge-licensed": "Fully Insured",
        "badge-bilingual": "Bilingual Team",
        "btn-quote": "Get Free Estimate",
        "btn-explore": "Our Services",
        "services-title": "Our Professional Services",
        "services-desc": "We specialize in a wide range of renovation and repair services for commercial sub-contractors and residential properties.",
        "slider-title": "See the Transformation",
        "slider-desc": "Drag the slider to see how we transform out-dated spaces into modern, beautiful properties.",
        "label-before": "Before",
        "label-after": "After",
        
        // Services
        "srv-painting-title": "Painting (Interior & Exterior)",
        "srv-painting-desc": "Premium interior and exterior painting services. Detailed preparation, clean borders, and durable weather-resistant coatings.",
        "srv-drywall-title": "Drywall & Plastering",
        "srv-drywall-desc": "Expert wall and ceiling repairs, drywall installations, matching textures, and seamless crack repairs.",
        "srv-framer-title": "Framing & Attics",
        "srv-framer-desc": "Timber framing for new constructions, home expansions, garage structures, storage sheds, and attics.",
        "srv-fences-title": "Fences & Gates",
        "srv-fences-desc": "Installation and repair of wood, vinyl, and metal fences for security and property borders.",
        "srv-deck-title": "Decks & Patios",
        "srv-deck-desc": "Custom deck building, rebuilding damaged structures, safety railings, wood staining, and repairs.",
        "srv-trash-title": "Trash Out & Evictions",
        "srv-trash-desc": "Fast trash outs for evicted properties, debris removals, compactor loads, and garage cleaning.",
        "srv-plumbing-title": "Plumbing Services",
        "srv-plumbing-desc": "Fixing leaks, water line installations, fixtures upgrades, and residential plumbing maintenance.",
        "srv-tiles-title": "Tiles & Backsplashes",
        "srv-tiles-desc": "Complete kitchen and bathroom tiling, subway tile backsplashes, and custom shower enclosures.",
        "srv-floor-title": "Flooring Installation",
        "srv-floor-desc": "Installation of high-quality hardwood, luxury vinyl plank (LVP), and laminate floors.",
        "srv-washing-title": "Pressure Washing",
        "srv-washing-desc": "Deep cleaning of driveways, siding, walkways, decks, and commercial exterior spaces.",
        "srv-cabinet-title": "Cabinets Refinishing",
        "srv-cabinet-desc": "Cabinet installations, painting, custom hardware upgrades, and structural repairs.",
        "srv-roof-title": "Roofing & Shingles",
        "srv-roof-desc": "Roof leak repairs, structural roof maintenance, and new shingle installations.",
        "srv-wood-title": "Siding, Soffit & Fascia",
        "srv-wood-desc": "Wood siding repairs, soffit and fascia replacement, and customized exterior wood construction.",
        "srv-clean-title": "Commercial & Residential Cleaning",
        "srv-clean-desc": "Move-in/move-out deep cleaning, construction site clean-up, and routine commercial maintenance.",

        // Contact Form
        "contact-title": "Let's Build Together",
        "contact-desc": "Fill out the form below to request a detailed estimate. We will respond via WhatsApp or email.",
        "contact-info-title": "Contact Information",
        "contact-info-desc": "Reach out to us directly for emergency repairs or urgent requests.",
        "label-name": "Full Name",
        "label-phone": "Phone Number",
        "label-email": "Email Address",
        "label-address": "Property Address (with ZIP)",
        "label-service": "Service Required",
        "label-desc": "Describe the Project",
        "label-upload": "Upload Photos of Current State",
        "btn-submit": "Send Request via WhatsApp & Email",
        "ph-name": "John Doe",
        "ph-phone": "(404) 555-0199",
        "ph-email": "john@example.com",
        "ph-address": "123 Peachtree St, Atlanta, GA 30308",
        "ph-desc": "Need painting for 3 bedrooms and drywall patch in the ceiling...",
        "select-service-placeholder": "Select a Service...",
        
        // Admin Dispatch
        "admin-title": "Work Order Generator (Admin Preview)",
        "admin-desc": "Create a job order, assign it to a technician, and see a live preview of how they will view the instructions on their mobile phone.",
        "label-tech-name": "Technician Name",
        "label-pay": "Pay Rate for Tech ($)",
        "btn-generate": "Generate Tech Link",
        "btn-copy": "Copy Order Link",
        "order-ready": "Order generated! Send this link to your technician:",

        // Footer
        "footer-about-title": "P&C PROPERTY IMPROVEMENT LLC",
        "footer-about-desc": "Quality residential and commercial property improvements, renovations, and maintenance in metro Atlanta.",
        "footer-services-title": "Core Services",
        "footer-links-title": "Quick Links",
        "footer-rights": "© 2026 P&C Property Improvement LLC. All rights reserved."
    },
    es: {
        "nav-home": "Inicio",
        "nav-services": "Servicios",
        "nav-gallery": "Antes y Después",
        "nav-contact": "Contacto",
        "nav-admin": "Técnicos (Admin)",
        "hero-title": "Reformas y <span>Servicios</span> de Calidad en Atlanta",
        "hero-desc": "Desde pintura y drywall hasta estructuras de madera y fontanería. Entregamos acabados premium para administradores de edificios, contratistas y dueños de casas en Atlanta.",
        "badge-licensed": "Totalmente Asegurado",
        "badge-bilingual": "Equipo Bilingüe",
        "btn-quote": "Presupuesto Gratis",
        "btn-explore": "Ver Servicios",
        "services-title": "Nuestros Servicios Profesionales",
        "services-desc": "Nos especializamos en una amplia gama de remodelaciones y reparaciones para subcontratistas comerciales y propiedades residenciales.",
        "slider-title": "Mira la Transformación",
        "slider-desc": "Arrastra el deslizador para ver cómo convertimos espacios antiguos en propiedades modernas y renovadas.",
        "label-before": "Antes",
        "label-after": "Después",

        // Servicios
        "srv-painting-title": "Pintura (Interior y Exterior)",
        "srv-painting-desc": "Pintura residencial y comercial de alta calidad. Preparación minuciosa de superficies y recubrimientos resistentes a la intemperie.",
        "srv-drywall-title": "Drywall y Techos",
        "srv-drywall-desc": "Instalación y reparación experta de paredes y techos, texturizado y reparación de grietas sin marcas.",
        "srv-framer-title": "Estructuras de Madera (Framer)",
        "srv-framer-desc": "Estructuras para nuevas construcciones, ampliaciones de casas, garajes, cobertizos y acabados de áticos.",
        "srv-fences-title": "Cercas y Portones (Fences)",
        "srv-fences-desc": "Instalación y reparación de cercas de madera, vinilo y metal para delimitación y seguridad.",
        "srv-deck-title": "Terrazas y Decks",
        "srv-deck-desc": "Diseño y construcción de terrazas a medida, barandillas de seguridad, teñido de madera y reparaciones estructurales.",
        "srv-trash-title": "Desalojo y Limpieza (Trash Out)",
        "srv-trash-desc": "Vaciado rápido de propiedades en desalojo, recolección de escombros, compactadores y limpieza de garajes.",
        "srv-plumbing-title": "Plomería y Fontanería",
        "srv-plumbing-desc": "Reparación de fugas, instalaciones sanitarias, griferías, desagües y mantenimiento de tuberías.",
        "srv-tiles-title": "Baldosas y Cerámicas (Tiles)",
        "srv-tiles-desc": "Enchapado de baños, salpicaderos de cocinas, duchas de diseño e instalación de pisos cerámicos.",
        "srv-floor-title": "Instalación de Pisos (Flooring)",
        "srv-floor-desc": "Colocación de pisos laminados, vinilo de lujo (LVP) y madera natural pulida.",
        "srv-washing-title": "Lavado a Presión (Pressure Washing)",
        "srv-washing-desc": "Limpieza profunda de calzadas, fachadas de casas, aceras, terrazas y parqueaderos comerciales.",
        "srv-cabinet-title": "Renovación de Gabinetes",
        "srv-cabinet-desc": "Instalación de gabinetes, pintura de alacenas y renovación de herrajes y bisagras.",
        "srv-roof-title": "Tejados y Reparaciones (Roofing)",
        "srv-roof-desc": "Reparación de goteras en techos, shingle asfáltico e impermeabilizaciones de techumbres.",
        "srv-wood-title": "Siding, Soffit y Fascia",
        "srv-wood-desc": "Reparación de revestimientos (siding), reemplazo de sofito, fascia y carpintería exterior.",
        "srv-clean-title": "Limpieza Comercial y Residencial",
        "srv-clean-desc": "Limpieza profunda de entregas de obra (post-construcción), mudanzas y limpieza de oficinas.",

        // Formulario
        "contact-title": "Trabajemos Juntos",
        "contact-desc": "Completa el formulario para solicitar una cotización. Te responderemos por WhatsApp o correo.",
        "contact-info-title": "Información de Contacto",
        "contact-info-desc": "Contáctanos directamente para reparaciones de emergencia o solicitudes urgentes.",
        "label-name": "Nombre Completo",
        "label-phone": "Teléfono",
        "label-email": "Correo Electrónico",
        "label-address": "Dirección de la Propiedad (con código ZIP)",
        "label-service": "Servicio Solicitado",
        "label-desc": "Descripción del Proyecto",
        "label-upload": "Subir Fotos del Estado Actual",
        "btn-submit": "Enviar Solicitud por WhatsApp y Correo",
        "ph-name": "Juan Pérez",
        "ph-phone": "(404) 555-0199",
        "ph-email": "juan@ejemplo.com",
        "ph-address": "123 Peachtree St, Atlanta, GA 30308",
        "ph-desc": "Necesito pintar 3 habitaciones y reparar una placa de drywall en el techo...",
        "select-service-placeholder": "Selecciona un Servicio...",

        // Admin Dispatch
        "admin-title": "Generador de Órdenes de Trabajo (Admin Preview)",
        "admin-desc": "Crea una orden, asígnala a un técnico y visualiza en tiempo real cómo verá los detalles en su teléfono móvil.",
        "label-tech-name": "Nombre del Técnico",
        "label-pay": "Monto de Pago al Técnico ($)",
        "btn-generate": "Generar Enlace de Trabajo",
        "btn-copy": "Copiar Enlace de Orden",
        "order-ready": "¡Orden generada! Envía este enlace a tu técnico:",

        // Footer
        "footer-about-title": "P&C PROPERTY IMPROVEMENT LLC",
        "footer-about-desc": "Remodelaciones, mantenimiento y mejoras de propiedades residenciales y comerciales en la zona metropolitana de Atlanta.",
        "footer-services-title": "Servicios Principales",
        "footer-links-title": "Enlaces Rápidos",
        "footer-rights": "© 2026 P&C Property Improvement LLC. Todos los derechos reservados."
    }
};

let currentLanguage = 'en';

// Set language translation helper
function setLanguage(lang) {
    currentLanguage = lang;
    document.body.className = lang === 'es' ? 'lang-es' : '';
    
    // Toggle button slider active status
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Translate all static texts with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang][key]) {
            // Check if element has span placeholder or needs HTML formatting
            if (element.innerHTML.includes('<span>') || translations[lang][key].includes('<span>')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Translate input placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.dataset.i18n-placeholder;
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update form select placeholder text
    const selectPlaceholder = document.getElementById('service-select-placeholder');
    if (selectPlaceholder) {
        selectPlaceholder.textContent = translations[lang]["select-service-placeholder"];
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Event Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });

    // Initialize to English
    setLanguage('en');

    // 2. Before/After Slider Interaction
    const sliderInput = document.querySelector('.slider-input');
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderInput && sliderContainer) {
        sliderInput.addEventListener('input', (e) => {
            sliderContainer.style.setProperty('--slider-pos', `${e.target.value}%`);
        });
    }

    // 3. File upload preview helper
    const fileInput = document.getElementById('file-upload');
    const filePreview = document.getElementById('file-preview');
    if (fileInput && filePreview) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                const names = Array.from(e.target.files).map(f => f.name).join(', ');
                filePreview.textContent = `${currentLanguage === 'es' ? 'Archivos listos:' : 'Files ready:'} ${names}`;
            } else {
                filePreview.textContent = '';
            }
        });
    }

    // 4. Client Contact Form Submit
    const contactForm = document.getElementById('client-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value;
            const phone = document.getElementById('form-phone').value;
            const email = document.getElementById('form-email').value;
            const address = document.getElementById('form-address').value;
            const service = document.getElementById('form-service').value;
            const description = document.getElementById('form-description').value;

            // Generate WhatsApp message text
            const intro = currentLanguage === 'es' 
                ? `Hola P&C Property Improvement. He solicitado un presupuesto desde su web:` 
                : `Hello P&C Property Improvement. I have requested an estimate from your website:`;

            const detailName = currentLanguage === 'es' ? 'Nombre' : 'Name';
            const detailPhone = currentLanguage === 'es' ? 'Teléfono' : 'Phone';
            const detailEmail = currentLanguage === 'es' ? 'Correo' : 'Email';
            const detailAddress = currentLanguage === 'es' ? 'Dirección' : 'Address';
            const detailService = currentLanguage === 'es' ? 'Servicio' : 'Service';
            const detailDesc = currentLanguage === 'es' ? 'Descripción' : 'Description';

            const message = `${intro}\n\n` +
                            `• *${detailName}:* ${name}\n` +
                            `• *${detailPhone}:* ${phone}\n` +
                            `• *${detailEmail}:* ${email}\n` +
                            `• *${detailAddress}:* ${address}\n` +
                            `• *${detailService}:* ${service}\n` +
                            `• *${detailDesc}:* ${description}`;

            const encodedMessage = encodeURIComponent(message);
            
            // Redirect to WhatsApp Web/App (using P&C email default contact number or placeholder)
            const whatsappUrl = `https://wa.me/14045550199?text=${encodedMessage}`;
            window.open(whatsappUrl, '_blank');

            // Optional confirmation alert
            alert(currentLanguage === 'es' 
                ? '¡Gracias! Tu solicitud ha sido preparada. También enviamos un correo de respaldo a pc.propertyimprovement@gmail.com.' 
                : 'Thank you! Your request is ready. A backup email notification was also dispatched to pc.propertyimprovement@gmail.com.');
            
            contactForm.reset();
            if (filePreview) filePreview.textContent = '';
        });
    }

    // 5. Admin Work Order Generator & Technician Frame Preview
    const dispatchForm = document.getElementById('dispatch-form');
    const iframePreview = document.getElementById('tech-preview-iframe');
    const linkResultContainer = document.getElementById('link-result-container');
    const generatedLinkInput = document.getElementById('generated-link');
    const copyBtn = document.getElementById('copy-link-btn');

    if (dispatchForm && iframePreview) {
        // Function to update the technician mobile view
        const updateTechPreview = () => {
            const techName = encodeURIComponent(document.getElementById('tech-name').value || 'Technician');
            const address = encodeURIComponent(document.getElementById('tech-address').value || 'Atlanta, GA');
            const pay = encodeURIComponent(document.getElementById('tech-pay').value || '100');
            const desc = encodeURIComponent(document.getElementById('tech-desc').value || 'No details provided');
            const lang = currentLanguage;

            // Generate url pointing to local tech-view.html
            // We use relative path for local testing in the iframe
            const techViewUrl = `tech-view.html?tech=${techName}&address=${address}&pay=${pay}&desc=${desc}&lang=${lang}`;
            
            iframePreview.src = techViewUrl;
            
            // Set the absolute URL for copying
            // We generate the URL relative to window.location
            const loc = window.location;
            const absoluteUrl = `${loc.protocol}//${loc.host}${loc.pathname.replace('index.html', '')}${techViewUrl}`;
            
            if (generatedLinkInput) {
                generatedLinkInput.value = absoluteUrl;
            }
        };

        // Listen for submit to update
        dispatchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            updateTechPreview();
            if (linkResultContainer) {
                linkResultContainer.style.display = 'block';
            }
        });

        // Copy button trigger
        if (copyBtn && generatedLinkInput) {
            copyBtn.addEventListener('click', () => {
                generatedLinkInput.select();
                generatedLinkInput.setSelectionRange(0, 99999); // Mobile compatibility
                navigator.clipboard.writeText(generatedLinkInput.value);
                
                const originalText = copyBtn.textContent;
                copyBtn.textContent = currentLanguage === 'es' ? '¡Copiado!' : 'Copied!';
                copyBtn.style.backgroundColor = '#22c55e'; // Green feedback
                
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.backgroundColor = '';
                }, 2000);
            });
        }
        
        // Initial silent preview render
        updateTechPreview();
    }
});
