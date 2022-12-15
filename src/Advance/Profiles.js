import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import RouterLink from "../RoutesLink";

function Profiles() {

    const navigate = useNavigate()

    // const { userId = 1 } = useParams()
    // var vari = userId
    // console.log('userID', userId)
    const [search, setSearch] = useSearchParams();

    const limit = search.get('limit');
    console.log(limit)


    // console.log(search.get('age:10'))
    // console.log('userID', userId)
    const [post, setPost] = useState([])
    const [data, setData] = useState([])
    // console.log('posts', post)
    const [id, setId] = useState()

    useEffect(() => {
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        //     .then(res => {
        //         console.log('line 17', res)
        //         setPost(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        fetch(`https://jsonplaceholder.typicode.com/posts/${limit}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log('data', data);
                setPost(data)
            })
    }, [limit])


    useEffect(() => {
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        //     .then(res => {
        //         console.log('line 17', res)
        //         setPost(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log('data', data);
                setData(data)
            })
    }, [])
    return (
        <div>
            <label><b>Number:  </b></label>
            <input type='text' value={limit} onChange={e => setSearch(e.target.value)} />
            <p><b><ul>ID:</ul></b> {post.id}</p>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <br />
            <h1>Data fetched Belowx</h1>

            {/* 
            {
                post.filter(user => user.includes(search)).map((user, i) => {
                    <li key={i}>{user}</li>
                })
            } */}

            <ul>
                <div className="upper">
                    {
                        data && data.map((item, i) => {
                            return (
                                <div key={id} className="lower">
                                    <p>ID: {item.id}</p>
                                    <p>Title: {item.title}</p>
                                    <p>Body: {item.body}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </ul>

            <ul>
                {/* {
                    post && Object.keys(post).map(post=>
                        <li key={post.id}>{post.title}<br/>{post}</li>)
                } */}
            </ul>
            <button onClick={() => navigate(RouterLink.parms)}>Params</button>
        </div>
    )
}

export default Profiles