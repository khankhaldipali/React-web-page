import { NavLink } from 'react-router-dom';
function Common(props) {
    return (
        <>
            <section id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row pt-5">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="fs-1">{props.name}
                                        <br></br><strong className="text-info">React JS</strong>
                                    </h1>
                                    <h2 className="my-3 fs-3">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} >
                                            <button className="btn btn-info py-2 px-3 fw-bold">{props.btnName}</button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 ">
                                    <img src={props.imgsrc} alt="home-img" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Common;