function container(height)
{
    let n = height.length;
    let left = 0, right = n - 1;
    let max_area = 0;
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        max_area = Math.max(max_area, area);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;

}
module.exports={container}