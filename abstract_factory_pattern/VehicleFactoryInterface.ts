import Car from "./Car";
import Plane from "./Plane";

interface VehicleFactoryInterface {
  createCar(): Car;
  createPlane(): Plane;
}

export default VehicleFactoryInterface;
