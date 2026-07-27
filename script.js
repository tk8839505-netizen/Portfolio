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

    });

    const typingText = document.getElementById("typing-text");

    const professions = [

        "Web Developer",
        "Frontend Developer",
        "JavaScript Developer",
        "Web Designer"
    ];
    let professionIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function type(){
       
        const currentWord = professions[professionIndex];

        if(!isDeleting){

            typingText.textContent = currentWord.slice(0,letterIndex);

            letterIndex++;

            if(letterIndex > currentWord.length){

                isDeleting = true;
            }
           
        } 
         else{

            letterIndex--;

            typingText.textContent = currentWord.slice(0,letterIndex);

            if(letterIndex ==0){

                isDeleting=false;
                 
                professionIndex++;

                if(professionIndex >= professions.length){
                    professionIndex=0;
                }
            }
        }
     
    }
     setInterval(type,150);

    