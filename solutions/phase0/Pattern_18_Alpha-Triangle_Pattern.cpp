// Problem: Pattern 18: Alpha-Triangle Pattern
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    for(int i=n;i>0;i--){
        char c='A'+i-1;
        for(int j=n-i;j>=0;j--){
            cout<<c;
            c++;

        }
        cout<<endl;

    }
    return 0;
}
