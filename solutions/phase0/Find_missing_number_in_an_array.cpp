// Problem: Find missing number in an array
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
int missingNumber(vector<int>& nums) {
        int x=((nums.size()+1)*nums.size())/2;
       for(int i=0;i<nums.size();i++){
         x-=nums[i];
       } 
       
       return x;
    }
int main() {
    // Code here
    return 0;
}
