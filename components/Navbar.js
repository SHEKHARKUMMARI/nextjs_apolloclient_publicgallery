import Link from 'next/link';
import Router from 'next/router'
import {useRouter} from 'next/router'

const Navbar=()=>{
  const router = useRouter()
  function isActive(route){
    if(route== router.pathname){
        return "active"
    }
    else ""
 }

  return (
    <nav>
    <div className="nav-wrapper #1565c0 blue darken-3">
      <Link href='/'><a  className="brand-logo center np">PUBLIC GALLERY</a></Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className={isActive('/create')}><Link href="/create"><a >
        <i className="material-icons right">add</i>ADD TO GALLERY</a></Link></li>
        
      </ul>
    </div>
  </nav>

  )
}
export default Navbar