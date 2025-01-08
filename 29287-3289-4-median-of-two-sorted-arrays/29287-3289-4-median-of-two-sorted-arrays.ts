function isEven(n) {
   return n % 2 == 0;
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let combinedArray = nums1.concat(nums2)
    let sortedArray = combinedArray.sort((a, b) => a - b)
    if(!isEven(sortedArray.length))
        return sortedArray[Math.ceil((nums1.length + nums2.length) / 2) - 1]
    return ( sortedArray[Math.ceil((nums1.length + nums2.length) / 2) -1 ] + sortedArray[Math.ceil((nums1.length + nums2.length) / 2)] ) / 2
};