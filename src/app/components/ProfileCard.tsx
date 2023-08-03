import React, { useState } from "react";
import Button from "./common/Button";
import AboutTabContent from "./AboutTabContent";
import TechSkillsTabContent from "./TechSkillsTabContent";
import ExperienceTabContent from "./ExperienceTabContent";
import ContactTabContent from "./ContactTabContent";

const ProfileCard: React.FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-x1 font-semibold">Profile Card</h1>
      </div>
      <div className="border-b mb-4">
        <nav className="-mb-px flex space-x-4">
          <Button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "about"
                ? "border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("about")}
          >
            About
          </Button>
          <Button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "techSkills"
                ? "border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("techSkills")}
          >
            Tech Skills
          </Button>
          <Button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "experience"
                ? "border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("experience")}
          >
            Experience
          </Button>
          <Button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "contact"
                ? "border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </Button>
        </nav>
      </div>
      {activeTab === "about" && <AboutTabContent />}
      {activeTab === "techSkills" && <TechSkillsTabContent />}
      {activeTab === "experience" && <ExperienceTabContent />}
      {activeTab === "contact" && <ContactTabContent />}
    </div>
  );
};

export default ProfileCard;
