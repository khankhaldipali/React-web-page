
function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card mx-auto">
                    <img src={props.imgsrc} className="card-img-top card_img" alt={props.title} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </p>
                        <div className="text-center">
                            <a href="#" className="btn btn-info">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Card;