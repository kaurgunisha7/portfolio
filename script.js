document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const cross = document.querySelector('.cross');
    const ham = document.querySelector('.ham');

    // Initially show the cross
    cross.style.display = 'inline';
    ham.style.display = 'none';

    document.querySelector('.hamburger').addEventListener("click", () => {
        sidebar.classList.toggle('sidebarGo');
        if (sidebar.classList.contains('sidebarGo')) {
            // Menu is closed, show menu logo
            ham.style.display = 'inline';
            cross.style.display = 'none';
        } else {
            // Menu is open, show cross logo
            ham.style.display = 'none';
            setTimeout(() => {
                cross.style.display = 'inline';
            }, 300); // Delay to match the transition duration
        }
    });
});

