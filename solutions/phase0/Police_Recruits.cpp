// Problem: Police Recruits
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    int sum=0,count=0;
    while(n--){
        int x;
        cin>>x;
        
        if(sum<=0 && x<0){
            count++;
        }
        else sum+=x;

    }
    cout<<count<<endl;
    return 0;
}
