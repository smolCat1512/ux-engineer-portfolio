const navigation = document.querySelector(".primary-navigation");

const navigationHeight = navigation?.scrollHeight;

document.documentElement.style.setProperty(
    "--scroll-padding",
    navigationHeight + "px"
)