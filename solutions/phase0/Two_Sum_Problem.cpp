// Problem: Two Sum Problem
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
// vector<int> twoSum(vector<int>& nums, int target) {
//         vector<int> v;
//         int n=nums.size();
//         for(int i=0;i<n-1;i++){
//             for(int j=i+1;j<n;j++){
//                 if(nums[i]+nums[j]==target){
//                     v.push_back(i);
//                     v.push_back(j);
//                     return v;

//                 }

//             }
//         }
    
        
// return v;
//     }


vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> m;
        for(int i=0;i<nums.size();i++){
            auto it=m.find(target-nums[i]);
            if(it!=m.end()){
                return {i,it->second};
            }
            m[nums[i]]=i;
        }
       return {0,0};
    }
int main() {
    // Code here
    return 0;
}
