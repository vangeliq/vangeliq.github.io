import Icons from "../../assets/Icons";

export const ProjectCard = ({ project, onClick }) => {
  // Format date display
  const formatDateRange = (startDate, endDate) => {
    if (!endDate) {
      return startDate;
    }
    return `${startDate} - ${endDate}`;
  };

  return (
    <div 
      onClick={onClick}
      className="group bg-background border border-muted rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:border-primary/20"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-muted overflow-hidden">
        {project.image ? (
          <img 
            src={`${project.image}`} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-foreground/10 rounded-full flex items-center justify-center">
                <Icons.Misc.GhostIcon className="w-16 h-16 text-foreground/40"/>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Date and Title */}
        <div className="mb-3">
          <p className="text-sm text-muted-foreground mb-1">
            {formatDateRange(project.startDate, project.endDate)}
          </p>
          <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>


        {/* Short Description */}
        <p className="text-foreground-muted text-sm mb-4 line-clamp-2">
          {project["short description"]}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Click indicator */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Icons.Navigation.RedirectIcon />
        </div>
      </div>
    </div>
  );
};

