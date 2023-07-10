import classes from "./mainhead.module.css";
import { MdPostAdd, MdMessage } from 'react-icons/md';

const MainHeader = ({onOpen}) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick={onOpen}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
