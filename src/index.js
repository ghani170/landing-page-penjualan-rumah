       document.getElementById('scrollproduk').addEventListener("click", function(e){ 
            e.preventDefault();
            document.getElementById('produk').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Services dropdown toggle
        const servicesDropdownButton = document.getElementById('services-dropdown-button');
        const servicesDropdown = document.getElementById('services-dropdown');
        
        servicesDropdownButton.addEventListener('click', () => {
            servicesDropdown.classList.toggle('hidden');
            const icon = servicesDropdownButton.querySelector('i');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
         // Gear dropdown toggle
        const gearDropdownButton = document.getElementById('gear-dropdown-button');
        const gearDropdown = document.getElementById('gear-dropdown');
        
        gearDropdownButton.addEventListener('click', (e) => {
            e.stopPropagation();
            gearDropdown.classList.toggle('hidden');
        });