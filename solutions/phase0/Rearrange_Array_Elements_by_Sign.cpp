// Problem: Rearrange Array Elements by Sign
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
vector<int> rearrangeArray(vector<int>& nums) {
        vector<int> ans(nums.size(),0);
        int p=0,n=1;
        for(int i=0;i<nums.size();i++){
            if(nums[i]>0){
                ans[p]=nums[i];
                p+=2;
            }
            if(nums[i]<0){
                ans[n]=nums[i];
                n+=2;
            }
        }

        
        return ans;

    }

int main() {
    // Code here
    vector<int> nums={1,2,-3,4,-5,-3};
    vector<int> ans=rearrangeArray(nums);
    cout<<"[";
    for(int i=0;i<nums.size();i++){
        cout<<ans[i]<<",";
    }
    cout<<"]";
    return 0;
}
