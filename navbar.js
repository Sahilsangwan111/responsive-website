class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                nav {
                    background-color: rgba(15, 23, 42, 0.9);
                    backdrop-filter: blur(10px);
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                    border-bottom: 1px solid rgba(13, 148, 136, 0.2);
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: rgb(13, 148, 136);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .nav-link {
                    color: white;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }
                
                .nav-link:hover {
                    color: rgb(13, 148, 136);
                }
                
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: rgb(13, 148, 136);
                    transition: width 0.3s ease;
                }
                
                .nav-link:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        position: fixed;
                        top: 70px;
                        left: 0;
                        width: 100%;
                        background-color: rgba(15, 23, 42, 0.95);
                        flex-direction: column;
                        align-items: center;
                        padding: 1rem 0;
                        gap: 1rem;
                        transform: translateY(-150%);
                        transition: transform 0.3s ease;
                    }
                    
                    .nav-links.active {
                        transform: translateY(0);
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            
            <nav>
                <div class="nav-container">
                    <a href="/" class="logo">
                        <i data-feather="heart"></i>
                        Sangwan Medical
                    </a>
                    
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                    
                    <div class="nav-links">
                    <a href="/" class="nav-link">Home</a>
                    <a href="/services.html" class="nav-link">Services</a>
                    <a href="/about-contact.html" class="nav-link">About & Contact</a>
</div>
                </div>
            </nav>
        `;
        
        // Initialize feather icons
        feather.replace();
        
        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);