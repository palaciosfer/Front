import { AuthContainer } from "../Moleculas/AuthContainer";
import { Navigation } from "../Moleculas/Navigation";
import { History } from "../Moleculas/History";

export function Historial() {
  return (
    <>

        <AuthContainer className="bg-black animate-fade-up">
            <Navigation/>
           <History/>
        </AuthContainer>

    </>
  );
}
