import { useState } from 'react';
import './App.css';
import { Menu, ArrowLeft } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { SubjectView } from './components/SubjectView';
import { SenaiLogo } from './components/SenaiLogo';
import { AnimatedBackground } from './components/AnimatedBackground';

// State definition
export type ViewState = 
  | { type: 'home' }
  | { type: 'subject', categoryId: string, subjectId?: string, trimesterId: string };

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navigateToHome = () => setView({ type: 'home' });

  return (
    <div className="app-container">
      <AnimatedBackground />
      {/* Header */}
      <header className="top-header">
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button className="menu-trigger" onClick={toggleSidebar}>
            <Menu size={24} />
            <span>Matérias</span>
          </button>
          
          {view.type !== 'home' && (
            <button className="menu-trigger back-header-btn" onClick={navigateToHome}>
              <ArrowLeft size={20} />
              <span>Voltar</span>
            </button>
          )}
        </div>
        
        {/* School Logo */}
        <div className="logo-wrapper" onClick={navigateToHome} style={{cursor: 'pointer'}}>
          <SenaiLogo />
        </div>
      </header>

      {/* Sidebar Overlay */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onNavigate={(viewState) => {
          setView(viewState);
          setIsSidebarOpen(false);
        }}
        currentView={view}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {view.type === 'home' ? (
           <Home onViewSubjects={toggleSidebar} />
        ) : (
           <SubjectView viewState={view} onBack={navigateToHome} />
        )}
      </main>
    </div>
  );
}

export default App;
