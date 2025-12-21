// Problem: George and Accommodation
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    int cnt=0;
    while(n--){
        int a,b;
        cin>>a>>b;
        if(b-a>=2){
            cnt++;

        }
    }
    cout<<cnt;
    return 0;
}
