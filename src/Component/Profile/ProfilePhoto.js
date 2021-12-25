import React from 'react'
import Img from './photo.jpg'; 
const ProfilePhoto = () => {
    return (
        <div>
           <img src={Img} height={400} width={400}/>
        </div>
    )
}

export default ProfilePhoto;
