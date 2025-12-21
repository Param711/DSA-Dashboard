// Problem: Helpful Maths
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s;
    int c1=0,c2=0,c3=0;
    cin>>s;
    for(int i=0;i<s.length();i++){
        if(s[i]=='1'){
            c1++;
        }
        if(s[i]=='2'){
            c2++;
        }
        if(s[i]=='3'){
            c3++;
        }
    }
    if(c1>0){
    for(int i=0;i<c1-1;i++){
        cout<<1<<"+";
    }
    cout<<1;
    if(c2>0 || c3>0){
        cout<<"+";
    }
}
    if(c2>0){
    for(int i=0;i<c2-1;i++){
        cout<<2<<"+";
    }
    cout<<2;
    if(c3>0){
        cout<<"+";
    }
}
    if(c3>0){
    for(int i=0;i<c3-1;i++){
        cout<<3<<"+";
    }
    cout<<3;
}

    return 0;
}
