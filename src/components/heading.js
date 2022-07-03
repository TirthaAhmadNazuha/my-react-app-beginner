const Header = (props) => {
    return <h1>Hello {props.name ? props.name : 'world'}</h1>
}

export default Header