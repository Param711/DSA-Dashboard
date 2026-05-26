// Problem: I Wanna Be the Guy
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    unordered_set<int> s;
    int n;
    cin>>n;
    int p;
    cin>>p;
    for(int i=0;i<p;i++){
        int x;
        cin>>x;
        s.insert(x);
    }
    int q;
    cin>>q;
    for(int i=0;i<q;i++){
        int y;
        cin>>y;
        
            s.insert(y);
        
    }
    int sum=(n*(n+1))/2;
    for(auto i=s.begin();i!=s.end();i++){
           sum-=(*i);
    }
    if(sum==0){
        cout<<"I become the guy.";
    }
    else{
        cout<<"Oh, my keyboard!";
    }
    
    return 0;
}
