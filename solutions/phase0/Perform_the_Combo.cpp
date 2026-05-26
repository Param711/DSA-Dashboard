// Problem: Perform the Combo
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int t;
    cin>>t;
    while(t--){
        int n,m;
        cin>>n>>m;
        string s;
        cin>>s;
        int count[n]={0};
        int arr[26]={0};
        for(int i=0;i<m;i++){
            int x;
            cin>>x;
            count[x-1]++;
        }
        for(int i = n - 2; i >= 0; i--) {
            count[i] += count[i+1];
        }
        for(int i=0;i<n;i++){
            arr[s[i]-'a']+=count[i]+1;
        }
        for(int i=0;i<26;i++){
            cout<<arr[i]<<" ";
        }
        cout<<endl;

    }

    return 0;
}
