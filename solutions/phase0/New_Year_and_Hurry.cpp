// Problem: New Year and Hurry
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    int n,k;
    cin>>n>>k;
    int time=240-k;
    int sum=0;
    int count=0;
    int i=0;
    while(count<n && sum+5*(i+1)<=time){
      sum+=5*(i+1);
      i++;
      count++;
    }
    cout<<count;
    return 0;
}
