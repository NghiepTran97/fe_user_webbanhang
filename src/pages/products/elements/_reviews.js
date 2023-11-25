import {
    FaStar,
    FaStarHalf,
} from 'react-icons/fa6';

export default function Review() {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                    <div className="media mb-4">
                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: '45px' }} />
                        <div className="media-body">
                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                            <div className="text-primary mb-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalf />
                                <FaStar />
                            </div>
                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4 className="mb-4">Leave a review</h4>
                    <small>Your email address will not be published. Required fields are marked *</small>
                    <div className="d-flex my-3">
                        <p className="mb-0 mr-2">Your Rating * :</p>
                        <div className="text-primary">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label for="message">Your Review *</label>
                            <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                        </div>
                        <div className="form-group mb-0">
                            <input type="submit" value="Leave Your Review" className="btn btn-primary px-3" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}