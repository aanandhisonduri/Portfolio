// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/portfolio.png";
// Profile Image
import Aanandhi from "./assets/Aanandhi.jpeg";
// Tech stack images
import html from "./assets/icons/html.png";
import css from "./assets/icons/css.png";
import js from "./assets/icons/js.png";
import react from "./assets/icons/react.png";
import angular from "./assets/techstack/angular.svg";
import mongoDb from "./assets/icons/mongoDb.png"
import vscode from "./assets/techstack/vscode.png";
import docker from "./assets/techstack/docker.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/icons/postman.png";
import mySql from "./assets/techstack/mySql.png";
import gcp from "./assets/techstack/gcp.png";
import nodeJs from "./assets/icons/nodeJs.png";
import flask from "./assets/icons/flask.svg";
import aws from "./assets/icons/aws.png";
import swift from "./assets/icons/swift.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.png";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.png";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
//Education Images
import srm from "./assets/icons/srm.png";
import usc from "./assets/icons/USC.png";
//Work Images
import eze from "./assets/icons/eze.png";
import mit from "./assets/icons/mitsq.png";
import workup from "./assets/icons/workup.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Aanandhi Sonduri Panthangi",
  img: Aanandhi,
  about: `
  
  Hi, I’m a graduate student in Computer Science at USC, set to graduate in May 2025, and I’m passionate about technology and innovation. As I navigate through my Master's journey, I’m diving deep into full-stack development and software engineering, eager to apply my skills in the professional world.

I thrive on transforming complex problems into user-friendly applications and systems, driven by a solid foundation in programming, machine learning, and web development. I’m particularly excited about roles that challenge me and allow me to contribute to cutting-edge projects.

Currently, I’m actively seeking entry-level opportunities where I can grow, learn, and make a tangible impact. Let’s connect and explore how I can bring value to your team!
`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/aanandhi-sonduri-a814a31a4/",
  github: "https://github.com/Aanandhi-sonduri",
  twitter: "https://twitter.com/",
  resume: "https://drive.google.com/file/d/1f0OF7tciv-mNba8J__346XXKakShGUGg/view?usp=sharing",

};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Associate Software Developer",
    Company: `Eze Software (SS&C)`,
    Location: "Hyderabad, India",
    Type: "Full Time",
    Logo: eze,
    Duration: "May 2022 - July 2023",
  },
  {
    Position: "Software Engineer Intern",
    Company: `WorkUp`,
    Location: "Los Angeles, USA",
    Type: "Internship",
    Logo : workup,
    Duration: "May 2024 - July 2024",
  },
  {
    Position: "Product Development Intern",
    Company: `Eze Software (SS&C)`,
    Location: "Hyderabad, India",
    Type: "Internship",
    Logo: eze,
    Duration: "Feb 2022 - May 2022",
  },
  {
    Position: "Research Intern",
    Company: `MIT Square`,
    Location: "Remote",
    Type: "Internship",
    Logo: mit,
    Duration: "Jul 2021 - Oct 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "University of Southern California",
    Company: "Masters in Computer Science",
    Location: "Los Angeles",
    Type: "Full Time",
    Logo: usc,
    Duration: "Aug 2023 - Present",
    Subjects: [
      "Analysis of Algorithms",
      "Database Systems",
      "Web Technologies",
      "Machine Learning for Data Science",
    ],
  },
  {
    Position: "SRM University",
    Company: `Bachelor of Technology in Computer Science and Engineering`,
    Location: "Chennai",
    Type: "Full Time",
    Logo: srm,
    Subjects: [
      "Data Structures and Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Object Oriented Programming",
    ],
    Duration: "July 2018 - May 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  angular: angular,
  vscode: vscode,
  docker: docker,
  mongoDb: mongoDb,
  postman: postman,
  mySql: mySql,
  npm: npm,
  git: git,
  github: github,
  gcp: gcp,
  nodeJs: nodeJs,
  flask: flask,
  swift: swift,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Dynamic Stock Search Application",
    image: projectImage1,
    description: `Developed a dynamic stock search application for both web and mobile platforms. Using React.js for the web frontend and Node.js for the backend, I ensured a responsive, interactive interface and robust data processing. MongoDB enabled efficient, synchronized data storage across platforms. The iOS app, built with SwiftUI, provided a seamless user experience with real-time stock data integration via Finhub API and Polygon API. Hosting on Google Cloud Platform (GCP) optimized performance and load times, while responsive web design (RWD) ensured a consistent experience across all devices.`,
    techstack: "React, JavaScript, NodeJs, MongoDB, GCP, RWD",
    previewLink: "https://stock-search-app-fe.uw.r.appspot.com/search/home",
  },
  {
    title: "Real-Time Color Detection Algorithm: Precision in RGB Identification with Python",
    image: projectImage2,
    description: `I engineered a real-time color detection algorithm in Python, integrating advanced computer vision techniques to accurately identify a diverse range of colors, including vital RGB variations such as red, green, and blue. Achieving an outstanding average accuracy of 95%, this project showcases my expertise in leveraging Python's robust libraries like NumPy and Pandas alongside sophisticated NLP and Markov Chain methodologies. By delivering a solution that balances precision with computational efficiency, I demonstrated not only my technical proficiency but also my capability to innovate and solve complex challenges in computer vision."`,
    techstack: "Python, OpenCV, NumPy, Pandas",
    previewLink: "https://google.com",
    githubLink: "https://github.com/Aanandhi-sonduri/Color-Detection-Project-Using-Open-Cv",
  },
  {
    title: "Song Lyrics Generator using Markov Chains",
    image: projectImage3,
    description: `I created an 85% accurate predictive text model using Markov Chains for generating song lyrics. This project utilized Python's NLP capabilities to analyze and predict song lyrics based on existing data. By leveraging advanced techniques in machine learning, I demonstrated both technical proficiency in Python and creative application of AI algorithms in artistic contexts.`,
    techstack: "Python, NLP, Markov Chain, NumPy, Pandas",
    githubLink: "https://github.com/Aanandhi-sonduri/Text-Generation-Using-Markovs-Chain",
  },
  {
    title: "Cryptocurrency Price Prediction Using ARIMA",
    image: projectImage4,
    description: `As a Research Intern, I developed a machine learning model leveraging cryptocurrency and blockchain data to predict daily cryptocurrency prices. By analyzing historical data, I enhanced the model's accuracy, achieving a significant 20% improvement over previous approaches. Using Python, I implemented advanced techniques including Time Series Analysis and Feature Engineering, resulting in an impressive 90% accuracy rate. This project not only deepened my understanding of machine learning in financial markets but also culminated in a research paper documenting my findings.`,
    techstack: "Python, ARIMA, Machine Learning, Time Series Analyis, Feature EaQ2ngineering",
    githubLink: "https://github.com/Aanandhi-sonduri/Cryptocurrency-Price-Prediction-ARIMA",
  },
  
];

// Enter your Contact Details here
export const contactDetails = {
  email: "asonduri@usc.edu",
  phone: "+1 2242476922",
};
