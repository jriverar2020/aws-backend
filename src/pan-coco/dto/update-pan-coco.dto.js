"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePanCocoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pan_coco_dto_1 = require("./create-pan-coco.dto");
class UpdatePanCocoDto extends (0, mapped_types_1.PartialType)(create_pan_coco_dto_1.CreatePanCocoDto) {
}
exports.UpdatePanCocoDto = UpdatePanCocoDto;
//# sourceMappingURL=update-pan-coco.dto.js.map