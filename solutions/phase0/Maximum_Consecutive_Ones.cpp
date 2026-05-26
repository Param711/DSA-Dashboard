// Problem: Maximum Consecutive Ones
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
int findMaxConsecutiveOnes(vector<int>& nums) {
        int count=0;
        int maxcount=0;
        for(int i=0;i<nums.size();i++){
            if(nums[i]==1){
                count++;
                if(maxcount<count){
                    maxcount=count;
               }
            }
            else count=0;
        }
        return maxcount;
        
    }
int main() {
    // Code here
    return 0;
}
