import timelineData from '../../assets/timelineData.json'

export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
        
        {timelineData.map((item, index) => (
          <div key={index} className="relative flex items-start mb-12 last:mb-0">
            {/* Year marker */}
            <div className="flex-shrink-0 w-16 h-16 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center relative z-10">
              <span className="text-sm font-medium">{item.year}</span>
            </div>
            
            {/* Content */}
            <div className="ml-8 flex-1">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                {item.location && (
                  <p className="text-sm text-gray-600 mb-3">@ {item.location}</p>
                )}
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}