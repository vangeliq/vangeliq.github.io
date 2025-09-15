export default function TimelineCard({index, item}) {
  return (
          <div key={index} className="relative flex items-start mb-12 last:mb-0">
            {/* Year marker */}
            <div className="flex-shrink-0 w-16 h-16 bg-background border-2 border-foreground-muted/20 rounded-full flex items-center justify-center relative z-10">
              <span className="text-sm font-medium ">{item.year}</span>
            </div>
            
            {/* Content */}
            <div className="ml-8 flex-1">
              <div className="bg-background-muted border border-foreground-muted/15  rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                {item.location && (
                  <p className="text-sm text-foreground-muted mb-3">@ {item.location}</p>
                )}
                <p className="text-foreground-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
  );
}