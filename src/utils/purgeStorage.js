const purgeStorage = (lastUpdated, persistor) => {
  const EXPIRE_TIME = 12 * 60 * 60 * 1000;
  const NOW = Date.now();
  console.log("out ", persistor.getState());
  if (lastUpdated && NOW - lastUpdated > EXPIRE_TIME) {
    console.log("in ", lastUpdated, persistor, NOW);
    persistor.purge();
  }
};

export default purgeStorage;
