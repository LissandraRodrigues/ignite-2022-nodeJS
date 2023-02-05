import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {

    // Make the route that has to pass access to the repository.
    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }

};

export { ListCategoriesUseCase };