// Problem: String to Integer (atoi)
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

    int myAtoi(string s) {
        int i=0;
        int sign=1;
        string ans="";
        while(s[i]==' '){
            i++;
        }
        if(s[i]=='-' || s[i]=='+'){
            if(s[i]=='-'){
               sign=-1;
            }
            i++;

        }
        while(i<s.size() && s[i]=='0'){
            i++;
        }
        while(i<s.size()){
            if(s[i]>='0' && s[i]<='9'){
                ans.push_back(s[i]);
                i++;
            }
            else{
                break;
            }
        }
        int j=0;
        if(ans.size()==0){
            return 0;
        }
        long long sum=0;
        while(j<ans.size()){
          if(sum*10+ans[j]-'0'<=INT_MAX && sum*10+ans[j]-'0'>INT_MIN){
            sum=sum*10+(ans[j]-'0');
            j++;
          }
          else if(sum*10+ans[j]-'0'>=INT_MAX && sign==1){
            return INT_MAX;
          }
          else {
            return INT_MIN;
          }
        }
        return sum*sign;

        
    }
int main() {
    // Code here
    return 0;
}
