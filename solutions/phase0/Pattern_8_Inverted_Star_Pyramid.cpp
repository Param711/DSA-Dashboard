// Problem: Pattern 8: Inverted Star Pyramid
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    for(int i=n;i>=0;i--){
        
        for(int k=n-i;k>=0;k--){
                cout<<" ";
            }
        for(int j=1;j<=2*i-1;j++){
            
            cout<<"*";

        }
        for(int k=n-i;k>=0;k--){
                cout<<" ";
            }
        cout<<endl;
    }
    return 0;
}
