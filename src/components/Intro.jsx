import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";

function Intro() {
    return (
        <>
            <div className="card jumbotronStyle noselect">
                <div className="text-light text-center rgba-stylish-strong py-5 px-4">
                    <div className="py-5">
                       <div className="card-title mt-4 pt-2">Evan Babic</div>
                       <p className="px-md-5 mx-md-5">Computer Science Student</p>

                    <div className="row justify-content-center">
                        <div className="col-sm-2">
                            <button className="btn btn-outline">
                                <FaGithub style={{height: '50px', width: '50px'}} />
                            </button>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-outline">
                                <FaLinkedin style={{height: '50px', width: '50px', color: 'blue'}} />
                            </button>
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-outline">
                                <GrDocumentPdf style={{height: '50px', width: '50px'}} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
        </>
    )
}

export default Intro;