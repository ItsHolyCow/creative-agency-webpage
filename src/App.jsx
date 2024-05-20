import './App.css';
import NavMain from './components/NavMain';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Footer from './components/Footer';
import { useRef } from 'react';

function App() {
  const HomeRef = useRef(null);
  const Part1Ref = useRef(null);
  const Part2Ref = useRef(null);
  const Part3Ref = useRef(null);
  const Part4Ref = useRef(null);
  const Part5Ref = useRef(null);
  const Part6Ref = useRef(null);
  const Part7Ref = useRef(null);
  const Part8Ref = useRef(null);
  const FooterRef = useRef(null);

  return (
    <div className="App w-full">
      <NavMain 
        refs={{ HomeRef, Part1Ref, Part2Ref, Part3Ref, Part4Ref, Part5Ref, Part6Ref, Part7Ref, Part8Ref, FooterRef }} 
      />
      <div ref={HomeRef}>
        <Home />
      </div>
      <div ref={Part1Ref}>
        <Page1 />
      </div>
      <div ref={Part2Ref}>
        <Page2 />
      </div>
      <div ref={Part3Ref}>
        <Page3 />
      </div>
      <div ref={Part4Ref}>
        <Page4 />
      </div>
      <div ref={Part5Ref}>
        <Page5 />
      </div>
      <div ref={Part6Ref}>
        <Page6 />
      </div>
      <div ref={Part7Ref}>
        <Page7 />
      </div>
      <div ref={Part8Ref}>
        <Page8 />
      </div>
      <div ref={FooterRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
