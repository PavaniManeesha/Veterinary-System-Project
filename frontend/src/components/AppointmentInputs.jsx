import "./styles/common.css";
import "./styles/appointmentForm.css";

const AppointmentFormInput = (props) => {
    const { label, onChange, id, ...inputProps} = props;
    return (
        <div className="col-md-6">
            <div className="form-group">
                <label>{label}</label>
                <input className ="form-input" class="form-control" {...inputProps} onChange={onChange} />
            </div>
        </div>          
    )
}

export default AppointmentFormInput;