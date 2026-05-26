// Problem: Multiply by 2, divide by 6
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n;
    cin>>n;
    while(n--){
        int x;
        cin>>x;
        int temp=x;
        int count=0;
        while(temp!=1){
            if(temp!=1 && temp%3!=0){
                count=-1;
                break;
            }
            if(temp%6==0){
               temp=temp/6;
               count++;
            }
            else{
                temp=temp*2;
                count++;
            }
            
        }
        cout<<count<<endl;
    }
    return 0;
}
