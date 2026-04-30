
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ActiveAssignments } from './pages/active-assignments/ActiveAssignments';
import { PastSubmissions } from './pages/past-submissions/PastSubmissions';
import { Grades } from './pages/grades/Grades';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/active-assignments" replace />} />
            <Route path="/active-assignments" element={<ActiveAssignments />} />
            <Route path="/past-submissions" element={<PastSubmissions />} />
            <Route path="/grades" element={<Grades />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
