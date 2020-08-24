import CarInterface from "./CarInterface";

class Car implements CarInterface {
  set_num_of_wheels() {
    return 4;
  }

  set_num_of_passengers() {
    return 4;
  }

  has_gas() {
    return true;
  }
}

export default Car;
