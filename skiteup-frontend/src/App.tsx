import Dashboard from './pages/teacher/Teacherdashboard/Dashboard';
import AuraBackground from './components/ui/AuraBackground/AuraBackground';
import LargeConstellationBackground from './components/ui/LargeConstellationBackground/LargeConstellationBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <AuraBackground />
      <LargeConstellationBackground opacity={0.65} />

      <div className="relative z-10">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
