import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");

    const handleLogin = async(e:React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            setAlert("User logged in successfully");
             navigate("/Homepage");
        } catch (error) {
            console.log(error);
            setAlert("User logged in failed.");
        }
    }

    return (
    <main className="form-signin w-100 m-auto d-flex align-items-center py-4 bg-body-tertiary">
      {/* SVG symbols */}
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858..." />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8..." />
        </symbol>
      </svg>

      {/* Theme toggle */}
      <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
        <button
          className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg className="bi my-1">
            <use href="#circle-half" />
          </svg>
        </button>

        <ul className="dropdown-menu dropdown-menu-end shadow">
          <li>
            <button className="dropdown-item d-flex align-items-center">
              <svg className="bi me-2 opacity-50">
                <use href="#sun-fill" />
              </svg>
              Light
            </button>
          </li>
          <li>
            <button className="dropdown-item d-flex align-items-center">
              <svg className="bi me-2 opacity-50">
                <use href="#moon-stars-fill" />
              </svg>
              Dark
            </button>
          </li>
        </ul>
      </div>

      {/* Form */}
      <div className="w-100 m-auto" style={{ maxWidth: 330 }}>
        <form onSubmit={handleLogin}>
          <img
            className="mb-4"
            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="logo"
            width="72"
            height="57"
          />

          <h1 className="h3 mb-3 fw-normal">Gemini simple</h1>

          <div className="form-floating">
            <input type="email" value={email} onChange={(event) => {setEmail(event.target.value)}} id="email" placeholder="Email address" />
          </div>

          <div className="form-floating">
            <input type="password" value={password} onChange={(event) => {setPassword(event.target.value)}} id="password" placeholder="Password" />
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="checkDefault"
            />
            <label className="form-check-label" htmlFor="checkDefault">
              Remember me
            </label>
          </div>

          <button type="submit">Login</button>

          <p className="mt-5 mb-3 text-body-secondary">
            &copy; Joao Nunes 2026
          </p>
        </form>
      </div>
    </main>
  );
}

export default Login;