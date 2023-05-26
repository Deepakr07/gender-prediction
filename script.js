const url = "https://api.genderize.io?name="
let wrapper = document.getElementById("wrapper");
let button = document.getElementById("prediction-btn");
let predictGender = () =>{
    let name = document.getElementById("user-id").value
    let finalUrl = url+name;
    let error = document.getElementById("error");
    if(name.length>0 && /^[A-Za-z]+$/.test(name)){
        fetch(finalUrl)
            .then((resp) => resp.json())
            .then((data) =>{
                console.log(data);
    let div = document.createElement("div");
    div.setAttribute("id","info");
    div.innerHTML = `<h2 id = "result-name">${data.name}</h2><img src = "" id = "gender-icon"><h1 id = "gender" >${data.gender}</h1><h4 id = "probability">Probability :${data.probability}</h4>`
    wrapper.appendChild(div);
            })
    
            
    }
}
window.addEventListener("load",predictGender);
button.addEventListener("click",predictGender);
