// Problem: Petya and Strings
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s1;
    string s2;
    cin>>s1>>s2;
    int n=s1.length();
    for(int i=0;i<n;i++){
        s1[i]=tolower(s1[i]);
        s2[i]=tolower(s2[i]);
    }
    cout<<s1.compare(s2);
    return 0;
}
