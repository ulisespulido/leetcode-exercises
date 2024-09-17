class MinStack {

    List<Integer> stack = new ArrayList();
    int min = Integer.MAX_VALUE;

    public MinStack() {
        
    }
    
    public void push(int val) {
        stack.add(val);
        min = Math.min(min, val);
    }
    
    public void pop() {
        Integer removed = stack.remove(stack.size() - 1);
        if (removed  == min) {
            min = Integer.MAX_VALUE;
            for (int num : stack) {
                min = Math.min(min, num);
            }
        }
    }
    
    public int top() {
        return stack.get(stack.size() - 1);
    }
    
    public int getMin() {
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */