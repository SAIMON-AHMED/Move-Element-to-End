// Time -> O(n) | Space -> O(1)

function moveElementToEnd(array, toMove) {

  let pointerOne = 0;
  let pointerTwo = array.length - 1;

  while (pointerOne < pointerTwo) {

    if (array[pointerOne] === toMove && array[pointerTwo] !== toMove) {
      let temp = array[pointerOne];
      array[pointerOne] = array[pointerTwo];
      array[pointerTwo] = temp;
      pointerOne++;
      pointerTwo--;
    } else if (array[pointerTwo] === toMove) {
      pointerTwo--;
    } else if (array[pointerOne] !== toMove) {
      pointerOne++;
    }
  }

  return array;

}

