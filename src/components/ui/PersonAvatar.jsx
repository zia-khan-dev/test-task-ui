import { Icon, icons } from '../../utils/icons';

const sizeClasses = {
  sm: 'w-9 h-9',
  md: 'w-12 h-12',
};

export default function PersonAvatar({ image, size = 'md', className = '', variant = 'light' }) {
  const sizeClass = sizeClasses[size] || sizeClasses.md;
  const bgClass = variant === 'white' ? 'bg-white' : 'bg-background-light';
  return (
    <div className={`rounded-full overflow-hidden ${bgClass} border border-border-color flex items-center justify-center shrink-0 ${sizeClass} ${className}`}>
      {image ? (
        <img src={image} alt="" className="w-full h-full object-cover" />
      ) : (
        <Icon src={icons.person} size="100%" />
      )}
    </div>
  );
}
