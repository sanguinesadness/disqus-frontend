import { makeAutoObservable } from "mobx";
import requestApi from "api/index";
import { LoginDto } from "api/dto/login.dto";
import { RegisterDto } from "api/dto/register.dto";
import { loading } from "services/loading";
import { toastsStore } from "./toastsStore";
import { fakePromise } from "services/fake.promise";
import { Website } from "api/types/website";

class AuthStore {
  website: Website | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  // Setters
  setWebsite(val: Website | null) {
    this.website = val;
  }

  // Actions
  async login(dto: LoginDto) {
    loading(async () => {
      toastsStore.close();
      await fakePromise(1000);

      const website = await requestApi.login(dto);
      if (!website) return;

      this.setWebsite(website);
    });
  }

  async register(dto: RegisterDto) {
    loading(async () => {
      toastsStore.close();
      await fakePromise(1000);

      const website = await requestApi.register(dto);
      if (!website) return;

      this.setWebsite(website);
    });
  }

  async fetchCurrentWebsite() {
    loading(async () => {
      await fakePromise(1000);

      const website = await requestApi.getCurrentWebsite();
      if (!website) return;

      this.setWebsite(website);
    });
  }

  logout() {
    loading(async () => {
      await fakePromise(1000);
      requestApi.logout();
      toastsStore.success("Logged out");
    });
  }
}

export const authStore = new AuthStore();
