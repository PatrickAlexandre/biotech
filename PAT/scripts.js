document.addEventListener('DOMContentLoaded', () => {
    const popularContainer = document.getElementById('popular-items');
    const searchInput = document.getElementById('search-input');
    const tabs = document.querySelectorAll('.tabs .tab');
    const hamburger = document.getElementById('hamburger');
    const tabsContainer = document.getElementById('tabs');

    fetch('items.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayItems(data.popularItems, popularContainer);

            // Assign category items for filtering
            window.itemsByCategory = {
                'Rédaction': data.redactionItems,
                'Productivité': data.productivityItems,
                'Recherche et analyses': data.researchItems,
                'Éducation': data.educationItems,
                'Lifestyle': data.lifestyleItems,
                'Programmation': data.programmingItems,
                'Les plus populaires': data.popularItems
            };
        })
        .catch(error => {
            console.error('Error fetching items:', error);
        });

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterItems(this.textContent);

            // Close the menu if the screen width is less than or equal to 768px
            if (window.innerWidth <= 768) {
                tabsContainer.classList.remove('show');
            }
        });
    });

    searchInput.addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        document.querySelectorAll('.pat-item').forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            const description = item.getAttribute('data-description').toLowerCase();
            item.style.display = (title.includes(searchValue) || description.includes(searchValue)) ? 'block' : 'none';
        });
    });

    hamburger.addEventListener('click', () => {
        tabsContainer.classList.toggle('show');
    });

    function displayItems(items, container) {
        container.innerHTML = '';
        if (!items) return;

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
            if (item.url) {
                itemDiv.addEventListener('click', () => {
                    window.open(item.url, '_blank');
                });
            }
            container.appendChild(itemDiv);
        });
    }

    function filterItems(category) {
        const filteredItems = window.itemsByCategory[category] || [];
        displayItems(filteredItems, popularContainer);
    }
});
