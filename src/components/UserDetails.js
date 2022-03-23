import React from 'react'
import { useParams } from 'react-router-dom';

export const UserDetails = () => {

    // called the hook, the hook returns an object of key value pairs

    // const params= useParams(); const userId=params.userId;
    // or do this
    const {userId}=useParams();
    
  return (
    <div>Details about User {userId}</div>
  )
}
