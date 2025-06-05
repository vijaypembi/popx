import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState("");

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const validateForm = () => {
        const { email, password } = formData;

        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMsg("Please enter a valid email address.");
            return false;
        }

        if (password.length < 6) {
            setErrorMsg("Password must be at least 6 characters long.");
            return false;
        }

        setErrorMsg("");
        // console.log("form submitted successfully:", formData);
        setFormData({
            email: "",
            password: "",
        });
        return true;
    };
    const handleSubmitForm = async (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (isValid) {
            navigate("/profile", { replace: true });

            // this dummy url is for API call so i return here if is valid url remove this below line "return"
            return;
        }
        // this dummy url is for API call
        const url = "https://api.example.com/signup";
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Login successfully:", data);
            setErrorMsg("");
            navigate("/profile", { replace: true });
        } catch (error) {
            console.error("Error during form submission:", error);
            setErrorMsg("An error occurred while Login your account.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg h-svh shadow-md">
                <h1 className="text-2xl w-44 text-left font-bold text-[#1D2226] mb-6">
                    Signin to your PopX account
                </h1>
                <p className="text-1xl text-left  w-64 text-[#1D2226] opacity-55 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>
                <form onSubmit={handleSubmitForm} className="space-y-5">
                    <div className="relative">
                        <label
                            htmlFor="email"
                            className="absolute -top-1 left-2 px-1 text-sm bg-white text-[#6C25FF]"
                        >
                            Email Address{" "}
                            <span className="text-[#E70B897B]">*</span>
                        </label>
                        <input
                            onChange={handleInputChange}
                            value={formData.email}
                            autoComplete="email"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="w-full mt-2 border border-[#CBCBCB] rounded p-2 text-[#1D2226] focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
                        />
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="absolute -top-1 left-2 px-1 text-sm bg-white text-[#6C25FF]"
                        >
                            Password <span className="text-[#E70B897B]">*</span>
                        </label>
                        <input
                            onChange={handleInputChange}
                            value={formData.password}
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Enter your password"
                            className="w-full mt-2 border border-[#CBCBCB] rounded p-2 text-[#1D2226] focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
                        />
                    </div>

                    <div>
                        {errorMsg ? (
                            <p className="text-left mb-2 text-[#E70B897B]">
                                {errorMsg}
                            </p>
                        ) : (
                            ""
                        )}
                        <button
                            type="submit"
                            className="w-full bg-[#CBCBCB] hover:bg-[#642AF5] text-white font-semibold py-2 px-4 rounded transition"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
