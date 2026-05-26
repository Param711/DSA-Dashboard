// Problem: Largest Odd Number in String
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

    string largestOddNumber(string num) {
        int index=-1;
        for(int i=num.size()-1;i>=0;i--){
            if((num[i]-'0')%2==1){
            index=i;
            break;
            }
        }
        if(index!=-1){
            num.erase(num.begin()+(index+1),num.end());
        }
        else{
            num="";
        }
        return num;

    }
int main() {
    // Code here

    return 0;
}
