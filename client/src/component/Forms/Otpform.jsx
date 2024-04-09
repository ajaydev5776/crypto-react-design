import React, {useState, useEffect} from 'react'

function Otpform() {
    // Otp Timer
    const [timer, setTimer] = useState(60); 
    const [timerRunning, setTimerRunning] = useState(false); 
    const startResendTimer = () => {
        if (!timerRunning) {
            setTimer(60); 
            setTimerRunning(true); 
            const interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 0) {
                        clearInterval(interval); 
                        setTimerRunning(false);
                    }
                    return prevTimer - 1; 
                });
            }, 1000); 
        }
    };
    // Otp Timer End
    

    useEffect(() => {
        const handleInput = (index, event) => {
            const value = event.target.value;
            const inputs = document.querySelectorAll('.box');
            if (value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            }
        };

        const handleKeyDown = (index, event) => {
            const inputs = document.querySelectorAll('.box');
            if (event.key === 'Backspace') {
                if (index > 0) {
                    inputs[index - 1].focus();
                } else {
                    inputs[index].value = ''; // Clear value of the first input
                }
            }
        };

        const inputs = document.querySelectorAll('.box');
        inputs.forEach((input, index) => {
            input.addEventListener('input', handleInput.bind(null, index));
            input.addEventListener('keydown', handleKeyDown.bind(null, index));
        });

        // Cleanup
        return () => {
            inputs.forEach((input, index) => {
                input.removeEventListener('input', handleInput.bind(null, index));
                input.removeEventListener('keydown', handleKeyDown.bind(null, index));
            });
        };
    }, []);
    return (
        <>
        <form class="row row-gap-4">
            <div class="col-12">
                <label for="number" class="form-label fs-16 m-0">Phone number</label>
            </div>
            <div class="col-12 verification-code">
                <ul class="otpbox verification-code--inputs otpbox">
                    <input type="text" maxlength="1" class="form-control text-center shadow-none fs-16  box" />
                    <input type="text" maxlength="1" class="form-control text-center shadow-none fs-16  box" />
                    <input type="text" maxlength="1" class="form-control text-center shadow-none fs-16  box" />
                    <input type="text" maxlength="1" class="form-control text-center shadow-none fs-16  box" />
                    <input type="text" maxlength="1" class="form-control text-center shadow-none fs-16  box" />
                    <input type="text" maxlength="1" class="form-control text-center shadow-none fs-16  box" />
                </ul>
            </div>
            <div class="otp-container">
                <div class="fs-16 text-white">Didn’t receive OTP?</div>
                <div class="d-flex align-items-center gap-2">
                    <a type="button" class="fs-16 text-theme2  text-decoration-none" id="resendBtn" onClick={startResendTimer} disabled={timerRunning}>Resend OTP</a> 
                    <p className="m-0">{timerRunning ? `${timer} seconds` : ''}</p>
                </div>
            </div>
            <div class="col-12 text-center">
                <button type="button" class="btn btn-theme1 w-100">SUBMIT</button>
            </div>
        </form>
        </>
    )
}

export default Otpform