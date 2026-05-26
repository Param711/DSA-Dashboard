// Problem: Registration System
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    cin>>n;
    unordered_map<string,int> m;
    for(int i=0;i<n;i++){
        string s;
        cin>>s;
        auto it=m.find(s);
        if(it!=m.end()){
             cout<<s<<(it->second)++<<endl;
        }
        else{
            cout<<"OK"<<endl;
            m[s]++;
        }
    }

    return 0;
}
