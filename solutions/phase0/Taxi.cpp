// Problem: Taxi
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    vector<int> a(n);
    vector<int> arr(4,0);
    for(int i=0;i<n;i++) {
        cin>>a[i];
        arr[a[i]-1]++;
    }
    sort(a.begin(), a.end());
    int ans=0;
    ans+=arr[4];
    if(arr[3]>=arr[0]) {
        ans+=arr[3];
        arr[0]=0;
    } else {
        ans+=arr[3];
        arr[0]-=arr[3];
    }
    if()

    cout<<ans<<endl;
    return 0;
}
