export interface ErrorObject {
  messageError: string;
  statusCode: number;
  status: string;
  isOperational: boolean;
  name?: string;
  expiredAt?: string;
}
export interface ErrorResponse {
  status: string;
  error: ErrorObject;
  message: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

export interface UserModel {
  id: string;
  dateOfBirth?: string;
  address?: string;
  email: string;
  gender?: string;
  numberPhone?: string;
  role?: string;
  status?: string;
  fullName: string;
  refreshToken?: string;
  avatarUrl?: string;
  googleId: string;
}

export interface UserResponse {
  data: { data: UserModel };
  status: string;
}

export interface UserLogin extends Partial<UserModel> {}
