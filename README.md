# CodeConnect Recruitment Application

Welcome to CodeConnect, a modern and fully responsive recruitment platform designed to help job seekers connect with potential employers efficiently. With an intuitive layout and seamless user experience, our application caters to both authenticated users looking for jobs and anonymous users wishing to submit their resumes.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [Challenges](#challenges)
- [How to Run This Project](#how-to-run-this-project)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)
- [Contributing](#contributing)
- [License](#license)

## Introduction
In a fast-paced job market, finding the right match between job seekers and employers can be challenging. CodeConnect Recruitment Application is designed to streamline this process by offering a platform where users can explore available jobs, apply for them, and even submit resumes for consideration without signing up. The application is fully responsive and delivers a smooth experience on all screen sizes, whether on desktop, tablet, or mobile.

The platform supports user authentication for applying to jobs and uses Firebase to manage user data, jobs, and resumes. Additionally, the design incorporates modern animation and UI principles to make the experience engaging and professional.

## Features
- **Responsive Design**: The platform is fully responsive across all screen sizes, ensuring a seamless experience on desktop, tablet, and mobile devices.
- **Landing Page**: Contains a banner, about us section, services, metrics, testimonials, and a contact form.
- **Authentication**: Users can sign up and log in to apply for jobs. Firebase is used for authentication and storing user data.
- **Job Listings**: A dedicated page displaying a list of available jobs. Authenticated users can apply directly.
- **Resume Submission**: Users who can't find their desired job can submit their resumes without logging in, and recruitment personnel can review these submissions to find suitable job matches.
- **Navbar and Footer**: Fully responsive navigation bar and footer with links to key sections and social media icons.
- **Parallax Effect**: The metrics section includes a parallax scrolling effect for enhanced visual engagement.
- **Form Validation and Error Handling**: Custom validation and error messages are in place for all forms, ensuring users provide correct information.

## Usage
1. **Explore the Landing Page**: The landing page includes sections such as a banner, information about the company, services, metrics (with parallax effect), testimonials, and a contact form.
2. **Sign-Up and Log-In**: Users can sign up or log in to access job listings. Authentication is handled via Firebase.
3. **Job Listings**: Authenticated users can view a list of available jobs and apply to the ones that match their skill set.
4. **Submit Resume Without Authentication**: If users do not find a suitable job, they can submit their resume without the need to log in. Recruiters will review these resumes and try to match the applicant with potential jobs.

## Challenges
- **Responsive Design**: Ensuring the UI looks good and functions well on a wide range of devices and screen sizes.
- **Authentication and Data Storage**: Implementing Firebase authentication and managing data storage for jobs, users, and resumes.
- **Form Validation**: Implementing robust form validation for sign-up, login, and job application forms.

## How to Run This Project
To get this project up and running locally, follow these steps:

1. **Clone the repository**: Clone this repository to your local machine using the following command:
   ```bash
   git clone https://github.com/LesegoLSG/JobApp.git
   ```
2. **Import project** : After cloning, import the cloned project to your preferred IDE (I used visual studio to develop this project).
3. **Navigate to the project directory:** : Now make sure you are on the 'Job-app' directory.
   ````
   cd Job-app
   ````
4. **Install dependencies** : This project makes use of Node js.
      ````
      npm install or yarn install
      ````
5. **Start the server** :Start the server using the following command:
      ```
      npm run dev
      ```

   ## Live demo
      ```
      https:https://codeconnectrecruit.netlify.app/
      ```

# Technologies Used
**React:** For building the user interface.

**Tailwind CSS:** For styling the application and ensuring responsiveness.

**Vite:** For bundling and serving the application.

**React Router:** For navigation within the application.

**Framer Motion"** For adding animations, such as smooth transitions and parallax effects.

**Firebase:** Used for authentication, storing user data, job listings, and submitted resumes.

# Contributing
   Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

   1. Fork the repository
   2. Create a new branch ( **git checkout -b feature** )
   3. Make your changes and commit them (**git commit -am 'Add new feature'**)
   4. Push to the branch (**git push origin feature**)
   5. Create a pull request

# License
   This project is a personal portfolio project and is not intended for commercial use or distribution. All rights reserved by the author.
