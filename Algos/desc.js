const algorithmDescriptions = [
    {
        name: "Bubble Sort",
        description: `Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the input list element by element, comparing the current element with the one after it, swapping their values if needed. These passes through the list are repeated until no swaps have to be performed during a pass, meaning that the list has become fully sorted.`,
      
        bestCase: "O(n)",  // Best case (already sorted)
        worstCase: "O(n²)",  // Worst case (reversed order)
        avgCase: "O(n²)"  // Average case
    },
    {
        name: "Selection Sort",
        description: "A simple comparison-based algorithm.It sorts an array by repeatedly selecting the smallest (or largest) element from the unsorted portion and swapping it with the first unsorted element. This process continues until the entire array is sorted.",
       
        bestCase: "O(n²)",  // Best case (it always performs n² comparisons)
        worstCase: "O(n²)",  // Worst case (same as best case, no optimization)
        avgCase: "O(n²)"  // Average case
    },
    {
        name: "Insertion Sort",
        description: "Insertion sort is a simple sorting algorithm that works by iteratively inserting each element of an unsorted list into its correct position in a sorted portion of the list.",
        
        bestCase: "O(n)",  // Best case (nearly sorted array)
        worstCase: "O(n²)",  // Worst case (reverse sorted array)
        avgCase: "O(n²)"  // Average case
    },
    {
        name: "Quick Sort",
        description: "QuickSort is a sorting algorithm based on the Divide and Conquer that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.",
        bestCase:"O(nlogn)",
        worstCase: "O(n²)",  // Worst case (pivot selection is poor)
        avgCase: "O(n log n)"  // Average case
    },
    {
        name:"Heap Sort",
        description:"Heap sort is a sorting algorithm that sorts data in ascending or descending order using the input data. It is a tree-like structure created from the input data. It's similar to selection sorting, in which we find the smallest element first and place it at the top. The process is repeated for the remaining elements.",
        bestCase:"O(nlogn)",
        worstCase: "O(n²)",  // Worst case (pivot selection is poor)
        avgCase: "O(n log n)" 
    }
];


export { algorithmDescriptions };
