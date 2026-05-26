// Problem: Assign Cookies
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
int findContentChildren(vector<int>& g, vector<int>& s) {
        int count=0;
        if(s.size()==0 || g.size()==0){
            return 0;
        }
        sort(g.begin(),g.end());
        sort(s.begin(),s.end());
        auto itg=g.begin();
        auto its=s.begin();
        while(itg!=g.end() && its!=s.end()){
        if(*its>=*itg){
            count++;
            itg++;

        }
        its++;
        }
        return count;

        
    }

int main() {
    // Code here
    vector<int> g={1,2,3};
    vector<int> s={1,1};
    cout<<findContentChildren(g,s);

    return 0;
}
