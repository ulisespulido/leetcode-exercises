/**
 * Given an integer array nums and an integer k, return the k most frequent elements. 
 * You may return the answer in any order.
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let frequencies = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        frequencies[num] = frequencies[num] + 1 || 1;
    }
    
    let buckets = new Array(nums.length);

    for (const key in frequencies) {
        if (buckets[frequencies[key]]) {
            buckets[frequencies[key]].push(key);
        } else {
            buckets[frequencies[key]] = [key]
        }
    }
    
   
    let result = [];
    for (let i = buckets.length - 1; i > 0 && k > 0; i--) {
        while(buckets[i] && buckets[i].length && k > 0) {
            result.push(parseInt(buckets[i].pop()));
            k--;
        }
    }
    return result;
};