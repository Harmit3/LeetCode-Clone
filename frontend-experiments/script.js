 

        const problems = [{
            title: "201. Bitwise AND of Numbers Range",
            difficulty: "Medium",
            accpetance: "42%",

        },
        {
            title: "202. Happy Number",
            difficulty: "Easy",
            accpetance: "56.9%",

        },
        {
            title: "203. Remove Linked List Elements",
            difficulty: "Easy",
            accpetance: "50.1%",

        },
        {
            title: "205. Isomorphic Strings",
            difficulty: "Easy",
            accpetance: "45.8%",

        },
        {
            title: "206. Reverse Linked List",
            difficulty: "Easy",
            accpetance: "77.8%",

        },
        {
            title: "207. Course Schedule",
            difficulty: "Medium",
            accpetance: "47.6%",

        },
        {
            title: "208. Implement Trie (Prefix Tree)",
            difficulty: "Medium",
            accpetance: "66.5%",

        },
        ];


        const problems2 = [{
            title: "209. Lorem",
            difficulty: "Medium",
            accpetance: "40%",

        },
        {
            title: "210. Lorem123",
            difficulty: "Easy",
            accpetance: "40%",

        },
        {
            title: "211. Lorem111213",
            difficulty: "Easy",
            accpetance: "40%",

        }];

        function renderProblems1(){
            const parentEl = document.getElementById("problem-statements");
            parentEl.innerHTML="";
            renderProblems(problems);
        }
        
        function renderProblems2(){
            const parentEl = document.getElementById("problem-statements");
            parentEl.innerHTML="";
            renderProblems(problems2);
        }
        function renderProblems(problemsProvided) {
            const parentEl = document.getElementById("problem-statements");
            const tableTag = document.createElement("table");
            for (let i = 0; i < problemsProvided.length; i++) {
                const trTag = document.createElement("tr");
                const tdEl1 = document.createElement("td");
                tdEl1.innerHTML = problemsProvided[i].title;
                const tdEl2 = document.createElement("td");
                tdEl2.innerHTML = problemsProvided[i].difficulty;
                const tdEl3 = document.createElement("td");
                tdEl3.innerHTML = problemsProvided[i].accpetance;

                trTag.appendChild(tdEl1);
                trTag.appendChild(tdEl2);
                trTag.appendChild(tdEl3);
                tableTag.appendChild(trTag);

            }
            
            parentEl.appendChild(tableTag);
        }
        //renderProblems();
    

