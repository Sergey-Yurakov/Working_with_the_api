import React, {useState, useEffect} from "react";

function Comments2ListHook(props) {

    const [data, setData] = useState([]);

    let onlyEven = () => {
        let a = data,
            evenPost = a.filter( (post,index) => index % 2 === 0  );
        setData(evenPost);
        console.log( evenPost);

    }

    useEffect(() => {
        console.log('effect');
        if (props.data.length > 0) setData(props.data);
    }, [props]);

    return(
        <>
            <div>
                <br/>
                <button onClick={onlyEven}>Only even comments</button>
            </div>
            <h1>Comments</h1>
            {data.map((el, index) => (
                <section key={el.id}>
                    <p><b>{index + 1}. {el.email}</b></p>
                    <p>{el.body}</p>
                </section>
            ))}
        </>
    );
}

export default Comments2ListHook;