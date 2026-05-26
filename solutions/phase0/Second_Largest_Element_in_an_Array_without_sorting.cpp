// Problem: Second Largest Element in an Array without sorting
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
int getSecondLargest(vector<int> &arr) {
        // code here
        int maxe=INT_MIN;
        int second_max=0;
        for(int i=0;i<arr.size();i++){
            if(arr[i]>maxe){
                second_max=maxe;
                maxe=arr[i];
            }
            if(arr[i]<maxe && arr[i]>second_max){
                second_max=arr[i];
            }
        }
        return second_max;
    }
int main() {
    // Code here
    return 0;
}
