document.querySelector("#cartbtn").onclick = () => {
    //img object
    let img = document.createElement("img");
    img.src = "./shoes.jpg";
    img.style.width = "80%";
    img.style.height = "200px";

    // h2 Object
    let h3 = document.createElement("h3");
    h3.innerText = "Puma Mens Coarse Running Shoe";

    //span object
    let oldPrice = document.createElement("p");
    oldPrice.innerHTML = `<strike>&#8377;2499</strike>`;
    let newPrice = document.createElement("p");
    newPrice.innerHTML = `<strong>&#8377;1459</strong>`;

    //paragraph object
    let delDate = document.createElement("p");
    delDate.innerHTML = `Delivery <strong>Fri, Nov 24</strong>`;

    //button object
    let delbtn = document.createElement("button");
    delbtn.innerText = "Remove";
    delbtn.style.backgroundColor = "black";
    delbtn.style.color = "white"
    delbtn.onclick = () => {
        document.querySelector("#product").remove();
    }

    //creating div container object
    const product = document.createElement("div");
    product.id = "product"
    product.style.width = "250px";
    product.style.boxShadow = "2px 2px 10px black";
    product.style.borderRadius = "15px"
    product.style.display = "inline-block";
    product.style.margin = "20px";
    product.style.padding = "5px"
    product.style.textAlign = "center"

    //appending(adding) item to container
    product.appendChild(img);
    product.appendChild(h3);
    product.appendChild(newPrice);
    product.appendChild(oldPrice);
    product.appendChild(delDate);
    product.appendChild(delbtn);

    //appending div container to the webpage
    document.body.appendChild(product)
}