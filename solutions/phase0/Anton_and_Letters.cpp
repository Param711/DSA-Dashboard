// Problem: Anton and Letters
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s;
    getline(cin,s);
    int i=0;
    unordered_set<char> t;
    while(i<s.size()){
        if(s[i]>='a' && s[i]<='z'){
              t.insert(s[i]);
        }
        i++;
    }
    cout<<t.size();
    return 0;
}
