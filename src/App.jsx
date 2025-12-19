import React, { useState, useEffect, useMemo } from 'react';
import { 
  CheckCircle, 
  Circle, 
  ChevronDown, 
  ChevronRight, 
  ExternalLink, 
  BookOpen, 
  Trophy, 
  TrendingUp, 
  AlertTriangle,
  Award,
  Terminal,
  Code,
  Star,
  RefreshCw,
  Link as LinkIcon,
  Moon,
  Sun
} from 'lucide-react';
// Helper to generate local solution paths
// Helper to open files directly in VS Code
// Helper to Smartly switch between Local VS Code and GitHub
const getSolutionLink = (phaseId, title) => {
  const cleanTitle = title.replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '_');
  
  // 1. Check if the site is running locally on your computer
  const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";

  if (isLocal) {
    // --- SCENARIO A: YOU (Development Mode) ---
    // Opens the file directly in your VS Code editor
    const projectPath = "C:/Users/param/dsa-dashboars/dsa-dashboard";
    return `vscode://file/${projectPath}/public/solutions/${phaseId}/${cleanTitle}.cpp`;
  } else {
    // --- SCENARIO B: EVERYONE ELSE (Deployment Mode) ---
    // Opens the file on your GitHub repository so they can view the code
    return `https://github.com/param711/DSA-Dashboard/blob/main/public/solutions/${phaseId}/${cleanTitle}.cpp`;
  }
};

// ==========================================
// DATA: The "Hardcoded" Curriculum (EXACT CONTENT)
// ==========================================

const CURRICULUM_DATA = {
  phase0: {
    title: "Phase 0: Foundations (2-3 Months)",
    description: "Building the base: C++, STL, and basic problem solving.",
    sections: [
      {
        id: "p0_cpp",
        title: "Basic C++",
        resources: [
          { title: "GeeksForGeeks C++ Guide", link: "https://www.geeksforgeeks.org/c-plus-plus/" }
        ],
        questions: [
          {
            id: "gfg_cpp" ,title: "Basic C++" ,link: "https://www.geeksforgeeks.org/c-plus-plus/"
          }
        ]
      },
      {
        id: "p0_arrays",
        title: "Arrays (Striver's Sheet - 40 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          {
    id: "str_arr1",
    title: "Largest Element in an Array",
    link: "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1"
  },
  {
    id: "str_arr2",
    title: "Second Largest Element in an Array without sorting",
    link: "https://www.geeksforgeeks.org/problems/second-largest3717/1"
  },
  {
    id: "str_arr3",
    title: "Check if the array is sorted",
    link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/"
  },
  {
    id: "str_arr4",
    title: "Remove Duplicates from Sorted Array",
    link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
  },
  {
    id: "str_arr5",
    title: "Left Rotate the Array by One",
    link: "https://www.naukri.com/code360/problems/left-rotate-an-array-by-one_5026278"
  },
  {
    id: "str_arr6",
    title: "Rotate Array by K elements",
    link: "https://leetcode.com/problems/rotate-array/"
  },
  {
    id: "str_arr7",
    title: "Move all Zeros to the end of the array",
    link: "https://leetcode.com/problems/move-zeroes/"
  },
  {
    id: "str_arr8",
    title: "Linear Search",
    link: "https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1"
  },
  {
    id: "str_arr9",
    title: "Find the Union",
    link: "https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1"
  },
  {
    id: "str_arr10",
    title: "Find missing number in an array",
    link: "https://leetcode.com/problems/missing-number/"
  },
  {
    id: "str_arr11",
    title: "Maximum Consecutive Ones",
    link: "https://leetcode.com/problems/max-consecutive-ones/"
  },
  {
    id: "str_arr12",
    title: "Find the number that appears once, and other numbers twice",
    link: "https://leetcode.com/problems/single-number/"
  },
  {
    id: "str_arr13",
    title: "Longest Subarray with sum K [Positives and Zeros]",
    link: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1"
  },
  {
    id: "str_arr14",
    title: "Longest Subarray with sum K [Positives and Negatives]",
    link: "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1"
  },

  // --- Step 3.2: Medium ---
  {
    id: "str_arr15",
    title: "Two Sum Problem",
    link: "https://leetcode.com/problems/two-sum/"
  },
  {
    id: "str_arr16",
    title: "Sort an array of 0s, 1s and 2s",
    link: "https://leetcode.com/problems/sort-colors/"
  },
  {
    id: "str_arr17",
    title: "Majority Element (>n/2 times)",
    link: "https://leetcode.com/problems/majority-element/"
  },
  {
    id: "str_arr18",
    title: "Maximum Subarray Sum in an Array (Kadane's Algorithm)",
    link: "https://leetcode.com/problems/maximum-subarray/"
  },
  {
    id: "str_arr19",
    title: "Print the Subarray with Maximum Sum",
    link: "https://www.geeksforgeeks.org/problems/maximum-sub-array5930/1"
  },
  {
    id: "str_arr20",
    title: "Stock Buy and Sell",
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
  },
  {
    id: "str_arr21",
    title: "Rearrange Array Elements by Sign",
    link: "https://leetcode.com/problems/rearrange-array-elements-by-sign/"
  },
  {
    id: "str_arr22",
    title: "Next Permutation",
    link: "https://leetcode.com/problems/next-permutation/"
  },
  {
    id: "str_arr23",
    title: "Leaders in an Array",
    link: "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1"
  },
  {
    id: "str_arr24",
    title: "Longest Consecutive Sequence in an Array",
    link: "https://leetcode.com/problems/longest-consecutive-sequence/"
  },
  {
    id: "str_arr25",
    title: "Set Matrix Zeroes",
    link: "https://leetcode.com/problems/set-matrix-zeroes/"
  },
  {
    id: "str_arr26",
    title: "Rotate Matrix by 90 degrees",
    link: "https://leetcode.com/problems/rotate-image/"
  },
  {
    id: "str_arr27",
    title: "Print the Matrix in Spiral Manner",
    link: "https://leetcode.com/problems/spiral-matrix/"
  },
  {
    id: "str_arr28",
    title: "Count Subarray sum Equals K",
    link: "https://leetcode.com/problems/subarray-sum-equals-k/"
  },

  // --- Step 3.3: Hard ---
  {
    id: "str_arr29",
    title: "Pascal's Triangle",
    link: "https://leetcode.com/problems/pascals-triangle/"
  },
  {
    id: "str_arr30",
    title: "Majority Elements (>n/3 times)",
    link: "https://leetcode.com/problems/majority-element-ii/"
  },
  {
    id: "str_arr31",
    title: "3-Sum Problem",
    link: "https://leetcode.com/problems/3sum/"
  },
  {
    id: "str_arr32",
    title: "4-Sum Problem",
    link: "https://leetcode.com/problems/4sum/"
  },
  {
    id: "str_arr33",
    title: "Longest Subarray with 0 Sum",
    link: "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1"
  },
  {
    id: "str_arr34",
    title: "Count the number of subarrays with given xor K",
    link: "https://www.interviewbit.com/problems/subarray-with-given-xor/"
  },
  {
    id: "str_arr35",
    title: "Merge Overlapping Sub-intervals",
    link: "https://leetcode.com/problems/merge-intervals/"
  },
  {
    id: "str_arr36",
    title: "Merge two sorted arrays without extra space",
    link: "https://leetcode.com/problems/merge-sorted-array/"
  },
  {
    id: "str_arr37",
    title: "Find the repeating and missing numbers",
    link: "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1"
  },
  {
    id: "str_arr38",
    title: "Count Inversions",
    link: "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1"
  },
  {
    id: "str_arr39",
    title: "Reverse Pairs",
    link: "https://leetcode.com/problems/reverse-pairs/"
  },
  {
    id: "str_arr40",
    title: "Maximum Product Subarray",
    link: "https://leetcode.com/problems/maximum-product-subarray/"
  }
          
        ]
      },
      {
        id: "p0_strings",
        title: "Strings (Striver's Sheet - 15 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          {
    id: "str_string1",
    title: "Remove Outermost Parentheses",
    link: "https://leetcode.com/problems/remove-outermost-parentheses/"
  },
  {
    id: "str_string2",
    title: "Reverse Words in a String",
    link: "https://leetcode.com/problems/reverse-words-in-a-string/"
  },
  {
    id: "str_string3",
    title: "Largest Odd Number in String",
    link: "https://leetcode.com/problems/largest-odd-number-in-string/"
  },
  {
    id: "str_string4",
    title: "Longest Common Prefix",
    link: "https://leetcode.com/problems/longest-common-prefix/"
  },
  {
    id: "str_string5",
    title: "Isomorphic Strings",
    link: "https://leetcode.com/problems/isomorphic-strings/"
  },
  {
    id: "str_string6",
    title: "Check if two Strings are anagrams of each other",
    link: "https://leetcode.com/problems/valid-anagram/"
  },
  {
    id: "str_string7",
    title: "Rotate String / Check if one string is a rotation of another",
    link: "https://leetcode.com/problems/rotate-string/"
  },

  // --- Step 4.2: Medium String Problems ---
  {
    id: "str_string8",
    title: "Sort Characters by Frequency",
    link: "https://leetcode.com/problems/sort-characters-by-frequency/"
  },
  {
    id: "str_string9",
    title: "Maximum Nesting Depth of the Parentheses",
    link: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/"
  },
  {
    id: "str_string10",
    title: "Roman to Integer",
    link: "https://leetcode.com/problems/roman-to-integer/"
  },
  {
    id: "str_string11",
    title: "String to Integer (atoi)",
    link: "https://leetcode.com/problems/string-to-integer-atoi/"
  },
  {
    id: "str_string12",
    title: "Count Number of Substrings",
    link: "https://www.geeksforgeeks.org/problems/count-number-of-substrings4528/1"
  },
  {
    id: "str_string13",
    title: "Longest Palindromic Substring",
    link: "https://leetcode.com/problems/longest-palindromic-substring/"
  },
  {
    id: "str_string14",
    title: "Sum of Beauty of All Substrings",
    link: "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/"
  },
  {
    id: "str_string15",
    title: "Reverse Every Word in A String",
    link: "https://leetcode.com/problems/reverse-words-in-a-string-iii/" // Note: Often mapped to Reverse Words III in LeetCode
  }
          
        ]
      },
      {
        id: "p0_greedy",
        title: "Greedy (Striver's Sheet - 16 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          {
    id: "str_grd1",
    title: "Assign Cookies",
    link: "https://leetcode.com/problems/assign-cookies/"
  },
  {
    id: "str_grd2",
    title: "Fractional Knapsack",
    link: "https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"
  },
  {
    id: "str_grd3",
    title: "Find Minimum Number of Coins",
    link: "https://www.geeksforgeeks.org/problems/min-coin5549/1"
  },
  {
    id: "str_grd4",
    title: "Lemonade Change",
    link: "https://leetcode.com/problems/lemonade-change/"
  },
  {
    id: "str_grd5",
    title: "Valid Parenthesis String",
    link: "https://leetcode.com/problems/valid-parenthesis-string/"
  },

  // --- Step 6.2: Medium/Hard ---
  {
    id: "str_grd6",
    title: "N meetings in one room",
    link: "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"
  },
  {
    id: "str_grd7",
    title: "Minimum Platforms",
    link: "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"
  },
  {
    id: "str_grd8",
    title: "Job Sequencing Problem",
    link: "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1"
  },
  {
    id: "str_grd9",
    title: "Jump Game",
    link: "https://leetcode.com/problems/jump-game/"
  },
  {
    id: "str_grd10",
    title: "Jump Game II",
    link: "https://leetcode.com/problems/jump-game-ii/"
  },
  {
    id: "str_grd11",
    title: "Candy",
    link: "https://leetcode.com/problems/candy/"
  },
  {
    id: "str_grd12",
    title: "Non-overlapping Intervals",
    link: "https://leetcode.com/problems/non-overlapping-intervals/"
  },
  {
    id: "str_grd13",
    title: "Insert Interval",
    link: "https://leetcode.com/problems/insert-interval/"
  },
  {
    id: "str_grd14",
    title: "Merge Intervals",
    link: "https://leetcode.com/problems/merge-intervals/"
  },
  {
    id: "str_grd15",
    title: "Shortest Job First (SJF)",
    link: "https://www.geeksforgeeks.org/problems/shortest-job-first/1"
  },
  {
    id: "str_grd16",
    title: "Page Faults in LRU",
    link: "https://www.geeksforgeeks.org/problems/page-faults-in-lru/1"
  }
          
        ]
      },
      {
        id: "p0_stl",
        title: "STL, Stack & Queue (30 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
           { title: "Policy-Based-Data-Structure", link: "https://www.geeksforgeeks.org/cpp/policy-based-data-structures-g/" }
        ],
        questions: [
          
  { id: "stl_1", title: "Gravity Flip", link: "https://codeforces.com/problemset/problem/405/A" },
  { id: "stl_2", title: "Team", link: "https://codeforces.com/problemset/problem/231/A" },
  { id: "stl_3", title: "Dragons", link: "https://codeforces.com/problemset/problem/230/A" },
  { id: "stl_4", title: "The Monk and Class Marks", link: "https://www.hackerearth.com/problem/algorithm/the-monk-and-class-marks/" },
  { id: "stl_5", title: "Registration System", link: "https://codeforces.com/problemset/problem/4/C" },
  { id: "stl_6", title: "Radio Station", link: "https://codeforces.com/problemset/problem/918/B" },
  { id: "stl_7", title: "Sereja and Suffixes", link: "https://codeforces.com/problemset/problem/368/B" },
  { id: "stl_8", title: "Second Order Statistics", link: "https://codeforces.com/problemset/problem/22/A" },
  { id: "stl_9", title: "Indian Summer", link: "https://codeforces.com/problemset/problem/44/A" },
  { id: "stl_10", title: "Tom Riddle's Diary", link: "https://codeforces.com/problemset/problem/855/A" },
  { id: "stl_11", title: "Concert Tickets", link: "https://cses.fi/problemset/task/1091" },
  { id: "stl_12", title: "Towers", link: "https://cses.fi/problemset/task/1073" },
  { id: "stl_13", title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
  { id: "stl_14", title: "Pangram", link: "https://codeforces.com/problemset/problem/520/A" },
  { id: "stl_15", title: "Winner", link: "https://codeforces.com/problemset/problem/2/A" },
  { id: "stl_16", title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/" },
  { id: "stl_17", title: "Sort the Array", link: "https://codeforces.com/problemset/problem/451/B" },
  { id: "stl_18", title: "Interesting Drink", link: "https://codeforces.com/problemset/problem/706/B" },
  { id: "stl_19", title: "Worms", link: "https://codeforces.com/problemset/problem/474/B" },
  { id: "stl_20", title: "Amusing Joke", link: "https://codeforces.com/problemset/problem/141/A" },
  { id: "stl_21", title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/" },
  {
    id: "str_sq1",
    title: "Implement Stack using Arrays",
    link: "https://www.geeksforgeeks.org/problems/implement-stack-using-array/1"
  },
  {
    id: "str_sq2",
    title: "Implement Queue using Arrays",
    link: "https://www.geeksforgeeks.org/problems/implement-queue-using-array/1"
  },
  {
    id: "str_sq3",
    title: "Implement Stack using Queues",
    link: "https://leetcode.com/problems/implement-stack-using-queues/"
  },
  {
    id: "str_sq4",
    title: "Implement Queue using Stacks",
    link: "https://leetcode.com/problems/implement-queue-using-stacks/"
  },
  { id: "str_sq_ll1", title: "Implement Stack using Linked List", link: "https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1" },
          { id: "str_sq_ll2", title: "Implement Queue using Linked List", link: "https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1" },
  {
    id: "str_sq5",
    title: "Valid Parentheses",
    link: "https://leetcode.com/problems/valid-parentheses/"
  },
  {
    id: "str_sq6",
    title: "Implement Min Stack",
    link: "https://leetcode.com/problems/min-stack/"
  },

  // --- Step 9.2: Prefix/Infix/Postfix Conversion ---
  {
    id: "str_sq7",
    title: "Infix to Postfix Conversion",
    link: "https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1"
  },
  {
    id: "str_sq8",
    title: "Prefix to Infix Conversion",
    link: "https://www.geeksforgeeks.org/problems/prefix-to-infix-conversion/1"
  },
  {
    id: "str_sq9",
    title: "Prefix to Postfix Conversion",
    link: "https://www.geeksforgeeks.org/problems/prefix-to-postfix-conversion/1"
  },
  {
    id: "str_sq10",
    title: "Postfix to Prefix Conversion",
    link: "https://www.geeksforgeeks.org/problems/postfix-to-prefix-conversion/1"
  },
  {
    id: "str_sq11",
    title: "Postfix to Infix Conversion",
    link: "https://www.geeksforgeeks.org/problems/postfix-to-infix-conversion/1"
  },
  {
    id: "str_sq12",
    title: "Convert Infix to Prefix",
    link: "https://www.geeksforgeeks.org/problems/infix-to-prefix-conversion/1"
  },

  // --- Step 9.3: Monotonic Stack & Queue Problems ---
  {
    id: "str_sq13",
    title: "Next Greater Element I",
    link: "https://leetcode.com/problems/next-greater-element-i/"
  },
  {
    id: "str_sq14",
    title: "Next Greater Element II",
    link: "https://leetcode.com/problems/next-greater-element-ii/"
  },
  {
    id: "str_sq15",
    title: "Next Smaller Element",
    link: "https://www.geeksforgeeks.org/problems/immediate-smaller-element1142/1" // or https://www.interviewbit.com/problems/nearest-smaller-element/
  },
  {
    id: "str_sq16",
    title: "Number of NGEs to the right",
    link: "https://www.geeksforgeeks.org/problems/number-of-nges-to-the-right/1"
  },
  {
    id: "str_sq17",
    title: "Trapping Rain Water",
    link: "https://leetcode.com/problems/trapping-rain-water/"
  },
  {
    id: "str_sq18",
    title: "Sum of Subarray Minimums",
    link: "https://leetcode.com/problems/sum-of-subarray-minimums/"
  },
  {
    id: "str_sq19",
    title: "Asteroid Collision",
    link: "https://leetcode.com/problems/asteroid-collision/"
  },
  {
    id: "str_sq20",
    title: "Sum of Subarray Ranges",
    link: "https://leetcode.com/problems/sum-of-subarray-ranges/"
  },
  {
    id: "str_sq21",
    title: "Remove K Digits",
    link: "https://leetcode.com/problems/remove-k-digits/"
  },
  {
    id: "str_sq22",
    title: "Largest Rectangle in Histogram",
    link: "https://leetcode.com/problems/largest-rectangle-in-histogram/"
  },
  {
    id: "str_sq23",
    title: "Maximal Rectangle",
    link: "https://leetcode.com/problems/maximal-rectangle/"
  },

  // --- Step 9.4: Implementation Problems ---
  {
    id: "str_sq24",
    title: "Sliding Window Maximum",
    link: "https://leetcode.com/problems/sliding-window-maximum/"
  },
  {
    id: "str_sq25",
    title: "Online Stock Span",
    link: "https://leetcode.com/problems/online-stock-span/"
  },
  {
    id: "str_sq26",
    title: "Rotten Oranges",
    link: "https://leetcode.com/problems/rotting-oranges/"
  },
  {
    id: "str_sq27",
    title: "LRU Cache",
    link: "https://leetcode.com/problems/lru-cache/"
  },
  {
    id: "str_sq28",
    title: "LFU Cache",
    link: "https://leetcode.com/problems/lfu-cache/"
  },
  {
    id: "str_sq29",
    title: "The Celebrity Problem",
    link: "https://www.geeksforgeeks.org/problems/the-celebrity-problem/1"
  }

        ]
      },
      {
        id: "p0_cf800",
        title: "Codeforces Rating 800 (50 Problems)",
        questions: [
          { id: "cf8_1", title: "Watermelon", link: "https://codeforces.com/problemset/problem/4/A" },
          { id: "cf8_2", title: "Way Too Long Words", link: "https://codeforces.com/problemset/problem/71/A" },
          { id: "cf8_3", title: "Team", link: "https://codeforces.com/problemset/problem/231/A" },
          { id: "cf8_4", title: "Next Round", link: "https://codeforces.com/problemset/problem/158/A" },
          { id: "cf8_5", title: "Domino piling", link: "https://codeforces.com/problemset/problem/50/A" },
          { id: "cf8_6", title: "Bit++", link: "https://codeforces.com/problemset/problem/282/A" },
          { id: "cf8_7", title: "Beautiful Matrix", link: "https://codeforces.com/problemset/problem/263/A" },
          { id: "cf8_8", title: "Petya and Strings", link: "https://codeforces.com/problemset/problem/112/A" },
          { id: "cf8_9", title: "Helpful Maths", link: "https://codeforces.com/problemset/problem/339/A" },
          { id: "cf8_10", title: "Word Capitalization", link: "https://codeforces.com/problemset/problem/281/A" },
          { id: "cf8_11", title: "Boy or Girl", link: "https://codeforces.com/problemset/problem/236/A" },
          { id: "cf8_12", title: "Stones on the Table", link: "https://codeforces.com/problemset/problem/266/A" },
          { id: "cf8_13", title: "Bear and Big Brother", link: "https://codeforces.com/problemset/problem/791/A" },
          { id: "cf8_14", title: "Elephant", link: "https://codeforces.com/problemset/problem/617/A" },
          { id: "cf8_15", title: "Soldier and Bananas", link: "https://codeforces.com/problemset/problem/546/A" },
          { id: "cf8_16", title: "Word", link: "https://codeforces.com/problemset/problem/59/A" },
          { id: "cf8_17", title: "Wrong Subtraction", link: "https://codeforces.com/problemset/problem/977/A" },
          { id: "cf8_18", title: "Nearly Lucky Number", link: "https://codeforces.com/problemset/problem/110/A" },
          { id: "cf8_19", title: "Anton and Danik", link: "https://codeforces.com/problemset/problem/734/A" },
          { id: "cf8_20", title: "Translation", link: "https://codeforces.com/problemset/problem/41/A" },
          { id: "cf8_21", title: "Tram", link: "https://codeforces.com/problemset/problem/116/A" },
          { id: "cf8_22", title: "Vanya and Fence", link: "https://codeforces.com/problemset/problem/677/A" },
          { id: "cf8_23", title: "Queue at the School", link: "https://codeforces.com/problemset/problem/266/B" },
          { id: "cf8_24", title: "In Search of an Easy Problem", link: "https://codeforces.com/problemset/problem/1030/A" },
          { id: "cf8_25", title: "George and Accommodation", link: "https://codeforces.com/problemset/problem/467/A" },
          { id: "cf8_26", title: "Magnets", link: "https://codeforces.com/problemset/problem/344/A" },
          { id: "cf8_27", title: "Ultra-Fast Mathematician", link: "https://codeforces.com/problemset/problem/61/A" },
          { id: "cf8_28", title: "Presents", link: "https://codeforces.com/problemset/problem/136/A" },
          { id: "cf8_29", title: "Even Odds", link: "https://codeforces.com/problemset/problem/318/A" },
          { id: "cf8_30", title: "Calculating Function", link: "https://codeforces.com/problemset/problem/486/A" },
          { id: "cf8_31", title: "Hulk", link: "https://codeforces.com/problemset/problem/705/A" },
          { id: "cf8_32", title: "Is your horseshoe on the other hoof?", link: "https://codeforces.com/problemset/problem/228/A" },
          { id: "cf8_33", title: "Drinks", link: "https://codeforces.com/problemset/problem/200/B" },
          { id: "cf8_34", title: "Insomnia cure", link: "https://codeforces.com/problemset/problem/148/A" },
          { id: "cf8_35", title: "I_love_%username%", link: "https://codeforces.com/problemset/problem/155/A" },
          { id: "cf8_36", title: "Divisibility Problem", link: "https://codeforces.com/problemset/problem/1328/A" },
          { id: "cf8_37", title: "Arrival of the General", link: "https://codeforces.com/problemset/problem/144/A" },
          { id: "cf8_38", title: "Games", link: "https://codeforces.com/problemset/problem/268/A" },
          { id: "cf8_39", title: "Anton and Letters", link: "https://codeforces.com/problemset/problem/443/A" },
          { id: "cf8_40", title: "Amusing Joke", link: "https://codeforces.com/problemset/problem/141/A" },
          { id: "cf8_41", title: "Police Recruits", link: "https://codeforces.com/problemset/problem/427/A" },
          { id: "cf8_42", title: "Fox And Snake", link: "https://codeforces.com/problemset/problem/510/A" },
          { id: "cf8_43", title: "Soft Drinking", link: "https://codeforces.com/problemset/problem/151/A" },
          { id: "cf8_44", title: "New Year and Hurry", link: "https://codeforces.com/problemset/problem/750/A" },
          { id: "cf8_45", title: "Pangram", link: "https://codeforces.com/problemset/problem/520/A" },
          { id: "cf8_46", title: "I Wanna Be the Guy", link: "https://codeforces.com/problemset/problem/469/A" },
          { id: "cf8_47", title: "Hit the Lottery", link: "https://codeforces.com/problemset/problem/996/A" },
          { id: "cf8_48", title: "Anton and Polyhedrons", link: "https://codeforces.com/problemset/problem/785/A" },
          { id: "cf8_49", title: "The New Year: Meeting Friends", link: "https://codeforces.com/problemset/problem/723/A" },
          { id: "cf8_50", title: "Buy a Shovel", link: "https://codeforces.com/problemset/problem/732/A" }
        ]
      },
      {
        id: "p0_cf1000",
        title: "Codeforces Rating 1000 (50 Problems)",
        questions: [
          { id: "cf10_1", title: "Theatre Square", link: "https://codeforces.com/problemset/problem/1/A" },
          { id: "cf10_2", title: "String Task", link: "https://codeforces.com/problemset/problem/118/A" },
          { id: "cf10_3", title: "Chat room", link: "https://codeforces.com/problemset/problem/58/A" },
          { id: "cf10_4", title: "Young Physicist", link: "https://codeforces.com/problemset/problem/69/A" },
          { id: "cf10_5", title: "Lucky Division", link: "https://codeforces.com/problemset/problem/122/A" },
          { id: "cf10_6", title: "Twins", link: "https://codeforces.com/problemset/problem/160/A" },
          { id: "cf10_7", title: "Football", link: "https://codeforces.com/problemset/problem/96/A" },
          { id: "cf10_8", title: "Expression", link: "https://codeforces.com/problemset/problem/479/A" },
          { id: "cf10_9", title: "Caps Lock", link: "https://codeforces.com/problemset/problem/131/A" },
          { id: "cf10_10", title: "cAPS lOCK", link: "https://codeforces.com/problemset/problem/131/A" },
          { id: "cf10_11", title: "Taxi", link: "https://codeforces.com/problemset/problem/158/B" },
          { id: "cf10_12", title: "Xenia and Ringroad", link: "https://codeforces.com/problemset/problem/339/B" },
          { id: "cf10_13", title: "Dragons", link: "https://codeforces.com/problemset/problem/230/A" },
          { id: "cf10_14", title: "Dreamoon and Stairs", link: "https://codeforces.com/problemset/problem/476/A" },
          { id: "cf10_15", title: "Olesya and Rodion", link: "https://codeforces.com/problemset/problem/584/A" },
          { id: "cf10_16", title: "Berland Poker", link: "https://codeforces.com/problemset/problem/1359/A" },
          { id: "cf10_17", title: "Road To Zero", link: "https://codeforces.com/problemset/problem/1342/A" },
          { id: "cf10_18", title: "Jzzhu and Children", link: "https://codeforces.com/problemset/problem/450/A" },
          { id: "cf10_19", title: "DZY Loves Chessboard", link: "https://codeforces.com/problemset/problem/445/A" },
          { id: "cf10_20", title: "Multi-subject Competition", link: "https://codeforces.com/problemset/problem/1163/A" },
          { id: "cf10_21", title: "Present from Lena", link: "https://codeforces.com/problemset/problem/118/B" },
          { id: "cf10_22", title: "Lecture", link: "https://codeforces.com/problemset/problem/499/B" },
          { id: "cf10_23", title: "Arpa’s hard exam and Mehrdad’s naive cheat", link: "https://codeforces.com/problemset/problem/742/A" },
          { id: "cf10_24", title: "Valera and X", link: "https://codeforces.com/problemset/problem/404/A" },
          { id: "cf10_25", title: "Fedor and New Game", link: "https://codeforces.com/problemset/problem/467/B" },
          { id: "cf10_26", title: "New Year Transportation", link: "https://codeforces.com/problemset/problem/500/A" },
          { id: "cf10_27", title: "Vanya and Lanterns", link: "https://codeforces.com/problemset/problem/492/B" },
          { id: "cf10_28", title: "Interesting drink", link: "https://codeforces.com/problemset/problem/706/B" },
          { id: "cf10_29", title: "Cheap Travel", link: "https://codeforces.com/problemset/problem/466/A" },
          { id: "cf10_30", title: "Raising Bacteria", link: "https://codeforces.com/problemset/problem/579/A" },
          { id: "cf10_31", title: "Kefa and First Steps", link: "https://codeforces.com/problemset/problem/580/A" },
          { id: "cf10_32", title: "Puzzles", link: "https://codeforces.com/problemset/problem/337/A" },
          { id: "cf10_33", title: "IQ test", link: "https://codeforces.com/problemset/problem/25/A" },
          { id: "cf10_34", title: "Cut Ribbon", link: "https://codeforces.com/problemset/problem/189/A" },
          { id: "cf10_35", title: "Registration System", link: "https://codeforces.com/problemset/problem/4/C" },
          { id: "cf10_36", title: "Bowman", link: "https://codeforces.com/problemset/problem/1440/B" },
          { id: "cf10_37", title: "Lovely Palindromes", link: "https://codeforces.com/problemset/problem/688/B" },
          { id: "cf10_38", title: "Phoenix and Balance", link: "https://codeforces.com/problemset/problem/1348/A" },
          { id: "cf10_39", title: "Boboniu Likes to Color Balls", link: "https://codeforces.com/problemset/problem/1395/A" },
          { id: "cf10_40", title: "Move Brackets", link: "https://codeforces.com/problemset/problem/1374/C" },
          { id: "cf10_41", title: "Maria Breaks the Self-isolation", link: "https://codeforces.com/problemset/problem/1358/B" },
          { id: "cf10_42", title: "Johnny and Ancient Computer", link: "https://codeforces.com/problemset/problem/1362/A" },
          { id: "cf10_43", title: "Donut Shops", link: "https://codeforces.com/problemset/problem/1373/B" },
          { id: "cf10_44", title: "Multiply by 2, divide by 6", link: "https://codeforces.com/problemset/problem/1374/B" },
          { id: "cf10_45", title: "Board Moves", link: "https://codeforces.com/problemset/problem/1353/C" },
          { id: "cf10_46", title: "Construct the String", link: "https://codeforces.com/problemset/problem/1335/B" },
          { id: "cf10_47", title: "K-th Not Divisible by n", link: "https://codeforces.com/problemset/problem/1352/C" },
          { id: "cf10_48", title: "Same Parity Summands", link: "https://codeforces.com/problemset/problem/1352/B" },
          { id: "cf10_49", title: "Candies", link: "https://codeforces.com/problemset/problem/1343/A" },
          { id: "cf10_50", title: "Balanced Array", link: "https://codeforces.com/problemset/problem/1343/B" }
        ]
      },
      {
        id: "p0_cf1200",
        title: "Codeforces Rating 1200 (50 Problems)",
        questions: [
          { id: "cf12_1", title: "Chewbacca and Number", link: "https://codeforces.com/problemset/problem/514/A" },
          { id: "cf12_2", title: "Vanya and Lanterns", link: "https://codeforces.com/problemset/problem/492/B" },
          { id: "cf12_3", title: "Worms", link: "https://codeforces.com/problemset/problem/474/B" },
          { id: "cf12_4", title: "Flipping Game", link: "https://codeforces.com/problemset/problem/327/A" },
          { id: "cf12_5", title: "K-th Not Divisible by n", link: "https://codeforces.com/problemset/problem/1352/C" },
          { id: "cf12_6", title: "Same Parity Summands", link: "https://codeforces.com/problemset/problem/1352/B" },
          { id: "cf12_7", title: "A and B and Compilation Errors", link: "https://codeforces.com/problemset/problem/519/B" },
          { id: "cf12_8", title: "Alternating Subsequence", link: "https://codeforces.com/problemset/problem/1343/C" },
          { id: "cf12_9", title: "Sequence with Digits", link: "https://codeforces.com/problemset/problem/1355/A" },
          { id: "cf12_10", title: "Ternary String", link: "https://codeforces.com/problemset/problem/1354/B" },
          { id: "cf12_11", title: "Two Arrays And Swaps", link: "https://codeforces.com/problemset/problem/1353/B" },
          { id: "cf12_12", title: "Orac and Factors", link: "https://codeforces.com/problemset/problem/1350/A" },
          { id: "cf12_13", title: "Level Statistics", link: "https://codeforces.com/problemset/problem/1334/A" },
          { id: "cf12_14", title: "Sorted Adjacent Differences", link: "https://codeforces.com/problemset/problem/1339/B" },
          { id: "cf12_15", title: "Powered Addition", link: "https://codeforces.com/problemset/problem/1338/A" },
          { id: "cf12_16", title: "Kuroni and the Gifts", link: "https://codeforces.com/problemset/problem/1305/A" },
          { id: "cf12_17", title: "Air Conditioner", link: "https://codeforces.com/problemset/problem/1304/C" },
          { id: "cf12_18", title: "Perform the Combo", link: "https://codeforces.com/problemset/problem/1311/C" },
          { id: "cf12_19", title: "Eating Candies", link: "https://codeforces.com/problemset/problem/1183/D" },
          { id: "cf12_20", title: "Odd Selection", link: "https://codeforces.com/problemset/problem/1363/A" },
          { id: "cf12_21", title: "Yet Another Palindrome Problem", link: "https://codeforces.com/problemset/problem/1324/B" },
          { id: "cf12_22", title: "Frog Jumps", link: "https://codeforces.com/problemset/problem/1324/C" },
          { id: "cf12_23", title: "Pair of Topics", link: "https://codeforces.com/problemset/problem/1324/D" },
          { id: "cf12_24", title: "Three Strings", link: "https://codeforces.com/problemset/problem/1301/A" },
          { id: "cf12_25", title: "Food Buying", link: "https://codeforces.com/problemset/problem/1296/B" },
          { id: "cf12_26", title: "Collecting Packages", link: "https://codeforces.com/problemset/problem/1294/B" },
          { id: "cf12_27", title: "Product of Three Numbers", link: "https://codeforces.com/problemset/problem/1294/C" },
          { id: "cf12_28", title: "Infinite Prefixes", link: "https://codeforces.com/problemset/problem/1295/A" },
          { id: "cf12_29", title: "Hyperset", link: "https://codeforces.com/problemset/problem/1287/B" },
          { id: "cf12_30", title: "Garland", link: "https://codeforces.com/problemset/problem/1286/A" },
          { id: "cf12_31", title: "AZ", link: "https://codeforces.com/problemset/problem/1270/B" },
          { id: "cf12_32", title: "Verse For Santa", link: "https://codeforces.com/problemset/problem/1279/B" },
          { id: "cf12_33", title: "Happy Birthday", link: "https://codeforces.com/problemset/problem/1284/A" },
          { id: "cf12_34", title: "Polycarp", link: "https://codeforces.com/problemset/problem/1272/D" },
          { id: "cf12_35", title: "Just Eat It!", link: "https://codeforces.com/problemset/problem/1285/B" },
          { id: "cf12_36", title: "Dr. Evil Underscores", link: "https://codeforces.com/problemset/problem/1285/C" },
          { id: "cf12_37", title: "K for the Price of One", link: "https://codeforces.com/problemset/problem/1282/B1" },
          { id: "cf12_38", title: "Cut and Paste", link: "https://codeforces.com/problemset/problem/1280/A" },
          { id: "cf12_39", title: "Box is Pull", link: "https://codeforces.com/problemset/problem/1262/A" },
          { id: "cf12_40", title: "Bad Sequence", link: "https://codeforces.com/problemset/problem/1214/C" },
          { id: "cf12_41", title: "Equalize Prices Again", link: "https://codeforces.com/problemset/problem/1234/A" },
          { id: "cf12_42", title: "Books Exchange", link: "https://codeforces.com/problemset/problem/1249/B1" },
          { id: "cf12_43", title: "White Sheet", link: "https://codeforces.com/problemset/problem/1216/C" },
          { id: "cf12_44", title: "Labs", link: "https://codeforces.com/problemset/problem/1236/C" },
          { id: "cf12_45", title: "Pipes", link: "https://codeforces.com/problemset/problem/1234/C" },
          { id: "cf12_46", title: "Distinct Characters", link: "https://codeforces.com/problemset/problem/1228/B" },
          { id: "cf12_47", title: "Book Reading", link: "https://codeforces.com/problemset/problem/1213/C" },
          { id: "cf12_48", title: "Computer Game", link: "https://codeforces.com/problemset/problem/1183/C" },
          { id: "cf12_49", title: "Petr and a Combination Lock", link: "https://codeforces.com/problemset/problem/1097/B" },
          { id: "cf12_50", title: "Substrings Sort", link: "https://codeforces.com/problemset/problem/988/B" }
        ]
      },
       {
        id: "p0_hashing",
        title: "Hashing (Striver's Sheet)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          { id: "str_hash1", title: "Counting Frequencies of Array Elements", link: "https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1" },
          { id: "str_hash2", title: "Find the Highest/Lowest Frequency Element", link: "https://leetcode.com/problems/top-k-frequent-elements/" }, // Closest LeetCode equivalent (K=1)

          // --- Standard Hashing Practice (Foundational) ---
          { id: "str_hash3", title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/" },
          { id: "str_hash4", title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/" },
          { id: "str_hash5", title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
          { id: "str_hash6", title: "Intersection of Two Arrays", link: "https://leetcode.com/problems/intersection-of-two-arrays/" },
          { id: "str_hash7", title: "First Unique Character in a String", link: "https://leetcode.com/problems/first-unique-character-in-a-string/" }
          
        ]
      },
      {
        id: "p0prefixsuffix",
        title: "Prefix-Suffix",
        resources: [
           { title: "prefixsuffix", link: "https://codeforces.com/blog/entry/140458" }
        ],
        questions: [
          
{ id: "cses_1662", title: "Subarray Divisibility (CSES)", link: "https://cses.fi/problemset/task/1662" },
          { id: "spoj_csumq", title: "CSUMQ - Cumulative Sum Query", link: "https://www.spoj.com/problems/CSUMQ/" },
          { id: "cf_835c", title: "Star Sky", link: "https://codeforces.com/problemset/problem/835/C" },
          { id: "cf_1398c", title: "Good Subarrays", link: "https://codeforces.com/problemset/problem/1398/C" },
          { id: "cf_1291d", title: "Irreducible Anagrams", link: "https://codeforces.com/problemset/problem/1291/D" },
          { id: "ac_abc164d", title: "Multiple of 2019 (AtCoder)", link: "https://atcoder.jp/contests/abc164/tasks/abc164_d" },
          { id: "cf_2072d", title: "Codeforces 2072D", link: "https://codeforces.com/problemset/problem/2072/D" }, // ID from image
          { id: "cf_1501b", title: "Napoleon Cake", link: "https://codeforces.com/problemset/problem/1501/B" },
          { id: "cf_433b", title: "Kuriyama Mirai's Stones", link: "https://codeforces.com/problemset/problem/433/B" },
          { id: "cf_296c", title: "Greg and Array", link: "https://codeforces.com/problemset/problem/296/C" },
          { id: "cf_816b", title: "Karen and Coffee", link: "https://codeforces.com/problemset/problem/816/B" },
          { id: "cf_1722e", title: "Counting Rectangles", link: "https://codeforces.com/problemset/problem/1722/E" },
          { id: "cf_1837d", title: "Bracket Coloring", link: "https://codeforces.com/problemset/problem/1837/D" },
          { id: "cf_2074d", title: "Codeforces 2074D", link: "https://codeforces.com/problemset/problem/2074/D" }, // ID from image
          { id: "ac_abc398d", title: "AtCoder ABC398 D", link: "https://atcoder.jp/contests/abc398/tasks/abc398_d" }, // ID from image
          
          // --- From Comments in Image ---
          { id: "cf_2008e", title: "Codeforces 2008E", link: "https://codeforces.com/problemset/problem/2008/E" }
        ]
      },
      {
        id: "p0diffrencearray",
        title: "Diffrence-array",
        resources: [
           { title: "Diffrence-array", link: "https://codeforces.com/blog/entry/78762" }
        ],
        questions: [
          { id: "cf_296c", title: "Greg and Array", link: "https://codeforces.com/problemset/problem/296/C" }, // The classic "Diff Array on Operations" problem
          { id: "cf_816b", title: "Karen and Coffee", link: "https://codeforces.com/problemset/problem/816/B" }, // Admissible over ranges
          { id: "cf_276c", title: "Little Girl and Maximum Sum", link: "https://codeforces.com/problemset/problem/276/C" }, // Frequency counting via Diff Array
          { id: "cf_1501b", title: "Napoleon Cake", link: "https://codeforces.com/problemset/problem/1501/B" }, // Reverse Difference Array
          { id: "cf_177d2", title: "Encrypting Messages", link: "https://codeforces.com/problemset/problem/177/D2" }, // Cyclic shifting/Diff Array
          
          // --- Advanced / 2D Difference Array ---
          { id: "cc_cens20a", title: "CENS20A (CodeChef)", link: "https://www.codechef.com/problems/CENS20A" }, // 2D Difference Array (mentioned in comments)
          { id: "cf_1864d", title: "Matrix Cascade", link: "https://codeforces.com/contest/1864/problem/D" }, // Propagation (Advanced)
          { id: "cf_835c", title: "Star Sky", link: "https://codeforces.com/problemset/problem/835/C" }
          
        ]
      },
    ]
  },
  phase1: {
    title: "Phase 1: Algorithms (3 Months)",
    description: "Sorting, Searching, Number Theory, Two Pointers.",
    sections: [
      {
        id: "p1_sorting",
        title: "Sorting (7 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
           { title: "GFG All Sorting Algos", link: "https://www.geeksforgeeks.org/sorting-algorithms/" },
           { title: "Meet in the Middle (USACO)", link: "https://usaco.guide/gold/meet-in-the-middle" },
           { title: "Meet in the Middle (YouTube)", link: "https://www.youtube.com/watch?v=naz_9njI0I0" }

        ],
        questions: [
          { id: "str_sort1", title: "Selection Sort", link: "https://www.geeksforgeeks.org/problems/selection-sort/1" },
          { id: "str_sort2", title: "Bubble Sort", link: "https://www.geeksforgeeks.org/problems/bubble-sort/1" },
          { id: "str_sort3", title: "Insertion Sort", link: "https://www.geeksforgeeks.org/problems/insertion-sort/1" },

          // --- Step 2.2: Sorting-II (Advanced) ---
          { id: "str_sort4", title: "Merge Sort", link: "https://www.geeksforgeeks.org/problems/merge-sort/1" },
          { id: "str_sort5", title: "Recursive Bubble Sort", link: "https://www.geeksforgeeks.org/problems/bubble-sort/1" }, // Same link, different approach
          { id: "str_sort6", title: "Recursive Insertion Sort", link: "https://www.geeksforgeeks.org/problems/insertion-sort/1" }, // Same link, different approach
          { id: "str_sort7", title: "Quick Sort", link: "https://www.geeksforgeeks.org/problems/quick-sort/1" }
          
        ]
      },
      {
        id: "p1_bs",
        title: "Binary Search (32 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
           { title: "Ternary Search", link: "https://cp-algorithms.com/num_methods/ternary_search.html" }
        ],
        questions: [
          { id: "str_bs1", title: "Binary Search to find X in sorted array", link: "https://leetcode.com/problems/binary-search/" },
          { id: "str_bs2", title: "Lower Bound", link: "https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1" },
          { id: "str_bs3", title: "Upper Bound", link: "https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1" },
          { id: "str_bs4", title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/" },
          { id: "str_bs5", title: "Floor and Ceil in Sorted Array", link: "https://www.geeksforgeeks.org/problems/ceil-the-floor2802/1" },
          { id: "str_bs6", title: "First and Last Occurrences in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
          { id: "str_bs7", title: "Count Occurrences in Sorted Array", link: "https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1" },
          { id: "str_bs8", title: "Search in Rotated Sorted Array I", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
          { id: "str_bs9", title: "Search in Rotated Sorted Array II", link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" },
          { id: "str_bs10", title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
          { id: "str_bs11", title: "Find How Many Times Array has been Rotated", link: "https://www.geeksforgeeks.org/problems/rotation4723/1" },
          { id: "str_bs12", title: "Single Element in Sorted Array", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/" },
          { id: "str_bs13", title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/" },

          // --- Striver Step 4.2: BS on Answer (Search Space) ---
          { id: "str_bs14", title: "Find Sqrt of a number using BS", link: "https://www.geeksforgeeks.org/problems/square-root/1" },
          { id: "str_bs15", title: "Nth Root of a Number using BS", link: "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1" },
          { id: "str_bs16", title: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/" },
          { id: "str_bs17", title: "Minimum days to make M bouquets", link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/" },
          { id: "str_bs18", title: "Find the Smallest Divisor Given a Threshold", link: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/" },
          { id: "str_bs19", title: "Capacity to Ship Packages within D Days", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
          { id: "str_bs20", title: "Kth Missing Positive Number", link: "https://leetcode.com/problems/kth-missing-positive-number/" },
          { id: "str_bs21", title: "Aggressive Cows", link: "https://www.geeksforgeeks.org/problems/aggressive-cows/1" },
          { id: "str_bs22", title: "Book Allocation Problem", link: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1" },
          { id: "str_bs23", title: "Split Array Largest Sum", link: "https://leetcode.com/problems/split-array-largest-sum/" },
          { id: "str_bs24", title: "Painter's Partition Problem", link: "https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1" },
          { id: "str_bs25", title: "Minimize Max Distance to Gas Station", link: "https://www.geeksforgeeks.org/problems/minimize-max-distance-to-gas-station/1" },
          { id: "str_bs26", title: "Median of 2 Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
          { id: "str_bs27", title: "Kth Element of two sorted arrays", link: "https://www.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1" },

          // --- Striver Step 4.3: BS on 2D Arrays ---
          { id: "str_bs28", title: "Row with Max 1s", link: "https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1" },
          { id: "str_bs29", title: "Search in a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
          { id: "str_bs30", title: "Search in a 2D Matrix II", link: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
          { id: "str_bs31", title: "Find Peak Element (2D Matrix)", link: "https://leetcode.com/problems/find-a-peak-element-ii/" },
          { id: "str_bs32", title: "Median in a Row Wise Sorted Matrix", link: "https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1" },

          // --- Existing Codeforces Practice (CP Focus) ---
          { id: "cf_bs_1", title: "Vanya and Lanterns", link: "https://codeforces.com/problemset/problem/492/B" },
  { id: "cf_bs_2", title: "Interesting drink", link: "https://codeforces.com/problemset/problem/706/B" },
  { id: "cf_bs_3", title: "Worms", link: "https://codeforces.com/problemset/problem/474/B" },
  { id: "cf_bs_4", title: "K-th Not Divisible by n", link: "https://codeforces.com/problemset/problem/1352/C" },
  { id: "cf_bs_5", title: "Magic Powder - 1", link: "https://codeforces.com/problemset/problem/670/D1" },
  { id: "cf_bs_6", title: "Hamburgers", link: "https://codeforces.com/problemset/problem/371/C" },
  { id: "cf_bs_7", title: "Burning Midnight Oil", link: "https://codeforces.com/problemset/problem/165/B" },
  { id: "cf_bs_8", title: "Pipeline", link: "https://codeforces.com/problemset/problem/287/B" },
  { id: "cf_bs_9", title: "Poisoned Dagger", link: "https://codeforces.com/problemset/problem/1613/C" },
  { id: "cf_bs_10", title: "Eating Queries", link: "https://codeforces.com/problemset/problem/1676/E" },
  { id: "cf_bs_11", title: "Maximum Median", link: "https://codeforces.com/problemset/problem/1201/C" },
  { id: "cf_bs_12", title: "Computer Game", link: "https://codeforces.com/problemset/problem/1183/C" },
  { id: "cf_bs_13", title: "Chat Ban", link: "https://codeforces.com/problemset/problem/1612/C" },
  { id: "cf_bs_14", title: "Keshi Is Throwing a Party", link: "https://codeforces.com/problemset/problem/1610/C" },
  { id: "cf_bs_15", title: "Counting Kangaroos is Fun", link: "https://codeforces.com/problemset/problem/372/A" },
  { id: "cf_bs_16", title: "Mike and Chocolate Thieves", link: "https://codeforces.com/problemset/problem/689/B" },
  { id: "cf_bs_17", title: "Sagheer and Nubian Market", link: "https://codeforces.com/problemset/problem/812/C" },
  { id: "cf_bs_18", title: "Save the Nature", link: "https://codeforces.com/problemset/problem/1223/C" },
  { id: "cf_bs_19", title: "Get an Even String", link: "https://codeforces.com/problemset/problem/1660/C" },
  { id: "cf_bs_20", title: "Increasing Subsequence", link: "https://codeforces.com/problemset/problem/1157/C1" },
  { id: "cf_bs_21", title: "Fixed Point Guessing", link: "https://codeforces.com/problemset/problem/1679/B" },
  { id: "cf_bs_22", title: "Guess the Number", link: "https://codeforces.com/problemset/problem/416/A" },
  { id: "cf_bs_23", title: "Sport Mafia", link: "https://codeforces.com/problemset/problem/1195/B" },
  { id: "cf_bs_24", title: "Perfect Team", link: "https://codeforces.com/problemset/problem/1221/C" },
  { id: "cf_bs_25", title: "New Year's Problem", link: "https://codeforces.com/problemset/problem/1619/C" },
  { id: "cf_bs_26", title: "Books Exchange", link: "https://codeforces.com/problemset/problem/1249/B1" },
  { id: "cf_bs_27", title: "Letters", link: "https://codeforces.com/problemset/problem/978/C" },
  { id: "cf_bs_28", title: "Minimum Notation", link: "https://codeforces.com/problemset/problem/1730/C" },
  { id: "cf_bs_29", title: "Scuza", link: "https://codeforces.com/problemset/problem/1742/E" },
  { id: "cf_bs_30", title: "Jumping on Tiles", link: "https://codeforces.com/problemset/problem/1729/C" }
        ]
      },
      {
        id: "p1_bit",
        title: "Bit Manipulation (18 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
           { title: "Galen Colin Stream 1", link: "https://www.youtube.com/watch?v=1um-WUyjess&list=PLDjGkpToBsYCaRoQ-_S5MRxYMuKgHD62w&index=9" },
            { title: "Galen Colin Stream 2", link: "https://www.youtube.com/watch?v=UPVoGMZWQMU&list=PLDjGkpToBsYCaRoQ-_S5MRxYMuKgHD62w&index=10" }
        ],
        questions: [
{ id: "str_bit1", title: "Introduction to Bit Manipulation", link: "https://www.geeksforgeeks.org/problems/bit-manipulation-1666686027/1" },
          { id: "str_bit2", title: "Check if the i-th bit is set or not", link: "https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1" },
          { id: "str_bit3", title: "Check if a number is Odd or Even", link: "https://www.geeksforgeeks.org/problems/odd-or-even3618/1" },
          { id: "str_bit4", title: "Check if a number is Power of 2", link: "https://leetcode.com/problems/power-of-two/" },
          { id: "str_bit5", title: "Count the number of set bits", link: "https://www.geeksforgeeks.org/problems/set-bits0143/1" },
          { id: "str_bit6", title: "Set the rightmost unset bit", link: "https://www.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1" },
          { id: "str_bit7", title: "Swap two numbers without using temporary variable", link: "https://www.geeksforgeeks.org/problems/swap-two-numbers3844/1" },
          { id: "str_bit8", title: "Divide Two Integers without multiplication/division", link: "https://leetcode.com/problems/divide-two-integers/" },

          // --- Step 8.2: Interview Problems (6 Questions) ---
          { id: "str_bit9", title: "Count number of bits to be flipped to convert A to B", link: "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/" },
          { id: "str_bit10", title: "Find the number that appears odd number of times", link: "https://leetcode.com/problems/single-number/" },
          { id: "str_bit11", title: "Power Set (Subsets)", link: "https://leetcode.com/problems/subsets/" },
          { id: "str_bit12", title: "Find the two numbers appearing odd number of times", link: "https://leetcode.com/problems/single-number-iii/" },
          { id: "str_bit13", title: "Single Number II (Appears once, others thrice)", link: "https://leetcode.com/problems/single-number-ii/" },
          { id: "str_bit14", title: "XOR of numbers in a given range", link: "https://www.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1" },

          // --- Step 8.3: Advanced Math (4 Questions) ---
          { id: "str_bit15", title: "Print Prime Factors of a Number", link: "https://www.geeksforgeeks.org/problems/prime-factors5052/1" },
          { id: "str_bit16", title: "All Divisors of a Number", link: "https://www.geeksforgeeks.org/problems/all-divisors-of-a-number/1" },
          { id: "str_bit17", title: "Sieve of Eratosthenes", link: "https://leetcode.com/problems/count-primes/" },
          { id: "str_bit18", title: "Prime Factorization using Sieve", link: "https://www.geeksforgeeks.org/problems/prime-factorization-using-sieve/1" }
        ]
      },
      {
        id: "p1_nt",
        title: "Number Theory",
        resources: [
            { title: "CodeNCode Channel", link: "https://www.youtube.com/playlist?app=desktop&list=PL5DyztRVgtRWblnyEHtajWijQffrfwLz6" }
        ],
        questions: [
            
  { id: "cf_nt_1", title: "T-primes", link: "https://codeforces.com/problemset/problem/230/B" },
  { id: "cf_nt_2", title: "Design Tutorial: Learn from Math", link: "https://codeforces.com/problemset/problem/472/A" },
  { id: "cf_nt_3", title: "Sherlock and his girlfriend", link: "https://codeforces.com/problemset/problem/776/B" },
  { id: "cf_nt_4", title: "Almost Prime", link: "https://codeforces.com/problemset/problem/26/A" },
  { id: "cf_nt_5", title: "Bachgold Problem", link: "https://codeforces.com/problemset/problem/749/A" },
  { id: "cf_nt_6", title: "Arpa’s hard exam and Mehrdad’s naive cheat", link: "https://codeforces.com/problemset/problem/742/A" },
  { id: "cf_nt_7", title: "EhAb AnD gCd", link: "https://codeforces.com/problemset/problem/1325/A" },
  { id: "cf_nt_8", title: "k-th divisor", link: "https://codeforces.com/problemset/problem/762/A" },
  { id: "cf_nt_9", title: "Product of Three Numbers", link: "https://codeforces.com/problemset/problem/1294/C" },
  { id: "cf_nt_10", title: "Buying Shovels", link: "https://codeforces.com/problemset/problem/1360/D" },
  { id: "cf_nt_11", title: "Divisibility Problem", link: "https://codeforces.com/problemset/problem/1328/A" },
  { id: "cf_nt_12", title: "Noldbach problem", link: "https://codeforces.com/problemset/problem/17/A" },
  { id: "cf_nt_13", title: "Maximum GCD", link: "https://codeforces.com/problemset/problem/1370/A" },
  { id: "cf_nt_14", title: "Orac and Factors", link: "https://codeforces.com/problemset/problem/1350/A" },
  { id: "cf_nt_15", title: "Fadi and LCM", link: "https://codeforces.com/problemset/problem/1285/C" },
  { id: "cf_nt_16", title: "Common Divisors", link: "https://codeforces.com/problemset/problem/1203/C" },
  { id: "cf_nt_17", title: "Ebony and Ivory", link: "https://codeforces.com/problemset/problem/633/A" },
  { id: "cf_nt_18", title: "Omkar and Last Class of Math", link: "https://codeforces.com/problemset/problem/1372/B" },
  { id: "cf_nt_19", title: "Different Divisors", link: "https://codeforces.com/problemset/problem/1474/B" },
  { id: "cf_nt_20", title: "Row GCD", link: "https://codeforces.com/problemset/problem/1459/C" },
  { id: "cf_nt_21", title: "Modified GCD", link: "https://codeforces.com/problemset/problem/75/C" },
  { id: "cf_nt_22", title: "Taxes", link: "https://codeforces.com/problemset/problem/735/D" },
  { id: "cf_nt_23", title: "Divide by three, multiply by two", link: "https://codeforces.com/problemset/problem/977/D" },
  { id: "cf_nt_24", title: "Composite Coloring", link: "https://codeforces.com/problemset/problem/1332/B" },
  { id: "cf_nt_25", title: "Prime Square", link: "https://codeforces.com/problemset/problem/1436/B"}
]
        
      },
      {
        id: "p1_win",
        title: "2 Pointers & Sliding Window (12 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
           { id: "str_win1", title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
          { id: "str_win2", title: "Max Consecutive Ones III", link: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
          { id: "str_win3", title: "Fruit Into Baskets", link: "https://www.geeksforgeeks.org/problems/fruit-into-baskets-1663137462/1" }, // Closest to LC 904
          { id: "str_win4", title: "Longest Repeating Character Replacement", link: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
          { id: "str_win5", title: "Binary Subarrays With Sum", link: "https://leetcode.com/problems/binary-subarrays-with-sum/" },
          { id: "str_win6", title: "Count Number of Nice Subarrays", link: "https://leetcode.com/problems/count-number-of-nice-subarrays/" },
          { id: "str_win7", title: "Number of Substrings Containing All Three Characters", link: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/" },
          { id: "str_win8", title: "Maximum Points You Can Obtain from Cards", link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/" },

          // --- Striver Step 5.2: Hard Problems ---
          { id: "str_win9", title: "Longest Substring with At Most K Distinct Characters", link: "https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1" },
          { id: "str_win10", title: "Subarrays with K Different Integers", link: "https://leetcode.com/problems/subarrays-with-k-different-integers/" },
          { id: "str_win11", title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/" },
          { id: "str_win12", title: "Minimum Window Subsequence", link: "https://www.geeksforgeeks.org/problems/minimum-window-subsequence/1" },
            { id: "cf_tp_1", title: "Books", link: "https://codeforces.com/problemset/problem/279/B" },
  { id: "cf_tp_2", title: "Kefa and Company", link: "https://codeforces.com/problemset/problem/580/B" },
  { id: "cf_tp_3", title: "Fence", link: "https://codeforces.com/problemset/problem/363/B" },
  { id: "cf_tp_4", title: "Alice, Bob and Chocolate", link: "https://codeforces.com/problemset/problem/6/C" },
  { id: "cf_tp_5", title: "Sereja and Dima", link: "https://codeforces.com/problemset/problem/381/A" },
  { id: "cf_tp_6", title: "Given Length and Sum of Digits", link: "https://codeforces.com/problemset/problem/489/C" },
  { id: "cf_tp_7", title: "Kuriyama Mirai's Stones", link: "https://codeforces.com/problemset/problem/433/B" },
  { id: "cf_tp_8", title: "Vasya and String", link: "https://codeforces.com/problemset/problem/676/C" },
  { id: "cf_tp_9", title: "Ternary String", link: "https://codeforces.com/problemset/problem/1354/B" },
  { id: "cf_tp_10", title: "Three Parts of the Array", link: "https://codeforces.com/problemset/problem/1006/C" },
  { id: "cf_tp_11", title: "Karen and Coffee", link: "https://codeforces.com/problemset/problem/816/B" },
  { id: "cf_tp_12", title: "Points on Line", link: "https://codeforces.com/problemset/problem/251/A" },
  { id: "cf_tp_13", title: "Balanced Team", link: "https://codeforces.com/problemset/problem/1133/C" },
  { id: "cf_tp_14", title: "BerSU Ball", link: "https://codeforces.com/problemset/problem/489/B" },
  { id: "cf_tp_15", title: "Longest k-Good Segment", link: "https://codeforces.com/problemset/problem/616/D" },
  { id: "cf_tp_16", title: "Cellular Network", link: "https://codeforces.com/problemset/problem/702/C" },
  { id: "cf_tp_17", title: "Number of Pairs", link: "https://codeforces.com/problemset/problem/1538/C" },
  { id: "cf_tp_18", title: "Favorite Sequence", link: "https://codeforces.com/problemset/problem/1462/A" },
  { id: "cf_tp_19", title: "Pair of Topics", link: "https://codeforces.com/problemset/problem/1324/D" },
  { id: "cf_tp_20", title: "Prepend and Append", link: "https://codeforces.com/problemset/problem/1791/C" },
  { id: "cf_tp_21", title: "Letters", link: "https://codeforces.com/problemset/problem/978/C" },
  { id: "cf_tp_22", title: "Boats Competition", link: "https://codeforces.com/problemset/problem/1399/C" },
  { id: "cf_tp_23", title: "Sum of Cubes", link: "https://codeforces.com/problemset/problem/1490/C" },
  { id: "cf_tp_24", title: "Double-ended Strings", link: "https://codeforces.com/problemset/problem/1506/C" },
  { id: "cf_tp_25", title: "Accidental Victory", link: "https://codeforces.com/problemset/problem/1490/E" },
  { id: "cf_tp_26", title: "They Are Everywhere", link: "https://codeforces.com/problemset/problem/701/C" },
  { id: "cf_tp_27", title: "Buying Shovels", link: "https://codeforces.com/problemset/problem/1360/D" },
  { id: "cf_tp_28", title: "Minimize the Permutation", link: "https://codeforces.com/problemset/problem/1256/B" },
  { id: "cf_tp_29", title: "Yet Another Bookshelf", link: "https://codeforces.com/problemset/problem/1433/B" },
  { id: "cf_tp_30", title: "Unstable String", link: "https://codeforces.com/problemset/problem/1535/C" }
        ]
      }
    ]
  },
  phase2: {
    title: "Phase 2: DP & Recursion (CRITICAL)",
    description: "Recursion and Dynamic Programming. NOTE: Strict restrictions on DP resources.",
    sections: [
      {
        id: "p2_rec",
        title: "Recursion",
        note: "Striver resources allowed here.",
       resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          
{ id: "str_rec_b1", title: "Print 1 to N without loop", link: "https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1" },
          { id: "str_rec_b2", title: "Print N to 1 without loop", link: "https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1" },
          { id: "str_rec_b3", title: "Sum of first N numbers", link: "https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1" },
          { id: "str_rec_b4", title: "Factorial of N numbers", link: "https://www.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/1" },
          { id: "str_rec_b5", title: "Reverse an Array", link: "https://www.geeksforgeeks.org/problems/reverse-an-array/1" },
          { id: "str_rec_b6", title: "Check if a string is palindrome", link: "https://leetcode.com/problems/valid-palindrome/" },
          { id: "str_rec_b7", title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/" },

          // --- Step 7.1: Get a Strong Hold ---
          { id: "str_rec1", title: "Recursive Implementation of atoi()", link: "https://leetcode.com/problems/string-to-integer-atoi/" },
          { id: "str_rec2", title: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/" },
          { id: "str_rec3", title: "Count Good Numbers", link: "https://leetcode.com/problems/count-good-numbers/" },
          { id: "str_rec4", title: "Sort a Stack using Recursion", link: "https://www.geeksforgeeks.org/problems/sort-a-stack/1" },
          { id: "str_rec5", title: "Reverse a Stack using Recursion", link: "https://www.geeksforgeeks.org/problems/reverse-a-stack/1" },

          // --- Step 7.2: Subsequences Pattern ---
          { id: "str_rec6", title: "Generate all binary strings without consecutive 1s", link: "https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1" },
          { id: "str_rec7", title: "Generate Parentheses", link: "https://leetcode.com/problems/generate-parentheses/" },
          { id: "str_rec8", title: "Print all Subsequences / Power Set", link: "https://leetcode.com/problems/subsets/" },
          { id: "str_rec9", title: "Better String (Distinct Subsequences)", link: "https://www.geeksforgeeks.org/problems/better-string/1" },
          { id: "str_rec10", title: "Perfect Sum Problem", link: "https://www.geeksforgeeks.org/problems/perfect-sum-problem/1" },
          { id: "str_rec11", title: "Check if there exists a subsequence with Sum K", link: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1" },
          { id: "str_rec12", title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/" },
          { id: "str_rec13", title: "Combination Sum II", link: "https://leetcode.com/problems/combination-sum-ii/" },
          { id: "str_rec14", title: "Combination Sum III", link: "https://leetcode.com/problems/combination-sum-iii/" },
          { id: "str_rec15", title: "Subset Sum I", link: "https://www.geeksforgeeks.org/problems/subset-sums2234/1" },
          { id: "str_rec16", title: "Subset Sum II", link: "https://leetcode.com/problems/subsets-ii/" },
          { id: "str_rec17", title: "Letter Combinations of a Phone Number", link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
          
          // --- Step 7.3: Hard (Backtracking) ---
          { id: "str_rec18", title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/" },
          { id: "str_rec19", title: "Word Search", link: "https://leetcode.com/problems/word-search/" },
          { id: "str_rec20", title: "N-Queens", link: "https://leetcode.com/problems/n-queens/" },
          { id: "str_rec21", title: "Rat in a Maze", link: "https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1" },
          { id: "str_rec22", title: "Word Break", link: "https://leetcode.com/problems/word-break/" },
          { id: "str_rec23", title: "M-Coloring Problem", link: "https://www.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1" },
          { id: "str_rec24", title: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/" },
          { id: "str_rec25", title: "Expression Add Operators", link: "https://leetcode.com/problems/expression-add-operators/" },
          { id: "str_rec26", title: "Permutations", link: "https://leetcode.com/problems/permutations/" },
          { id: "str_rec27", title: "Permutations II", link: "https://leetcode.com/problems/permutations-ii/" }
        ]
      },
      {
        id: "p2_dp",
        title: "Dynamic Programming",
        note: "DO NOT USE STRIVER. Use Vivek Gupta + TLE Eliminator. Learn Tabulation directly.",
        isWarning: true,
        resources: [
            { title: "Vivek Gupta Channel", link: "https://www.youtube.com/playlist?list=PLqf9emQRQrnKA_EeveiXQj_uP25w8_5qL" },
            { title: "CSES Sheet", link: "https://cses.fi/problemset/" },
            { title: "A-Z DP SHEET", link:"https://docs.google.com/document/d/19IeItjgoFmrXlJ6mFQIZi3V-LOUSkAOc1MkJo69uyO8/edit?pli=1&tab=t.0"},
            { title: "Striver sheet (no video)", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"},
            { title: "Codeforces(1600-1800)", link: "https://codeforces.com/problemset?tags=dp,1600-1800"}
        ],
        questions: [
            { id: "cses_dp1", title: "Dice Combinations", link: "https://cses.fi/problemset/task/1633" },
            { id: "cses_dp2", title: "Minimizing Coins", link: "https://cses.fi/problemset/task/1634" },
            { id: "cses_dp3", title: "Coin Combinations I", link: "https://cses.fi/problemset/task/1635" },
            { id: "cses_dp4", title: "Coin Combinations II", link: "https://cses.fi/problemset/task/1636" },
            { id: "cses_dp5", title: "Removing Digits", link: "https://cses.fi/problemset/task/1637" },
            { id: "cses_dp6", title: "Grid Paths", link: "https://cses.fi/problemset/task/1638" },
            { id: "cses_dp7", title: "Book Shop", link: "https://cses.fi/problemset/task/1158" },
            { id: "cses_dp8", title: "Array Description", link: "https://cses.fi/problemset/task/1746" },
            { id: "cses_dp9", title: "Counting Towers", link: "https://cses.fi/problemset/task/2413" },
            { id: "cses_dp10", title: "Edit Distance", link: "https://cses.fi/problemset/task/1639" },
            { id: "cses_dp11", title: "Rectangle Cutting", link: "https://cses.fi/problemset/task/1744" },
            { id: "cses_dp12", title: "Money Sums", link: "https://cses.fi/problemset/task/1745" },
            { id: "cses_dp13", title: "Removal Game", link: "https://cses.fi/problemset/task/1097" },
            { id: "cses_dp14", title: "Two Sets II", link: "https://cses.fi/problemset/task/1093" },
            { id: "cses_dp15", title: "Increasing Subsequence", link: "https://cses.fi/problemset/task/1145" },
            { id: "cses_dp16", title: "Projects", link: "https://cses.fi/problemset/task/1140" },
            { id: "cses_dp17", title: "Elevator Rides", link: "https://cses.fi/problemset/task/1653" },
            { id: "cses_dp18", title: "Counting Tilings", link: "https://cses.fi/problemset/task/2181" },
            { id: "cses_dp19", title: "Counting Numbers", link: "https://cses.fi/problemset/task/2220" },
            { id: "cses_dp20", title: "Longest Common Subsequence", link: "https://cses.fi/problemset/task/3403" },
            { id: "cses_dp21", title: "Minimal Grid Path", link: "https://cses.fi/problemset/task/3359" },
            { id: "cses_dp22", title: "Mountain Range", link: "https://cses.fi/problemset/task/3314" },
            { id: "cses_dp23", title: "Increasing Subsequence II", link: "https://cses.fi/problemset/task/1748" },

            // --- Striver Step 16.1: Introduction to DP ---
            { id: "str_dp1", title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/" },
            { id: "str_dp2", title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
            { id: "str_dp3", title: "Frog Jump", link: "https://www.geeksforgeeks.org/problems/geek-jump/1" },
            { id: "str_dp4", title: "Frog Jump with K Distance", link: "https://atcoder.jp/contests/dp/tasks/dp_b" },
            { id: "str_dp5", title: "Maximum Sum of Non-Adjacent Elements (House Robber)", link: "https://leetcode.com/problems/house-robber/" },
            { id: "str_dp6", title: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/" },

            // --- Striver Step 16.2: 1D/2D/3D DP (Grids) ---
            { id: "str_dp7", title: "Ninja's Training", link: "https://www.geeksforgeeks.org/problems/geeks-training/1" },
            { id: "str_dp8", title: "Grid Unique Paths", link: "https://leetcode.com/problems/unique-paths/" },
            { id: "str_dp9", title: "Unique Paths II", link: "https://leetcode.com/problems/unique-paths-ii/" },
            { id: "str_dp10", title: "Minimum Path Sum", link: "https://leetcode.com/problems/minimum-path-sum/" },
            { id: "str_dp11", title: "Triangle", link: "https://leetcode.com/problems/triangle/" },
            { id: "str_dp12", title: "Minimum Falling Path Sum", link: "https://leetcode.com/problems/minimum-falling-path-sum/" },
            { id: "str_dp12_b", title: "Maximum Path Sum in Matrix", link: "https://www.geeksforgeeks.org/problems/maximum-path-sum-in-matrix/1" },
            { id: "str_dp13", title: "Ninja and his friends (Cherry Pickup II)", link: "https://leetcode.com/problems/cherry-pickup-ii/" },

            // --- Striver Step 16.3: DP on Subsequences ---
            { id: "str_dp14", title: "Subset Sum Equal to K", link: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1" },
            { id: "str_dp15", title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
            { id: "str_dp16", title: "Partition Array Into Two Arrays to Minimize Sum Difference", link: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/" },
            { id: "str_dp17", title: "Count Subsets with Sum K", link: "https://www.geeksforgeeks.org/problems/perfect-sum-problem/1" },
            { id: "str_dp18", title: "Count Partitions with Given Difference", link: "https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1" },
            { id: "str_dp19", title: "0/1 Knapsack", link: "https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1" },
            { id: "str_dp20", title: "Coin Change (Minimum Coins)", link: "https://leetcode.com/problems/coin-change/" },
            { id: "str_dp21", title: "Target Sum", link: "https://leetcode.com/problems/target-sum/" },
            { id: "str_dp22", title: "Coin Change II (Total Ways)", link: "https://leetcode.com/problems/coin-change-ii/" },
            { id: "str_dp23", title: "Unbounded Knapsack", link: "https://www.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1" },
            { id: "str_dp24", title: "Rod Cutting Problem", link: "https://www.geeksforgeeks.org/problems/rod-cutting0840/1" },

            // --- Striver Step 16.4: DP on Strings ---
            { id: "str_dp25", title: "Longest Common Subsequence", link: "https://leetcode.com/problems/longest-common-subsequence/" },
            { id: "str_dp26", title: "Print Longest Common Subsequence", link: "https://www.geeksforgeeks.org/printing-longest-common-subsequence/" },
            { id: "str_dp27", title: "Longest Common Substring", link: "https://www.geeksforgeeks.org/problems/longest-common-substring1452/1" },
            { id: "str_dp28", title: "Longest Palindromic Subsequence", link: "https://leetcode.com/problems/longest-palindromic-subsequence/" },
            { id: "str_dp29", title: "Minimum Insertions to Make Palindrome", link: "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/" },
            { id: "str_dp30", title: "Minimum Insertions/Deletions to Convert String A to B", link: "https://leetcode.com/problems/delete-operation-for-two-strings/" },
            { id: "str_dp31", title: "Shortest Common Supersequence", link: "https://leetcode.com/problems/shortest-common-supersequence/" },
            { id: "str_dp32", title: "Distinct Subsequences", link: "https://leetcode.com/problems/distinct-subsequences/" },
            { id: "str_dp33", title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/" },
            { id: "str_dp34", title: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/" },

            // --- Striver Step 16.5: DP on Stocks ---
            { id: "str_dp35", title: "Best Time to Buy and Sell Stock (Easy)", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
            { id: "str_dp36", title: "Best Time to Buy and Sell Stock II", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/" },
            { id: "str_dp37", title: "Best Time to Buy and Sell Stock III", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
            { id: "str_dp38", title: "Best Time to Buy and Sell Stock IV", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/" },
            { id: "str_dp39", title: "Buy and Sell Stock with Cooldown", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/" },
            { id: "str_dp40", title: "Buy and Sell Stock with Transaction Fee", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/" },

            // --- Striver Step 16.6: DP on LIS ---
            { id: "str_dp41", title: "Longest Increasing Subsequence (Bottom-Up)", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
            { id: "str_dp42", title: "Print Longest Increasing Subsequence", link: "https://www.geeksforgeeks.org/printing-longest-increasing-subsequence/" },
            { id: "str_dp43", title: "Largest Divisible Subset", link: "https://leetcode.com/problems/largest-divisible-subset/" },
            { id: "str_dp44", title: "Longest String Chain", link: "https://leetcode.com/problems/longest-string-chain/" },
            { id: "str_dp45", title: "Longest Bitonic Subsequence", link: "https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1" },
            { id: "str_dp46", title: "Number of Longest Increasing Subsequences", link: "https://leetcode.com/problems/number-of-longest-increasing-subsequence/" },

            // --- Striver Step 16.7: Partition DP (MCM) ---
            { id: "str_dp47", title: "Matrix Chain Multiplication (Bottom-Up)", link: "https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1" },
            { id: "str_dp48", title: "Minimum Cost to Cut a Stick", link: "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/" },
            { id: "str_dp49", title: "Burst Balloons", link: "https://leetcode.com/problems/burst-balloons/" },
            { id: "str_dp50", title: "Evaluate Boolean Expression to True", link: "https://www.geeksforgeeks.org/problems/boolean-parenthesization5610/1" },
            { id: "str_dp51", title: "Palindrome Partitioning II", link: "https://leetcode.com/problems/palindrome-partitioning-ii/" },
            { id: "str_dp52", title: "Partition Array for Maximum Sum", link: "https://leetcode.com/problems/partition-array-for-maximum-sum/" },

            // --- Striver Step 16.8: DP on Rectangles/Squares ---
            { id: "str_dp53", title: "Maximal Rectangle (Area with all 1s)", link: "https://leetcode.com/problems/maximal-rectangle/" },
            { id: "str_dp54", title: "Count Square Submatrices with All Ones", link: "https://leetcode.com/problems/count-square-submatrices-with-all-ones/" },
            { id: "spoj_acmaker", title: "ACMAKER", link: "http://www.spoj.com/problems/ACMAKER/" },
            { id: "spoj_acode", title: "ACODE", link: "http://www.spoj.com/problems/ACODE/" },
            { id: "spoj_acpc10d", title: "ACPC10D", link: "http://www.spoj.com/problems/ACPC10D/" },
            { id: "spoj_acpc10g", title: "ACPC10G", link: "http://www.spoj.com/problems/ACPC10G/" },
            { id: "spoj_aibohp", title: "AIBOHP", link: "http://www.spoj.com/problems/AIBOHP/" },
            { id: "spoj_anarc05b", title: "ANARC05B", link: "http://www.spoj.com/problems/ANARC05B/" },
            { id: "spoj_anarc05h", title: "ANARC05H", link: "http://www.spoj.com/problems/ANARC05H/" },
            { id: "spoj_arbitrag", title: "ARBITRAG", link: "http://www.spoj.com/problems/ARBITRAG/" },
            { id: "spoj_babtwr", title: "BABTWR", link: "http://www.spoj.com/problems/BABTWR/" },
            { id: "spoj_bytesm2", title: "BYTESM2", link: "http://www.spoj.com/problems/BYTESM2/" },
            { id: "spoj_chair", title: "CHAIR", link: "http://www.spoj.com/problems/CHAIR/" },
            { id: "spoj_coins", title: "COINS", link: "http://www.spoj.com/problems/COINS/" },
            { id: "spoj_count", title: "COUNT", link: "http://www.spoj.com/problems/COUNT/" },
            { id: "spoj_cprmt", title: "CPRMT", link: "http://www.spoj.com/problems/CPRMT/" },
            { id: "spoj_crscntry", title: "CRSCNTRY", link: "http://www.spoj.com/problems/CRSCNTRY/" },
            { id: "spoj_csubseqs", title: "CSUBSEQS", link: "http://www.spoj.com/problems/CSUBSEQS/" },
            { id: "spoj_czprob1", title: "CZ_PROB1", link: "http://www.spoj.com/problems/CZ_PROB1/" },
            { id: "spoj_dcepc501", title: "DCEPC501", link: "http://www.spoj.com/problems/DCEPC501/" },
            { id: "spoj_dingrp", title: "DINGRP", link: "http://www.spoj.com/problems/DINGRP/" },
            { id: "spoj_dsubseq", title: "DSUBSEQ", link: "http://www.spoj.com/problems/DSUBSEQ/" },
            { id: "spoj_dtt", title: "DTT", link: "http://www.spoj.com/problems/DTT/" },
            { id: "spoj_edist", title: "EDIST", link: "http://www.spoj.com/problems/EDIST/" },
            { id: "spoj_eq2", title: "EQ2 (System of Equations)", link: "http://www.spoj.com/problems/EQ2/" }, // MISSING PROBLEM ADDED
            { id: "spoj_fisher", title: "FISHER", link: "http://www.spoj.com/problems/FISHER/" },
            { id: "spoj_fpolice", title: "FPOLICE", link: "http://www.spoj.com/problems/FPOLICE/" },
            { id: "spoj_gcpc11b", title: "GCPC11B", link: "http://www.spoj.com/problems/GCPC11B/" },
            { id: "spoj_gny07h", title: "GNY07H", link: "http://www.spoj.com/problems/GNY07H/" },
            { id: "spoj_gnyr09f", title: "GNYR09F", link: "http://www.spoj.com/problems/GNYR09F/" },
            { id: "spoj_hangover", title: "HANGOVER", link: "http://www.spoj.com/problems/HANGOVER/" },
            { id: "spoj_helpbob", title: "HELPBOB", link: "http://www.spoj.com/problems/HELPBOB/" },
            { id: "spoj_hist2", title: "HIST2", link: "http://www.spoj.com/problems/HIST2/" },
            { id: "spoj_ikeyb", title: "IKEYB", link: "http://www.spoj.com/problems/IKEYB/" },
            { id: "spoj_ingred", title: "INGRED", link: "http://www.spoj.com/problems/INGRED/" },
            { id: "spoj_ioipalin", title: "IOIPALIN", link: "http://www.spoj.com/problems/IOIPALIN/" },
            { id: "spoj_jride", title: "JRIDE", link: "http://www.spoj.com/problems/JRIDE/" },
            { id: "spoj_knapsack", title: "KNAPSACK", link: "http://www.spoj.com/problems/KNAPSACK/" },
            { id: "spoj_lineup", title: "LINEUP", link: "http://www.spoj.com/problems/LINEUP/" },
            { id: "spoj_m3tile", title: "M3TILE", link: "http://www.spoj.com/problems/M3TILE/" },
            { id: "spoj_main112", title: "MAIN112", link: "http://www.spoj.com/problems/MAIN112/" },
            { id: "spoj_main113", title: "MAIN113", link: "http://www.spoj.com/problems/MAIN113/" },
            { id: "spoj_martian", title: "MARTIAN", link: "http://www.spoj.com/problems/MARTIAN/" },
            { id: "spoj_maxsumsq", title: "MAXSUMSQ", link: "http://www.spoj.com/problems/MAXSUMSQ/" },
            { id: "spoj_mblast", title: "MBLAST", link: "http://www.spoj.com/problems/MBLAST/" },
            { id: "spoj_mcards", title: "MCARDS", link: "http://www.spoj.com/problems/MCARDS/" },
            { id: "spoj_mdolls", title: "MDOLLS", link: "http://www.spoj.com/problems/MDOLLS/" },
            { id: "spoj_miserman", title: "MISERMAN", link: "http://www.spoj.com/problems/MISERMAN/" },
            { id: "spoj_mixtures", title: "MIXTURES", link: "http://www.spoj.com/problems/MIXTURES/" },
            { id: "spoj_mmaxper", title: "MMAXPER", link: "http://www.spoj.com/problems/MMAXPER/" },
            { id: "spoj_mpilot", title: "MPILOT", link: "http://www.spoj.com/problems/MPILOT/" },
            { id: "spoj_mreplbrc", title: "MREPLBRC", link: "http://www.spoj.com/problems/MREPLBRC/" },
            { id: "spoj_nochange", title: "NOCHANGE", link: "http://www.spoj.com/problems/NOCHANGE/" },
            { id: "spoj_numplay", title: "NUMPLAY", link: "http://www.spoj.com/problems/NUMPLAY/" },
            { id: "spoj_ny10e", title: "NY10E", link: "http://www.spoj.com/problems/NY10E/" },
            { id: "spoj_osprob1", title: "OSPROB1", link: "http://www.spoj.com/problems/OSPROB1/" },
            { id: "spoj_partit", title: "PARTIT", link: "http://www.spoj.com/problems/PARTIT/" },
            { id: "spoj_party", title: "PARTY", link: "http://www.spoj.com/problems/PARTY/" },
            { id: "spoj_pcpc12g", title: "PCPC12G", link: "http://www.spoj.com/problems/PCPC12G/" },
            { id: "spoj_pegs", title: "PEGS", link: "http://www.spoj.com/problems/PEGS/" },
            { id: "spoj_permut1", title: "PERMUT1", link: "http://www.spoj.com/problems/PERMUT1/" },
            { id: "spoj_phidias", title: "PHIDIAS", link: "http://www.spoj.com/problems/PHIDIAS/" },
            { id: "spoj_pigbank", title: "PIGBANK", link: "http://www.spoj.com/problems/PIGBANK/" },
            { id: "spoj_pizzaloc", title: "PIZZALOC", link: "http://www.spoj.com/problems/PIZZALOC/" },
            { id: "spoj_pstring", title: "PSTRING", link: "http://www.spoj.com/problems/PSTRING/" },
            { id: "spoj_rainbow", title: "RAINBOW", link: "http://www.spoj.com/problems/RAINBOW/" },
            { id: "spoj_rent", title: "RENT", link: "http://www.spoj.com/problems/RENT/" },
            { id: "spoj_rock", title: "ROCK", link: "http://www.spoj.com/problems/ROCK/" },
            { id: "spoj_samer08c", title: "SAMER08C", link: "http://www.spoj.com/problems/SAMER08C/" },
            { id: "spoj_scubadiv", title: "SCUBADIV", link: "http://www.spoj.com/problems/SCUBADIV/" },
            { id: "spoj_soldier", title: "SOLDIER", link: "http://www.spoj.com/problems/SOLDIER/" },
            { id: "spoj_sqrbr", title: "SQRBR", link: "http://www.spoj.com/problems/SQRBR/" },
            { id: "spoj_stone2", title: "STONE2", link: "http://www.spoj.com/problems/STONE2/" },
            { id: "spoj_temptisl", title: "TEMPTISL", link: "http://www.spoj.com/problems/TEMPTISL/" },
            { id: "spoj_tourist", title: "TOURIST", link: "http://www.spoj.com/problems/TOURIST/" },
            { id: "spoj_traverse", title: "TRAVERSE", link: "http://www.spoj.com/problems/TRAVERSE/" },
            { id: "spoj_trika", title: "TRIKA", link: "http://www.spoj.com/problems/TRIKA/" },
            { id: "spoj_trip", title: "TRIP", link: "http://www.spoj.com/problems/TRIP/" },
            { id: "spoj_trt", title: "TRT", link: "http://www.spoj.com/problems/TRT/" },
            { id: "spoj_twends", title: "TWENDS", link: "http://www.spoj.com/problems/TWENDS/" },
            { id: "spoj_upsub", title: "UPSUB", link: "http://www.spoj.com/problems/UPSUB/" },
            { id: "spoj_vocv", title: "VOCV", link: "http://www.spoj.com/problems/VOCV/" },
            { id: "spoj_wpc4f", title: "WPC4F", link: "http://www.spoj.com/problems/WPC4F/" },
            { id: "spoj_zuma", title: "ZUMA", link: "http://www.spoj.com/problems/ZUMA/" },
            { id:"cf",title: "Codeforces(1600-1800)", link: "https://codeforces.com/problemset?tags=dp,1600-1800"}
        ]
      }
    ]
  },
  phase3: {
    title: "Phase 3: Graphs, Trees & Advanced (2-3 Months)",
    description: "Graphs, DSU, Trees, Binary Lifting, DP on Trees.",
    sections: [
       {
        id: "p3_graphs",
        title: "Graphs (54 Questions)",
        resources: [
            { title: "CSES Sheet", link: "https://cses.fi/problemset/" },
            { title: "Striver sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"},
        ],
        questions: [
            { id:"cses",title: "CSES Sheet", link: "https://cses.fi/problemset/" },
            { id:"str",title: "Striver sheet (no video)", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"},
            { id: "at_gr_1", title: "Frog 1", link: "https://atcoder.jp/contests/dp/tasks/dp_a" },
  { id: "at_gr_2", title: "Grid 1", link: "https://atcoder.jp/contests/dp/tasks/dp_h" },
  { id: "at_gr_3", title: "Graph Isomorphism", link: "https://atcoder.jp/contests/abc151/tasks/abc151_c" },
  { id: "at_gr_4", title: "Friends", link: "https://atcoder.jp/contests/abc177/tasks/abc177_d" },
  { id: "at_gr_5", title: "Lunlun Number", link: "https://atcoder.jp/contests/abc161/tasks/abc161_d" },
  { id: "at_gr_6", title: "One-stroke Path", link: "https://atcoder.jp/contests/abc054/tasks/abc054_c" },
  { id: "at_gr_7", title: "Maze Master", link: "https://atcoder.jp/contests/abc151/tasks/abc151_d" },
  { id: "at_gr_8", title: "Walk on Multiplication Table", link: "https://atcoder.jp/contests/abc261/tasks/abc261_e" },
  { id: "at_gr_9", title: "Shipping Center", link: "https://atcoder.jp/contests/abc195/tasks/abc195_d" },
  { id: "at_gr_10", title: "Shortest Path", link: "https://atcoder.jp/contests/abc007/tasks/abc007_3" },
  { id: "at_gr_11", title: "Grid Repainting 2", link: "https://atcoder.jp/contests/abc096/tasks/abc096_c" },
  { id: "at_gr_12", title: "Counting Roads", link: "https://atcoder.jp/contests/abc061/tasks/abc061_b" },
  { id: "at_gr_13", title: "Train Ticket", link: "https://atcoder.jp/contests/abc079/tasks/abc079_c" },
  { id: "at_gr_14", title: "Cat Snuke and a Voyage", link: "https://atcoder.jp/contests/abc068/tasks/abc068_c" },
  { id: "at_gr_15", title: "Ki", link: "https://atcoder.jp/contests/abc138/tasks/abc138_d" },
  { id: "he_gr_1", title: "Bishu and his Girlfriend", link: "https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/practice-problems/algorithm/bishu-and-his-girlfriend/" },
  { id: "he_gr_2", title: "Monk and the Islands", link: "https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/practice-problems/algorithm/monk-and-the-islands/" },
  { id: "he_gr_3", title: "Connected Components in a Graph", link: "https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/practice-problems/algorithm/connected-components-in-a-graph/" },
  { id: "he_gr_4", title: "Jungle Run", link: "https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/practice-problems/algorithm/jungle-run/" },
  { id: "he_gr_5", title: "Unreachable Nodes", link: "https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/practice-problems/algorithm/unreachable-nodes/" },
  { id: "he_gr_6", title: "So NP", link: "https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/so-np-c559f406/" },
  { id: "he_gr_7", title: "Minimum Spanning Tree", link: "https://www.hackerearth.com/practice/algorithms/graphs/minimum-spanning-tree/practice-problems/algorithm/minimum-spanning-tree-5/" },
  { id: "he_gr_8", title: "Oliver and the Game", link: "https://www.hackerearth.com/practice/algorithms/graphs/topological-sort/practice-problems/algorithm/oliver-and-the-game-3/" },
  { id: "he_gr_9", title: "Monk at the Graph Factory", link: "https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/monk-at-the-graph-factory/" },
  { id: "he_gr_10", title: "Social Networking Graph", link: "https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/practice-problems/algorithm/social-networking-graph/" },
  { id: "he_gr_11", title: "Feasible relations", link: "https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/practice-problems/algorithm/feasible-relations/" },
  { id: "he_gr_12", title: "Dhoom 4", link: "https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/practice-problems/algorithm/dhoom-4/" },
  { id: "he_gr_13", title: "Shortest Path Problem", link: "https://www.hackerearth.com/practice/algorithms/graphs/shortest-path-algorithms/practice-problems/algorithm/shortest-path-problem/" },
  { id: "he_gr_14", title: "Strange Game", link: "https://www.hackerearth.com/practice/algorithms/graphs/shortest-path-algorithms/practice-problems/algorithm/strange-game-1/" },
  { id: "he_gr_15", title: "Edge Existence", link: "https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/edge-existence/" }
        ]
       },
       {
        id: "p3_trees",
        title: "Trees+Tree DP (Kartik Arora + CSES)",
        resources: [
            { title: "CSES Sheet", link: "https://cses.fi/problemset/" },
            { title: "Tree Centre", link: "https://www.youtube.com/watch?v=nzF_9bjDzdc"},
            { title: "Tree Diameter", link: "https://www.youtube.com/watch?v=m8qXEz1Xe8w"},
            { title: "Tree Centroid", link: "https://www.youtube.com/watch?v=o9hWO52bxI4"},
            { title: "Karthik Arora", link: "https://www.youtube.com/playlist?list=PLb3g_Z8nEv1j_BC-fmZWHFe6jmU_zv-8s"},
        ],

        questions: [
          {id:"cses",title:"CSES Sheet",link:"https://cses.fi/problemset/"}
        ]
       },
       {
        id:"p3_DSU",
        title:"DSU",
        resources:[
          { title: "CSES Sheet", link: "https://cses.fi/problemset/" },
            { title: "Vivek Gupta", link: "https://www.youtube.com/playlist?list=PLqf9emQRQrnIQ3DkkyBNGe1s4l3HqMqrz"},


        ],
        questions:[
          {id:"cses",title:"CSES Sheet",link:"https://cses.fi/problemset/"}
        ]

       },
       {
        id:"p3_BL",
        title:"Binary Lifting",
        resources:[
          {
            title:"pepcoding",link:"https://www.youtube.com/playlist?list=PL-Jc9J83PIiGC6uQ2CjMhSaWAcmjbAQfp",
            
          },
          {title:"usaco",link:"https://usaco.guide/plat/binary-jump?lang=cpp"},
          { title: "CSES Sheet", link: "https://cses.fi/problemset/" }


        ],
        questions:[
          {id:"usaco",title:"USACO",link:"https://usaco.guide/plat/binary-jump?lang=cpp"},
          {id:"cses",title:"CSES",link:"https://cses.fi/problemset/"}
        ]

       },
       {
        id:"p3_dpg",
        title:"DP on graphs",
        resources:[
          {title:"Codeforces blog",link:"https://codeforces.com/blog/entry/95084"},
        ],
        questions:[
          {id:"cf",title:"Codeforces blog",link:"https://codeforces.com/blog/entry/95084"},
        ]
       },
       {
        id:"p3_slm",
        title:"Small to large merging",
        resources:[
          {title:"USACO",link:"https://usaco.guide/plat/merging?lang=cpp"},
        ],
        questions:[

        ],
       },
       {id:"p3_BTDP",
        title:"Bitmask DP",
        resources:[
          {title:"kartik Arora",link:"https://www.youtube.com/playlist?list=PLb3g_Z8nEv1icFNrtZqByO1CrWVHLlO5g"},
        ],
        questions:[

        ],

       },
       {id:"p3_DGTDP",
        title:"Digit DP",
        resources:[
          {title:"kartik Arora",link:"https://www.youtube.com/playlist?list=PLb3g_Z8nEv1hB69JL9K7KfEyK8iQNj9nX"},
        ],
        questions:[

        ],

       }
    ]
  },
  phase4: {
    title: "Phase 4: Linked Lists, Tries & BT (Striver)",
    description: "Completion of Data Structures. Striver + InterviewBit.",
    sections: [
      {
        id: "p4_ll",
        title: "Linked Lists (Striver)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          { id: "str_ll1", title: "Introduction to Linked List", link: "https://www.geeksforgeeks.org/problems/introduction-to-linked-list/1" },
          { id: "str_ll2", title: "Insert Node at the Beginning", link: "https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1" },
          { id: "str_ll3", title: "Delete Node in Linked List", link: "https://leetcode.com/problems/delete-node-in-a-linked-list/" },
          { id: "str_ll4", title: "Find the length of the Linked List", link: "https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1" },
          { id: "str_ll5", title: "Search an element in the Linked List", link: "https://www.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1" },

          // --- Step 6.2: Learn Doubly Linked List ---
          { id: "str_ll6", title: "Introduction to Doubly Linked List", link: "https://www.geeksforgeeks.org/problems/introduction-to-doubly-linked-list/1" },
          { id: "str_ll7", title: "Insert at given position in DLL", link: "https://www.geeksforgeeks.org/problems/insert-a-node-in-doubly-linked-list/1" },
          { id: "str_ll8", title: "Delete node in Doubly Linked List", link: "https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1" },
          { id: "str_ll9", title: "Reverse a Doubly Linked List", link: "https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1" },

          // --- Step 6.3: Medium Problems of LL ---
          { id: "str_ll10", title: "Middle of the Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
          { id: "str_ll11", title: "Reverse a Linked List (Iterative)", link: "https://leetcode.com/problems/reverse-linked-list/" },
          { id: "str_ll12", title: "Reverse a Linked List (Recursive)", link: "https://leetcode.com/problems/reverse-linked-list/" },
          { id: "str_ll13", title: "Detect Loop in Linked List", link: "https://leetcode.com/problems/linked-list-cycle/" },
          { id: "str_ll14", title: "Find the starting point of the Loop", link: "https://leetcode.com/problems/linked-list-cycle-ii/" },
          { id: "str_ll15", title: "Length of Loop in Linked List", link: "https://www.geeksforgeeks.org/problems/find-length-of-loop/1" },
          { id: "str_ll16", title: "Check if LL is Palindrome", link: "https://leetcode.com/problems/palindrome-linked-list/" },
          { id: "str_ll17", title: "Odd Even Linked List", link: "https://leetcode.com/problems/odd-even-linked-list/" },
          { id: "str_ll18", title: "Remove Nth Node from End", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
          { id: "str_ll19", title: "Delete Middle Node of LL", link: "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/" },
          { id: "str_ll20", title: "Sort Linked List (Merge Sort)", link: "https://leetcode.com/problems/sort-list/" },
          { id: "str_ll21", title: "Sort a LL of 0s, 1s and 2s", link: "https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1" },
          { id: "str_ll22", title: "Intersection of Two Linked Lists", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
          { id: "str_ll23", title: "Add 1 to a number represented by LL", link: "https://www.geeksforgeeks.org/problems/add-1-to-a-number-represented-as-linked-list/1" },
          { id: "str_ll24", title: "Add two numbers in LL", link: "https://leetcode.com/problems/add-two-numbers/" },

          // --- Step 6.4: Medium Problems of DLL ---
          { id: "str_ll25", title: "Delete all occurrences of a key in DLL", link: "https://www.geeksforgeeks.org/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/1" },
          { id: "str_ll26", title: "Find pairs with given sum in DLL", link: "https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1" },
          { id: "str_ll27", title: "Remove duplicates from sorted DLL", link: "https://www.geeksforgeeks.org/problems/remove-duplicates-from-a-sorted-doubly-linked-list/1" },

          // --- Step 6.5: Hard Problems of LL ---
          { id: "str_ll28", title: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
          { id: "str_ll29", title: "Rotate List", link: "https://leetcode.com/problems/rotate-list/" },
          { id: "str_ll30", title: "Flattening of a Linked List", link: "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1" },
          { id: "str_ll31", title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/" }
          
        ]
      },
      {
        id: "p4_bt",
        title: "Binary Trees (Striver)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          { id: "str_bt1", title: "Introduction to Binary Trees", link: "https://www.geeksforgeeks.org/problems/binary-tree-representation/1" },
          { id: "str_bt2", title: "Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
          { id: "str_bt3", title: "Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
          { id: "str_bt4", title: "Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
          { id: "str_bt5", title: "Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
          { id: "str_bt6", title: "Iterative Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
          { id: "str_bt7", title: "Iterative Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
          { id: "str_bt8", title: "Iterative Postorder Traversal (2 Stacks)", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
          { id: "str_bt9", title: "Iterative Postorder Traversal (1 Stack)", link: "https://takeuforward.org/data-structure/iterative-postorder-traversal-using-1-stack/" },
          { id: "str_bt10", title: "Preorder, Inorder, and Postorder in one Traversal", link: "https://www.naukri.com/code360/problems/981269" },

          // --- Step 13.2: Medium Problems ---
          { id: "str_bt11", title: "Maximum Depth/Height of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
          { id: "str_bt12", title: "Check for Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/" },
          { id: "str_bt13", title: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
          { id: "str_bt14", title: "Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
          { id: "str_bt15", title: "Check if two trees are Identical", link: "https://leetcode.com/problems/same-tree/" },
          { id: "str_bt16", title: "Zig Zag Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
          { id: "str_bt17", title: "Boundary Traversal", link: "https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1" },
          { id: "str_bt18", title: "Vertical Order Traversal", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
          { id: "str_bt19", title: "Top View of Binary Tree", link: "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1" },
          { id: "str_bt20", title: "Bottom View of Binary Tree", link: "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1" },
          { id: "str_bt21", title: "Right/Left View of Binary Tree", link: "https://leetcode.com/problems/binary-tree-right-side-view/" },
          { id: "str_bt22", title: "Symmetric Binary Tree", link: "https://leetcode.com/problems/symmetric-tree/" },

          // --- Step 13.3: Hard Problems ---
          { id: "str_bt23", title: "Root to Node Path", link: "https://www.geeksforgeeks.org/problems/root-to-leaf-paths/1" },
          { id: "str_bt24", title: "Lowest Common Ancestor (LCA)", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
          { id: "str_bt25", title: "Maximum Width of Binary Tree", link: "https://leetcode.com/problems/maximum-width-of-binary-tree/" },
          { id: "str_bt26", title: "Check for Children Sum Property", link: "https://www.geeksforgeeks.org/problems/children-sum-parent/1" },
          { id: "str_bt27", title: "All Nodes at Distance K", link: "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/" },
          { id: "str_bt28", title: "Minimum time to burn the Binary Tree", link: "https://www.geeksforgeeks.org/problems/burning-tree/1" },
          { id: "str_bt29", title: "Count total Nodes in a Complete Binary Tree", link: "https://leetcode.com/problems/count-complete-tree-nodes/" },
          { id: "str_bt30", title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
          { id: "str_bt31", title: "Morris Preorder Traversal", link: "https://takeuforward.org/data-structure/morris-preorder-traversal-of-a-binary-tree/" },
          { id: "str_bt32", title: "Morris Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
          { id: "str_bt33", title: "Flatten Binary Tree to Linked List", link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
          { id: "str_bt34", title: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" }, // ADDED
          { id: "str_bt35", title: "Construct Binary Tree from Inorder and Postorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" }
          
        ]
      },
      {
        id: "p4_bst",
        title: "Binary Search Trees (Striver - 16 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          { id: "str_bst1", title: "Search in a Binary Search Tree", link: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
          { id: "str_bst2", title: "Find Min/Max element in BST", link: "https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1" },

          // --- Step 14.2: Practice Problems ---
          { id: "str_bst3", title: "Ceil in a Binary Search Tree", link: "https://www.geeksforgeeks.org/problems/ceil-in-bst/1" },
          { id: "str_bst4", title: "Floor in a Binary Search Tree", link: "https://www.geeksforgeeks.org/problems/floor-in-bst/1" },
          { id: "str_bst5", title: "Insert a given Node in a BST", link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/" },
          { id: "str_bst6", title: "Delete a Node in a BST", link: "https://leetcode.com/problems/delete-node-in-a-bst/" },
          { id: "str_bst7", title: "Find K-th Smallest Element in BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
          { id: "str_bst8", title: "Check if a tree is a BST or BT", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
          { id: "str_bst9", title: "LCA of Two Nodes in a BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
          { id: "str_bst10", title: "Inorder Predecessor/Successor in BST", link: "https://www.geeksforgeeks.org/problems/predecessor-and-successor/1" },
          { id: "str_bst11", title: "Binary Search Tree Iterator", link: "https://leetcode.com/problems/binary-search-tree-iterator/" },
          { id: "str_bst12", title: "Two Sum IV - Input is a BST", link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/" },
          { id: "str_bst13", title: "Recover Binary Search Tree", link: "https://leetcode.com/problems/recover-binary-search-tree/" },
          { id: "str_bst14", title: "Largest BST in Binary Tree", link: "https://www.geeksforgeeks.org/problems/largest-bst/1" },
          { id: "str_bst15", title: "Construct BST from Preorder Traversal", link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/" },
          { id: "str_bst16", title: "Merge Two BSTs", link: "https://www.geeksforgeeks.org/problems/merge-two-bst-s/1" }
          
        ]
      },
      {
        id: "p4_tries",
        title: "Tries (Striver)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          { id: "str_trie1", title: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
          { id: "str_trie2", title: "Implement Trie II (Count Words Equal to & Starting With)", link: "https://www.naukri.com/code360/problems/implement-trie_1387095" },

          // --- Step 17.2: Problems ---
          { id: "str_trie3", title: "Longest String with All Prefixes", link: "https://www.naukri.com/code360/problems/complete-string_2687860" },
          { id: "str_trie4", title: "Number of Distinct Substrings in a String", link: "https://www.naukri.com/code360/problems/count-distinct-substrings_985292" },
          { id: "str_trie5", title: "Bitwise XOR of all pairings (Maximum XOR of Two Numbers in an Array)", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
          { id: "str_trie6", title: "Maximum XOR With an Element From Array", link: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/" },
          
          // --- Additional Standard Problems ---
          { id: "str_trie7", title: "Design Add and Search Words Data Structure", link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" }
          
        ]
      }
    ]
  },
  phase5: {
      title: "Phase 5: Self Practice",
      description: "You are on your own. Keep grinding.",
      sections: []
  }
};

// ==========================================
// COMPONENTS
// ==========================================

const ProgressBar = ({ progress, height = "h-2.5", colorClass = "bg-blue-600" }) => (
  <div className={`w-full bg-slate-200 dark:bg-slate-700 rounded-full ${height} mt-2`}>
    <div 
      className={`${height} rounded-full transition-all duration-500 ease-out ${colorClass}`} 
      style={{ width: `${Math.max(5, progress)}%` }} // Min width for visibility
    ></div>
  </div>
);

const QuestionItem = ({ question, phaseId, isCompleted, toggleComplete, isStarred, toggleStar }) => {
  
  // 1. Generate the link to the local .cpp file
  const localFileLink = getSolutionLink(phaseId, question.title);

  // 2. Determine Text and Icon based on completion status
  const actionText = isCompleted ? "Solution" : "Solve";
  const actionIcon = isCompleted ? <Code className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />;

  // 3. Define Styles (Blue for Solve, Green for Solution)
  const btnStyle = isCompleted
    ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-800"
    : "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";

  return (
    <div 
      className={`flex items-center justify-between p-3 rounded-lg border mb-2 transition-all duration-200 ${
        isCompleted 
          ? 'bg-slate-50 border-slate-200 dark:bg-slate-900/30 dark:border-slate-800' 
          : 'bg-white border-slate-100 hover:border-blue-200 dark:bg-slate-800 dark:border-slate-700'
      }`}
    >
      <div className="flex items-center gap-3 flex-1 overflow-hidden">
        {/* Checkbox Button */}
        <button 
          onClick={() => toggleComplete(question.id)}
          className={`flex-shrink-0 transition-colors ${
            isCompleted ? 'text-green-500' : 'text-slate-300 hover:text-green-400'
          }`}
        >
          {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
        </button>
        
        {/* Question Title Link (Always goes to LeetCode/GFG) */}
        <a 
          href={question.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-medium truncate hover:underline decoration-blue-500/30 underline-offset-4 ${
            isCompleted ? 'text-slate-500 line-through decoration-slate-300' : 'text-slate-800 dark:text-slate-200'
          }`}
        >
          {question.title}
        </a>
      </div>

      <div className="flex items-center gap-2 ml-3">
        {/* ACTION BUTTON (Always opens local .cpp file) */}
        <a 
          href={localFileLink}
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-md border transition-colors shadow-sm ${btnStyle}`}
        >
          {actionIcon}
          {actionText}
        </a>

        {/* Star Button */}
        <button 
          onClick={() => toggleStar(question.id)}
          className={`p-1.5 rounded-full transition-colors ${
            isStarred 
              ? 'text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' 
              : 'text-slate-300 hover:text-yellow-400 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          <Star className={`w-5 h-5 ${isStarred ? "fill-current" : ""}`} />
        </button>
      </div>
    </div>
  );
};

const SectionAccordion = ({ section, phaseId, completedItems, toggleComplete, starredItems, toggleStar }) => {
  const [isOpen, setIsOpen] = useState(false);
   
  const total = section.questions.length;
  const solved = section.questions.filter(q => completedItems[q.id]).length;
  const progress = total === 0 ? 0 : (solved / total) * 100;
  const isComplete = total > 0 && total === solved;

  return (
    <div className="mb-4 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 transition-colors ${
          isComplete ? 'bg-green-50/50 dark:bg-green-900/10' : 'bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700/50'
        }`}
      >
        <div className="flex items-center gap-3 flex-1">
            <div className={`p-1.5 rounded-md ${isComplete ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400'}`}>
               {isOpen ? <ChevronDown className="w-5 h-5"/> : <ChevronRight className="w-5 h-5"/>}
            </div>
            <div className="text-left flex-1">
                <h4 className={`font-semibold ${isComplete ? 'text-green-800 dark:text-green-400' : 'text-slate-800 dark:text-slate-200'}`}>
                  {section.title}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                   <div className="h-1.5 w-24 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{ width: `${progress}%` }}></div>
                   </div>
                   <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{solved}/{total}</span>
                </div>
            </div>
        </div>
        {isComplete && <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 ml-2" />}
      </button>

      {isOpen && (
        <div className="p-4 border-t border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 animate-in slide-in-from-top-2 duration-200">
            {/* Warning for Phase 2 DP */}
            {section.isWarning && (
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-300 p-4 mb-4 text-sm rounded-r flex items-start gap-3 shadow-sm">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                        <strong className="block font-bold">CRITICAL WARNING</strong> 
                        {section.note}
                    </div>
                </div>
            )}
            
            {/* Normal Note */}
            {section.note && !section.isWarning && (
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 p-3 mb-4 text-sm rounded border border-blue-100 dark:border-blue-900 flex items-start gap-2">
                    <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0"/>
                    <span>Note: {section.note}</span>
                </div>
            )}

            {/* Resources List */}
            {section.resources && section.resources.length > 0 && (
                <div className="mb-6">
                    <h5 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider mb-3 flex items-center gap-1">
                      <LinkIcon className="w-3 h-3" /> Recommended Resources
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {section.resources.map((res, idx) => (
                        <a 
                          key={idx}
                          href={res.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all shadow-sm"
                        >
                          {res.title}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                </div>
            )}

            {/* Questions List */}
            <div>
              <h5 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider mb-3 flex items-center gap-1">
                <Code className="w-3 h-3" /> Practice Problems
              </h5>
              {section.questions.length > 0 ? (
                section.questions.map((q, qIdx) => (
                  <QuestionItem 
                    // Use index as fallback for key if duplicate IDs exist in raw data
                    key={q.id ? `${q.id}-${qIdx}` : qIdx}
                    question={q}
                    phaseId={phaseId}
                    isCompleted={!!completedItems[q.id]}
                    toggleComplete={toggleComplete}
                    isStarred={!!starredItems[q.id]}
                    toggleStar={toggleStar}
                  />
                ))
              ) : (
                <div className="text-sm text-slate-400 italic p-2">No specific questions listed. Check resources.</div>
              )}
            </div>
        </div>
      )}
    </div>
  );
};

const PhaseCard = ({ phaseKey, phaseData, completedItems, toggleComplete, starredItems, toggleStar }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Calculate stats for this phase
  const allQuestions = phaseData.sections.flatMap(s => s.questions);
  const total = allQuestions.length;
  const solved = allQuestions.filter(q => completedItems[q.id]).length;
  const progress = total === 0 ? 0 : (solved / total) * 100;

  return (
    <div className="mb-6 bg-white dark:bg-slate-800 rounded-xl shadow border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors">
      <div 
        className="p-5 cursor-pointer bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-800/50 hover:to-slate-100 dark:hover:to-slate-700/50 transition-colors border-b border-slate-100 dark:border-slate-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
             <div className="flex items-center gap-2 mb-1">
                <span className={`text-sm font-bold px-2 py-0.5 rounded text-white ${progress === 100 ? 'bg-green-500' : 'bg-slate-700 dark:bg-slate-600'}`}>
                  {phaseKey.toUpperCase()}
                </span>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">{phaseData.title}</h2>
             </div>
             <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">{phaseData.description}</p>
             
             <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 font-mono text-slate-600 dark:text-slate-300">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span>{solved}/{total} Solved</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500">
                   {isOpen ? "Click to collapse" : "Click to expand"}
                </div>
             </div>
          </div>
          
          <div className="flex flex-col items-center justify-center min-w-[60px]">
             <div className="relative w-14 h-14 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-200 dark:text-slate-700" />
                  <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" 
                    strokeDasharray={2 * Math.PI * 24}
                    strokeDashoffset={2 * Math.PI * 24 * (1 - progress / 100)}
                    className="text-blue-600 dark:text-blue-500 transition-all duration-1000 ease-out" 
                  />
                </svg>
                <span className="absolute text-xs font-bold text-slate-700 dark:text-slate-300">{Math.round(progress)}%</span>
             </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-700">
          {phaseData.sections.map((section, idx) => (
            <SectionAccordion 
              key={section.id || idx}
              section={section}
              phaseId={phaseKey}
              completedItems={completedItems}
              toggleComplete={toggleComplete}
              starredItems={starredItems}
              toggleStar={toggleStar}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const CPICurriculumTracker = () => {
  // --- State Management ---
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem('dsa_tracker_completed');
    return saved ? JSON.parse(saved) : {};
  });

  const [starred, setStarred] = useState(() => {
    const saved = localStorage.getItem('dsa_tracker_starred');
    return saved ? JSON.parse(saved) : {};
  });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('dsa_tracker_darkmode');
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  // --- Persistence ---
  useEffect(() => {
    localStorage.setItem('dsa_tracker_completed', JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem('dsa_tracker_starred', JSON.stringify(starred));
  }, [starred]);

  useEffect(() => {
    localStorage.setItem('dsa_tracker_darkmode', JSON.stringify(darkMode));
  }, [darkMode]);

  // --- Handlers ---
  const toggleComplete = (id) => {
    if (!id) return;
    setCompleted(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleStar = (id) => {
    if (!id) return;
    setStarred(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      setCompleted({});
      setStarred({});
    }
  };

  // --- Global Stats Calculation ---
  const stats = useMemo(() => {
    let totalQ = 0;
    let solvedQ = 0;
    let starredQ = 0;

    Object.values(CURRICULUM_DATA).forEach(phase => {
      phase.sections.forEach(section => {
        section.questions.forEach(q => {
          totalQ++;
          if (q.id && completed[q.id]) solvedQ++;
          if (q.id && starred[q.id]) starredQ++;
        });
      });
    });

    return { total: totalQ, solved: solvedQ, starred: starredQ, percent: totalQ === 0 ? 0 : (solvedQ / totalQ) * 100 };
  }, [completed, starred]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-8 px-4 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Section */}
          <header className="mb-8">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
               <div>
                 <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white flex items-center gap-3">
                   <Terminal className="w-8 h-8 text-blue-600 dark:text-blue-500" />
                   My DSA  <span className="text-blue-600 dark:text-blue-500">Dashboard</span>
                 </h1>
                 <p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">Your structured path from beginner to expert.</p>
               </div>
               
               <div className="flex items-center gap-3">
                 <button 
                   onClick={toggleTheme}
                   className="flex items-center justify-center p-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                   aria-label="Toggle Dark Mode"
                 >
                   {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                 </button>

                 <button 
                   onClick={resetProgress}
                   className="flex items-center gap-2 text-sm text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors px-3 py-1 rounded-full border border-transparent hover:border-red-200 dark:hover:border-red-900 hover:bg-red-50 dark:hover:bg-red-900/20"
                 >
                   <RefreshCw className="w-3 h-3" /> Reset Progress
                 </button>
               </div>
             </div>

             {/* Global Progress Card */}
             <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 grid grid-cols-1 md:grid-cols-3 gap-6 items-center transition-colors">
                <div className="col-span-1 md:col-span-2">
                   <div className="flex justify-between items-end mb-2">
                      <span className="text-slate-500 dark:text-slate-400 font-medium text-sm uppercase tracking-wider flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> Total Progress
                      </span>
                      <span className="text-2xl font-bold text-slate-800 dark:text-white">{Math.round(stats.percent)}%</span>
                   </div>
                   <ProgressBar progress={stats.percent} height="h-3" />
                   <div className="flex gap-6 mt-4">
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-green-500"></div>
                         <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{stats.solved} Solved</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-600"></div>
                         <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{stats.total - stats.solved} Remaining</span>
                      </div>
                   </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 flex flex-col items-center justify-center text-center border border-blue-100 dark:border-blue-900 transition-colors">
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-full mb-2">
                      <Star className="w-6 h-6 text-yellow-600 dark:text-yellow-400 fill-current" />
                    </div>
                    <span className="text-2xl font-bold text-slate-800 dark:text-white">{stats.starred}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wide">Starred Problems</span>
                </div>
             </div>
          </header>

          {/* Content Area */}
          <main>
            {Object.entries(CURRICULUM_DATA).map(([key, data]) => (
              <PhaseCard 
                key={key} 
                phaseKey={key} 
                phaseData={data} 
                completedItems={completed}
                toggleComplete={toggleComplete}
                starredItems={starred}
                toggleStar={toggleStar}
              />
            ))}
          </main>

          <footer className="mt-12 text-center text-slate-400 dark:text-slate-600 text-sm pb-8">
            <p>Built for the grinders. Keep pushing.</p>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default CPICurriculumTracker;