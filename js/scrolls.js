const scrolls = {
    scrollToAnchor: () => {
        const anchors = document.querySelectorAll('a[href^="#"]')

        for (item of anchors) {
            item.addEventListener('click', function (e) {
                e.preventDefault()
                const currentAnchorId = this.getAttribute('href')
                document.querySelector(currentAnchorId).scrollIntoView({
                    behavior: 'smooth'
                })
            })
        }
    },
    scrollEvent: () => {
        const scrollAnimationElements = document.querySelectorAll('.scroll-animation')
        
        const animateScroll = () => {
            for (let i = 0; i < scrollAnimationElements.length; i++) {
                const el = scrollAnimationElements[i]
                const elHeight = el.offsetHeight
                const elOffsetTop = getElementPos(el)
                const animStartPos = 4

                let startPoint = window.innerHeight - elHeight / animStartPos
                if (elHeight > window.innerHeight)
                    startPoint = window.innerHeight - window.innerHeight / animStartPos

                if ((pageYOffset > elOffsetTop - startPoint) && pageYOffset < (elOffsetTop + elHeight))
                    el.classList.add('active')
            }
        }
        window.addEventListener('scroll', animateScroll)
        animateScroll()
    }
}

function getElementPos(elem) {
    const bbox = elem.getBoundingClientRect()
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return bbox.top + scrollTop
}