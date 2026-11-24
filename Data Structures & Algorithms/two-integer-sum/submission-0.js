class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        const result = [];
        for(let i = 0; i < nums.length; i++) {
            if(!map.has(target - nums[i])) {
                map.set(nums[i], i);
            } else {
                result.push(map.get(target - nums[i]));
                result.push(i);
                return result;
            }
        }
    }
}
