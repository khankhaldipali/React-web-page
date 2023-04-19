import Card from "./Card";
import Data from "./Data";

function Service() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center fw-bold">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Data.map((item, index) => {
                                    return (
                                        <Card
                                            key={index}
                                            imgsrc={item.imgsrc}
                                            title={item.title}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;