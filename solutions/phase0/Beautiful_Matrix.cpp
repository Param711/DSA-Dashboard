// Problem: Beautiful Matrix
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int x,y;
    for(int i=0;i<5;i++){
        for(int j=0;j<5;j++){
            int v;
            cin>>v;
            if(v==1){
                x=i;
                y=j;

            }

        }
    }
    int ans=abs(x-2)+abs(y-2);
    cout<<ans<<endl;

    return 0;
}
