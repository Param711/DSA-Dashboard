// Problem: Calculating Function
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    long long n;
    cin>>n;
    long long sum=0;
    long long odd=(n+1)/2;
    long long even=n-odd;
    sum=((even+1)*even)-(odd*odd);
    
    
    cout<<sum;
    return 0;
}
