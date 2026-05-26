// Problem: Games
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    int home[n];
    int away[n];
    for(int i=0;i<n;i++){
        cin>>home[i]>>away[i];
    }
    unordered_map<int,int> m;
    for(int i=0;i<n;i++){
        m[away[i]]++;
    }
    int count=0;
    for(int i=0;i<n;i++){
        if(m[home[i]]>0){
           count+=m[home[i]];
        }
    }
    cout<<count;

    return 0;
}
