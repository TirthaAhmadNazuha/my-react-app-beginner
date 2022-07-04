const ContentHome = () => {
    const handleClick = (e) => {
        for (const item of e.nativeEvent.path) {
            if (item.className === 'home-bread-crumb-btn') {
                item.className = 'home-bread-crumb-btn on'
                for (const button of document.getElementsByClassName('home-bread-crumb-btn on')) {
                    if (button.name !== item.name) button.className = 'home-bread-crumb-btn'
                }
            }
        }

    }
    return (
        <div className="content-home">
            <div className="bread-crumb" onClick={(e) => handleClick(e)}>
                <button className="home-bread-crumb-btn on" name="sugestion">Direkomendasikan</button>
                <button className="home-bread-crumb-btn" name="expreso">Ekspreso</button>
                <button className="home-bread-crumb-btn" name="late">Latte</button>
                <button className="home-bread-crumb-btn" name="capucino">Capucino</button>
                <button className="home-bread-crumb-btn" name="mokacina">Mokacino</button>
            </div>
            <div className="con">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div>
    )
}
export default ContentHome