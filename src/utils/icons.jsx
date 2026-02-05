import homeIcon from '../assets/icons/home.svg';
import perspectivesIcon from '../assets/icons/perspectives.svg';
import tasksIcon from '../assets/icons/tasks.svg';
import documentsIcon from '../assets/icons/documents.svg';
import reportsIcon from '../assets/icons/reports.svg';
import usersIcon from '../assets/icons/users.svg';
import chartBarLineIcon from '../assets/icons/chartBarLine.svg';
import folderCheckIcon from '../assets/icons/folderCheck.svg';
import folderIcon from '../assets/icons/folder.svg';
import fileVerifiedIcon from '../assets/icons/fileVerified.svg';
import fileUploadIcon from '../assets/icons/fileUpload.svg';
import fileSecurityIcon from '../assets/icons/fileSecurity.svg';
import searchIcon from '../assets/icons/search.svg';
import arrowLeftIcon from '../assets/icons/arrowLeft.svg';
import notificationIcon from '../assets/icons/notification.svg';

export const icons = {
  home: homeIcon,
  perspectives: perspectivesIcon,
  tasks: tasksIcon,
  documents: documentsIcon,
  reports: reportsIcon,
  users: usersIcon,
  chartBarLine: chartBarLineIcon,
  folderCheck: folderCheckIcon,
  folder: folderIcon,
  fileVerified: fileVerifiedIcon,
  fileUpload: fileUploadIcon,
  fileSecurity: fileSecurityIcon,
  search: searchIcon,
  arrowLeft: arrowLeftIcon,
  notification: notificationIcon,
};

export function Icon({ src, alt = '', className = '', size = 16, color }) {
  const style = { width: size, height: size };
  
  if (color === 'primary') {
    style.filter = 'brightness(0) saturate(100%) invert(12%) sepia(40%) saturate(2000%) hue-rotate(200deg) brightness(0.9)';
  } else if (color === 'white') {
    style.filter = 'brightness(0) invert(1)';
  } else if (color === 'error') {
    style.filter = 'brightness(0) saturate(100%) invert(12%) sepia(100%) saturate(5000%) hue-rotate(350deg)';
  } else if (color === 'sidebar-hover') {
    style.filter = 'brightness(0) saturate(100%) invert(60%) sepia(30%) saturate(500%) hue-rotate(180deg)';
  }
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      style={style}
    />
  );
}

export function CaretDownIcon({ className = '', size = 12 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 12 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M3 4.5L6 7.5L9 4.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}
