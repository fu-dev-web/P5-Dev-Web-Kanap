const section = document.getElementById('items');
console.log(section);
let urlRequest = 'http://localhost:3000/api/products';

async function request(){
    const response = await fetch(urlRequest);
    const data =  await response.json();
    console.log(data);
    data.forEach(element => {
        const newLink = document.createElement("a");
        newLink.href = './product.html?id=' + element._id;
        section.appendChild(newLink);
        const newArticle = document.createElement("article");
        newLink.appendChild(newArticle);
        const newImg = document.createElement("img");
        newImg.src = element.imageUrl;
        newImg.alt =  element.altTxt;
        const newH3 = document.createElement('h3');
        newH3.className = "productName";
        newH3.innerText = element.name;
        const newP = document.createElement('p');
        newP.className = "productDescription";
        newP.innerText = element.description;
        newArticle.appendChild(newImg);
        newArticle.appendChild(newH3);
        newArticle.appendChild(newP);
        // gestion d'erreur!!!
    });
}

request();


