function toggleSkills(): void {
    const skillsSection = document.querySelector('.about.skills') as HTMLElement | null;
    const toggleButton = document.getElementById('toggleButton');
  
    if (skillsSection && toggleButton) {
      if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
      } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
      }
    }
  }
  