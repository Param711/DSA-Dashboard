// Problem: Find the number that appears once, and other numbers twice
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
// int singleNumber(vector<int>& nums) {
//         unordered_map<int,int> m;
//         for(int i=0;i<nums.size();i++){
//             m[nums[i]]++;
//         }
//         for(auto it=m.begin();it!=m.end();it++){
//             if(it->second==1){
//                 return it->first;
//             }
//         }
//         return -1;
//     }




int singleNumber(vector<int>& nums) {
        int ans=0;
        for(int i=0;i<nums.size();i++){
            ans=ans^nums[i];
        }
        return ans;
    }
int main() {
    // Code here
    return 0;
}
