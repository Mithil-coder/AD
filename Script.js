// Navigation between algorithm list and detail pages
document.addEventListener('DOMContentLoaded', function() {
    const algorithmGrid = document.getElementById('algorithm-grid');
    const algorithmDetail = document.getElementById('algorithm-detail');
    const detailPages = document.querySelectorAll('.algorithm-detail-page');
    
    // View algorithm buttons
    const viewButtons = document.querySelectorAll('.view-algorithm');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            
            // Hide all detail pages
            detailPages.forEach(page => {
                page.style.display = 'none';
            });
            
            // Show the selected detail page
            document.getElementById(target).style.display = 'block';
            
            // Hide grid, show detail
            algorithmGrid.style.display = 'none';
            algorithmDetail.style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // Back buttons
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Hide detail, show grid
            algorithmDetail.style.display = 'none';
            algorithmGrid.style.display = 'grid';
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // Tab navigation
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const parent = this.parentElement;
            const tabContainer = parent.parentElement;
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all tabs in this container
            parent.querySelectorAll('.tab').forEach(t => {
                t.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab content in this container
            tabContainer.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the selected tab content
            tabContainer.querySelector(`#${tabName}`).classList.add('active');
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.algorithm-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const complexity = card.querySelector('.complexity').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm) || complexity.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
