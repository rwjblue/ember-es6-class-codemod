import { computed } from "@ember/object";
import Component from "@ember/component";

function fullNameMacro() {
  return computed("firstName", "lastName", function() {
    return `${this.firstName} ${this.lastName}`;
  });
}

export default class TestComponentComponent extends Component {
  @fullNameMacro
  fullName;
}
