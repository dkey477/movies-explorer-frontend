import './NavTab.css'; 
import { HashLink } from 'react-router-hash-link';


function NavTab() {
  return (
    <nav className='navtab'>
        <HashLink className='link navtab__link' to='/#project'>О проекте</HashLink>
        <HashLink className='link navtab__link' to='/#techs'>Технологии</HashLink>
        <HashLink className='link navtab__link' to='/#student'>Студента</HashLink>
    </nav>
  );
}


export default NavTab