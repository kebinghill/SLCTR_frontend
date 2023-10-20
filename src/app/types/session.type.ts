export interface Session {
  user?: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
  accessToken?: string;
  expires: ISODateString;
}

type ISODateString = string;
