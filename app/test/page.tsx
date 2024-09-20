import { link } from 'fs';
import React from 'react'
interface course{
    id:number;
    title : string;
    description :string ;
}
const course = async () => {
    const res =  await fetch('api/courses');
    const users :course[] = await res.json();
  return (
    <div>
         <h1>test fetching from the serve side for speed and seo</h1>
           {users.map(user => <li key={user.id}>{user.title}</li>)}
    </div>
  )
}

export default course;