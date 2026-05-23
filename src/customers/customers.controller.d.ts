import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customers.dto';
import { UpdateCustomerDto } from './dto/update-customers.dto';
export declare class CustomersController {
    private readonly customerService;
    constructor(customerService: CustomersService);
    list(user: any): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }[]>;
    create(dto: CreateCustomerDto): Promise<{
        id: number;
        fullName: string;
        email: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
    }>;
    findOne(user: any, id: number): Promise<{
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
