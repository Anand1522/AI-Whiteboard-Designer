/*====================================================
 AI Whiteboard Designer
 Day 24 - 30 Days 30 AI Websites Challenge
 Final JavaScript
=====================================================*/

const topic = document.getElementById("topic");
const style = document.getElementById("style");
const complexity = document.getElementById("complexity");
const boardTheme = document.getElementById("boardTheme");
const goal = document.getElementById("goal");
const nodes = document.getElementById("nodes");

const board = document.getElementById("board");

const generateBtn = document.getElementById("generateBtn");
const randomBtn = document.getElementById("randomBtn");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");

const wordCount = document.getElementById("wordCount");
const nodeCount = document.getElementById("nodeCount");
const timeCount = document.getElementById("timeCount");

const themeBtn = document.getElementById("themeBtn");

/* ============================================
   Random Demo Ideas
============================================ */

const demoIdeas = [

"AI Smart Attendance System",

"AI Resume Analyzer",

"AI Interview Coach",

"AI Medical Diagnosis Assistant",

"AI Fraud Detection Platform",

"AI Contract Reviewer",

"AI Code Explainer",

"AI Finance Dashboard",

"AI Crop Disease Detection",

"AI Smart Traffic Management",

"AI Workflow Automation",

"AI Whiteboard Designer",

"AI Research Assistant",

"AI Travel Planner",

"AI Business Idea Generator"

];

/* ============================================
   Node Templates
============================================ */

const titles = [

"Problem",

"Goal",

"Requirements",

"Data",

"AI Processing",

"Workflow",

"Architecture",

"Output",

"Benefits",

"Challenges",

"Future Scope",

"Deployment"

];

/* ============================================
   Update Word Count
============================================ */

topic.addEventListener("input", updateWordCount);

function updateWordCount(){

let words = topic.value.trim();

if(words===""){

wordCount.textContent = 0;
return;

}

wordCount.textContent =
words.split(/\s+/).length;

}

/* ============================================
   Generate Whiteboard
============================================ */

generateBtn.addEventListener("click", generateBoard);

function generateBoard(){

const value = topic.value.trim();

if(value===""){

alert("Please enter a whiteboard topic.");

return;

}

const start = performance.now();

const totalNodes = Number(nodes.value);

board.innerHTML="";

const title = document.createElement("h1");

title.className="whiteboard-title";

title.textContent=value;

board.appendChild(title);

const layout=document.createElement("div");

layout.className="board-layout";

for(let i=0;i<totalNodes;i++){

const card=document.createElement("div");

card.className="node";

const heading=titles[i%titles.length];

card.innerHTML=`

<h3>${heading}</h3>

<p>

${generateParagraph(
heading,
value
)}

</p>

`;

layout.appendChild(card);

}

board.appendChild(layout);

applyTheme();

nodeCount.textContent=totalNodes;

const end=performance.now();

timeCount.textContent=
((end-start)/1000).toFixed(2)+"s";

}

/* ============================================
   AI Paragraph Generator
============================================ */

function generateParagraph(section,topic){

const map={

Problem:
`${topic} solves an important real-world challenge by identifying existing issues and improving efficiency through AI-powered automation.`,

Goal:
`Create an intelligent ${style.value.toLowerCase()} that clearly explains the system while keeping the design simple, organized and visually engaging.`,

Requirements:
`Requires datasets, AI models, frontend interface, backend services, cloud storage and user-friendly visualization.`,

Data:
`Collect structured and unstructured information which is cleaned, processed and transformed before AI analysis.`,

"AI Processing":
`Machine learning algorithms analyze patterns, generate predictions, summarize insights and improve decision-making.`,

Workflow:
`Input → Validation → AI Processing → Visualization → Output → User Feedback → Continuous Improvement.`,

Architecture:
`Frontend communicates with backend APIs which connect to AI engines, databases and cloud infrastructure.`,

Output:
`Generates organized whiteboard diagrams, intelligent summaries and actionable recommendations.`,

Benefits:
`Improves productivity, learning speed, collaboration, planning and communication while reducing manual effort.`,

Challenges:
`Data quality, scalability, privacy, explainability and computational performance must be carefully managed.`,

"Future Scope":
`Can integrate Generative AI, voice interaction, collaborative editing and real-time cloud synchronization.`,

Deployment:
`Deploy using HTML, CSS, JavaScript with modern hosting platforms for fast global accessibility.`

};

return map[section];

}

/* ============================================
   Apply Theme
============================================ */

function applyTheme(){

const cards=document.querySelectorAll(".node");

let colors=[];

switch(boardTheme.value){

case "Modern Blue":

colors=["#2563eb","#0ea5e9"];

break;

case "Dark Glass":

colors=["#1f2937","#374151"];

break;

case "Pastel":

colors=["#8b5cf6","#ec4899"];

break;

case "Minimal":

colors=["#059669","#10b981"];

break;

default:

colors=["#2563eb","#0ea5e9"];

}

cards.forEach(card=>{

card.style.background=
`linear-gradient(135deg,${colors[0]},${colors[1]})`;

});

}

/* ============================================
   Random Topic
============================================ */

randomBtn.addEventListener("click",()=>{

const random=
demoIdeas[
Math.floor(Math.random()*demoIdeas.length)
];

topic.value=random;

updateWordCount();

});

/* ============================================
   Clear
============================================ */

clearBtn.addEventListener("click",()=>{

topic.value="";
goal.value="";

wordCount.textContent=0;

nodeCount.textContent=0;

timeCount.textContent="0s";

board.innerHTML=`

<div class="placeholder">

<div class="placeholder-icon">

🧠

</div>

<h2>

Your AI Whiteboard

</h2>

<p>

Enter a topic and click
<strong>Generate Board</strong>

</p>

</div>

`;

});

/* ============================================
   Export
============================================ */

downloadBtn.addEventListener("click",()=>{

const content=board.innerText;

const blob=new Blob([content],{

type:"text/plain"

});

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download="AI_Whiteboard.txt";

link.click();

URL.revokeObjectURL(link.href);

});

/* ============================================
   Theme Toggle
============================================ */

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeBtn.textContent="☀️";

}else{

themeBtn.textContent="🌙";

}

});

/* ============================================
   Keyboard Shortcut
============================================ */

document.addEventListener("keydown",(e)=>{

if(e.ctrlKey && e.key==="Enter"){

generateBoard();

}

});

/* ============================================
   Initial Stats
============================================ */

updateWordCount();