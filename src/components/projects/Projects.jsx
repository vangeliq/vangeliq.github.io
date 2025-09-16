import { useState, useMemo, useRef, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectOverlay } from './ProjectOverlay';
import projectData from '../../assets/projectData.json';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldCollapse, setShouldCollapse] = useState(false);
  const gridRef = useRef(null);

  const parseDate = (dateString) => {
    if (!dateString) return new Date(0); // If no date, put at beginning
    const [month, year] = dateString.split(' ');
    const monthIndex = new Date(Date.parse(month + " 1, 2000")).getMonth();
    return new Date(parseInt(year), monthIndex);
  };

  const sortedProjects = useMemo(() => {
    return [...projectData].sort((a, b) => {
      const dateA = parseDate(a.startDate);
      const dateB = parseDate(b.startDate);
      return dateB - dateA; // Descending order (newest first)
    });
  }, []);

  // Extract unique specializations from project data
  const filters = useMemo(() => {
    const specializations = sortedProjects.flatMap(project => project.specialization || []);
    const uniqueSpecializations = [...new Set(specializations)];
    return ['All', ...uniqueSpecializations];
  }, [sortedProjects]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    return sortedProjects.filter((project) => {
      if (activeFilter === "All") {
        return project.isActive;
      }
      return project.isActive && project.specialization && project.specialization.includes(activeFilter);
  });
  }, [activeFilter, sortedProjects]);

  // Measure grid height to determine if collapse is needed
  useEffect(() => {
    const checkHeight = () => {
      if (!gridRef.current || filteredProjects.length === 0) {
        setShouldCollapse(false);
        return;
      }

      // Get the first card to measure its height
      const firstCard = gridRef.current.querySelector('div');
      if (!firstCard) {
        setShouldCollapse(false);
        return;
      }

      // Calculate how many rows we currently have
      const gridStyles = window.getComputedStyle(gridRef.current);
      const gridTemplateColumns = gridStyles.gridTemplateColumns;
      const columnsCount = gridTemplateColumns.split(' ').length;
      const rowsCount = Math.ceil(filteredProjects.length / columnsCount);
      
      setShouldCollapse(rowsCount > 2);
    };

    // Check height after the grid has rendered
    const timeoutId = setTimeout(checkHeight, 100);

    // Add resize listener
    window.addEventListener('resize', checkHeight);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', checkHeight);
    };
  }, [filteredProjects]);

  // Show limited projects when collapsed, all when expanded
  const displayedProjects = useMemo(() => {
    if (!shouldCollapse || isExpanded) {
      return filteredProjects;
    }
    
    // Calculate how many projects fit in 2 rows
    if (!gridRef.current) return filteredProjects;
    
    const gridStyles = window.getComputedStyle(gridRef.current);
    const gridTemplateColumns = gridStyles.gridTemplateColumns;
    const columnsCount = gridTemplateColumns.split(' ').length;
    const projectsInTwoRows = columnsCount * 2;
    
    return filteredProjects.slice(0, projectsInTwoRows);
  }, [filteredProjects, isExpanded, shouldCollapse]);


  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseOverlay = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-medium mb-4">
          My Projects
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {/* Expand/Collapse Button */}
      {shouldCollapse && (
        <div className="text-center mt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
          >
            {isExpanded ? 'Show Less' : `Show More (${filteredProjects.length - displayedProjects.length} more)`}
          </button>
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No projects found for the selected filter.
          </p>
        </div>
      )}

      {/* Project Overlay */}
      {selectedProject && (
        <ProjectOverlay
          project={selectedProject}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
};
