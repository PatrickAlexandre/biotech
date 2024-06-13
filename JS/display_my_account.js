document.addEventListener('DOMContentLoaded', () => {
    // Simulated user data (Replace with actual data fetching logic)
    const userData = {
        username: 'John Doe',
        email: 'johndoe@example.com',
        avatar: 'https://placehold.co/100x100',
        favoriteApps: ['ChatGPT', 'YouTube', 'Google Sheets'],
    };

    // Function to display user account information
    function displayUserInfo() {
        const avatarElement = document.querySelector('.user-avatar');
        const usernameElement = document.querySelector('.user-username');
        const emailElement = document.querySelector('.user-email');

        if (avatarElement) {
            avatarElement.src = userData.avatar;
        }
        if (usernameElement) {
            usernameElement.textContent = userData.username;
        }
        if (emailElement) {
            emailElement.textContent = userData.email;
        }
    }

    // Function to display user's favorite apps
    function displayFavoriteApps() {
        const favoriteAppsContainer = document.querySelector('.favorite-apps-container');
        if (favoriteAppsContainer) {
            userData.favoriteApps.forEach(app => {
                const appElement = document.createElement('div');
                appElement.classList.add('favorite-app');
                appElement.textContent = app;
                favoriteAppsContainer.appendChild(appElement);
            });
        }
    }

    // Initialize the user interface
    function init() {
        displayUserInfo();
        displayFavoriteApps();
    }

    // Call the init function to set up the user interface
    init();
});
