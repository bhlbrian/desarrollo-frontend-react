import { motion } from "framer-motion"

const ModalInfo = ({ visible, message, onClose, session, onChange, color, colorText }) => {

    if (!visible) return null
    return (
        <div className="modal-overlay">
            <motion.div
                className="notification-success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{backgroundColor: color, color: colorText}}
            >
                {session &&
                    <div>
                        <p>{message}
                            <button type="button" style={{ marginLeft: '10px' }} onClick={onChange}>Presionar para salir</button>
                        </p>
                    </div>
                }
                {!session &&
                    <div>
                        <h3>{message}</h3>
                    </div>
                }
                <button
                    className="close-btn-success"
                    onClick={onClose}>X</button>
            </motion.div>
        </div>
    )

}

export default ModalInfo