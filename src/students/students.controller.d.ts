import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly service;
    constructor(service: StudentsService);
    create(body: {
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
    detail(id: number): Promise<{
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
    createOrUpdateProfile(id: number, body: {
        phone?: string;
        Address?: string;
    }): Promise<{
        id: number;
        phone: string | null;
        studentId: number;
        Address: string | null;
    }>;
    enroll(id: number, body: {
        courseId: number;
    }): Promise<{
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
    studentEnrollments(id: number): Promise<{
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
