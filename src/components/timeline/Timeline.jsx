import timelineData from '../../assets/timelineData.json'
import TimelineCard from './TimelineCard';
export function Timeline() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5  bg-foreground-muted/20"></div>
        
        {timelineData.map((item, index) => (
          <TimelineCard key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}