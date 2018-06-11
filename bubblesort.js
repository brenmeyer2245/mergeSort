function bubbleSort(arr) {
    let count = 0;
    for(let i = 0; i < arr.length;i++) {
        for(let j = 1;j<arr.length;j++) {
            if (typeof arr[j] !== "number") return "Error: Non-Numeric Value"
            if(arr[j-1] > arr[j]) {
                swap(arr, j);
            }
        }
    }
    return arr;
}

function swap(arr, index) {
    let temp = arr[index-1];
    arr[index-1] = arr[index];  
    arr[index] = temp;
}

