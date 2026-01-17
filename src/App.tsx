import Index from './pages/Index';
import { GlyphorBadge } from './utils/GlyphorBadge';

function App() {
  return (
    <div className="relative min-h-screen bg-noir text-paper selection:bg-white selection:text-black">
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;