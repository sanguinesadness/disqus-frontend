import { makeAutoObservable } from "mobx";

export type ModalName = "loading" | null;

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

  close() {
    this.setActiveModal(null);
  }
}

export const modalsStore = new ModalsStore();
