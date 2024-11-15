import FondoPrincipal from "../assets/Img/hongos.jpeg"

export function MainBackground ({children}){
    return(<>
    <main className="relative w-full h-screen">
      <img className="absolute w-full h-full object-cover bg-[#A2A746]" />
      <div className="absolute inset-0  bg-opacity-41"></div>
      <section className="relative flex items-center justify-center h-full">
        {children}
      </section>
    </main>
    </>)
}