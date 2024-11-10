function toggleSkills() {
    var skillsSection = document.querySelector('.about.skills');
    var toggleButton = document.getElementById('toggleButton');
    if (skillsSection && toggleButton) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    }
}
