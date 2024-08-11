import React from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import { InstructorData } from "../../context/InstructorContext";

const Account = ({ instructor }) => {
    const { setIsAuth, setInstructor } = InstructorData();

    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.clear();
        setInstructor([]);
        setIsAuth(false);
        toast.success("Logged Out");
        navigate("/login");
    };
    return (
        <div>
            <div className="profile">
                <h2>My Profile</h2>
                <div className="profile-info">
                    <p>
                        <strong>Name :  {instructor.name}</strong>
                    </p>

                    <p>
                        <strong>Email : {instructor.email}</strong>
                    </p>



                    {instructor.role === "admin" ? (
                        <button
                            onClick={() => navigate(`/admin`)}
                            className="common-btn"
                        >
                            Admin Dashboard
                        </button>
                    ) : (
                        <button onClick={() => navigate(`/${instructor._id}/dashboard`)} className="common-btn">
                            Dashboard
                        </button>


                    )
                    }

                    <br />

                    <br />

                    {/* {user.role === "admin" && (
                        <button
                            onClick={() => navigate(`/admin/dashboard`)}
                            className="common-btn"
                        >
                            <MdDashboard />
                            Admin Dashboard
                        </button>
                    )}

                    <br /> */}

                    <button
                        onClick={logoutHandler}
                        className="common-btn"
                        style={{ background: "red" }}
                    >
                        {/* <IoMdLogOut /> */}
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Account;