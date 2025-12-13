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
           { title: "Striver Sheet", link: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
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
        questions: [
          { id: "st_hash_1", title: "2Sum", link: "https://leetcode.com/problems/two-sum/" },
          { id: "st_hash_2", title: "4Sum", link: "https://leetcode.com/problems/4sum/" }
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
           { title: "GFG All Sorting Algos", link: "https://www.geeksforgeeks.org/sorting-algorithms/" },
           { title: "Meet in the Middle (USACO)", link: "https://usaco.guide/gold/meet-in-the-middle" }
        ],
        questions: [
          { id: "st_sort_1", title: "Count Inversions", link: "https://www.geeksforgeeks.org/inversion-count-in-array-using-merge-sort/" },
          { id: "st_sort_2", title: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/" },
          { id: "st_sort_3", title: "Sort Colors (0s, 1s, 2s)", link: "https://leetcode.com/problems/sort-colors/" },
          { id: "st_sort_4", title: "Merge Sorted Array", link: "https://leetcode.com/problems/merge-sorted-array/" },
          { id: "st_sort_5", title: "Maximum Gap", link: "https://leetcode.com/problems/maximum-gap/" },
          { id: "st_sort_6", title: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
          { id: "st_sort_7", title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" }
        ]
      },
      {
        id: "p1_bs",
        title: "Binary Search (32 Questions)",
        questions: [
          { id: "st_bs_1", title: "Binary Search (Basic)", link: "https://leetcode.com/problems/binary-search/" },
          { id: "st_bs_2", title: "Lower Bound / Upper Bound", link: "https://www.geeksforgeeks.org/lower-bound-in-cpp/" },
          { id: "st_bs_3", title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/" },
          { id: "st_bs_4", title: "Floor and Ceil in Sorted Array", link: "https://www.codingninjas.com/studio/problems/ceiling-in-a-sorted-array_1825401" },
          { id: "st_bs_5", title: "First and Last Occurrence", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
          { id: "st_bs_6", title: "Count Occurrences", link: "https://www.geeksforgeeks.org/count-number-of-occurrences-in-a-sorted-array/" },
          { id: "st_bs_7", title: "Search in Rotated Sorted Array I", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
          { id: "st_bs_8", title: "Search in Rotated Sorted Array II", link: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" },
          { id: "st_bs_9", title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
          { id: "st_bs_10", title: "Single Element in Sorted Array", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/" },
          { id: "st_bs_11", title: "Peak Element", link: "https://leetcode.com/problems/find-peak-element/" },
          { id: "st_bs_12", title: "Square Root of an Integer", link: "https://leetcode.com/problems/sqrtx/" },
          { id: "st_bs_13", title: "Nth Root of M", link: "https://www.geeksforgeeks.org/n-th-root-number/" },
          { id: "st_bs_14", title: "Koko Eating Bananas", link: "https://leetcode.com/problems/koko-eating-bananas/" },
          { id: "st_bs_15", title: "Minimum days to make M bouquets", link: "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/" },
          { id: "st_bs_16", title: "Smallest Divisor given a Threshold", link: "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/" },
          { id: "st_bs_17", title: "Capacity to Ship Packages", link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
          { id: "st_bs_18", title: "Kth Missing Positive Number", link: "https://leetcode.com/problems/kth-missing-positive-number/" },
          { id: "st_bs_19", title: "Aggressive Cows", link: "https://www.spoj.com/problems/AGGRCOW/" },
          { id: "st_bs_20", title: "Book Allocation Problem", link: "https://www.interviewbit.com/problems/allocate-books/" },
          { id: "st_bs_21", title: "Split Array Largest Sum", link: "https://leetcode.com/problems/split-array-largest-sum/" },
          { id: "st_bs_22", title: "Painter's Partition", link: "https://www.interviewbit.com/problems/painters-partition-problem/" },
          { id: "st_bs_23", title: "Minimize Max Distance to Gas Station", link: "https://www.geeksforgeeks.org/minimize-max-distance-to-gas-station/" },
          { id: "st_bs_24", title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
          { id: "st_bs_25", title: "Kth Element of Two Sorted Arrays", link: "https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1" },
          { id: "st_bs_26", title: "Row with Max 1s", link: "https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1" },
          { id: "st_bs_27", title: "Search in 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
          { id: "st_bs_28", title: "Search in 2D Matrix II", link: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
          { id: "st_bs_29", title: "Find Peak Grid Element", link: "https://leetcode.com/problems/find-a-peak-element-ii/" },
          { id: "st_bs_30", title: "Matrix Median", link: "https://www.interviewbit.com/problems/matrix-median/" },
          { id: "st_bs_31", title: "Kth Smallest Number in Multiplication Table", link: "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/" },
          { id: "st_bs_32", title: "Median of Row Wise Sorted Matrix", link: "https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1" }
        ]
      },
      {
        id: "p1_bit",
        title: "Bit Manipulation (18 Questions)",
        resources: [
            { title: "Galen Colin Stream 1", link: "https://www.youtube.com/watch?v=xXKL9YBWgCY" },
            { title: "Galen Colin Stream 2", link: "https://www.youtube.com/watch?v=5rtVTYAc3l0" }
        ],
        questions: [
            { id: "st_bit_1", title: "Check if ith bit is set", link: "https://practice.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1" },
            { id: "st_bit_2", title: "Turn off the rightmost set bit", link: "https://www.geeksforgeeks.org/turn-off-the-rightmost-set-bit/" },
            { id: "st_bit_3", title: "Check if a number is power of 2", link: "https://leetcode.com/problems/power-of-two/" },
            { id: "st_bit_4", title: "Count set bits", link: "https://leetcode.com/problems/number-of-1-bits/" },
            { id: "st_bit_5", title: "Count total set bits 1 to N", link: "https://practice.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1" },
            { id: "st_bit_6", title: "Set the rightmost unset bit", link: "https://www.geeksforgeeks.org/set-rightmost-unset-bit/" },
            { id: "st_bit_7", title: "Swap two numbers", link: "https://www.geeksforgeeks.org/swap-two-numbers-without-using-temporary-variable/" },
            { id: "st_bit_8", title: "Divide integers without multiplication", link: "https://leetcode.com/problems/divide-two-integers/" },
            { id: "st_bit_9", title: "Minimum Bit Flips to Convert Number", link: "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/" },
            { id: "st_bit_10", title: "Power Set", link: "https://leetcode.com/problems/subsets/" },
            { id: "st_bit_11", title: "Single Number I", link: "https://leetcode.com/problems/single-number/" },
            { id: "st_bit_12", title: "Single Number II", link: "https://leetcode.com/problems/single-number-ii/" },
            { id: "st_bit_13", title: "Single Number III", link: "https://leetcode.com/problems/single-number-iii/" },
            { id: "st_bit_14", title: "XOR of numbers in a range L to R", link: "https://www.geeksforgeeks.org/find-xor-of-numbers-from-the-range-l-r/" },
            { id: "st_bit_15", title: "Two numbers with odd occurrences", link: "https://practice.geeksforgeeks.org/problems/two-numbers-with-odd-occurrences5846/1" },
            { id: "st_bit_16", title: "Maximum XOR of Two Numbers", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
            { id: "st_bit_17", title: "Maximum XOR With an Element From Array", link: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/" },
            { id: "st_bit_18", title: "Count primes (Sieve)", link: "https://leetcode.com/problems/count-primes/" }
        ]
      },
      {
        id: "p1_nt",
        title: "Number Theory",
        resources: [
            { title: "CodeNCode Channel", link: "https://www.youtube.com/c/CodeNCode" }
        ],
        questions: [
            { id: "cf_nt_1", title: "T-primes", link: "https://codeforces.com/problemset/problem/230/B" },
            { id: "cf_nt_2", title: "Design Tutorial: Learn from Math", link: "https://codeforces.com/problemset/problem/472/A" },
            { id: "cf_nt_3", title: "Sherlock and his girlfriend", link: "https://codeforces.com/problemset/problem/776/B" }
        ]
      },
      {
        id: "p1_win",
        title: "2 Pointers & Sliding Window (12 Questions)",
        questions: [
            { id: "st_win_1", title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
            { id: "st_win_2", title: "Max Consecutive Ones III", link: "https://leetcode.com/problems/max-consecutive-ones-iii/" },
            { id: "st_win_3", title: "Fruit Into Baskets", link: "https://leetcode.com/problems/fruit-into-baskets/" },
            { id: "st_win_4", title: "Longest Repeating Character Replacement", link: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
            { id: "st_win_5", title: "Binary Subarrays With Sum", link: "https://leetcode.com/problems/binary-subarrays-with-sum/" },
            { id: "st_win_6", title: "Count Number of Nice Subarrays", link: "https://leetcode.com/problems/count-number-of-nice-subarrays/" },
            { id: "st_win_7", title: "Number of Substrings Containing All Three Characters", link: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/" },
            { id: "st_win_8", title: "Max Consecutive Ones", link: "https://leetcode.com/problems/max-consecutive-ones/" },
            { id: "st_win_9", title: "Trapping Rainwater", link: "https://leetcode.com/problems/trapping-rain-water/" },
            { id: "st_win_10", title: "3 Sum", link: "https://leetcode.com/problems/3sum/" },
            { id: "st_win_11", title: "Remove Duplicates from Sorted Array", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
            { id: "st_win_12", title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/" }
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
        questions: [
            { id: "st_rec_1", title: "Subset Sums", link: "https://practice.geeksforgeeks.org/problems/subset-sums2234/1" },
            { id: "st_rec_2", title: "Subset-II", link: "https://leetcode.com/problems/subsets-ii/" },
            { id: "st_rec_3", title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/" },
            { id: "st_rec_4", title: "Combination Sum II", link: "https://leetcode.com/problems/combination-sum-ii/" },
            { id: "st_rec_5", title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/" },
            { id: "st_rec_6", title: "K-th Permutation Sequence", link: "https://leetcode.com/problems/permutation-sequence/" }
        ]
      },
      {
        id: "p2_dp",
        title: "Dynamic Programming",
        note: "DO NOT USE STRIVER. Use Vivek Gupta + TLE Eliminator. Learn Tabulation directly.",
        isWarning: true,
        resources: [
            { title: "Vivek Gupta Channel", link: "https://www.youtube.com/user/vivekgupta3333" },
            { title: "TLE Eliminator CP Sheet", link: "https://www.tle-eliminators.com/cp-sheet" }
        ],
        questions: [
            { id: "at_dp_1", title: "A - Frog 1", link: "https://atcoder.jp/contests/dp/tasks/dp_a" },
            { id: "at_dp_2", title: "B - Frog 2", link: "https://atcoder.jp/contests/dp/tasks/dp_b" },
            { id: "at_dp_3", title: "C - Vacation", link: "https://atcoder.jp/contests/dp/tasks/dp_c" },
            { id: "at_dp_4", title: "D - Knapsack 1", link: "https://atcoder.jp/contests/dp/tasks/dp_d" },
            { id: "at_dp_5", title: "E - Knapsack 2", link: "https://atcoder.jp/contests/dp/tasks/dp_e" },
            { id: "at_dp_6", title: "F - LCS", link: "https://atcoder.jp/contests/dp/tasks/dp_f" },
            { id: "at_dp_7", title: "G - Longest Path", link: "https://atcoder.jp/contests/dp/tasks/dp_g" },
            { id: "at_dp_8", title: "H - Grid 1", link: "https://atcoder.jp/contests/dp/tasks/dp_h" },
            { id: "cses_dp_1", title: "CSES: Dice Combinations", link: "https://cses.fi/problemset/task/1633" },
            { id: "cses_dp_2", title: "CSES: Minimizing Coins", link: "https://cses.fi/problemset/task/1634" },
            { id: "cses_dp_3", title: "CSES: Coin Combinations I", link: "https://cses.fi/problemset/task/1635" },
            { id: "cses_dp_4", title: "CSES: Coin Combinations II", link: "https://cses.fi/problemset/task/1636" },
            { id: "cses_dp_5", title: "CSES: Removing Digits", link: "https://cses.fi/problemset/task/1637" }
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
        questions: [
            { id: "st_gr_1", title: "BFS of Graph", link: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
            { id: "st_gr_2", title: "DFS of Graph", link: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" },
            { id: "st_gr_3", title: "Number of Provinces", link: "https://leetcode.com/problems/number-of-provinces/" },
            { id: "st_gr_4", title: "Connected Components in Matrix", link: "https://leetcode.com/problems/number-of-provinces/" },
            { id: "st_gr_5", title: "Rotting Oranges", link: "https://leetcode.com/problems/rotting-oranges/" },
            { id: "st_gr_6", title: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/" },
            { id: "st_gr_7", title: "Cycle Detection (BFS - Undirected)", link: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1" },
            { id: "st_gr_8", title: "Cycle Detection (DFS - Undirected)", link: "https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1" },
            { id: "st_gr_9", title: "0/1 Matrix (Distance of nearest 0)", link: "https://leetcode.com/problems/01-matrix/" },
            { id: "st_gr_10", title: "Surrounded Regions", link: "https://leetcode.com/problems/surrounded-regions/" },
            { id: "st_gr_11", title: "Number of Enclaves", link: "https://leetcode.com/problems/number-of-enclaves/" },
            { id: "st_gr_12", title: "Word Ladder I", link: "https://leetcode.com/problems/word-ladder/" },
            { id: "st_gr_13", title: "Word Ladder II", link: "https://leetcode.com/problems/word-ladder-ii/" },
            { id: "st_gr_14", title: "Is Graph Bipartite?", link: "https://leetcode.com/problems/is-graph-bipartite/" },
            { id: "st_gr_15", title: "Cycle Detection (DFS - Directed)", link: "https://leetcode.com/problems/course-schedule/" },
            { id: "st_gr_16", title: "Find Eventual Safe States", link: "https://leetcode.com/problems/find-eventual-safe-states/" },
            { id: "st_gr_17", title: "Topological Sort", link: "https://practice.geeksforgeeks.org/problems/topological-sort/1" },
            { id: "st_gr_18", title: "Kahn's Algorithm", link: "https://practice.geeksforgeeks.org/problems/topological-sort/1" },
            { id: "st_gr_19", title: "Cycle Detection (BFS - Directed)", link: "https://leetcode.com/problems/course-schedule-ii/" },
            { id: "st_gr_20", title: "Course Schedule I", link: "https://leetcode.com/problems/course-schedule/" },
            { id: "st_gr_21", title: "Course Schedule II", link: "https://leetcode.com/problems/course-schedule-ii/" },
            { id: "st_gr_22", title: "Alien Dictionary", link: "https://practice.geeksforgeeks.org/problems/alien-dictionary/1" },
            { id: "st_gr_23", title: "Shortest Path in Undirected Graph (Unit Wt)", link: "https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1" },
            { id: "st_gr_24", title: "Shortest Path in DAG", link: "https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1" },
            { id: "st_gr_25", title: "Dijkstra's Algorithm (PQ)", link: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1" },
            { id: "st_gr_26", title: "Dijkstra's Algorithm (Set)", link: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1" },
            { id: "st_gr_27", title: "Shortest Path in Binary Matrix", link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
            { id: "st_gr_28", title: "Path With Minimum Effort", link: "https://leetcode.com/problems/path-with-minimum-effort/" },
            { id: "st_gr_29", title: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
            { id: "st_gr_30", title: "Network Delay Time", link: "https://leetcode.com/problems/network-delay-time/" },
            { id: "st_gr_31", title: "Number of Ways to Arrive at Destination", link: "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/" },
            { id: "st_gr_32", title: "Minimum Multiplications to Reach End", link: "https://practice.geeksforgeeks.org/problems/minimum-multiplications-to-reach-end/1" },
            { id: "st_gr_33", title: "Bellman Ford Algorithm", link: "https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1" },
            { id: "st_gr_34", title: "Floyd Warshall Algorithm", link: "https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1" },
            { id: "st_gr_35", title: "Find the City With the Smallest Number of Neighbors", link: "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/" },
            { id: "st_gr_36", title: "Prim's Algorithm", link: "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1" },
            { id: "st_gr_37", title: "Disjoint Set (Union by Rank)", link: "https://practice.geeksforgeeks.org/problems/disjoint-set-union-find/1" },
            { id: "st_gr_38", title: "Disjoint Set (Union by Size)", link: "https://practice.geeksforgeeks.org/problems/disjoint-set-union-find/1" },
            { id: "st_gr_39", title: "Kruskal's Algorithm", link: "https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1" },
            { id: "st_gr_40", title: "Number of Operations to Make Network Connected", link: "https://leetcode.com/problems/number-of-operations-to-make-network-connected/" },
            { id: "st_gr_41", title: "Most Stones Removed with Same Row or Column", link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/" },
            { id: "st_gr_42", title: "Accounts Merge", link: "https://leetcode.com/problems/accounts-merge/" },
            { id: "st_gr_43", title: "Number of Islands II", link: "https://leetcode.com/problems/number-of-islands-ii/" },
            { id: "st_gr_44", title: "Making A Large Island", link: "https://leetcode.com/problems/making-a-large-island/" },
            { id: "st_gr_45", title: "Swim in Rising Water", link: "https://leetcode.com/problems/swim-in-rising-water/" },
            { id: "st_gr_46", title: "Strongly Connected Components (Kosaraju)", link: "https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1" },
            { id: "st_gr_47", title: "Tarjan's Algorithm (Bridges)", link: "https://leetcode.com/problems/critical-connections-in-a-network/" },
            { id: "st_gr_48", title: "Articulation Points", link: "https://practice.geeksforgeeks.org/problems/articulation-point-1/1" },
            { id: "st_gr_49", title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/" },
            { id: "st_gr_50", title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" },
            { id: "st_gr_51", title: "Snake and Ladders", link: "https://leetcode.com/problems/snakes-and-ladders/" },
            { id: "st_gr_52", title: "Open the Lock", link: "https://leetcode.com/problems/open-the-lock/" },
            { id: "st_gr_53", title: "Word Search", link: "https://leetcode.com/problems/word-search/" },
            { id: "st_gr_54", title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" }
        ]
       },
       {
        id: "p3_trees",
        title: "Trees (Kartik Arora + CSES)",
        questions: [
            { id: "st_tr_1", title: "Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
            { id: "st_tr_2", title: "Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
            { id: "st_tr_3", title: "Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
            { id: "st_tr_4", title: "LeftView Of Binary Tree", link: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1" },
            { id: "st_tr_5", title: "Bottom View of Binary Tree", link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1" },
            { id: "st_tr_6", title: "Top View of Binary Tree", link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1" },
            { id: "st_tr_7", title: "Vertical Order Traversal", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
            { id: "st_tr_8", title: "Max Width of Binary Tree", link: "https://leetcode.com/problems/maximum-width-of-binary-tree/" },
            { id: "st_tr_9", title: "Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" }
        ]
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
        questions: [
            { id: "st_ll_1", title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" },
            { id: "st_ll_2", title: "Middle of Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
            { id: "st_ll_3", title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
            { id: "st_ll_4", title: "Remove N-th node from back", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
            { id: "st_ll_5", title: "Add two numbers as LL", link: "https://leetcode.com/problems/add-two-numbers/" },
            { id: "st_ll_6", title: "Delete Node in LL", link: "https://leetcode.com/problems/delete-node-in-a-linked-list/" },
            { id: "st_ll_7", title: "Intersection of Two LL", link: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
            { id: "st_ll_8", title: "Detect Cycle in LL", link: "https://leetcode.com/problems/linked-list-cycle/" },
            { id: "st_ll_9", title: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
            { id: "st_ll_10", title: "Check if LL is Palindrome", link: "https://leetcode.com/problems/palindrome-linked-list/" },
            { id: "st_ll_11", title: "Start point of loop", link: "https://leetcode.com/problems/linked-list-cycle-ii/" },
            { id: "st_ll_12", title: "Flattening of a LL", link: "https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1" },
            { id: "st_ll_13", title: "Rotate List", link: "https://leetcode.com/problems/rotate-list/" },
            { id: "st_ll_14", title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/" }
        ]
      },
      {
        id: "p4_bt",
        title: "Binary Trees (Striver)",
        questions: [
            { id: "st_bt_1", title: "Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
            { id: "st_bt_2", title: "Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
            { id: "st_bt_3", title: "Postorder Traversal", link: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
            { id: "st_bt_4", title: "Morris Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
            { id: "st_bt_5", title: "Morris Preorder Traversal", link: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
            { id: "st_bt_6", title: "LeftView Of Binary Tree", link: "https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1" },
            { id: "st_bt_7", title: "Bottom View of Binary Tree", link: "https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1" },
            { id: "st_bt_8", title: "Top View of Binary Tree", link: "https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1" },
            { id: "st_bt_9", title: "Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
            { id: "st_bt_10", title: "Vertical Order Traversal", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
            { id: "st_bt_11", title: "Root to Node Path", link: "https://www.interviewbit.com/problems/path-to-given-node/" },
            { id: "st_bt_12", title: "Max Width of Binary Tree", link: "https://leetcode.com/problems/maximum-width-of-binary-tree/" },
            { id: "st_bt_13", title: "Check if Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/" },
            { id: "st_bt_14", title: "Diameter of Binary Tree", link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
            { id: "st_bt_15", title: "LCA in Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
            { id: "st_bt_16", title: "Check if two trees are identical", link: "https://leetcode.com/problems/same-tree/" },
            { id: "st_bt_17", title: "Zig Zag Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/" },
            { id: "st_bt_18", title: "Boundary Traversal", link: "https://leetcode.com/problems/boundary-of-binary-tree/" }
        ]
      },
      {
        id: "p4_bst",
        title: "Binary Search Trees (Striver - 16 Questions)",
        questions: [
            { id: "st_bst_1", title: "Populate Next Right Pointers", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/" },
            { id: "st_bst_2", title: "Search given Key in BST", link: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
            { id: "st_bst_3", title: "Construct BST from Keys", link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
            { id: "st_bst_4", title: "Check is a BT is BST", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
            { id: "st_bst_5", title: "LCA of two nodes in BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
            { id: "st_bst_6", title: "Find LCA of two keys in BST", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
            { id: "st_bst_7", title: "Predecessor and Successor", link: "https://practice.geeksforgeeks.org/problems/predecessor-and-successor/1" },
            { id: "st_bst_8", title: "Floor in a BST", link: "https://www.codingninjas.com/studio/problems/floor-from-bst_920457" },
            { id: "st_bst_9", title: "Ceil in a BST", link: "https://www.codingninjas.com/studio/problems/ceil-from-bst_920464" },
            { id: "st_bst_10", title: "K-th Smallest Element in BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
            { id: "st_bst_11", title: "K-th Largest Element in BST", link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
            { id: "st_bst_12", title: "BST Iterator", link: "https://leetcode.com/problems/binary-search-tree-iterator/" },
            { id: "st_bst_13", title: "Size of Largest BST in Binary Tree", link: "https://leetcode.com/problems/largest-bst-subtree/" },
            { id: "st_bst_14", title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
            { id: "st_bst_15", title: "Recover BST", link: "https://leetcode.com/problems/recover-binary-search-tree/" },
            { id: "st_bst_16", title: "Two Sum IV - Input is a BST", link: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/" }
        ]
      },
      {
        id: "p4_tries",
        title: "Tries (Striver)",
        questions: [
            { id: "st_trie_1", title: "Implement Trie (Prefix Tree)", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
            { id: "st_trie_2", title: "Implement Trie II", link: "https://www.codingninjas.com/studio/problems/implement-trie_1387041" },
            { id: "st_trie_3", title: "Longest String with All Prefixes", link: "https://www.codingninjas.com/studio/problems/complete-string_2687860" },
            { id: "st_trie_4", title: "Number of Distinct Substrings in a String", link: "https://www.codingninjas.com/studio/problems/count-distinct-substrings_985292" },
            { id: "st_trie_5", title: "Power Set", link: "https://practice.geeksforgeeks.org/problems/power-set4302/1" },
            { id: "st_trie_6", title: "Maximum XOR of two numbers in an array", link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
            { id: "st_trie_7", title: "Maximum XOR With an Element From Array", link: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/" }
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
      <h3 className="font-bold text-lg">CPI Manager (Industrial Engineering Dept)</h3>
    </div>
    <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
      <li>Maintain CGPA &gt; 8.5. This is non-negotiable for top tier shortlist.</li>
      <li>Balance CP with core Industrial Engg subjects.</li>
      <li>If stuck on CP for &gt; 3 days, switch to Development to avoid burnout.</li>
    </ul>
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
