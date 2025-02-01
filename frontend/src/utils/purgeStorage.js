import { setLoading } from "../app/features/main/mainSlice";

const purgeStorage = (lastUpdated, persistor, dispatch) => {
  const EXPIRE_TIME = 12 * 60 * 60 * 1000;
  const NOW = Date.now();
  if (lastUpdated && NOW - lastUpdated > EXPIRE_TIME) {
    persistor.purge();
    dispatch(setLoading(false));
  }
};

export default purgeStorage;
