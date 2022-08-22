// extracting the id from the url. use 'id' as param.
function getParam (param){
    let queryURL = new URL(window.location.href);
    return queryURL.searchParams.get(param);
};

const urlRequest = 'http://localhost:3000/api/products';

async function modifyingDOM(){
    const res = await fetch(urlRequest + '/' + getParam('id'));
    const data = await res.json();
    const newImg = document.createElement('img');
    newImg.src = data.imageUrl;
    newImg.alt = data.altTxt;
    document.getElementsByClassName('item__img')[0].appendChild(newImg);
    document.getElementById('title').innerText = data.name;
    document.getElementById('price').innerText = data.price;
    document.getElementById('description').innerText = data.description;
    const arrColors = data.colors;
    arrColors.forEach(element => {
        const color = document.createElement('option');
        color.value = element;
        color.innerText = element;
        document.getElementById('colors').appendChild(color);
    });
}

modifyingDOM();