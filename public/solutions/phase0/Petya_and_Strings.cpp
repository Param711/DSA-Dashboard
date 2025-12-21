// Problem: Petya and Strings
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s1;
    string s2;
    int n=s1.length();
    for(int i=0;i<n;i++){
        if(s1[i]==s2[i] || s1[i]+26==s2[i] || s2[i]+26==s1[i]){
            continue;
        }
    
    }
    return 0;
}
