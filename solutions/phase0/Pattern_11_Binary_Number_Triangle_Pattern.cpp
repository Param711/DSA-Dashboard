// Problem: Pattern 11: Binary Number Triangle Pattern
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        int count=i%2;
        for(int j=1;j<=i;j++){
         cout<<count%2;
         count++;
        }
        cout<<endl;
    }
    return 0;
}
