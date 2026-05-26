// Problem: Anton and Polyhedrons
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    int sum=0;
    for(int i=0;i<n;i++){
        string s;
        cin>>s;
        if(s=="Cube"){
            sum+=6;
        }
        if(s=="Tetrahedron"){
            sum+=4;
        }
        if(s=="Octahedron"){
            sum+=8;
        }
        if(s=="Dodecahedron"){
            sum+=12;
        }
        if(s=="Icosahedron"){
            sum+=20;
        }
    }
    cout<<sum;
    
    return 0;
}
