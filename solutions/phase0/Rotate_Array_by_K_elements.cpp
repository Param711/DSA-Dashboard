// Problem: Rotate Array by K elements
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
// void rotate(vector<int>& nums, int k) {
//          k=k%nums.size();
//         for(int i=0;i<k;i++){
//             int temp=nums[nums.size()-1];
//             for(int j=nums.size()-2;j>=0;j--){
//                 nums[j+1]=nums[j];
//             }
//             nums[0]=temp;
//         }
//     }



//  void rotate(vector<int>& nums, int k) {
//          k=k%nums.size();
//          vector<int> temp(k);
//         for(int i=0;i<k;i++){
//             temp[i]=nums[nums.size()-k+i];
//         }
//         for(int i=nums.size()-1;i-k>=0;i--){
//             nums[i]=nums[i-k];
//         }
//         for(int i=0;i<k;i++){
//             nums[i]=temp[i];
//         }

//     }


void rotate(vector<int>& nums, int k) {
         k=k%nums.size();
         reverse(nums.begin(),nums.end());
         reverse(nums.begin(),nums.begin()+k);
         reverse(nums.begin()+k,nums.end());

    }
int main() {
    // Code here
    return 0;
}
