import React, {useState} from "react";
// import CommentsListHook from "./CommentsListHook";
import Comments2ListHook from "./Comments2ListHook";

function Comment2Hook() {

    const [comments, setComments] = useState([]);

    let  selectHandler = (e) => {
        console.log(e.target.value);

        fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}/comments`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setComments(data);
            })
    }

    return(
        <>
            <div>
                <p>Choose post ID:</p>
                <select onChange={selectHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
           <Comments2ListHook data={comments}/>
        </>
    );
}

export default Comment2Hook;