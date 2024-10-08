import { useState } from 'react'
import './App.css'

const problems1 = [{
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


function App() {

  const [problems,setProblems]=useState([]);
  

  return (
    <div>
      <input type="text" placeholder="email"></input>
      <input type="text" placeholder="password"></input>
      <button>Sign In</button>
      <div>
        <button onClick={()=>{setProblems(problems=>problems1)}}>1</button>
        <button onClick={()=>{setProblems(problems=>problems2)}}>2</button>
      </div>
      <div>
        {problems.map(problem => <ProblemStatement
          title={problem.title}
          acceptance={problem.accpetance}
          difficulty={problem.difficulty}
         />)}
      </div>
    </div>

  )
}


function ProblemStatement(props) {
  const title = props.title;
  const acceptance = props.acceptance;
  const difficulty = props.difficulty;

  return <tr>
    <td>
      {title}
    </td>
    <td>
      {acceptance}
    </td>
    <td style={{color:difficulty==="Medium"?"Yellow":"red"}}>
      {difficulty}
    </td>
  </tr>
}

export default App
