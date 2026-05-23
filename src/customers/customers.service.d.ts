import { CreateCustomerDto } from './dto/create-customers.dto';
import { UpdateCustomerDto } from './dto/update-customers.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class CustomersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private customers;
    private nextId;
    create(dto: CreateCustomerDto): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    update(id: number, dto: UpdateCustomerDto): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    remove(id: number): Promise<void>;
}
