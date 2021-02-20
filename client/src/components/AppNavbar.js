import {Component} from 'react'; 
import {Collapse, Navbar, NavbarToggler, NavbarBrand, 
    Nav, NavItem, NavLink, Container} from 'reactstrap';
    
class AppNavbar extends Component {
    state = {
        isOpen: false
    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };
    render(){
        return(
            <div>
                <Navbar className="mb-5" color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://github.com/bilal05476">
                                        GitHub
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
    
}

export default AppNavbar;