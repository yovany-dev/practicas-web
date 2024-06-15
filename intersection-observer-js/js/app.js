const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

const uploadImage = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // console.log('La imagen esta en el viewport');
            entry.target.classList.add('visible');
        } else {
            // entry.target.classList.remove('visible');
        }
    })
}

const observer = new IntersectionObserver(uploadImage, {
    root: null,
    rootMargin: '500px 0px 100px 0px',
    threshold: 1.0,
});

observer.observe(image1);
observer.observe(image2);