import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WorkDetail } from './components/WorkDetail';
import { Index } from './components/index/Index';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/works/:slug" element={<WorkDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
