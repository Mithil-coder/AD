document.addEventListener('DOMContentLoaded', function() {
    const algorithmGrid = document.getElementById('algorithm-grid');
    const algorithmDetail = document.getElementById('algorithm-detail');
    const detailPages = document.querySelectorAll('.algorithm-detail-page');
    const globalBackButton = document.createElement('button');

    // Style the back button
    globalBackButton.textContent = '← Back';
    globalBackButton.classList.add('global-back-btn');
    globalBackButton.style.position = 'fixed';
    globalBackButton.style.top = '10px';
    globalBackButton.style.left = '10px';
    globalBackButton.style.padding = '10px 15px';
    globalBackButton.style.background = '#007bff';
    globalBackButton.style.color = '#fff';
    globalBackButton.style.border = 'none';
    globalBackButton.style.cursor = 'pointer';
    globalBackButton.style.display = 'none'; // Initially hidden

    document.body.appendChild(globalBackButton);

    let lastView = null;

    // View algorithm buttons
    const viewButtons = document.querySelectorAll('.view-algorithm');
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            lastView = 'grid';
            const target = this.getAttribute('href').substring(1);

            detailPages.forEach(page => page.style.display = 'none');
            document.getElementById(target).style.display = 'block';

            algorithmGrid.style.display = 'none';
            algorithmDetail.style.display = 'block';

            globalBackButton.style.display = 'block';
            window.scrollTo(0, 0);
        });
    });

    // Back buttons within details
    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            goBack();
        });
    });

    // Tab navigation
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const parent = this.parentElement;
            const tabContainer = parent.parentElement;
            const tabName = this.getAttribute('data-tab');

            parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            tabContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
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

    // Global Back Button Functionality
    globalBackButton.addEventListener('click', function() {
        goBack();
    });

    function goBack() {
        if (lastView === 'grid') {
            algorithmDetail.style.display = 'none';
            algorithmGrid.style.display = 'grid';
        }
        globalBackButton.style.display = 'none';
        window.scrollTo(0, 0);
    }
});
