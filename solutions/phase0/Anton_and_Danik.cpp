// Problem: Anton and Danik
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    int cntA=0,cntD=0;
    string s;
    cin>>s;
    for(int i=0;i<n;i++){
        if(s[i]=='A'){
            cntA++;
        }
        if(s[i]=='D'){
            cntD++;
        }
    }
    if(cntA>cntD){
        cout<<"Anton";
    }
    if(cntD>cntA){
        cout<<"Danik";
    }
    if(cntA==cntD) cout<<"Friendship";
    return 0;
}
