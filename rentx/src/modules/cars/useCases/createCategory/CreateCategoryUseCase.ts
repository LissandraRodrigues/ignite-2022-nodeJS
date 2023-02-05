import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    // Make the route that has to pass access to the repository.
    constructor(private categoriesRepository: ICategoriesRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {

        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category already exists!")
        }

        this.categoriesRepository.create({ name, description });

    }
}

export { CreateCategoryUseCase };