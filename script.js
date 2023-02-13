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


// Sticky Navbar

window.onscroll = function() {scrollfn()}

var currentStick = 100

function scrollfn() {
    if (window.scrollY >= currentStick) {
        primaryNavigation.classList.add("sticky")
    } else {
        primaryNavigation.classList.remove("sticky")
    }
}

// Navbar button reponse

const navLinksAnchor = document.querySelectorAll('.nav-link a')
navLinksAnchor.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        navLinksAnchor.forEach((anchor) => {
            anchor.parentNode.classList.remove("active")
        })
        e.currentTarget.parentNode.className += " active"
    })
})

// Navbar updation on scroll


// let sections = document.querySelectorAll('section')

// Countdown Timer

const eventDate = new Date("Jun 17, 2023 08:00:00").getTime()

const countDown = setInterval(() => {
    const currentDate = new Date().getTime()
   
    const timeToEvent = eventDate - currentDate
    const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));   
    const hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((timeToEvent % (1000 * 60)) / 1000);

    var daysContainer = document.querySelector('#days-value')
    if (daysContainer != null) {
        document.querySelector('#days-value').innerHTML = days
        document.querySelector('#hours-value').innerHTML = hours
        document.querySelector('#mins-value').innerHTML = minutes
        document.querySelector('#secs-value').innerHTML = seconds
    }

}, 1000);


// document.querySelector('#hero-button').addEventListener('click', () => {
//     console.log('hello')
// })


// Schedule section

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




let tracksContainer = document.querySelector('#tracks-container')

let tracks = [
    {
        "category": "Mechanical Engineering",
        "trackName" : "Thermal Sciences and Design Engineering",
        "imgUrl" : './assets/images/college.jpg',
        "info":"heloo there"
    },
    {
        "category": "Mechanical Engineering",
        "trackName" : "Materials Industrial and Manufacturing Engineering",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Science",
        "trackName" : "Nano Science",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Science",
        "trackName" : "Basic Sciences",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "VLSI and Embedded Systems",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Communication and Computer networks",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Signal Processing ",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Robotics and Automation",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Power electronics, power systems and drives",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Control and Instrumentation",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Green and sustainable Engineering",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Civil Engineering",
        "trackName" : "Material and structural mechanics",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Civil Engineering",
        "trackName" : "Soil and water sciences",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "AI and ML",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Social Network Analysis and Algorithms",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Systems and infrastructure for the web",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Data Analytics",
        "imgUrl" : './assets/images/heroimage.jpg',
        "info":"heloo there"
    },
]

// Track Renderer

let count = 1

tracks.forEach((track) => {
    if (tracksContainer == null) {
        return
    }
    let trackContainer = document.createElement("div")
    trackContainer.classList.add("track-container")
    trackContainer.classList.add("hidden")
    trackContainer.setAttribute('data-visible', 'false')
    if (count == 1) {
        trackContainer.setAttribute('data-visible', 'true')
    }
    let trackHeadingContainer = document.createElement("div")
    trackHeadingContainer.classList.add("track-heading-container")
    let trackNumberContainer = document.createElement("div")
    trackNumberContainer.classList.add("track-number-container")
    trackNumberContainer.innerHTML = count
    let trackHeading = document.createElement("p")
    trackHeading.classList.add("track-heading")
    trackHeading.innerHTML=track['trackName']

    trackHeadingContainer.appendChild(trackNumberContainer)
    trackHeadingContainer.appendChild(trackHeading)


    let trackInfo = document.createElement("div")
    trackInfo.classList.add("track-info")
    trackInfo.style.backgroundImage = `url( ${track['imgUrl']})`
    // console.log(trackInfo.style)
    let trackInfoOverlay = document.createElement("div")
    trackInfoOverlay.classList.add("track-info-overlay")
    let trackInfoText = document.createElement("p")
    trackInfoText.innerHTML = track['info']
    trackInfoOverlay.appendChild(trackInfoText)
    trackInfo.appendChild(trackInfoOverlay)

    trackContainer.appendChild(trackHeadingContainer)
    trackContainer.appendChild(trackInfo)
    tracksContainer.appendChild(trackContainer)
    
    count++
})

// Track Handler

const trackHeadingContainer = document.querySelectorAll('.track-heading-container')

trackHeadingContainer.forEach((track) => {
    track.addEventListener('click', (e) => {

        // console.log(e.target)
        let trackContainer = e.target.parentNode;
        if (e.target.className == 'track-heading') {
            trackContainer = e.target.parentNode.parentNode
        }

        const currTrack = document.querySelector('[data-visible="true"]')
        currTrack.setAttribute('data-visible', 'false')
        // console.log(trackContainer)
        trackContainer.setAttribute('data-visible', 'true')
        // console.log(e.target.getBoundingClientRect())
        

    })
})


// Intersection Observer

const hiddenElements = document.querySelectorAll('.hidden')
// console.log(hiddenElements)

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden')
        }
    })
}, {
    threshold: .7
})

hiddenElements.forEach(ele => {
    observer.observe(ele)
})