// Problem: Sort an array of 0s, 1s and 2s
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
// dutch national flag algo
//0 0 0 0 0      1 1 1 1 1     2 0 1 0      2 2 2 2 2
//0     low-1   low     mid-1  mid  high-1  high    n-1
// sorted between 0 to low-1 low to mid-1 and high to n-1    unsorted from mid to high-1
// so in our case we will take low=0(no other option) mid=0 and high=n-1 (unsorted from mid to high -1)
void sortColors(vector<int>& arr) {
        int n=arr.size();
        int low=0;
        int mid=0;
        int high=n-1;
        while(mid<=high){
            if(arr[mid]==0){
                swap(arr[mid],arr[low]);
                mid++;
                low++;
            }
            else if(arr[mid]==1){
                mid++;

            }
            else if(arr[mid]==2){
                swap(arr[mid],arr[high]);
                high--;
            }
        }

        
    }
int main() {
    // Code here
    return 0;
}
