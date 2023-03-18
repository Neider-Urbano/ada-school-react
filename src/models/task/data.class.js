import { State } from "./levels.enum";

class Task {
  name = "";
  description = "";
  state = State.COMPLETE;
  constructor(name, description, state) {
    this.name = name;
    this.description = description;
    this.state = state;
  }
}

export default Task;
