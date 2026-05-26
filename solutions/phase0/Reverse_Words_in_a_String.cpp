// Problem: Reverse Words in a String
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
//reverse string and reverse the words again and clean up extra spaces in place
string reverseWords(string s) {
        if (s.size() == 0) return "";
        vector<string> v;
        int i=0;
        while(i<s.size() && s[i]==' '){
            i++;
        }
        while(i<s.size()){
            int j=i;
            while(j<s.size() && s[j]!=' '){
                j++;
            }
            v.push_back(s.substr(i,j-i));


        while(j<s.size() && s[j]==' '){
            j++;
        }
        i=j;

        }
        string ans;
        for(int z=v.size()-1;z>=0;z--){
            ans+=v[z];
            if(z!=0){
                ans+=" ";
            }
        }
        return ans;
        }
int main() {
    // Code here
    return 0;
}
