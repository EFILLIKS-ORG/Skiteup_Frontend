import { Sidebar } from "./layouts/components/Sidebar";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar activeItem="Dashboard" />
    </div>
  );
}

export default App;