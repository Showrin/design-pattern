import VehicleFactory from "./VehicleFactory";
import Car from "./Car";
import Plane from "./Plane";

const vehicleFactory: VehicleFactory = new VehicleFactory();
const ourCar: Car = vehicleFactory.getCar();
const ourPlane: Plane = vehicleFactory.getPlane();

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
