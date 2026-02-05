const statusStyles = {
  Approved: 'bg-success/10 text-success',
  'Pending Review': 'bg-warning/10 text-warning',
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] || 'bg-background-light text-secondary';
  return (
    <span className={`inline-flex px-2 py-1 rounded text-[12px] font-medium font-cairo ${style}`}>
      {status}
    </span>
  );
}
