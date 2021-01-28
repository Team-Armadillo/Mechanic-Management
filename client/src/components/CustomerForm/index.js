import React, { useState } from "react";
import "./cf.scss";
import { useMutation } from '@apollo/react-hooks';
import { CHECK } from "../../utils/mutations";
import Auth from "../../utils/auth";

function CustomerForm(props) {

    const [formState, setFormState] = useState({ cellPhone: ''})
    const [checkIn, { error }] = useMutation(CHECK);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
          const mutationResponse = await checkIn({ variables: { cellPhone: formState.cellPhone} })
          const token = mutationResponse.data.checkIn.token;
          Auth.login(token);
        } catch (e) {
          console.log(e)
        }
      };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value
        });
      };

    return (

        <form className="formContainer" onSubmit={handleFormSubmit}>
            <div className="formText">
                <input
                    placeholder="Ex: 123-456-7890"
                    name="cellphone"
                    className="cellInput"
                    type="cellphone"
                    id="cell"
                    onChange={handleChange}
                />
                </div>
                {
                error ? <div>
                    <p className="error-text" >Sorry! We can't find a repair under that PhoneNumber :( Try Again!</p>
                </div> : null
                }
                <div className="btnContainer">
                    <button className="checkBtn">
                        <p>Check Status!</p>
                    </button>
                </div>
        </form>
    )
};

export default CustomerForm;