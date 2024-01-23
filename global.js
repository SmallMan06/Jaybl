const cl_2 = document.querySelectorAll(".contract-link2")
const sc = document.querySelectorAll(".services_container")
const s1 = document.querySelectorAll(".about-section")
const s2 = document.querySelectorAll(".service-section")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: .25,
})
cl_2.forEach(item => {
console.log(item);
    observer.observe(item)
})
sc.forEach(item => {
    console.log(item);
    observer.observe(item)
})
s1.forEach(item => {
    console.log(item);
    observer.observe(item)
})
s2.forEach(item => {
    console.log(item);
    observer.observe(item)
})