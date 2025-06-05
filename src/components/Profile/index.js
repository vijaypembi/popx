import profileimg from "../../assets/profileimg.jpg";
import cameraicon from "../../assets/cameraicon.jpg";
const profile = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md    bg-[#F7F8F9] rounded-lg h-svh shadow-md">
                <div className="bg-[#ffffff] h-14 shadow-md p-3">
                    <h1 className="text-1xl text-left font-medium bg-white text-[#1D2226] ">
                        Account Settings
                    </h1>
                </div>
                <div className="p-3 flex  flex-row items-start gap-8 justify-space-between">
                    <div className="relative">
                        <img
                            src={profileimg}
                            alt="Profile"
                            className="w-20 h-20  rounded-full mx-auto mb-4 object-contain"
                        />
                        <img
                            src={cameraicon}
                            alt="Camera Icon"
                            className="w-6 h-6 absolute top-12 left-16  rounded-xl "
                        />
                    </div>

                    <div className="">
                        <p className="font-medium text-[##1D2226] text-left">
                            Marry Doe
                        </p>
                        <p className="text-[##1D2226] text-left">
                            Marry@gmail.Com
                        </p>
                    </div>
                </div>
                <p className="text-1xl  text-left p-3 text-[#1D2226] opacity-75 mb-6">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                    Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                    Aliquyam Erat, Sed Diam
                </p>
                <hr className="border-[#CBCBCB] mb-4 border-dashed border-b-2 " />
            </div>
        </div>
    );
};

export default profile;
