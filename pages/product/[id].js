import { gql, useQuery } from "@apollo/client";

import { useRouter } from 'next/router';

const getProductByIdQuery = gql`
    query getProductById($id: ID!) {
      getProductById( id: $id ) {
        name
        description
        images
        
        }
    }
`;
const Product=()=>{
    const router = useRouter()
    const { id } = router.query
    const { loading, error, data } = useQuery( getProductByIdQuery, {
        variables: {id},
      });
      if(loading) return (<>
      
    <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-red">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-yellow">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>

      <div class="spinner-layer spinner-green center">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>

      </>)
      if(error) return <h1>error:{error.message}</h1>
      if(data)
      console.log(data)
      const product=data.getProductById;
    return (
      <div className="container center-align ig3" >
            <h3>{product.name}</h3>
            <img src={product.images[0]} style={{width:'30%'}} />
                 <p  className="center-align">
              {product.description}
            </p>
            
        </div>
    )
}
export default Product
