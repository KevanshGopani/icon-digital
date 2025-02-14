export type ActionResponse<T> = {
  success: boolean;
  errors?: Record<string, string[] | string | number | number[] | boolean>;
  message?: string;
  status?: number;
  data?: T;
} | null;
// Minimal user fields
export interface BaseUser {
  email: string;
  name: string;
}

// Additional user details
export interface UserDetails {
  job_family: string;
  speciality: string;
  years_of_experience: number;
}

// Full user object with all fields
export interface User extends BaseUser, UserDetails {}
