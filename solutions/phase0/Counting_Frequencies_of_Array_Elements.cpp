// Problem: Counting Frequencies of Array Elements
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
vector<int> frequencyCount(vector<int>& arr) {
        // code here
        int n=arr.size();
        vector<int> hash;
        for(int i=0;i<n;i++){
            hash.push_back(0);
        }
        for(int i=0;i<n;i++){
            
            hash[arr[i]-1]++;
        }
        return hash;
    }

int main() {
    // Code here
    vector<int> arr={1,6,7,6,3,2,5};
    vector<int> hash=frequencyCount(arr);
    for(int i=0;i<7;i++){
        cout<<hash[i];

    }
    return 0;
}
