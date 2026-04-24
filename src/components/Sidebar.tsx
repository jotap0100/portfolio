import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight, BookOpen, Lock } from 'lucide-react';
import './Sidebar.css';
import { subjectsData } from '../data';
import type { ViewState } from '../App';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewState) => void;
  currentView: ViewState;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate, currentView }) => {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});
  const [openSubjects, setOpenSubjects] = useState<Record<string, boolean>>({});

  const toggleCategory = (id: string) => {
    setOpenCategories(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSubject = (id: string) => {
    setOpenSubjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isTrimesterActive = (catId: string, subId: string | undefined, triId: string) => {
    if (currentView.type === 'home') return false;
    return currentView.categoryId === catId && 
           currentView.subjectId === subId && 
           currentView.trimesterId === triId;
  };

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">
            <BookOpen size={20} className="icon-blue" />
            <h2>Matérias</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-content">
          {subjectsData.map((category) => (
            <div key={category.id} className="accordion-item">
              <button 
                className={`accordion-trigger ${openCategories[category.id] ? 'active' : ''}`}
                onClick={() => toggleCategory(category.id)}
              >
                <span>{category.name}</span>
                {openCategories[category.id] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
              </button>
              
              {openCategories[category.id] && (
                <div className="accordion-content animate-fade-in">
                  
                  {/* If category has nested subjects (like Técnico) */}
                  {category.subjects?.map(subject => (
                    <div key={subject.id} className="nested-accordion-item">
                      <button 
                        className={`nested-accordion-trigger ${openSubjects[subject.id] ? 'active' : ''}`}
                        onClick={() => toggleSubject(subject.id)}
                      >
                        <span>{subject.name}</span>
                        {openSubjects[subject.id] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      </button>

                      {openSubjects[subject.id] && (
                        <div className="trimester-list animate-fade-in">
                          {subject.trimesters.map(tri => (
                            <button 
                              key={tri.id} 
                              className={`trimester-btn ${isTrimesterActive(category.id, subject.id, tri.id) ? 'active-view' : ''} ${tri.locked ? 'locked' : ''}`}
                              onClick={() => !tri.locked && onNavigate({ type: 'subject', categoryId: category.id, subjectId: subject.id, trimesterId: tri.id })}
                            >
                              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <span>{tri.name}</span>
                                {tri.locked && <Lock size={14} className="lock-icon" />}
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* If category has direct trimesters (like Matemática) */}
                  {category.trimesters && (
                    <div className="trimester-list direct-list">
                      {category.trimesters.map(tri => (
                        <button 
                          key={tri.id} 
                          className={`trimester-btn ${isTrimesterActive(category.id, undefined, tri.id) ? 'active-view' : ''} ${tri.locked ? 'locked' : ''}`}
                          onClick={() => !tri.locked && onNavigate({ type: 'subject', categoryId: category.id, trimesterId: tri.id })}
                        >
                          <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <span>{tri.name}</span>
                            {tri.locked && <Lock size={14} className="lock-icon" />}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};
