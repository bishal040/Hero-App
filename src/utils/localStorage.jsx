export const getInstalledApps = () => {
  const installedApps = localStorage.getItem('installedApps');
  if (installedApps) {
    return JSON.parse(installedApps);
  }
  return [];
};

export const saveInstalledApp = (app) => {
  const installedApps = getInstalledApps();
  const alreadyExists = installedApps.find((a) => a.id === app.id);
  
  if (!alreadyExists) {
    const newInstalledApps = [...installedApps, app];
    localStorage.setItem('installedApps', JSON.stringify(newInstalledApps));
    return true;
  }
  return false;
};

export const removeInstalledApp = (appId) => {
  const installedApps = getInstalledApps();
  const remainingApps = installedApps.filter((app) => app.id !== appId);
  localStorage.setItem('installedApps', JSON.stringify(remainingApps));
};