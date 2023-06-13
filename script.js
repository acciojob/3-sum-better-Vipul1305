function threeSum(arr, target) {
// write your code here
	arr.sort();
        let n = arr.length;
        let closest = 0;
        let minDiff = Number.MAX_VALUE;
        //set the three pointer
        for (let i = 0; i<n-2; i++){
            let low = i+1;
            let high = n-1;
            while(low < high){
                let sum = arr[i] + arr[low] + arr[high];
                if (sum == target){
                    return sum;
                }else if (sum < target){
                    low++;
                }else {// sum > target
                    high--;
                }
                let diff = Math.abs(sum - target);//to find closest value
                if (diff < minDiff){
                    minDiff = diff;
                    closest = sum;
                }
            }
        }
        return closest;
  
}

module.exports = threeSum;
