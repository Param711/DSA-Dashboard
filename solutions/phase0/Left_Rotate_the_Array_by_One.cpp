// Problem: Left Rotate the Array by One
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
vector<int> rotateArray(vector<int>& arr, int n) {
    // Write your code here.
    int temp=arr[0];
    for(int i=0;i<n-1;i++){
        arr[i]=arr[i+1];
    }
    arr[n-1]=temp;
    return arr;

}
int main() {
    // Code here

    return 0;
}
