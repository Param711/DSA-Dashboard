// Problem: Buy a Shovel
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int k,r;
    cin>>k>>r;
    for(int i=1;i<=9;i++){
         if((k*i)%10==0||(k*i)%10==r){
            cout<<i;
            return 0;
         }
    }
    cout<<10<<endl;
    return 0;
}
