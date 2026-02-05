import { memo } from 'react';

const statusColorClasses = {
  'not-started': 'bg-status-not-started',
  'in-progress': 'bg-status-in-progress',
  'completed': 'bg-status-completed',
  'partially-uploaded': 'bg-status-partially-uploaded',
  'fully-uploaded': 'bg-status-fully-uploaded',
  'delayed': 'bg-status-delayed',
};

function StatusIndicator({ status, number }) {
  const bgColorClass = statusColorClasses[status] || statusColorClasses['not-started'];
  
  return (
    <div 
      className={`rounded-full w-5 h-5 flex items-center justify-center text-white font-cairo font-bold text-[9px] leading-[12px] ${bgColorClass}`}
    >
      {number}
    </div>
  );
}

export default memo(StatusIndicator);
