import { style } from "./Information.module.css";
import plusIcon from "../assets/images/icon-plus.svg";
import minusIcon from "../assets/images/icon-minus.svg";

function Information({ question, answer, key, enabledState, setEnabledState }) {
  function handleClick() {
    const modifiedState = [...enabledState];
    modifiedState[key] = !modifiedState[key];
    setEnabledState(modifiedState);
  }

  return (
    <div>
      <div className={style.questionSelector}>
        <h2 className={style.question}>{question}</h2>
        {enabledState[key] ? (
          <img src={minusIcon}></img>
        ) : (
          <img src={plusIcon}></img>
        )}
      </div>
      {enabledState[key] ? <p className={style.answer}>{answer}</p> : <></>}
    </div>
  );
}
