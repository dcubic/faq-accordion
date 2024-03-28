import styles from "./Information.module.css";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

function Information({
  question,
  answer,
  index,
  enabledState,
  setEnabledState,
}) {
  function handleClick() {
    const modifiedState = [...enabledState];
    modifiedState[index] = !modifiedState[index];
    setEnabledState(modifiedState);
  }

  return (
    <div>
      <div className={styles.questionSelector} onClick={() => handleClick()}>
        <h2 className={styles.question}>{question}</h2>
        {enabledState[index] ? (
          <img src={minusIcon}></img>
        ) : (
          <img src={plusIcon}></img>
        )}
      </div>
      {enabledState[index] ? <p className={styles.answer}>{answer}</p> : <></>}
    </div>
  );
}

export default Information;