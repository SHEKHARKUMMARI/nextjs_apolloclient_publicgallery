import { gql, useMutation } from '@apollo/client';

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from "react";

const ADD_MUT=gql`mutation addProduct($name: String!,$description: String!,$price: Int!,$quantity: Int!,$images: String!){
  addProduct(name:$name,description:$description,price:$price,quantity:$quantity,images:$images){
    _id
    images
    name
  }
}`;
const Create=()=>{
  const router = useRouter();
    const [name,setName] = useState("");
   const [price,setPrice] = useState(20);
   const [qt,setQt]=useState(2);
   const [media,setMedia] = useState("");
   const [description,setDescription] = useState("");
   const [addphoto, { data, loading, error }] = useMutation(ADD_MUT,{onCompleted:()=>router.push('/')});

  

      if (loading) return(   <div class="progress">
      <div class="indeterminate"></div>
  </div>
);
      if (error) return `Submission error! ${error.message}`;
return(
    <form className="container" onSubmit={ (e) => {
      e.preventDefault();
      console.log( { name,description,price,quantity:qt,images:media },"debug")
       addphoto({ variables: { name,description,price,quantity:qt,images:media } });
      
    }}>
        <input type="text" name="name" placeholder="Name" 
        value={name} 
        onChange={(e)=>{setName(e.target.value)}}
        />
        
       <input type="text"  placeholder="please enter url of your photo"
            value={media} onChange={(e)=>setMedia(e.target.value)}
           />
       <textarea name="description" 
       placeholder="Description"
        value={description} 
        onChange={(e)=>{setDescription(e.target.value)}}
        className="materialize-textarea" ></textarea>
         <button className="btn waves-effect waves-light #1565c0 blue darken-3" type="submit">ADD
           <i className="material-icons right">add</i>
         </button>
    </form>
   )
 }
export default Create