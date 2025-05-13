import RestaurantModel from "./models/Restaurant.model.js";

const dummyArr = [
    {
        "name": "Burger King",
        "rating": "4.4",
        "cuisines": "Burger, Americans",
        "deliveryTime":"20-25 mins",
        "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/f67ccf11-0c7e-4ff6-aeb0-1b20304f6783_457403.jpg"
    },
    {
        "name": "Domino's Pizza",
        "rating": "4.5",
        "cuisines": "Pizza, Italian",
        "deliveryTime":"20-25 mins",
        "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/13/f0cc7a0c-a135-49e1-a10a-eaefb7aa63fe_239856.JPG"
    },
    {
        "name": "Zaza Mughal biryani",
        "rating": "4.4",
        "cuisines": "Biryani",
        "deliveryTime":"20-30 mins",
        "imgUrl": "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/4b432262-3e9d-4478-af01-6ed31c6bc3a8_391105.jpg"
    }
]

export async function seedDB(){
    await RestaurantModel.insertMany(dummyArr);
    console.log("DB Seeded");
}

