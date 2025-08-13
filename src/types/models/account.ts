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
  user_id: string;
  business_user_id: string;
  dateOfBirth?: string;
  address?: string;
  email: string;
  gender?: string;
  numberPhone?: string;
  role?: string;
  status?: string;
  full_name: string;
  refreshToken?: string;
  profile_picture?: string;
  team_id?: string;
}

export interface UserResponse {
  data: { data: UserModel };
  status: string;
}

export interface UserLogin extends Partial<UserModel> {}
