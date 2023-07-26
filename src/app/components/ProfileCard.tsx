import React, { useState } from "react";
import { Button } from "./common";
import AboutTabContent from "./AboutTabContent";
import TechSkillsTabContent from "./TechSkillsTabContent";
import ExperienceTabContent from "./ExperienceTabContent";
import ContactTabContent from "./ContactTabContent";

const ProfileCard: React.FC = () => {
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
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "about"
                ? "border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("about")}
          >
            About
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "techSkills"
                ? "border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("techSkills")}
          >
            Tech Skills
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "experience"
                ? "border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("experience")}
          >
            Experience
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              activeTab === "contact"
                ? "border-b-4 border-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </button>
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
