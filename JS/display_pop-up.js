document.addEventListener('DOMContentLoaded', () => {
    const applicationsIcon = document.querySelector('#applications-icon');

    applicationsIcon.addEventListener('click', (event) => {
        event.preventDefault();
        showPopup();
    });

    function showPopup() {
        // Create the popup overlay
        const overlay = document.createElement('div');
        overlay.classList.add('fixed', 'inset-0', 'bg-gray-800', 'bg-opacity-75', 'flex', 'items-center', 'justify-center');
        overlay.id = 'popup-overlay';

        // Create the popup container
        const popup = document.createElement('div');
        popup.classList.add('bg-white', 'rounded-lg', 'overflow-hidden', 'shadow-xl', 'transform', 'transition-all', 'max-w-lg', 'w-full');
        popup.innerHTML = `
            <div class="p-6">
                <h2 class="text-2xl font-semibold mb-4">Applications Google</h2>
                <div class="grid grid-cols-3 gap-4">
                    <div class="flex flex-col items-center">
                        <i class="fab fa-google-drive fa-3x text-blue-600 mb-2"></i>
                        <span class="text-sm">Drive</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-envelope fa-3x text-red-600 mb-2"></i>
                        <span class="text-sm">Gmail</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fab fa-youtube fa-3x text-red-600 mb-2"></i>
                        <span class="text-sm">YouTube</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-map-marker-alt fa-3x text-green-600 mb-2"></i>
                        <span class="text-sm">Maps</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-calendar-alt fa-3x text-blue-600 mb-2"></i>
                        <span class="text-sm">Agenda</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-search fa-3x text-gray-600 mb-2"></i>
                        <span class="text-sm">Recherche Avancée</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-file-alt fa-3x text-blue-600 mb-2"></i>
                        <span class="text-sm">Docs</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-chart-line fa-3x text-green-600 mb-2"></i>
                        <span class="text-sm">Trends</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-newspaper fa-3x text-gray-600 mb-2"></i>
                        <span class="text-sm">Actualité</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-book fa-3x text-yellow-600 mb-2"></i>
                        <span class="text-sm">Livre</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-user fa-3x text-blue-600 mb-2"></i>
                        <span class="text-sm">Compte</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-address-book fa-3x text-green-600 mb-2"></i>
                        <span class="text-sm">Contacts</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-shopping-cart fa-3x text-yellow-600 mb-2"></i>
                        <span class="text-sm">Shopping</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-plane fa-3x text-blue-600 mb-2"></i>
                        <span class="text-sm">Voyages</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-globe fa-3x text-green-600 mb-2"></i>
                        <span class="text-sm">Earth</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-file-excel fa-3x text-green-600 mb-2"></i>
                        <span class="text-sm">Sheets</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <i class="fas fa-chart-pie fa-3x text-yellow-600 mb-2"></i>
                        <span class="text-sm">Finance</span>
                    </div>
                </div>
                <div class="mt-6 flex justify-end">
                    <button id="close-popup" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Close</button>
                </div>
            </div>
        `;

        // Append the popup to the overlay
        overlay.appendChild(popup);
        document.body.appendChild(overlay);

        // Add event listener to the close button
        const closeButton = document.querySelector('#close-popup');
        closeButton.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    }
});
