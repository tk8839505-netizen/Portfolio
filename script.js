// header toggle 

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
});

// link active dikhane ke liye:

const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll("nav ul li a");


window.addEventListener("scroll",()=>{
     
    //find section

    let current = "";

    sections.forEach((section)=> {
      
        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }
    });

    //find link

    navlinks.forEach((link)=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");
        }
    });

    console.log(window.scrollY);
    //console.log(current);
});