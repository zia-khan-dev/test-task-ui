import Timeline from '../ui/Timeline';
import { CaretDownIcon } from '../../utils/icons';

export default function ProjectTimeline({ items }) {
  return (
    <div className="bg-white rounded-[10px] border border-border-color p-4 pb-8 min-h-[159px] md:h-[159px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[16px] font-bold text-primary font-cairo capitalize">
          Project Timeline
        </h3>
        <div className="bg-white border border-border-color rounded-[10px] h-[34px] px-3 flex items-center gap-2 cursor-pointer">
          <span className="text-[14px] font-medium text-primary font-cairo">2026</span>
          <CaretDownIcon />
        </div>
      </div>
      
      <Timeline items={items} />
    </div>
  );
}
