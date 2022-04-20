// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.


//https://leetcode.com/problems/find-median-from-data-stream

// var MedianFinder = function () {
//     this.maxHeap = new MaxPriorityQueue();
//     this.minHeap = new MinPriorityQueue();
//     console.log(this.maxHeap);
// }

// MedianFinder.prototype.addNum = function (num) {
//     if (this.maxHeap.empty() || this.maxHeap.front().element >= num) {
//         this.maxHeap.eneque(num);
//     } else {
//         this.minHeap.eneque(num);
//     }

//     if (this.maxHeap.size() > this.minHeap.size() + 1) {
//         this.minHeap.eneque(this.maxHeap.dequeue().element);
//     } else if (this.minHeap.size() > this.maxHeap.size()) {
//         this.maxHeap.eneque(this.minHeap.dequeue().element);
//     }
// }

// MedianFinder.prototype.findMedian = function () {
//     if (this.minHeap.size() > this.maxHeap.size()) {
//         return this.minHeap.front().element;
//     }
//     if (this.maxHeap.size() > this.minHeap.size()) {
//         return this.maxHeap.front().element;
//     }
//     if (this.maxHeap.size() === this.minHeap.size()) {
//         return this.minHeap.front().element / 2 + this.maxHeap.front().element / 2
//     }
// }
// var MedianFinder = function () {
//     var arr = [];
// }

// MedianFinder.prototype.addNum = function (num) {

//     let ary = this.arr;

//     for (let n = 0; n < ary.length; n++) {
//         if (ary[n] > num) {
//             return ary.splice(n, 0, num);
//         }
//     }
//     ary.push(num);
// };

// MedianFinder.prototype.findMedian = function () {
//     let len = this.arr.length;
//     if (len % 2 != 0) return this.arr[Math.floor(len / 2)];
//     return (this.arr[len / 2] + this.arr[(len / 2) - 1]) / 2;

// };


// var medianFinder = new MedianFinder();
// medianFinder.addNum(1); // arr = [1]
// medianFinder.addNum(2); // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3); // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
// console.log(medianFinder);


//using class

// class MedianFinder {
//     constructor() {
//         this.data = []
//     }

//     add(num) {
//         if (this.data.length === 0) this.data.push(num);
//         else {
//             let start = 0;
//             let end = this.data.length;
//             while (start < end) {
//                 var mid = Math.floor((start + end) / 2);
//                 if (num > this.data[mid]) {
//                     start = mid + 1
//                 } else {
//                     end = mid;
//                 }
//             }
//             this.data.splice(start, 0, num)
//         }
//     }
//     findMedian() {
//         let arr = this.data;
//         if (arr.length % 2 === 0) {
//             let n = arr.length / 2;
//             return (arr[n - 1] + arr[n]) / 2;
//         } else {
//             let n = (arr.length - 1) / 2;
//             return arr[n];
//         }
//     }
// }

//using closure

function findMedianData() {
    const data = []

    return {
        add(num) {
            if (data.length === 0) data.push(num);
            else {
                let start = 0;
                let end = data.length;
                while (start < end) {
                    var mid = Math.floor((start + end) / 2);
                    if (num > data[mid]) {
                        start = mid + 1
                    } else {
                        end = mid;
                    }
                }
                data.splice(start, 0, num)
            }
        },
        findMedian() {
            let arr = data;
            if (arr.length % 2 === 0) {
                let n = arr.length / 2;
                return (arr[n - 1] + arr[n]) / 2;
            } else {
                let n = (arr.length - 1) / 2;
                return arr[n];
            }
        }
    }
}

const median = new findMedianData();
median.add(5);
median.add(7);
median.add(4);
median.add(9);
median.add(0);
// median.add(8);
console.log(median.findMedian());