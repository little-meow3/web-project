(function() {
    document.addEventListener("DOMContentLoaded", () => {
        calculateLoadTime()
        highlightSelectedButton()
        displayActiveButton()
    })
})();

function calculateLoadTime() {
    const startTime = new Date().getTime()
    const div = document.querySelector(".load_time")

    window.addEventListener('load', () => {
        div.innerHTML = " Время загрузки: " + ((new Date().getTime() - startTime) / 1000) + " секунды"
    })
}

function highlightSelectedButton() {
    const buttonMain = document.querySelector(".button_navigation_main")
    const buttonTeachers = document.querySelector(".button_navigation_teachers")
    const buttonEnrollment =  document.querySelector(".button_navigation_enrollment")
    const buttonReviews =  document.querySelector(".button_navigation_reviews")
    const buttonLogin =  document.querySelector(".button_navigation_login")

    buttonMain.addEventListener('mouseenter', () => {
        document.body.style.cursor = 'point'
        buttonMain.style.background = "#bdd3cc"
    })
    buttonMain.addEventListener('mouseout', () => {
        buttonMain.style.background = "#efc8c8"
    })

    buttonTeachers.addEventListener('mouseenter', () => {
        buttonTeachers.style.background = "#bdd3cc"
    })
    buttonTeachers.addEventListener('mouseout', () => {
        buttonTeachers.style.background = "#efc8c8"
    })

    buttonEnrollment.addEventListener('mouseenter', () => {
        buttonEnrollment.style.background = "#bdd3cc"
    })
    buttonEnrollment.addEventListener('mouseout', () => {
        buttonEnrollment.style.background = "#efc8c8"
    })

    buttonReviews.addEventListener('mouseenter', () => {
        buttonReviews.style.background = "#bdd3cc"
    })
    buttonReviews.addEventListener('mouseout', () => {
        buttonReviews.style.background = "#efc8c8"
    })

    buttonLogin.addEventListener('mouseenter', () => {
        buttonLogin.style.background = "#bdd3cc"
    })
    buttonLogin.addEventListener('mouseout', () => {
        buttonLogin.style.background = "#efc8c8"
    })
}

function displayActiveButton() {
    const navigationLinks = document.querySelectorAll('.button');
    if (document.location.pathname.includes("index.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'main').classList.add('button_navigation_active')
    }

    if (document.location.pathname.includes("teachers.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'teachers').classList.add('button_navigation_active')
    }

    if (document.location.pathname.includes("enrollment_for_lesson.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'enrollment').classList.add('button_navigation_active')
    }

    if (document.location.pathname.includes("reviews.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'reviews').classList.add('button_navigation_active')
    }

    if (document.location.pathname.includes("login.html")) {
        [...navigationLinks].find(link => link.dataset.link === 'login').classList.add('button_navigation_active')
    }
}