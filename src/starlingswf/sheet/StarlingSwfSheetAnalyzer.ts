/**
 * StarlingSwfSpriteSheet解析器
 */
module starlingswf {
    export class StarlingSwfSheetAnalyzer extends RES.SheetAnalyzer {
        public parseSpriteSheet(texture:egret.Texture, data:any):egret.SpriteSheet {
            var frames:any = data.frames;
            if (!frames) {
                return;
            }
            var spriteSheet:egret.SpriteSheet = new egret.SpriteSheet(texture._bitmapData);
            for (var name in frames) {
                var config:any = frames[name];
                var texture:egret.Texture = spriteSheet.createTexture(name, config.x, config.y, config.w, config.h);
                texture._offsetX = -config.offX || 0;
                texture._offsetY = -config.offY || 0;
            }
            return spriteSheet;
        }
    }
}