import {createContext, useEffect} from 'react'
export const Post=createContext()

const PostProvider = ({children}) => {
    console.log('post');
    useEffect(()=> console.log('postEffect will mount'), [])
    useEffect(()=> console.log('postEffect did mount'))
    return (
        <Post.Provider value={'om'}>
            {children}
        </Post.Provider>
    );
};

export default PostProvider;