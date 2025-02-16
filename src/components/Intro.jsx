import avatar from "../assets/avatar.jpg"
import { motion } from "motion/react"

function Intro() {
    return (
        <>
            <div className="card card-main noselect text-light">
                <div className="text-center rgba-stylish-strong px-4">
                    <div>
                       <div className="card-title mt-4 pt-2">Evan Babic</div>
                    </div>

                    <div className="avatar">
                        <motion.img src={avatar} className="rounded-circle img-fluid" alt="My Avatar" 
                            initial={{ opacity: 0, scale: 0 }} 
                            animate={{ opacity: 1, scale: 1}}
                            />
                    </div>
                    <p className="px-md-5 mx-md-5 fw-bold">Computer Science Student</p>
                </div>
            </div> 
        </>
    )
}

export default Intro;