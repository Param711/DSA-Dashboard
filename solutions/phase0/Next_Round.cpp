// Problem: Next Round
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n,k;
    cin>>n>>k;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int target=arr[k-1];
    int count=0;
    for(int i=0;i<n;i++){
        if(arr[i]>=target && arr[i]>0){
            count++;
        }
    }
    cout<<count;
    return 0;
}
