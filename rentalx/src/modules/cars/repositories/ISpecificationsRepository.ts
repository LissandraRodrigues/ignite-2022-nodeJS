import { Category } from "../model/Category";

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateSpecificationsDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
