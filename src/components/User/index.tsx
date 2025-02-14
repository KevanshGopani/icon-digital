"use client";
import { deleteUser, getAllUsers } from "@/services/users";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "../common/Loader";
import { convertTimestampToDate } from "@/utils/date-conversion";
import { UserType } from "@/types/user";
import { toast } from "react-toastify";

const User = () => {
  const {
    data: allUsers,
    error: allUserProblemOccurred,
    isLoading: allUsersLoading,
    refetch: refetchAllUsers,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const response = await getAllUsers();
      const allRefineUserData = response?.data.map((user: any) => {
        return {
          userid: user.id,
          name: user.firstName + " " + user.lastName,
          email: user.email,
          role: user.role,
          create: convertTimestampToDate(user.createdAt),
          update: convertTimestampToDate(user.updatedAt),
        };
      });

      return allRefineUserData;
    },
    staleTime: Infinity,
    retry: false,
  });

  const handleDeleteUserMutation = useMutation({
    mutationFn: async (userId: string) => {
      await deleteUser(userId);
    },
    onSuccess(data, variables, context) {
      toast.success("User deleted successfully", {
        toastId: "deleted-successfully",
      });
      refetchAllUsers();
    },
    onError(error, variables, context) {
      toast.error("Something went wrong!", { toastId: "deleted-error" });
    },
  });

  const handleDeleteUser = (userId: string) => {
    handleDeleteUserMutation.mutateAsync(userId);
  };

  if (allUsersLoading || handleDeleteUserMutation.isPending) {
    return <Loader />;
  }

  return (
    <div>
      <table className="w-full border-collapse border border-stroke dark:border-strokedark">
        <thead>
          <tr className="bg-gray-100 dark:bg-strokedark">
            <th className="border border-stroke px-4 py-2 dark:border-strokedark">
              User ID
            </th>
            <th className="border border-stroke px-4 py-2 dark:border-strokedark">
              Name
            </th>
            <th className="border border-stroke px-4 py-2 dark:border-strokedark">
              Email
            </th>
            <th className="border border-stroke px-4 py-2 dark:border-strokedark">
              Role
            </th>
            <th className="border border-stroke px-4 py-2 dark:border-strokedark">
              Created At
            </th>
            {/* <th className="border border-stroke dark:border-strokedark px-4 py-2">Updated At</th> */}
            <th className="border border-stroke px-4 py-2 dark:border-strokedark">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user: UserType, key: any) => (
            <tr key={key} className="hover:bg-gray-50 dark:hover:bg-strokedark">
              <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                {user.userid}
              </td>
              <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                {user.name}
              </td>
              <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                {user.email}
              </td>
              <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                {user.role}
              </td>
              <td className="border border-stroke px-4 py-2 dark:border-strokedark">
                {user.create}
              </td>
              {/* <td className="border border-stroke dark:border-strokedark px-4 py-2">
                                {product.update}
                            </td> */}
              <td className="space-y-5 border border-stroke px-4 py-2 text-center dark:border-strokedark">
                <button
                  className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
                  onClick={() => {
                    handleDeleteUser(user.userid);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
