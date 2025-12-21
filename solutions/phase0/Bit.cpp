// Problem: Bit++
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
     int t,x=0;
    cin>>t;
    while(t--){
        string s;
        cin>>s;
        if((s=="--X") || (s=="X--")){
            x--;
        }
        if((s=="++X") || (s=="X++")){
            x++;
        }
        
    }
    cout<<x;
    return 0;
}
//also check for s[1] which is + or -
