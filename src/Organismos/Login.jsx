import { AuthContainer } from "../Moleculas/AuthContainer";
import { ImgHome } from "../Moleculas/ImgHome";
import { CardData } from "../Moleculas/CardDate";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { InputT } from "../Atomos/Input";
import { Paragraphs } from "../Atomos/Texts";
import { ButtonI } from "../Atomos/Button";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      // Simulación de un inicio de sesión exitoso
      const token = "simulatedToken";
      const userId = "simulatedUserId";

      // Guardar el token y el ID del usuario en localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      console.log("Token:", token);
      console.log("User ID:", userId);

      // Redirigir al usuario a la página de inicio (ejemplo: "/Home")
      navigate("/Monitoreo");
    } else {
      setError("Correo electrónico y contraseña son requeridos");
    }
  };

  return (
    <>
      <seccion className={`w-full h-screen flex `}>
      <AuthContainer className="flex sm:flex-row flex-col items-center justify-center bg-black animate-fade-right animate-duration-[2000ms]">
        <ImgHome />
          <CardData text="Login">
            <form className="flex flex-col w-full sm:w-4/5 mt-10" onSubmit={handleLogin}>
              <label className="flex flex-col mt-4">
                <Paragraphs text="Correo Electrónico:" />
                <InputT
                  type="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="flex flex-col mt-4">
                <Paragraphs text="Contraseña:" />
                <InputT
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              {error && <p className="text-red-500 mt-2">{error}</p>}

              <nav className="mt-7 flex flex-col sm:flex-row sm:justify-center sm:items-center space-y-2 sm:space-y-0">
                <a className="text-gray-300 no-underline hover:text-gray-400" href="Formulario">Regístrate</a>
              </nav>

              <div className="flex justify-center mt-4">
                <ButtonI type="submit" text="Iniciar Sesión" />
              </div>
            </form>
          </CardData>
        </AuthContainer>
       </seccion>
    </>
  );
}
