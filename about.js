const ac = document.querySelectorAll(".about-p-container")
const ac2 = document.querySelectorAll(".about-p-container2")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: .25,
})
ac.forEach(item => {
console.log(item);
    observer.observe(item)
})
ac2.forEach(item => {
    console.log(item);
    observer.observe(item)
})