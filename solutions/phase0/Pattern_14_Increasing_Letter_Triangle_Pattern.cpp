// Problem: Pattern 14: Increasing Letter Triangle Pattern
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    
    for(int i=0;i<n;i++){
        char c='A';
        for(int j=0;j<=i;j++){
           c='A'+j;
           cout<<c;
        }
        cout<<endl;

    }
    return 0;
}
