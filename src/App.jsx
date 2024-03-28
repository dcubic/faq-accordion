import { useState } from "react";
import styles from "./App.module.css";
import Information from "./components/Information.jsx";

import starIcon from "./assets/images/icon-star.svg";
import mobileBackgroundPattern from "./assets/images/background-pattern-mobile.svg";

function App() {
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
  const isEnabled = new Array(questionsAndAnswers.length).fill(false);
  const [enabledState, setEnabledState] = useState(isEnabled);
  return (
    <>
      <div className={styles.colouredBackground}></div>
      <div className={styles.backgroundImage}></div>
      <div className={styles.faqContainer}>
        <div className={styles.faqHeader}>
          <img src={starIcon} className={styles.starIcon}></img>
          <h1 className={styles.title}>FAQs</h1>
        </div>
        {questionsAndAnswers.map(({ question, answer }, index) => (
          <>
            {index > 0 && <hr className={styles.divider} />}
            <Information
              question={question}
              answer={answer}
              index={index}
              enabledState={enabledState}
              setEnabledState={setEnabledState}
            />
          </>
        ))}
      </div>
    </>
  );
}

export default App;
