"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MOCK_USER = {
    email: "admin@carebridge.com",
    password: "password123"
};

export async function loginAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
        // Set a cookie that expires in 24 hours
        (await cookies()).set("auth_token", "mock_token_123", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24,
            path: "/",
        });
        
        redirect("/experts"); // Redirect to your list page
    } else {
        return { error: "Invalid email or password" };
    }
}

// Action for the Demo Login Button
export async function loginDemoUser() {
    (await cookies()).set("auth_token", "mock_token_123", {
        httpOnly: true,
        path: "/",
    });
    redirect("/");
}

// export async function logoutAction() {
//     (await cookies()).delete("auth_token");
//     redirect("/login");
// }
export async function logoutAction() {
    const cookieStore = await cookies();
    cookieStore.delete("auth_token"); // Clears the session
    redirect("/login"); // Sends user back to login
}