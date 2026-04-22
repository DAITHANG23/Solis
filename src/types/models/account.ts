
export interface ErrorResponse {
  statusCode: number;
  message: string;
}

export interface RefreshTokenResponse {
  data: { accessToken: string, status: string };
  statusCode: number;
  message: string;
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
