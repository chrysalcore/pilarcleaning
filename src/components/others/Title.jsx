function Title() {
    return (
        <div className="title">
            <img className="title__logo" src={new URL("../../assets/icons/pilarclean.svg", import.meta.url)} alt="main logo" />
            <h2 className="title__text">Cleaning Services For All<span>Roanoke Valley</span></h2>
        </div>
    )
}

export default Title