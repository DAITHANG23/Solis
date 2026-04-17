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
  firstName: string;
  lastName: string;
  fullName: string;
  refreshToken?: string;
  avatarUrl?: string;
  googleId: string;
  createdAt: string;
}

export interface UserResponse {
  data: { user: UserModel; refreshToken: string; accessToken: string };
}

export interface UserLoginGmailResponse extends UserResponse {
  statusCode: number;
  message: string;
}

export interface UserProfileResponse {
  data: UserModel;
  statusCode: number;
  message: string;
}
