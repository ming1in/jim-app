import axios, { AxiosResponse } from "axios";
import { IUser } from "../interfaces/user";

const baseUrl: string = "http://localhost:4000";

export const getUsers = async (): Promise<AxiosResponse> => {
  try {
    const users: AxiosResponse = await axios.get(baseUrl + "/users");
    return users;
  } catch (error) {
    throw new Error(error);
  }
};

export const addUser = async (formData: IUser): Promise<AxiosResponse> => {
  try {
    const user: Omit<IUser, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    };
    const saveUser: AxiosResponse = await axios.post(
      baseUrl + "/add-user",
      user
    );
    return saveUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (user: IUser): Promise<AxiosResponse> => {
  try {
    const userUpdate: Pick<IUser, "status"> = {
      status: true,
    };
    const updatedUser: AxiosResponse = await axios.put(
      `${baseUrl}/edit-user/${user._id}`,
      userUpdate
    );
    return updatedUser;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUser = async (_id: string): Promise<AxiosResponse> => {
  try {
    const deletedUser: AxiosResponse = await axios.delete(
      `${baseUrl}/delete-user/${_id}`
    );
    return deletedUser;
  } catch (error) {
    throw new Error(error);
  }
};
