// Problem: Wrong Subtraction
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n,k;
    cin>>n>>k;
    for(int i=0;i<k;i++){
        if(n%10==0){
            n=n/10;
        }
        else n--;
    }
    cout<<n;
    return 0;
}
