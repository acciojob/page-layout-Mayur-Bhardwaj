// You are a software developer working on a personal finance application. One of the features of the application is to track daily expenses based on a specific pattern. The daily spending rule is as follows: Day 1: Spend ₹1, Day 2: Spend ₹2, Day 3: Spend ₹3, and so on. However, every 7th day, the user receives a cashback of half of their total spending so far (rounded down).

// Your task is to write a program to find on which day the user will run out of money (balance becomes negative). You can assume the user starts with an initial balance of ₹1000.

// Write a pseudo-code using a single loop to find the day when the balance becomes negative.

// Note: You can use the following table as a reference to understand the spending pattern and cashback rules:

// Day |	Spend	Total Spent	Cashback	Balance
// 1	 |  ₹1	₹1	-	₹999
// 2	 |  ₹2	₹3	-	₹997
// 3	 |  ₹3	₹6	-	₹994
// 4	 |  ₹4	₹10	-	₹990
// 5   |  ₹5	₹15	-	₹985
// 6	 |  ₹6	₹21	-	₹979
// 7   |  ₹7	₹28	₹14 ✓	₹986
// 8	 |  ₹8	₹36	-	₹978
// 9	 |  ₹9	₹45	-	₹969
// 10	 |  ₹10	₹55	-	₹959
// 11	 |  ₹11	₹66	-	₹948
// 12	 |  ₹12	₹78	-	₹936
// 13	 |  ₹13	₹91	-	₹923
// 14	 |   ₹14	₹105	₹52 ✓	₹961

let balance = 1000; // Initial balance
let totalSpent = 0; // Track total spending
let day = 0; // Current day

while (balance >= 0) {
    day = day + 1; // Increment day
    totalSpent = totalSpent + day; // Add daily spend
    balance = balance - day; // Deduct daily spend from balance
    
    // Check if it's the 7th day for cashback
    if (day % 7 === 0) {
        let cashback = Math.floor(totalSpent / 2); // Calculate cashback (half of total spent, rounded down)
        balance = balance + cashback; // Add cashback to balance
        totalSpent = 0; // Reset total spent after cashback
    }
}

// Print the day when balance becomes negative
console.log(day);
