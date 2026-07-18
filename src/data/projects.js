import fyppic from "../assets/fypmap.webp";
import soflepic from "../assets/sofle.jpg";
import cmspic from "../assets/cmspic.png";

export const spotlightProjects = [
    {
        title: "Real-time Water Quality Monitoring System",
        description:
            "Final-year dissertation exploring semantic IoT data management using FIWARE's NGSI-LD standard. Built a linked-data context broker pipeline for real-time sensor data. Achieved 89%.",
        tech: ["Python (FastAPI)", "React.js", "Docker", "FIWARE"],
        link: "https://github.com/PeterJacksonn/final-year-project",
        image: fyppic,
    },
    {
        title: "Complaint Management System",
        description:
            "A proof of concept implementation featuring JWT-based authentication, role-based access control, and a Dockerised full-stack architecture.",
        tech: ["Python (FastAPI)", "React.js", "PostgreSQL"],
        link: "https://github.com/PeterJacksonn/saad-cms-poc",
        image: cmspic,
    },
    {
        title: "Custom Built Keyboard",
        description:
            "Custom built Sofle split keyboard. Hand-soldered and assembled, uses Vial firmware.",
        tech: ["Vial"],
        link: null,
        image: soflepic,
    },
];

export const projects = [
    {
        title: "Paydle",
        description:
            "Daily game - guess the annual salary of UK public figures. Built with Next.js and deployed on Vercel.",
        tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
        link: "https://github.com/PeterJacksonn/paydle",
        liveUrl: "https://paydle.vercel.app",
    },
    {
        title: "dev",
        description:
            "My personal dev environment: dotfiles, configs and setup scripts for my Linux setup (i3 & Hyprland).",
        tech: ["Arch Linux", "Bash", "Hyprland", "Neovim"],
        link: "https://github.com/PeterJacksonn/dev",
    },
];
