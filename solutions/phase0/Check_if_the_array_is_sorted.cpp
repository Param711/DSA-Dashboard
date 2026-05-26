// Problem: Check if the array is sorted
// Phase: phase0

#include <bits/stdc++.h>

using namespace std;
bool check(vector<int>& nums) {
        int k=0;
        for(int i=0;i<nums.size()-1;i++){
            if(nums[i]>nums[i+1]){
                k++;
            }
        }
        if(nums[nums.size()-1]>nums[0]){
            k++;
        }
        if(k==0|| k==1){
            return true;
        }
        else{
            return false;
        }
    }
// bool check(vector<int>& nums) {
//         vector<int> temp;
//         for(int i=0;i<nums.size();i++){
//             temp.push_back(nums[i]);

//         }
//         sort(temp.begin(),temp.end());
        
//         for(int i=0;i<nums.size();i++){
//             int flag =1;
//             for(int j=0;j<nums.size();j++){
//                 if(nums[j]!=(temp[(j+i)%(temp.size())])){
//                     flag=0;
//                     break;
//                 }


//             }
//             if(flag==1){
//                 return true;
//             }
//         }
//         return false;
        
//     }

int main() {
    // Code here
    return 0;
}
