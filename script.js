const mainUrl = "https://api.genderize.io?name="
let wrapper = document.getElementById("wrapper");
let button = document.getElementById("prediction-btn");
let predictGender = () =>{
    const name = document.getElementById("user-id").value
    
    console.log(name);
}
window.addEventListener("load",predictGender);
button.addEventListener("click",predictGender);