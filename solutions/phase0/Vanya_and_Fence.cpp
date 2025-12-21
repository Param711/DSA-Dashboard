// Problem: Vanya and Fence
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n,h;
    int count=0;
    cin>>n>>h;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        if(x>h){
            count=count+2;
        }
        if(x<=h){
            count++;
        }
    }
    cout<<count;
    return 0;
}
