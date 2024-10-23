import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/LandingPage/HomePage";
import PageNotFound from "./Components/Errors/PageNotFound";
import SingleJob from "./Pages/SingleJob/SingleJob";
import LoginRegisterPage from "./Pages/LoginRegister/LoginRegisterPage";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <PageNotFound />,
  },
  {
    path: "/jobs-all",
    element: (
      <Layout>
        <Jobs />
      </Layout>
    ),
  },
  {
    path: "/singlejob/:id",
    element: (
      <Layout>
        <SingleJob />
      </Layout>
    ),
  },
  {
    path: "/apply/:id",
    element: (
      <Layout>
        <ApplyNowForm />
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
