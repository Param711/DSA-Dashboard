// Problem: Nearly Lucky Number
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
int islukcy(long long n){
    int flag=1;
    while(n!=0){
        if(!(n%10==4 || n%10==7)){
           flag=0;
           break;
        }
        n=n/10;
    }
    return flag;
}
int main() {
    // Code here
    long long n;
    cin>>n;
    int count=0;
    while(n!=0){
        if(n%10==4 || n%10==7)
       count++;
       n=n/10;
    }
    if(count==0){
        cout<<"NO";
        return 0;
    }
    if(islukcy(count)){
        cout<<"YES";
    }
    else{
        cout<<"NO";
    }

    return 0;
}
