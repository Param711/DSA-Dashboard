// Problem: Move all Zeros to the end of the array
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
// void moveZeroes(vector<int>& nums) {
//         vector<int> v;
//         for(auto it=nums.begin();it!=nums.end();it++){
//             if(*it!=0){
//                 v.push_back(*it);
//             }
//         }
//         int m=nums.size();
//         int n=v.size();
//         for(int i=0;i<n;i++){
//             nums[i]=v[i];
//         }
//         for(int i=0;i<m-n;i++){
//             nums[i+n]=0;
//         }

//     }

// void moveZeroes(vector<int>& nums) {
//         if(nums.size()==1){
//             return;
//         }
//         int i=0;
//         while(i<nums.size() && nums[i]!=0){
//             i++;
//         }

//         for(int j=i+1;j<nums.size();j++){
//            while(i<=j && nums[i]!=0){
//             i++;
//         }
//         if(nums[j]!=0){
//             swap(nums[i],nums[j]);
//         }
//         }

//     }

void moveZeroes(vector<int> &nums)
{
    if (nums.size() == 1)
    {
        return;
    }
    int i = 0;
    for (int j = 0; j < nums.size(); j++)
    {
        if (nums[j] != 0)
        {
            swap(nums[i], nums[j]);
            i++;
        }
    }
}
int main()
{
    // Code here
    return 0;
}
