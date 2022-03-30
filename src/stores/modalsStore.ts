import { makeAutoObservable } from "mobx";

export type ModalName = "loading" | "auth-success" | null;

class ModalsStore {
  activeModal: ModalName = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Setters
  setActiveModal(val: ModalName) {
    this.activeModal = val;
  }

  // Actions
  openLoading() {
    this.setActiveModal("loading");
  }

  openAuthSuccess() {
    this.setActiveModal("auth-success");
  }

  close() {
    this.setActiveModal(null);
  }
}

export const modalsStore = new ModalsStore();
