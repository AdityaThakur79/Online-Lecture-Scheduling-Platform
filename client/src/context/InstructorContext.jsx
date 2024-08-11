import { createContext, useContext, useState, useEffect } from "react";
import { server } from "../main";
import toast, { Toaster } from 'react-hot-toast'
const InstructorContext = createContext();
import axios from "axios"

export const InstructorContextProvider = ({ children }) => {
    const [instructor, setInstructor] = useState([]);
    const [instructors, setInstructors] = useState([]);
    const [isAuth, setIsAuth] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [loading, setLoading] = useState(true);

    //LOGIN
    async function loginInstructor(email, password, navigate) {
        setBtnLoading(true)
        try {
            const { data } = await axios.post(`${server}/api/instructor/login`, { email, password });
            toast.success(data.message);
            localStorage.setItem("token", data.token)
            setInstructor(data.instructor);
            setIsAuth(true);
            setBtnLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error);
            setIsAuth(false);
            setBtnLoading(false);
            toast.error("Inavlid Email or Password");
        }
    }

    //REGISTER
    async function registerInstructor(name,email, password, navigate) {
        setBtnLoading(true)
        try {
            const { data } = await axios.post(`${server}/api/instructor/register`, { name,email, password });
            toast.success(data.message);
            localStorage.setItem("token", data.token)
            setInstructor(data.instructor);
            setIsAuth(true);
            setBtnLoading(false);
            navigate("/");
        } catch (error) {
            console.log(error);
            setIsAuth(false);
            setBtnLoading(false);
            toast.error("Something Went Wrong");
        }
    }

    async function fetchInstructor() {
        try {
            const { data } = await axios.get(`${server}/api/profile/me`, {
                headers: {
                    token: localStorage.getItem("token"),
                },
            });
            setIsAuth(true);
            setInstructor(data.instructor);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function fetchAllInstructors() {
        try {
            const { data } = await axios.get(`${server}/api/allinstructors`, {
                headers: {
                    token: localStorage.getItem("token"),
                },
            });
            setIsAuth(true);
            setInstructors(data.totalInstructors);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchInstructor();
    }, []);


    return <InstructorContext.Provider value={{fetchAllInstructors, instructor, setInstructor, setIsAuth, isAuth, loginInstructor, btnLoading, loading ,registerInstructor}}> {children} <Toaster></Toaster></InstructorContext.Provider>
}

export const InstructorData = () => useContext(InstructorContext);