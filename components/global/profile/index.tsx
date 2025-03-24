"use client"

import { getUserEmail } from "@/utils/auth"

export const Profile = () => {
    const userEmail = getUserEmail()

    return (
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Profile</h1>
          <p>Manage your profile settings here.</p>
          <div className="rounded-lg border p-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="">
                  <label className="text-sm font-medium">Email:</label>
                  <div className="mt-1 w-full rounded-md border p-2 bg-gray-100 text-gray-700">
                    {userEmail ? userEmail : "No email available"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}