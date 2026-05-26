// Problem: Arrival of the General
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    vector<int> v(n);
    for(int i=0;i<n;i++){
        cin>>v[i];

    }
    int mi=*min_element(v.begin(),v.end());
    int ma=*max_element(v.begin(),v.end());
    if(mi==ma){
        cout<<0;
        return 0;
    }
    int ima;
    int imi;
    int ans=0;
    for(int i=0;i<n;i++){
        if(v[i]==ma){
            ima=i;
            break;
        }
    }
    for(int j=n-1;j>=0;j--){
        if(v[j]==mi){
            imi=j;
            break;
        }
    }
    ans+=n-imi-1;
    ans+=ima;
    if(imi<ima){
        ans-=1;
    }
    cout<<ans;

    return 0;
}
