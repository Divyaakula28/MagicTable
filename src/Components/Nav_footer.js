import "../CSS/templates.css";
import logo from '../Images/logo-no-background.png';
import { Navbar, NavbarBrand } from 'reactstrap';
import Footer from '../Components/Footer';

function Nav_footer() {
  return (
    <>
      <div className="App ">
        <Navbar>
          <div>
          <NavbarBrand className="logoofMT" href="https://divyaakula28.github.io/MagicTable/#/"><img alt="" src={logo} width="100" height="60"/></NavbarBrand>
            <div>
            <NavbarBrand href="https://divyaakula28.github.io/MagicTable/#/" className='heading'>Magic Table</NavbarBrand>
            </div>
          </div>

        </Navbar>
        <Footer/>
      </div>

    </>
  );
}

export default Nav_footer;
/*
<NavbarBrand href="/"><img
              alt=""
              src={mainlogo}
              width="100"
              height="100"
              className="d-inline-block align-top"
            /><p>magic Table</p></NavbarBrand>

    */