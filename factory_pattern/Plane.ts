import Vehicle from './Vehicle';

class Plane implements Vehicle {
	set_num_of_wheels() {
		return 14;
	}

	set_num_of_passengers() {
		return 100;
	}

	has_gas() {
		return false;
	}
}

export default Plane;
