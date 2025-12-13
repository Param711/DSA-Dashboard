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
  Code
} from 'lucide-react';

// ==========================================
// DATA: The "Hardcoded" Curriculum
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
            id: "st_arr", title: "Array", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          
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
            id: "st_str", title: "String", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          
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
            id: "st_grd", title: "greedy", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          
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
  { id: "stl_22", title: "Striver stack queue", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"}

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
          { id: "st_hashing", title: "Hashing", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
          
        ]
      },
      {
        id: "p0prefixsuffix",
        title: "Prefix-Suffix",
        resources: [
           { title: "prefixsuffix", link: "https://codeforces.com/blog/entry/140458" }
        ],
        questions: [
          { id: "prefixsuffix", title: "prefixsuffix", link: "https://codeforces.com/blog/entry/140458" }
          
        ]
      },
      {
        id: "p0diffrencearray",
        title: "Diffrence-array",
        resources: [
           { title: "Diffrence-array", link: "https://codeforces.com/blog/entry/78762" }
        ],
        questions: [
          { id: "Diffrence-array", title: "Diffrence-array", link: "https://codeforces.com/blog/entry/78762" }
          
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
          { id: "st_sort_1", title: "Sorting", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
          
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
          { id: "st_bs_1", title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          { id: "st_bs_2", title: "Codeforces edu(40-50 questions)", link: "https://codeforces.com/edu/courses" },
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
            { id: "st_bit_1", title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
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
            { id: "st_win_1", title: "Sliding window and 2 pointer", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
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
          {
            id: "st_str", title: "Recursion", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          
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
            { id:"vivekgupta", title: "Vivek Gupta Channel", link: "https://www.youtube.com/playlist?list=PLqf9emQRQrnKA_EeveiXQj_uP25w8_5qL" },
            { id:"cses",title: "CSES Sheet", link: "https://cses.fi/problemset/" },
            { id:"a-z_dp",title: "A-Z DP SHEET", link:"https://docs.google.com/document/d/19IeItjgoFmrXlJ6mFQIZi3V-LOUSkAOc1MkJo69uyO8/edit?pli=1&tab=t.0"},
            { id:"str",title: "Striver sheet (no video)", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z"},
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
          {
            id: "st_str", title: "Linked list", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          
        ]
      },
      {
        id: "p4_bt",
        title: "Binary Trees (Striver)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          {
            id: "st_str", title: "Binary Trees", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          
        ]
      },
      {
        id: "p4_bst",
        title: "Binary Search Trees (Striver - 16 Questions)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          {
            id: "st_str", title: "Binary Search Trees", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          
        ]
      },
      {
        id: "p4_tries",
        title: "Tries (Striver)",
        resources: [
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
        ],
        questions: [
          {
            id: "st_str", title: "Tries", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
          
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

const CPIManager = () => (
  <div className="bg-slate-800 text-slate-100 p-4 rounded-lg shadow-lg mb-6 border-l-4 border-blue-500">
    <div className="flex items-center gap-2 mb-2">
      <Award className="w-5 h-5 text-blue-400" />
      <h3 className="font-bold text-lg">DSA</h3>
    </div>
    
  </div>
);

const ProgressBar = ({ progress }) => (
  <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700 mt-2">
    <div 
      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
      style={{ width: `${progress}%` }}
    ></div>
    <div className="text-xs text-right mt-1 text-slate-500 font-mono">{Math.round(progress)}% Completed</div>
  </div>
);

const TopicSection = ({ section, completedItems, toggleItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Calculate specific progress for this section
  const total = section.questions.length;
  const solved = section.questions.filter(q => completedItems[q.id]).length;
  const isComplete = total > 0 && total === solved;

  return (
    <div className="mb-4 border border-slate-200 rounded-md overflow-hidden bg-white shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 transition-colors ${isComplete ? 'bg-green-50' : 'bg-white hover:bg-slate-50'}`}
      >
        <div className="flex items-center gap-3">
            {isOpen ? <ChevronDown className="w-5 h-5 text-slate-500"/> : <ChevronRight className="w-5 h-5 text-slate-500"/>}
            <div className="text-left">
                <h4 className="font-semibold text-slate-800">{section.title}</h4>
                <p className="text-xs text-slate-500">
                    {solved}/{total} Solved
                </p>
            </div>
        </div>
        {isComplete && <CheckCircle className="w-6 h-6 text-green-500" />}
      </button>

      {isOpen && (
        <div className="p-4 border-t border-slate-100 bg-slate-50">
            {/* Warning for Phase 2 DP */}
            {section.isWarning && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4 text-sm rounded flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                    <div>
                        <strong>CRITICAL WARNING:</strong> {section.note}
                    </div>
                </div>
            )}
            
            {/* Normal Note */}
            {section.note && !section.isWarning && (
                <div className="bg-blue-50 text-blue-800 p-2 mb-3 text-sm rounded border border-blue-100">
                    Note: {section.note}
                </div>
            )}

            {/* Resources List */}
            {section.resources && section.resources.length > 0 && (
                <div className="mb-4">
                    <h5 className="text-xs font-bold uppercase text-slate-400 mb-2">Resources</h5>
                    <div className="flex flex-wrap gap-2">
                        {section.resources.map((res, idx) => (
                            <a 
                                key={idx} 
                                href={res.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-slate-300 rounded-full text-xs font-medium text-slate-700 hover:border-blue-500 hover:text-blue-600 transition-colors"
                            >
                                <BookOpen className="w-3 h-3" />
                                {res.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* Questions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.questions.map((q) => (
                    <div 
                        key={q.id}
                        className={`flex items-center justify-between p-3 rounded border transition-all ${completedItems[q.id] ? 'bg-green-50 border-green-200' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                    >
                        <div className="flex items-center gap-3 overflow-hidden">
                            <button 
                                onClick={() => toggleItem(q.id)}
                                className="focus:outline-none"
                            >
                                {completedItems[q.id] ? 
                                    <CheckCircle className="w-5 h-5 text-green-600" /> : 
                                    <Circle className="w-5 h-5 text-slate-300 hover:text-slate-400" />
                                }
                            </button>
                            <span className={`text-sm truncate ${completedItems[q.id] ? 'text-slate-500 line-through' : 'text-slate-700'}`}>
                                {q.title}
                            </span>
                        </div>
                        <a 
                            href={q.link} 
                            target="_blank" 
                            rel="noreferrer"
                            className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                ))}
            </div>
            {section.questions.length === 0 && (
                <div className="text-sm text-slate-400 italic text-center py-2">No specific questions listed. Use resources.</div>
            )}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [activePhase, setActivePhase] = useState("phase0");
  const [completedItems, setCompletedItems] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage on Mount
  useEffect(() => {
    const saved = localStorage.getItem('kgp_dsa_progress');
    if (saved) {
      setCompletedItems(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  // Save to LocalStorage on Change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('kgp_dsa_progress', JSON.stringify(completedItems));
    }
  }, [completedItems, isLoaded]);

  const toggleItem = (id) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const phases = Object.keys(CURRICULUM_DATA);

  // Calculate Overall Phase Progress
  const phaseProgress = useMemo(() => {
    if (!CURRICULUM_DATA[activePhase]) return 0;
    let total = 0;
    let solved = 0;
    CURRICULUM_DATA[activePhase].sections.forEach(sec => {
        total += sec.questions.length;
        solved += sec.questions.filter(q => completedItems[q.id]).length;
    });
    return total === 0 ? 0 : (solved / total) * 100;
  }, [activePhase, completedItems]);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900">
      {/* Navbar */}
      <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <Code className="text-white w-5 h-5"/>
             </div>
             <div>
                 <h1 className="font-bold text-lg leading-tight">DSA Roadmap</h1>
                 <p className="text-xs text-slate-400">Dept of Industrial & Systems Engineering • IIT Kharagpur</p>
             </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm text-slate-300">
            <span className="flex items-center gap-1"><Terminal className="w-4 h-4"/> Phase 0-5 Guide</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-2">
            <CPIManager />
            <div className="bg-white rounded-lg shadow-sm p-2 sticky top-24">
                {phases.map(phaseKey => (
                    <button
                        key={phaseKey}
                        onClick={() => setActivePhase(phaseKey)}
                        className={`w-full text-left px-4 py-3 rounded-md mb-1 transition-all flex items-center justify-between ${activePhase === phaseKey ? 'bg-slate-800 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}
                    >
                        <span className="text-sm font-medium capitalize">{phaseKey.replace('phase', 'Phase ')}</span>
                        {activePhase === phaseKey && <ChevronRight className="w-4 h-4"/>}
                    </button>
                ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-9">
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                     <div>
                        <h2 className="text-2xl font-bold text-slate-800">{CURRICULUM_DATA[activePhase].title}</h2>
                        <p className="text-slate-500 mt-1">{CURRICULUM_DATA[activePhase].description}</p>
                     </div>
                     <div className="w-full md:w-48">
                         <ProgressBar progress={phaseProgress} />
                     </div>
                 </div>

                 <hr className="border-slate-100 mb-6" />

                 <div className="space-y-2">
                    {CURRICULUM_DATA[activePhase].sections.length > 0 ? (
                        CURRICULUM_DATA[activePhase].sections.map(section => (
                            <TopicSection 
                                key={section.id} 
                                section={section} 
                                completedItems={completedItems} 
                                toggleItem={toggleItem} 
                            />
                        ))
                    ) : (
                        <div className="text-center py-12 text-slate-400 bg-slate-50 rounded-lg border-dashed border-2 border-slate-200">
                            <Trophy className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>This phase relies on self-practice and previous knowledge.</p>
                        </div>
                    )}
                 </div>
             </div>
          </div>

        </div>
      </main>
    </div>
  );
}
