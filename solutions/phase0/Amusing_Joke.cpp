// Problem: Amusing Joke
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    vector<int> arr(26,0);
    for(int i=0;i<2;i++){
        string s;
        cin>>s;
        for(int j=0;j<s.size();j++){
            arr[s[j]-'A']++;
        }
    }
    string r;
    cin>>r;
    for(int i=0;i<r.size();i++){
        arr[r[i]-'A']--;
        if(arr[r[i]-'A']<0){
            cout<<"NO";
            return 0;
        }

    }
    for(int i=0;i<26;i++){
       if(arr[i]!=0){
        cout<<"NO";
        return 0;
       }
    }
    cout<<"YES";
    return 0;
}
