import { Specification } from "../model/Specification";

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findByName(name: string): Specification;
    // list(): Specification[];
    create({ name, description }: ICreateSpecificationsDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
