// Problem: Boy or Girl
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s;
    cin>>s;
    unordered_set<char> t;
    for(int i=0;i<s.length();i++){
        t.insert(s[i]);

    }
    if(t.size()%2==0){
        cout<<"CHAT WITH HER!";
    }
    else cout<<"IGNORE HIM!";


    return 0;
}
