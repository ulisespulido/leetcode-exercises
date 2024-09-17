class Solution {

    private int [] nums;
    
    public Solution(int[] nums) {
        this.nums = nums;
    }
    
    public int[] reset() {
        return this.nums;
    }
    
    public int[] shuffle() {
        int [] shuffle  = this.nums.clone();
        for (int i = shuffle.length - 1; i >= 0; i--) {
            int index = new Random().nextInt(i + 1);
            int temp = shuffle[i];
            shuffle[i] = shuffle[index];
            shuffle[index] = temp;
        }
        return shuffle;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(nums);
 * int[] param_1 = obj.reset();
 * int[] param_2 = obj.shuffle();
 */