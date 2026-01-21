// ---------------------------------------------------------
// DATASET
// ---------------------------------------------------------
const roadmapData = {
    ninja: [
        { 
            topic: "Logic Building & Patterns", 
            tasks: [
                { t: "Pascal's Triangle", d: "Easy", time: "15m", prob: "Generate the first numRows of Pascal's triangle.", hint: "Use nested loops. Each number is the sum of the two directly above it.", link: "https://leetcode.com/problems/pascals-triangle/" },
                { t: "Number of 1 Bits", d: "Easy", time: "10m", prob: "Count set bits in an integer (Hamming Weight).", hint: "Loop while n != 0. n = n & (n - 1) clears the least significant bit.", link: "https://leetcode.com/problems/number-of-1-bits/" },
                { t: "Single Number", d: "Easy", time: "10m", prob: "Find the element that appears once (others appear twice).", hint: "XOR all numbers. A ^ A = 0, so only the unique number remains.", link: "https://leetcode.com/problems/single-number/" },
                { t: "Add Digits", d: "Easy", time: "5m", prob: "Repeatedly add all digits until the result has only one digit.", hint: "Conceptually: num % 9. If num%9==0, return 9.", link: "https://leetcode.com/problems/add-digits/" },
                { t: "Find Numbers with Even Digits", d: "Easy", time: "5m", prob: "Count numbers with even number of digits.", hint: "Convert to string and check length, or use log10.", link: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/" },
                { t: "Reverse Integer", d: "Med", time: "15m", prob: "Reverse digits of an integer.", hint: "Pop digit: x % 10. Push: rev * 10 + digit. Check overflow.", link: "https://leetcode.com/problems/reverse-integer/" },
                { t: "Palindrome Number", d: "Easy", time: "10m", prob: "Check if N reads same backwards.", hint: "Revert second half of number to avoid overflow.", link: "https://leetcode.com/problems/palindrome-number/" },
                { t: "Self Dividing Numbers", d: "Easy", time: "15m", prob: "Check if number is divisible by all its digits.", hint: "Extract digits with % 10. Check if n % digit == 0.", link: "https://leetcode.com/problems/self-dividing-numbers/" }
            ]
        },
        { 
            topic: "Math & Number Theory", 
            tasks: [
                { t: "Count Primes", d: "Med", time: "20m", prob: "Count primes less than N.", hint: "Sieve of Eratosthenes. Mark multiples of p as false.", link: "https://leetcode.com/problems/count-primes/" },
                { t: "Find GCD of Array", d: "Easy", time: "10m", prob: "Find GCD of min and max element.", hint: "Euclidean Algo: gcd(a, b) = gcd(b, a % b).", link: "https://leetcode.com/problems/find-greatest-common-divisor-of-array/" },
                { t: "Missing Number", d: "Easy", time: "5m", prob: "Find missing number in [0, n].", hint: "Sum([0..n]) - Sum(nums).", link: "https://leetcode.com/problems/missing-number/" },
                { t: "Fibonacci Number", d: "Easy", time: "10m", prob: "Calculate F(n).", hint: "Iterative approach (a=0, b=1) is O(n) time and O(1) space.", link: "https://leetcode.com/problems/fibonacci-number/" },
                { t: "Power of Two", d: "Easy", time: "5m", prob: "Check if n is power of two.", hint: "Bitwise: (n > 0) && ((n & (n - 1)) == 0).", link: "https://leetcode.com/problems/power-of-two/" },
                { t: "Excel Sheet Column Number", d: "Easy", time: "10m", prob: "Convert column title (A, B... AA) to number.", hint: "Base-26 conversion. result = result * 26 + (char - 'A' + 1).", link: "https://leetcode.com/problems/excel-sheet-column-number/" },
                { t: "Factorial Trailing Zeroes", d: "Med", time: "15m", prob: "Count zeros in n!", hint: "Count factors of 5 in n! (n/5 + n/25 + ...).", link: "https://leetcode.com/problems/factorial-trailing-zeroes/" }
            ]
        },
        {
            topic: "Array Foundations",
            tasks: [
                { t: "Build Array from Permutation", d: "Easy", time: "5m", prob: "ans[i] = nums[nums[i]]", hint: "Direct simulation.", link: "https://leetcode.com/problems/build-array-from-permutation/" },
                { t: "Running Sum of 1d Array", d: "Easy", time: "10m", prob: "Return the running sum.", hint: "nums[i] += nums[i-1].", link: "https://leetcode.com/problems/running-sum-of-1d-array/" },
                { t: "Plus One", d: "Easy", time: "10m", prob: "Add one to large integer represented as array.", hint: "Handle carry. If digit becomes 0, carry continues.", link: "https://leetcode.com/problems/plus-one/" },
                { t: "Third Maximum Number", d: "Easy", time: "15m", prob: "Find 3rd max.", hint: "Use 3 variables. Update carefully.", link: "https://leetcode.com/problems/third-maximum-number/" },
                { t: "Check if Sorted & Rotated", d: "Easy", time: "5m", prob: "Check if array was originally sorted.", hint: "Count drops (nums[i] > nums[i+1]). Max 1 drop allowed.", link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/" },
                { t: "Remove Duplicates", d: "Easy", time: "15m", prob: "In-place removal of duplicates.", hint: "Two pointers. Overwrite nums[unique] with nums[i].", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
                { t: "Rotate Array", d: "Med", time: "20m", prob: "Rotate array right by k steps.", hint: "Reverse all, Reverse 0-k, Reverse k-n.", link: "https://leetcode.com/problems/rotate-array/" },
                { t: "Move Zeroes", d: "Easy", time: "10m", prob: "Move zeroes to end.", hint: "Swap non-zeros to the front index.", link: "https://leetcode.com/problems/move-zeroes/" }
            ]
        }
    ],
    digital: [
        { 
            topic: "Sorting, Searching & Pointers", 
            tasks: [
                { t: "Binary Search", d: "Easy", time: "15m", prob: "Standard Binary Search.", hint: "mid = low + (high-low)/2.", link: "https://leetcode.com/problems/binary-search/" },
                { t: "Search in Rotated Sorted Array", d: "Med", time: "25m", prob: "Find target in rotated array.", hint: "Determine which half is sorted, then check if target lies there.", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
                { t: "First & Last Position", d: "Med", time: "20m", prob: "Find start/end index of target.", hint: "Two Binary Searches: one for left bound, one for right.", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
                { t: "Search Insert Position", d: "Easy", time: "10m", prob: "Index to insert target.", hint: "Return 'low' index if not found.", link: "https://leetcode.com/problems/search-insert-position/" },
                { t: "Sort Colors", d: "Med", time: "15m", prob: "Sort 0s, 1s, 2s.", hint: "Dutch National Flag: 3 pointers (low, mid, high).", link: "https://leetcode.com/problems/sort-colors/" },
                { t: "Container With Most Water", d: "Med", time: "20m", prob: "Max area between lines.", hint: "Two pointers from ends. Move the shorter line inward.", link: "https://leetcode.com/problems/container-with-most-water/" },
                { t: "Kth Largest Element", d: "Med", time: "20m", prob: "Find Kth largest.", hint: "Min-Heap or QuickSelect.", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
                { t: "Merge Sorted Array", d: "Easy", time: "15m", prob: "Merge in-place.", hint: "Fill from the end (index m+n-1).", link: "https://leetcode.com/problems/merge-sorted-array/" }
            ]
        },
        { 
            topic: "Strings & Parsing", 
            tasks: [
                { t: "Valid Anagram", d: "Easy", time: "10m", prob: "Check char counts.", hint: "Frequency array[26].", link: "https://leetcode.com/problems/valid-anagram/" },
                { t: "Valid Palindrome", d: "Easy", time: "10m", prob: "Check if string is palindrome ignoring non-alphanumeric.", hint: "Two pointers, start and end. Skip non-alphanumeric.", link: "https://leetcode.com/problems/valid-palindrome/" },
                { t: "Reverse Words in String", d: "Med", time: "20m", prob: "Reverse words, strip spaces.", hint: "Split, Reverse List, Join.", link: "https://leetcode.com/problems/reverse-words-in-a-string/" },
                { t: "Longest Common Prefix", d: "Easy", time: "10m", prob: "Common prefix of array.", hint: "Sort, compare first and last strings.", link: "https://leetcode.com/problems/longest-common-prefix/" },
                { t: "Isomorphic Strings", d: "Easy", time: "15m", prob: "Map chars s->t.", hint: "Two HashMaps.", link: "https://leetcode.com/problems/isomorphic-strings/" },
                { t: "Longest Palindromic Substring", d: "Med", time: "30m", prob: "Find longest palindrome.", hint: "Expand around center strategy.", link: "https://leetcode.com/problems/longest-palindromic-substring/" },
                { t: "String to Integer (atoi)", d: "Med", time: "25m", prob: "Parse string to int.", hint: "Handle signs and overflow.", link: "https://leetcode.com/problems/string-to-integer-atoi/" }
            ]
        },
        { 
            topic: "Sliding Window & Hashing", 
            tasks: [
                { t: "Two Sum", d: "Easy", time: "15m", prob: "Indices summing to target.", hint: "HashMap: target-num.", link: "https://leetcode.com/problems/two-sum/" },
                { t: "Longest Substring Without Repeating", d: "Med", time: "25m", prob: "Find max length unique substring.", hint: "Sliding window + Set/Map for indices.", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
                { t: "Majority Element", d: "Easy", time: "10m", prob: "Element > n/2.", hint: "Moore Voting Algo.", link: "https://leetcode.com/problems/majority-element/" },
                { t: "Best Time to Buy Stock", d: "Easy", time: "15m", prob: "Max profit (one tx).", hint: "Track minPrice.", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
                { t: "Intersection of Arrays", d: "Easy", time: "10m", prob: "Common elements.", hint: "Set.", link: "https://leetcode.com/problems/intersection-of-two-arrays/" },
                { t: "Find All Duplicates", d: "Med", time: "20m", prob: "Duplicates in O(n).", hint: "Mark visited indices negative.", link: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
                { t: "Group Anagrams", d: "Med", time: "25m", prob: "Group strings.", hint: "Key = sorted string.", link: "https://leetcode.com/problems/group-anagrams/" }
            ]
        },
        {
            topic: "Matrices & 2D Arrays",
            tasks: [
                { t: "Matrix Diagonal Sum", d: "Easy", time: "10m", prob: "Sum diagonals.", hint: "i==j and i+j == n-1.", link: "https://leetcode.com/problems/matrix-diagonal-sum/" },
                { t: "Rotate Image", d: "Med", time: "25m", prob: "Rotate 90 deg.", hint: "Transpose -> Reverse Rows.", link: "https://leetcode.com/problems/rotate-image/" },
                { t: "Spiral Matrix", d: "Med", time: "30m", prob: "Spiral traversal.", hint: "Bounds: top, bottom, left, right.", link: "https://leetcode.com/problems/spiral-matrix/" },
                { t: "Search a 2D Matrix", d: "Med", time: "20m", prob: "Binary search in matrix.", hint: "Treat as 1D array. row = mid/n, col = mid%n.", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
                { t: "Set Matrix Zeroes", d: "Med", time: "25m", prob: "Set row/col to 0.", hint: "Use first row/col as markers.", link: "https://leetcode.com/problems/set-matrix-zeroes/" }
            ]
        },
        {
            topic: "Recursion & Greedy",
            tasks: [
                { t: "Climbing Stairs", d: "Easy", time: "15m", prob: "Ways to climb.", hint: "Fibonacci.", link: "https://leetcode.com/problems/climbing-stairs/" },
                { t: "Assign Cookies", d: "Easy", time: "15m", prob: "Greedy match.", hint: "Sort both arrays.", link: "https://leetcode.com/problems/assign-cookies/" },
                { t: "Jump Game", d: "Med", time: "20m", prob: "Can reach end?", hint: "Greedy: Track 'maxReach'.", link: "https://leetcode.com/problems/jump-game/" },
                { t: "Can Place Flowers", d: "Easy", time: "15m", prob: "Place n flowers.", hint: "Check i-1 and i+1 empty.", link: "https://leetcode.com/problems/can-place-flowers/" }
            ]
        }
    ],
    prime: [
        { 
            topic: "Recursion & Backtracking", 
            tasks: [
                { t: "Subsets", d: "Med", time: "20m", prob: "All subsets.", hint: "Include/Exclude.", link: "https://leetcode.com/problems/subsets/" },
                { t: "Permutations", d: "Med", time: "25m", prob: "All permutations.", hint: "Swap and backtrack.", link: "https://leetcode.com/problems/permutations/" },
                { t: "Combination Sum", d: "Med", time: "25m", prob: "Target sum combinations.", hint: "Pick same element again allowed.", link: "https://leetcode.com/problems/combination-sum/" },
                { t: "Generate Parentheses", d: "Med", time: "25m", prob: "Well-formed parentheses.", hint: "Open count < n, Close count < Open count.", link: "https://leetcode.com/problems/generate-parentheses/" },
                { t: "N-Queens", d: "Hard", time: "40m", prob: "Place N queens.", hint: "Track cols/diagonals.", link: "https://leetcode.com/problems/n-queens/" }
            ]
        },
        { 
            topic: "Linked List & Stack", 
            tasks: [
                { t: "Reverse Linked List", d: "Easy", time: "15m", prob: "Reverse list.", hint: "Prev, Curr, Next.", link: "https://leetcode.com/problems/reverse-linked-list/" },
                { t: "Linked List Cycle", d: "Easy", time: "10m", prob: "Detect cycle.", hint: "Slow/Fast pointers.", link: "https://leetcode.com/problems/linked-list-cycle/" },
                { t: "Middle of List", d: "Easy", time: "10m", prob: "Find middle.", hint: "Fast 2x speed.", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
                { t: "Remove Nth Node From End", d: "Med", time: "20m", prob: "Remove node.", hint: "Two pointers, gap of N.", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
                { t: "Merge Two Sorted Lists", d: "Easy", time: "15m", prob: "Merge lists.", hint: "Dummy node.", link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
                { t: "Palindrome Linked List", d: "Easy", time: "20m", prob: "Check palindrome.", hint: "Find middle, reverse second half, compare.", link: "https://leetcode.com/problems/palindrome-linked-list/" },
                { t: "Valid Parentheses", d: "Easy", time: "15m", prob: "Balanced brackets.", hint: "Stack.", link: "https://leetcode.com/problems/valid-parentheses/" },
                { t: "Next Greater Element I", d: "Easy", time: "20m", prob: "Next greater.", hint: "Monotonic Stack.", link: "https://leetcode.com/problems/next-greater-element-i/" }
            ]
        },
        { 
            topic: "Trees & Graphs", 
            tasks: [
                { t: "Max Depth Binary Tree", d: "Easy", time: "10m", prob: "Tree height.", hint: "Recursion.", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
                { t: "Level Order Traversal", d: "Med", time: "20m", prob: "BFS.", hint: "Queue.", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
                { t: "Validate BST", d: "Med", time: "20m", prob: "Check BST.", hint: "Range (min, max).", link: "https://leetcode.com/problems/validate-binary-search-tree/" },
                { t: "Lowest Common Ancestor", d: "Med", time: "20m", prob: "Find LCA.", hint: "If split p and q, that's LCA.", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
                { t: "Number of Islands", d: "Med", time: "30m", prob: "Count islands.", hint: "DFS to mark visited.", link: "https://leetcode.com/problems/number-of-islands/" },
                { t: "Rotting Oranges", d: "Med", time: "30m", prob: "Rot time.", hint: "Multi-source BFS.", link: "https://leetcode.com/problems/rotting-oranges/" },
                { t: "Course Schedule", d: "Med", time: "30m", prob: "Can finish courses?", hint: "Topological Sort (Cycle detection).", link: "https://leetcode.com/problems/course-schedule/" }
            ]
        },
        {
             topic: "DP & Advanced",
             tasks: [
                 { t: "House Robber", d: "Med", time: "25m", prob: "Max money.", hint: "dp[i] = max(rob, skip).", link: "https://leetcode.com/problems/house-robber/" },
                 { t: "Unique Paths", d: "Med", time: "20m", prob: "Paths from top-left to bottom-right.", hint: "dp[i][j] = dp[i-1][j] + dp[i][j-1].", link: "https://leetcode.com/problems/unique-paths/" },
                 { t: "Longest Common Subsequence", d: "Med", time: "30m", prob: "LCS.", hint: "2D Grid.", link: "https://leetcode.com/problems/longest-common-subsequence/" },
                 { t: "Coin Change", d: "Med", time: "30m", prob: "Min coins.", hint: "dp[amount] = min.", link: "https://leetcode.com/problems/coin-change/" },
                 { t: "Longest Increasing Subsequence", d: "Med", time: "30m", prob: "LIS.", hint: "O(n^2) DP.", link: "https://leetcode.com/problems/longest-increasing-subsequence/" },
                 { t: "Top K Frequent Elements", d: "Med", time: "20m", prob: "Most frequent.", hint: "HashMap + Heap.", link: "https://leetcode.com/problems/top-k-frequent-elements/" }
             ]
        }
    ]
};

// ---------------------------------------------------------
// STATE & INIT
// ---------------------------------------------------------
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
    checkDailyStatus(); // CHECK LIVES ON LOAD
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

// ---------------------------------------------------------
// STREAK & LIVES LOGIC (NEW)
// ---------------------------------------------------------

function getTodayString() {
    // Returns YYYY-MM-DD to avoid timezone issues
    return new Date().toLocaleDateString('en-CA');
}

function checkDailyStatus() {
    // If first time ever, don't punish
    if (!stats.lastActiveDate) return;

    const today = getTodayString();
    const last = stats.lastActiveDate;
    
    // If user opens app multiple times same day, do nothing
    if (today === last) return; 

    // Calculate days passed
    const diffTime = new Date(today) - new Date(last);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    // Diff 0 = Same day (handled above)
    // Diff 1 = Consecutive day (Streak preserved, waiting for action)
    // Diff > 1 = Missed days!
    if (diffDays > 1) {
        const missed = diffDays - 1;
        stats.lives -= missed;
        
        let msg = `⚠️ You missed ${missed} day(s)! You lost ${missed} Life/Lives.`;

        // GAME OVER LOGIC
        if (stats.lives <= 0) {
            stats.lives = 3; // Refill lives
            stats.streak = 0; // Reset streak
            msg = `💀 ALL LIVES LOST!\nYour streak has been reset to 0.\nTry again!`;
        }
        
        alert(msg);
        saveStats();
    }
}

function handleTaskCompletion() {
    const today = getTodayString();

    // Only increment streak if this is the FIRST task of the day
    // AND the date is actually new compared to last active
    if (stats.lastActiveDate !== today) {
        stats.streak++;
        if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
        
        // Update date so streak doesn't increase again today
        stats.lastActiveDate = today; 
        
        // Visual Pop
        streakEl.style.transform = "scale(1.5)";
        setTimeout(() => streakEl.style.transform = "scale(1)", 200);
        
        saveStats();
    }
}

// ---------------------------------------------------------
// UI & RENDERING
// ---------------------------------------------------------

window.switchPhase = function(phase) {
    currentPhase = phase;
    phaseBtns.forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase().includes(phase));
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
        subHeader.innerText = section.topic;
        listContainer.appendChild(subHeader);

        section.tasks.forEach(task => {
            const id = `${currentPhase}-${globalIndex}`;
            const isDone = localStorage.getItem(id) === 'true';
            
            let badgeClass = 'badge-easy';
            if(task.d === 'Med') badgeClass = 'badge-med';
            if(task.d === 'Hard') badgeClass = 'badge-hard';

            const li = document.createElement('li');
            li.className = `task-item ${isDone ? 'checked' : ''}`;
            li.id = `item-${id}`;

            li.innerHTML = `
                <div class="task-header" onclick="toggleTask('${id}')">
                    <div class="custom-checkbox" onclick="event.stopPropagation(); toggleCheck('${id}')"></div>
                    <div class="task-info">
                        <span class="task-title">${task.t}</span>
                        <span class="badge ${badgeClass}">${task.d}</span>
                    </div>
                    <div style="font-size:12px; color:#9ca3af">▼</div>
                </div>
                <div class="task-details">
                    <p><strong>Problem:</strong> ${task.prob}</p>
                    <div class="meta-row">
                        <span>⏱️ Avg Time: ${task.time}</span>
                    </div>
                    
                    <div style="display:flex; gap:10px; margin-top:10px;">
                        <a href="${task.link}" target="_blank" class="practice-btn">
                           🚀 Solve Problem
                        </a>
                        <button class="hint-btn" onclick="toggleHint(this)">💡 Show Hint</button>
                    </div>
                    
                    <div class="hint-text">${task.hint}</div>
                </div>
            `;
            listContainer.appendChild(li);
            globalIndex++;
        });
    });
}

window.toggleTask = function(id) {
    document.getElementById(`item-${id}`).classList.toggle('expanded');
}

window.toggleCheck = function(id) {
    const isDone = localStorage.getItem(id) === 'true';
    if (!isDone) {
        localStorage.setItem(id, 'true');
        handleTaskCompletion(); // TRIGGER STREAK LOGIC
    } else {
        localStorage.removeItem(id);
    }
    
    // UI Updates
    document.getElementById(`item-${id}`).classList.toggle('checked');
    calculateReadiness();
}

// FIXED: Correctly finds the hint element (outside the flex container)
window.toggleHint = function(btn) {
    // Navigate up to the flex container, then to the next sibling (hint-text)
    const text = btn.parentElement.nextElementSibling;
    
    if(text.style.display === 'block') {
        text.style.display = 'none';
        btn.innerText = "💡 Show Hint";
    } else {
        text.style.display = 'block';
        btn.innerText = "🙈 Hide Hint";
    }
}

function calculateReadiness() {
    let tiersToCheck = [];
    if(currentPhase === 'ninja') tiersToCheck = ['ninja'];
    if(currentPhase === 'digital') tiersToCheck = ['ninja', 'digital'];
    if(currentPhase === 'prime') tiersToCheck = ['ninja', 'digital', 'prime'];

    let totalTasks = 0, doneTasks = 0;

    tiersToCheck.forEach(tier => {
        let idx = 0;
        roadmapData[tier].forEach(sec => {
            sec.tasks.forEach(() => {
                if(localStorage.getItem(`${tier}-${idx}`) === 'true') doneTasks++;
                totalTasks++;
                idx++;
            });
        });
    });

    let rawPercent = totalTasks === 0 ? 0 : (doneTasks / totalTasks);
    let readyPercent = Math.round(rawPercent * 90);

    const container = document.querySelector('.hero-section');
    let oldBar = document.getElementById('readiness-ui');
    if(oldBar) oldBar.remove();

    const readyHTML = `
        <div id="readiness-ui" class="readiness-box">
            <div class="readiness-label">
                <span>${currentPhase.toUpperCase()} ROLE READINESS</span>
                <span>${readyPercent}% / 90% (Coding Ready)</span>
            </div>
            <div class="readiness-bar-bg">
                <div class="readiness-fill" style="width: ${readyPercent}%"></div>
            </div>
            <div style="font-size: 0.7rem; color: #6b7280; margin-top:5px; text-align:right;">
                *Remaining 10% depends on Aptitude & Interview Perf.
            </div>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', readyHTML);
}

function updateUI() {
    streakEl.innerText = stats.streak;
    maxStreakEl.innerText = stats.maxStreak;
    
    // Render Hearts
    livesContainer.innerHTML = '';
    const maxLives = 3; 
    // We can show up to 3 hearts total.
    for(let i=0; i<maxLives; i++) {
        if(i < stats.lives) {
            livesContainer.innerHTML += `<span class="heart">❤️</span>`;
        } else {
            livesContainer.innerHTML += `<span class="heart lost">🖤</span>`;
        }
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