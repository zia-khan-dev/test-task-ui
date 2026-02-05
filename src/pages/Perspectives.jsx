import { Fragment, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { usePerspectiveDetail } from '../hooks/usePerspectiveDetail';
import { Icon, icons, ChevronSortIcon, SendIcon } from '../utils/icons';
import PerspectiveCard from '../components/ui/PerspectiveCard';
import PersonAvatar from '../components/ui/PersonAvatar';
import StatusBadge from '../components/ui/StatusBadge';

const EVIDENCE_CARDS = [
  { key: 'total', label: 'Total Evidence', icon: icons.fileUpload },
  { key: 'underReview', label: 'Under Review Evidence', icon: icons.fileSecurity },
  { key: 'inProgress', label: 'In Progress Evidence', icon: icons.folder },
  { key: 'completed', label: 'Completed Evidence', icon: icons.fileVerified },
];

const OVERVIEW_SECTIONS = [
  { key: 'objective', label: 'Objective' },
  { key: 'implementationRequirements', label: 'Implementation Requirements' },
  { key: 'evidenceDocuments', label: 'Evidence Documents' },
  { key: 'relatedRegulations', label: 'Related Regulations' },
  { key: 'scope', label: 'Scope' },
];

const tabBtnClass = (active) =>
  `px-5 py-2.5 text-[14px] font-cairo rounded-[8px] transition-colors ${active ? 'font-medium text-primary bg-white shadow-sm' : 'font-normal text-secondary hover:text-primary'}`;

export default function Perspectives() {
  const perspectiveDetail = usePerspectiveDetail();
  const { title, category, description, progress, evidence, objective, implementationRequirements, evidenceDocuments, relatedRegulations, scope, leaders, evidenceTable, comments, recentActivities } = perspectiveDetail;
  const [activeTab, setActiveTab] = useState('overview');
  const overviewContent = useMemo(
    () => ({ objective, implementationRequirements, evidenceDocuments, relatedRegulations, scope }),
    [objective, implementationRequirements, evidenceDocuments, relatedRegulations, scope]
  );

  return (
    <div className="space-y-6">
      <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary font-cairo text-[14px] mb-4">
        <Icon src={icons.arrowLeft} size={16} color="primary" />
        <span className="capitalize text-primary font-cairo text-[14px] font-semibold">Digital Transformation Strategic Planning</span>
      </Link>
      <PerspectiveCard
        category={category}
        title={title}
        description={description}
        progress={progress}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {EVIDENCE_CARDS.map(({ key, label, icon }) => (
          <div key={key} className="bg-white rounded-[10px] border border-border-color p-4 flex items-center gap-4">
            <Icon src={icon} size={24} color="error" />
            <div>
              <p className="text-[24px] font-bold text-primary font-cairo leading-tight">{evidence[key]}</p>
              <p className="text-[14px] font-normal text-secondary font-cairo">{label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex p-1 gap-0.5 rounded-[10px] bg-background-light w-fit">
        <button type="button" onClick={() => setActiveTab('overview')} className={tabBtnClass(activeTab === 'overview')}>
          Overview
        </button>
        <button type="button" onClick={() => setActiveTab('evidence')} className={tabBtnClass(activeTab === 'evidence')}>
          Evidence
        </button>
      </div>

      <div className="bg-white rounded-[10px] border border-border-color p-6">
        {activeTab === 'overview' && (
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-4 gap-y-4">
          {OVERVIEW_SECTIONS.map(({ key, label }) => {
            const content = overviewContent[key];
            const isList = Array.isArray(content);
            return (
              <Fragment key={key}>
                <div className="rounded-[10px] bg-background-light p-4 border-r-0 md:border-r border-border-color flex items-center">
                  <p className="text-[14px] font-medium text-primary font-cairo capitalize">{label}</p>
                </div>
                <div className="rounded-[10px] bg-background-light p-4">
                  {isList ? (
                    <div className="text-[14px] font-normal text-primary font-cairo leading-[22px] space-y-1">
                      {content.map((item, i) => (
                        <span key={i} className="block">
                          {String.fromCharCode(65 + i)}. {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[14px] font-normal text-primary font-cairo leading-[22px]">{content}</p>
                  )}
                </div>
              </Fragment>
            );
          })}
        </div>
        )}
        {activeTab === 'evidence' && (
        <div className="space-y-6">
          <div className="rounded-[10px] border border-border-color overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-[14px] font-cairo">
                <thead>
                  <tr className="bg-background-light border-b border-border-color">
                    <th className="text-left py-3 px-4 font-medium text-primary">
                      <span className="inline-flex items-center gap-1">Document Number <ChevronSortIcon /></span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-primary">
                      <span className="inline-flex items-center gap-1">Document Name <ChevronSortIcon /></span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-primary">
                      <span className="inline-flex items-center gap-1">Document Lead <ChevronSortIcon /></span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-primary">
                      <span className="inline-flex items-center gap-1">Document Preparer <ChevronSortIcon /></span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-primary">
                      <span className="inline-flex items-center gap-1">Date <ChevronSortIcon /></span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-primary">
                      <span className="inline-flex items-center gap-1">Due Date <ChevronSortIcon /></span>
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-primary">
                      <span className="inline-flex items-center gap-1">Status <ChevronSortIcon /></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {evidenceTable.map((row, i) => (
                    <tr key={i} className="border-b border-border-color last:border-0 bg-white hover:bg-background-light transition-colors">
                      <td className="py-3 px-4 text-primary">{row.documentNumber}</td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center gap-2">
                          <Icon src={icons.documents} size={18} color="primary" />
                          <span className="text-info font-cairo hover:underline cursor-pointer">{row.documentName}</span>
                        </span>
                      </td>
                      <td className="py-3 px-4 text-primary">{row.documentLead}</td>
                      <td className="py-3 px-4 text-primary">{row.documentPreparer}</td>
                      <td className="py-3 px-4 text-primary">{row.date}</td>
                      <td className="py-3 px-4 text-primary">{row.dueDate}</td>
                      <td className="py-3 px-4">
                        <StatusBadge status={row.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            <div>
              <h3 className="text-[16px] font-bold text-primary font-cairo mb-4">Comments</h3>
              <div className="space-y-4 mb-4">
                {comments.map((c, i) => (
                  <div key={i} className="flex gap-3 p-4 rounded-[10px] border border-border-color bg-white">
                    <div className="w-9 h-9 rounded-full bg-background-light border border-border-color flex items-center justify-center shrink-0">
                      <span className="text-[14px] font-bold text-primary font-cairo">{c.authorInitial}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-baseline gap-2">
                        <p className="text-[14px] font-bold text-primary font-cairo">{c.authorName}</p>
                        <p className="text-[12px] font-normal text-secondary font-cairo shrink-0">{c.date}</p>
                      </div>
                      <p className="text-[14px] font-normal text-primary font-cairo mt-0.5">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <textarea placeholder="Add a comment..." className="w-full min-h-[80px] p-3 rounded-[10px] border border-border-color bg-white text-[14px] font-cairo text-primary placeholder:text-secondary focus:outline-none focus:border-primary resize-y" />
              <button type="button" className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-primary text-white text-[14px] font-medium font-cairo hover:opacity-90 transition-opacity">
                <SendIcon size={16} />
                Post Comment
              </button>
            </div>
            <div className="rounded-[10px] border border-border-color bg-white p-4">
              <h3 className="text-[16px] font-bold text-primary font-cairo mb-4">Recent Activities</h3>
              <div className="divide-y divide-border-color">
                {recentActivities.map((a, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0">
                    <div className="flex gap-3 items-center min-w-0">
                      <span className="w-2 h-2 rounded-full bg-error shrink-0" />
                      <p className="text-[14px] font-normal text-primary font-cairo leading-tight">{a.text}</p>
                    </div>
                    <p className="text-[12px] font-normal text-secondary font-cairo shrink-0">{a.timeAgo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        )}
      </div>

      {activeTab === 'overview' && (
      <div className="bg-white rounded-[10px] border border-border-color p-6">
        <h2 className="text-[16px] font-bold text-primary font-cairo mb-4">Leaders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leaders.map((leader, i) => (
            <div key={i} className="rounded-[10px] bg-background-light p-4 flex items-center gap-4">
              <PersonAvatar image={leader.image} variant="white" />
              <div className="min-w-0">
                <p className="text-[14px] font-bold text-primary font-cairo leading-tight">{leader.name}</p>
                <p className="text-[14px] font-normal text-secondary font-cairo leading-tight mt-0.5">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
}
