import { DepartmentsService } from './departments.service';
export declare class DepartmentsController {
    private readonly service;
    constructor(service: DepartmentsService);
    create(body: {
        name: string;
    }): Promise<{
        name: string;
        id: number;
    }>;
    findAll(): Promise<{
        name: string;
        id: number;
    }[]>;
    findOneWithCourses(id: number): Promise<{
        courses: {
            code: string;
            id: number;
            title: string;
            departmentId: number;
        }[];
    } & {
        name: string;
        id: number;
    }>;
}
