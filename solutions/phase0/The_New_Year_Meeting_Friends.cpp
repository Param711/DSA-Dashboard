// Problem: The New Year: Meeting Friends
// Phase: phase0

// #include <bits/stdc++.h>
// using namespace std;

// int main() {
//     // Code here
//     vector<int> v;
//     for(int i=0;i<3;i++){
//         int x;
//         cin>>x;
//         v.push_back(x);
//     }
//     sort(v.begin(),v.end());
//     cout<<v[2]-v[0];

    

//     return 0;
// }
#include <bits/stdc++.h>
using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    
    // max({list}) and min({list}) find the largest/smallest in one step
    cout << max({a, b, c}) - min({a, b, c});
    
    return 0;
}
