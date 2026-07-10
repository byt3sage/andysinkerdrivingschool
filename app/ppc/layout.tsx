export default function PpcLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <section className="ppc-hero">
        <div className="site-shell">
          <p className="eyebrow">Campaign Landing Page</p>
        </div>
      </section>
      {children}
    </div>
  );
}
