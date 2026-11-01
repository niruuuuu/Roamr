"use server";

import { utapi } from "@/lib/uploadthing";

export default async function uploadFile(file: File) {
    // 1. Authenticate the user here.
    // 2. Authorize the requested operation.

    if (!(file instanceof File) || file.size === 0) {
        throw new Error("Please provide a valid file.");
    }

    // // Basic validation example.
    // if (!file.type.startsWith("image/")) {
    //     throw new Error("Only images are allowed.");
    // }

    // if (file.size > 4 * 1024 * 1024) {
    //     throw new Error("Maximum file size is 4MB.");
    // }

    // // 3. Upload from your server to UploadThing.
    const result = await utapi.uploadFiles(file);

    if (result.error) {
        throw new Error("File upload failed.");
    }

    // // 4. Return the result to the caller.
    return {
        url: result.data.ufsUrl,
        key: result.data.key,
    };
}