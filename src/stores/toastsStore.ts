import { TOAST_DURATION } from "constants/config";
import { makeAutoObservable } from "mobx";

export type ToastType = "success" | "error" | "info" | null;

class ToastsStore {
  message = "";
  type: ToastType = null;
  opened: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Setters
  setMessage(val: string) {
    this.message = val;
  }

  setType(val: ToastType) {
    this.type = val;
  }

  setOpened(val: boolean) {
    this.opened = val;
  }

  // Actions
  open(message: string, type: ToastType) {
    this.setMessage(message);
    this.setType(type);
    this.setOpened(true);

    setTimeout(() => {
      if (this.opened) this.close();
    }, TOAST_DURATION);
  }

  error(message: string) {
    this.open(message, "error");
  }

  success(message: string) {
    this.open(message, "success");
  }

  info(message: string) {
    this.open(message, "info");
  }

  close() {
    this.setOpened(false);
  }
}

export const toastsStore = new ToastsStore();
