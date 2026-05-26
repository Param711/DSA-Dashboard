// Problem: Find the Union
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
//cant do it in reverse as we dont know the total space required

vector<int> findUnion(vector<int> &a, vector<int> &b) {
        // code here
        int i=0;
        int j=0;
        vector<int> ans;
        while(i<a.size() && j<b.size()){
            if(a[i]<=b[j]){
                if(ans.empty() || a[i]!=ans.back()){
                    ans.push_back(a[i]);
                }
                i++;
            }
            else{
                if(ans.empty() || b[j]!=ans.back()){
                    ans.push_back(b[j]);
                }
                j++;
            }
        }
        while(i<a.size()){
            if(ans.empty() || a[i]!=ans.back()){
                    ans.push_back(a[i]);
                }
                i++;
        }
        while(j<b.size()){
            if(ans.empty() || b[j]!=ans.back()){
                    ans.push_back(b[j]);
                }
                j++;
        }
        return ans;
    }

int main() {
    // Code here
    return 0;
}
