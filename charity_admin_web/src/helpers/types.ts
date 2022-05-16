import type { PropsWithChildren } from "react";

export type WithChildren<T = {}> = T & PropsWithChildren<{}>;

export type WithClassName<T = {}> = T & {
  className?: string;
};

export type User = {
  id: string;
  fullName: string;
  email: string;
  totalDonations: number;
  noOfDonation: number;
  photo: string;
  phone:string;
  address:string;
  active:boolean;
  username: string;
  createdAt: string;
};
