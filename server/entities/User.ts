import {
    Entity,
    PrimaryKey,
    Property,
    SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "mongodb";

@Entity()
export class User {
    @PrimaryKey({ type: ObjectId })
    _id!: ObjectId;

    @SerializedPrimaryKey({ type: String })
    id!: string;

    @Property({ type: "string" })
    email!: string;

    @Property({ type: "string" })
    password!: string;

    @Property({ type: "date" })
    createdAt: Date = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt: Date = new Date();
}
