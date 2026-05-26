// Problem: Longest Subarray with sum K [Positives and Zeros]
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
int longestSubarrayWithSumK(vector<int> a, long long k) {
    // Write your code here
    int i=0;
    int j=0;
    long long sum=0;
    int count=0;
    int max_count=0;
    while(j<a.size()){
            sum+=a[j];
            while(sum>k && i<=j){
            sum-=a[i];
            i++;
        }
        if(sum==k){
            count=j-i+1;
            max_count=max(max_count,count);
        }
        
        j++;
    }
    return max_count;
}
int main() {
    // Code here
    return 0;
}
