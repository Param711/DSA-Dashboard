// Problem: Magnets
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    vector<int> v;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        v.push_back(x);
    }
    int cnt=1;
    // if (n==1){
    //     cout<<1;
    //     return 0;
    // }
    for(int i=0;i<n-1;i++){
        if(v[i]!=v[i+1]){
            cnt++;
        }
    }
cout<<cnt;
    return 0;
}
