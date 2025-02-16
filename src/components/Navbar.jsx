import { GiLighthouse, GiSeagull, GiSeaTurtle, GiSeaCreature } from "react-icons/gi";
import { motion } from "motion/react"

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-center"> 
                {/* <a className="navbar-brand" href="#">
                    <GiLighthouse style={{color: 'white', width: '75px', height: '75px'}}/>
                </a> */}

                <ul className="nav font-large d-flex justify-content-center align-items-center gap-4 text-light">
                    <div className="d-flex flex-column">
                        <motion.a href="https://github.com/evanbabic" whileHover={{ scale: 1.1 }}>
                            <li className="nav-item align-items-center d-flex flex-column">
                                <GiSeagull className="icon" style={{color: 'white', width: '50px', height: '50px'}}/>
                            </li>
                        </motion.a>
                        <span className="text-center pt-1">GitHub</span>
                    </div>
                    
                    <div className="d-flex flex-column">  
                        <motion.a href="https://www.linkedin.com/in/evanbabic/" whileHover={{ scale: 1.1 }}>
                            <li className="nav-item d-flex flex-column align-items-center">
                                <GiSeaTurtle className="icon" style={{color: 'white', width: '50px', height: '50px'}}/>         
                            </li>
                        </motion.a>
                        <span className="text-center pt-1">LinkedIn</span>
                    </div>  
                    
                    <div className="d-flex flex-column">
                        <motion.a href="#" whileHover={{ scale: 1.1 }}>
                            <li className="nav-item d-flex flex-column align-items-center">
                                <GiSeaCreature className="icon" style={{color: 'white', width: '50px', height: '50px'}}/> 
                            </li>
                        </motion.a>
                        <span className="text-center pt-1">Resume</span> 
                    </div>
                    
                </ul>
            </div> 
        </nav>
        </>
    )
}

export default Navbar;