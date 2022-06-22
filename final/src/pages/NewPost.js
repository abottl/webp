import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import '../pages/NewPost.css';
import '../pages/NewPost.css';
//import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/compat/storage'
// import {useAuth} from '../utils/firebase';
import {collection, doc, getFirestore} from 'firebase/firestore';
import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import firebase from '../utils/firebase.js';
import preview from './image1.jpeg';


function NewPost({}) {
    const [content,setContent]=useState('');
    const [file,setFile]=useState();
    const imgUrl=file? URL.createObjectURL(file):preview;
    const navigate=useNavigate();
    
    //const currentUser=useAuth();
    const handleSubmit=()=>{//按下送出
        if(!file){
            alert('please choose the img file to update');
            return;
        }
    
        const collectionnn=firebase.firestore().collection('posts').doc();
        const fileRef=firebase.storage().ref('post-images/'+collectionnn.id);
        const metadata={
            contentType:file.type
        }
        
        fileRef.put(file,metadata).then(() =>{
            fileRef.getDownloadURL().then((imgUrl) => {
                collectionnn.set({
                    content,
                    createdAt:firebase.firestore.Timestamp.now(),
                    author: {
                        displayName: firebase.auth().currentUser.displayName || '',
                        photoURL: firebase.auth().currentUser.photoURL || '',
                        uid: firebase.auth().currentUser.uid,
                        email: firebase.auth().currentUser.email,
                    },
                    imgUrl,
                })
                .then(()=>{
                        navigate('/');
                    })
                });
                
            })
        }
    
    
    
    return (
        <div className='con'>
            <div className='title'>
                <p className='t'>發布文章</p>
            </div>
            <label htmlFor='post-img' className='newpost_img-btn'>上傳圖片</label>
            
            <div className="space">
            <img className='post_image' src={imgUrl} alt='' />
            <input type="file" accept="image/png, image/jpeg" id="post-img" style={{display:'none'}} onChange={(e)=>setFile(e.target.files[0])}></input>
            </div>
            <div className="newpost_content">
                <textarea rows="10" cols="60" className="newpost_content-input" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
            </div>
            <button className="newpost_send" onClick={()=>handleSubmit()}
            >  
                Post
            </button>
        </div>
    );
}

export default NewPost;