import React from "react";

function CommentsListHook(props) {
    return(
        <>
            <div>
                {/*<button onClick={onlyEven}>Only even comments</button>*/}
            </div>
            <h1>Comments 2 hook</h1>
            {props.data.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </>
    );
}

export default CommentsListHook;