export function DoubleContainer({ children, className = "" }) {
    return (
      <>
        <section className={`bg-[#C8C470]  display: none; ${className}`}>
          {children}
        </section>
      </>
    );
  }
  