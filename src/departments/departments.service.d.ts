import { PrismaService } from '../prisma/prisma.service';
export declare class DepartmentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(name: string): Promise<{
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
