// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.


//https://leetcode.com/problems/find-median-from-data-stream

var MedianFinder = function() {
    this.maxHeap = new MaxPriorityQueue();
    this.minHeap = new MinPriorityQueue();
    console.log(this.maxHeap);
}

MedianFinder.prototype.addNum = function (num) {
    if(this.maxHeap.empty() || this.maxHeap.front().element >= num){
        this.maxHeap.eneque(num);
    }
    else{
        this.minHeap.eneque(num);
    }

    if(this.maxHeap.size() > this.minHeap.size() + 1){
        this.minHeap.eneque(this.maxHeap.dequeue().element);
    }
    else if(this.minHeap.size() > this.maxHeap.size()){
        this.maxHeap.eneque(this.minHeap.dequeue().element);
    }
}

MedianFinder.prototype.findMedian = function () {
    if(this.minHeap.size() > this.maxHeap.size()){
        return this.minHeap.front().element;
    }
    if(this.maxHeap.size() > this.minHeap.size()){
        return this.maxHeap.front().element;
    }
    if(this.maxHeap.size() === this.minHeap.size()){
        return this.minHeap.front().element / 2 + this.maxHeap.front().element / 2
    }
}

var medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
console.log(medianFinder);
