;((w,d)=>{
    let targetElementCollection;
    const targetElementSelector = '.wpg-reanimate';
    const inViewClass = 'inview';
    const defaultTop = '200px';
    const defaultBottom = '-200px';

    w.addEventListener('DOMContentLoaded', ()=>{
        init();
    })

    const init = () => {
        targetElementCollection = d.querySelectorAll(targetElementSelector);
        targetElementCollection.forEach(el => {
            initElement(el);
        });
    }

    const initElement = element => {
        const top = element.dataset.ioTop? element.dataset.ioTop : defaultTop;
        const bottom = element.dataset.ioBottom? element.dataset.ioBottom : defaultBottom;
        const rootMargin = top + '0px' + bottom + '0px';

        let options = {
            root: null,
            rootMargin: rootMargin,
            threshold: 0.01
        }

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    element.classList.add(inViewClass);
                } else {
                    element.classList.remove(inViewClass);
                }
            });
        }, options);
        observer.observe(element);
    }
})(window, document);