import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        agency: "Yes",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const validateForm = () => {
        const { fullName, phoneNumber, email, password, companyName } =
            formData;

        if (!fullName || !phoneNumber || !email || !password || !companyName) {
            setErrorMsg("Please fill in all required fields.");
            return false;
        }

        if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            setErrorMsg("Full Name can only contain letters and spaces.");
            return false;
        }

        if (!/^\d+$/.test(phoneNumber)) {
            setErrorMsg("Phone Number must be numeric.");
            return false;
        }
        if (phoneNumber.length !== 10) {
            setErrorMsg("Phone Number must be exactly 10 digits long.");
        }

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
            fullName: "",
            phoneNumber: "",
            email: "",
            password: "",
            companyName: "",
            agency: "Yes",
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
            console.log("Account created successfully:", data);
            setErrorMsg("");
            navigate("/profile", { replace: true });
        } catch (error) {
            console.error("Error during form submission:", error);
            setErrorMsg("An error occurred while creating your account.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F8F9] px-4">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl w-44 text-left font-bold text-[#1D2226] mb-6">
                    Create your PopX account
                </h1>

                <form onSubmit={handleSubmitForm} className="space-y-5">
                    <div className="relative">
                        <label
                            htmlFor="fullName"
                            className="absolute  -top-1 left-2 px-1 text-sm bg-white text-[#6C25FF]"
                        >
                            Full Name{" "}
                            <span className="text-[#E70B897B]">*</span>
                        </label>
                        <input
                            onChange={handleInputChange}
                            value={formData.fullName}
                            id="fullName"
                            name="fullName"
                            autoComplete="username"
                            type="text"
                            placeholder="Enter your full name"
                            required
                            className="w-full mt-2 border border-[#CBCBCB] rounded p-2 text-[#1D2226] focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
                        />
                    </div>

                    <div className="relative">
                        <label
                            htmlFor="phoneNumber"
                            className="absolute -top-1 left-2 px-1 text-sm bg-white text-[#6C25FF]"
                        >
                            Phone Number{" "}
                            <span className="text-[#E70B897B]">*</span>
                        </label>
                        <input
                            // onChange={handleInputChange}
                            onChange={(e) => {
                                const digitsOnly = e.target.value.replace(
                                    /\D/g,
                                    ""
                                );
                                if (digitsOnly.length <= 10) {
                                    setFormData({
                                        ...formData,
                                        phoneNumber: digitsOnly,
                                    });
                                }
                            }}
                            value={formData.phoneNumber}
                            id="phoneNumber"
                            name="phoneNumber"
                            type="text"
                            autoComplete="tel"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            minLength={10}
                            placeholder="Enter your phone number"
                            className="w-full mt-2 border border-[#CBCBCB] rounded p-2 text-[#1D2226] focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
                        />
                    </div>

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

                    <div className="relative">
                        <label
                            htmlFor="companyName"
                            className="absolute -top-1 left-2 px-1 text-sm bg-white text-[#6C25FF]"
                        >
                            Company Name{" "}
                            <span className="text-[#E70B897B]">*</span>
                        </label>
                        <input
                            onChange={handleInputChange}
                            value={formData.companyName}
                            id="companyName"
                            name="companyName"
                            autoComplete="organization"
                            type="text"
                            placeholder="Enter your company name"
                            className="w-full mt-2 border border-[#CBCBCB] rounded p-2 text-[#1D2226] focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
                        />
                    </div>

                    <div>
                        <p className="text-[#1D2226] text-left font-medium mb-2">
                            Are you an Agency?{" "}
                            <span className="text-[#E70B897B]">*</span>
                        </p>
                        <div className="flex gap-6">
                            <label
                                htmlFor="Yes"
                                className="flex items-center gap-2 text-[#1D2226]"
                            >
                                <input
                                    onChange={handleInputChange}
                                    checked={formData.agency === "Yes"}
                                    type="radio"
                                    id="Yes"
                                    name="agency"
                                    value="Yes"
                                    className="accent-[#642AF5]"
                                />
                                Yes
                            </label>

                            <label
                                htmlFor="No"
                                className="flex items-center gap-2 text-[#1D2226]"
                            >
                                <input
                                    onChange={handleInputChange}
                                    checked={formData.agency === "No"}
                                    type="radio"
                                    id="No"
                                    name="agency"
                                    value="No"
                                    className="accent-[#642AF5]"
                                />
                                No
                            </label>
                        </div>
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
                            disabled={false}
                            className="w-full bg-[#6C25FF] hover:bg-[#642AF5] text-white font-semibold py-2 px-4 rounded transition"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
