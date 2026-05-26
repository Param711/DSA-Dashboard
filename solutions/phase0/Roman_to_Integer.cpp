// Problem: Roman to Integer
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;
class Solution {
private:
      int switc(char c) {
        switch(c){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return 0;
        }
    }
public:
    int romanToInt(string s) {
        if(s.size()==1){
            return switc(s[0]);
        }
        int num=0;
        for(int i=0;i<s.size()-1;i++){
            if(switc(s[i])<switc(s[i+1])){
                num-=switc(s[i]);
            }
            else{
                num+=switc(s[i]);
            }
        }
            num+=switc(s[s.size()-1]);
        return num;


    }
};







int romanToInt(string s) {
        unordered_map<char,int> m;
        m['I']=1;
        m['V']=5;
        m['X']=10;
        m['L']=50;
        m['C']=100;
        m['D']=500;
        m['M']=1000;
        if(s.size()==1){
            auto it =m.find(s[0]);
            return it->second;
        }
        int num=0;
        for(int i=0;i<s.size()-1;i++){
            auto it=m.find(s[i]);
            auto itf=m.find(s[i+1]);
            if(it->second<itf->second){
                num-=it->second;
            }
            else{
                num+=it->second;
            }
        }
            auto it=m.find(s[s.size()-1]);
            num+=it->second;
        return num;


    }
int main() {
    // Code here
    string ans="";
    return 0;
}
