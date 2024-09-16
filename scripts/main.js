document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    // Add more functionality as needed
});

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    // Select the checkbox
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    // Function to switch theme
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    // Add event listener to checkbox
    toggleSwitch.addEventListener('change', switchTheme, false);

    // Check for saved user preference, if any, on load of the website
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
});