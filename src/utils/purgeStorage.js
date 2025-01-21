const purgeStorage = (lastUpdated, persistor) => {
  const EXPIRE_TIME = 12 * 60 * 60 * 1000;
  const NOW = Date.now();
  if (lastUpdated && NOW - lastUpdated > EXPIRE_TIME) {
    persistor.purge();
  }
};

export default purgeStorage;
