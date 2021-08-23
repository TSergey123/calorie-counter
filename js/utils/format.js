export const checkNumbersValidity = (inputs) => {
  for (let i = 0; i < inputs.length; i++) {
   let input = inputs[i];
   input.addEventListener("input", () => {
    input.value = input.value.replace(/[^\d]/g, "");
   });
  }
};

export const spaceBigNumbers = (input) => {
  return input.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}