// Problem: Caps Lock
// Phase: phase0

#include <bits/stdc++.h>
using namespace std;

int main() {
    // Code here
    string s;
    cin>>s;
    int flag=0;
    
        if(s[0]>='a' && s[0]<='z'){
              flag=1;
        }
        if(s[0]>='A' && s[0]<='Z'){
              flag=2;
        }
        if(flag==1){
            for(int i=1;i<s.size();i++){
                if(!(s[i]>='A' && s[i]<='Z')){
                        flag=0;
                }
            }
            if(flag!=0){
                s[0]=toupper(s[0]);
                for(int i=1;i<s.size();i++){
                    s[i]=tolower(s[i]);
                }
                cout<<s<<endl;
                return 0;
            }
        }
            if(flag==2){
            for(int i=1;i<s.size();i++){
                if(!(s[i]>='A' && s[i]<='Z')){
                        flag=0;
                }
            }
            if(flag!=0){
                s[0]=tolower(s[0]);
                for(int i=1;i<s.size();i++){
                    s[i]=tolower(s[i]);
                }
                cout<<s<<endl;
                return 0;
            }

        }
        if(flag==0){
            cout<<s<<endl;
        }
    return 0;
}
