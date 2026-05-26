// Problem: Pattern 9: Diamond Star Pattern
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
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
    if(n%2==0){
        
    for(int i=n-1;i>=0;i--){
        
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

    }
    else{
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

    }
    return 0;
}
