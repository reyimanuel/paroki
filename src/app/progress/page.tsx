"use client"
import { useRouter } from "next/navigation";

export default function Progress() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Page In Progress</h1>
            <p className="text-lg text-gray-600 mb-6">
                This page is currently under development. Please check back later.
            </p>
            <button
                onClick={() => router.back()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Back
            </button>
        </div>
    );
}