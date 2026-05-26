// Problem: String Task
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s;
    cin>>s;
    for(int i=0;i<s.size();i++){
       if(s[i]=='A' || s[i]=='E'||s[i]=='I' || s[i]=='O' || s[i]=='U' || s[i]=='Y' || s[i]=='a' || s[i]=='e'||s[i]=='i' || s[i]=='o' || s[i]=='u' || s[i]=='y'){
        s.erase(s.begin()+i);
        i--;
       }
       else{
        s[i]=tolower(s[i]);
       }
    }
    for(int i=0;i<s.size();i++){
        cout<<"."<<s[i];
    }
    return 0;
}
