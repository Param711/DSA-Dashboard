#include<bits/stdc++.h>
using namespace std;
int main(){
    int t;
    cin>>t;
    int count=0;
    while(t--){
        int sum=0;
        for(int i=0;i<3;i++){
            int x;
            cin>>x;
            sum+=x;
        }
        if(sum>=2){
            count++;
        }
    }
    cout<<count;
}