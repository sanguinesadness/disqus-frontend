import axios, { AxiosInstance } from "axios";
import { toastsStore } from "stores/toastsStore";
import Cookies from "universal-cookie";
import {
  ACCESS_TOKEN_COOKIE,
  API_URL,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  WEBSITE_ROUTE,
} from "./config";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { Website } from "./types/website";
import { WebsiteToken } from "./types/website.token";

class RequestApi {
  protected _cookies: Cookies;
  protected _axios: AxiosInstance;

  private setAccessTokenCookie(token: string) {
    this._cookies.set(ACCESS_TOKEN_COOKIE, token);
  }

  constructor() {
    this._cookies = new Cookies();

    this._axios = axios.create({
      baseURL: API_URL + WEBSITE_ROUTE,
      withCredentials: true,
    });

    this._axios.interceptors.request.use((config) => {
      if (config.headers) {
        config.headers.Authorization = `Bearer ${this._cookies.get(
          ACCESS_TOKEN_COOKIE
        )}`;
      }

      return config;
    });
  }

  public async login(dto: LoginDto): Promise<Website | null> {
    try {
      const resp = await this._axios.post<WebsiteToken>(LOGIN_ROUTE, dto);
      this.setAccessTokenCookie(resp.data.accessToken);
      return resp.data.website;
    } catch (err: any) {
      toastsStore.error(err.response.data.message);
      return null;
    }
  }

  public async register(dto: RegisterDto): Promise<Website | null> {
    try {
      const resp = await this._axios.post<WebsiteToken>(REGISTER_ROUTE, dto);
      this.setAccessTokenCookie(resp.data.accessToken);
      return resp.data.website;
    } catch (err: any) {
      toastsStore.error(err.response.data.message);
      return null;
    }
  }
}

export default new RequestApi();
