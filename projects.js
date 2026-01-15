// Filtrado de proyectos
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const viewButtons = document.querySelectorAll('.project-view-btn');
    const projectModal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const modalClose = document.querySelector('.modal-close');
    
    // Datos de proyectos detallados
    const projectDetails = {
        1: {
            title: "Cocina Moderna en Condominio Vista Bella",
            category: "Cocinas",
            location: "Condominio Vista Bella, Zona Norte",
            duration: "4 semanas",
            description: "Transformación completa de una cocina anticuada en un espacio moderno y funcional. Se instaló una isla central con capacidad para 4 personas, electrodomésticos de última generación integrados y un sistema de iluminación LED inteligente.",
            features: ["Isla central con almacenamiento", "Electrodomésticos integrados", "Encimeras de cuarzo", "Iluminación LED inteligente", "Sistema de extracción silencioso"],
            beforeImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            afterImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        2: {
            title: "Baño Principal con Jacuzzi",
            category: "Baños",
            location: "Residencial Los Pinos",
            duration: "3 semanas",
            description: "Remodelación completa del baño principal para convertir un espacio funcional en un oasis de relajación. Se instaló un jacuzzi de esquina, ducha de lluvia con sistema de vapor y acabados en mármol travertino.",
            features: ["Jacuzzi de esquina", "Ducha de lluvia con vapor", "Acabados en mármol travertino", "Calefacción por piso radiante", "Muebles de baño a medida"],
            beforeImage: "https://images.unsplash.com/photo-1620625515037-4e8c6c86e0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            afterImage: "https://images.unsplash.com/photo-1620625515037-4e8c6c86e0a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        },
        3: {
            title: "Casa Familiar en Bosques del Sur",
            category: "Remodelaciones Completas",
            location: "Bosques del Sur",
            duration: "5 meses",
            description: "Remodelación integral de una vivienda de 2 pisos construida en los años 80. Se amplió el área social, se modernizaron todas las instalaciones y se rediseñó la fachada para un estilo contemporáneo.",
            features: ["Ampliación de área social", "Modernización de instalaciones", "Rediseño de fachada", "Sistema de energía solar", "Jardín vertical interior"],
            beforeImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80",
            afterImage: "https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80"
        },
        4: {
            title: "Sala de Estar Contemporánea",
            category: "Interiores",
            location: "Apartamento Centro Histórico",
            duration: "2 semanas",
            description: "Rediseño completo de una sala de estar en un apartamento del centro histórico. Se implementó iluminación inteligente, mobiliario a medida y un sistema de audio ambiente integrado en las paredes.",
            features: ["Iluminación inteligente controlada por app", "Mobiliario a medida", "Sistema de audio ambiente integrado", "Paredes con acabado texturizado", "Cortinas motorizadas"],
            beforeImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            afterImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        }
    };
    
    // Filtrado de proyectos
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Mostrar u ocultar proyectos según el filtro
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Abrir modal de proyecto detallado
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            const project = projectDetails[projectId];
            
            if (project) {
                modalBody.innerHTML = `
                    <div class="project-detail">
                        <h2>${project.title}</h2>
                        <div class="project-meta">
                            <p><strong>Categoría:</strong> ${project.category}</p>
                            <p><strong>Ubicación:</strong> ${project.location}</p>
                            <p><strong>Duración:</strong> ${project.duration}</p>
                        </div>
                        
                        <div class="project-images">
                            <div class="image-container">
                                <h3>Antes</h3>
                                <img src="${project.beforeImage}" alt="Antes">
                            </div>
                            <div class="image-container">
                                <h3>Después</h3>
                                <img src="${project.afterImage}" alt="Después">
                            </div>
                        </div>
                        
                        <div class="project-description">
                            <h3>Descripción del Proyecto</h3>
                            <p>${project.description}</p>
                        </div>
                        
                        <div class="project-features">
                            <h3>Características Principales</h3>
                            <ul>
                                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        
                        <div class="project-testimonial">
                            <h3>Testimonio del Cliente</h3>
                            <p>"Estamos encantados con el resultado. El equipo de Novart superó nuestras expectativas en cada aspecto del proyecto. La atención al detalle y la calidad de los acabados son excepcionales."</p>
                            <p><strong>- Cliente satisfecho</strong></p>
                        </div>
                    </div>
                `;
                
                projectModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Cerrar modal
    modalClose.addEventListener('click', function() {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && projectModal.style.display === 'block') {
            projectModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});