// Problem: Translation
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s,t;
    cin>>s>>t;
    if(s.length()==t.length()){
    for(int i=0;i<s.length();i++){
        if(s[i]==t[s.length()-i-1]){
            continue;
        }
        else{
            cout<<"NO";
            return 0;
        }
    }
    cout<<"YES";
}
    else{
        cout<<"NO";
    }
    return 0;
}
