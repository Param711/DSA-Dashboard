// Problem: Merge two sorted arrays without extra space
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        
        int i=m-1;
        int j=n-1;
        int k=m+n-1;
        while(i>=0 && j>=0){
            if(nums1[i]>=nums2[j]){
                nums1[k--]=nums1[i];
                i--;
            }
            else{
                nums1[k--]=nums2[j];
                j--;
            }
        }
        
        if(j>=0){
            while(j>=0){
                 nums1[k--]=nums2[j];
                j--;
            }
        }
    }

int main() {
    // Code here
    vector<int> nums1={1,2,2,4,6,8,9,0,0,0,0,0,0,0,0};
    vector<int> nums2={2,3,3,7,8,10,34,46};
    merge(nums1,7,nums2,8);
    for(int i=0;i<15;i++){
        cout<<nums1[i]<<" ";
    }
    return 0;
}
