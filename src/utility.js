
// // add to localStorage
// const addToDb = (id) =>{
//     let DetailsCard = {}

//     //check previous data in localstorage
//     const storedCard = localStorage.getItem('details-cart');
//     if(storedCard){
//         DetailsCard = JSON.parse(storedCard);
//     }

//     //add Quantity
//     const quantity = DetailsCard[id];
//     if(quantity){
//         const newQuantity = quantity + 1;
//         DetailsCard[id] = newQuantity;
//     }
//     else{
//         DetailsCard[id] = 1;
//     }
//     //set data
//     localStorage.setItem('details-card', JSON.stringify(DetailsCard))
// }

// const getStordCart = () =>{
//     let DetailsCard = {}

//     //check previous data in localstorage
//     const storedCard = localStorage.getItem('details-cart');
//     if(storedCard){
//         DetailsCard = JSON.parse(storedCard);
//     }
//     return DetailsCard;
// }
//use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
export {addToDb, getShoppingCart};