import { Inngest } from "inngest";
import User from "../models/user.js";

// Create Inngest client
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Create or update user
const syncUserCreation = inngest.createFunction(
    { id: "sync-user-from-clerk" },
    { event: "clerk/user.created" },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            email: email_addresses?.[0]?.email_address || null,
            name: `${first_name || ''} ${last_name || ''}`.trim(),
            image: image_url
        };

        try {
            await User.findByIdAndUpdate(
                id,
                userData,
                { upsert: true, new: true, setDefaultsOnInsert: true }
            );
        } catch (error) {
            console.error("Error syncing user creation:", error);
        }
    }
);

// Delete user
const syncUserDeletion = inngest.createFunction(
    { id: "delete-user-with-clerk" },
    { event: "clerk/user.deleted" },
    async ({ event }) => {
        const { id } = event.data;
        try {
            await User.findByIdAndDelete(id);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    }
);

// Update user
const syncUserUpdation = inngest.createFunction(
    { id: "update-user-from-clerk" },
    { event: "clerk/user.updated" },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const updateData = {
            email: email_addresses?.[0]?.email_address || null,
            name: `${first_name || ''} ${last_name || ''}`.trim(),
            image: image_url
        };

        try {
            await User.findByIdAndUpdate(id, updateData, { new: true });
        } catch (error) {
            console.error("Error updating user:", error);
        }
    }
);

export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];
