// Problem: Pattern 17: Alpha-Hill Pattern
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    
    for(int i=0;i<n;i++){
        char c='A';
        for(int j=n-i;j>0;j--){
            cout<<" ";
        }
        for(int j=0;j<=i;j++){
           c='A'+j;
           cout<<c;
        }
        for(int j=1;j<=i;j++){
           c--;
           cout<<c;
        }
        
        cout<<endl;

    }
    return 0;
}
