const data = undefined
const type = typeof(data)
let typeIs;

switch (type) {
  case "number":
    typeIs = "number"
    break;
  case "string":
    typeIs = "string"
    break;
  case "boolean":
    typeIs = "boolean"
    break;
  case "object":
    typeIs = "object"
    break;
  case "function":
    typeIs = "function"
    break;
  default:
  typeIs = "Not a value type"
}
console.log(typeIs)