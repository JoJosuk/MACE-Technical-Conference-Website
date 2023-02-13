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

var currentStick = document.querySelector('#hero').scrollHeight;

function scrollfn() {
    if (window.scrollY >= currentStick) {
        primaryNavigation.classList.add("sticky")
        primaryNavigation.style.backgroundColor = "#0bceff"
    } else {
        primaryNavigation.classList.remove("sticky")
        primaryNavigation.style.backgroundColor = ""
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
        "imgUrl" : 'https://polytech.univ-nantes.fr/medias/photo/20191507-communicationte-48_1571835439233-jpg',
        "info":"heloo there"
    },
    {
        "category": "Mechanical Engineering",
        "trackName" : "Materials Industrial and Manufacturing Engineering",
        "imgUrl" :'https://blogmech.com/wp-content/uploads/2019/07/d7fad-01-manufacturing-process-manufacturing-technology.jpg',
        "info":"heloo there"
    },
    {
        "category": "Science",
        "trackName" : "Nano Science",
        "imgUrl" : 'https://wallpapercave.com/wp/wp2963735.jpg',
        "info":"heloo there"
    },
    {
        "category": "Science",
        "trackName" : "Basic Sciences",
        "imgUrl" : 'https://i.pinimg.com/originals/66/be/79/66be7922881ea8c3bcb1bd40ba12a797.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "VLSI and Embedded Systems",
        "imgUrl" : 'https://sru.edu.in/assets/schools/ece/ece.png',
        "info":"heloo there"
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Communication and Computer networks",
        "imgUrl" : 'https://wallpapercave.com/wp/wp10616862.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Signal Processing ",
        "imgUrl" : 'https://online.stanford.edu/sites/default/files/styles/widescreen_tiny/public/2018-03/ee_digitalsignalprocessing_ee264.jpg?h=66807ab2&itok=PTl4qQ9S',
        "info":"heloo there"
    },
    {
        "category": "Electronics and Communications Engineering",
        "trackName" : "Robotics and Automation",
        "imgUrl" : 'https://xcelacore.com/wp-content/uploads/2022/04/robotic-process-automation.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Power electronics, power systems and drives",
        "imgUrl" : 'https://assets.skyfilabs.com/images/blog/good-power-electronics-project-ideas.webp',
        "info":"heloo there"
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Control and Instrumentation",
        "imgUrl" : 'https://alausat.ae/wp-content/uploads/2020/02/IC_Alausat-scaled.jpg',
        "info":"heloo there"
    },
    {
        "category": "Electrical and Electronics Engineering",
        "trackName" : "Green and sustainable Engineering",
        "imgUrl" : 'https://www.linkpicture.com/q/sustainabilitygreenworld.jpg',
        "info":"heloo there"
    },
    {
        "category": "Civil Engineering",
        "trackName" : "Material and structural mechanics",
        "imgUrl" : 'https://cee.utk.edu/wp-content/uploads/sites/15/2015/07/research-structure.jpg',
        "info":"heloo there"
    },
    {
        "category": "Civil Engineering",
        "trackName" : "Soil and water sciences",
        "imgUrl" : 'https://www.montana.edu/academics/images/search/sea-soil-water-sciences.jpg',
        "info":"heloo there"
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "AI and ML",
        "imgUrl" : 'https://www.einfochips.com/blog/wp-content/uploads/2018/11/how-to-develop-machine-learning-applications-for-business-featured.jpg',
        "info":"heloo there"
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Social Network Analysis and Algorithms",
        "imgUrl" : 'https://freerangeresearch.files.wordpress.com/2013/09/2013-09-15-16-45-17-1.jpg',
        "info":"heloo there"
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Systems and infrastructure for the web",
        "imgUrl" : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwVNtYyY-OrAgpMBCWi2o9G6UGraKdM3oVvg&usqp=CAU',
        "info":"heloo there"
    },
    {
        "category": "Computer Science and Engineering",
        "trackName" : "Data Analytics",
        "imgUrl" : 'https://d5zukw8vdn04n.cloudfront.net/wp-content/uploads/2019/12/shutterstock_606583169.jpg',
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