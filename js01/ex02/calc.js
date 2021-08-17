const product = {
    name: null,
    price: null,
    isMember: null,
    level: null,
    discountedPrice: null
}

window.onload = function(){
    makeBold();
    setTime();
    addEventListeners();
}

function makeBold(){
    const main = document.body;
    main.style.fontWeight = "bold";
}

function setTime(){
    const time = document.getElementsByClassName("time")[0];
    time.dateTime = new Date().toLocaleString();
    time.innerText = time.dateTime;
}

function addEventListeners(){
    document.getElementsByClassName("name")[0].addEventListener("change", update);
    document.getElementsByClassName("price")[0].addEventListener("change", update);
    document.getElementsByClassName("isMember")[0].addEventListener("change", update);
    document.getElementsByClassName("level")[0].addEventListener("change", update);
}

function calcDiscountedPrice(){
    if(!product.isMember){
        return product.price;
    }
    if(product.level === "1"){
        return Math.round(product.price * .95);
    } else if(product.level ==="2"){
        return Math.round(product.price * .9);
    } else {
        return Math.round(product.price * .85);
    }
}

function update(){
    product.name = document.getElementsByClassName("name")[0].value;
    product.price = document.getElementsByClassName("price")[0].value;
    product.isMember = document.getElementsByClassName("isMember")[0].checked;
    product.level = document.getElementsByClassName("level")[0].value;
    product.discountedPrice = calcDiscountedPrice();

    const list = document.getElementsByClassName("list")[0].getElementsByTagName("li");
    list[0].innerText = `상품명: ${product.name}`;
    list[1].innerText = `원가: ${product.price}`;
    list[2].innerText = `할인가: ${product.discountedPrice}`;
    console.log(product);
}
