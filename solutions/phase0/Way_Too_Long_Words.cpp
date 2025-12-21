// Problem: Way Too Long Words
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int t;
    cin >> t;
    char s[101];
    while (t--) {
    cin>>s;
    int n=strlen(s);
    if(n>10){
        cout<<s[0]<<n-2<<s[n-1]<<endl;
    }
    else cout<<s<<endl;
 
 
        }
    return 0;
}
