import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div
                className="flex flex-col items-center justify-end p-3
               h-screen w-full max-w-[400px]
               border-2 border-gray-300 
               bg-[#F7F8F9] shadow-lg"
            >
                <div className="w-full mb-2">
                    <h1
                        className="font-sans  font-medium
                    text-2xl text-left text-[#1D2226] mb-2"
                    >
                        Welcome to PopX
                    </h1>
                    <p className="text-1xl text-left  w-64 text-[#1D2226] opacity-55 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    </p>

                    <button
                        className="w-full h-14 bg-[#6C25FF] rounded-lg text-white
                    font-semibold mb-3 hover:bg-[#642AF5] transition-colors duration-300"
                        onClick={() => navigate("/signUp")}
                    >
                        Create Account
                    </button>
                    <button
                        className="w-full h-14 bg-[#6C25FF4B] rounded-lg text-[#1D2226]
                    font-semibold mb-3 hover:bg-[#E70B897B] transition-colors duration-300"
                        onClick={() => navigate("/Login")}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
