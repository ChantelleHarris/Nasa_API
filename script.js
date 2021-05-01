const baseUrl = 'https://api.nasa.gov/planetary/apod?api_key=zcQPRbJkTM7mSHHH3KtVscf9Mk1z0QfDI1sLsbc6';
let url;
let button = document.getElementById('button');
let box = document.getElementById('displayBox');



button.addEventListener('click', apod);

async function apod(e){
    e.preventDefault();
    url = `${baseUrl}&count=Math.floor(Math.random() * 11)`;

    await fetch(baseUrl)
    .then(function(nasaImages) {
        console.log(nasaImages);
        return nasaImages.json();
    })
    .then(function(json) {
        console.log(json);
        displayImages(json);
    })   
}



function displayImages(json){
    console.log(json.url)

    let date= document.createElement("p");
    date.setAttribute('id','date')
    date.textContent = 'Date: ' + json.date;
    box.appendChild(date)

    let title = document.createElement("h3");
    title.textContent = 'Title: ' + json.title;
    box.appendChild(title)

    let image = document.createElement('img');
    let picUrl = json.url;
    image.src=picUrl
    image.setAttribute('class','pic')
    box.appendChild(image)

    let explanation = document.createElement("p");
    explanation.setAttribute('id', 'about')
    explanation.textContent = 'Explanation: ' + json.explanation;
    box.appendChild(explanation)
    console.log(box)
    }
