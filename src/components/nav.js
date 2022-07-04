const Navbar = () => {
    const handleClick = (e) => {
        for (const item of e.nativeEvent.path) {
            if (item.className === 'navbar-btn') {
                item.className = 'navbar-btn on'
                for (const button of document.getElementsByClassName('navbar-btn on')) {
                    if (button.name !== item.name) button.className = 'navbar-btn'
                }
            }
        }

    }
    return (
        <div className="navbar" onClick={(e) => handleClick(e)}>
            <button className="navbar-btn on" name="home"><div className="icon"><i className="fi fi-rr-home"></i></div><h5>Beranda</h5></button>
            <button className="navbar-btn" name="menu"><div className="icon"><i className="fi fi-rr-apps"></i></div><h5>Menu</h5></button>
            <button className="navbar-btn" name="promo"><div className="icon"><i className="fi fi-rr-ticket"></i></div><h5>Promo</h5></button>
            <button className="navbar-btn" name="user"><div className="icon"><i className="fi fi-rr-user"></i></div><h5>Saya</h5></button>
        </div>
    )
}

export default Navbar