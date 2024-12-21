# Move Element to End

This repository contains a function `moveElementToEnd` implemented in JavaScript. The function rearranges elements in an array so that all instances of a specified element are moved to the end of the array while maintaining the order of the other elements.

---

## Description

The `moveElementToEnd` function is useful when you want to rearrange elements of an array to group certain elements at the end. This operation is performed in-place, optimizing both time and space efficiency.

---

## Function Signature

```javascript
function moveElementToEnd(array, toMove) -> Array
```

---

## Parameters

- `array` (Array): The array of elements to be processed.
- `toMove` (any): The element to be moved to the end of the array.

---

## Returns

- `Array`: The modified array with all instances of `toMove` at the end.

---

## Time and Space Complexity

- **Time Complexity**: O(n) - The function processes the array in a single traversal using two pointers.
- **Space Complexity**: O(1) - The function operates in-place without requiring extra space.

---

## Algorithm Explanation

1. Initialize two pointers:
   - `pointerOne` starts at the beginning of the array.
   - `pointerTwo` starts at the end of the array.

2. Loop until `pointerOne` and `pointerTwo` meet:
   - If `array[pointerOne]` matches `toMove` and `array[pointerTwo]` does not, swap the elements at these pointers and adjust both pointers.
   - If `array[pointerTwo]` matches `toMove`, decrement `pointerTwo`.
   - If `array[pointerOne]` does not match `toMove`, increment `pointerOne`.

3. Return the modified array.

---

## Examples

### Example 1

```javascript
const array = [2, 1, 2, 2, 3, 4, 2];
const toMove = 2;
console.log(moveElementToEnd(array, toMove));
// Output: [4, 1, 3, 2, 2, 2, 2] (Order may vary for the elements not equal to `toMove`)
```

### Example 2

```javascript
const array = [1, 2, 3, 4, 5];
const toMove = 6;
console.log(moveElementToEnd(array, toMove));
// Output: [1, 2, 3, 4, 5] (No change since `toMove` is not in the array)
```

---

## Edge Cases

1. `toMove` is not present in the array:
   - Input: `[1, 2, 3]`, `toMove: 4`
   - Output: `[1, 2, 3]`

2. Array is empty:
   - Input: `[]`, `toMove: 1`
   - Output: `[]`

3. All elements are `toMove`:
   - Input: `[2, 2, 2]`, `toMove: 2`
   - Output: `[2, 2, 2]`

4. Array contains only one element:
   - Input: `[1]`, `toMove: 1`
   - Output: `[1]`

---

## Usage

To use this function:

1. Import the function:

```javascript
const { moveElementToEnd } = require('./path-to-file');
```

2. Call the function with the desired arguments:

```javascript
const result = moveElementToEnd([2, 1, 2, 2, 3], 2);
console.log(result);
```

---

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
