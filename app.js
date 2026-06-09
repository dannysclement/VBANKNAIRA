document.addEventListener("DOMContentLoaded", () => {
    
    // Select all the simulation control tabs
    const tabControls = document.querySelectorAll(".tab-control");
    // Select all the application module panel views
    const appViews = document.querySelectorAll(".app-view");

    tabControls.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active classes from current selectors
            tabControls.forEach(item => item.classList.remove("active"));
            appViews.forEach(view => view.classList.remove("active"));

            // Add active target state to the selected controller element
            tab.classList.add("active");
            
            const targetViewId = tab.getAttribute("data-target");
            const targetViewElement = document.getElementById(targetViewId);
            
            if (targetViewElement) {
                targetViewElement.classList.add("active");
            }
        });
    });

    // Smooth scroll structural logic map for navigation tags
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const rawTarget = this.getAttribute('href');
            const elementTarget = document.querySelector(rawTarget);
            
            if (elementTarget) {
                elementTarget.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
