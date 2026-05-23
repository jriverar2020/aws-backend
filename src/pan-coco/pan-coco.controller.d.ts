import { PanCocoService } from './pan-coco.service';
import { CreatePanCocoDto } from './dto/create-pan-coco.dto';
import { UpdatePanCocoDto } from './dto/update-pan-coco.dto';
export declare class PanCocoController {
    private readonly panCocoService;
    constructor(panCocoService: PanCocoService);
    list(): import("./entities/pan-coco.entity").PanCoco[];
    create(dto: CreatePanCocoDto): import("./entities/pan-coco.entity").PanCoco;
    findOne(id: number): import("./entities/pan-coco.entity").PanCoco;
    update(id: number, dto: UpdatePanCocoDto): import("./entities/pan-coco.entity").PanCoco;
    remove(id: number): void;
}
