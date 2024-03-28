import { useState } from "react";
import styles from "./App.module.css";
import mobileBackgroundPattern from "./assets/images/background-pattern-mobile.svg";

function App() {
  console.log("App is being rendered");
  const questionsAndAnswers = [
    {
      question: `What is Frontend Mentor, and how will it help me?`,
      answer: `Frontend Mentor offers realistic coding challenges to help developers improve their 
    frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
    all levels and ideal for portfolio building.`,
    },
    {
      question: `Is Frontend Mentor free?`,
      answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
    option providing access to a range of projects suitable for all skill levels.`,
    },
    {
      question: `Can I use Frontend Mentor projects in my portfolio?`,
      answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
      way to showcase your skills to potential employers!`,
    },
    {
      question: `How can I get help if I'm stuck on a Frontend Mentor challenge?`,
      answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
      channel where you can ask questions and seek support from other community members.`,
    },
  ];
  console.log("Were the questionsAndAnswers well")
  const isEnabled = new Array(questionsAndAnswers.length).fill(false);
  const [enabledState, setEnabledState] = useState(isEnabled);
  console.log("Do we make it here?");
  return (
    <div className={styles.colouredBackground}>
 
    </div>
  );
}

export default App;

{/* <div className={styles.faqContainer}>
<h1>FAQs</h1>

</div> */}
// {questionsAndAnswers.map(({ question, answer }, index) => (
//   <React.Fragment>
//     {index > 0 ? <hr className={style.divider}></hr> : <></>}
//     <Information
//       question={question}
//       answer={answer}
//       key={index}
//       enabledState={enabledState}
//       setEnabledState={setEnabledState}
//     />
//   </React.Fragment>
// ))}