// Problem: Pattern 3: Right-Angled Number Pyramid
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=i;j++){
            cout<<"* ";

        }
        cout<<endl;
    }
    return 0;
}
