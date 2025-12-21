// Problem: Even Odds
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    long long n,k;
    cin>>n>>k;
    long long x=(n+1)/2;
    if(k<=x){
        cout<<(2*k)-1;
    }
    if(x<k){
        cout<<2*(k-x);
    }
    return 0;
}
