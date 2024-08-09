"use client"
import { useRef, useState, useEffect } from "react";
import useLocalStorage from "@/hook/useLocalStorage"
import "@/components/FormStyle.css"

export default function BeanNews() {
    const [obj, setObj] = useLocalStorage("isSubscribed", false);
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [currentElement, setCurrentElement] = useState(null)
    const [display, setDisplay] = useState(null)
    const inputName = useRef();
    const inputEmail = useRef();

    useEffect(() => {
        setDisplay(obj)
        if (!display) {
            if (currentElement) {
                if (currentElement.id === inputName.current.id) {
                    inputName.current.focus()
                }
                if (currentElement.id === inputEmail.current.id) {
                    inputEmail.current.focus()
                }
            }
        }
    }, [currentElement, nameInput, emailInput])

    const handleSubscription = () => {
        if (nameInput == "" || emailInput == "") {
            alert("Please fill in valid information")
        }
        else {
            setDisplay(true)
            setObj(true)
            setTimeout(() => {
                window.location.reload();
            }, 500);
        }
    }

    const handleNameInput = (e) => {
        setNameInput(e.target.value)
    }

    const handleEmailInput = (e) => {
        setEmailInput(e.target.value)
    }

    const handleFocus = (e) => {
        e.target.focus()
        if (!e.target.isEqualNode(currentElement)) {
            setCurrentElement(e.target)
        }
    }

    const UserForm = () => {
        return (
            <>
                <label>Name <span style={{ color: "#C80036" }}>*</span></label>
                <input ref={inputName} id="name" value={nameInput} placeholder="Enter Name" onFocus={handleFocus} onChange={handleNameInput} type="text" required />
                <label>Email <span style={{ color: "#C80036" }}>*</span></label>
                <input ref={inputEmail} id="email" defaultValue={emailInput} placeholder="Enter Email" onFocus={handleFocus} onChange={handleEmailInput} type="email" required />
                <button onClick={handleSubscription} >Subscribe</button>
            </>
        )
    }

    const SubmittedForm = () => {
        return (
            <h1>Subscribed! Check out the brewing good news!</h1>
        )
    }

    return (
        <div className="formContainer">
            <div className="coffeeImgContainer">
                <img src="coffeecup.png" alt="coffee cup image" />
            </div>
            <div className="vl" />
            <div className="formControlContainer">
                <div className="inputContainer">
                    {display == null ? <p>loading...</p> : display ? <SubmittedForm /> : <UserForm />}
                </div>
            </div>
        </div>
    )
}





