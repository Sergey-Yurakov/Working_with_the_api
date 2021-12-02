import React, {useState, useEffect} from "react";

function PlaceholderPostHook() {

    //This state
    const [posts, setPosts] = useState([]);

    //This effect
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then(response => response.json())
            .then( data => {
                console.log(data);
                setPosts(data);
            })
    }, [] );

    return(
        <>
            <h1>Posts</h1>

                {posts.map( (item =>
                    <section key={item.id}>
                    <h2> {item.id} {item.title} </h2>
                    <p> {item.body} </p>
                    </section>
                ))}

        </>
    );
}

export default PlaceholderPostHook;