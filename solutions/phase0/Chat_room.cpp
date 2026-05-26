// Problem: Chat room
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s;
    cin>>s;
    string target="hello";
    int count=0;
    for(int i=0;i<s.size();i++){
        if(s[i]==target[count]){
            count++;
        }
        if(count==5){
            break;
        }
    }
    if(count==5){
        cout<<"YES";
    }
    else{
        cout<<"NO";
    }
    return 0;
}
