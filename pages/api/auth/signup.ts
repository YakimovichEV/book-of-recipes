import { hashPassword } from "server/helpers/auth";
import { connectToDatabase } from "server/helpers/db";

// @ts-ignore
async function handler(req, res) {
    if (req.method !== "POST") {
        return;
    }

    const data = req.body;

    const { email, password } = data;

    if (
        !email ||
        !email.includes("@") ||
        !password ||
        password.trim().length < 8
    ) {
        res.status(422).json({
            message:
                "Invalid input - password should also be at least 8 characters long.",
        });

        return;
    }

    const client = await connectToDatabase();

    const db = client.db();

    const exisitingUser = await db
        .collection("users")
        .findOne({ email: email });

    if (exisitingUser) {
        res.status(422).json({ message: "User exists already!" });
        client.close();
        return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
        email: email,
        password: hashedPassword,
    });

    res.status(201).json({ message: "Created user!" });
    client.close();
}

export default handler;
