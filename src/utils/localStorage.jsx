// This function gets all installed apps from localStorage
export const getInstalledApps = () => {
  const installedApps = localStorage.getItem('installedApps');
  if (installedApps) {
    return JSON.parse(installedApps);
  }
  return []; // Return an empty array if nothing is stored yet
};

// This function saves a new app to the list
export const saveInstalledApp = (app) => {
  const installedApps = getInstalledApps();
  // Check if the app is already installed to avoid duplicates
  const alreadyExists = installedApps.find((a) => a.id === app.id);
  
  if (!alreadyExists) {
    const newInstalledApps = [...installedApps, app];
    localStorage.setItem('installedApps', JSON.stringify(newInstalledApps));
    return true; // Indicate success
  }
  return false; // Indicate it was already there
};

// This function removes an app from the list
export const removeInstalledApp = (appId) => {
  const installedApps = getInstalledApps();
  const remainingApps = installedApps.filter((app) => app.id !== appId);
  localStorage.setItem('installedApps', JSON.stringify(remainingApps));
};