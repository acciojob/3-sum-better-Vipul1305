function threeSum(arr, target) {
// write your code here
	arr.sort();
	let n = arr.length;
	let i = 0 ; j = n-1;
	let max = Number.MAX_VALUE;
	let ans = 0
	while (i<j) {
		let k = i+1;
		
		while(k<j){
			let sum = arr[i] + arr[k] + arr[j];
			if(sum < target){
				k++;
			}else if(sum > target){
				j--;
			}else{
				return sum;
			}
			let diff = math.abs(sum - target);
			if (diff<max){
				max = diff;
				ans = sum;
			}
		}
		i++;
	}
	return ans;
}

module.exports = threeSum;
