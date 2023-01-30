import React from 'react'
import './navbar.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import SearchinNavbar from './SearchinNavbar.js'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Form2 from './Form2.js'
import Form from './Form.js'
import Cart from './Cart.js'

export default function Navbar() {
    return (
        <div >

            <div className="navtop">
                <div className="phoneno">
                    <LocalPhoneIcon className='phoneicon' />
                    <pre className='origphone'> 05 63 00 00</pre>
                </div>
                <div className="phoneno">
                    <ChatIcon />
                    <pre>Live Chat</pre>
                </div>
            </div>
            <div className="navbottommain">


                <div className="navbottom">
                    <div className="navbottomfirst">
                        <h1 className='logo'>Logo</h1>
                        <div className="navbottomfirstinner">
                            <SearchIcon className='searchicon' />
                            <input type="text" className='navbarinputtext' placeholder='search' />
                            <SearchinNavbar />
                            <Button variant="contained" className='searchbutton'>
                                <SearchIcon className='searchicon' />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="navbottomsecond">
                    <Cart />
                    <NotificationsIcon />
                    <div className="connect">

                        <Form2 />
                        <pre>Login</pre>
                    </div>

                </div>

            </div>


<div className="lastlastnav">
<Link to='/home'>
Home
</Link>
<Link to='/category'>
Categories
</Link>
<Link to='/search'>
Products & Categories
</Link>

</div>
        </div>
    )
}
