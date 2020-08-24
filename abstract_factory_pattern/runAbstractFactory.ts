import VehicleFactory from "./VehicleFactory";
import Car from "./Car";
import Plane from "./Plane";

const vehicleFactory: VehicleFactory = new VehicleFactory();
const ourCar: Car = vehicleFactory.createCar();
const ourPlane: Plane = vehicleFactory.createPlane();

console.log(
  ourCar.set_num_of_wheels(),
  ourCar.set_num_of_passengers(),
  ourCar.has_gas()
);

console.log(
  ourPlane.set_num_of_wheels(),
  ourPlane.set_num_of_passengers(),
  ourPlane.has_gas()
);
