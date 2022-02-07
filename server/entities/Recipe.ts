import {
    ArrayType,
    Entity,
    ManyToOne,
    PrimaryKey,
    Property,
    SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "mongodb";
import { RecipeInput } from "server/generated/graphql";
import { Category } from "./Category";

@Entity()
export class Recipe {
    @PrimaryKey({ type: ObjectId })
    _id!: ObjectId;

    @SerializedPrimaryKey({ type: String })
    id!: string;

    @Property({ type: "string" })
    name!: string;

    @Property({ type: "string" })
    description!: string;

    @Property({ type: "string" })
    image!: string;

    @Property({ type: "number" })
    prepTime!: number;

    @Property({ type: "number" })
    cookingTime!: number;

    @Property({ type: "number" })
    serves!: number;

    @Property({ type: ArrayType })
    ingredients!: string[];

    @Property({ type: ArrayType })
    instructions!: string[];

    @Property({ type: ArrayType })
    tips!: string[];

    @ManyToOne(() => Category)
    category!: Category;

    @Property({ type: "date" })
    createdAt: Date = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    constructor(input: RecipeInput) {
        Object.assign(this, input);
    }
}
