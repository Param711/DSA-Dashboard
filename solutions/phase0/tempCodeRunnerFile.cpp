// Problem: Divisibility Problem
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int t;
    cin>>t;
    while(t--){
     int a,b;
     cin>>a>>b;
     cout<<(b-(a%b))<<"\n";
    }
    return 0;
}
