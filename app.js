const fixedImage = () => {
    let page_4 = document.querySelector(".page-4")
    let fixed = document.querySelector(".fix-img")
    page_4.addEventListener("mouseenter", () => {
        fixed.style.display = "block"
    })
    page_4.addEventListener("mouseleave", () => {
        fixed.style.display = "none"
    })
    let lists = document.querySelectorAll(".list")
    lists.forEach((e) => {
        e.addEventListener("mouseenter", () => {
            let l1 = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${l1})`
        })
    });
}
fixedImage();

const slider = () => {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            960: {
                slidesPerView: 4
            }
        },
    });
}
slider();