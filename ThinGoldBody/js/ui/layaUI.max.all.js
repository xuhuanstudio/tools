var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var mainViewUI = (function (_super) {
        __extends(mainViewUI, _super);
        function mainViewUI() {
            _super.call(this);
        }
        mainViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.mainViewUI.uiView);
        };
        mainViewUI.uiView = { "type": "View", "props": { "width": 760, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 760, "skin": "comp/bg1.png", "height": 1280 } }, { "type": "Button", "props": { "y": 176, "x": 539, "width": 203, "var": "yesBtn", "skin": "comp/button.png", "labelSize": 42, "labelColors": "#000000", "labelBold": true, "label": "确定", "height": 71 } }, { "type": "TextInput", "props": { "y": 177, "x": 22, "width": 497, "var": "inputText", "skin": "comp/textinput.png", "height": 70, "fontSize": 45 } }, { "type": "Label", "props": { "y": 69, "x": 170, "width": 433, "text": "瘦金体千字文集字", "height": 72, "fontSize": 48, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 1231, "x": 200, "width": 286, "text": "QQ群:734425203(浅墨素笺)", "height": 42, "fontSize": 30, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 1189, "x": 102, "width": 663, "text": "经邱金生老师同意，素材资料来自邱老师", "height": 45, "fontSize": 30, "color": "#000000", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 1000, "x": 120, "width": 467, "text": "请老用户们添加下方QQ群以获取最新版本\n动态，该链接将在一段时间后失效 ! ! !", "height": 43, "fontSize": 30, "color": "#000000", "bold": true, "align": "center" } }] };
        return mainViewUI;
    }(View));
    ui.mainViewUI = mainViewUI;
})(ui || (ui = {}));
var ui;
(function (ui) {
    var maxFontViewUI = (function (_super) {
        __extends(maxFontViewUI, _super);
        function maxFontViewUI() {
            _super.call(this);
        }
        maxFontViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.maxFontViewUI.uiView);
        };
        maxFontViewUI.uiView = { "type": "View", "props": { "width": 760, "height": 1280 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 760, "skin": "comp/blank.png", "height": 1280 }, "child": [{ "type": "Sprite", "props": { "y": 550, "x": 130, "var": "pos_" } }] }] };
        return maxFontViewUI;
    }(View));
    ui.maxFontViewUI = maxFontViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map