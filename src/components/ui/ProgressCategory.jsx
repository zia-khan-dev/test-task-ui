import { memo } from 'react';
import StatusIndicator from './StatusIndicator';

function ProgressCategory({ title, percentage, subCategories }) {
  return (
    <div className="w-full min-w-[96px] flex flex-col gap-1">
      <div className="bg-primary rounded-[10px] h-[90px] flex flex-col items-center justify-center p-2 text-center">
        <h4 className="text-sm font-bold text-white font-cairo leading-[18px] break-words w-full">{title}</h4>
        <span className="text-xs font-bold text-white font-cairo leading-[24px] mt-1 px-2 bg-gray-500/50 rounded-md">{typeof percentage === 'number' ? percentage.toFixed(2) : percentage}%</span>
      </div>
      
      <div className="p-1 h-[342px] overflow-hidden flex flex-col gap-1 bg-background-light rounded-[8px]">
        {subCategories.map((sub, index) => (
          <div 
            key={index} 
            className="bg-white border border-border-color rounded-[6px] flex flex-col items-center justify-center p-2 flex-1 gap-1"
          >
            <p className="text-[11px] text-primary font-cairo font-normal leading-[14px] text-center w-full break-words">
              {sub.name}
            </p>
            <div className="flex gap-1 items-center justify-center flex-wrap">
              {sub.items?.map((item, idx) => (
                <StatusIndicator 
                  key={idx} 
                  status={item.status} 
                  number={item.number} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ProgressCategory);
