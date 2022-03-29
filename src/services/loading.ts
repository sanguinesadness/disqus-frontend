import { modalsStore } from "stores/modalsStore";

export const loading = (action: () => Promise<any>) => {
  modalsStore.openLoading();
  action().finally(() => modalsStore.close());
};
