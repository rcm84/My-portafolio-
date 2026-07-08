export default function Footer({ dict }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="max-w-content mx-auto flex flex-col items-center justify-between gap-3 px-6 text-xs text-faint sm:flex-row">
        <p>© {year} Raymer Castañeda. {dict.footer.rights}</p>
        <p className="font-mono">{dict.footer.builtWith}</p>
      </div>
    </footer>
  );
}
