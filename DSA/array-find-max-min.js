let array = [1,5,2,4,6,-1,7];

function returnMaxMinElement(array) {
  if (array.length === 0) {
    console.log("Array is Emmpty!");
    return;
  }
  let minElement = array[array.length - 1];
  let maxElement = array[array.length - 1];
  for (let index = 0; index <= array.length - 2; index++) {
    if (array[index] > maxElement) {
      maxElement = array[index];
    }
    if (array[index] < minElement) {
      minElement = array[index];
    }
  }
  console.log(minElement, maxElement);
  return minElement, maxElement;
}

returnMaxMinElement(array);
