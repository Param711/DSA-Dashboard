// Problem: Happy Birthday
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    vector<string> s;
    vector<string> t;

    int n,m;
    cin>>n>>m;
    for(int i=0;i<n;i++){
        string x;
        cin>>x;
        s.push_back(x);

    }
    for(int i=0;i<m;i++){
        string x;
        cin>>x;
        t.push_back(x);

    }
    int q;
    cin>>q;
    while(q--){
        int a;
        cin>>a;
        int p=(a-1)%n;
        int q=(a-1)%m;
        auto it=s.begin();
        auto it1=t.begin();
        cout<<*(it+p)<<*(it1+q)<<endl;
    }
    return 0;
}
