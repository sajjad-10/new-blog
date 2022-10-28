let tabs = document.querySelectorAll(".nav-bar-tab__tab-link");
let tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabContents.forEach(content => {
            content.classList.remove("active")
        })
        tabs.forEach(tab => {
            tab.classList.remove("active--primary")
        })
        tabContents[index].classList.add("active")
        tabs[index].classList.add("active--primary")
    })
});