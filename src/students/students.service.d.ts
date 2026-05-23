import { PrismaService } from '../prisma/prisma.service';
export declare class StudentsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: {
        fullName: string;
        email: string;
    }): Promise<{
        id: number;
        fullName: string;
        email: string;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        fullName: string;
        email: string;
        createdAt: Date;
    }[]>;
    createOrUpdateProfile(studentId: number, data: {
        phone?: string;
        address?: string;
    }): Promise<{
        id: number;
        phone: string | null;
        studentId: number;
        Address: string | null;
    }>;
    detail(studentId: number): Promise<{
        Profile: {
            id: number;
            phone: string | null;
            studentId: number;
            Address: string | null;
        } | null;
    } & {
        id: number;
        fullName: string;
        email: string;
        createdAt: Date;
    }>;
    enroll(studentId: number, courseId: number): Promise<{
        student: {
            id: number;
            fullName: string;
            email: string;
            createdAt: Date;
        };
        course: {
            code: string;
            id: number;
            title: string;
            departmentId: number;
        };
    } & {
        id: number;
        studentId: number;
        status: import("@prisma/client").$Enums.EnrollmentStatus;
        enrolledAt: Date;
        courseId: number;
    }>;
    studentEnrollments(studentId: number): Promise<{
        enrollments: ({
            course: {
                code: string;
                id: number;
                title: string;
                departmentId: number;
            };
        } & {
            id: number;
            studentId: number;
            status: import("@prisma/client").$Enums.EnrollmentStatus;
            enrolledAt: Date;
            courseId: number;
        })[];
    } & {
        id: number;
        fullName: string;
        email: string;
        createdAt: Date;
    }>;
}
