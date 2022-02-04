import { hash, compare } from "bcryptjs";

export async function hashPassword(password: string) {
    const hashedPassword = await hash(password, 12);

    return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
    const isValid = await compare(password, hashedPassword);

    return isValid;
}

export const getSavedToken = (() => {
    let token: string | null = null;

    return (newToken?: string | null) => {
        if (newToken || newToken === null) {
            token = newToken;
        }

        return token;
    };
})();
