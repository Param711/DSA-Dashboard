// Problem: Xenia and Ringroad
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n,m;
    cin>>n>>m;
    long long count=0;
    int curr_target;
    int next_target;
    cin>>curr_target;
    count+=curr_target-1;
    for(int i=0;i<m-1;i++){
        cin>>next_target;
       if( curr_target>next_target){
        count+=n-curr_target+next_target;
       }
       else{
        count+=next_target-curr_target;
       }
       curr_target=next_target;
    }
    cout<<count;
    return 0;
}
