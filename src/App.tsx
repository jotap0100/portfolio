import React, { useState } from 'react';
import './App.css';
import { Menu } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { SubjectView } from './components/SubjectView';
import { SenaiLogo } from './components/SenaiLogo';

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
      {/* Header */}
      <header className="top-header">
        <button className="menu-trigger" onClick={toggleSidebar}>
          <Menu size={24} />
          <span>Matérias</span>
        </button>
        
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
           <Home />
        ) : (
           <SubjectView viewState={view} onBack={navigateToHome} />
        )}
      </main>
    </div>
  );
}

export default App;
