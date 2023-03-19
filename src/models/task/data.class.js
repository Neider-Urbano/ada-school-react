import { State } from "./levels.enum";

class TaskClass {
  id = 0;
  name = "";
  description = "";
  state = State.COMPLETE;
  constructor(id, name, description, state) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.state = state;
  }
}

export default TaskClass;
