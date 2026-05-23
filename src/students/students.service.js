"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StudentsService = class StudentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.student.create({ data });
    }
    async findAll() {
        return this.prisma.student.findMany({ orderBy: { id: 'asc' } });
    }
    async createOrUpdateProfile(studentId, data) {
        const student = await this.prisma.student.findUnique({ where: { id: studentId } });
        if (!student)
            throw new common_1.NotFoundException(`Student ${studentId} no existe`);
        return this.prisma.studentProfile.upsert({
            where: { studentId },
            update: data,
            create: { studentId, ...data },
        });
    }
    async detail(studentId) {
        const student = await this.prisma.student.findUnique({
            where: { id: studentId },
            include: { Profile: true },
        });
        if (!student)
            throw new common_1.NotFoundException(`Student ${studentId} no existe`);
        return student;
    }
    async enroll(studentId, courseId) {
        return this.prisma.enrollment.create({
            data: { studentId, courseId },
            include: { course: true, student: true },
        });
    }
    async studentEnrollments(studentId) {
        const student = await this.prisma.student.findUnique({
            where: { id: studentId },
            include: {
                enrollments: {
                    include: { course: true },
                    orderBy: { enrolledAt: 'desc' },
                },
            },
        });
        if (!student)
            throw new common_1.NotFoundException(`Student ${studentId} no existe`);
        return student;
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentsService);
//# sourceMappingURL=students.service.js.map