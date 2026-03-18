class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: rgb(15, 23, 42);
                    color: white;
                    padding: 3rem 2rem;
                    border-top: 1px solid rgba(13, 148, 136, 0.2);
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                }
                
                .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: rgb(13, 148, 136);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                }
                
                .footer-description {
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background-color: rgb(13, 148, 136);
                    transform: translateY(-3px);
                }
                
                .footer-heading {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                    color: rgb(13, 148, 136);
                }
                
                .footer-links {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                
                .footer-link {
                    color: rgba(255, 255, 255, 0.7);
                    transition: color 0.3s ease;
                }
                
                .footer-link:hover {
                    color: rgb(13, 148, 136);
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 3rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            
            <footer>
                <div class="footer-container">
                    <div class="footer-about">
                        <div class="footer-logo">
                            <i data-feather="heart"></i>
                            Sangwan Medical
                        </div>
                        <p class="footer-description">
                            Your trusted local medical store providing genuine medicines and healthcare products since 2005.
                        </p>
                        <div class="social-links">
                            <a href="#" class="social-link">
                                <i data-feather="facebook"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="instagram"></i>
                            </a>
                            <a href="#" class="social-link">
                                <i data-feather="twitter"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="footer-links-container">
                        <h3 class="footer-heading">Quick Links</h3>
                        <div class="footer-links">
                            <a href="#home" class="footer-link">Home</a>
                            <a href="#services" class="footer-link">Services</a>
                            <a href="#about" class="footer-link">About Us</a>
                            <a href="#contact" class="footer-link">Contact</a>
                        </div>
                    </div>
                    
                    <div class="footer-contact">
                        <h3 class="footer-heading">Contact Info</h3>
                        <div class="footer-links">
                            <div class="flex items-start gap-2">
                                <i data-feather="map-pin" class="w-4 h-4 mt-1 text-primary"></i>
                                <span>123 Medical Street, Near City Hospital, Delhi - 110092</span>
                            </div>
                            <div class="flex items-start gap-2">
                                <i data-feather="phone" class="w-4 h-4 mt-1 text-primary"></i>
                                <span>+91 98765 43210</span>
                            </div>
                            <div class="flex items-start gap-2">
                                <i data-feather="mail" class="w-4 h-4 mt-1 text-primary"></i>
                                <span>contact@sangwanmedical.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} Sangwan Medical Shop. All rights reserved.
                </div>
            </footer>
        `;
        
        // Initialize feather icons
        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);