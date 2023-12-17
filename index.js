let containerDiv = document.querySelector("#container");

function displayData(userList){
    containerDiv.innerHTML = null;
    userList.forEach(element => {
        let card = document.createElement("div");
        let firstDiv = document.createElement("div");
        let secndDiv = document.createElement("div");
        let avter = document.createElement("img");
        let name = document.createElement("h2");
        let email = document.createElement("p");

        avter.src = element.avatar;
        name.textContent = `${element.first_name} ${element.last_name}`;
        email.textContent = element.email;

        firstDiv.append(avter);
        secndDiv.append(name, email);
        card.append(firstDiv, secndDiv);
        containerDiv.append(card);
    });
}


function fetchFunc(){
    fetch("https://reqres.in/api/users").then((value)=>{
        return value.json()
    }).then((value)=>{
        userList = value.data;
        displayData(userList);
    });
    

}

