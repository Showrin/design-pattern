import Car from './Car';
import Plane from './Plane';

class VehicleFactory {
	getCar(): Car {
		return new Car();
	}

	getPlane(): Plane {
		return new Plane();
	}
}

export default VehicleFactory;
