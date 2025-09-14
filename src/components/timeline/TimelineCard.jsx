export function TimelineCard(props) {
  return (
          <div key={props.index} className="relative flex items-start mb-12 last:mb-0">
            {/* Year marker */}
            <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center relative z-10">
              <span className="text-sm font-medium">{props.year}</span>
            </div>
            
            {/* Content */}
            <div className="ml-8 flex-1">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">{props.title}</h3>
                {props.location && (
                  <p className="text-sm text-gray-600 mb-3">@ {props.location}</p>
                )}
                <p className="text-gray-700 leading-relaxed">{props.description}</p>
              </div>
            </div>
          </div>
  );
}