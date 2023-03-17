import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const items = []
galleryItems.forEach((el) => {
    const galleryItem = document.createElement('div')
    galleryItem.classList.add('gallery__item')

    const galleryLink = document.createElement('a')
    galleryLink.classList.add('gallery__link')
    galleryLink.href = el.original

    const galleryImage = document.createElement('img')
    galleryImage.classList.add('gallery__image')
    galleryImage.src = el.preview
    galleryImage.setAttribute('data-source', el.original)
    galleryImage.alt = el.description

    galleryItem.append(galleryLink)
    galleryLink.append(galleryImage)
    items.push(galleryItem)
})

gallery.append(...items)

document.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const imgSelected = e.target.getAttribute('data-source')
    const template = basicLightbox.create(`<img src='${imgSelected}' width='800' height='600'>`,
    // налаштування бібліотеки
        {
            onShow: () => {
                document.addEventListener('keydown', closeModal)
            },
            onClose: () => {
                document.removeEventListener('keydown', closeModal)
            }
        }
    )
    template.show()

    function closeModal(e) {
        if (e.key === 'Escape') {
    template.close()
}
    }
}) 
console.log(galleryItems);
