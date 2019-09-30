import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectorCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";
import { signOutStart} from "../../redux/user/user.actions";

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLInk} from './header.style'

const Header = ({currentUser,hidden,signOutStart})=>(
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo'/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLInk to='/shop' >
                SHOP
            </OptionLInk>
            <OptionLInk to='/shop' >
                CONTACT
            </OptionLInk>
            {
                currentUser ?
                    <OptionLInk as='div' onClick={signOutStart}>
                        SIGN OUT
                    </OptionLInk>
                    :
                    <OptionLInk  to='/signin'>
                        SIGN IN
                    </OptionLInk>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown />
        }
    </HeaderContainer>
);


const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectorCartHidden
});

const mapDispatchToProps = dispatch =>({
    signOutStart : () => dispatch(signOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);

