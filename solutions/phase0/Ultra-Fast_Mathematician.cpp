// Problem: Ultra-Fast Mathematician
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s,t;
    cin>>s>>t;
    for(int i=0;i<s.length();i++){
        if(s[i]!=t[i]){
            s[i]='1';
        }
        else if(s[i]==t[i]){
            s[i]='0';
        }

    }
    cout<<s;
    return 0;
}
