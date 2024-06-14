document.addEventListener('DOMContentLoaded', () => {
    const popularContainer = document.getElementById('popular-items');
    const trendingContainer = document.getElementById('trending-items');
    const searchInput = document.getElementById('search-input');
    const tabs = document.querySelectorAll('.tabs .tab');

    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            displayItems(data.popularItems, popularContainer);
            displayItems(data.trendingItems, trendingContainer);
        });

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    searchInput.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        document.querySelectorAll('.pat-item').forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            const description = item.getAttribute('data-description').toLowerCase();
            if (title.includes(searchValue) || description.includes(searchValue)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    function displayItems(items, container) {
        container.innerHTML = '';
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('pat-item');
            itemDiv.setAttribute('data-title', item.title);
            itemDiv.setAttribute('data-description', item.description);
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            container.appendChild(itemDiv);
        });
    }
});
