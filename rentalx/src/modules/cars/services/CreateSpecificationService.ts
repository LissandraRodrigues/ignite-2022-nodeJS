import { ISpeficationRepository } from "../modules/cars/repositories/ISpeficationRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationService {

    // Make the route that has to pass access to the repository.
    constructor(private specificationsRepository: ISpeficationRepository) { }

    execute({ name, description }: IRequest): void {

        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!")
        }

        this.specificationsRepository.create({ name, description });

    }
}

export { CreateSpecificationService };