
import { AuthContainer } from "../Moleculas/AuthContainer";
import { Navigation } from "../Moleculas/Navigation";
import { DataMonitoring } from "../Moleculas/DataMonitoring";


export function Monitoring() {
  return (
    <>
      
        <AuthContainer className="bg-black animate-fade-up">
            <Navigation/>
           <DataMonitoring/>
        </AuthContainer>
      
    </>
  );
}
