import { AcademicCapIcon, BookOpenIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
import { t } from "i18next";
import { useTranslation } from "react-i18next";






 export const criteria = [
    'Young ladies 16-23 of Latina descent, ESL Learner Encouraged',
    'Lives in the Sacramento Valley',
    'At Risk or Discouraged from School',
    'Each applicant will be asked to submit a 2-3 min video, audio or writing outlining who they are and why they would like to participate in the empowerment conference',
    'Each applicant who is accepted will be awarded a plus one ticket to invite whomever supports them- sister, mom, prima, teacher, neighbor, friend, boss'
    
  ];

 export const missionDetails = [
    {
        title: t('Help-1-card-title'),
        intro: t('Help-1-card-paragraph'),
        description: [
        'Create an equitable educational landscape.',
        'Seamlessly connect non-profits, schools, and workplaces.',
        'Ensure every student has access to tools and resources for success.',
        ],
        icon: <GlobeAltIcon className="h-10 w-10 text-ciel mb-2" />,
         src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/mission/bridge'
    },
    {
        title: t('Help-2-card-title'),
        intro: t('Help-2-card-paragraph'),
        description: [
        'Recognize regional workforce shortages.',
        'Actively curate and distribute content tailored to address these gaps.',
        'Align education with the needs of the workforce.',
        'Empower students with knowledge and skills for success.',
        ],
        icon: <BookOpenIcon className="h-10 w-10 text-ciel mb-2" />,
         src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/mission/curation'
    },
    {
        title: t('Help-3-card-title'),
        intro: t('Help-3-card-paragraph'),
        description: [
        'Address financial barriers faced by students.',
        'Provide immediate micro scholarships.',
        'Strategically designed to increase access to higher education.',
        'Enable students to pursue academic and professional aspirations.',
        ],
        icon: <AcademicCapIcon className="h-10 w-10 text-ciel mb-2" />,
        src:'https://res.cloudinary.com/dqr6k0yey/image/upload/f_auto,q_auto/v1/mission/scholarship'
    },

  ];

