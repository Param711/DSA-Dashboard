// Problem: Tram
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    int max=0;
    int curr=0;
    for(int i=0;i<n;i++){
        int a,b;
        cin>>a>>b;
        curr=curr+b-a;
        if(curr>max){
            max=curr;
        }

    }
    cout<<max;
    return 0;
}
