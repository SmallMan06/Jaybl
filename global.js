const contract_link = document.querySelectorAll(".contract-link2")

// const cards = document.querySelectorAll(".contract-link2")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: .75,
})

contract_link.forEach(item => {
    observer.observe(item)
    console.log('observed 1');
})

const service_sub = document.querySelectorAll(".services-container")

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: .75,
})

service_sub.forEach(item2 => {
    observer2.observe(item2)
    console.log('observed 2');
})