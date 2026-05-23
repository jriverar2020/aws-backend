import { CreatePanCocoDto } from './dto/create-pan-coco.dto';
import { UpdatePanCocoDto } from './dto/update-pan-coco.dto';
import { PanCoco } from './entities/pan-coco.entity';
export declare class PanCocoService {
    private pancocos;
    private nextId;
    create(dto: CreatePanCocoDto): PanCoco;
    findAll(): PanCoco[];
    findOne(id: number): PanCoco;
    update(id: number, dto: UpdatePanCocoDto): PanCoco;
    remove(id: number): void;
}
