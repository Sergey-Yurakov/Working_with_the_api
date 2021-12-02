import React, {useState} from "react";

function CommentHook() {

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
            <h1>Comments</h1>
            {comments.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </>
    );
}

export default CommentHook;