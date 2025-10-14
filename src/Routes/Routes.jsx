import React from 'react';
import { createBrowserRouter } from "react-router-dom";

// Import your page/layout components
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
// FIX: Changed the path from ../pages/ to ../components/
import SingleAppDetail from '../components/SingleAppDetail/SingleAppDetail';
import AllApps from '../components/AllApps/AllApps';
import InstalledApps from '../pages/InstalledApps/InstalledApps';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/AppList.json'),
        Component: Home,
      },
      {
        path: "/allApps",
        loader: () => fetch('/AppList.json'),
        Component: AllApps, // Reuse Home component to show all apps
      },
      {
        path: "/details/:appId",
        loader: async ({ params }) => {
          const response = await fetch('/AppList.json');
          const apps = await response.json();
          const app = apps.find(app => app.id == params.appId);
          
          if (!app) {
            throw new Response("App Not Found", { status: 404 });
          }
          return app;
        },
        Component: SingleAppDetail,
      },
      {
        path: "/installedApps",
        Component: InstalledApps, // This route doesn't need a loader
      }
    ]
  },
]);