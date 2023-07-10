import { useState } from "react";
import Newpost from "./Newpost";
import Post from "./post";
import classes from "./postlist.module.css";
import Modal from "../Ui/Modal";

const PostList = ({ onClose, showModal }) => {
  // const [enterAuthor, setAuthor] = useState("");
  // const [enterText, setText] = useState("");

  // const changeAuthorHandler = (e) => {
  //   setAuthor(e.target.value);
  // };

  // const changeTextHandler = (e) => {
  //   setText(e.target.value);
  // };
  const [data, setData] = useState([])

  const createNewData = (newData) => {
    setData(prev => prev.concat(newData))
  }

  return (
    <div>
      {showModal && <Modal onClose={onClose}>
        <Newpost
          // onChangeAuth={changeAuthorHandler}
          // onChangeText={changeTextHandler}
          recieve={createNewData}
          onCancel={onClose}
        />
      </Modal>}
      {data.length > 0 && <ul className={classes.post}>
        {data.map(item => {
          return <Post text={item.text} author={item.author} key={item.id} />
        })}
      </ul>}
      {data.length === 0 && (
        <div className={{textAlign:'center', color:'white'}}> 
          <h2>There are no post</h2>
        </div>
      )}
    </div>
  );
};

export default PostList;
