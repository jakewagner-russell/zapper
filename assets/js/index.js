const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
    },
    breakpoints: {
        1200: {
        slidesPerView: 3,
        spaceBetween: 10
        },
        992: {
        slidesPerView: 2,
        spaceBetween: 10
        }
    }
});

document.querySelector('.navbar-toggler').addEventListener('click', ()=> {
    document.querySelector('.navbar-collapse').classList.toggle('show')
})

const changeNavbar = () => {
    const navbar = document.querySelector('.navbar')

    if(window.pageYOffset >= document.querySelector('.hero .container').offsetTop) {
        navbar.style.position = "fixed"
        navbar.style.top = "0"
        navbar.style.background = "#fff"
        navbar.style.filter = "drop-shadow(0 1rem 1rem rgba(0, 0, 0, 0.1))"
        navbar.style.transition = "0.1s"
    } else {
        navbar.style.position = "absolute"
        navbar.style.top = "3.5rem"
        navbar.style.background = "transparent"
        navbar.style.filter = "none"
        navbar.style.transition = "0.1s"
    }
}

document.addEventListener("DOMContentLoaded", () => {

    changeNavbar()

    const quote = document.querySelector('#text-content-quote')
    const author = document.querySelector('#text-content-author')
    const textContainer = document.querySelector('.testimonials .text-content .container')

    document.querySelector('.person-1').style.filter = "grayscale(0)"
    quote.textContent = '“Envy of other people shows how they are unhappy. Their continual attention to others behavior shows how they are boring.”'
    author.textContent = "Seneca"
    textContainer.style.background = 'linear-gradient(45deg, #19a5a1 0%, #63e8e4 100%)'
    textContainer.style.transition = ".3s"
    textContainer.style.filter = 'drop-shadow(0 1rem 1rem rgba(25, 165, 161, 0.3))'
})

const testimonialImg = Array.from(document.querySelectorAll('.testimonial-row img'))

const switchQuote = (item) => {
    const currentImg = Array.from(item.classList).find(element => element.includes('person'))
    const quote = document.querySelector('#text-content-quote')
    const author = document.querySelector('#text-content-author')
    const textContainer = document.querySelector('.testimonials .text-content .container')

    switch(currentImg) {
        case 'person-1':
            quote.textContent = '“Envy of other people shows how they are unhappy. Their continual attention to others behavior shows how they are boring.”'
            author.textContent = "Seneca"
            textContainer.style.background = 'linear-gradient(45deg, #19a5a1 0%, #63e8e4 100%)'
            textContainer.style.transition = ".3s"
            textContainer.style.filter = 'drop-shadow(0 1rem 1rem rgba(25, 165, 161, 0.3))'
            break;
        case 'person-2':
            quote.textContent = '“There will come a time when you believe everything is finished. That will be the beginning.”'
            author.textContent = "Louis L'Amour"
            textContainer.style.background = 'linear-gradient(45deg, #f2026b 0%, #ff8aaf 100%)'
            textContainer.style.transition = ".3s"
            textContainer.style.filter = 'drop-shadow(0 1rem 1rem rgba(255, 138, 175, 0.3))'
            break;
        case 'person-3':
            quote.textContent = '“The truth is that the dreams that you have are very different from the actions that will get you there”'
            author.textContent = "James Clear"
            textContainer.style.background = 'linear-gradient(45deg, #1369ec 0%, #65bef4 100%)'
            textContainer.style.transition = ".3s"
            textContainer.style.filter = 'drop-shadow(0 1rem 1rem rgba(19, 105, 236, 0.3))'
            break;
        case 'person-4':
            quote.textContent = '“No-one knows what your life or life itself should be because it is in the process of being created. Life moves according to a growing consciousness of life and is completely unpredictable.”'
            author.textContent = "Agnes Martin"
            textContainer.style.background = 'linear-gradient(45deg, #ffb16b 0%, #ffdb8d 100%)'
            textContainer.style.transition = ".3s"
            textContainer.style.filter = 'drop-shadow(0 1rem 1rem rgba(255, 219, 141, 0.3))'
            break;

    }

}

const changeTestimonial = (item) => {
    const imgInColor = testimonialImg.filter(element => element.getAttribute('style') === 'filter: grayscale(0);')
        
        if(imgInColor.length > 0) {
            imgInColor.forEach((item) => {
                item.removeAttribute('style')
            })
        }

        item.style.filter = 'grayscale(0)'

        switchQuote(item)
}

testimonialImg.forEach((item, index) => {
    item.addEventListener('mouseenter', ()=> {
        changeTestimonial(item)
    })

    item.addEventListener('click', ()=> {
        changeTestimonial(item)
    })
})

window.addEventListener('scroll', ()=> {
    changeNavbar()
})


