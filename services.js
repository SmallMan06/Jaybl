const wd = document.querySelectorAll(".webdev-section")
const seo = document.querySelectorAll(".seo-section")
const pa = document.querySelectorAll(".paidads-section")
const sl = document.querySelectorAll(".service-left")
const sr1 = document.querySelectorAll(".service-right1")
const sr2 = document.querySelectorAll(".service-right2")

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: .25,
})

wd.forEach(item => {
console.log(item);
    observer.observe(item)
})
seo.forEach(item => {
    console.log(item);
    observer.observe(item)
})
pa.forEach(item => {
    console.log(item);
    observer.observe(item)
})
sl.forEach(item => {
    console.log(item);
    observer.observe(item)
})
sr1.forEach(item => {
    console.log(item);
    observer.observe(item)
})
sr2.forEach(item => {
    console.log(item);
    observer.observe(item)
})