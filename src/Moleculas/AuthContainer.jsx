export function AuthContainer({ children, className = "" }) {
  return (
    <section className={`bg-opacity-10 w-full h-full flex flex-col ${className}`}>
      {children}
    </section>
  );
}