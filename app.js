//import sleep from "./Algos/util.js";
import sorting from "./Algos/sorting.js";
import { algorithmDescriptions } from './Algos/desc.js';
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const nBars = document.getElementById("nbar");
const stage = document.getElementById("stage");
const generate = document.getElementById("button");
const solveButton = document.getElementById("solve");

let bars = [];
let barsDiv = [];
let numbers = [];

// Function to create bars
const createBars = () => {
    const n = parseInt(nBars.value);
    stage.innerHTML = ""; // Clear the stage
    barsDiv = []; // Reset barsDiv
    numbers = [];
    bars = Array.from({ length: n }, () => ({
        width: 20,
        height: Math.floor(Math.random() * 200) + 20, // Random height
    }));

    bars.forEach((bar, index) => {
        const barElement = document.createElement("div");
        barElement.className = "bar";
        barElement.style.width = `${bar.width}px`;
        barElement.style.height = `${bar.height}px`;
        barElement.style.left = `${5 + index * 30}px`;

        const number = document.createElement("div");
        number.className = "bar-number";
        number.style.position = "absolute";
        number.style.textAlign = "center";
        number.style.left = `${5 + index * 30}px`;
        number.style.bottom = "0"; // Position numbers below the bar
        number.style.width = `${bar.width}px`;
        number.innerHTML = `${bar.height}`;

        barsDiv.push(barElement); // Push only barElement to barsDiv
        numbers.push(number);
        stage.appendChild(barElement);
        stage.appendChild(number);
    });

    stage.style.width = `${n * 30}px`;
};
/*const algorithmDescriptions = [
    "Bubble Sort: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.{<br>} Time Complexity: O(n²).",
    "Selection Sort: A simple comparison-based algorithm that divides the array into sorted and unsorted parts, repeatedly selecting the smallest element from the unsorted part. Time Complexity: O(n²).",
    "Insertion Sort: Builds the sorted array one element at a time by comparing each new element with the ones already sorted. Time Complexity: O(n²).",
    "Quick Sort: A divide-and-conquer algorithm that selects a pivot and partitions the array around it, recursively sorting the partitions. Time Complexity: O(n log n) (average case).",
];*/

const algorithmInfo = document.getElementById("algorithm-info");
// Function to swap bars
async function swapBar(barsDiv, numbers, i, j) {
    // Swap positions of bars visually
    barsDiv[i].style.left = `${5 + j * 30}px`;
    barsDiv[i].classList.add("activate");
    barsDiv[j].style.left = `${5 + i * 30}px`;
    barsDiv[j].classList.add("activate");

    // Swap positions of numbers visually
    numbers[i].style.left = `${5 + j * 30}px`;
    numbers[i].classList.add("activate");
    numbers[j].style.left = `${5 + i * 30}px`;
    numbers[j].classList.add("activate");

    await sleep(1000); // Delay for animation

    barsDiv[i].classList.remove("activate");
    barsDiv[j].classList.remove("activate");
    numbers[i].classList.remove("activate");
    numbers[j].classList.remove("activate");

    // Swap elements in barsDiv and numbers arrays
   [barsDiv[i], barsDiv[j]] = [barsDiv[j], barsDiv[i]];
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

// Sorting Algorithms
const algorithms = [
    new sorting().BubbleSort.bind(new sorting()),
    new sorting().selectionSort.bind(new sorting()),
    new sorting().quickSort.bind(new sorting()),
    new sorting().insertionSort.bind(new sorting()),
    new sorting().heapSort.bind(new sorting()),
];

// Function to solve
let selectedAlgorithmIndex=0
const sortOptions = document.querySelectorAll(".sort-option");

sortOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
        const algorithm = algorithmDescriptions[index];

        // Update the selected algorithm index and add the active class
        selectedAlgorithmIndex = index; 
        sortOptions.forEach((btn) => btn.classList.remove("active"));
        option.classList.add("active");

        // Update the algorithm details in the UI
        algorithmInfo.innerHTML = `
            
            <h2>${algorithm.name}</h2>
            <p><strong><u>DESCRIPTION </u>:</strong> ${algorithm.description}</p>
           
            <p><u><strong>BEST CASE :</strong></u> ${algorithm.bestCase}</p>
            <p><strong><u>WORST CASE:</strong></u> ${algorithm.worstCase}</p>
            <p><strong><u>AVERAGE CASE:</strong></u> ${algorithm.avgCase}</p>
          
        `;
    });
});
const solve = async () => {
    const array = structuredClone(bars.map((e) => e.height));
    const swaps = algorithms[selectedAlgorithmIndex](array); 

    for (let i = 0; i < swaps.length; i++) {
        const { firstPosition, lastPosition } = swaps[i];
        if (firstPosition !== lastPosition) {
            await swapBar(barsDiv, numbers, firstPosition, lastPosition);
        }
    }
};

// Initialize
createBars();

// Event Listeners
button.addEventListener("click", createBars);
solvebtn.addEventListener("click", solve);
