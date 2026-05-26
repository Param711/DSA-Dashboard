#include <bits/stdc++.h>
using namespace std;
bool checkbraces(string s)
{
    stack<char> st;
    for (int i = 0; i < s.length(); i++)
    {
        if (s[i] == '(')
        {
            st.push(s[i]);
        }
        if (s[i] == ')')
        {
            if (!st.empty() && st.top() == '(')
            {
                st.pop();
            }
            else
            {
                st.push(s[i]);
            }
        }
    }
    if (st.empty())
    {
        return true;
    }
    else
        return false;
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin>>n;
        vector<int> v;
        for(int i=0;i<n;i++){
            int u;
            cin>>u;
            v.push_back(u);
        }
        

        
    }
}
