// Problem: Cheap Travel
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n,m,a,b;
    cin>>n>>m>>a>>b;
    int money=0;
    if(((double)(b)/m)<=a){
    while(n!=0){
        if(n-m>=0){
            n=n-m;
            money+=b;

        }
        else if(n-m<0){
            if((money+b)<money+n*a){
                money+=b;
                n=0;
            }
            else{
            n-=1;
            money+=a;
        }
        }
        

    }
}
else{
    money=n*a;
}
cout<<money<<endl;
    return 0;
}
