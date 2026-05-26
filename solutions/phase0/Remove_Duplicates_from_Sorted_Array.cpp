// Problem: Remove Duplicates from Sorted Array
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
int removeDuplicates(vector<int>& nums) {
        int k=1;
        int j=1;
        int i=0;
        while(j<nums.size() ){
            if(nums[i]==nums[j]){
                 j++;
            }
            else{
                i++;
                swap(nums[i],nums[j]);
                j++;
                k++;
            }

        }
        return k;
    }
int main() {
    // Code here
    vector<int> nums={0,0,1,1,1,2,3,3,6,7,9,30};
    int k=removeDuplicates(nums);
    cout<<k<<endl;
    for(int i=0;i<k;i++){
        cout<<nums[i]<<" ";
    }
    return 0;
}
