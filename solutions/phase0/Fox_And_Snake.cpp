// Problem: Fox And Snake
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n,m;
    cin>>n>>m;
    int count=0;
    for(int i=0;i<n;i++){
        if(i%2==0){
          for(int j=0;j<m;j++){
            cout<<"#";
        }
        }
        else
        {
            
            for(int j=0;j<m;j++){
            if(i%4==3 && j==0){
                cout<<"#";
            }
            else if(i%4==1 && j==m-1){
                cout<<"#";

            }
            
            else{
                cout<<".";
            }
        }
    }
    cout<<endl;
    }
    return 0;
}
