// Problem: Pangram
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    string s;
    cin>>s;
    if(n<26){
        cout<<"NO";
        return 0;
    }
    
    int arr[26]={0};
    for(int i=0;i<n;i++){
        s[i]=tolower(s[i]);
        arr[s[i]-'a']++;
    }
    for(int i=0;i<26;i++){
        if(arr[i]<=0){
            cout<<"NO";
            return 0;
        }
    }
    cout<<"YES";

    return 0;
}
