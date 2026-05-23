import { PrismaService } from '../prisma/prisma.service';
export declare class CoursesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
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
    addTags(courseId: number, tagNames: string[]): Promise<{
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
    detail(courseId: number): Promise<{
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
}
