// Problem: IQ test
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    int x=v[0]%2;
    int y=v[1]%2;
    if(x==y){
        for(int i=2;i<n;i++){
            if(v[i]%2!=x){
                cout<<i+1;
                return 0;
            }
        }
    }
    else{
        if(v[2]%2==x){
            cout<<2;
            return 0;
        }
        else{
            cout<<1;
        }
    }

    return 0;
}
