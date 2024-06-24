function voltear(sectionId) {
    const section = document.getElementById(sectionId);
    const content = section.querySelector('.contenido');
    const arrow = section.querySelector('.darVuelta');

    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)'; 
    } else {
        content.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)'; 
    }
}