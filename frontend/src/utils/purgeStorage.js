import { setLoading } from "../app/features/main/mainSlice";

const purgeStorage = async (lastUpdated, persistor, dispatch) => {
  const EXPIRE_TIME = 12 * 60 * 60 * 1000;
  const NOW = Date.now();

  if (lastUpdated && NOW - lastUpdated > EXPIRE_TIME) {
    dispatch(setLoading(true));
    await persistor.purge();
    dispatch(setLoading(false));
  }
};

export default purgeStorage;
