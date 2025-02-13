import isu from "@/public/images/isu.jpg";
import yellow from "@/public/images/yellow.jpeg";
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
        role: "Web Developer",
        company: "Indiana State University",
        startDate: "Aug 2022",
        endDate: "May 2024",
        logo: isu,
        url: "https://indianastate.edu/",
      },
      {
        role: "Software Engineer",
        company: "Yellow.ai",
        startDate: "Dec 2019",
        endDate: "July 2022",
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
        institution: "JNTUA College of Engineering",
        startDate: "Aug 2016",
        endDate: "May 2020",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWAnUmdjBIuM7pshy50DDlfAfWTeXgQAoGw&s",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWWAnUmdjBIuM7pshy50DDlfAfWTeXgQAoGw&s",
      },
    ],
  },
};
