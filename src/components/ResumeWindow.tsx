import React, { useState } from 'react';

interface ResumeWindowProps {
  experienceContent: string;
  skillsContent: string;
  educationContent: string;
}

const ResumeWindow: React.FC<ResumeWindowProps> = ({
  experienceContent,
  skillsContent,
  educationContent
}) => {
  const [selectedTab, setSelectedTab] = useState<string>('experience');

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex resume-container">
      <div className="w-64 h-screen window">
        <div className="p-8 pt-48 text-center headings">
          <div
            className={`py-2 cursor-pointer relative heading ${selectedTab === 'experience' ? 'active' : ''}`}
            onClick={() => handleTabClick('experience')}
          >
            Experience
            {selectedTab === 'experience' && <span className="absolute bottom-0 left-0">___</span>}
          </div>
          <div
            className={`py-2 cursor-pointer relative heading ${selectedTab === 'skills' ? 'active' : ''}`}
            onClick={() => handleTabClick('skills')}
          >
            Skills
            {selectedTab === 'skills' && <span className="absolute bottom-0 left-0">___</span>}
          </div>
          <div
            className={`py-2 cursor-pointer relative heading ${selectedTab === 'education' ? 'active' : ''}`}
            onClick={() => handleTabClick('education')}
          >
            Education
            {selectedTab === 'education' && <span className="absolute bottom-0 left-0">___</span>}
          </div>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto content">
        {selectedTab === 'experience' && <div dangerouslySetInnerHTML={{ __html: experienceContent }} />}
        {selectedTab === 'skills' && <div dangerouslySetInnerHTML={{ __html: skillsContent }} />}
        {selectedTab === 'education' && <div dangerouslySetInnerHTML={{ __html: educationContent }} />}
      </div>
    </div>
  );
};

export default ResumeWindow;
