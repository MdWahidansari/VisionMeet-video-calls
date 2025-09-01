import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import NotificationsPage from "./pages/NotificationsPage";
import OnboardingPage from "./pages/OnboardingPage";
import ChatPage from "./pages/ChatPage";
import CallPage from "./pages/CallPage";
import { Toaster } from "react-hot-toast";
import useAuthUser from "./hooks/useAuthUser";
import PageLoader from "./components/PageLoader";
import Layout from "./components/Layout";
import { useThemeStore } from "./store/useThemeStore";

const App = () => {
  // get auth user and loading state
  const { isLoading, authUser } = useAuthUser();

  // get theme from zustand store
  const { theme } = useThemeStore();

  // check auth + onboarding status
  const isAuthendicated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  // show loader while fetching auth state
  if (isLoading) return <PageLoader />;

  return (
    <div className="h-screen" data-theme={theme}>
      <Routes>
        {/* home route - only if logged in and onboarded */}
        <Route
          path="/"
          element={
            isAuthendicated && isOnboarded ? (
              <Layout ShowSidebar={true}>
                <HomePage />
              </Layout>
            ) : (
              <Navigate to={!isAuthendicated ? "/login" : "/onboarding"} />
            )
          }
        />

        {/* signup route - redirect if already logged in */}
        <Route
          path="/signup"
          element={
            !isAuthendicated ? (
              <SignUpPage />
            ) : (
              <Navigate to={isOnboarded ? "/" : "/onboarding"} />
            )
          }
        />

        {/* login route - redirect if already logged in */}
        <Route
          path="/login"
          element={
            !isAuthendicated ? (
              <LoginPage />
            ) : (
              <Navigate to={isOnboarded ? "/" : "/onboarding"} />
            )
          }
        />

        {/* notifications - requires auth + onboarding */}
        <Route
          path="/notifications"
          element={
            isAuthendicated && isOnboarded ? (
              <Layout ShowSidebar={true}>
                <NotificationsPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthendicated ? "/login" : "/onboarding"} />
            )
          }
        />

        {/* onboarding - only if logged in and not onboarded */}
        <Route
          path="/onboarding"
          element={
            isAuthendicated ? (
              !isOnboarded ? (
                <OnboardingPage />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* chat page - no sidebar */}
        <Route
          path="/chat/:id"
          element={
            isAuthendicated && isOnboarded ? (
              <Layout ShowSidebar={false}>
                <ChatPage />
              </Layout>
            ) : (
              <Navigate to={!isAuthendicated ? "/login" : "/onboarding"} />
            )
          }
        />

        {/* call page */}
        <Route
          path="/call/:id"
          element={
            isAuthendicated && isOnboarded ? (
              <CallPage />
            ) : (
              <Navigate to={!isAuthendicated ? "/login" : "/onboarding"} />
            )
          }
        />
      </Routes>

      {/* global toaster notifications */}
      <Toaster />
    </div>
  );
};

export default App;
