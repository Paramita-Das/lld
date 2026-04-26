import { useRef, useState } from 'react';

const OtpInput = ({ otpLength }: { otpLength: number }) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(otpLength).fill(''));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value.replace(/\D/g, '');
    if (!value) return;
    const newOtp = [...otp];
    newOtp[idx] = value[0];
    setOtp(newOtp);
    if (value.length === 1 && idx < otpLength - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace') {
      if (otp[idx]) {
        const newOtp = [...otp];
        newOtp[idx] = '';
        setOtp(newOtp);
      } else if (idx > 0) {
        inputRefs.current[idx - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    } else if (e.key === 'ArrowRight' && idx < otpLength - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, idx: number) => {
    const pasted = e.clipboardData.getData('Text').replace(/\D/g, '');
    if (pasted.length) {
      const newOtp = [...otp];
      for (let i = 0; i < otpLength - idx; i++) {
        newOtp[idx + i] = pasted[i] || '';
      }
      setOtp(newOtp);
      const lastIdx = Math.min(idx + pasted.length, otpLength) - 1;
      if (lastIdx >= 0) inputRefs.current[lastIdx]?.focus();
      e.preventDefault();
    }
  };

  return (
    <div className="container">
      {Array.from({ length: otpLength }, (_, index: number) => (
        <div className="input-box" key={index}>
          <input
            type="text"
            maxLength={1}
            ref={el => { inputRefs.current[index] = el; }}
            value={otp[index]}
            onChange={e => handleChange(e, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onPaste={e => handlePaste(e, index)}
          />
        </div>
      ))}
    </div>
  );
};

export default OtpInput;
