import { CoursesService } from './courses.service';
export declare class CoursesController {
    private readonly service;
    constructor(service: CoursesService);
    create(body: {
        code: string;
        title: string;
        departmentId: number;
    }): Promise<{
        code: string;
        id: number;
        title: string;
        departmentId: number;
    }>;
    findAll(): Promise<({
        department: {
            name: string;
            id: number;
        };
    } & {
        code: string;
        id: number;
        title: string;
        departmentId: number;
    })[]>;
    detail(id: number): Promise<{
        department: {
            name: string;
            id: number;
        };
        tags: {
            name: string;
            id: number;
        }[];
    } & {
        code: string;
        id: number;
        title: string;
        departmentId: number;
    }>;
    addTags(id: number, body: {
        tags: string[];
    }): Promise<{
        tags: {
            name: string;
            id: number;
        }[];
    } & {
        code: string;
        id: number;
        title: string;
        departmentId: number;
    }>;
}
