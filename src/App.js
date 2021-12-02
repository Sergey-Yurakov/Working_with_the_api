import './App.css';
import PlaceholderPostHook from "./PlaceholderPostHook";
import CommentHook from "./CommentHook";
import Comment2Hook from "./Comment2Hook";


function App() {
  return (
    <>
      <PlaceholderPostHook />
        <hr/>
      <CommentHook />
        <hr/>
      <Comment2Hook />
    </>
  );
}

export default App;
