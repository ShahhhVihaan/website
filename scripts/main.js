document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    // Add more functionality as needed
});

// Function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.setAttribute('data-theme', themeName);
}

// Function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}

// Function to set theme based on user's system preferences
function setThemePreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
        document.getElementById('checkbox').checked = true;
    } else {
        setTheme('light');
        document.getElementById('checkbox').checked = false;
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
        document.getElementById('checkbox').checked = true;
    } else if (localStorage.getItem('theme') === 'light') {
        setTheme('light');
        document.getElementById('checkbox').checked = false;
    } else {
        setThemePreference();
    }
})();

// Event listener for theme toggle
document.getElementById('checkbox').addEventListener('change', function() {
    toggleTheme();
});

// Listen for changes in system color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setThemePreference();
});