// Problem: A and B and Compilation Errors
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    multiset<int> v;
    multiset<int> v1;
    for(int i=0;i<n;i++){
        int x;
        cin>>x;
        v.insert(x);
    }
    for(int i=0;i<n-1;i++){
        int x;
        cin>>x;
        auto it=v.find(x);
        if(it!=v.end()){
            v.erase(it);
            v1.insert(x);
        }
        

    }
    cout<<*(v.begin())<<endl;
    v.clear();
    for(int i=0;i<n-2;i++){
        int x;
        cin>>x;
        auto it=v1.find(x);
        if(it!=v1.end()){
            v1.erase(it);
        }
        

    }
    cout<<*(v1.begin())<<endl;
    v1.clear();
    return 0;
}
