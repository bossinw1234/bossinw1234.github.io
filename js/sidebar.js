const sections = document.querySelectorAll("section");
const navLi = document.getElementsByClassName("ddl-sb--item__link");
const t = document.querySelectorAll("div ul li a.ddl-sb--item__link");

for (var i = 0; i < navLi.length; i++) {
    navLi[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
     });
}