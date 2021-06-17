let show = true;

const menuHeader = document.querySelector(".header")
const menuContainer = menuHeader.querySelector(".container-mt")

menuContainer.addEventListener("click", () => {

    document.body.style.overflow = show ? "hidden" : "initial"

    menuHeader.classList.toggle("on", show)
    show = !show;
})