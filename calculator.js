const action = Object.freeze({
  ADD: "ADD",
  SUBTRACT: "SUBTRACT",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE"
})

const calculate = (num1, num2, _action) => {
    switch (_action) {
    case action.ADD:
      return num1 + num2;
    case action.SUBTRACT:
      return num1 - num2;
    case action.MULTIPLY:
      return num1 * num2;
    case action.DIVIDE:
      return num1 / num2;

    default:
        throw Error("invalid Calcaulate action provided: Valid options are SUBTRACT, MULTIPLY, DIVIDE, ADD.")
      break;
  }
}

//example
// calculate(1,2, action.ADD);
