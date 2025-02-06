import isu from "@/public/images/isu.jpg";
import yellow from "@/public/images/yellow.jpeg";
import terralogic from "@/public/images/terralogic.jpeg";
import infosys from "@/public/images/infosys.png";

export const about = {
  experience: {
    jobs: [
      {
        role: "Technology Analyst",
        company: "Infosys",
        startDate: "Oct 2024",
        endDate: "Current",
        logo: infosys,
        url: "https://www.infosys.com/",
      },
      {
        role: "Technology Analyst",
        company: "Terralogic",
        startDate: "Mar 2022",
        endDate: "Oct 2024",
        logo: terralogic,
        url: "https://terralogic.com/",
      },
      {
        role: "Software Engineer",
        company: "Indiana State University",
        startDate: "Jan 2020",
        endDate: "Dec 2021",
        logo: isu,
        url: "https://indianastate.edu/",
      },
      {
        role: "Intern",
        company: "Yellow.ai",
        startDate: "Jul 2018",
        endDate: "Dec 2019",
        logo: yellow,
        url: "https://yellow.ai/",
      },
    ],
  },
  education: {
    schools: [
      {
        degree: "Master's in Computer Science",
        institution: "Indiana State University",
        startDate: "Jan 2020",
        endDate: "Dec 2021",
        logo: isu,
        url: "https://jntuacep.ac.in/",
      },
      {
        degree: "Bachelor's in Computer Science",
        institution: "Yellow University",
        startDate: "Aug 2016",
        endDate: "May 2020",
        logo: yellow,
        url: "https://indianastate.edu/",
      },
    ],
  },
};
