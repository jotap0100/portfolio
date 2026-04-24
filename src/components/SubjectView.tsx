import React, { useMemo } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import './SubjectView.css';
import type { ViewState } from '../App';
import { subjectsData } from '../data';

interface SubjectViewProps {
  viewState: Extract<ViewState, { type: 'subject' }>;
  onBack: () => void;
}

export const SubjectView: React.FC<SubjectViewProps> = ({ viewState, onBack }) => {
  // Find category, subject and trimester names based on IDs
  const viewData = useMemo(() => {
    const category = subjectsData.find(c => c.id === viewState.categoryId);
    const subject = category?.subjects?.find(s => s.id === viewState.subjectId);
    
    // If we have a nested subject, find trimester in it. Else find in category.
    const trimesters = subject ? subject.trimesters : category?.trimesters;
    const trimester = trimesters?.find(t => t.id === viewState.trimesterId);

    return {
      categoryName: category?.name || '',
      subjectName: subject?.name,
      trimesterName: trimester?.name || '',
      description: trimester?.description || '',
      activities: trimester?.activities || [],
    };
  }, [viewState]);

  return (
    <div className="subject-view-container animate-fade-in">
      
      {/* Dynamic Banner */}
      <section className="subject-banner">
        <div className="subject-gradient-overlay" />
        
        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={20} />
          <span>Voltar ao Início</span>
        </button>

        <div className="subject-banner-content">
          <p className="subject-category">{viewData.categoryName}</p>
          <h1 className="subject-title">
            {viewData.subjectName ? `${viewData.subjectName} - ${viewData.trimesterName}` : `${viewData.categoryName} - ${viewData.trimesterName}`}
          </h1>
        </div>
      </section>

      {/* Main Content Area para a Matéria */}
      <section className="subject-content max-w-container">
        
        <h3 className="sub-section-title">Galeria de Projetos e Atividades</h3>
        
        <div className="subject-gallery">
          {viewData.activities.map((activity) => (
            <div key={activity.id} className="gallery-card">
                <div className="gallery-img">
                  <ExternalLink size={32} opacity={0.2} />
                </div>
                <div className="gallery-info">
                  <h4>{activity.title}</h4>
                  <p>{activity.description}</p>
                  
                  {activity.critique && activity.critique !== activity.description && (
                    <div className="activity-critique">
                      <strong>Reflexão Pessoal:</strong> {activity.critique}
                    </div>
                  )}
                  
                  {activity.skills && (
                    <div className="activity-skills">
                      <strong>Habilidades:</strong> {activity.skills}
                    </div>
                  )}

                  {activity.link && (
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <a 
                        href={activity.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="activity-link-btn"
                      >
                        <ExternalLink size={16} />
                        {activity.link.includes('drive.google.com') ? 'Ver Documento' : 'Acessar Jogo / Site'}
                      </a>
                      
                      {activity.link2 && (
                        <a 
                          href={activity.link2} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="activity-link-btn secondary"
                        >
                          <ExternalLink size={16} />
                          {activity.link2.includes('drive.google.com') ? 'Ver Documento' : 'Acessar Jogo / Site'}
                        </a>
                      )}
                    </div>
                  )}
                </div>
            </div>
          ))}
        </div>

      </section>
      
      {/* Minimal Footer */}
      <footer className="minimal-footer">
        <p>© 2026 Joao Pedro Cagliari.</p>
      </footer>

    </div>
  );
};
