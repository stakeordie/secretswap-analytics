import { Link } from "react-router-dom";
import secretswap_logo from '../../assets/secret-swap.svg';
const Sidebar = ()=>{
    
    const path = window?.location?.pathname;
    let cls_overview,cls_tokens= '';
    // let cls_pairs  =''


    if(path === '/overview'){
        cls_overview='active';
    }
    if(path === '/tokens'){
        cls_tokens='active';
    }
    // if(path === '/pairs'){
    //     cls_pairs='active';
    // }

    return(
        <aside className='sidebar'>
            <div className='icon-container'><img src={secretswap_logo} alt="" /></div>
            <ul>
                <li className={cls_overview}>
                    <Link to='/overview'>Overview</Link>
                </li>
                <li className={cls_tokens}>
                    <Link to='/tokens'>Tokens</Link>
                </li>
                {/* <li className={cls_pairs}>
                    <Link to='/pairs'>Pairs</Link>
                </li> */}
            </ul>
        </aside>
    ) 
}

export default Sidebar;