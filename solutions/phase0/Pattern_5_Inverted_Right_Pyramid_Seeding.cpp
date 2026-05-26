// Problem: Pattern 5: Inverted Right Pyramid (Seeding)
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    for(int i=n;i>=0;i--){
        for(int j=1;j<=i;j++){
            cout<<"* ";

        }
        cout<<endl;
    }
    return 0;
}
