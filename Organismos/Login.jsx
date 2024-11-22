import { useState } from "react";
import axios from "axios"; // Importar axios
import { AuthContainer } from "../Moleculas/AuthContainer";
import { ImgHome } from "../Moleculas/ImgHome";
import { CardData } from "../Moleculas/CardDate";
import { useNavigate } from "react-router-dom";
import { InputT } from "../Atomos/Input";
import { Paragraphs } from "../Atomos/Texts";
import { ButtonI } from "../Atomos/Button";

export function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState(""); // Estado para el nombre
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Todos los campos son requeridos");
      return;
    }

    try {
      // Enviar los datos de inicio de sesión a la API
      const response = await axios.post("http://localhost:3000/auth/access", {
        name,      // Enviar el nombre
        email,     // Enviar el correo electrónico
        password   // Enviar la contraseña
      });

      if (response.status === 200) {
        // Almacenar toda la respuesta en localStorage
        localStorage.setItem("userData", JSON.stringify(response.data));

        console.log("Datos del usuario:", response.data);  // Ver los datos completos

        // Redirigir al usuario al monitoreo (o a la página que elijas)
        navigate("/Monitoreo");
      } else {
        setError("Error al iniciar sesión. Por favor, revisa tus credenciales.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.response || error);
      setError("Error en la solicitud. Por favor, intenta de nuevo.");
    }
  };

  return (
    <seccion className={`w-full h-screen flex`}>
      <AuthContainer className="flex sm:flex-row flex-col items-center justify-center bg-black animate-fade-right animate-duration-[2000ms]">
        <ImgHome />
        <CardData text="Login">
          <form className="flex flex-col w-full sm:w-4/5 mt-10" onSubmit={handleLogin}>
            <label className="flex flex-col mt-4">
              <Paragraphs text="Nombre:" />
              <InputT
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)} // Actualiza el estado para el nombre
              />
            </label>

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
  );
}
