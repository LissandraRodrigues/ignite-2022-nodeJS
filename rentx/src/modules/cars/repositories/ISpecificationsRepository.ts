import { Specification } from "../entities/Specification";

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    findByName(name: string): Specification;
    create({ name, description }: ICreateSpecificationsDTO): void;
}

export { ISpecificationsRepository, ICreateSpecificationsDTO };
