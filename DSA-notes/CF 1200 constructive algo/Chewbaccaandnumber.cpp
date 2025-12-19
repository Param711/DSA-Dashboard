#include<iostream>
#include<math.h>
#include<string>
using namespace std;
//tried brute force
//should have used strings

// int cnt(long long x){
//     int count=0;
//     while(x!=0){
//         count++;
//         x=x/10;
//     }
//     return count;
// }
// int main(){
//     long long x;
//     cin>>x;
//     int n=cnt(x);
//     if(n==1){
//         if(x==9){
//             cout<<9<<endl;
//             return 0;
//         }
//     }
//     int arr[n];
//     for(int i=n-1;i>=0;i--){
//         arr[i]=x%10;
//         x=x/10;

//     }
//     for(int i=n-1;i>=0;i--){
//         if(arr[i]>=5){
//             arr[i]=9-arr[i];
//         }
//         x+=((long long)pow(10,n-i-1))*arr[i];

//     }
//     int u=cnt(x);
//     if(u==n){
//     cout<<x;
//     }
//     else{
        
//             cout<<9;
//             for(int i=0;i<n-u-1;i++){
//                 cout<<0;
//             }
//         if(x!=0){
//         cout<<x;
//         }
//     }

    

// }
int main(){
    string s;
    cin>>s;
    int n=s.length();
    for(int i=0;i<n;i++){
        int x=s[i]-'0';
        if(x>=5){
            if(x==9 && i==0){
                continue;
            }
            else x=9-x;
        }
        s[i]=x+'0';
    }
    cout<<s;

}