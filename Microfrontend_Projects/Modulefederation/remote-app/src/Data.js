const images = require.context("../public/assets", false, /\.(png|jpe?g|gif|svg)$/i);
const getImage = (imageName) => images(`./${imageName}`);

export const Product = [
    {
        id: 1,
        price: 1000,
        name: "Happy Family",
        img: getImage("pic1.png")
    },
    {
        id: 2,
        price: 2000,
        name: "Budhha",
        img: getImage("pic2.jpg")
    },
    {
        id: 3,
        price: 2500,
        name: "Couple",
        img: getImage("pic3.jpg")
    },
    {
        id: 4,
        price: 3000,
        name: "Paper bag",
        img: getImage("pic4.jpg")
    }
]
