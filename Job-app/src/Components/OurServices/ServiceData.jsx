import Interview from "../../assets/ServicesImages/Interview.jpeg";
import jobSearch from "../../assets/ServicesImages/jobSearch.png";
import Network from "../../assets/ServicesImages/Network.jpeg";
import Resume from "../../assets/ServicesImages/Resume.jpeg";
import Salary from "../../assets/ServicesImages/Salary.png";
import skilldevelop from "../../assets/ServicesImages/skilldevelop.jpeg";

// Service data
const ServiceData = [
  {
    id: 1,
    service: "Job Search Assistance",
    description:
      "We provide personalized assistance in navigating the job market, utilizing advanced search functionalities tailored to your preferences and qualifications.",
    expandedContent: [
      "Finding the right job can be a daunting task, especially in today's competitive landscape. Our Job Search Assistance service offers a personalized approach to help you navigate the job market effectively. We understand that each individual's career path is unique, which is why our platform includes advanced search functionalities tailored to your specific preferences and qualifications.",
      "By utilizing our extensive database of job listings, you can discover opportunities that align with your career aspirations and skill set. We partner with a variety of companies across different industries, providing you with access to job postings that you may not find elsewhere. Whether you're just starting out or seeking a new challenge, our job search tools make the process smoother and more efficient.",
      "Additionally, our team of experts is always available to provide support and guidance throughout your job search process. From crafting targeted applications to following up with potential employers, we are here to assist you every step of the way. Together, we can ensure that you're not just applying to jobs but making informed career choices.",
    ],
    imageUrl: jobSearch,
  },
  {
    id: 2,
    service: "Resume Optimization",
    description:
      "Our service includes tools and resources to enhance your resume's visibility, helping you land interviews with ease.",
    expandedContent: [
      "Your resume is often the first impression potential employers have of you, and making it stand out is crucial. With our Resume Optimization service, we provide tools and resources designed to enhance your resume's visibility and impact. Our expert guidance focuses on crafting a professional resume that effectively highlights your skills, experiences, and achievements.",
      "In today's job market, many companies use Applicant Tracking Systems (ATS) to screen resumes. Our service helps ensure that your resume is ATS-friendly by incorporating the right keywords and formatting. This increases your chances of passing the initial screening and landing an interview.",
      "We also offer tips on how to tailor your resume to specific job descriptions. Whether you're applying for a technical role or a creative position, we'll help you present yourself in the best light. With our resume optimization strategies, you can feel confident that your resume will capture the attention of hiring managers.",
    ],
    imageUrl: Resume,
  },
  {
    id: 3,
    service: "Networking Opportunities",
    description:
      "Connect with professionals in your industry to expand your network and enhance your career prospects.",
    expandedContent: [
      "In today's job market, networking is more important than ever. Our Networking Opportunities service connects you with professionals in your industry, helping you expand your network and enhance your career prospects. Through our platform, you can join industry-specific groups, attend virtual events, and engage with like-minded individuals.",
      "Networking is not just about making contacts; it's about building relationships that can lead to future opportunities. Whether you're looking for mentorship, collaboration, or even job leads, expanding your professional network can be a game-changer in your career.",
      "By fostering these connections, you position yourself for potential job leads and collaborations that might not be publicly advertised. Our service offers a structured way to network, ensuring you can make the right connections without feeling overwhelmed by the process.",
    ],
    imageUrl: Network,
  },
  {
    id: 4,
    service: "Interview Preparation",
    description:
      "Prepare for interviews with our comprehensive training resources, boosting your confidence and performance.",
    expandedContent: [
      "Preparing for an interview can be a nerve-wracking experience, but with our Interview Preparation service, you can boost your confidence and improve your performance. We offer comprehensive training resources, including tips and strategies for answering common interview questions and handling challenging scenarios.",
      "Our mock interview sessions are tailored to your industry and job role, providing you with personalized feedback on your responses, body language, and overall presentation. This practice helps you refine your answers and approach to different types of interviews, whether they are technical, behavioral, or situational.",
      "In addition to mock interviews, we provide resources on interview etiquette, effective storytelling techniques, and how to convey your value to potential employers. By equipping you with these tools, we aim to help you make a lasting impression and secure the job you desire.",
    ],
    imageUrl: Interview,
  },
  {
    id: 5,
    service: "Skill Development Workshops",
    description:
      "Participate in our workshops designed to enhance your technical abilities across various IT topics.",
    expandedContent: [
      "Continuous learning and skill enhancement are vital in today's rapidly evolving job market. Our Skill Development Workshops cover a wide range of topics in IT and beyond, including coding, data analysis, and software development. These interactive workshops are designed to enhance your technical abilities and keep you updated with the latest industry trends.",
      "Our workshops are led by industry professionals who bring real-world experience to the table. Whether you're a beginner looking to learn new skills or a seasoned professional wanting to stay current, our workshops cater to all skill levels.",
      "By participating in these workshops, you can acquire new skills, gain practical experience, and improve your employability. Our goal is to make you a more competitive candidate in your field by providing hands-on training and resources.",
    ],
    imageUrl: skilldevelop,
  },
  {
    id: 6,
    service: "Salary Negotiation Guidance",
    description:
      "Receive expert advice on negotiating your salary and benefits effectively.",
    expandedContent: [
      "Understanding your worth in the job market is essential for successful salary negotiations. Our Salary Negotiation Guidance service provides expert advice on navigating salary discussions and benefits. Our team of professionals helps you understand industry standards and equips you with the tools needed for effective negotiation.",
      "We offer personalized strategies based on your role, experience, and the specific company you're negotiating with. Whether you're negotiating for a new position or seeking a raise in your current job, our guidance ensures you're prepared to make your case confidently.",
      "By preparing you to articulate your value and negotiate confidently, we aim to empower you to secure a salary that reflects your skills and contributions. With our assistance, you can approach salary discussions with the knowledge and confidence to achieve the compensation you deserve.",
    ],
    imageUrl: Salary,
  },
];
export default ServiceData;
