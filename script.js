
// DATASET
const roadmapData = {
    ninja: [
        { 
            topic: "Pattern 1: Simulation & Number Theory", 
            tasks: [
                { t: "Input/Output Mastery", d: "Easy", time: "15m", prob: "Read N, then array of size N, print sum.", hint: "Use Scanner/cin. Handle empty buffer issues.", link: "https://www.hackerrank.com/challenges/simple-array-sum/problem" },
                { t: "Armstrong Number", d: "Easy", time: "10m", prob: "Check if sum of cubes of digits equals number.", hint: "Extract digits using % 10, accumulate sum.", link: "https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1" },
                { t: "GCD & LCM", d: "Easy", time: "10m", prob: "Find GCD and LCM of two numbers.", hint: "GCD: Euclidean (a%b). LCM: (a*b)/GCD.", link: "https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1" },
                { t: "Binary to Decimal", d: "Easy", time: "10m", prob: "Convert Binary String to Integer.", hint: "Iterate: ans = ans * 2 + (char - '0').", link: "https://practice.geeksforgeeks.org/problems/binary-number-to-decimal-number3550/1" },
                { t: "Robot Return to Origin", d: "Easy", time: "10m", prob: "Check if sequence of moves returns to (0,0).", hint: "Simulate coordinates: U++, D--, L--, R++.", link: "https://leetcode.com/problems/robot-return-to-origin/" },
                { t: "Add Digits", d: "Easy", time: "5m", prob: "Repeatedly add digits until one remains.", hint: "Digital Root: 1 + (num - 1) % 9.", link: "https://leetcode.com/problems/add-digits/" },
                { t: "Missing Number", d: "Easy", time: "5m", prob: "Find missing in [0, n].", hint: "Sum Formula: n*(n+1)/2 - sum(nums).", link: "https://leetcode.com/problems/missing-number/" },
                { t: "Fibonacci Number", d: "Easy", time: "10m", prob: "Calculate F(n) iteratively.", hint: "a=0, b=1, c=a+b. Loop N times.", link: "https://leetcode.com/problems/fibonacci-number/" },
                { t: "Power of Two", d: "Easy", time: "5m", prob: "Check if n is power of two.", hint: "Bitwise: (n > 0) && ((n & (n - 1)) == 0).", link: "https://leetcode.com/problems/power-of-two/" }
            ]
        },
        {
            topic: "Pattern 2: Arrays & Two Pointers",
            tasks: [
                { t: "Running Sum of 1d Array", d: "Easy", time: "10m", prob: "Return the running sum.", hint: "nums[i] += nums[i-1].", link: "https://leetcode.com/problems/running-sum-of-1d-array/" },
                { t: "Move Zeroes", d: "Easy", time: "10m", prob: "Move zeroes to end in-place.", hint: "Two pointers: Insert non-zeros at index++.", link: "https://leetcode.com/problems/move-zeroes/" },
                { t: "Majority Element", d: "Easy", time: "10m", prob: "Element appearing > n/2 times.", hint: "Moore’s Voting Algorithm.", link: "https://leetcode.com/problems/majority-element/" },
                { t: "Single Number", d: "Easy", time: "10m", prob: "Find the unique element.", hint: "XOR all elements. Result is the unique one.", link: "https://leetcode.com/problems/single-number/" },
                { t: "Merge Sorted Array", d: "Easy", time: "15m", prob: "Merge 2 arrays in-place.", hint: "Fill from the end (m+n-1).", link: "https://leetcode.com/problems/merge-sorted-array/" },
                { t: "Find Numbers with Even Digits", d: "Easy", time: "5m", prob: "Count numbers with even digit count.", hint: "Math.log10(n) or String length.", link: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/" },
                { t: "Check if Sorted & Rotated", d: "Easy", time: "10m", prob: "Is array sorted but rotated.", hint: "Count number of drops > 1 return false.", link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/" }
            ]
        },
        { 
            topic: "Pattern 3: String Manipulations", 
            tasks: [
                { t: "Reverse String", d: "Easy", time: "5m", prob: "Reverse char array in-place.", hint: "Two pointers swap.", link: "https://leetcode.com/problems/reverse-string/" },
                { t: "Valid Anagram", d: "Easy", time: "10m", prob: "Check if two strings have same chars.", hint: "Frequency array[26].", link: "https://leetcode.com/problems/valid-anagram/" },
                { t: "Longest Common Prefix", d: "Easy", time: "10m", prob: "Prefix common to all strings.", hint: "Sort array, compare first and last.", link: "https://leetcode.com/problems/longest-common-prefix/" },
                { t: "Valid Palindrome", d: "Easy", time: "10m", prob: "Palindrome ignoring cases/symbols.", hint: "Filter alphanumeric, then 2-pointer.", link: "https://leetcode.com/problems/valid-palindrome/" },
                { t: "Reverse Words in String", d: "Med", time: "20m", prob: "Reverse order of words.", hint: "Split by space, reverse list, join.", link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
                { t: "Isomorphic Strings", d: "Easy", time: "15m", prob: "Can map char s -> t.", hint: "Two HashMaps for bidirectional check.", link: "https://leetcode.com/problems/isomorphic-strings/" },
                { t: "String Compression", d: "Med", time: "25m", prob: "Compress 'aabbc' to 'a2b2c'.", hint: "Two pointers reading & writing.", link: "https://leetcode.com/problems/string-compression/" }
            ]
        }
    ],
    digital: [
        { 
            topic: "Pattern 4: Hashing & Sliding Window", 
            tasks: [
                { t: "Two Sum", d: "Easy", time: "15m", prob: "Indices summing to target.", hint: "HashMap: map[val] -> index.", link: "https://leetcode.com/problems/two-sum/" },
                { t: "Intersection of Two Arrays", d: "Easy", time: "10m", prob: "Find common elements.", hint: "Use HashSet for O(n).", link: "https://leetcode.com/problems/intersection-of-two-arrays/" },
                { t: "Best Time to Buy Stock", d: "Easy", time: "15m", prob: "Max profit 1 transaction.", hint: "Track minPrice so far.", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { t: "Maximum Subarray", d: "Med", time: "20m", prob: "Largest sum subarray.", hint: "Kadane's Algorithm.", link: "https://leetcode.com/problems/maximum-subarray/" },
                { t: "Longest Substring No Repeats", d: "Med", time: "25m", prob: "Max len unique chars.", hint: "Sliding Window + Set.", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                { t: "Container With Most Water", d: "Med", time: "20m", prob: "Max water area.", hint: "2 Pointers (start/end). Move smaller height.", link: "https://leetcode.com/problems/container-with-most-water/" },
                { t: "Find Pivot Index", d: "Easy", time: "10m", prob: "Left Sum == Right Sum.", hint: "TotalSum - LeftSum - Curr == LeftSum.", link: "https://leetcode.com/problems/find-pivot-index/" },
                { t: "Longest Consecutive Sequence", d: "Med", time: "20m", prob: "Length of consecutive elements sequence.", hint: "HashSet. Check if (n-1) exists to start chain.", link: "https://leetcode.com/problems/longest-consecutive-sequence/" }
            ]
        },
        { 
            topic: "Pattern 5: Matrix & Grid Traversal", 
            tasks: [
                { t: "Rotate Image", d: "Med", time: "25m", prob: "Rotate matrix 90 deg.", hint: "Transpose then Reverse Rows.", link: "https://leetcode.com/problems/rotate-image/" },
                { t: "Spiral Matrix", d: "Med", time: "30m", prob: "Traverse in spiral.", hint: "4 boundaries (top, bot, left, right).", link: "https://leetcode.com/problems/spiral-matrix/" },
                { t: "Set Matrix Zeroes", d: "Med", time: "25m", prob: "If 0, set row/col to 0.", hint: "Use 1st row/col as markers.", link: "https://leetcode.com/problems/set-matrix-zeroes/" },
                { t: "Search 2D Matrix", d: "Med", time: "20m", prob: "Find target in sorted matrix.", hint: "Binary Search on flattened index.", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
                { t: "Number of Islands", d: "Med", time: "30m", prob: "Count connected lands (Safety Add-on).", hint: "Standard Grid BFS or DFS. Flood fill logic.", link: "https://leetcode.com/problems/number-of-islands/" }
            ]
        },
        {
            topic: "Pattern 6: Interview Implementation",
            tasks: [
                { t: "Implement Bubble Sort", d: "Easy", time: "15m", prob: "Write Bubble Sort from scratch.", hint: "Nested loops, swap adjacent.", link: "https://www.geeksforgeeks.org/bubble-sort/" },
                { t: "Implement Merge Sort", d: "Med", time: "30m", prob: "Write Merge Sort from scratch.", hint: "Divide & Conquer + Merge function.", link: "https://www.geeksforgeeks.org/merge-sort/" },
                { t: "Implement Stack (Array)", d: "Easy", time: "15m", prob: "Stack using array.", hint: "Handle overflow/underflow.", link: "https://www.geeksforgeeks.org/stack-data-structure/" },
                { t: "Design Linked List", d: "Med", time: "25m", prob: "Node class + Insert/Delete.", hint: "Handle head/tail updates carefully.", link: "https://leetcode.com/problems/design-linked-list/" },
                { t: "Valid Parentheses", d: "Easy", time: "15m", prob: "Balanced brackets.", hint: "Stack.", link: "https://leetcode.com/problems/valid-parentheses/" },
                { t: "Reverse Linked List", d: "Easy", time: "15m", prob: "Reverse pointers.", hint: "Prev, Curr, Next.", link: "https://leetcode.com/problems/reverse-linked-list/" },
                { t: "Linked List Cycle", d: "Easy", time: "10m", prob: "Has cycle?", hint: "Slow/Fast pointers.", link: "https://leetcode.com/problems/linked-list-cycle/" },
                { t: "Merge Two Sorted Lists", d: "Easy", time: "15m", prob: "Merge logic.", hint: "Dummy node head.", link: "https://leetcode.com/problems/merge-two-sorted-lists/" }
            ]
        },
        {
             topic: "Pattern 7: Tree & DP Foundations",
             tasks: [
                 { t: "Max Depth of Tree", d: "Easy", time: "10m", prob: "Height of binary tree.", hint: "1 + max(left, right). Recursion.", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
                 { t: "Level Order Traversal", d: "Med", time: "20m", prob: "Traverse tree level by level.", hint: "Use a Queue (BFS).", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
                 { t: "Climbing Stairs", d: "Easy", time: "15m", prob: "Ways to climb N stairs.", hint: "Fibonacci Logic. DP Basis.", link: "https://leetcode.com/problems/climbing-stairs/" },
                 { t: "Lemonade Change", d: "Easy", time: "15m", prob: "Can give change?", hint: "Greedy simulation.", link: "https://leetcode.com/problems/lemonade-change/" },
                 { t: "N Meetings in One Room", d: "Med", time: "20m", prob: "Max meetings possible.", hint: "Sort by End Time. Greedy.", link: "https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1" }
             ]
        }
    ],
    prime: [
        {
            topic: "Pattern 8: Heaps & Intervals",
            tasks: [
                { t: "Merge Intervals", d: "Med", time: "20m", prob: "Merge overlapping intervals.", hint: "Sort by start time. Compare end times.", link: "https://leetcode.com/problems/merge-intervals/" },
                { t: "Kth Largest Element", d: "Med", time: "15m", prob: "Find Kth largest in array.", hint: "Min-Heap or QuickSelect.", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
                { t: "Top K Frequent Elements", d: "Med", time: "20m", prob: "Most frequent elements.", hint: "HashMap + Min-Heap.", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
                { t: "K Closest Points to Origin", d: "Med", time: "20m", prob: "Find nearest points.", hint: "Max-Heap based on distance.", link: "https://leetcode.com/problems/k-closest-points-to-origin/" }
            ]
        },
        { 
            topic: "Pattern 9: Advanced Graphs", 
            tasks: [
                { t: "Rotting Oranges", d: "Med", time: "30m", prob: "Min time to rot all.", hint: "Multi-source BFS (Queue).", link: "https://leetcode.com/problems/rotting-oranges/" },
                { t: "Course Schedule", d: "Med", time: "30m", prob: "Detect cycle/order.", hint: "Topological Sort (Kahn's Algo).", link: "https://leetcode.com/problems/course-schedule/" },
                { t: "Number of Provinces", d: "Med", time: "25m", prob: "Count connected cities.", hint: "Union-Find or DFS.", link: "https://leetcode.com/problems/number-of-provinces/" },
                { t: "Network Delay Time", d: "Med", time: "35m", prob: "Time for signal to reach all nodes.", hint: "Dijkstra’s Algorithm (Min-Heap).", link: "https://leetcode.com/problems/network-delay-time/" },
                { t: "Cheapest Flights Within K Stops", d: "Med", time: "35m", prob: "Min cost with stops limit.", hint: "BFS or Bellman-Ford.", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" }
            ]
        },
        {
             topic: "Pattern 10: Dynamic Programming",
             tasks: [
                 { t: "House Robber", d: "Med", time: "25m", prob: "Max loot without alarm.", hint: "dp[i] = max(current+prevPrev, prev).", link: "https://leetcode.com/problems/house-robber/" },
                 { t: "Coin Change", d: "Med", time: "30m", prob: "Min coins to make amount.", hint: "Unbounded Knapsack (Bottom-up).", link: "https://leetcode.com/problems/coin-change/" },
                 { t: "Longest Common Subsequence", d: "Med", time: "30m", prob: "Match chars in two strings.", hint: "2D Grid DP.", link: "https://leetcode.com/problems/longest-common-subsequence/" },
                 { t: "Word Break", d: "Med", time: "30m", prob: "Can string be segmented?", hint: "DP with HashSet dictionary.", link: "https://leetcode.com/problems/word-break/" },
                 { t: "Jump Game", d: "Med", time: "20m", prob: "Can reach end?", hint: "Greedy: Track 'maxReach'.", link: "https://leetcode.com/problems/jump-game/" },
                 { t: "Unique Paths", d: "Med", time: "20m", prob: "Grid ways top-left to bot-right.", hint: "dp[i][j] = up + left.", link: "https://leetcode.com/problems/unique-paths/" }
             ]
        },
        {
            topic: "Pattern 11: Design & Backtracking",
            tasks: [
                { t: "LRU Cache", d: "Med", time: "40m", prob: "Design Last Recently Used cache.", hint: "HashMap + Doubly Linked List.", link: "https://leetcode.com/problems/lru-cache/" },
                { t: "Implement Trie (Prefix Tree)", d: "Med", time: "30m", prob: "Insert/Search words.", hint: "Tree where nodes are letters.", link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
                { t: "Subsets", d: "Med", time: "20m", prob: "Find all subsets.", hint: "Backtracking (Include/Exclude).", link: "https://leetcode.com/problems/subsets/" },
                { t: "Permutations", d: "Med", time: "25m", prob: "All possible orderings.", hint: "Backtracking with Swap.", link: "https://leetcode.com/problems/permutations/" },
                { t: "Lowest Common Ancestor", d: "Med", time: "20m", prob: "LCA in BST (or Binary Tree).", hint: "Split point logic.", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" }
            ]
        }
    ],

aptitude: [
    {
      "category": "Phase 1: Foundation & Speed (The Prerequisite)",
      "desc": "Do these first. They build the calculation speed and logic needed for 80% of the exam.",
      "modules": [
        {
          "topic": "Number System",
          "importance": "Very High",
          "details": "Divisibility, Unit Digits, Remainders, Trailing Zeros.",
          "formulas": [
            "Divisibility 11: |Sum(Odd) - Sum(Even)| = 0 or 11k.",
            "Rem Thm: Rem(AxB)/n = [Rem(A)xRem(B)]/n."
          ],
          "patterns": [
            "Pattern 1: Find unit digit of 234^105.",
            "Pattern 2: Remainder of (17^23 + 29^23) / 23."
          ],
          "link": "https://www.indiabix.com/aptitude/numbers/",
          "video_link": "https://www.youtube.com/watch?v=KSeIr93uxjk"
        },
        {
          "topic": "Statistics (TCS Mandatory)",
          "importance": "Critical",
          "details": "Standard Deviation, Variance, Mean, Median, Mode. (TCS asks this frequently).",
          "formulas": [
            "Variance = Sum(x - Mean)² / n.",
            "Std Deviation (SD) = Sqrt(Variance).",
            "Coeff of Variation (CV) = (SD/Mean) * 100."
          ],
          "patterns": [
            "Pattern 1: Calculate Variance of {2, 4, 6, 8}.",
            "Pattern 2: Find Median of unsorted stream."
          ],
          "link": "https://www.geeksforgeeks.org/standard-deviation-formulas-and-equations/",
          "video_link": "https://www.youtube.com/watch?v=VFhVa99wdf8"
        },
        {
          "topic": "Simplification & Logarithms",
          "importance": "High",
          "details": "BODMAS, Surds, Indices, Basic Logs.",
          "formulas": [
            "Log(ab) = log a + log b.",
            "Surds comparison rules."
          ],
          "patterns": [
            "Pattern 1: Value of sqrt(12 + sqrt(12 + ...)).",
            "Pattern 2: Solve for x in log equations."
          ],
          "link": "https://www.indiabix.com/aptitude/simplification/",
          "video_link": "https://www.youtube.com/watch?v=yW6hNf-1O2c"
        },
        {
          "topic": "HCF and LCM",
          "importance": "High",
          "details": "Factors and Multiples applications.",
          "formulas": [
            "LCM(Fraction) = LCM(Num)/HCF(Den)."
          ],
          "patterns": [
            "Pattern 1: Bell tolling intervals (LCM application)."
          ],
          "link": "https://www.indiabix.com/aptitude/hcf-and-lcm/",
          "video_link": "https://www.youtube.com/watch?v=4L-QdK7g9iY"
        }
      ]
    },
    {
      "category": "Phase 2: High Yield 'Must Do' (80% of Paper)",
      "desc": "The Core. Focus your energy here. These topics appear in every single slot.",
      "modules": [
        {
          "topic": "Percentages",
          "importance": "Highest",
          "details": "The base for Profit/Loss and DI.",
          "formulas": [
            "Net Change % = x + y + (xy/100)."
          ],
          "patterns": [
            "Pattern 1: Election (Valid vs Invalid votes).",
            "Pattern 2: Price rises by 20%, reduce consumption?"
          ],
          "link": "https://www.indiabix.com/aptitude/percentage/",
          "video_link": "https://www.youtube.com/watch?v=5pvrKPgLBqw"
        },
        {
          "topic": "Data Interpretation (DI)",
          "importance": "Highest (Weightage King)",
          "details": "Tables, Pie Charts, Bar Graphs. (Use on-screen calc!).",
          "formulas": [
            "% Increase = (Diff/Initial) * 100.",
            "Degrees to %: (Deg/360)*100."
          ],
          "patterns": [
            "Pattern 1: Missing Data Tables.",
            "Pattern 2: Complex calculation heavy charts."
          ],
          "link": "https://www.indiabix.com/data-interpretation/table-charts/",
          "video_link": "https://www.youtube.com/watch?v=FBhLuolwuD8"
        },
        {
          "topic": "Profit, Loss and Discount",
          "importance": "Very High",
          "details": "CP, SP, MP, Dishonest dealers.",
          "formulas": [
            "Dishonest Dealer: Gain% = Error / (True - Error) * 100.",
            "Marked Price (MP) = CP * (1 + Markup%)."
          ],
          "patterns": [
            "Pattern 1: Buy 2 Get 1 Free.",
            "Pattern 2: Dishonest weights used by grocer."
          ],
          "link": "https://www.indiabix.com/aptitude/profit-and-loss/",
          "video_link": "https://www.youtube.com/watch?v=8488X53d6Yc"
        },
        {
          "topic": "Time and Work",
          "importance": "Very High",
          "details": "Efficiencies and Man-Days.",
          "formulas": [
            "Total Work = LCM(Days).",
            "M1*D1*H1 = M2*D2*H2."
          ],
          "patterns": [
            "Pattern 1: Leaving work before completion.",
            "Pattern 2: Men, Women, Children efficiency."
          ],
          "link": "https://www.indiabix.com/aptitude/time-and-work/",
          "video_link": "https://www.youtube.com/watch?v=0Hqd1M0UuAQ"
        },
        {
          "topic": "Ratios, Mixtures & Alligations",
          "importance": "High",
          "details": "Proportions and Mixing liquids.",
          "formulas": [
            "Alligation Rule.",
            "Replacement Formula."
          ],
          "patterns": [
            "Pattern 1: Milk/Water repeated replacement.",
            "Pattern 2: Mixing two varieties of rice."
          ],
          "link": "https://www.indiabix.com/aptitude/alligation-or-mixture/",
          "video_link": "https://www.youtube.com/watch?v=1F4f_41G_3g"
        },
        {
          "topic": "Time, Speed and Distance",
          "importance": "High",
          "details": "Relative speed, Trains.",
          "formulas": [
            "Rel Speed (Opp) = S1+S2.",
            "Avg Speed = 2xy/(x+y)."
          ],
          "patterns": [
            "Pattern 1: Police catching a thief.",
            "Pattern 2: Train crossing a bridge."
          ],
          "link": "https://www.indiabix.com/aptitude/speed-time-and-distance/",
          "video_link": "https://www.youtube.com/watch?v=rhSxQ4ieAYc"
        },
        {
          "topic": "Mensuration (Area & Volume)",
          "importance": "High",
          "details": "2D and 3D shapes. Formula heavy.",
          "formulas": [
            "Cone Vol: 1/3 πr²h.",
            "Sphere Vol: 4/3 πr³."
          ],
          "patterns": [
            "Pattern 1: Wire bent into Circle then Square.",
            "Pattern 2: Melting spheres into a big cone."
          ],
          "link": "https://www.indiabix.com/aptitude/mensuration/",
          "video_link": "https://www.youtube.com/watch?v=A2G-M7T7zC8"
        }
      ]
    },
    {
      "category": "Phase 3: The Rank Deciders (Prime/Digital Profile)",
      "desc": "These topics separate the high-paid profiles from the average ones.",
      "modules": [
        {
          "topic": "Data Sufficiency",
          "importance": "Critical (TCS Advanced)",
          "details": "Logic check without solving. (Reasoning Section).",
          "formulas": [
            "Rule: Don't solve! Just check possibility."
          ],
          "patterns": [
            "Pattern 1: Is 'x' > 'y'? (Statement 1 & 2)."
          ],
          "link": "https://www.indiabix.com/data-sufficiency/questions-and-answers/",
          "video_link": "https://www.youtube.com/watch?v=yW_uH3K4yTU"
        },
        {
          "topic": "Simple and Compound Interest",
          "importance": "Med-High",
          "details": "Complex interest and Installments.",
          "formulas": [
            "Diff (CI-SI) 2yrs = P(R/100)².",
            "Installments Logic."
          ],
          "patterns": [
            "Pattern 1: Difference between SI and CI.",
            "Pattern 2: Installment payments."
          ],
          "link": "https://www.indiabix.com/aptitude/compound-interest/",
          "video_link": "https://www.youtube.com/watch?v=s4N9l3lB1Xw"
        },
        {
          "topic": "Permutation & Probability",
          "importance": "Med",
          "details": "Counting principles and chance.",
          "formulas": [
            "nCr vs nPr.",
            "P(Event) = Fav/Total."
          ],
          "patterns": [
            "Pattern 1: Arranging letters of 'APPLE'.",
            "Pattern 2: Dice/Coin probability."
          ],
          "link": "https://www.indiabix.com/aptitude/probability/",
          "video_link": "https://www.youtube.com/watch?v=40X9Si42Aes"
        },
        {
          "topic": "Geometry & Coordinate Geo",
          "importance": "Med",
          "details": "Lines, Angles, Slopes.",
          "formulas": [
            "Polygons: Sum Angles = (n-2)*180.",
            "Distance Formula."
          ],
          "patterns": [
            "Pattern 1: Shaded region area.",
            "Pattern 2: Slope of line joining two points."
          ],
          "link": "https://www.geeksforgeeks.org/coordinate-geometry/",
          "video_link": "https://www.youtube.com/watch?v=IrlTj7m2t1o"
        }
      ]
    },
    {
      "category": "Phase 4: Rare & Company Specifics (The Finisher)",
      "desc": "Do these last. Essential for Infosys/Capgemini but rare in TCS Foundation.",
      "modules": [
        {
          "topic": "Cryptarithmetic",
          "importance": "Critical (Infosys Only)",
          "details": "Letter-Math puzzles.",
          "formulas": [
            "Unique Digit Rule."
          ],
          "patterns": [
            "Pattern 1: SEND + MORE = MONEY."
          ],
          "link": "https://www.geeksforgeeks.org/solving-cryptarithmetic-puzzles/",
          "video_link": "https://www.youtube.com/watch?v=XxkQIQlvGCM"
        },
        {
          "topic": "Clocks and Calendars",
          "importance": "Low",
          "details": "Angles and Dates.",
          "formulas": [
            "Angle = |30H - 5.5M|."
          ],
          "patterns": [
            "Pattern 1: Angle between hands.",
            "Pattern 2: Day of the week."
          ],
          "link": "https://www.indiabix.com/aptitude/calendar/",
          "video_link": "https://www.youtube.com/watch?v=encpL9XUfvw"
        },
        {
          "topic": "Quadratic Equations",
          "importance": "Low-Med",
          "details": "Roots comparison.",
          "formulas": [
            "Sign method for roots."
          ],
          "patterns": [
            "Pattern 1: x²... vs y²... (x > y)."
          ],
          "link": "https://www.indiabix.com/aptitude/quadratic-equations/",
          "video_link": "https://www.youtube.com/watch?v=9yY9Qc7uXyU"
        },
        {
          "topic": "Visual Reasoning (Cubes)",
          "importance": "Med (Reasoning Section)",
          "details": "Spatial visualization.",
          "formulas": [
            "Opposite faces rule."
          ],
          "patterns": [
            "Pattern 1: Unfolded Cube logic."
          ],
          "link": "https://www.indiabix.com/non-verbal-reasoning/cube-and-dice/",
          "video_link": "https://www.youtube.com/watch?v=8488X53d6Yc"
        }
      ]
    }
  ],

    cs_fundamentals: [
        {
            subject: "Object-Oriented Programming (OOP)",
            desc: "The structure of code. Focus on 'Memory' and 'Design'.",
            modules: [
                {
                    topic: "Core Pillars & Memory Management",
                    details: "Polymorphism (Runtime vs Compile-time), Encapsulation, Stack vs Heap memory.",
                    link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/",
                    faq: ["Diff between Overloading and Overriding?", "Structure of Java/C++ Object in memory?", "What triggers a StackOverflowError?"]
                },
                {
                    topic: "Keywords & Abstract Logic",
                    details: "Interface vs Abstract Class, Final/Static/Super keywords, Copy Constructors.",
                    link: "https://www.javatpoint.com/java-oops-concepts",
                    faq: ["Can an Interface have a constructor?", "Why is the main method static?", "Deep Copy vs Shallow Copy?"]
                },
                {
                    topic: "Design Patterns & SOLID (Hero Level)",
                    details: "Singleton, Factory Pattern, and the 5 SOLID principles.",
                    link: "https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/",
                    faq: ["Write code for a Singleton class (Double-checked locking).", "Why use Factory pattern?", "Explain Dependency Injection."]
                }
            ]
        },
        {
            subject: "Database Management Systems (DBMS)",
            desc: "Data integrity and speed. Focus on 'Keys' and 'ACID'.",
            modules: [
                {
                    topic: "Normalization & Keys",
                    details: "Keys (Primary, Foreign, Unique, Candidate, Composite). 1NF to BCNF.",
                    link: "https://www.guru99.com/dbms-keys.html",
                    faq: ["Diff between Primary Key and Unique Key?", "Can Foreign Key be NULL?", "Why is 3NF better than 2NF?"]
                },
                {
                    topic: "SQL Queries & Transactions",
                    details: "ACID Properties. Joins (Inner, Outer, Self). Aggregate Functions (GROUP BY, HAVING).",
                    link: "https://www.w3schools.com/sql/sql_join.asp",
                    faq: ["Order of execution in SQL (WHERE vs HAVING)?", "Find the 3rd highest salary.", "What is a 'Dirty Read'?"]
                },
                {
                    topic: "NoSQL & Indexing (Hero Level)",
                    details: "SQL vs NoSQL (CAP Theorem). Clustered vs Non-Clustered Indexing.",
                    link: "https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/",
                    faq: ["When to use MongoDB over MySQL?", "How does B-Tree Indexing make search faster?", "Explain 'Eventual Consistency'."]
                }
            ]
        },
        {
            subject: "Operating Systems (OS)",
            desc: "Resource management. Focus on 'Scheduling' and 'Deadlocks'.",
            modules: [
                {
                    topic: "Process Scheduling & Threads",
                    details: "Process State Diagram. Scheduling Algos (FCFS, Round Robin, SJF). User vs Kernel Threads.",
                    link: "https://www.guru99.com/process-scheduling.html",
                    faq: ["Diff between Preemptive and Non-Preemptive scheduling?", "Why is Round Robin good for Time Sharing?", "Process vs Thread context switch cost."]
                },
                {
                    topic: "Memory Management & Paging",
                    details: "Virtual Memory, Paging, Segmentation, TLB, Thrashing.",
                    link: "https://www.geeksforgeeks.org/virtual-memory-in-operating-system/",
                    faq: ["Why do we need Virtual Memory?", "What is a Page Fault?", "Explain Internal vs External Fragmentation."]
                },
                {
                    topic: "Concurrency & Deadlock (Hero Level)",
                    details: "Mutex vs Semaphore. Deadlock Necessary Conditions. Banker's Algorithm.",
                    link: "https://www.javatpoint.com/os-deadlock-introduction",
                    faq: ["What is a Race Condition?", "Dining Philosophers Problem logic.", "How to recover from a Deadlock?"]
                }
            ]
        },
        {
            subject: "Computer Networks (CN)",
            desc: "Communication. Focus on 'HTTP' and 'TCP/IP'.",
            modules: [
                {
                    topic: "The Layers (OSI vs TCP/IP)",
                    details: "Functions of all 7 layers. Headers and Data Units (Packet, Frame, Segment).",
                    link: "https://www.cloudflare.com/learning/ddos/glossary/osi-model/",
                    faq: ["What happens when you type google.com? (DNS Resolution)", "Router vs Switch vs Hub?", "Why is UDP faster than TCP?"]
                },
                {
                    topic: "HTTP & Web Protocols",
                    details: "HTTP Methods (GET, POST, PUT, DELETE). Status Codes (200, 401, 403, 404, 500). HTTPS (SSL/TLS).",
                    link: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status",
                    faq: ["Diff between GET and POST?", "What is a Stateless Protocol?", "How does HTTPS handshake work?"]
                },
                {
                    topic: "IP Addressing & Subnetting (Hero Level)",
                    details: "IPv4 vs IPv6. Subnet Masks. CIDR notation. NAT.",
                    link: "https://www.geeksforgeeks.org/introduction-to-subnetting/",
                    faq: ["Calculate number of hosts in /24 subnet.", "Public vs Private IP range.", "What is the Loopback Address (127.0.0.1)?"]
                }
            ]
        }
    ]
};

// STATE & INIT
let currentPhase = 'ninja';
let stats = {
    streak: 0,
    maxStreak: 0,
    lives: 3,
    lastActiveDate: null
};

// DOM Elements
const listContainer = document.getElementById('current-list');
const streakEl = document.getElementById('streak-count');
const maxStreakEl = document.getElementById('max-streak');
const livesContainer = document.getElementById('lives-container');
const phaseBtns = document.querySelectorAll('.phase-btn');

function init() {
    loadStats();
    checkDailyStatus();
    switchPhase('ninja');
    updateUI();
}

function loadStats() {
    const saved = localStorage.getItem('tcs_stats_v3');
    if (saved) stats = JSON.parse(saved);
}

function saveStats() {
    localStorage.setItem('tcs_stats_v3', JSON.stringify(stats));
    updateUI();
}

// STREAK & LIVES LOGIC
function getTodayString() {
    return new Date().toLocaleDateString('en-CA');
}

function checkDailyStatus() {
    if (!stats.lastActiveDate) return;
    const today = getTodayString();
    const last = stats.lastActiveDate;
    if (today === last) return; 

    const diffTime = new Date(today) - new Date(last);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if (diffDays > 1) {
        const missed = diffDays - 1;
        stats.lives -= missed;
        let msg = `⚠️ You missed ${missed} day(s)! You lost ${missed} Life/Lives.`;
        if (stats.lives <= 0) {
            stats.lives = 3; 
            stats.streak = 0; 
            msg = `💀 ALL LIVES LOST!\nYour streak has been reset to 0.\nTry again!`;
        }
        alert(msg);
        saveStats();
    }
}

function handleTaskCompletion() {
    const today = getTodayString();
    if (stats.lastActiveDate !== today) {
        stats.streak++;
        if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
        stats.lastActiveDate = today; 
        streakEl.style.transform = "scale(1.5)";
        setTimeout(() => streakEl.style.transform = "scale(1)", 200);
        saveStats();
    }
}

// UI & RENDERING
window.switchPhase = function(phase) {
    currentPhase = phase;
    phaseBtns.forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        if (phase === 'cs_fundamentals' && btnText.includes('theory')) {
            btn.classList.add('active');
        } else if (phase === 'aptitude' && btnText.includes('aptitude')) {
            btn.classList.add('active');
        } else if (btnText.includes(phase) && phase !== 'aptitude' && phase !== 'cs_fundamentals') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderList();
    calculateReadiness();
}

function renderList() {
    listContainer.innerHTML = '';
    const sections = roadmapData[currentPhase];
    let globalIndex = 0;

    sections.forEach(section => {
        const subHeader = document.createElement('h3');
        subHeader.className = 'topic-header';
        
        if(currentPhase === 'cs_fundamentals') {
            subHeader.innerText = section.subject;
            subHeader.innerHTML += `<div style="font-size:0.7em; text-transform:none; margin-top:5px; color:#6b7280">${section.desc}</div>`;
        } else if (currentPhase === 'aptitude') {
            subHeader.innerText = section.category;
            subHeader.innerHTML += `<div style="font-size:0.7em; text-transform:none; margin-top:5px; color:#6b7280">${section.desc}</div>`;
        } else {
            subHeader.innerText = section.topic;
        }
        listContainer.appendChild(subHeader);

        const items = (currentPhase === 'cs_fundamentals' || currentPhase === 'aptitude') ? section.modules : section.tasks;

        items.forEach(item => {
            const id = `${currentPhase}-${globalIndex}`;
            const isDone = localStorage.getItem(id) === 'true';
            
            if (currentPhase !== 'cs_fundamentals' && currentPhase !== 'aptitude') {
                let badgeClass = 'badge-easy';
                if(item.d === 'Med') badgeClass = 'badge-med';
                if(item.d === 'Hard') badgeClass = 'badge-hard';

                const li = createListItem(id, isDone, item.t, item.d, badgeClass);
                li.querySelector('.task-details').innerHTML = `
                    <p><strong>Problem:</strong> ${item.prob}</p>
                    <div class="meta-row"><span>⏱️ Avg Time: ${item.time}</span></div>
                    <div class="action-row">
                        <a href="${item.link}" target="_blank" class="practice-btn">🚀 Solve</a>
                        <button class="hint-btn" onclick="toggleHint(this)">💡 Hint</button>
                    </div>
                    <div class="hint-text">${item.hint}</div>
                `;
                listContainer.appendChild(li);
            } 

            else if (currentPhase === 'aptitude') {
                const li = createListItem(id, isDone, item.topic, item.importance, 'badge-med');
                
                const formulasHTML = item.formulas.map(f => `<li>${f}</li>`).join('');
                
                const patternsHTML = item.patterns.map((p, pIdx) => {
                    const subId = `${id}-pat-${pIdx}`;
                    const isSubDone = localStorage.getItem(subId) === 'true';
                    return `
                        <li class="sub-item ${isSubDone ? 'checked' : ''}" onclick="toggleSubCheck(this, '${subId}')">
                            <div class="sub-checkbox"></div>
                            <span>${p}</span>
                        </li>
                    `;
                }).join('');

                const videoBtn = item.video_link 
                    ? `<a href="${item.video_link}" target="_blank" class="practice-btn" style="background:#ef4444; margin-left:5px;">📺 Video</a>` 
                    : '';

                li.querySelector('.task-details').innerHTML = `
                    <p style="margin-bottom:10px; font-style:italic">${item.details}</p>
                    <div class="action-row">
                        <a href="${item.link}" target="_blank" class="practice-btn" style="background:#f59e0b">🧮 Practice</a>
                        ${videoBtn} 
                        <button class="hint-btn" onclick="toggleHint(this)">📐 Cheat Sheet</button>
                    </div>
                    <div class="hint-text">
                        <strong>⚡ Formulas:</strong>
                        <ul style="padding-left:15px; margin:5px 0 10px 0;">${formulasHTML}</ul>
                        <strong>🎯 Standard Patterns (Click to Mark):</strong>
                        <ul class="sub-list">${patternsHTML}</ul>
                    </div>
                `;
                listContainer.appendChild(li);
            }
            else {
                const li = createListItem(id, isDone, item.topic, 'THEORY', 'badge-med');
                
                const faqHTML = item.faq.map((q, qIdx) => {
                    const subId = `${id}-faq-${qIdx}`;
                    const isSubDone = localStorage.getItem(subId) === 'true';
                    return `
                        <li class="sub-item ${isSubDone ? 'checked' : ''}" onclick="toggleSubCheck(this, '${subId}')">
                            <div class="sub-checkbox"></div>
                            <span>${q}</span>
                        </li>
                    `;
                }).join('');

                li.querySelector('.task-details').innerHTML = `
                    <p style="margin-bottom:10px;">${item.details}</p>
                    <div class="action-row">
                        <a href="${item.link}" target="_blank" class="practice-btn" style="background:#2563eb">📖 Read</a>
                        <button class="hint-btn" onclick="toggleHint(this)">❓ FAQs</button>
                    </div>
                    <div class="hint-text">
                        <strong>✅ Mastery Check:</strong>
                        <ul class="sub-list">${faqHTML}</ul>
                    </div>
                `;
                listContainer.appendChild(li);
            }
            globalIndex++;
        });
    });
}

function createListItem(id, isDone, title, badgeText, badgeClass) {
    const li = document.createElement('li');
    li.className = `task-item ${isDone ? 'checked' : ''}`;
    li.id = `item-${id}`;
    li.innerHTML = `
        <div class="task-header" onclick="toggleTask('${id}')">
            <div class="custom-checkbox" onclick="event.stopPropagation(); toggleCheck('${id}')"></div>
            <div class="task-info">
                <span class="task-title">${title}</span>
                <span class="badge ${badgeClass}">${badgeText}</span>
            </div>
            <div style="font-size:12px; color:#9ca3af">▼</div>
        </div>
        <div class="task-details"></div>
    `;
    return li;
}

window.toggleTask = function(id) {
    document.getElementById(`item-${id}`).classList.toggle('expanded');
}

window.toggleCheck = function(id) {
    const isDone = localStorage.getItem(id) === 'true';
    if (!isDone) {
        localStorage.setItem(id, 'true');
        handleTaskCompletion(); 
    } else {
        localStorage.removeItem(id);
    }
    document.getElementById(`item-${id}`).classList.toggle('checked');
    calculateReadiness();
}

window.toggleSubCheck = function(el, subId) {
    const isDone = localStorage.getItem(subId) === 'true';
    if (!isDone) {
        localStorage.setItem(subId, 'true');
        el.classList.add('checked');
    } else {
        localStorage.removeItem(subId);
        el.classList.remove('checked');
    }
}

window.toggleHint = function(btn) {
    const text = btn.parentElement.nextElementSibling;
    const isHidden = text.style.display === 'none' || text.style.display === '';
    text.style.display = isHidden ? 'block' : 'none';
    
    if(currentPhase === 'aptitude') {
        btn.innerText = isHidden ? "🙈 Hide Sheet" : "📐 Cheat Sheet";
    } else if(currentPhase === 'cs_fundamentals') {
        btn.innerText = isHidden ? "🙈 Hide FAQs" : "❓ FAQs";
    } else {
        btn.innerText = isHidden ? "🙈 Hide" : "💡 Show";
    }
}

function calculateReadiness() {
    let tiersToCheck = [];
    if(currentPhase === 'cs_fundamentals') tiersToCheck = ['cs_fundamentals'];
    else if(currentPhase === 'aptitude') tiersToCheck = ['aptitude'];
    else {
        if(currentPhase === 'ninja') tiersToCheck = ['ninja'];
        if(currentPhase === 'digital') tiersToCheck = ['ninja', 'digital'];
        if(currentPhase === 'prime') tiersToCheck = ['ninja', 'digital', 'prime'];
    }

    let totalTasks = 0, doneTasks = 0;

    tiersToCheck.forEach(tier => {
        const sections = roadmapData[tier];
        let idx = 0;
        sections.forEach(sec => {
            const count = (tier === 'cs_fundamentals' || tier === 'aptitude') ? sec.modules.length : sec.tasks.length;
            for(let i=0; i<count; i++) {
                if(localStorage.getItem(`${tier}-${idx}`) === 'true') doneTasks++;
                totalTasks++;
                idx++;
            }
        });
    });

    let rawPercent = totalTasks === 0 ? 0 : (doneTasks / totalTasks);
    let displayMax = (currentPhase === 'cs_fundamentals' || currentPhase === 'aptitude') ? 100 : 90;
    let readyPercent = Math.round(rawPercent * displayMax);

    const container = document.querySelector('.hero-section');
    let oldBar = document.getElementById('readiness-ui');
    if(oldBar) oldBar.remove();

    let subText = "*Remaining 10% depends on Interview Perf.";
    if (currentPhase === 'cs_fundamentals') subText = "*Must be able to explain answers vocally.";
    if (currentPhase === 'aptitude') subText = "*Speed is key. Aim for <1 min per Q.";

    const phaseLabel = (currentPhase === 'cs_fundamentals') ? "THEORY" : currentPhase.toUpperCase();

    const readyHTML = `
        <div id="readiness-ui" class="readiness-box">
            <div class="readiness-label">
                <span>${phaseLabel} READINESS</span>
                <span>${readyPercent}% / ${displayMax}%</span>
            </div>
            <div class="readiness-bar-bg">
                <div class="readiness-fill" style="width: ${readyPercent}%"></div>
            </div>
            <div style="font-size: 0.7rem; color: #6b7280; margin-top:5px; text-align:right;">
                ${subText}
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', readyHTML);
}

function updateUI() {
    streakEl.innerText = stats.streak;
    maxStreakEl.innerText = stats.maxStreak;
    livesContainer.innerHTML = '';
    const maxLives = 3; 
    for(let i=0; i<maxLives; i++) {
        livesContainer.innerHTML += (i < stats.lives) ? `<span class="heart">❤️</span>` : `<span class="heart lost">🖤</span>`;
    }
    calculateReadiness();
}

window.resetProgress = function() {
    if(confirm("⚠️ HARD RESET: Clear all streaks and progress?")) {
        localStorage.clear();
        location.reload();
    }
}

// Start App
init();