//Object property shorthand

const name = "Andrew";
const userAge = "22";

const user = {
    name, //if we use the same exact name, it will work like that
    age: userAge,
    location: 'Cluj'
}

console.log(user);


//Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const {label:productLabel, stock, rating = 5} = product;
// console.log(productLabel, stock, rating);

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);

}

transaction('order', product)

