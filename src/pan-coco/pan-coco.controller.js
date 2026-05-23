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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanCocoController = void 0;
const common_1 = require("@nestjs/common");
const pan_coco_service_1 = require("./pan-coco.service");
const create_pan_coco_dto_1 = require("./dto/create-pan-coco.dto");
const update_pan_coco_dto_1 = require("./dto/update-pan-coco.dto");
let PanCocoController = class PanCocoController {
    panCocoService;
    constructor(panCocoService) {
        this.panCocoService = panCocoService;
    }
    list() {
        return this.panCocoService.findAll();
    }
    create(dto) {
        return this.panCocoService.create(dto);
    }
    findOne(id) {
        return this.panCocoService.findOne(id);
    }
    update(id, dto) {
        return this.panCocoService.update(id, dto);
    }
    remove(id) {
        this.panCocoService.remove(id);
    }
};
exports.PanCocoController = PanCocoController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PanCocoController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pan_coco_dto_1.CreatePanCocoDto]),
    __metadata("design:returntype", void 0)
], PanCocoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PanCocoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pan_coco_dto_1.UpdatePanCocoDto]),
    __metadata("design:returntype", void 0)
], PanCocoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PanCocoController.prototype, "remove", null);
exports.PanCocoController = PanCocoController = __decorate([
    (0, common_1.Controller)('pan-coco'),
    __metadata("design:paramtypes", [pan_coco_service_1.PanCocoService])
], PanCocoController);
//# sourceMappingURL=pan-coco.controller.js.map