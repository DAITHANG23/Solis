import { UserModel } from ".";

export interface IConcept {
  name: string;
  description: string;
  logoUrl: string;
  address: string;
  conceptManager: ManageConceptType;
  totalProfit: number;
  images: Array<string>;
  imageCover: string;
  timeSlot: TimeSlotType;
  dishes: Array<Dish>;
  type: string;
  avgRatings: number;
  reviews: Array<string>;
  createdAt: string;
  updatedAt: string;
}

export interface Dish {
  name: string;
  description: string;
  type: string;
  image: string;
  price: number;
}

export interface TimeSlotType {
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface GetAllConceptsResponse {
  data: {
    status: string;
    results: number;
    data: { data: Array<IConcept> };
  };
  statusCode: string;
  message: string;
}

export interface ManageConceptType extends Omit<UserModel, "googleId"> {}
