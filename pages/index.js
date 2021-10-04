import { gql, useQuery } from "@apollo/client";

import Link from 'next/link';

const getAllProductsQuery = gql`
  query getAllProducts{
    getAllProducts{
      _id  
      name
        description
        images
        
      }
  }
`;
const Home=()=>{
  const{data,loading,error}=useQuery(getAllProductsQuery)
  if(loading) return (<>
  <div className="preloader-wrapper big active">
  <div className="spinner-layer spinner-blue-only">
    <div className="circle-clipper left">
      <div className="circle"></div>
    </div><div className="gap-patch">
      <div className="circle"></div>
    </div><div className="circle-clipper right">
      <div className="circle"></div>
    </div>
  </div>
</div>
<div class="preloader-wrapper active">
    <div class="spinner-layer spinner-red-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>

  <div class="preloader-wrapper small active">
    <div class="spinner-layer spinner-green-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
   
</>
)
  if(error) return <h1>error:{error.message}</h1>
  if(data)
  console.log(data)
  const productList = data.getAllProducts.map(product=>{
    return(
     <div className="card pcard pad" key={product._id}>
     <div className="card-image">
       <img  className="ig" src={product.images[0]} />
       <span className="card-title">{product.name}</span>
     </div>
     <div className="card-action">
      <Link href={'/product/[id]'} as={`/product/${product._id}`}><a>KNOW MORE</a></Link>
    </div>

     
    
   </div>
    )
  })
  return (<div className="rootcard">{productList}</div>)
}
export  default Home
