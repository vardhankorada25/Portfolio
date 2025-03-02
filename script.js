const sections = document.querySelectorAll('.section');
const sectbtns = document.querySelectorAll('.controls');
const sectbtn = document.querySelectorAll('.control');
const allsections= document.querySelector('.main-container');
function pageTransitions() {
    // Button click active class
    for (let i = 0; i < sectbtn.length; i++) {
        sectbtn[i].addEventListener('click', function() {
            let currentbtn = document.querySelectorAll('.active-btn');
            if (currentbtn.length > 0) {
                currentbtn[0].className = currentbtn[0].className.replace('active-btn', '');
            }
            this.className += ' active-btn';
        });
    }
    //  console.log(sectbtn);
    //  console.log(sections);
    // Sections active class
    allsections.addEventListener('click', function(e) {
    const id=e.target.dataset.id;
    console.log(id);
    if(id){
        sectbtns.forEach(function(btn){
            btn.classList.remove('active');
        });
        e.target.classList.add('active');
        sections.forEach(function(section){
            section.classList.remove('active');
        });
        const element=document.getElementById(id);
        element.classList.add('active');
    }
   });
   //toggle theme
   const themebtn=document.querySelector('.theme-btn');
   themebtn.addEventListener('click',function(){
       document.body.classList.toggle('light-mode');
   });
}
// Ensure the home section is displayed by default
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').classList.add('active');
    document.querySelector('.control[data-id="home"]').classList.add('active-btn');
});
document.addEventListener('DOMContentLoaded', function() {
    const roles = ["A web developer", "A competitive programmer"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    const typingSpeed = 100; // Speed of typing in milliseconds
    const erasingSpeed = 50; // Speed of erasing in milliseconds
    const delayBetweenRoles = 2000; // Delay between roles in milliseconds

    const dynamicRoleElement = document.getElementById('dynamic-role');

    function typeRole() {
        if (currentCharIndex < roles[currentRoleIndex].length) {
            dynamicRoleElement.textContent += roles[currentRoleIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(eraseRole, delayBetweenRoles);
        }
    }

    function eraseRole() {
        if (currentCharIndex > 0) {
            dynamicRoleElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(eraseRole, erasingSpeed);
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        }
    }

    setTimeout(typeRole, typingSpeed);
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create an object to store the data
    const formData = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    // Store the data in local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Optionally, you can display a success message or clear the form
    alert('Submitted successfully!');
    document.getElementById('contact-form').reset();
});
const storedData = localStorage.getItem('contactFormData');
if (storedData) {
    const formData = JSON.parse(storedData);
    console.log(formData);
    // You can now use formData.name, formData.email, formData.subject, formData.message
}
pageTransitions();
