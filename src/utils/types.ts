export type Feature = {
  imgPath: string;
  title: string;
  text: string;
};

export type Login = {
  email: string;
  password: string;
}

export type UserProfile = {
  firstName: string;
  lastname: string;
}

export type User = UserProfile & Login;

export type ApiResponse = {
  status: number;
  message: string;
  body: {
    id: string,
    email: string
  }
}
