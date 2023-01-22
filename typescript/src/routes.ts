import { Request, Response } from "express";

import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {

    CreateCourseService.execute({
        name: 'NodeJS',
        educator: 'Luiza'
    });

    CreateCourseService.execute({
        name: 'ReactJS',
        educator: 'Luiza',
        duration: 10
    });


    return response.send();

}