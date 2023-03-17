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
    galleryImage.setAttribute('title', el.description)
    galleryImage.alt = el.description

    
    galleryLink.append(galleryImage)
    items.push(galleryLink)
})
gallery.append(...items)

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
})

console.log(galleryItems);
