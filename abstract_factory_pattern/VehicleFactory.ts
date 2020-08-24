import VehicleFactoryInterface from "./VehicleFactoryInterface";
import Car from "./Car";
import Plane from "./Plane";

class VehicleFactory implements VehicleFactoryInterface {
  createCar(): Car {
    return new Car();
  }

  createPlane(): Plane {
    return new Plane();
  }
}

export default VehicleFactory;
