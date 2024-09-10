function togglePopup() {
    var sections = document.querySelectorAll('.container-section');
    sections.forEach(section => {
        section.classList.add('open-container');  
    });
}
