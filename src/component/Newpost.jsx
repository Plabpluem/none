import { useReducer, useState } from "react";
import classes from "./newpost.module.css";

const Newpost = (props) => {
  const [enterAuthor, setAuthor] = useState("");
  const [enterText, setText] = useState("");

  const changeAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const changeTextHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = event => {
    event.preventDefault()
    const sendData = {
      id: Math.random().toString(),
      text:enterText,
      author: enterAuthor
    }
    console.log(sendData)
    props.recieve(sendData)
    props.onCancel()
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="Text">Text</label>
        <textarea id="body" required rows={2} placeholder="Something here" onChange={changeAuthorHandler} />
        <p>{enterText}</p>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" required placeholder="your name" onChange={changeTextHandler} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button>Confirm</button>
      </div>
    </form>
  );
};

export default Newpost;
