document.getElementById("contact").addEventListener("click", function ContactFormToggle() {
    if(!document.getElementById("contact_form").classList.contains("hidden")||!document.getElementById("menu_options").classList.contains("hidden")){
        document.getElementById("contact_form").classList.add("hidden");
        document.getElementById("menu_options").classList.add("hidden");
        document.getElementById("x_menu_toggle").classList.remove("orange");
        document.getElementById("x_menu_toggle").firstElementChild.classList.add("fa-bars");
        document.getElementById("x_menu_toggle").firstElementChild.classList.remove("fa-xmark");
    }else{
        document.getElementById("contact_form").classList.remove("hidden");
        document.getElementById("x_menu_toggle").classList.add("orange");
        document.getElementById("x_menu_toggle").firstElementChild.classList.add("fa-xmark");
        document.getElementById("x_menu_toggle").firstElementChild.classList.remove("fa-bars");
    }
});

document.getElementById("x_menu_toggle").addEventListener("click", function MenuOptionsToggle() {
    if(!document.getElementById("contact_form").classList.contains("hidden")||!document.getElementById("menu_options").classList.contains("hidden")){
        document.getElementById("contact_form").classList.add("hidden");
        document.getElementById("menu_options").classList.add("hidden");
        document.getElementById("x_menu_toggle").classList.remove("orange");
        document.getElementById("x_menu_toggle").firstElementChild.classList.add("fa-bars");
        document.getElementById("x_menu_toggle").firstElementChild.classList.remove("fa-xmark");
    }else{
        document.getElementById("menu_options").classList.remove("hidden");
        document.getElementById("x_menu_toggle").classList.add("orange");
        document.getElementById("x_menu_toggle").firstElementChild.classList.add("fa-xmark");
        document.getElementById("x_menu_toggle").firstElementChild.classList.remove("fa-bars");
    }
});

document.getElementById("form_submit").addEventListener("click", function contactUs(){
    
})