export type User = {
  id: string;
  username: string;
  avatar?: string;
  banner?: string;
  admin: boolean;
  status?: string;
  stats?: {
    ranking: number;
    pp: number;
  };
};
