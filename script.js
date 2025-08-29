
        document.addEventListener('DOMContentLoaded', function() {
            // Login form submission
            document.getElementById('loginForm').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                // Simple validation
                if (email && password) {
                    // Hide main page and show dashboard
                    document.getElementById('mainPage').style.display = 'none';
                    document.getElementById('dashboardPage').style.display = 'block';
                }
            });
            
            // Logout functionality
            document.getElementById('logoutBtn').addEventListener('click', function(e) {
                e.preventDefault();
                
                // Hide dashboard and show main page
                document.getElementById('dashboardPage').style.display = 'none';
                document.getElementById('mainPage').style.display = 'block';
            });
            
            // Dashboard navigation
            const navLinks = document.querySelectorAll('.sidebar .nav-link');
            const sections = document.querySelectorAll('.dashboard-section');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    navLinks.forEach(navLink => {
                        navLink.classList.remove('active');
                    });
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Hide all sections
                    sections.forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // Show the selected section
                    const sectionId = this.getAttribute('data-section');
                    document.getElementById(sectionId).classList.add('active');
                    
                    // Update header title
                    const headerTitle = document.querySelector('.dashboard-header h4');
                    headerTitle.textContent = this.textContent.trim();
                });
            });
            
            // Automatic background image rotation
            const heroSection = document.getElementById('hero');
            const backgroundImages = [
                'https://images.unsplash.com/photo-1527153818091-1a9638521e2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1559715548-51d0d15c9fe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1592564630984-741a6dd90b5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
            ];
            
            let currentBgIndex = 0;
            
            // Function to change background
            function changeBackground() {
                heroSection.style.backgroundImage = `linear-gradient(rgba(44, 62, 80, 0.85), rgba(44, 62, 80, 0.9)), url('${backgroundImages[currentBgIndex]}')`;
                
                // Increment index or reset to 0 if at the end
                currentBgIndex = (currentBgIndex + 1) % backgroundImages.length;
            }
            
            // Change background immediately on page load
            changeBackground();
            
            // Set interval to change background every 5 seconds
            setInterval(changeBackground, 5000);
        });
