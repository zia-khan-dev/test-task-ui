import ProgressCategory from '../ui/ProgressCategory';

const statusLegend = [
  { label: 'Not Started', status: 'not-started' },
  { label: 'In Progress', status: 'in-progress' },
  { label: 'Completed', status: 'completed' },
  { label: 'Partially Uploaded', status: 'partially-uploaded' },
  { label: 'Fully Uploaded', status: 'fully-uploaded' },
  { label: 'Delayed', status: 'delayed' },
];

const statusColorClasses = {
  'not-started': 'bg-status-not-started',
  'in-progress': 'bg-status-in-progress',
  'completed': 'bg-status-completed',
  'partially-uploaded': 'bg-status-partially-uploaded',
  'fully-uploaded': 'bg-status-fully-uploaded',
  'delayed': 'bg-status-delayed',
};

export default function ProgressStatus({ categories }) {
  return (
    <div className="bg-white rounded-[10px] border border-border-color p-6">
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-[20px] font-bold text-primary font-cairo">Progress Status</h2>
        <div className="grid grid-cols-3 gap-x-4 gap-y-2 w-full sm:w-auto">
          {statusLegend.map((item, index) => (
            <div key={index} className="flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
              <div className={`w-2 h-2 rounded-full shrink-0 ${statusColorClasses[item.status]}`}></div>
              <span className="text-[14px] font-normal text-primary font-cairo leading-[20px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-hidden">
        <div className="grid grid-cols-2 gap-2 lg:flex lg:gap-2 lg:items-start lg:w-full lg:min-w-0">
          {categories.map((category, index) => (
            <div key={index} className="min-w-[96px] lg:flex-1 flex flex-col gap-1">
              <ProgressCategory
                title={category.title}
                percentage={category.percentage}
                subCategories={category.subCategories}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
