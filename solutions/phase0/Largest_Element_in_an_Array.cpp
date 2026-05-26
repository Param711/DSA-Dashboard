// Problem: Largest Element in an Array
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
int largest(vector<int> &arr) {
        // code here
        int maxe=INT_MIN;
        for(int i=0;i<arr.size();i++){
            maxe=max(arr[i],maxe);
        }
        return maxe;
    }
int main() {
    // Code here
    int max=0;
    return 0;
}
