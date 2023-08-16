export type RegisterUser = {
  name: String;
  email: String;
  password: String;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type singleTicket = {
  category: {
    type: string;
  };
  createDate: string;
  description: string;
  status: string;
  subject: string;
  tiket_id: string;
  title: string;
  updatedDate: string;
  userId: string;
}[];

export type ErrorData = {
  error: string;
};

export type Error = {
  status: number;
  data: ErrorData;
};
