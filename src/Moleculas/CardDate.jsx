import { Titles } from '../Atomos/Texts'; 

export function CardData({ children, text }) {
  return (
    <section className="bg-[#A2A746] bg-opacity-1 w-full sm:w-1/2 h-full flex items-center justify-center p-4 sm:p-0">
      <div className="bg-[black] bg-opacity-10 rounded-3xl  h-300 sm:w-3/4 h-auto p-8 sm:h-4/5">
        <Titles text={text} />
        <section className="w-full flex justify-center">
          {children}
        </section>
      </div>
    </section>
  );
}
