import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/LandingPage/HomePage";
import PageNotFound from "./Components/Errors/PageNotFound";
import SingleJob from "./Pages/SingleJob/SingleJob";
import PortalPage from "./Pages/CompanyPortalPages/PortalPage";
import DashboardPage from "./Pages/CompanyPortalPages/DashboardPage";
import UsersPage from "./Pages/CompanyPortalPages/UsersPage";
import Layout from "./Components/Layout/Layout";
import ApplyNowForm from "./Pages/Application/ApplyNowForm";
import Jobs from "./Components/Jobs/Jobs";
import Login from "./Components/Authentication/Login";
import Register from "./Components/Authentication/Register";
import ServiceDetails from "./Components/OurServices/ServiceDetails/ServiceDetails";
import SubmitResume from "./Pages/Application/SubmitResume";
import SuccessPage from "./Pages/SuccessPage/SuccessPage";

// Creating the router with defined routes
const router = createBrowserRouter([
  {
    path: "/", // Home route
    element: (
      <Layout>
        {" "}
        {/* Wrapping HomePage in Layout for consistent design */}
        <HomePage />
      </Layout>
    ),
    errorElement: <PageNotFound />, // Error handling for this route
  },
  {
    path: "/jobs-all", // Route for viewing all jobs
    element: (
      <Layout>
        <Jobs /> {/* Displaying the Jobs component */}
      </Layout>
    ),
  },
  {
    path: "/singlejob/:id", // Dynamic route for a single job based on its ID
    element: (
      <Layout>
        <SingleJob /> {/* Displaying the SingleJob component */}
      </Layout>
    ),
  },
  {
    path: "/apply/:id", // Route for applying to a job based on its ID
    element: (
      <Layout>
        <ApplyNowForm /> {/* Displaying the ApplyNowForm component */}
      </Layout>
    ),
  },

  {
    path: "/resume/submit",
    element: (
      <Layout>
        <SubmitResume />
      </Layout>
    ),
  },
  {
    path: "/service/:id",
    element: (
      <Layout>
        <ServiceDetails />
      </Layout>
    ),
  },
  {
    path: "/auth-signIn",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/successpage",
    element: (
      <Layout>
        <SuccessPage />
      </Layout>
    ),
  },
  {
    path: "/auth-signUp",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/portal",
    element: <PortalPage />,
    children: [
      {
        index: true,
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
    ],
  },
]);

export default router;
