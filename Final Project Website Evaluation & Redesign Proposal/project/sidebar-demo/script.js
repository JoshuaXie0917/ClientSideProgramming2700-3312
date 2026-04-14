const navItems = document.querySelectorAll('.nav-item');
const title = document.getElementById('title');
const text = document.getElementById('text');

// Content text changes based on the section selected by the user.
const contentMap = {
    "Get Started": "This demo shows a clearer sidebar navigation. The selected section is highlighted so users can see where they are.",
  "Program Information": "This section shows how program details can be easier to find with a better menu.",
  "Work Experience": "This section shows how users can move to important content more quickly.",
  "Portfolio": "This section shows how a clearer structure can help users understand the website better."
};

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        // Highlight the selected item, so users know their current location.
        item.classList.add('active');

        const selected = item.textContent;
        title.textContent = selected;
        text.textContent = contentMap[selected];
    });
});