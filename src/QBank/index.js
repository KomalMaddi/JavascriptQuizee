const qBank = [
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    answers: [" <javascript>", "<scripted>", "<script>", "<js>"],
    correct: "<script>",
    questionId: "099099"
  },
  {
    question:
      ' Choose the correct JavaScript syntax to change the content of the following HTML code.',
    answers: ["document.getElement(“geek”).innerHTML=”I am a Geek”;", "document.getElementById(“geek”).innerHTML=”I am a Geek”;", "document.getId(“geek”)=”I am a Geek”;", "document.getElementById(“geek”).innerHTML=I am a Geek;"],
    correct: "document.getElementById(“geek”).innerHTML=”I am a Geek”;",
    questionId: "183452"
  },
  {
    question:
      "Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?",
    answers: [" alertbox(“GeeksforGeeks”);", " msg(“GeeksforGeeks”);", "msgbox(“GeeksforGeeks”);", "alert(“GeeksforGeeks”);"],
    correct: "alert(“GeeksforGeeks”);",
    questionId: "267908"
  },
  {
    question: "What is the correct syntax for referring to an external script called “geek.js”",
    answers: [
      "<script src=”geek.js”>",
      "<script href=”geek.js”>",
      "<script ref=”geek.js”>",
      "<script name=”geek.js”>"
    ],
    correct: "<script src=”geek.js”>",
    questionId: "333247"
  },
  {
    question: "The external JavaScript file must contain <script> tag. True or False?What is the most common surname Wales?",
    answers: ["True", "False"],
    correct: "False",
    questionId: "496293"
  },
  {
    question:
      "Which of the following is not a reserved word in JavaScript?",
    answers: [
      "interface",
      "throws",
      "program",
      "short"
    ],
    correct: "program",
    questionId: "588909"
  },
  {
    question:
      'Which of the following type of variable is visible only within a function where it is defined?',
    answers: ["global variable", "local variable", "Both of the above", "None of the above"],
    correct: "local variable",
    questionId: "648452"
  },
  {
    question: "Which of the following code creates an object?",
    answers: ["var book = Object();", "var book = new Object();", "var book = new OBJECT();", "var book = new Book();"],
    correct: "var book = new Object();",
    questionId: "786649"
  },
  {
    question:
      "What is the syntax for creating a function in JavaScript named as Geekfunc? ",
    answers: ["function = Geekfunc() ", "function Geekfunc() ", "function := Geekfunc() ", "function : Geekfunc()"],
    correct: "function Geekfunc() ",
    questionId: "839754"
  },
  {
    question:
      "How is the function called in JavaScript?",
    answers: [
      "call Geekfunc();",
      "call function GeekFunc();",
      " Geekfunc()",
      " function Geekfunc()"
    ],
    correct: " Geekfunc()",
    questionId: "98390"
  },
  {
    question: "How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 5?",
    answers: [" if(i<>5)", "if i<>5 ", "if(i!=5) ", "if i!=5"],
    correct: "if(i!=5) ",
    questionId: "1071006"
  },
  {
    question: "What is the correct syntax for adding comments in JavaScript?",
    answers: ["<!–This is a comment–&gt ", "<!–This is a comment–&gt ", "–This is a comment ", "**This is a comment**"],
    correct: "<!–This is a comment–&gt ",
    questionId: "1174154"
  },
  {
    question: " How to insert a multi-line comment in JavaScript?",
    answers: ["<!–This is comment line 1 This is comment line 2–&gt ", "//This is comment line 1 This is comment line 2// ", "/*This is comment line 1 This is comment line 2*/", " **This is comment line 1 This is comment line 2**"],
    correct: "/*This is comment line 1 This is comment line 2*/ ",
    questionId: "1226535"
  },
  {
    question: "What is the JavaScript syntax for printing values in Console",
    answers: ["print(5)", "console.log(5); ", "console.print(5); ", "print.console(5);"],
    correct: "console.log(5); ",
    questionId: "1310938"
  },
  {
    question: "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?",
    answers: ["strip() ", "trim() ", " stripped() ", "trimmed()"],
    correct: "trim() ",
    questionId: "1436873"
  },
 
  {
    question: "The syntax of a blur method in a button object is ______________",
    answers: ["Blur()", "Blur(contrast)", "Blur(value)", "Blur(depth)"],
    correct: "Blur()",
    questionId: "4049121"
  },
  {
    question:
      "The syntax of close method for document object is ______________",
    answers: ["Close(doC.", "Close(object)", "Close(val)", "Close()"],
    correct: "Close()",
    questionId: "4150746"
  },
  {
    question:
      "Choose the client-side JavaScript object:",
    answers: ["Database", "Cursor", "Client", "FileUpLoad"],
    correct: "FileUpLoad",
    questionId: "4235063"
  },
  {
    question: "What is mean by this keyword in javascript?",
    answers: [" It refers current object", "It referes previous object", "It is variable which contains value", "None of the above"],
    correct: " It refers current object",
    questionId: "4321002"
  },
  {
    question: "Which was the first browser to support JavaScript?",
    answers: [
      "Mozilla Firefox",
      "Netscape",
      "Google Chrome",
      "IE"
    ],
    correct: "Netscape",
    questionId: "4442286"
  },
  {
    question: "JavaScript is ________ language.",
    answers: [
      "a compiled",
      "an interpreted"
    ],
    correct: "an interpreted",
    questionId: "4564430"
  },
  {
    question: "JavaScript is a ________ Side Scripting Language.",
    answers: ["Server", "ISP", "Browser", "None of the above"],
    correct: "CBrowser",
    questionId: "4630606"
  },
  {
    question:
      " Which function of an Array object calls a function for each element in the array?",
    answers: ["forEach()", "every()", "forEvery()", "each()"],
    correct: "forEach()",
    questionId: "4795960"
  },
  {
    question: "Which of the following is an advantage of using JavaScript?",
    answers: ["Increased interactivity.", "Less server interaction.", " Immediate feedback from the users.", " All of the above."],
    correct: " All of the above.",
    questionId: "4811162"
  },
  {
    question: " In JavaScript, we do not have datatypes like integer and float. What is the function that can be used to check if the number is an integer or not?",
    answers: ["Integer(value)", "ifInteger(value)", "isInteger(value)", "ifinteger(value)"],
    correct: " isInteger(value)",
    questionId: "4982981"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
