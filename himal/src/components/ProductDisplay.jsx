import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';

function ProductDisplay() {
    let {id} = useParams();
    const [postObject, setPostObject] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3005/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
            // console.log(response);

        });
    });

  return (
    <div className='postpage'>
        <div className='pname'>
            {postObject.product_name}
        </div>
        <div className='pdes'>
            {postObject.product_desc}
        </div>
        <div className='pprice'>
            {postObject.price}
        </div>
        <div className='right'>
            <div className='addCommentContainer'>
                <input type="text"></input>
                <button> Add Comment</button>
            </div>
            <div className='ListofComments'></div>
        </div>
    </div>
  )
}

export default ProductDisplay;