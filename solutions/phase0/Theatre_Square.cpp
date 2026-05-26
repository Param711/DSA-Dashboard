// Problem: Theatre Square
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    long long n,m;
    cin>>n>>m;
    long long area=n*m;
    long long a;
    cin>>a;
    long long count;
    if(n%a==0){
    count=n/(a);
    }
    if(n%a!=0){
      count=(n/a)+1;  
    }

    if(m%a==0){
        count*=(m/a);
    }
    if(m%a!=0){
        count*=((m/a)+1);
    }
    cout<<count;
    return 0;
}
