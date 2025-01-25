const purgeStorage = (lastUpdated, persistor) => {
  const EXPIRE_TIME = 12 * 60 * 60 * 1000;
  const NOW = Date.now();
  if (lastUpdated && NOW - lastUpdated > EXPIRE_TIME) {
    persistor.purge();
  }
};

export default purgeStorage;

// TO DO
// [x] Add error boundry with do btns, refresh and purge storage, and add text to explain purge storage
// [] Add basic category page
// [] Add basic shop page
// [] Add Not Found page