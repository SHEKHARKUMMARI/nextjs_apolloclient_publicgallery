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
  <div className="preloader-wrapper big active cnt">
  <div className="spinner-layer spinner-blue-only loader">
    <div className="circle-clipper left">
      <div className="circle"></div>
    </div><div className="gap-patch">
      <div className="circle"></div>
    </div><div className="circle-clipper right">
      <div className="circle"></div>
    </div>
  </div>
</div>
</>
)
  if(error) return <h1>error:{error.message}</h1>
  const productList = data.getAllProducts.map(product=>{
    return(
     <div className="card pcard pad" key={product._id}>
     <div className="card-image">
       <img  height="400px" width="400px" src={product.images[0]} alt="size is less"/>
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