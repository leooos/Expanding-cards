const sections = document.querySelectorAll('.section')

function removeActiveClasses() {
    sections.forEach(section => {
        section.classList.remove('active')
    })
}

sections.forEach(section => {
    section.addEventListener('click', () => {
        removeActiveClasses()
        section.classList.add('active')
    })
})