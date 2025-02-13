import { GiLighthouse, GiSeagull, GiSeaTurtle, GiSeaCreature } from "react-icons/gi";

function Navbar() {
    return (
        <>
        <nav className="navbar-nav">
            <div className="container-fluid p-3"> 
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <a className="navbar-brand" href="#">
                            <GiLighthouse style={{color: 'white', width: '75px', height: '75px'}}/>
                        </a>
                    </div>

                    <div className="col">
                        <div className="d-flex flex-row">
                            <ul className="nav font-large flex-fill justify-content-around">
                                <li className="nav-item align-self-center">
                                    <GiSeagull style={{color: 'white', width: '40px', height: '75px'}}/>
                                </li>
                                <li className="nav-item">
                                    <GiSeaTurtle style={{color: 'white', width: '40px', height: '75px'}}/>
                                </li>
                                <li className="nav-item">
                                    <GiSeaCreature style={{color: 'white', width: '40px', height: '75px', transform: 'scaleX(-1)'}}/>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;