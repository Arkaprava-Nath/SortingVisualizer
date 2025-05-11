
const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

const defaultCompare = (a, b) => {
  if (a === b) {
    return 0
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

let swaps = []

const partition = (array, left, right, compareFn) => {
  const pivot = array[right]; // Use the rightmost element as the pivot
  let i = left - 1; // Pointer for the smaller element

  for (let j = left; j < right; j++) {
      // If current element is less than the pivot
      if (compareFn(array[j], pivot) === Compare.LESS_THAN) {
          i++;
          // Swap elements
          [array[i], array[j]] = [array[j], array[i]];
          swaps.push({ firstPosition: i, lastPosition: j });
      }
  }

  // Place the pivot element in the correct position
  [array[i + 1], array[right]] = [array[right], array[i + 1]];
  swaps.push({ firstPosition: i + 1, lastPosition: right });

  return i + 1; // Return the partition index
};


const quick = (array, left, right, compareFn) => {
  if (left < right) {
      const pivotIndex = partition(array, left, right, compareFn);
      // Recursively sort elements before and after the partition
      quick(array, left, pivotIndex - 1, compareFn);
      quick(array, pivotIndex + 1, right, compareFn);
  }
  return array
};

/*function merge(array, left, mid, right) {
  var swaps = [];
  var leftSubarray = array.slice(left, mid + 1); // Elements from `left` to `mid`
  var rightSubarray = array.slice(mid + 1, right + 1); // Elements from `mid + 1` to `right`

  var i = 0; // Pointer for left subarray
  var j = 0; // Pointer for right subarray
  var k = left; // Pointer for the merged array in the original array

  while (i < leftSubarray.length && j < rightSubarray.length) {
      if (leftSubarray[i] <= rightSubarray[j]) {
          array[k] = leftSubarray[i]; // Take from left
          i++;
      } else {
          array[k] = rightSubarray[j]; // Take from right
          swaps.push({ firstPosition: k, lastPosition: left + i }); // Track the swap
          j++;
      }
      k++;
  }

  // Copy any remaining elements from the left subarray
  while (i < leftSubarray.length) {
      array[k] = leftSubarray[i];
      i++;
      k++;
  }

  // Copy any remaining elements from the right subarray
  while (j < rightSubarray.length) {
      array[k] = rightSubarray[j];
      j++;
      k++;
  }

  return swaps;
}

function mergeSortHelper(array, left, right) {
  var swaps = [];
  
  if (left < right) {
      var mid = Math.floor((left + right) / 2);
      swaps = swaps.concat(mergeSortHelper(array, left, mid)); // Sort left half
      swaps = swaps.concat(mergeSortHelper(array, mid + 1, right)); // Sort right half
      swaps = swaps.concat(merge(array, left, mid, right)); // Merge the sorted halves
  }
  console.log(swaps)
  return swaps;
}*/
export default class sorting{
    /*constructor(swapBar){
        this.swapBar=swapBar
    }*/
    BubbleSort(array){
      const swaps=[]
      for (let i=0;i<array.length;i++)
      {
        for (let j=0;j<array.length-i-1;j++)
        {
            if(array[j]>array[j+1])
            {
                let t=array[j];
                array[j]=array[j+1];
                array[j+1]=t;
                swaps.push({firstPosition:j,lastPosition:j+1})
            }
        }
      }
      return swaps
    }
    selectionSort(array) {
      const swaps = []
      let min
      for (let i = 0; i < array.length - 1; i++) {
        min = i
        for (let j = i + 1; j < array.length; j++) {
          if (array[j] < array[min]) {
            min = j
          }
        }
        let temp = array[min]
        array[min] = array[i]
        array[i] = temp
        swaps.push({ firstPosition: min, lastPosition: i })
      }
  
      return swaps
    }
    quickSort(array, compareFn = defaultCompare) {
      swaps = []
      quick(array, 0, array.length - 1, compareFn)
      return swaps
    }
    
      insertionSort(array) {
      var swaps = [];
      for (var i = 1; i < array.length; i++) {
          var key = array[i];
          var j = i - 1;
  
          // Move elements of array[0..i-1] that are greater than the key
          // to one position ahead of their current position.
          while (j >= 0 && array[j] > key) {
              array[j + 1] = array[j];
              swaps.push({ firstPosition: j + 1, lastPosition: j }); // Track the swap
              j--;
          }
          array[j + 1] = key;
      }
      
      return swaps;
  }
  heapSort(array) {
    const swaps = [];
  
    // Function to heapify a subtree rooted at index i
    function heapify(arr, n, i) {
      let largest = i; // Initialize largest as root
      let left = 2 * i + 1; // left = 2*i + 1
      let right = 2 * i + 2; // right = 2*i + 2
  
      // If left child is larger than root
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      // If right child is larger than largest so far
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      // If largest is not root
      if (largest !== i) {
        // Swap the elements
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        swaps.push({ firstPosition: i, lastPosition: largest });
  
        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
      }
    }
  
    // Build a max heap
    let n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i);
    }
  
    // One by one extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
      // Swap the root (maximum element) with the last element
      let temp = array[0];
      array[0] = array[i];
      array[i] = temp;
      swaps.push({ firstPosition: 0, lastPosition: i });
  
      // Call heapify on the reduced heap
      heapify(array, i, 0);
    }
  
    return swaps;
  }
/*
 mergeSort(array) {
    return mergeSortHelper(array, 0, array.length - 1);
}*/
  
  }
