export const GlyphorBadge = () => {
  return (
    <a
      href="https://glyphor.com"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-3 py-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-full text-xs text-white/70 hover:text-white transition-colors shadow-lg"
    >
      <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
      <span>Made with Glyphor</span>
    </a>
  );
};