"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanCocoService = void 0;
const common_1 = require("@nestjs/common");
let PanCocoService = class PanCocoService {
    pancocos = [];
    nextId = 1;
    create(dto) {
        const newPanCoco = {
            id: this.nextId++,
            code: dto.code,
            name: dto.name,
            isActive: true,
            createdAt: new Date().toISOString(),
        };
        this.pancocos.push(newPanCoco);
        return newPanCoco;
    }
    findAll() {
        return this.pancocos;
    }
    findOne(id) {
        const found = this.pancocos.find(c => c.id === id);
        if (!found)
            throw new common_1.NotFoundException(`PanCoco ${id} no existe`);
        return found;
    }
    update(id, dto) {
        const panCoco = this.findOne(id);
        Object.assign(panCoco, dto);
        return panCoco;
    }
    remove(id) {
        const idx = this.pancocos.findIndex(c => c.id === id);
        if (idx === -1)
            throw new common_1.NotFoundException(`PanCoco ${id} no existe`);
        this.pancocos.splice(idx, 1);
    }
};
exports.PanCocoService = PanCocoService;
exports.PanCocoService = PanCocoService = __decorate([
    (0, common_1.Injectable)()
], PanCocoService);
//# sourceMappingURL=pan-coco.service.js.map