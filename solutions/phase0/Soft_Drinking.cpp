// Problem: Soft Drinking
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n,k,l,c,d,p,nl,np;
    cin>>n>>k>>l>>c>>d>>p>>nl>>np;
    int toast=min((k*l)/nl,min(c*d,p/np))/n;
    cout<<toast<<endl;
    return 0;
}
