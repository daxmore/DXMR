Shery.mouseFollower({
    skew: true,
});
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".txthvr", {
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhVD2qLEfy5yDYgTjggUrkLzfzuPS7MaTYA&s"]
});
gsap.from("header nav", {
    y: -100,
    duration: 0.5
})
gsap.from(".page-1 .hero-headings .txthvr", {
    y: 100,
    color: "black",
    opacity: 0,
    stagger: 0.1
})
gsap.from(".page-3", {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".page-3 .cta",
        scroller: "body",
        start: "top 50%",
        end: "top 30%"
    },
})
gsap.from(".contect-section", {
    y: 50,
    duration: 0.5,
    opacity: 0
});
gsap.to(".page-8", {
    backgroundColor: "white",
    duration: 0.1,
    scrollTrigger: {
        trigger: ".page-8",
        scroller: "body",
        start: "top 50%",
        end: "top top",
        scrub: 1
    }
});
gsap.from(".page-8 .p8-container", {
    y:200,
    opacity:0,
    duration:0.7,
    scrollTrigger:{
        trigger:".page-8 .p8-container",
        scroller:"body",
        start: "top 30%"
    }
});
const fixNavDesktop = () => {
    if (window.innerWidth > 1024) { // Adjust the value as per your requirement for desktop screen width
        let tl = gsap.timeline();
        tl.to(".fix-nav", {
            right: 0,
            duration: 0.5
        });
        tl.from(".fix-nav h4", {
            x: 500,
            stagger: 0.1,
            opacity: 0
        });
        tl.pause();

        let bars = document.querySelector(".right span");
        bars.addEventListener("click", () => {
            tl.play();
            tl.from(".fix-nav span", {
                display: "block"
            });
        });

        let close = document.querySelector(".fix-nav span");
        close.addEventListener("click", () => {
            tl.reverse();
        });
    }
}
fixNavDesktop();

const fixNavMobile = () => {
    if (window.innerWidth <= 1024) {
        let tl = gsap.timeline();
        tl.to(".fix-nav", {
            top: 0,
            duration: 0.5
        });
        tl.from(".fix-nav h4", {
            y: -500,
            stagger: 0.1,
            opacity: 0
        });
        tl.pause();

        let bars = document.querySelector(".right span");
        bars.addEventListener("click", () => {
            tl.play();
            tl.from(".fix-nav span", {
                display: "block"
            });
        });

        let close = document.querySelector(".fix-nav span");
        close.addEventListener("click", () => {
            tl.reverse();
        });
    }
}
fixNavMobile();

const desktopVideoAnimation = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const projectVideos = document.querySelectorAll(".project-video video");

        projectVideos.forEach(video => {
            const hoverAnimation = gsap.timeline({ paused: true });

            hoverAnimation.to(video, {
                duration: 0.5,
                scale: 1.05,
                ease: "power1.inOut"
            });

            video.addEventListener("mouseenter", () => {
                hoverAnimation.play();
                video.muted = true;
                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.then(() => {

                    }).catch(error => {

                        console.error('Autoplay prevented:', error);
                    });
                }
            });

            video.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0;
                hoverAnimation.reverse();
            });
        });
    });
}
desktopVideoAnimation()

const movileVideoAnimation = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const projectVideos = document.querySelectorAll(".project-video video");

        projectVideos.forEach(video => {
            if (window.innerWidth <= 1024) {
                video.muted = true;
                video.loop = true;
                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.then(() => {
                    }).catch(error => {
                        console.error('Autoplay prevented:', error);
                    });
                }
            }
        });
    });
}
movileVideoAnimation()

const p7DesktopAnimation = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const projectVideos = document.querySelectorAll(".page-7 video");

        projectVideos.forEach(video => {
            const hoverAnimation = gsap.timeline({ paused: true });

            hoverAnimation.to(video, {
                duration: 0.5,
                scale: 1.05,
                ease: "power1.inOut"
            });

            video.addEventListener("mouseenter", () => {
                hoverAnimation.play();
                video.muted = true;
                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.then(() => {

                    }).catch(error => {

                        console.error('Autoplay prevented:', error);
                    });
                }
            });

            video.addEventListener("mouseleave", () => {
                video.pause();
                video.currentTime = 0;
                hoverAnimation.reverse();
            });
        });
    });
}
p7DesktopAnimation()

const p7MobileAnimation = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const projectVideos = document.querySelectorAll(".page-7 video");

        projectVideos.forEach(video => {
            if (window.innerWidth <= 1024) {
                video.muted = true;
                video.loop = true;
                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.then(() => {
                    }).catch(error => {
                        console.error('Autoplay prevented:', error);
                    });
                }
            }
        });
    });
}
p7MobileAnimation()

const lineaAnimation = () => {
    document.addEventListener("DOMContentLoaded", () => {
        let path = "M 0 100 Q 500 100 1400 100";
        let finalpath = "M 0 100 Q 500 100 1400 100";
        let lineAnimation = document.querySelector(".lineanimation");

        lineAnimation.addEventListener("mousemove", (move) => {
            let svg = lineAnimation.querySelector("svg");
            let rect = svg.getBoundingClientRect();
            let x = move.clientX - rect.left;
            let y = move.clientY - rect.top;

            path = `M 0 100 Q ${x} ${y} 1400 100`;
            gsap.to("svg path", {
                attr: { d: path },
                ease: "elastic.out(1, 0.2)",
            });
        });

        lineAnimation.addEventListener("mouseleave", () => {
            gsap.to("svg path", {
                attr: { d: finalpath }
            });
        });
    });
}
lineaAnimation()