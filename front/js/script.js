function request(){
    fetch("http://localhost:3000/api/products")
    .then(function(products){
        if (products.ok){
            return products.json();
        };
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log('error communication. JSON not received!')
    })
};

request();


