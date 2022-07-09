const Navbar = () => {
    const navbarInterval = () => {
        const inter = setInterval(() => {
            if (document.querySelector('.navbar') !== null) {
                clearInterval(inter)
                const btn = document.querySelectorAll('.navbar .navbar-btn')
                const btnBg = document.querySelector('.navbar .navbar-btn-bg')
                const onIcon = document.querySelector('.navbar .navbar-btn.on i')
                btnBg.style.left = onIcon.offsetLeft - 8 + 'px'
                handleClick({ btn, btnBg, onIcon })
            }
        }, 0)
    }
    navbarInterval()
    const handleClick = ({ btn, btnBg, onIcon }) => {
        btn.forEach(button => {
            button.addEventListener('click', () => {
                btn.forEach((button) => {
                    button.className = 'navbar-btn'
                })
                button.className = 'navbar-btn on'
            })
        })
    }
    return (
        <div className="navbar" onClick={() => navbarInterval()}>
            <div className="navbar-btn-bg"></div>
            <button className="navbar-btn on" name="home"><i className="fi fi-rr-home"></i><h5>Beranda</h5></button>
            <button className="navbar-btn" name="menu"><i className="fi fi-rr-apps"></i><h5>Menu</h5></button>
            <button className="navbar-btn" name="promo"><i className="fi fi-rr-ticket"></i><h5>Promo</h5></button>
            <button className="navbar-btn" name="user"><i className="fi fi-rr-user"></i><h5>Saya</h5></button>
        </div>
    )
}

export default Navbar