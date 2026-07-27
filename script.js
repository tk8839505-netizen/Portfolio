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


    //  about section

    const reveals = document.querySelectorAll("#about,#skills ,#projects,#contact");

    console.log(reveals);

    function reveal(){

        const windowHeight = window.innerHeight;

        reveals.forEach((item)=>{
            
            const elementTop = item.getBoundingClientRect().top;

            if(elementTop <= windowHeight-50)
            {
                item.classList.add("show");
            } 
            else{

                item.classList.remove("show");
             }

        });
    }

    window.addEventListener("scroll",reveal);

    reveal();

    const progressBar = document.querySelector(".progress-bar");

    window.addEventListener("scroll",()=>{

        const scrollTop = window.scrollY;

        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

        const scrollPercent = (scrollTop / documentHeight) * 100;

        progressBar.style.width = scrollPercent +"%";
    });

    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll",()=>{
          
        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }
        else{

            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click",()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });

    