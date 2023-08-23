var productNameInput = document.getElementById('ProductName')
var productPriceInput = document.getElementById('ProductPrice')
var ProductCategoryInput = document.getElementById('ProductCategory')
var ProductDescInput = document.getElementById('ProductDesc')
var btnDelete = document.getElementById('btndelete')
var btnupdate = document.getElementById('btnupdate')
var tmp 
var products = []

if(localStorage.getItem("products") != null){
    products = JSON.parse(localStorage.getItem('products'))
    displayProduct(products)
}

function addProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:ProductCategoryInput.value,
        desc:ProductDescInput.value,
    }
    products.push(product)
    localStorage.setItem("products" , JSON.stringify(products))
    clear()
    displayProduct(products)
}

function clear(){
    productNameInput.value = ""
    productPriceInput.value = ""
    ProductCategoryInput.value = ""
    ProductDescInput.value = ""
}

function displayProduct(arr){
    var cartona = ``;
    for(var i = 0 ; i<arr.length ; i++){
        cartona += `<tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].price}</td>
        <td>${arr[i].category}</td>
        <td>${arr[i].desc}</td>
        <td><button onclick = "setDataInput(${i})" class="btn btn-outline-warning btn-sm">update</button></td>
        <td><button onclick = "deleteProduct(${i})" class="btn btn-outline-danger btn-sm">delete</button></td>
    </tr>`
    }
    document.getElementById('tablebody').innerHTML = cartona
}

function deleteProduct(productIndex){
    products.splice(productIndex ,1)
    localStorage.setItem("products" , JSON.stringify(products))
    displayProduct(products)
}

function setDataInput(updateIndex){
    btnDelete.classList.replace("d-block" , "d-none")
    btnupdate.classList.replace("d-none" , "d-block")
    productNameInput.value = products[updateIndex].name
    productPriceInput.value = products[updateIndex].price
    ProductCategoryInput.value = products[updateIndex].category
    ProductDescInput.value = products[updateIndex].desc
    tmp = updateIndex;
}

function updateProduct(){
    var product={
        name:productNameInput.value,
        price:productPriceInput.value,
        category:ProductCategoryInput.value,
        desc:ProductDescInput.value,
    }
    products.splice(tmp , 1 , product)
    localStorage.setItem("products" , JSON.stringify(products))
    clear()
    displayProduct(products)
    btnDelete.classList.replace("d-none" , "d-block")
    btnupdate.classList.replace("d-block" , "d-none")
    
}

function searchprodect(term){
    var matchprodect = []
    for(var i = 0; i<products.length ; i++){
        if(products[i].name.toLowerCase().includes(term.toLowerCase())  === true){
            matchprodect.push(products[i]) 
        }
    }
    displayProduct(matchprodect)
}