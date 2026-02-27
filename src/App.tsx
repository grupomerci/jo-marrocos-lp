import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ProblemSolution from './components/ProblemSolution';
import Author from './components/Author';
import WhatIsIncluded from './components/WhatIsIncluded';
import Highlights from './components/Highlights';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 antialiased selection:bg-orange-200 selection:text-orange-900">
      <Hero />
      <Benefits />
      <ProblemSolution />
      <Author />
      <WhatIsIncluded />
      <Highlights />
      <TargetAudience />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
