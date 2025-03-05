import React from 'react'


function Header() {

    return (
        <>
            <div className="flex  relative justify-center ">
                <div className="relative w-[200px] h-[200px] rain-wrapper mx-8">
                    <div className="rain-container">
                        <img
                            className="lightning-main"
                            src="../assets/img/logo.svg"
                            alt="logo"
                        />
                        <div className="rain">
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                            <div className="drop"></div>
                        </div>
                    </div>
                </div>


            </div>

           

        </>
    )

}

export default Header