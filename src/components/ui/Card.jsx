export default function Card({ children, className = '', title, subtitle, justifyBetween }) {
  return (
    <div className={`bg-white rounded-[10px] border border-border-color p-6 ${className} ${justifyBetween ? 'flex flex-col min-h-[280px]' : ''}`}>
      {title && (
        <div className={justifyBetween ? 'shrink-0' : 'mb-4'}>
          <h3 className="text-[16px] font-bold text-primary font-cairo capitalize leading-[16px]">{title}</h3>
          {subtitle && <p className="text-sm text-secondary mt-1 font-cairo">{subtitle}</p>}
        </div>
      )}
      {justifyBetween ? <div className="flex-1 flex flex-col justify-end min-h-0">{children}</div> : children}
    </div>
  );
}
