import {
    Entity,
    Enum,
    PrimaryKey,
    Property,
    SerializedPrimaryKey,
} from "@mikro-orm/core";
import { Role } from "server/generated/graphql";
import { ObjectId } from "mongodb";

@Entity()
export class User {
    @PrimaryKey({ type: ObjectId })
    _id!: ObjectId;

    @SerializedPrimaryKey({ type: String })
    id!: string;

    @Property({ type: "string" })
    email!: string;

    @Property({ type: "string", default: "" })
    name!: string;

    @Property({ type: "string" })
    password!: string;

    @Property({ type: "number", default: 1 })
    version!: number;

    @Enum({ items: () => Role, default: Role.User, type: "string" })
    role = Role.User;

    @Property({ type: "string" })
    image?: string | null = null;

    @Property({ type: "date" })
    createdAt: Date = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt: Date = new Date();
}
