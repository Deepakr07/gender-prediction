const url = "https://api.genderize.io?name=";
let wrapper = document.getElementById("wrapper");
let button = document.getElementById("prediction-btn");

let predictGender = () => {
    let name = document.getElementById("user-id").value;
    let finalUrl = url + name;
    let error = document.getElementById("error");

    if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
        let existingDiv = document.getElementById("info");
        if (existingDiv) {
            existingDiv.remove();
        }

        fetch(finalUrl)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                let div = document.createElement("div");
                div.setAttribute("id", "info");
                div.innerHTML = `<h2 id="result-name">${data.name}</h2><img src="" id="gender-icon"><h1 id="gender">${data.gender}</h1><h4 id="probability">Probability: ${data.probability}</h4>`;
                wrapper.appendChild(div);
                if (data.gender == "female") {
                    div.classList.add("female");
                    document.getElementById("gender-icon").setAttribute("src", "./images/female logo.png");
                } else {
                    div.classList.add("male");
                    document.getElementById("gender-icon").setAttribute("src", "./images/fotor_2023-5-27_23_20_50.png");
                }
            });

        document.getElementById("user-id").value = "";
    } else {
        error.innerHTML = "Enter a valid name with no spaces";
    }
};

document.getElementById("prediction-btn").addEventListener("click", predictGender);