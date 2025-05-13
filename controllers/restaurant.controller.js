import RestaurantModel from "../models/Restaurant.model.js";

export async function createRestaurant(req, res) {
    try{
        console.log("controller chala");
        
        const { name, imageUrl, rating, cuisines, deliveryTime } = req.body;
        const newRestaurant = await RestaurantModel.create({name,imageUrl,rating,cuisines,deliveryTime});
        res.status(201).json({"newRestaurant":newRestaurant});
    }
    catch(err){
       res.status(500).json({"err while adding restaurant": err.message });
    }
}

export async function fetchRestaurants(req, res) {
    try{
        const data = await RestaurantModel.find({})
        if (!data) {
            return res.status(404).json({ message: "Restaurants not found" });
        }
        return res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({ "err while fetching restaurant": err.message })
    }
}



export async function updateRestaurant(req, res) {
  try {
    const _id = req.params.id;
    const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(_id, req.body , {new:true});

    if (!updatedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(updatedRestaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function deleteRestaurant(req, res) {
  try {
    const _id = req.params.id;
    const deletedRestaurant = await RestaurantModel.findByIdAndDelete(_id);

    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    res.json(deletedRestaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}








