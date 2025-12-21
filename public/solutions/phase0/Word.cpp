// Problem: Word
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s;
    cin>>s;
    int cap=0;
    int sml=0;
    for(int i=0;i<s.length();i++){
        if(s[i]>='A' && s[i]<='Z'){
            cap++;
        }
        if(s[i]>='a' && s[i]<='z'){
            sml++;
        }
    }
    if(cap>sml){
        for(int i=0;i<s.length();i++){
            s[i]=towupper(s[i]);
        }
    }
    else{
        for(int i=0;i<s.length();i++){
            s[i]=towlower(s[i]);
        }
    }
    cout<<s;
    return 0;
}
