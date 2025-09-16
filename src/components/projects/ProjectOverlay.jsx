import { useEffect } from 'react';
import Icons from '../../assets/Icons';

export const ProjectOverlay = ({ project, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Format date display
  const formatDateRange = (startDate, endDate) => {
    if (!endDate) {
      return startDate;
    }
    return `${startDate} - ${endDate}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in-0 duration-300">
      <div 
        className="fixed inset-0" 
        onClick={onClose}
        aria-label="Close modal"
      />
      
      <div className="relative bg-background rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
          aria-label="Close"
        >
          <Icons.Navigation.CloseIcon />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Project Image */}
          <div className="relative h-48 md:h-68 overflow-hidden">
            {project.image ? (
              <>
              <img 
                src={`${project.image}`} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icons.Misc.GhostIcon className="w-16 h-16 text-foreground/40"/>
                </div>
              </div>
            )}
          </div>

          {/* Project Content */}
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="mb-6">
              <p className="text-muted-foreground mb-2">
                {formatDateRange(project.startDate, project.endDate)}
              </p>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground mb-3">
                {project.title}
              </h2>
              <p className="text-lg text-foreground-muted">
                {project["short description"]}
              </p>
            </div>

            {/* Full Description */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-foreground mb-3">About This Project</h3>
              <p className="text-foreground-muted leading-relaxed whitespace-pre-wrap">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-foreground mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-accent text-accent-foreground rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.githublink && (
                <a
                  href={project.githublink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Icons.Social.Githubicon className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              )}
              {project.livelink && (
                <a
                  href={project.livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
                >
                  <Icons.Navigation.RedirectIcon className="w-4 h-4 mr-2" />
                  View Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};