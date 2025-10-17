import React from 'react';
import { createBrowserRouter } from "react-router-dom";

import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AppError from '../pages/AppError/AppError';
import Home from '../pages/Home/Home';
import SingleAppDetail from '../components/SingleAppDetail/SingleAppDetail';
import AllApps from '../components/AllApps/AllApps';
import InstalledApps from '../pages/InstalledApps/InstalledApps';

const fetchApps = async () => {
  const response = await fetch('/AppList.json');
  return response.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: fetchApps,
        Component: Home,
      },
      {
        path: "/allApps",
        loader: fetchApps,
        Component: AllApps,
      },
      {
        path: "/details/:appId",
        loader: async ({ params }) => {
          const apps = await fetchApps();
          const app = apps.find(app => app.id === Number(params.appId));
          if (!app) {
            throw new Response("App Not Found", { status: 404 });
          }
          return app;
        },
        Component: SingleAppDetail,
        errorElement: <AppError />,
      },
      {
        path: "/installedApps",
        Component: InstalledApps,
      },
    ],
  },
]);