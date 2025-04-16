// import the classes
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// define the interface
interface AbleToTow {
    towingCapacity: number;
    tow(vehicle: any): void; // Or use a more specific type like { weight: number, make: string, model: string }
}

// export the interface
export default AbleToTow;
