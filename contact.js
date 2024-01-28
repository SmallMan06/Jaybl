const cc = document.querySelectorAll(".contact-container")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: .25,
})
cc.forEach(item => {
console.log(item);
    observer.observe(item)
})