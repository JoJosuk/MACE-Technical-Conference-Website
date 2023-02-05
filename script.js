"use strict"


// Responsive Navbar 

const primaryNavigation = document.querySelector('.primary-navigation')
const navToggle= document.querySelector('#nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible')
    
    if (visibility === 'false') {
        primaryNavigation.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
    }
    else {
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    }
})

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    })
})


// Countdown Timer

const eventDate = new Date("Jun 17, 2023 08:00:00").getTime()

const countDown = setInterval(() => {
    const currentDate = new Date().getTime()
   
    const timeToEvent = eventDate - currentDate
    const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));   
    const hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((timeToEvent % (1000 * 60)) / 1000);

    document.querySelector('#days-value').innerHTML = days
    document.querySelector('#hours-value').innerHTML = hours
    document.querySelector('#mins-value').innerHTML = minutes
    document.querySelector('#secs-value').innerHTML = seconds
    

}, 1000);


document.querySelector('#hero-button').addEventListener('click', () => {
    console.log('hello')
})

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })


// Tracks Section

const trackHeadingContainer = document.querySelectorAll('.track-heading-container')

trackHeadingContainer.forEach((track) => {
    track.addEventListener('click', (e) => {

        console.log(e.target)
        let trackContainer = e.target.parentNode;
        if (e.target.className == 'track-heading') {
            trackContainer = e.target.parentNode.parentNode
        }

        const currTrack = document.querySelector('[data-visible="true"]')
        currTrack.setAttribute('data-visible', 'false')
        console.log(trackContainer)
        trackContainer.setAttribute('data-visible', 'true')

    })
})
