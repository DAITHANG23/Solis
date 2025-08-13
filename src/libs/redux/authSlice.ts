import { UserLogin, UserResponse } from "@/types/models";
import { accountEndpoints } from "@/api/enpoints";
import { clearJWTCookies } from "@/utils/cookies";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  user: UserLogin;
  accessToken: string;
  isAuthenticated: boolean;
  accountInfo?: UserResponse | null;
  loading?: boolean;
  error?: string | null;
}

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      await accountEndpoints.logout();
    }
  } catch (error) {
    console.error("Error logging out:", error);
  } finally {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    clearJWTCookies("access_token");
    clearJWTCookies("refresh_token");
    delete axios.defaults.headers.common.Authorization;
    // window.location.href = `${ROUTES.LOGIN.INDEX}`;
  }
});

export const getAccountInfo = createAsyncThunk<
  UserResponse,
  void,
  { rejectValue: string }
>("auth/getAccountInfo", async (_, thunkAPI) => {
  try {
    const data = await accountEndpoints.getDataAccount();
    if (!data) {
      return thunkAPI.rejectWithValue("Không có dữ liệu từ API");
    }

    return data;
  } catch (error: any) {
    console.error("Error fetching account info:", error);
    return thunkAPI.rejectWithValue(error.message || "Lỗi không xác định");
  }
});

const initialState: AuthState = {
  user: {
    numberPhone: "",
    address: "",
    dateOfBirth: "",
    gender: "",
    email: "",
  },
  isAuthenticated: false,
  accessToken: "",
  accountInfo: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    accessToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    userInfo: (
      state,
      action: PayloadAction<{ accountInfo: UserResponse | null }>
    ) => {
      state.accountInfo = action.payload.accountInfo;
    },
    authentication: (
      state,
      action: PayloadAction<{ isAuthenticated: boolean }>
    ) => {
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccountInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAccountInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.accountInfo = action.payload;
      })
      .addCase(getAccountInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Đã xảy ra lỗi";
      })
      .addCase(logout.fulfilled, (state) => {
        state.accountInfo = null;
        state.isAuthenticated = false;
        state.accessToken = "";
      });
  },
});

export const { accessToken, authentication, userInfo } = authSlice.actions;
export default authSlice.reducer;
