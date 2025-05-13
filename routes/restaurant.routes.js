import { createRestaurant, deleteRestaurant, fetchRestaurants, updateRestaurant } from "../controllers/restaurant.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


export function routes(app) { 
    app.post("/api/restaurant", verifyToken, createRestaurant);
    app.get("/api/restaurants",  fetchRestaurants);
    app.put("/api/restaurant/:id", updateRestaurant);
    app.delete("/api/restaurant/:id", deleteRestaurant);
}