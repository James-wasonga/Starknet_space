console.log("hello this is the place");
const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItems");

const products = [
    {
        id: 1,
        title:"Jordan",
        price:119,
        colors:[
            {
                code:"black",
                img:"./images/air1.png",
            },
            {
                code:"darkblue",
                img:"./images/air1.png",
            },
        ],

},
{
    
        id: 2,
        title:"Fila",
        price:119,
        colors:[
            {
                code:"black",
                img:"./images/whitefila.png",
            },
            {
                code:"darkblue",
                img:"./images/whitefila.png",
            },
        ],

},

{
    id: 3,
    title:"Air Force",
    price:119,
    colors:[
        {
            code:"black",
            img:"./images/specialj.png",
        },
        {
            code:"darkblue",
            img:"./images/redfila.png",
        },
    ],

},
{
    id: 4,
    title:"Air Fila",
    price:119,
    colors:[
        {
            code:"black",
            img:"./images/redfila.png",
        },
        {
            code:"darkblue",
            img:"./images/redfila.png",
        },
    ],

},

]

let choosenProduct = products[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentColors = document.querySelectorAll(".color");
const currentSizes = document.querySelectorAll(".size");
//console.log(currentSizes);


 menuItem.forEach((item,index) => {
     item.addEventListener("click",()=>{
      //console.log("you clicked" + index);
    
      wrapper.style.transform =`translateX(${-100 * index}vw)`;

      //change the choosen product
      choosenProduct = products[index];

      //change text of currentProduct
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "$" + choosenProduct.price
      currentProductImg.src = choosenProduct.colors[0] + img
//assigning  new colors
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
  });  
 });

 currentColors.forEach((color,index ) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
 })

 currentProductSizes.forEach((size,index) => { 
    size.addEventListener("click",() => {
        currentProductSizes.forEach(size=>{
            size.style.backgroundColor = "white";
            size.style.color = "black";  
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";

    })
 })

 const productButton = document.querySelector(".productButton");
 const payment = document.querySelector(".payment");
 const close = document.querySelector(".close");

 productButton.addEventListener("click",()=>{
   payment.style.display="flex"
 });

 close.addEventListener("click",()=>{
    payment.style.display="none"
 });

