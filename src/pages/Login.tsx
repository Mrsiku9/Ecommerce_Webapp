import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [gender, SetGender] = useState("");
  const [date, SetDate] = useState("");

  return (
    <div className="login">
      <main>
        <h1 className="heading"> Login</h1>
        <div>
          <label>Gender </label>
          <select value={gender} onChange={(e) => SetGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div>
          <label>Date Of Birth</label>
          <input
            type="date"
            placeholder="DD/MM/YY"
            value={date}
            onChange={(e) => SetDate(e.target.value)}
          />
        </div>
        <div>
          <p>Already Signed In Once</p>
          <button>
            <FcGoogle /> <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
