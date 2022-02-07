import {
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryKey,
    Property,
    SerializedPrimaryKey,
} from "@mikro-orm/core";
import { ObjectId } from "mongodb";
import { CategoryInput } from "../generated/graphql";
import { Recipe } from "./Recipe";

@Entity()
export class Category {
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

    @ManyToOne(() => Category)
    parentCategory?: Category;

    @OneToMany(() => Category, (category) => category.parentCategory)
    childCategories?: Category[];

    @OneToMany(() => Recipe, (recipe) => recipe.category)
    recipes: Recipe[] = [];

    @Property({ type: "date" })
    createdAt: Date = new Date();

    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt: Date = new Date();

    constructor(input: CategoryInput) {
        Object.assign(this, input);
    }
}
