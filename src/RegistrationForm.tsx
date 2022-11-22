import {ChangeEvent, useState} from "react";
import './App.css';

type RegistrationFormType = {
    firstName: string,
    lastName: string,
    age: number
}
export default function RegistrationForm(){
    const emptyForm: RegistrationFormType = {
        firstName: "",
        lastName: "",
        age: 0
    }
    const [RegistrationForm, setRegistrationForm] = useState<RegistrationFormType>(emptyForm);

    function handleOnChange(event: ChangeEvent<HTMLInputElement>){
        setRegistrationForm(prevState => ({
            ...prevState, [event.target.name] : event.target.value
        }))
    }
    return(
        <section className={"registration-form"}>

                <label>
                    <b>First Name:</b>
                    <input placeholder={"First Name"} value = {RegistrationForm.firstName} name = {"firstName"}/>
                </label>
                <label>
                    <b>Last Name:</b>
                    <input placeholder={"Last Name"} value = {RegistrationForm.lastName} name = {"lastName"}/>
                </label>
                <label>
                    <b>Age:</b>
                    <input placeholder={"age"} value = {RegistrationForm.age} name = {"age"}/>
                </label>


        </section>
    )

}