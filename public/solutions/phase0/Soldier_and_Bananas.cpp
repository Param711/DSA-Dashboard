// Problem: Soldier and Bananas
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int k,n,w;
    cin>>k>>n>>w;
    int price=(k*w*(w+1))/2;
    if(price>n){
        cout<<price-n;
    }
    else cout<<0;
    return 0;
}
