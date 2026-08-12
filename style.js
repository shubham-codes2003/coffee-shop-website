const orderBtn= document.getElementById("orderBtn");
orderBtn.addEventListener("click",function () {
    orderMessage.style.display = "block";
  orderMessage.textContent = "Your order is being processed..."

setTimeout(function (){
    orderMessage.style.display = "none";
},3000);
});

const orderMessage = document.getElementById("orderMessage")


// Menu Btn

const menuBtn = document.querySelectorAll(".menu-btn");

menuBtn.forEach(function (button) {

    button.addEventListener("click", function() {
       
        const menuContent = this.parentElement.parentElement;
        const menubottom= this.parentElement;

        const coffeeName = menuContent.querySelector("h3")
        const coffeePrice= menubottom.querySelector("span");

        console.log(coffeeName.textContent)
           console.log(coffeePrice.textContent);
           
           const orderMessage = `You selected ${coffeeName.textContent} - ${coffeePrice.textContent}`;

            const messageBox = document.getElementById("orderMessage");

            messageBox.textContent = orderMessage;
           
    });
});


// FAQ code 

const faqItems = document.querySelectorAll(".faq-item")

faqItems.forEach(function (faq) {

    faq.addEventListener("click", function () {
        faq.classList.toggle("active")
        
    });



});

// Table Book btn

const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function(){
    alert("Table booking feature is coming soon!")
})


// Form 

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit" , function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value.trim();

        const email = document.querySelector("#email").value.trim();

                const phone = document.querySelector("#phone").value.trim();

                        const message = document.querySelector("#message").value.trim();


                        if (name === "" || email === "" || phone=== "" || message === "" ) 
                            {
                                alert("Please fill all the fields.")
                                return;
                            
                        }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter valid 10-digit phone number")
        return;
        
    }

    alert("Form submitted successfully!")

                        console.log(name);
                        console.log(email);
                      console.log(phone);
                      console.log(message);
    
});


