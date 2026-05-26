// Problem: Linear Search
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
bool searchInSorted(vector<int>& arr, int k) {
        // code here
        for(int i=0;i<arr.size();i++){
            if(arr[i]==k){
                return true; 
            }
        }
        return false;
    }

int main() {
    int k=9;
    vector<int> arr={7,6,8,3,9};
    cout<<searchInSorted(arr,k);
    return 0;
}
