window.addEventListener("DOMContentLoaded", ()=>{
    var button = document.querySelector(".v3_419");
    button.addEventListener("click", ()=>{
        document.querySelector(".v3_407").innerHTML = 'Rate(1-10) how easy it is for you to talk about your mental heal';
        document.querySelector(".v3_411").innerHTML = "";
        document.querySelector(".v3_408").innerHTML = 'If applicable upload of when you last consulted a therapist';
        document.querySelector(".v3_413").innerHTML = "";
        button.innerHTML = "Submit"
    })
})