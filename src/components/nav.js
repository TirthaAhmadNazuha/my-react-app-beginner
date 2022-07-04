const Navbar = () => {
    const handleClick = (e) => {
        for (const item of e.nativeEvent.path) {
            if (item.className === 'btn') {
                item.className = 'btn on'
                for (const button of document.getElementsByClassName('btn on')) {
                    if (button.name !== item.name) button.className = 'btn'
                }
            }
        }

    }
    return (
        <div className="navbar" onClick={(e) => handleClick(e)}>
            <div className="handle-draging"></div>
            <button className="btn on" name="home"><i className="fi fi-rr-home"></i><h5>Beranda</h5></button>
            <button className="btn" name="menu"><i className="fi fi-rr-apps"></i><h5>Menu</h5></button>
            <button className="btn" name="nfc"><i className="fi fi-rr-data-transfer"></i><h5>NFC</h5></button>
            <button className="btn" name="promo"><i className="fi fi-rr-ticket"></i><h5>Promo</h5></button>
            <button className="btn" name="user"><i className="fi fi-rr-user"></i><h5>Saya</h5></button>
        </div>
    )
}

export default Navbar