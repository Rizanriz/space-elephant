import React from 'react';
import Navbar from './components/Navbar';
import StickySection from './components/StickySection';
import HoverGrid from './components/HoverGrid';
import Video from './components/video';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Video /> */}
      <StickySection />
      <section className="outro">THE END</section>
      <HoverGrid/>
    </div>
  );
}

export default App;