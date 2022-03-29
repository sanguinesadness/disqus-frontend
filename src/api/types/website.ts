export interface Website {
  id: string;
  url: string;
  name: string;
  email: string;
  password: string;
  isActivated: boolean | null;
  activationLink: string | null;
  token: string;
}
