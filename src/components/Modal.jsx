import { useNavigate } from 'react-router-dom';
import classes from "./Modal.module.css";

function Modal(props) {
    const navigate = useNavigate();
    function closeHandler(){
        navigate('/');
    }
    return (
        <div >
            <div className={classes.backdrop} onClick={closeHandler}/>
            <dialog open className={classes.modal}>
                {props.children}
            </dialog>
        </div>
    );
}
export default Modal;
