// Problem: Is your horseshoe on the other hoof?
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    unordered_set<int> s;
    for(int i=0;i<4;i++){
        int x;
        cin>>x;
        s.insert(x);
    }
    cout<<4-s.size();
    return 0;
}
