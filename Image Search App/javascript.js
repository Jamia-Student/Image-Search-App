let search = document.getElementById("btn");
let input = document.getElementById("input");
let container = document.getElementById("image-container");
let maincontainer = document.getElementById("main-container");
let spinner = document.getElementById("spinner");
let toggle = document.getElementById("toggle");
let label = document.getElementById("label");

let button = document.createElement("button");
button.className = "bg-blue-500 rounded-sm";
button.textContent = "Show more";

function print(image){
    console.log(image);
    let alt = image.alt_description;
    let url = image.urls.full;
    let download = image.links.download;

    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let a = document.createElement("a");

    img.src = url;
    img.className = "w-[100%] h-[400px] rounded-md";
    p.textContent = alt;
    p.style.textAlign = "center";
    div.className = "rounded-md bg-[#FFFDD0] relative";
    a.href = download;
    a.textContent = "download";
    a.target = "_blank"
    a.classList.add("absolute","bottom-[370px]","left-[380px]" ,"border","border-black","rounded");

    container.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(a);

    
}

function getimages(images){
    for(let image of images){
        print(image);
    }
}
search.onclick = function(){
    const api_key = "QYIPyB7EIdqoJfGHVa7ITif_AMvFqW9uIywGaNbGXwU";
    let value = input.value;
    const url = `https://api.unsplash.com/search/photos?query=${value}&client_id=${api_key}`;

    let options = {
        method:"GET",
    };
    spinner.classList.remove("hidden");
    fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
            spinner.classList.add("hidden");
            getimages(jsondata.results);
            maincontainer.appendChild(button);
        })
};


button.onclick = function(){
    const api_key = "QYIPyB7EIdqoJfGHVa7ITif_AMvFqW9uIywGaNbGXwU";
    let value = input.value;
    const url = `https://api.unsplash.com/search/photos?query=${value}&client_id=${api_key}`;

    let options = {
        method:"GET",
    };

    fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsondata){
            getimages(jsondata.results);
        })
};
let count=0;
toggle.onclick = function(){
    
    if(count%2 == 0){
        maincontainer.classList.add("bg-black");
        label.classList.add("text-white");
        toggle.textContent = "Dark Mode";
    }
    else{
        maincontainer.classList.remove("bg-black");
        label.classList.remove("text-white");
        toggle.textContent = "Light Mode";
    }
    count+=1;
};

