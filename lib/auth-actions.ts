"use server";

export async function signInWithEmail(data: { email: string; password: string }) {
    try {
        // Call your own API route (e.g. /api/auth/signin)
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        });

        if (!response.ok) {
            throw new Error("Invalid credentials or server error");
        }

        const result = await response.json();
        return { success: true, data: result };
    } catch (error) {
        console.error("Sign-in failed:", error);
        return { success: false, error };
    }
}

export async function signUpWithEmail(data: { email: string; password: string }) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to register user");
        }

        const result = await response.json();
        return { success: true, data: result };
    } catch (error) {
        console.error("Sign-up failed:", error);
        return { success: false, error };
    }
}
