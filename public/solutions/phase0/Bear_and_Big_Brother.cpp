// Problem: Bear and Big Brother
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int a,b;
    cin>>a>>b;
    int year=0;
    while(a<=b){
        a=a*3;
        b=b*2;
        year++;
    }
    cout<<year;
    return 0;
}
