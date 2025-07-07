let arr = [];

for (let i = 1; i <= 300; i++) {
    arr.push(i);
}

// A linear search conducted on the array

function linearSearch(arr, target) {
    let i = 0;
    for (items of arr) {
        if (items === target) {
            console.log(i);
        } else {
            i++;
        }
    }
}

// linearSearch(arr, 221);


// A binary search conducted on the array

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length;
    let mid = Math.floor((low + high) / 2);

    while (true) {
        if (target > arr[mid]) {
            low = Math.floor(arr.length / 2);
            arr = arr.slice(mid, high);
            mid = Math.floor((low + high / 2));
            continue;

        } else if (target < arr[mid]) {
            arr = arr.slice(low, mid);
            high = arr.length;
            mid = (low + high) / 2;

        } else if (target === arr[mid]) {
            console.log(arr[mid]);
            console.log('item found');
            break;
        }
    }
}

binarySearch(arr, 221);