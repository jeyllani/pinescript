"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "pineHovers" is now active!');
    let pinehovers = vscode.languages.registerHoverProvider('pine', {
        provideHover(document, position, token) {
            let hoverRange;
            const hoverLineText = document.lineAt(position.line).text;
            const function1 = new vscode.MarkdownString(``);
            function1.appendCodeblock("alert(message = string, freq = input string) -> void");
            function1.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_alert)*`);
            function1.isTrusted = true;
            function1.supportHtml = false;
            const pattern1 = new RegExp("(alert)\\(");
            if (pattern1.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern1);
                if (hoverRange) {
                    return new vscode.Hover(function1, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function2 = new vscode.MarkdownString(``);
            function2.appendCodeblock("alertcondition(condition = bool, title = const string, message = const string) → int|float");
            function2.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_alertcondition)*`);
            function2.isTrusted = true;
            function2.supportHtml = false;
            const pattern2 = new RegExp("(alertcondition)\\(");
            if (pattern2.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern2);
                if (hoverRange) {
                    return new vscode.Hover(function2, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function3 = new vscode.MarkdownString(``);
            function3.appendCodeblock("array.avg(id = int[]|float[]) → int|float");
            function3.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}avg)*`);
            function3.isTrusted = true;
            function3.supportHtml = false;
            const pattern3 = new RegExp("(array\\.avg)\\(");
            if (pattern3.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern3);
                if (hoverRange) {
                    return new vscode.Hover(function3, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function4 = new vscode.MarkdownString(``);
            function4.appendCodeblock("array.clear(id = any array type) → void");
            function4.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}clear)*`);
            function4.isTrusted = true;
            function4.supportHtml = false;
            const pattern4 = new RegExp("(array\\.clear)\\(");
            if (pattern4.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern4);
                if (hoverRange) {
                    return new vscode.Hover(function4, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function5 = new vscode.MarkdownString(``);
            function5.appendCodeblock("array.concat(id1 = any array type, id2 = any array type) → id1");
            function5.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}concat)*`);
            function5.isTrusted = true;
            function5.supportHtml = false;
            const pattern5 = new RegExp("(array\\.concat)\\(");
            if (pattern5.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern5);
                if (hoverRange) {
                    return new vscode.Hover(function5, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function6 = new vscode.MarkdownString(``);
            function6.appendCodeblock("array.copy(id = any array type) → array");
            function6.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}copy)*`);
            function6.isTrusted = true;
            function6.supportHtml = false;
            const pattern6 = new RegExp("(array\\.copy)\\(");
            if (pattern6.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern6);
                if (hoverRange) {
                    return new vscode.Hover(function6, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function7 = new vscode.MarkdownString(``);
            function7.appendCodeblock("array.covariance(id1 = int[]|float[], id2 = int[]|float[]) → float");
            function7.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}covariance)*`);
            function7.isTrusted = true;
            function7.supportHtml = false;
            const pattern7 = new RegExp("(array\\.covariance)\\(");
            if (pattern7.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern7);
                if (hoverRange) {
                    return new vscode.Hover(function7, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function8 = new vscode.MarkdownString(``);
            function8.appendCodeblock("array.fill(id = any array type, value = series <type of the arrays elements>, index_from = int, index_to = int) → bool[]");
            function8.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}fill)*`);
            function8.isTrusted = true;
            function8.supportHtml = false;
            const pattern8 = new RegExp("(array\\.fill)\\(");
            if (pattern8.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern8);
                if (hoverRange) {
                    return new vscode.Hover(function8, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function9 = new vscode.MarkdownString(``);
            function9.appendCodeblock("array.from(arg0 = series of any argument array type, ...) → int|float|bool|color|string|label|line|box|table)[]");
            function9.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}from)*`);
            function9.isTrusted = true;
            function9.supportHtml = false;
            const pattern9 = new RegExp("(array\\.from)\\(");
            if (pattern9.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern9);
                if (hoverRange) {
                    return new vscode.Hover(function9, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function10 = new vscode.MarkdownString(``);
            function10.appendCodeblock("array.get(id = any array type, index = int) → series <type of the arrays elements>");
            function10.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}get)*`);
            function10.isTrusted = true;
            function10.supportHtml = false;
            const pattern10 = new RegExp("(array\\.get)\\(");
            if (pattern10.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern10);
                if (hoverRange) {
                    return new vscode.Hover(function10, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function11 = new vscode.MarkdownString(``);
            function11.appendCodeblock("array.includes(id = any array type, value = series <type of the arrays elements>) → series bool");
            function11.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}includes)*`);
            function11.isTrusted = true;
            function11.supportHtml = false;
            const pattern11 = new RegExp("(array\\.includes)\\(");
            if (pattern11.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern11);
                if (hoverRange) {
                    return new vscode.Hover(function11, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function12 = new vscode.MarkdownString(``);
            function12.appendCodeblock("array.indexof(id = any array type, value = series <type of the arrays elements>) → int");
            function12.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}indexof)*`);
            function12.isTrusted = true;
            function12.supportHtml = false;
            const pattern12 = new RegExp("(array\\.indexof)\\(");
            if (pattern12.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern12);
                if (hoverRange) {
                    return new vscode.Hover(function12, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function13 = new vscode.MarkdownString(``);
            function13.appendCodeblock("array.insert(id = any array type, index = int, value = series <type of the arrays elements>) → void");
            function13.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}insert)*`);
            function13.isTrusted = true;
            function13.supportHtml = false;
            const pattern13 = new RegExp("(array\\.insert)\\(");
            if (pattern13.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern13);
                if (hoverRange) {
                    return new vscode.Hover(function13, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function14 = new vscode.MarkdownString(``);
            function14.appendCodeblock("array.join(id = int[]|float[]|string[], separator = series string) → series string");
            function14.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}join)*`);
            function14.isTrusted = true;
            function14.supportHtml = false;
            const pattern14 = new RegExp("(array\\.join)\\(");
            if (pattern14.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern14);
                if (hoverRange) {
                    return new vscode.Hover(function14, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function15 = new vscode.MarkdownString(``);
            function15.appendCodeblock("array.lastindexof(id = any array type, value = series <type of the arrays elements>) → int");
            function15.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}lastindexof)*`);
            function15.isTrusted = true;
            function15.supportHtml = false;
            const pattern15 = new RegExp("(array\\.lastindexof)\\(");
            if (pattern15.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern15);
                if (hoverRange) {
                    return new vscode.Hover(function15, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function16 = new vscode.MarkdownString(``);
            function16.appendCodeblock("array.max(id = int[]|float[]) → series int|float");
            function16.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}max)*`);
            function16.isTrusted = true;
            function16.supportHtml = false;
            const pattern16 = new RegExp("(array\\.max)\\(");
            if (pattern16.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern16);
                if (hoverRange) {
                    return new vscode.Hover(function16, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function17 = new vscode.MarkdownString(``);
            function17.appendCodeblock("array.median(id = int[]|float[]) → series int|float");
            function17.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}median)*`);
            function17.isTrusted = true;
            function17.supportHtml = false;
            const pattern17 = new RegExp("(array\\.median)\\(");
            if (pattern17.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern17);
                if (hoverRange) {
                    return new vscode.Hover(function17, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function18 = new vscode.MarkdownString(``);
            function18.appendCodeblock("array.min(id = int[]|float[]) → series int|float");
            function18.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}min)*`);
            function18.isTrusted = true;
            function18.supportHtml = false;
            const pattern18 = new RegExp("(array\\.min)\\(");
            if (pattern18.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern18);
                if (hoverRange) {
                    return new vscode.Hover(function18, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function19 = new vscode.MarkdownString(``);
            function19.appendCodeblock("array.mode(id = int[]|float[]) → series int|float");
            function19.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}mode)*`);
            function19.isTrusted = true;
            function19.supportHtml = false;
            const pattern19 = new RegExp("(array\\.mode)\\(");
            if (pattern19.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern19);
                if (hoverRange) {
                    return new vscode.Hover(function19, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function20 = new vscode.MarkdownString(``);
            function20.appendCodeblock("array.new_bool(size = bool, initial_value = series bool) → bool[]");
            function20.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_bool)*`);
            function20.isTrusted = true;
            function20.supportHtml = false;
            const pattern20 = new RegExp("(array\\.new_bool)\\(");
            if (pattern20.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern20);
                if (hoverRange) {
                    return new vscode.Hover(function20, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function21 = new vscode.MarkdownString(``);
            function21.appendCodeblock("array.new_box(size = box, initial_value = series box) → box[]");
            function21.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_box)*`);
            function21.isTrusted = true;
            function21.supportHtml = false;
            const pattern21 = new RegExp("(array\\.new_box)\\(");
            if (pattern21.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern21);
                if (hoverRange) {
                    return new vscode.Hover(function21, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function22 = new vscode.MarkdownString(``);
            function22.appendCodeblock("array.new_color(size = color, initial_value = series color) → color[]");
            function22.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_color)*`);
            function22.isTrusted = true;
            function22.supportHtml = false;
            const pattern22 = new RegExp("(array\\.new_color)\\(");
            if (pattern22.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern22);
                if (hoverRange) {
                    return new vscode.Hover(function22, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function23 = new vscode.MarkdownString(``);
            function23.appendCodeblock("array.new_float(size = float, initial_value = series float) → float[]");
            function23.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_float)*`);
            function23.isTrusted = true;
            function23.supportHtml = false;
            const pattern23 = new RegExp("(array\\.new_float)\\(");
            if (pattern23.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern23);
                if (hoverRange) {
                    return new vscode.Hover(function23, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function24 = new vscode.MarkdownString(``);
            function24.appendCodeblock("array.new_int(size = int, initial_value = series int) → int[]");
            function24.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_int)*`);
            function24.isTrusted = true;
            function24.supportHtml = false;
            const pattern24 = new RegExp("(array\\.new_int)\\(");
            if (pattern24.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern24);
                if (hoverRange) {
                    return new vscode.Hover(function24, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function25 = new vscode.MarkdownString(``);
            function25.appendCodeblock("array.new_label(size = int, initial_value = series label) → label[]");
            function25.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_label)*`);
            function25.isTrusted = true;
            function25.supportHtml = false;
            const pattern25 = new RegExp("(array\\.new_label)\\(");
            if (pattern25.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern25);
                if (hoverRange) {
                    return new vscode.Hover(function25, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function26 = new vscode.MarkdownString(``);
            function26.appendCodeblock("array.new_line(size = int, initial_value = series line) → line[]");
            function26.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_line)*`);
            function26.isTrusted = true;
            function26.supportHtml = false;
            const pattern26 = new RegExp("(array\\.new_line)\\(");
            if (pattern26.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern26);
                if (hoverRange) {
                    return new vscode.Hover(function26, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function27 = new vscode.MarkdownString(``);
            function27.appendCodeblock("array.new_string(size = int, initial_value = series string) → string[]");
            function27.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_string)*`);
            function27.isTrusted = true;
            function27.supportHtml = false;
            const pattern27 = new RegExp("(array\\.new_string)\\(");
            if (pattern27.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern27);
                if (hoverRange) {
                    return new vscode.Hover(function27, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function28 = new vscode.MarkdownString(``);
            function28.appendCodeblock("array.new_table(size = int, initial_value = series table) → table[]");
            function28.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_table)*`);
            function28.isTrusted = true;
            function28.supportHtml = false;
            const pattern28 = new RegExp("(array\\.new_table)\\(");
            if (pattern28.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern28);
                if (hoverRange) {
                    return new vscode.Hover(function28, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function29 = new vscode.MarkdownString(``);
            function29.appendCodeblock("array.pop(id = any array type) → series <type of the arrays elements>");
            function29.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}pop)*`);
            function29.isTrusted = true;
            function29.supportHtml = false;
            const pattern29 = new RegExp("(array\\.pop)\\(");
            if (pattern29.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern29);
                if (hoverRange) {
                    return new vscode.Hover(function29, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function30 = new vscode.MarkdownString(``);
            function30.appendCodeblock("array.push(id = any array type, value = <type of the arrays elements>) → series void");
            function30.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}push)*`);
            function30.isTrusted = true;
            function30.supportHtml = false;
            const pattern30 = new RegExp("(array\\.push)\\(");
            if (pattern30.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern30);
                if (hoverRange) {
                    return new vscode.Hover(function30, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function31 = new vscode.MarkdownString(``);
            function31.appendCodeblock("array.range(id = int[]|float[]) → int|float");
            function31.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}range)*`);
            function31.isTrusted = true;
            function31.supportHtml = false;
            const pattern31 = new RegExp("(array\\.range)\\(");
            if (pattern31.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern31);
                if (hoverRange) {
                    return new vscode.Hover(function31, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function32 = new vscode.MarkdownString(``);
            function32.appendCodeblock("array.remove(id = any array type, index = int) → series <type of the arrays elements>");
            function32.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}remove)*`);
            function32.isTrusted = true;
            function32.supportHtml = false;
            const pattern32 = new RegExp("(array\\.remove)\\(");
            if (pattern32.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern32);
                if (hoverRange) {
                    return new vscode.Hover(function32, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function33 = new vscode.MarkdownString(``);
            function33.appendCodeblock("array.reverse(id = any array type) → void");
            function33.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}reverse)*`);
            function33.isTrusted = true;
            function33.supportHtml = false;
            const pattern33 = new RegExp("(array\\.reverse)\\(");
            if (pattern33.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern33);
                if (hoverRange) {
                    return new vscode.Hover(function33, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function34 = new vscode.MarkdownString(``);
            function34.appendCodeblock("array.set(id = any array type, index = int, value = <type of the arrays elements>) → void");
            function34.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}set)*`);
            function34.isTrusted = true;
            function34.supportHtml = false;
            const pattern34 = new RegExp("(array\\.set)\\(");
            if (pattern34.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern34);
                if (hoverRange) {
                    return new vscode.Hover(function34, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function35 = new vscode.MarkdownString(``);
            function35.appendCodeblock("array.shift(id = any array type) → series <type of the arrays elements>");
            function35.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}shift)*`);
            function35.isTrusted = true;
            function35.supportHtml = false;
            const pattern35 = new RegExp("(array\\.shift)\\(");
            if (pattern35.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern35);
                if (hoverRange) {
                    return new vscode.Hover(function35, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function36 = new vscode.MarkdownString(``);
            function36.appendCodeblock("array.size(id = any array type) → series int");
            function36.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}size)*`);
            function36.isTrusted = true;
            function36.supportHtml = false;
            const pattern36 = new RegExp("(array\\.size)\\(");
            if (pattern36.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern36);
                if (hoverRange) {
                    return new vscode.Hover(function36, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function37 = new vscode.MarkdownString(``);
            function37.appendCodeblock("array.slice(id = any array type, index_from = int, index_to = int) → int|float");
            function37.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}slice)*`);
            function37.isTrusted = true;
            function37.supportHtml = false;
            const pattern37 = new RegExp("(array\\.slice)\\(");
            if (pattern37.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern37);
                if (hoverRange) {
                    return new vscode.Hover(function37, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function38 = new vscode.MarkdownString(``);
            function38.appendCodeblock("array.sort(id = int[]|float[]|string[], order = sort_order) → void");
            function38.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}sort)*`);
            function38.isTrusted = true;
            function38.supportHtml = false;
            const pattern38 = new RegExp("(array\\.sort)\\(");
            if (pattern38.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern38);
                if (hoverRange) {
                    return new vscode.Hover(function38, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function39 = new vscode.MarkdownString(``);
            function39.appendCodeblock("array.standardize(id = int[]|float[]) → int[]|float[]");
            function39.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}standardize)*`);
            function39.isTrusted = true;
            function39.supportHtml = false;
            const pattern39 = new RegExp("(array\\.standardize)\\(");
            if (pattern39.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern39);
                if (hoverRange) {
                    return new vscode.Hover(function39, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function40 = new vscode.MarkdownString(``);
            function40.appendCodeblock("array.stdev(id = int[]|float[]) → int|float");
            function40.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}stdev)*`);
            function40.isTrusted = true;
            function40.supportHtml = false;
            const pattern40 = new RegExp("(array\\.stdev)\\(");
            if (pattern40.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern40);
                if (hoverRange) {
                    return new vscode.Hover(function40, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function41 = new vscode.MarkdownString(``);
            function41.appendCodeblock("array.sum(id = int[]|float[]) → int|float");
            function41.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}sum)*`);
            function41.isTrusted = true;
            function41.supportHtml = false;
            const pattern41 = new RegExp("(array\\.sum)\\(");
            if (pattern41.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern41);
                if (hoverRange) {
                    return new vscode.Hover(function41, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function42 = new vscode.MarkdownString(``);
            function42.appendCodeblock("array.unshift(id = any array type, value = type of the arrays elements) → int|float");
            function42.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}unshift)*`);
            function42.isTrusted = true;
            function42.supportHtml = false;
            const pattern42 = new RegExp("(array\\.unshift)\\(");
            if (pattern42.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern42);
                if (hoverRange) {
                    return new vscode.Hover(function42, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function43 = new vscode.MarkdownString(``);
            function43.appendCodeblock("array.variance(id = int[]|float[]) → int|float");
            function43.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}variance)*`);
            function43.isTrusted = true;
            function43.supportHtml = false;
            const pattern43 = new RegExp("(array\\.variance)\\(");
            if (pattern43.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern43);
                if (hoverRange) {
                    return new vscode.Hover(function43, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function44 = new vscode.MarkdownString(``);
            function44.appendCodeblock("barcolor(color = color, offset = int, editable = bool, show_last = input int, title = string) → void");
            function44.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_barcolor)*`);
            function44.isTrusted = true;
            function44.supportHtml = false;
            const pattern44 = new RegExp("(barcolor)\\(");
            if (pattern44.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern44);
                if (hoverRange) {
                    return new vscode.Hover(function44, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function45 = new vscode.MarkdownString(``);
            function45.appendCodeblock("bgcolor(color = color, offset = int, editable = bool, show_last = input int, title = string) → void");
            function45.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_bgcolor)*`);
            function45.isTrusted = true;
            function45.supportHtml = false;
            const pattern45 = new RegExp("(bgcolor)\\(");
            if (pattern45.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern45);
                if (hoverRange) {
                    return new vscode.Hover(function45, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function47 = new vscode.MarkdownString(``);
            function47.appendCodeblock("box(x = box) → series box");
            function47.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box)*`);
            function47.isTrusted = true;
            function47.supportHtml = false;
            const pattern47 = new RegExp("(box)\\(");
            if (pattern47.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern47);
                if (hoverRange) {
                    return new vscode.Hover(function47, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function48 = new vscode.MarkdownString(``);
            function48.appendCodeblock("box.delete(id = box) → series void");
            function48.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}delete)*`);
            function48.isTrusted = true;
            function48.supportHtml = false;
            const pattern48 = new RegExp("(box\\.delete)\\(");
            if (pattern48.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern48);
                if (hoverRange) {
                    return new vscode.Hover(function48, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function49 = new vscode.MarkdownString(``);
            function49.appendCodeblock("box.get_bottom(id = box) → series float");
            function49.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}get_bottom)*`);
            function49.isTrusted = true;
            function49.supportHtml = false;
            const pattern49 = new RegExp("(box\\.get_bottom)\\(");
            if (pattern49.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern49);
                if (hoverRange) {
                    return new vscode.Hover(function49, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function50 = new vscode.MarkdownString(``);
            function50.appendCodeblock("box.get_left(id = box) → int");
            function50.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}get_left)*`);
            function50.isTrusted = true;
            function50.supportHtml = false;
            const pattern50 = new RegExp("(box\\.get_left)\\(");
            if (pattern50.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern50);
                if (hoverRange) {
                    return new vscode.Hover(function50, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function51 = new vscode.MarkdownString(``);
            function51.appendCodeblock("box.get_right(id = box) → int");
            function51.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}get_right)*`);
            function51.isTrusted = true;
            function51.supportHtml = false;
            const pattern51 = new RegExp("(box\\.get_right)\\(");
            if (pattern51.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern51);
                if (hoverRange) {
                    return new vscode.Hover(function51, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function52 = new vscode.MarkdownString(``);
            function52.appendCodeblock("box.get_top(id = box) → float");
            function52.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}get_top)*`);
            function52.isTrusted = true;
            function52.supportHtml = false;
            const pattern52 = new RegExp("(box\\.get_top)\\(");
            if (pattern52.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern52);
                if (hoverRange) {
                    return new vscode.Hover(function52, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function53 = new vscode.MarkdownString(``);
            function53.appendCodeblock("box.new(left = int, top = int|float, right = int, bottom = int|float, border_color = color, border_width = int, border_style = string, extend = string, xloc = string, bgcolor = string)");
            function53.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}new)*`);
            function53.isTrusted = true;
            function53.supportHtml = false;
            const pattern53 = new RegExp("(box\\.new)\\(");
            if (pattern53.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern53);
                if (hoverRange) {
                    return new vscode.Hover(function53, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function54 = new vscode.MarkdownString(``);
            function54.appendCodeblock("box.new(left = int, top = int|float, right = int, bottom = int|float, border_color = color, border_width = int, border_style = string, extend = string, xloc = string, bgcolor = string)");
            function54.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}new)*`);
            function54.isTrusted = true;
            function54.supportHtml = false;
            const pattern54 = new RegExp("(box\\.new)\\(");
            if (pattern54.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern54);
                if (hoverRange) {
                    return new vscode.Hover(function54, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function55 = new vscode.MarkdownString(``);
            function55.appendCodeblock("box.set_bgcolor(id = box, color = color) → void");
            function55.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_bgcolor)*`);
            function55.isTrusted = true;
            function55.supportHtml = false;
            const pattern55 = new RegExp("(box\\.set_bgcolor)\\(");
            if (pattern55.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern55);
                if (hoverRange) {
                    return new vscode.Hover(function55, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function56 = new vscode.MarkdownString(``);
            function56.appendCodeblock("box.set_border_color(id = box, color = color) → void");
            function56.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_border_color)*`);
            function56.isTrusted = true;
            function56.supportHtml = false;
            const pattern56 = new RegExp("(box\\.set_border_color)\\(");
            if (pattern56.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern56);
                if (hoverRange) {
                    return new vscode.Hover(function56, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function57 = new vscode.MarkdownString(``);
            function57.appendCodeblock("box.set_border_style(id = box, style = string) → void");
            function57.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_border_style)*`);
            function57.isTrusted = true;
            function57.supportHtml = false;
            const pattern57 = new RegExp("(box\\.set_border_style)\\(");
            if (pattern57.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern57);
                if (hoverRange) {
                    return new vscode.Hover(function57, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function58 = new vscode.MarkdownString(``);
            function58.appendCodeblock("box.set_border_width(id = box, width = int) → void");
            function58.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_border_width)*`);
            function58.isTrusted = true;
            function58.supportHtml = false;
            const pattern58 = new RegExp("(box\\.set_border_width)\\(");
            if (pattern58.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern58);
                if (hoverRange) {
                    return new vscode.Hover(function58, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function59 = new vscode.MarkdownString(``);
            function59.appendCodeblock("box.set_bottom(id = box, bottom = int|float) → void");
            function59.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_bottom)*`);
            function59.isTrusted = true;
            function59.supportHtml = false;
            const pattern59 = new RegExp("(box\\.set_bottom)\\(");
            if (pattern59.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern59);
                if (hoverRange) {
                    return new vscode.Hover(function59, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function60 = new vscode.MarkdownString(``);
            function60.appendCodeblock("box.set_extend(id = box, extend = string) → void");
            function60.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_extend)*`);
            function60.isTrusted = true;
            function60.supportHtml = false;
            const pattern60 = new RegExp("(box\\.set_extend)\\(");
            if (pattern60.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern60);
                if (hoverRange) {
                    return new vscode.Hover(function60, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function61 = new vscode.MarkdownString(``);
            function61.appendCodeblock("box.set_left(id = box, left = int) → void");
            function61.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_left)*`);
            function61.isTrusted = true;
            function61.supportHtml = false;
            const pattern61 = new RegExp("(box\\.set_left)\\(");
            if (pattern61.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern61);
                if (hoverRange) {
                    return new vscode.Hover(function61, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function62 = new vscode.MarkdownString(``);
            function62.appendCodeblock("box.set_lefttop(id = box, left = int, top = int|float) → void");
            function62.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_lefttop)*`);
            function62.isTrusted = true;
            function62.supportHtml = false;
            const pattern62 = new RegExp("(box\\.set_lefttop)\\(");
            if (pattern62.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern62);
                if (hoverRange) {
                    return new vscode.Hover(function62, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function63 = new vscode.MarkdownString(``);
            function63.appendCodeblock("box.set_right(id = box, right = int) → void");
            function63.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_right)*`);
            function63.isTrusted = true;
            function63.supportHtml = false;
            const pattern63 = new RegExp("(box\\.set_right)\\(");
            if (pattern63.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern63);
                if (hoverRange) {
                    return new vscode.Hover(function63, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function64 = new vscode.MarkdownString(``);
            function64.appendCodeblock("box.set_rightbottom(id = box, right = int, bottom = int|float) → void");
            function64.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_rightbottom)*`);
            function64.isTrusted = true;
            function64.supportHtml = false;
            const pattern64 = new RegExp("(box\\.set_rightbottom)\\(");
            if (pattern64.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern64);
                if (hoverRange) {
                    return new vscode.Hover(function64, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function65 = new vscode.MarkdownString(``);
            function65.appendCodeblock("box.set_top(id = box, top = int|float) → void");
            function65.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_top)*`);
            function65.isTrusted = true;
            function65.supportHtml = false;
            const pattern65 = new RegExp("(box\\.set_top)\\(");
            if (pattern65.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern65);
                if (hoverRange) {
                    return new vscode.Hover(function65, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function66 = new vscode.MarkdownString(``);
            function66.appendCodeblock("color.b(color = color) → series|const|input float");
            function66.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}b)*`);
            function66.isTrusted = true;
            function66.supportHtml = false;
            const pattern66 = new RegExp("(color\\.b)\\(");
            if (pattern66.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern66);
                if (hoverRange) {
                    return new vscode.Hover(function66, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function67 = new vscode.MarkdownString(``);
            function67.appendCodeblock("color.from_gradient(value = int|float, bottom_value = int|float, top_value = int|float, bottom_color = color, top_color = color) → series color");
            function67.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}from_gradient)*`);
            function67.isTrusted = true;
            function67.supportHtml = false;
            const pattern67 = new RegExp("(color\\.from_gradient)\\(");
            if (pattern67.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern67);
                if (hoverRange) {
                    return new vscode.Hover(function67, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function68 = new vscode.MarkdownString(``);
            function68.appendCodeblock("color.g(color = color) → series|const|input float");
            function68.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}g)*`);
            function68.isTrusted = true;
            function68.supportHtml = false;
            const pattern68 = new RegExp("(color\\.g)\\(");
            if (pattern68.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern68);
                if (hoverRange) {
                    return new vscode.Hover(function68, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function69 = new vscode.MarkdownString(``);
            function69.appendCodeblock("color.new(color = color, transp = int|float) → const color");
            function69.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}new)*`);
            function69.isTrusted = true;
            function69.supportHtml = false;
            const pattern69 = new RegExp("(color\\.new)\\(");
            if (pattern69.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern69);
                if (hoverRange) {
                    return new vscode.Hover(function69, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function70 = new vscode.MarkdownString(``);
            function70.appendCodeblock("color.r(color = color) → series|const|input float");
            function70.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}r)*`);
            function70.isTrusted = true;
            function70.supportHtml = false;
            const pattern70 = new RegExp("(color\\.r)\\(");
            if (pattern70.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern70);
                if (hoverRange) {
                    return new vscode.Hover(function70, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function71 = new vscode.MarkdownString(``);
            function71.appendCodeblock("color.rgb(red = int|float, green = int|float, blue = int|float, transp = int|float) → series|const|input color");
            function71.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}rgb)*`);
            function71.isTrusted = true;
            function71.supportHtml = false;
            const pattern71 = new RegExp("(color\\.rgb)\\(");
            if (pattern71.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern71);
                if (hoverRange) {
                    return new vscode.Hover(function71, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function72 = new vscode.MarkdownString(``);
            function72.appendCodeblock("color.t(color = color) → series|const|input float");
            function72.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}t)*`);
            function72.isTrusted = true;
            function72.supportHtml = false;
            const pattern72 = new RegExp("(color\\.t)\\(");
            if (pattern72.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern72);
                if (hoverRange) {
                    return new vscode.Hover(function72, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function73 = new vscode.MarkdownString(``);
            function73.appendCodeblock("dayofmonth(time = int, timezone = series string) → series int");
            function73.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_dayofmonth)*`);
            function73.isTrusted = true;
            function73.supportHtml = false;
            const pattern73 = new RegExp("(dayofmonth)\\(");
            if (pattern73.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern73);
                if (hoverRange) {
                    return new vscode.Hover(function73, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function74 = new vscode.MarkdownString(``);
            function74.appendCodeblock("dayofweek(time = int, timezone = series string) → series int");
            function74.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_dayofweek)*`);
            function74.isTrusted = true;
            function74.supportHtml = false;
            const pattern74 = new RegExp("(dayofweek)\\(");
            if (pattern74.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern74);
                if (hoverRange) {
                    return new vscode.Hover(function74, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function75 = new vscode.MarkdownString(``);
            function75.appendCodeblock("fill(hline1 = hline, hline2 = hline, color = color, title = string, editable = bool, fillgaps = bool) → void");
            function75.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_fill)*`);
            function75.isTrusted = true;
            function75.supportHtml = false;
            const pattern75 = new RegExp("(fill)\\(");
            if (pattern75.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern75);
                if (hoverRange) {
                    return new vscode.Hover(function75, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function76 = new vscode.MarkdownString(``);
            function76.appendCodeblock("fixnan(source = int|float|bool|color) → series int|float|bool|color");
            function76.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_fixnan)*`);
            function76.isTrusted = true;
            function76.supportHtml = false;
            const pattern76 = new RegExp("(fixnan)\\(");
            if (pattern76.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern76);
                if (hoverRange) {
                    return new vscode.Hover(function76, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function78 = new vscode.MarkdownString(``);
            function78.appendCodeblock("hline(price = int|float, title = const string, color = color, linestyle = hline_style, linewidth = int, editable = bool)");
            function78.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_hline)*`);
            function78.isTrusted = true;
            function78.supportHtml = false;
            const pattern78 = new RegExp("(hline)\\(");
            if (pattern78.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern78);
                if (hoverRange) {
                    return new vscode.Hover(function78, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function79 = new vscode.MarkdownString(``);
            function79.appendCodeblock("hour(time = int, timezone = string) → series int");
            function79.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_hour)*`);
            function79.isTrusted = true;
            function79.supportHtml = false;
            const pattern79 = new RegExp("(hour)\\(");
            if (pattern79.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern79);
                if (hoverRange) {
                    return new vscode.Hover(function79, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function80 = new vscode.MarkdownString(``);
            function80.appendCodeblock("input(defval = any, title = string, tooltip = string, inline = string, group = string) → input int|float|bool|string|color");
            function80.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input)*`);
            function80.isTrusted = true;
            function80.supportHtml = false;
            const pattern80 = new RegExp("(input)\\(");
            if (pattern80.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern80);
                if (hoverRange) {
                    return new vscode.Hover(function80, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function81 = new vscode.MarkdownString(``);
            function81.appendCodeblock("input.bool(defval = bool, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input bool");
            function81.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}bool)*`);
            function81.isTrusted = true;
            function81.supportHtml = false;
            const pattern81 = new RegExp("(input\\.bool)\\(");
            if (pattern81.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern81);
                if (hoverRange) {
                    return new vscode.Hover(function81, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function82 = new vscode.MarkdownString(``);
            function82.appendCodeblock("input.color(defval = const color, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input color");
            function82.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}color)*`);
            function82.isTrusted = true;
            function82.supportHtml = false;
            const pattern82 = new RegExp("(input\\.color)\\(");
            if (pattern82.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern82);
                if (hoverRange) {
                    return new vscode.Hover(function82, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function83 = new vscode.MarkdownString(``);
            function83.appendCodeblock("input.float(defval = float, title = string, options = tuple, tooltip = string, inline = string, group = string, confirm = bool) → input float");
            function83.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}float)*`);
            function83.isTrusted = true;
            function83.supportHtml = false;
            const pattern83 = new RegExp("(input\\.float)\\(");
            if (pattern83.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern83);
                if (hoverRange) {
                    return new vscode.Hover(function83, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function84 = new vscode.MarkdownString(``);
            function84.appendCodeblock("input.int(defval = int, title = string, minval = int, maxval = int, step = int, tooltip = string, inline = string, group = string, confirm = bool) → input int");
            function84.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}int)*`);
            function84.isTrusted = true;
            function84.supportHtml = false;
            const pattern84 = new RegExp("(input\\.int)\\(");
            if (pattern84.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern84);
                if (hoverRange) {
                    return new vscode.Hover(function84, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function85 = new vscode.MarkdownString(``);
            function85.appendCodeblock("input.price(defval = int|float, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input float");
            function85.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}price)*`);
            function85.isTrusted = true;
            function85.supportHtml = false;
            const pattern85 = new RegExp("(input\\.price)\\(");
            if (pattern85.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern85);
                if (hoverRange) {
                    return new vscode.Hover(function85, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function86 = new vscode.MarkdownString(``);
            function86.appendCodeblock("input.session(defval = string, title = string, options = tuple, tooltip = string, inline = string, group = string, confirm = bool) → input string");
            function86.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}session)*`);
            function86.isTrusted = true;
            function86.supportHtml = false;
            const pattern86 = new RegExp("(input\\.session)\\(");
            if (pattern86.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern86);
                if (hoverRange) {
                    return new vscode.Hover(function86, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function87 = new vscode.MarkdownString(``);
            function87.appendCodeblock("input.source(defval = int|float, title = string, tooltip = string, inline = string, group = string) → series float");
            function87.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}source)*`);
            function87.isTrusted = true;
            function87.supportHtml = false;
            const pattern87 = new RegExp("(input\\.source)\\(");
            if (pattern87.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern87);
                if (hoverRange) {
                    return new vscode.Hover(function87, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function88 = new vscode.MarkdownString(``);
            function88.appendCodeblock("input.string(defval = string, title = string, options = string, tooltip = string, inline = string, group = string, confirm = bool) → input string");
            function88.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}string)*`);
            function88.isTrusted = true;
            function88.supportHtml = false;
            const pattern88 = new RegExp("(input\\.string)\\(");
            if (pattern88.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern88);
                if (hoverRange) {
                    return new vscode.Hover(function88, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function89 = new vscode.MarkdownString(``);
            function89.appendCodeblock("input.symbol(defval = string, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input string");
            function89.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}symbol)*`);
            function89.isTrusted = true;
            function89.supportHtml = false;
            const pattern89 = new RegExp("(input\\.symbol)\\(");
            if (pattern89.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern89);
                if (hoverRange) {
                    return new vscode.Hover(function89, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function90 = new vscode.MarkdownString(``);
            function90.appendCodeblock("input.time(defval = const int, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input int");
            function90.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}time)*`);
            function90.isTrusted = true;
            function90.supportHtml = false;
            const pattern90 = new RegExp("(input\\.time)\\(");
            if (pattern90.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern90);
                if (hoverRange) {
                    return new vscode.Hover(function90, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function91 = new vscode.MarkdownString(``);
            function91.appendCodeblock("input.timeframe(defval = string, title = string, options = tuple, tooltip = string, inline = string, group = string, confirm = bool) → input string");
            function91.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}timeframe)*`);
            function91.isTrusted = true;
            function91.supportHtml = false;
            const pattern91 = new RegExp("(input\\.timeframe)\\(");
            if (pattern91.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern91);
                if (hoverRange) {
                    return new vscode.Hover(function91, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function93 = new vscode.MarkdownString(``);
            function93.appendCodeblock("label(x = label) → label");
            function93.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label)*`);
            function93.isTrusted = true;
            function93.supportHtml = false;
            const pattern93 = new RegExp("(label)\\(");
            if (pattern93.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern93);
                if (hoverRange) {
                    return new vscode.Hover(function93, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function94 = new vscode.MarkdownString(``);
            function94.appendCodeblock("label.delete(id = label) → void");
            function94.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}delete)*`);
            function94.isTrusted = true;
            function94.supportHtml = false;
            const pattern94 = new RegExp("(label\\.delete)\\(");
            if (pattern94.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern94);
                if (hoverRange) {
                    return new vscode.Hover(function94, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function95 = new vscode.MarkdownString(``);
            function95.appendCodeblock("label.get_text(id = label) → string");
            function95.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}get_text)*`);
            function95.isTrusted = true;
            function95.supportHtml = false;
            const pattern95 = new RegExp("(label\\.get_text)\\(");
            if (pattern95.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern95);
                if (hoverRange) {
                    return new vscode.Hover(function95, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function96 = new vscode.MarkdownString(``);
            function96.appendCodeblock("label.get_x(id = label) → int");
            function96.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}get_x)*`);
            function96.isTrusted = true;
            function96.supportHtml = false;
            const pattern96 = new RegExp("(label\\.get_x)\\(");
            if (pattern96.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern96);
                if (hoverRange) {
                    return new vscode.Hover(function96, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function97 = new vscode.MarkdownString(``);
            function97.appendCodeblock("label.get_y(id = label) → float");
            function97.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}get_y)*`);
            function97.isTrusted = true;
            function97.supportHtml = false;
            const pattern97 = new RegExp("(label\\.get_y)\\(");
            if (pattern97.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern97);
                if (hoverRange) {
                    return new vscode.Hover(function97, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function98 = new vscode.MarkdownString(``);
            function98.appendCodeblock("label.new(x = int, y = int|float, text = string, xloc = string, yloc = string, color = color, style = string, textcolor = color, size = string , textalign = string, tooltip = string) → series label");
            function98.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}new)*`);
            function98.isTrusted = true;
            function98.supportHtml = false;
            const pattern98 = new RegExp("(label\\.new)\\(");
            if (pattern98.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern98);
                if (hoverRange) {
                    return new vscode.Hover(function98, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function99 = new vscode.MarkdownString(``);
            function99.appendCodeblock("label.set_color(id = label, color = string) → void");
            function99.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_color)*`);
            function99.isTrusted = true;
            function99.supportHtml = false;
            const pattern99 = new RegExp("(label\\.set_color)\\(");
            if (pattern99.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern99);
                if (hoverRange) {
                    return new vscode.Hover(function99, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function100 = new vscode.MarkdownString(``);
            function100.appendCodeblock("label.set_size(id = label, size = string) → void");
            function100.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_size)*`);
            function100.isTrusted = true;
            function100.supportHtml = false;
            const pattern100 = new RegExp("(label\\.set_size)\\(");
            if (pattern100.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern100);
                if (hoverRange) {
                    return new vscode.Hover(function100, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function101 = new vscode.MarkdownString(``);
            function101.appendCodeblock("label.set_style(id = label, style = string) → void");
            function101.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_style)*`);
            function101.isTrusted = true;
            function101.supportHtml = false;
            const pattern101 = new RegExp("(label\\.set_style)\\(");
            if (pattern101.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern101);
                if (hoverRange) {
                    return new vscode.Hover(function101, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function102 = new vscode.MarkdownString(``);
            function102.appendCodeblock("label.set_text(id = label, text = string) → void");
            function102.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_text)*`);
            function102.isTrusted = true;
            function102.supportHtml = false;
            const pattern102 = new RegExp("(label\\.set_text)\\(");
            if (pattern102.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern102);
                if (hoverRange) {
                    return new vscode.Hover(function102, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function103 = new vscode.MarkdownString(``);
            function103.appendCodeblock("label.set_textalign(id = label, textalign = string) → void");
            function103.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_textalign)*`);
            function103.isTrusted = true;
            function103.supportHtml = false;
            const pattern103 = new RegExp("(label\\.set_textalign)\\(");
            if (pattern103.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern103);
                if (hoverRange) {
                    return new vscode.Hover(function103, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function104 = new vscode.MarkdownString(``);
            function104.appendCodeblock("label.set_textcolor(id = label, textcolor = color) → void");
            function104.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_textcolor)*`);
            function104.isTrusted = true;
            function104.supportHtml = false;
            const pattern104 = new RegExp("(label\\.set_textcolor)\\(");
            if (pattern104.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern104);
                if (hoverRange) {
                    return new vscode.Hover(function104, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function105 = new vscode.MarkdownString(``);
            function105.appendCodeblock("label.set_tooltip(id = label, tooltip = string) → void");
            function105.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_tooltip)*`);
            function105.isTrusted = true;
            function105.supportHtml = false;
            const pattern105 = new RegExp("(label\\.set_tooltip)\\(");
            if (pattern105.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern105);
                if (hoverRange) {
                    return new vscode.Hover(function105, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function106 = new vscode.MarkdownString(``);
            function106.appendCodeblock("label.set_x(id = label, x = int) → void");
            function106.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_x)*`);
            function106.isTrusted = true;
            function106.supportHtml = false;
            const pattern106 = new RegExp("(label\\.set_x)\\(");
            if (pattern106.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern106);
                if (hoverRange) {
                    return new vscode.Hover(function106, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function107 = new vscode.MarkdownString(``);
            function107.appendCodeblock("label.set_xloc(id = label, x = int, xloc = string) → void");
            function107.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_xloc)*`);
            function107.isTrusted = true;
            function107.supportHtml = false;
            const pattern107 = new RegExp("(label\\.set_xloc)\\(");
            if (pattern107.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern107);
                if (hoverRange) {
                    return new vscode.Hover(function107, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function108 = new vscode.MarkdownString(``);
            function108.appendCodeblock("label.set_xy(id = label, x = int, y = int|float) → void");
            function108.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_xy)*`);
            function108.isTrusted = true;
            function108.supportHtml = false;
            const pattern108 = new RegExp("(label\\.set_xy)\\(");
            if (pattern108.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern108);
                if (hoverRange) {
                    return new vscode.Hover(function108, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function109 = new vscode.MarkdownString(``);
            function109.appendCodeblock("label.set_y(id = label, y = int|float) → void");
            function109.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_y)*`);
            function109.isTrusted = true;
            function109.supportHtml = false;
            const pattern109 = new RegExp("(label\\.set_y)\\(");
            if (pattern109.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern109);
                if (hoverRange) {
                    return new vscode.Hover(function109, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function110 = new vscode.MarkdownString(``);
            function110.appendCodeblock("label.set_yloc(id = label, yloc = string) → void");
            function110.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_yloc)*`);
            function110.isTrusted = true;
            function110.supportHtml = false;
            const pattern110 = new RegExp("(label\\.set_yloc)\\(");
            if (pattern110.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern110);
                if (hoverRange) {
                    return new vscode.Hover(function110, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function111 = new vscode.MarkdownString(``);
            function111.appendCodeblock("line(id = line) → line  ");
            function111.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line)*`);
            function111.isTrusted = true;
            function111.supportHtml = false;
            const pattern111 = new RegExp("(line)\\(");
            if (pattern111.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern111);
                if (hoverRange) {
                    return new vscode.Hover(function111, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function112 = new vscode.MarkdownString(``);
            function112.appendCodeblock("library(title = string, overlay = bool) → void");
            function112.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_library)*`);
            function112.isTrusted = true;
            function112.supportHtml = false;
            const pattern112 = new RegExp("(library)\\(");
            if (pattern112.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern112);
                if (hoverRange) {
                    return new vscode.Hover(function112, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function113 = new vscode.MarkdownString(``);
            function113.appendCodeblock("line.delete(id = line) → void");
            function113.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}delete)*`);
            function113.isTrusted = true;
            function113.supportHtml = false;
            const pattern113 = new RegExp("(line\\.delete)\\(");
            if (pattern113.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern113);
                if (hoverRange) {
                    return new vscode.Hover(function113, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function114 = new vscode.MarkdownString(``);
            function114.appendCodeblock("line.get_price(id = line, x = int) → float");
            function114.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_price)*`);
            function114.isTrusted = true;
            function114.supportHtml = false;
            const pattern114 = new RegExp("(line\\.get_price)\\(");
            if (pattern114.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern114);
                if (hoverRange) {
                    return new vscode.Hover(function114, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function115 = new vscode.MarkdownString(``);
            function115.appendCodeblock("line.get_x1(id = line) → int");
            function115.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_x1)*`);
            function115.isTrusted = true;
            function115.supportHtml = false;
            const pattern115 = new RegExp("(line\\.get_x1)\\(");
            if (pattern115.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern115);
                if (hoverRange) {
                    return new vscode.Hover(function115, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function116 = new vscode.MarkdownString(``);
            function116.appendCodeblock("line.get_x2(id = line) → int");
            function116.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_x2)*`);
            function116.isTrusted = true;
            function116.supportHtml = false;
            const pattern116 = new RegExp("(line\\.get_x2)\\(");
            if (pattern116.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern116);
                if (hoverRange) {
                    return new vscode.Hover(function116, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function117 = new vscode.MarkdownString(``);
            function117.appendCodeblock("line.get_y1(id = line) → float");
            function117.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_y1)*`);
            function117.isTrusted = true;
            function117.supportHtml = false;
            const pattern117 = new RegExp("(line\\.get_y1)\\(");
            if (pattern117.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern117);
                if (hoverRange) {
                    return new vscode.Hover(function117, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function118 = new vscode.MarkdownString(``);
            function118.appendCodeblock("line.get_y2(id = line) → float");
            function118.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_y2)*`);
            function118.isTrusted = true;
            function118.supportHtml = false;
            const pattern118 = new RegExp("(line\\.get_y2)\\(");
            if (pattern118.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern118);
                if (hoverRange) {
                    return new vscode.Hover(function118, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function119 = new vscode.MarkdownString(``);
            function119.appendCodeblock("line.new(x1 = int, y1 = int|float, x2 = int, y2 = int|float, xloc = string, extend = string, color = series color, style = string, width = series int) → series line");
            function119.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}new)*`);
            function119.isTrusted = true;
            function119.supportHtml = false;
            const pattern119 = new RegExp("(line\\.new)\\(");
            if (pattern119.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern119);
                if (hoverRange) {
                    return new vscode.Hover(function119, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function120 = new vscode.MarkdownString(``);
            function120.appendCodeblock("line.set_color(id = line, color = color) → void");
            function120.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_color)*`);
            function120.isTrusted = true;
            function120.supportHtml = false;
            const pattern120 = new RegExp("(line\\.set_color)\\(");
            if (pattern120.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern120);
                if (hoverRange) {
                    return new vscode.Hover(function120, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function121 = new vscode.MarkdownString(``);
            function121.appendCodeblock("line.set_extend(id = line, extend = string) → void");
            function121.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_extend)*`);
            function121.isTrusted = true;
            function121.supportHtml = false;
            const pattern121 = new RegExp("(line\\.set_extend)\\(");
            if (pattern121.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern121);
                if (hoverRange) {
                    return new vscode.Hover(function121, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function122 = new vscode.MarkdownString(``);
            function122.appendCodeblock("line.set_style(id = line, style = string) → void");
            function122.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_style)*`);
            function122.isTrusted = true;
            function122.supportHtml = false;
            const pattern122 = new RegExp("(line\\.set_style)\\(");
            if (pattern122.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern122);
                if (hoverRange) {
                    return new vscode.Hover(function122, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function123 = new vscode.MarkdownString(``);
            function123.appendCodeblock("line.set_width(id = line, width = int) → void");
            function123.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_width)*`);
            function123.isTrusted = true;
            function123.supportHtml = false;
            const pattern123 = new RegExp("(line\\.set_width)\\(");
            if (pattern123.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern123);
                if (hoverRange) {
                    return new vscode.Hover(function123, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function124 = new vscode.MarkdownString(``);
            function124.appendCodeblock("line.set_x1(id = line, x = int) → void");
            function124.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_x1)*`);
            function124.isTrusted = true;
            function124.supportHtml = false;
            const pattern124 = new RegExp("(line\\.set_x1)\\(");
            if (pattern124.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern124);
                if (hoverRange) {
                    return new vscode.Hover(function124, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function125 = new vscode.MarkdownString(``);
            function125.appendCodeblock("line.set_x2(id = line, x = int) → void");
            function125.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_x2)*`);
            function125.isTrusted = true;
            function125.supportHtml = false;
            const pattern125 = new RegExp("(line\\.set_x2)\\(");
            if (pattern125.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern125);
                if (hoverRange) {
                    return new vscode.Hover(function125, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function126 = new vscode.MarkdownString(``);
            function126.appendCodeblock("line.set_y2(id = line, x = int) → void");
            function126.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_y2)*`);
            function126.isTrusted = true;
            function126.supportHtml = false;
            const pattern126 = new RegExp("(line\\.set_y2)\\(");
            if (pattern126.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern126);
                if (hoverRange) {
                    return new vscode.Hover(function126, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function127 = new vscode.MarkdownString(``);
            function127.appendCodeblock("line.set_xloc(id = line, x1 = int, x2 = int, xloc = string) → void");
            function127.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_xloc)*`);
            function127.isTrusted = true;
            function127.supportHtml = false;
            const pattern127 = new RegExp("(line\\.set_xloc)\\(");
            if (pattern127.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern127);
                if (hoverRange) {
                    return new vscode.Hover(function127, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function128 = new vscode.MarkdownString(``);
            function128.appendCodeblock("line.set_xy1(id = line, x = int, y = int|float) → void");
            function128.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_xy1)*`);
            function128.isTrusted = true;
            function128.supportHtml = false;
            const pattern128 = new RegExp("(line\\.set_xy1)\\(");
            if (pattern128.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern128);
                if (hoverRange) {
                    return new vscode.Hover(function128, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function129 = new vscode.MarkdownString(``);
            function129.appendCodeblock("line.set_xy2(id = line, x = int, y = int|float) → void");
            function129.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_xy2)*`);
            function129.isTrusted = true;
            function129.supportHtml = false;
            const pattern129 = new RegExp("(line\\.set_xy2)\\(");
            if (pattern129.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern129);
                if (hoverRange) {
                    return new vscode.Hover(function129, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function130 = new vscode.MarkdownString(``);
            function130.appendCodeblock("line.set_y1(id = line, y = int|float) → void");
            function130.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_y1)*`);
            function130.isTrusted = true;
            function130.supportHtml = false;
            const pattern130 = new RegExp("(line\\.set_y1)\\(");
            if (pattern130.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern130);
                if (hoverRange) {
                    return new vscode.Hover(function130, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function131 = new vscode.MarkdownString(``);
            function131.appendCodeblock("line.set_y2(id = line, y = int|float) → void");
            function131.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_y2)*`);
            function131.isTrusted = true;
            function131.supportHtml = false;
            const pattern131 = new RegExp("(line\\.set_y2)\\(");
            if (pattern131.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern131);
                if (hoverRange) {
                    return new vscode.Hover(function131, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function132 = new vscode.MarkdownString(``);
            function132.appendCodeblock("math.abs(number = int|float) → simple|input|const|series int|float");
            function132.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}abs)*`);
            function132.isTrusted = true;
            function132.supportHtml = false;
            const pattern132 = new RegExp("(math\\.abs)\\(");
            if (pattern132.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern132);
                if (hoverRange) {
                    return new vscode.Hover(function132, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function133 = new vscode.MarkdownString(``);
            function133.appendCodeblock("math.acos(angle = int|float) → simple|input|const|series float");
            function133.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}acos)*`);
            function133.isTrusted = true;
            function133.supportHtml = false;
            const pattern133 = new RegExp("(math\\.acos)\\(");
            if (pattern133.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern133);
                if (hoverRange) {
                    return new vscode.Hover(function133, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function134 = new vscode.MarkdownString(``);
            function134.appendCodeblock("math.asin(angle = int|float) → simple|input|const|series float");
            function134.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}asin)*`);
            function134.isTrusted = true;
            function134.supportHtml = false;
            const pattern134 = new RegExp("(math\\.asin)\\(");
            if (pattern134.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern134);
                if (hoverRange) {
                    return new vscode.Hover(function134, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function135 = new vscode.MarkdownString(``);
            function135.appendCodeblock("math.atan(angle = int|float) → simple|input|const|series float");
            function135.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}atan)*`);
            function135.isTrusted = true;
            function135.supportHtml = false;
            const pattern135 = new RegExp("(math\\.atan)\\(");
            if (pattern135.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern135);
                if (hoverRange) {
                    return new vscode.Hover(function135, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function136 = new vscode.MarkdownString(``);
            function136.appendCodeblock("math.avg(number0 = int|float, number1 = int|float, number2 = int|float, ...) → simple float");
            function136.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}avg)*`);
            function136.isTrusted = true;
            function136.supportHtml = false;
            const pattern136 = new RegExp("(math\\.avg)\\(");
            if (pattern136.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern136);
                if (hoverRange) {
                    return new vscode.Hover(function136, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function137 = new vscode.MarkdownString(``);
            function137.appendCodeblock("math.ceil(number = int|float) → simple|input|const|series float");
            function137.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}ceil)*`);
            function137.isTrusted = true;
            function137.supportHtml = false;
            const pattern137 = new RegExp("(math\\.ceil)\\(");
            if (pattern137.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern137);
                if (hoverRange) {
                    return new vscode.Hover(function137, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function138 = new vscode.MarkdownString(``);
            function138.appendCodeblock("math.cos(angle = int|float) → simple|input|const|series float");
            function138.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}cos)*`);
            function138.isTrusted = true;
            function138.supportHtml = false;
            const pattern138 = new RegExp("(math\\.cos)\\(");
            if (pattern138.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern138);
                if (hoverRange) {
                    return new vscode.Hover(function138, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function139 = new vscode.MarkdownString(``);
            function139.appendCodeblock("math.exp  (number = int|float) → simple|input|const|series float");
            function139.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}exp  )*`);
            function139.isTrusted = true;
            function139.supportHtml = false;
            const pattern139 = new RegExp("(math\\.exp  )\\(");
            if (pattern139.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern139);
                if (hoverRange) {
                    return new vscode.Hover(function139, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function140 = new vscode.MarkdownString(``);
            function140.appendCodeblock("math.floor  (number = int|float) → simple|input|const|series float");
            function140.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}floor  )*`);
            function140.isTrusted = true;
            function140.supportHtml = false;
            const pattern140 = new RegExp("(math\\.floor  )\\(");
            if (pattern140.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern140);
                if (hoverRange) {
                    return new vscode.Hover(function140, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function141 = new vscode.MarkdownString(``);
            function141.appendCodeblock("math.log  (number = int|float) → simple|input|const|series float");
            function141.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}log  )*`);
            function141.isTrusted = true;
            function141.supportHtml = false;
            const pattern141 = new RegExp("(math\\.log  )\\(");
            if (pattern141.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern141);
                if (hoverRange) {
                    return new vscode.Hover(function141, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function142 = new vscode.MarkdownString(``);
            function142.appendCodeblock("math.log10(number = int|float) → simple|input|const|series float");
            function142.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}log10)*`);
            function142.isTrusted = true;
            function142.supportHtml = false;
            const pattern142 = new RegExp("(math\\.log10)\\(");
            if (pattern142.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern142);
                if (hoverRange) {
                    return new vscode.Hover(function142, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function143 = new vscode.MarkdownString(``);
            function143.appendCodeblock("math.max(number0 = int|float, number1 = int|float, number2 = int|float, ...) → simple|input|const|series int|float");
            function143.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}max)*`);
            function143.isTrusted = true;
            function143.supportHtml = false;
            const pattern143 = new RegExp("(math\\.max)\\(");
            if (pattern143.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern143);
                if (hoverRange) {
                    return new vscode.Hover(function143, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function144 = new vscode.MarkdownString(``);
            function144.appendCodeblock("math.min(number0 = int|float, number1 = int|float, number2 = int|float, ...) → simple|input|const|series int|float");
            function144.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}min)*`);
            function144.isTrusted = true;
            function144.supportHtml = false;
            const pattern144 = new RegExp("(math\\.min)\\(");
            if (pattern144.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern144);
                if (hoverRange) {
                    return new vscode.Hover(function144, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function145 = new vscode.MarkdownString(``);
            function145.appendCodeblock("math.pow(base = int|float, exponent = int|float) → series float");
            function145.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}pow)*`);
            function145.isTrusted = true;
            function145.supportHtml = false;
            const pattern145 = new RegExp("(math\\.pow)\\(");
            if (pattern145.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern145);
                if (hoverRange) {
                    return new vscode.Hover(function145, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function146 = new vscode.MarkdownString(``);
            function146.appendCodeblock("math.random(min = int|float, max = int|float, seed = int) → series float");
            function146.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}random)*`);
            function146.isTrusted = true;
            function146.supportHtml = false;
            const pattern146 = new RegExp("(math\\.random)\\(");
            if (pattern146.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern146);
                if (hoverRange) {
                    return new vscode.Hover(function146, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function147 = new vscode.MarkdownString(``);
            function147.appendCodeblock("math.round(number = int|float, precision = int) → simple|input|const|series int|float");
            function147.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}round)*`);
            function147.isTrusted = true;
            function147.supportHtml = false;
            const pattern147 = new RegExp("(math\\.round)\\(");
            if (pattern147.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern147);
                if (hoverRange) {
                    return new vscode.Hover(function147, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function148 = new vscode.MarkdownString(``);
            function148.appendCodeblock("math.round_to_mintick(number = int|float) → float");
            function148.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}round_to_mintick)*`);
            function148.isTrusted = true;
            function148.supportHtml = false;
            const pattern148 = new RegExp("(math\\.round_to_mintick)\\(");
            if (pattern148.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern148);
                if (hoverRange) {
                    return new vscode.Hover(function148, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function149 = new vscode.MarkdownString(``);
            function149.appendCodeblock("math.sign(number = int|float) → simple|input|const|series float");
            function149.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}sign)*`);
            function149.isTrusted = true;
            function149.supportHtml = false;
            const pattern149 = new RegExp("(math\\.sign)\\(");
            if (pattern149.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern149);
                if (hoverRange) {
                    return new vscode.Hover(function149, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function150 = new vscode.MarkdownString(``);
            function150.appendCodeblock("math.sin(angle = int|float)  → simple|input|const|series float");
            function150.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}sin)*`);
            function150.isTrusted = true;
            function150.supportHtml = false;
            const pattern150 = new RegExp("(math\\.sin)\\(");
            if (pattern150.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern150);
                if (hoverRange) {
                    return new vscode.Hover(function150, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function151 = new vscode.MarkdownString(``);
            function151.appendCodeblock("math.sqrt(number = int|float) → simple|input|const|series float");
            function151.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}sqrt)*`);
            function151.isTrusted = true;
            function151.supportHtml = false;
            const pattern151 = new RegExp("(math\\.sqrt)\\(");
            if (pattern151.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern151);
                if (hoverRange) {
                    return new vscode.Hover(function151, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function152 = new vscode.MarkdownString(``);
            function152.appendCodeblock("math.sum(source = int|float, length = int) → series float");
            function152.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}sum)*`);
            function152.isTrusted = true;
            function152.supportHtml = false;
            const pattern152 = new RegExp("(math\\.sum)\\(");
            if (pattern152.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern152);
                if (hoverRange) {
                    return new vscode.Hover(function152, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function153 = new vscode.MarkdownString(``);
            function153.appendCodeblock("math.tan(angle = int|float) → series float");
            function153.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}tan)*`);
            function153.isTrusted = true;
            function153.supportHtml = false;
            const pattern153 = new RegExp("(math\\.tan)\\(");
            if (pattern153.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern153);
                if (hoverRange) {
                    return new vscode.Hover(function153, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function154 = new vscode.MarkdownString(``);
            function154.appendCodeblock("math.todegrees(radians = int|float) → series float");
            function154.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}todegrees)*`);
            function154.isTrusted = true;
            function154.supportHtml = false;
            const pattern154 = new RegExp("(math\\.todegrees)\\(");
            if (pattern154.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern154);
                if (hoverRange) {
                    return new vscode.Hover(function154, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function155 = new vscode.MarkdownString(``);
            function155.appendCodeblock("math.toradians(degrees = int|float) → series float");
            function155.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}toradians)*`);
            function155.isTrusted = true;
            function155.supportHtml = false;
            const pattern155 = new RegExp("(math\\.toradians)\\(");
            if (pattern155.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern155);
                if (hoverRange) {
                    return new vscode.Hover(function155, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function156 = new vscode.MarkdownString(``);
            function156.appendCodeblock("max_bars_back(var = int|float|bool|color|label|line, num = litteral int) → void");
            function156.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_max_bars_back)*`);
            function156.isTrusted = true;
            function156.supportHtml = false;
            const pattern156 = new RegExp("(max_bars_back)\\(");
            if (pattern156.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern156);
                if (hoverRange) {
                    return new vscode.Hover(function156, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function157 = new vscode.MarkdownString(``);
            function157.appendCodeblock("minute(time = int, timezone = string) → series int");
            function157.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_minute)*`);
            function157.isTrusted = true;
            function157.supportHtml = false;
            const pattern157 = new RegExp("(minute)\\(");
            if (pattern157.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern157);
                if (hoverRange) {
                    return new vscode.Hover(function157, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function158 = new vscode.MarkdownString(``);
            function158.appendCodeblock("month(time = int, timezone = string) → series int");
            function158.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_month)*`);
            function158.isTrusted = true;
            function158.supportHtml = false;
            const pattern158 = new RegExp("(month)\\(");
            if (pattern158.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern158);
                if (hoverRange) {
                    return new vscode.Hover(function158, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function159 = new vscode.MarkdownString(``);
            function159.appendCodeblock("na(x) → simple|series bool");
            function159.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_na)*`);
            function159.isTrusted = true;
            function159.supportHtml = false;
            const pattern159 = new RegExp("(na)\\(");
            if (pattern159.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern159);
                if (hoverRange) {
                    return new vscode.Hover(function159, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function160 = new vscode.MarkdownString(``);
            function160.appendCodeblock("nz(source = int|float|bool|color, replacement = int|float|bool|color) → int|float|bool|color");
            function160.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_nz)*`);
            function160.isTrusted = true;
            function160.supportHtml = false;
            const pattern160 = new RegExp("(nz)\\(");
            if (pattern160.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern160);
                if (hoverRange) {
                    return new vscode.Hover(function160, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function161 = new vscode.MarkdownString(``);
            function161.appendCodeblock("plot(series = int|float, title = string, color = color, linewidth = input int, trackprice = bool, histbase = int|float, offset = int, join = bool, editable = bool, show_last = int, display = plot_display) → plot");
            function161.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plot)*`);
            function161.isTrusted = true;
            function161.supportHtml = false;
            const pattern161 = new RegExp("(plot)\\(");
            if (pattern161.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern161);
                if (hoverRange) {
                    return new vscode.Hover(function161, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function162 = new vscode.MarkdownString(``);
            function162.appendCodeblock("plotarrow(series = any, title = string, colorup = color, colordown = color, offset = int, minheight = int, maxheight = int, editable = bool, show_last = int, display = plot_display) → void");
            function162.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotarrow)*`);
            function162.isTrusted = true;
            function162.supportHtml = false;
            const pattern162 = new RegExp("(plotarrow)\\(");
            if (pattern162.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern162);
                if (hoverRange) {
                    return new vscode.Hover(function162, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function163 = new vscode.MarkdownString(``);
            function163.appendCodeblock("plotbar(open = int|float, high = int|float, low = int|float, close = int|float, title = string, color = color, editable = bool, show_last = input int, display = plot_display) → void");
            function163.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotbar)*`);
            function163.isTrusted = true;
            function163.supportHtml = false;
            const pattern163 = new RegExp("(plotbar)\\(");
            if (pattern163.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern163);
                if (hoverRange) {
                    return new vscode.Hover(function163, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function164 = new vscode.MarkdownString(``);
            function164.appendCodeblock("plotcandle(open = int|float, high = int|float, low = int|float, close = int|float, title = string, color = color, wickcolor = color, editable = bool, show_last = input int, bordercolor = color, display = plot_display) → void");
            function164.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotcandle)*`);
            function164.isTrusted = true;
            function164.supportHtml = false;
            const pattern164 = new RegExp("(plotcandle)\\(");
            if (pattern164.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern164);
                if (hoverRange) {
                    return new vscode.Hover(function164, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function165 = new vscode.MarkdownString(``);
            function165.appendCodeblock("plotchar(series = bool, title = string, char = string, location = string, color = color, offset = int, text = string, textcolor = color, editable = bool, size = int, show_last = input int, display = plot_display) → void");
            function165.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotchar)*`);
            function165.isTrusted = true;
            function165.supportHtml = false;
            const pattern165 = new RegExp("(plotchar)\\(");
            if (pattern165.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern165);
                if (hoverRange) {
                    return new vscode.Hover(function165, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function166 = new vscode.MarkdownString(``);
            function166.appendCodeblock("plotshape(series = bool, title = string, style = string, location = string, color = color, offset = int, text = string, textcolor = color, editable = bool, size = int, show_last = input int, display = plot_display) → void");
            function166.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotshape)*`);
            function166.isTrusted = true;
            function166.supportHtml = false;
            const pattern166 = new RegExp("(plotshape)\\(");
            if (pattern166.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern166);
                if (hoverRange) {
                    return new vscode.Hover(function166, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function167 = new vscode.MarkdownString(``);
            function167.appendCodeblock("request.dividends(ticker = string, field = string, gaps = built-in, lookahead = built-in, ignore_invalid_symbol = bool) → series float");
            function167.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}dividends)*`);
            function167.isTrusted = true;
            function167.supportHtml = false;
            const pattern167 = new RegExp("(request\\.dividends)\\(");
            if (pattern167.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern167);
                if (hoverRange) {
                    return new vscode.Hover(function167, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function168 = new vscode.MarkdownString(``);
            function168.appendCodeblock("request.earnings(ticker = string, field = string, gaps = built-in, lookahead = built-in, ignore_invalid_symbol = bool) → series float");
            function168.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}earnings)*`);
            function168.isTrusted = true;
            function168.supportHtml = false;
            const pattern168 = new RegExp("(request\\.earnings)\\(");
            if (pattern168.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern168);
                if (hoverRange) {
                    return new vscode.Hover(function168, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function169 = new vscode.MarkdownString(``);
            function169.appendCodeblock("request.financial(symbol = string, financial_id = string, period = string, gaps = barmerge_gaps, ignore_invalid_symbol = bool, currency = input string) → series float");
            function169.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}financial)*`);
            function169.isTrusted = true;
            function169.supportHtml = false;
            const pattern169 = new RegExp("(request\\.financial)\\(");
            if (pattern169.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern169);
                if (hoverRange) {
                    return new vscode.Hover(function169, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function170 = new vscode.MarkdownString(``);
            function170.appendCodeblock("request.quandl(ticker = string, gaps = built-in, index = int, ignore_invalid_symbol = bool) → series float");
            function170.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}quandl)*`);
            function170.isTrusted = true;
            function170.supportHtml = false;
            const pattern170 = new RegExp("(request\\.quandl)\\(");
            if (pattern170.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern170);
                if (hoverRange) {
                    return new vscode.Hover(function170, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function171 = new vscode.MarkdownString(``);
            function171.appendCodeblock("request.security(symbol = string, timeframe = string, expression = any, gaps = built-in, lookahead = built-in, ignore_invalid_symbol = bool) → series float|int|bool|color");
            function171.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}security)*`);
            function171.isTrusted = true;
            function171.supportHtml = false;
            const pattern171 = new RegExp("(request\\.security)\\(");
            if (pattern171.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern171);
                if (hoverRange) {
                    return new vscode.Hover(function171, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function172 = new vscode.MarkdownString(``);
            function172.appendCodeblock("request.splits(ticker = string, field = string, gaps = const, lookahead = const, ignore_invalid_symbol = bool) → series float");
            function172.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}splits)*`);
            function172.isTrusted = true;
            function172.supportHtml = false;
            const pattern172 = new RegExp("(request\\.splits)\\(");
            if (pattern172.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern172);
                if (hoverRange) {
                    return new vscode.Hover(function172, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function173 = new vscode.MarkdownString(``);
            function173.appendCodeblock("runtime.error(message = string) → void");
            function173.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_runtime{dot}error)*`);
            function173.isTrusted = true;
            function173.supportHtml = false;
            const pattern173 = new RegExp("(runtime\\.error)\\(");
            if (pattern173.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern173);
                if (hoverRange) {
                    return new vscode.Hover(function173, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function174 = new vscode.MarkdownString(``);
            function174.appendCodeblock("second(time = int, timezone = string) → series int");
            function174.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_second)*`);
            function174.isTrusted = true;
            function174.supportHtml = false;
            const pattern174 = new RegExp("(second)\\(");
            if (pattern174.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern174);
                if (hoverRange) {
                    return new vscode.Hover(function174, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function175 = new vscode.MarkdownString(``);
            function175.appendCodeblock("str.format(formatString = string, arg0 = any series, arg1 = any series, ...) → simple string");
            function175.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}format)*`);
            function175.isTrusted = true;
            function175.supportHtml = false;
            const pattern175 = new RegExp("(str\\.format)\\(");
            if (pattern175.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern175);
                if (hoverRange) {
                    return new vscode.Hover(function175, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function176 = new vscode.MarkdownString(``);
            function176.appendCodeblock("str.length(string = string) → const int|simple|series");
            function176.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}length)*`);
            function176.isTrusted = true;
            function176.supportHtml = false;
            const pattern176 = new RegExp("(str\\.length)\\(");
            if (pattern176.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern176);
                if (hoverRange) {
                    return new vscode.Hover(function176, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function177 = new vscode.MarkdownString(``);
            function177.appendCodeblock("str.replace_all(source = string, target = string, replacement = string) → series string");
            function177.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}replace_all)*`);
            function177.isTrusted = true;
            function177.supportHtml = false;
            const pattern177 = new RegExp("(str\\.replace_all)\\(");
            if (pattern177.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern177);
                if (hoverRange) {
                    return new vscode.Hover(function177, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function178 = new vscode.MarkdownString(``);
            function178.appendCodeblock("str.split(string = string, separator = string) → string[]");
            function178.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}split)*`);
            function178.isTrusted = true;
            function178.supportHtml = false;
            const pattern178 = new RegExp("(str\\.split)\\(");
            if (pattern178.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern178);
                if (hoverRange) {
                    return new vscode.Hover(function178, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function179 = new vscode.MarkdownString(``);
            function179.appendCodeblock("str.tonumber(string = string) → series float");
            function179.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}tonumber)*`);
            function179.isTrusted = true;
            function179.supportHtml = false;
            const pattern179 = new RegExp("(str\\.tonumber)\\(");
            if (pattern179.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern179);
                if (hoverRange) {
                    return new vscode.Hover(function179, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function180 = new vscode.MarkdownString(``);
            function180.appendCodeblock("str.tostring(value = any series, format = string) → simple|series string");
            function180.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}tostring)*`);
            function180.isTrusted = true;
            function180.supportHtml = false;
            const pattern180 = new RegExp("(str\\.tostring)\\(");
            if (pattern180.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern180);
                if (hoverRange) {
                    return new vscode.Hover(function180, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function181 = new vscode.MarkdownString(``);
            function181.appendCodeblock("strategy(title, shorttitle, overlay, format, precision, scale, pyramiding, calc_on_order_fills, calc_on_every_tick, max_bars_back, backtest_fill_limits_assumption, default_qty_type, default_qty_value, initial_capital, currency, slippage, commission_type, commission_value, process_orders_on_close, close_entries_rule, margin_long, margin_short, explicit_plot_zorder, max_lines_count, max_labels_count, max_boxes_count) → void");
            function181.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy)*`);
            function181.isTrusted = true;
            function181.supportHtml = false;
            const pattern181 = new RegExp("(strategy)\\(");
            if (pattern181.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern181);
                if (hoverRange) {
                    return new vscode.Hover(function181, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function182 = new vscode.MarkdownString(``);
            function182.appendCodeblock("strategy.cancel(id = string, when = bool) → series void");
            function182.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}cancel)*`);
            function182.isTrusted = true;
            function182.supportHtml = false;
            const pattern182 = new RegExp("(strategy\\.cancel)\\(");
            if (pattern182.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern182);
                if (hoverRange) {
                    return new vscode.Hover(function182, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function183 = new vscode.MarkdownString(``);
            function183.appendCodeblock("strategy.cancel_all(when = bool) → series void");
            function183.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}cancel_all)*`);
            function183.isTrusted = true;
            function183.supportHtml = false;
            const pattern183 = new RegExp("(strategy\\.cancel_all)\\(");
            if (pattern183.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern183);
                if (hoverRange) {
                    return new vscode.Hover(function183, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function184 = new vscode.MarkdownString(``);
            function184.appendCodeblock("strategy.close(id = string, when = bool, comment = string, qty = int|float, qty_percent = int|float, alert_message = string) → void");
            function184.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}close)*`);
            function184.isTrusted = true;
            function184.supportHtml = false;
            const pattern184 = new RegExp("(strategy\\.close)\\(");
            if (pattern184.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern184);
                if (hoverRange) {
                    return new vscode.Hover(function184, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function185 = new vscode.MarkdownString(``);
            function185.appendCodeblock("strategy.close_all(when = bool, comment = string, alert_message = string) → void");
            function185.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}close_all)*`);
            function185.isTrusted = true;
            function185.supportHtml = false;
            const pattern185 = new RegExp("(strategy\\.close_all)\\(");
            if (pattern185.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern185);
                if (hoverRange) {
                    return new vscode.Hover(function185, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function186 = new vscode.MarkdownString(``);
            function186.appendCodeblock("strategy.closedtrades.commission(trade_num = int) → series float");
            function186.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function186.isTrusted = true;
            function186.supportHtml = false;
            const pattern186 = new RegExp("(strategy\\.closedtrades\\.commission)\\(");
            if (pattern186.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern186);
                if (hoverRange) {
                    return new vscode.Hover(function186, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function187 = new vscode.MarkdownString(``);
            function187.appendCodeblock("strategy.closedtrades.entry_bar_index(trade_num = int) → series int");
            function187.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function187.isTrusted = true;
            function187.supportHtml = false;
            const pattern187 = new RegExp("(strategy\\.closedtrades\\.entry_bar_index)\\(");
            if (pattern187.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern187);
                if (hoverRange) {
                    return new vscode.Hover(function187, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function188 = new vscode.MarkdownString(``);
            function188.appendCodeblock("strategy.closedtrades.entry_price(trade_num = int) → series int");
            function188.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function188.isTrusted = true;
            function188.supportHtml = false;
            const pattern188 = new RegExp("(strategy\\.closedtrades\\.entry_price)\\(");
            if (pattern188.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern188);
                if (hoverRange) {
                    return new vscode.Hover(function188, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function189 = new vscode.MarkdownString(``);
            function189.appendCodeblock("strategy.closedtrades.entry_time(trade_num = int) → series int");
            function189.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function189.isTrusted = true;
            function189.supportHtml = false;
            const pattern189 = new RegExp("(strategy\\.closedtrades\\.entry_time)\\(");
            if (pattern189.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern189);
                if (hoverRange) {
                    return new vscode.Hover(function189, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function190 = new vscode.MarkdownString(``);
            function190.appendCodeblock("strategy.closedtrades.exit_bar_index(trade_num = int) → series int");
            function190.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function190.isTrusted = true;
            function190.supportHtml = false;
            const pattern190 = new RegExp("(strategy\\.closedtrades\\.exit_bar_index)\\(");
            if (pattern190.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern190);
                if (hoverRange) {
                    return new vscode.Hover(function190, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function191 = new vscode.MarkdownString(``);
            function191.appendCodeblock("strategy.closedtrades.exit_price(trade_num = int) → series float");
            function191.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function191.isTrusted = true;
            function191.supportHtml = false;
            const pattern191 = new RegExp("(strategy\\.closedtrades\\.exit_price)\\(");
            if (pattern191.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern191);
                if (hoverRange) {
                    return new vscode.Hover(function191, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function192 = new vscode.MarkdownString(``);
            function192.appendCodeblock("strategy.closedtrades.exit_time(trade_num = int) → series int");
            function192.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function192.isTrusted = true;
            function192.supportHtml = false;
            const pattern192 = new RegExp("(strategy\\.closedtrades\\.exit_time)\\(");
            if (pattern192.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern192);
                if (hoverRange) {
                    return new vscode.Hover(function192, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function193 = new vscode.MarkdownString(``);
            function193.appendCodeblock("strategy.closedtrades.max_drawdown(trade_num = int) → series float");
            function193.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function193.isTrusted = true;
            function193.supportHtml = false;
            const pattern193 = new RegExp("(strategy\\.closedtrades\\.max_drawdown)\\(");
            if (pattern193.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern193);
                if (hoverRange) {
                    return new vscode.Hover(function193, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function194 = new vscode.MarkdownString(``);
            function194.appendCodeblock("strategy.closedtrades.max_runup(trade_num = int) → series float");
            function194.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function194.isTrusted = true;
            function194.supportHtml = false;
            const pattern194 = new RegExp("(strategy\\.closedtrades\\.max_runup)\\(");
            if (pattern194.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern194);
                if (hoverRange) {
                    return new vscode.Hover(function194, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function195 = new vscode.MarkdownString(``);
            function195.appendCodeblock("strategy.closedtrades.profit(trade_num = int) → series float");
            function195.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function195.isTrusted = true;
            function195.supportHtml = false;
            const pattern195 = new RegExp("(strategy\\.closedtrades\\.profit)\\(");
            if (pattern195.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern195);
                if (hoverRange) {
                    return new vscode.Hover(function195, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function196 = new vscode.MarkdownString(``);
            function196.appendCodeblock("strategy.closedtrades.size(trade_num = int) → series float");
            function196.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
            function196.isTrusted = true;
            function196.supportHtml = false;
            const pattern196 = new RegExp("(strategy\\.closedtrades\\.size)\\(");
            if (pattern196.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern196);
                if (hoverRange) {
                    return new vscode.Hover(function196, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function197 = new vscode.MarkdownString(``);
            function197.appendCodeblock("strategy.convert_to_account(value) → series float");
            function197.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}convert_to_accou)*`);
            function197.isTrusted = true;
            function197.supportHtml = false;
            const pattern197 = new RegExp("(strategy\\.convert_to_account)\\(");
            if (pattern197.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern197);
                if (hoverRange) {
                    return new vscode.Hover(function197, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function198 = new vscode.MarkdownString(``);
            function198.appendCodeblock("strategy.convert_to_symbol(value = int|float) → series float");
            function198.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}convert_to_symbo)*`);
            function198.isTrusted = true;
            function198.supportHtml = false;
            const pattern198 = new RegExp("(strategy\\.convert_to_symbol)\\(");
            if (pattern198.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern198);
                if (hoverRange) {
                    return new vscode.Hover(function198, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function199 = new vscode.MarkdownString(``);
            function199.appendCodeblock("strategy.entry(id = string, direction = const built-in, qty = int|float, limit = int|float, stop = int|float, oca_name = string, oca_type = string, comment = string, when = bool, alert_message = string) → void");
            function199.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}entry)*`);
            function199.isTrusted = true;
            function199.supportHtml = false;
            const pattern199 = new RegExp("(strategy\\.entry)\\(");
            if (pattern199.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern199);
                if (hoverRange) {
                    return new vscode.Hover(function199, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function200 = new vscode.MarkdownString(``);
            function200.appendCodeblock("strategy.exit(id = string, from_entry = string, qty = int|float, qty_percent = int|float, profit = int|float, limit = int|float, loss = int|float, stop = int|float, trail_price = int|float, trail_points = int|float, trail_offset = int|float, oca_name = string, comment = string, when = bool, alert_message = string) → void");
            function200.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}exit)*`);
            function200.isTrusted = true;
            function200.supportHtml = false;
            const pattern200 = new RegExp("(strategy\\.exit)\\(");
            if (pattern200.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern200);
                if (hoverRange) {
                    return new vscode.Hover(function200, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function201 = new vscode.MarkdownString(``);
            function201.appendCodeblock("strategy.opentrades.commission(trade_num = int) → float");
            function201.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}c)*`);
            function201.isTrusted = true;
            function201.supportHtml = false;
            const pattern201 = new RegExp("(strategy\\.opentrades\\.commission)\\(");
            if (pattern201.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern201);
                if (hoverRange) {
                    return new vscode.Hover(function201, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function202 = new vscode.MarkdownString(``);
            function202.appendCodeblock("strategy.opentrades.entry_bar_index(trade_num = int) → float");
            function202.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}e)*`);
            function202.isTrusted = true;
            function202.supportHtml = false;
            const pattern202 = new RegExp("(strategy\\.opentrades\\.entry_bar_index)\\(");
            if (pattern202.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern202);
                if (hoverRange) {
                    return new vscode.Hover(function202, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function203 = new vscode.MarkdownString(``);
            function203.appendCodeblock("strategy.opentrades.entry_price(trade_num = int) → float");
            function203.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}e)*`);
            function203.isTrusted = true;
            function203.supportHtml = false;
            const pattern203 = new RegExp("(strategy\\.opentrades\\.entry_price)\\(");
            if (pattern203.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern203);
                if (hoverRange) {
                    return new vscode.Hover(function203, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function204 = new vscode.MarkdownString(``);
            function204.appendCodeblock("strategy.opentrades.entry_time(trade_num = int) → float");
            function204.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}e)*`);
            function204.isTrusted = true;
            function204.supportHtml = false;
            const pattern204 = new RegExp("(strategy\\.opentrades\\.entry_time)\\(");
            if (pattern204.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern204);
                if (hoverRange) {
                    return new vscode.Hover(function204, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function205 = new vscode.MarkdownString(``);
            function205.appendCodeblock("strategy.opentrades.max_drawdown(trade_num = int) → float");
            function205.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}m)*`);
            function205.isTrusted = true;
            function205.supportHtml = false;
            const pattern205 = new RegExp("(strategy\\.opentrades\\.max_drawdown)\\(");
            if (pattern205.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern205);
                if (hoverRange) {
                    return new vscode.Hover(function205, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function206 = new vscode.MarkdownString(``);
            function206.appendCodeblock("strategy.opentrades.max_runup(trade_num = int) → float");
            function206.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}m)*`);
            function206.isTrusted = true;
            function206.supportHtml = false;
            const pattern206 = new RegExp("(strategy\\.opentrades\\.max_runup)\\(");
            if (pattern206.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern206);
                if (hoverRange) {
                    return new vscode.Hover(function206, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function207 = new vscode.MarkdownString(``);
            function207.appendCodeblock("strategy.opentrades.profit(trade_num = int) → float");
            function207.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}p)*`);
            function207.isTrusted = true;
            function207.supportHtml = false;
            const pattern207 = new RegExp("(strategy\\.opentrades\\.profit)\\(");
            if (pattern207.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern207);
                if (hoverRange) {
                    return new vscode.Hover(function207, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function208 = new vscode.MarkdownString(``);
            function208.appendCodeblock("strategy.opentrades.size(trade_num = int) → float");
            function208.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}s)*`);
            function208.isTrusted = true;
            function208.supportHtml = false;
            const pattern208 = new RegExp("(strategy\\.opentrades\\.size)\\(");
            if (pattern208.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern208);
                if (hoverRange) {
                    return new vscode.Hover(function208, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function209 = new vscode.MarkdownString(``);
            function209.appendCodeblock("strategy.order(id = string, direction = const built-in, qty = int|float, limit = int|float, stop = int|float, oca_name = string, oca_type = string, comment = string, when = bool, alert_message = string) → void");
            function209.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}order)*`);
            function209.isTrusted = true;
            function209.supportHtml = false;
            const pattern209 = new RegExp("(strategy\\.order)\\(");
            if (pattern209.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern209);
                if (hoverRange) {
                    return new vscode.Hover(function209, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function210 = new vscode.MarkdownString(``);
            function210.appendCodeblock("strategy.risk.allow_entry_in(value = string) → void");
            function210.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}allow_e)*`);
            function210.isTrusted = true;
            function210.supportHtml = false;
            const pattern210 = new RegExp("(strategy\\.risk\\.allow_entry_in)\\(");
            if (pattern210.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern210);
                if (hoverRange) {
                    return new vscode.Hover(function210, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function211 = new vscode.MarkdownString(``);
            function211.appendCodeblock("strategy.risk.max_cons_loss_days(count = int, alert_message = string) → series void");
            function211.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_con)*`);
            function211.isTrusted = true;
            function211.supportHtml = false;
            const pattern211 = new RegExp("(strategy\\.risk\\.max_cons_loss_days)\\(");
            if (pattern211.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern211);
                if (hoverRange) {
                    return new vscode.Hover(function211, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function212 = new vscode.MarkdownString(``);
            function212.appendCodeblock("strategy.risk.max_drawdown(count = int, type = string, alert_message = string) → series void");
            function212.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_dra)*`);
            function212.isTrusted = true;
            function212.supportHtml = false;
            const pattern212 = new RegExp("(strategy\\.risk\\.max_drawdown)\\(");
            if (pattern212.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern212);
                if (hoverRange) {
                    return new vscode.Hover(function212, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function213 = new vscode.MarkdownString(``);
            function213.appendCodeblock("strategy.risk.max_intraday_loss(count = int, alert_message = string) → series void");
            function213.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_int)*`);
            function213.isTrusted = true;
            function213.supportHtml = false;
            const pattern213 = new RegExp("(strategy\\.risk\\.max_intraday_loss)\\(");
            if (pattern213.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern213);
                if (hoverRange) {
                    return new vscode.Hover(function213, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function214 = new vscode.MarkdownString(``);
            function214.appendCodeblock("strategy.risk.max_intraday_loss(value = int|float, type = string, alert_message = string) → series void");
            function214.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_int)*`);
            function214.isTrusted = true;
            function214.supportHtml = false;
            const pattern214 = new RegExp("(strategy\\.risk\\.max_intraday_loss)\\(");
            if (pattern214.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern214);
                if (hoverRange) {
                    return new vscode.Hover(function214, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function215 = new vscode.MarkdownString(``);
            function215.appendCodeblock("strategy.risk.max_position_size(contracts = int|float) → void");
            function215.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_pos)*`);
            function215.isTrusted = true;
            function215.supportHtml = false;
            const pattern215 = new RegExp("(strategy\\.risk\\.max_position_size)\\(");
            if (pattern215.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern215);
                if (hoverRange) {
                    return new vscode.Hover(function215, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function216 = new vscode.MarkdownString(``);
            function216.appendCodeblock("string(x) → const|input|simple|series string");
            function216.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_string)*`);
            function216.isTrusted = true;
            function216.supportHtml = false;
            const pattern216 = new RegExp("(string)\\(");
            if (pattern216.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern216);
                if (hoverRange) {
                    return new vscode.Hover(function216, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function217 = new vscode.MarkdownString(``);
            function217.appendCodeblock("ta.highest(series = int|float, length = int, offset  = int|float, sigma = int|float, floor = bool) → series float");
            function217.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}highest)*`);
            function217.isTrusted = true;
            function217.supportHtml = false;
            const pattern217 = new RegExp("(ta\\.highest)\\(");
            if (pattern217.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern217);
                if (hoverRange) {
                    return new vscode.Hover(function217, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function218 = new vscode.MarkdownString(``);
            function218.appendCodeblock("ta.atr(length = int) → series float");
            function218.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}atr)*`);
            function218.isTrusted = true;
            function218.supportHtml = false;
            const pattern218 = new RegExp("(ta\\.atr)\\(");
            if (pattern218.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern218);
                if (hoverRange) {
                    return new vscode.Hover(function218, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function219 = new vscode.MarkdownString(``);
            function219.appendCodeblock("ta.barssince(condition = bool) → series int");
            function219.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}barssince)*`);
            function219.isTrusted = true;
            function219.supportHtml = false;
            const pattern219 = new RegExp("(ta\\.barssince)\\(");
            if (pattern219.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern219);
                if (hoverRange) {
                    return new vscode.Hover(function219, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function220 = new vscode.MarkdownString(``);
            function220.appendCodeblock("ta.bb(series = int|float, length = int, mult = int|float) → [series float, series float, series float]");
            function220.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}bb)*`);
            function220.isTrusted = true;
            function220.supportHtml = false;
            const pattern220 = new RegExp("(ta\\.bb)\\(");
            if (pattern220.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern220);
                if (hoverRange) {
                    return new vscode.Hover(function220, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function221 = new vscode.MarkdownString(``);
            function221.appendCodeblock("ta.bbw(series = int|float, length = int, mult = int|float) → series float");
            function221.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}bbw)*`);
            function221.isTrusted = true;
            function221.supportHtml = false;
            const pattern221 = new RegExp("(ta\\.bbw)\\(");
            if (pattern221.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern221);
                if (hoverRange) {
                    return new vscode.Hover(function221, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function222 = new vscode.MarkdownString(``);
            function222.appendCodeblock("ta.cci(source = int|float, length = int) → series float");
            function222.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cci)*`);
            function222.isTrusted = true;
            function222.supportHtml = false;
            const pattern222 = new RegExp("(ta\\.cci)\\(");
            if (pattern222.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern222);
                if (hoverRange) {
                    return new vscode.Hover(function222, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function223 = new vscode.MarkdownString(``);
            function223.appendCodeblock("ta.change(source = int|float, length = int) → series float");
            function223.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}change)*`);
            function223.isTrusted = true;
            function223.supportHtml = false;
            const pattern223 = new RegExp("(ta\\.change)\\(");
            if (pattern223.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern223);
                if (hoverRange) {
                    return new vscode.Hover(function223, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function224 = new vscode.MarkdownString(``);
            function224.appendCodeblock("ta.cmo(source = int|float, length = int) → series float");
            function224.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cmo)*`);
            function224.isTrusted = true;
            function224.supportHtml = false;
            const pattern224 = new RegExp("(ta\\.cmo)\\(");
            if (pattern224.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern224);
                if (hoverRange) {
                    return new vscode.Hover(function224, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function225 = new vscode.MarkdownString(``);
            function225.appendCodeblock("ta.cog(source = int|float, length = int) → series float");
            function225.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cog)*`);
            function225.isTrusted = true;
            function225.supportHtml = false;
            const pattern225 = new RegExp("(ta\\.cog)\\(");
            if (pattern225.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern225);
                if (hoverRange) {
                    return new vscode.Hover(function225, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function226 = new vscode.MarkdownString(``);
            function226.appendCodeblock("ta.correlation(source1 = int|float, source2 = int|float, length = int) → series float");
            function226.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}correlation)*`);
            function226.isTrusted = true;
            function226.supportHtml = false;
            const pattern226 = new RegExp("(ta\\.correlation)\\(");
            if (pattern226.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern226);
                if (hoverRange) {
                    return new vscode.Hover(function226, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function227 = new vscode.MarkdownString(``);
            function227.appendCodeblock("ta.cross(source1 = int|float, source2 = int|float) → series bool");
            function227.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cross)*`);
            function227.isTrusted = true;
            function227.supportHtml = false;
            const pattern227 = new RegExp("(ta\\.cross)\\(");
            if (pattern227.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern227);
                if (hoverRange) {
                    return new vscode.Hover(function227, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function228 = new vscode.MarkdownString(``);
            function228.appendCodeblock("ta.crossover(source1 = int|float, source2 = int|float) → series bool");
            function228.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}crossover)*`);
            function228.isTrusted = true;
            function228.supportHtml = false;
            const pattern228 = new RegExp("(ta\\.crossover)\\(");
            if (pattern228.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern228);
                if (hoverRange) {
                    return new vscode.Hover(function228, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function229 = new vscode.MarkdownString(``);
            function229.appendCodeblock("ta.crossunder(source1 = int|float, source2 = int|float) → series bool");
            function229.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}crossunder)*`);
            function229.isTrusted = true;
            function229.supportHtml = false;
            const pattern229 = new RegExp("(ta\\.crossunder)\\(");
            if (pattern229.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern229);
                if (hoverRange) {
                    return new vscode.Hover(function229, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function230 = new vscode.MarkdownString(``);
            function230.appendCodeblock("ta.cum(source = int|float) → series float");
            function230.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cum)*`);
            function230.isTrusted = true;
            function230.supportHtml = false;
            const pattern230 = new RegExp("(ta\\.cum)\\(");
            if (pattern230.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern230);
                if (hoverRange) {
                    return new vscode.Hover(function230, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function231 = new vscode.MarkdownString(``);
            function231.appendCodeblock("ta.dev(source = int|float, length = int) → series float");
            function231.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}dev)*`);
            function231.isTrusted = true;
            function231.supportHtml = false;
            const pattern231 = new RegExp("(ta\\.dev)\\(");
            if (pattern231.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern231);
                if (hoverRange) {
                    return new vscode.Hover(function231, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function232 = new vscode.MarkdownString(``);
            function232.appendCodeblock("ta.dmi(diLength = int, adxSmoothing = int) → [series float, series float, series float]");
            function232.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}dmi)*`);
            function232.isTrusted = true;
            function232.supportHtml = false;
            const pattern232 = new RegExp("(ta\\.dmi)\\(");
            if (pattern232.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern232);
                if (hoverRange) {
                    return new vscode.Hover(function232, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function233 = new vscode.MarkdownString(``);
            function233.appendCodeblock("ta.ema(source = int|float, length = int) → series float");
            function233.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}ema)*`);
            function233.isTrusted = true;
            function233.supportHtml = false;
            const pattern233 = new RegExp("(ta\\.ema)\\(");
            if (pattern233.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern233);
                if (hoverRange) {
                    return new vscode.Hover(function233, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function234 = new vscode.MarkdownString(``);
            function234.appendCodeblock("ta.falling(source = int|float, length = int) → series bool");
            function234.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}falling)*`);
            function234.isTrusted = true;
            function234.supportHtml = false;
            const pattern234 = new RegExp("(ta\\.falling)\\(");
            if (pattern234.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern234);
                if (hoverRange) {
                    return new vscode.Hover(function234, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function235 = new vscode.MarkdownString(``);
            function235.appendCodeblock("ta.highest(source = int|float, length = int) → series float");
            function235.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}highest)*`);
            function235.isTrusted = true;
            function235.supportHtml = false;
            const pattern235 = new RegExp("(ta\\.highest)\\(");
            if (pattern235.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern235);
                if (hoverRange) {
                    return new vscode.Hover(function235, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function236 = new vscode.MarkdownString(``);
            function236.appendCodeblock("ta.highestbars(source = int|float, length = int) → series int");
            function236.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}highestbars)*`);
            function236.isTrusted = true;
            function236.supportHtml = false;
            const pattern236 = new RegExp("(ta\\.highestbars)\\(");
            if (pattern236.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern236);
                if (hoverRange) {
                    return new vscode.Hover(function236, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function237 = new vscode.MarkdownString(``);
            function237.appendCodeblock("ta.hma(source = int|float, length = int) → series float");
            function237.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}hma)*`);
            function237.isTrusted = true;
            function237.supportHtml = false;
            const pattern237 = new RegExp("(ta\\.hma)\\(");
            if (pattern237.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern237);
                if (hoverRange) {
                    return new vscode.Hover(function237, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function238 = new vscode.MarkdownString(``);
            function238.appendCodeblock("ta.kc(series = int|float, length = int, mult = int|float, useTrueRange = bool) → [series float, series float, series float]");
            function238.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}kc)*`);
            function238.isTrusted = true;
            function238.supportHtml = false;
            const pattern238 = new RegExp("(ta\\.kc)\\(");
            if (pattern238.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern238);
                if (hoverRange) {
                    return new vscode.Hover(function238, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function239 = new vscode.MarkdownString(``);
            function239.appendCodeblock("ta.kcw(series = int|float, length = int, mult = int|float, useTrueRange = bool) → series float");
            function239.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}kcw)*`);
            function239.isTrusted = true;
            function239.supportHtml = false;
            const pattern239 = new RegExp("(ta\\.kcw)\\(");
            if (pattern239.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern239);
                if (hoverRange) {
                    return new vscode.Hover(function239, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function240 = new vscode.MarkdownString(``);
            function240.appendCodeblock("ta.linreg(source = int|float, length = int, offset = int) → series float");
            function240.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}linreg)*`);
            function240.isTrusted = true;
            function240.supportHtml = false;
            const pattern240 = new RegExp("(ta\\.linreg)\\(");
            if (pattern240.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern240);
                if (hoverRange) {
                    return new vscode.Hover(function240, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function241 = new vscode.MarkdownString(``);
            function241.appendCodeblock("ta.lowest(source = int|float, length = int) → series float");
            function241.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}lowest)*`);
            function241.isTrusted = true;
            function241.supportHtml = false;
            const pattern241 = new RegExp("(ta\\.lowest)\\(");
            if (pattern241.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern241);
                if (hoverRange) {
                    return new vscode.Hover(function241, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function242 = new vscode.MarkdownString(``);
            function242.appendCodeblock("ta.lowestbars(source = int|float, length = int) → series int");
            function242.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}lowestbars)*`);
            function242.isTrusted = true;
            function242.supportHtml = false;
            const pattern242 = new RegExp("(ta\\.lowestbars)\\(");
            if (pattern242.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern242);
                if (hoverRange) {
                    return new vscode.Hover(function242, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function243 = new vscode.MarkdownString(``);
            function243.appendCodeblock("ta.macd(source = int|float, fastlen = int, slowlen = int, siglen = int) → [series float, series float, series float]");
            function243.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}macd)*`);
            function243.isTrusted = true;
            function243.supportHtml = false;
            const pattern243 = new RegExp("(ta\\.macd)\\(");
            if (pattern243.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern243);
                if (hoverRange) {
                    return new vscode.Hover(function243, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function244 = new vscode.MarkdownString(``);
            function244.appendCodeblock("ta.median(source = int|float, length = int) → series int|float");
            function244.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}median)*`);
            function244.isTrusted = true;
            function244.supportHtml = false;
            const pattern244 = new RegExp("(ta\\.median)\\(");
            if (pattern244.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern244);
                if (hoverRange) {
                    return new vscode.Hover(function244, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function245 = new vscode.MarkdownString(``);
            function245.appendCodeblock("ta.mfi(source = int|float, length = int) → series float");
            function245.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}mfi)*`);
            function245.isTrusted = true;
            function245.supportHtml = false;
            const pattern245 = new RegExp("(ta\\.mfi)\\(");
            if (pattern245.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern245);
                if (hoverRange) {
                    return new vscode.Hover(function245, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function246 = new vscode.MarkdownString(``);
            function246.appendCodeblock("ta.mode(source = int|float, length = int) → series int|float");
            function246.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}mode)*`);
            function246.isTrusted = true;
            function246.supportHtml = false;
            const pattern246 = new RegExp("(ta\\.mode)\\(");
            if (pattern246.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern246);
                if (hoverRange) {
                    return new vscode.Hover(function246, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function247 = new vscode.MarkdownString(``);
            function247.appendCodeblock("ta.mom(source = int|float, length = int) → series float");
            function247.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}mom)*`);
            function247.isTrusted = true;
            function247.supportHtml = false;
            const pattern247 = new RegExp("(ta\\.mom)\\(");
            if (pattern247.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern247);
                if (hoverRange) {
                    return new vscode.Hover(function247, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function248 = new vscode.MarkdownString(``);
            function248.appendCodeblock("ta.percentile_linear_interpolation(source = int|float, length = int, percentage = int|float) → series float");
            function248.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}percentile_linear_inte)*`);
            function248.isTrusted = true;
            function248.supportHtml = false;
            const pattern248 = new RegExp("(ta\\.percentile_linear_interpolation)\\(");
            if (pattern248.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern248);
                if (hoverRange) {
                    return new vscode.Hover(function248, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function249 = new vscode.MarkdownString(``);
            function249.appendCodeblock("ta.percentile_nearest_rank(source = int|float, length = int, percentage = int|float) → series float");
            function249.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}percentile_nearest_ran)*`);
            function249.isTrusted = true;
            function249.supportHtml = false;
            const pattern249 = new RegExp("(ta\\.percentile_nearest_rank)\\(");
            if (pattern249.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern249);
                if (hoverRange) {
                    return new vscode.Hover(function249, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function250 = new vscode.MarkdownString(``);
            function250.appendCodeblock("ta.percentrank(source = int|float, length = int) → series float");
            function250.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}percentrank)*`);
            function250.isTrusted = true;
            function250.supportHtml = false;
            const pattern250 = new RegExp("(ta\\.percentrank)\\(");
            if (pattern250.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern250);
                if (hoverRange) {
                    return new vscode.Hover(function250, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function251 = new vscode.MarkdownString(``);
            function251.appendCodeblock("ta.pivothigh(source = int|float, leftbars = int|float, rightbars = int|float) → series float");
            function251.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}pivothigh)*`);
            function251.isTrusted = true;
            function251.supportHtml = false;
            const pattern251 = new RegExp("(ta\\.pivothigh)\\(");
            if (pattern251.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern251);
                if (hoverRange) {
                    return new vscode.Hover(function251, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function252 = new vscode.MarkdownString(``);
            function252.appendCodeblock("ta.pivotlow(source = int|float, leftbars = int|float, rightbars = int|float) → series float");
            function252.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}pivotlow)*`);
            function252.isTrusted = true;
            function252.supportHtml = false;
            const pattern252 = new RegExp("(ta\\.pivotlow)\\(");
            if (pattern252.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern252);
                if (hoverRange) {
                    return new vscode.Hover(function252, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function253 = new vscode.MarkdownString(``);
            function253.appendCodeblock("ta.range(source = int|float, length = int) → series int|float");
            function253.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}range)*`);
            function253.isTrusted = true;
            function253.supportHtml = false;
            const pattern253 = new RegExp("(ta\\.range)\\(");
            if (pattern253.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern253);
                if (hoverRange) {
                    return new vscode.Hover(function253, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function254 = new vscode.MarkdownString(``);
            function254.appendCodeblock("ta.rising(source = int|float, length = int) → series bool");
            function254.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}rising)*`);
            function254.isTrusted = true;
            function254.supportHtml = false;
            const pattern254 = new RegExp("(ta\\.rising)\\(");
            if (pattern254.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern254);
                if (hoverRange) {
                    return new vscode.Hover(function254, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function255 = new vscode.MarkdownString(``);
            function255.appendCodeblock("ta.rma(source = int|float, length = int) → series float");
            function255.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}rma)*`);
            function255.isTrusted = true;
            function255.supportHtml = false;
            const pattern255 = new RegExp("(ta\\.rma)\\(");
            if (pattern255.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern255);
                if (hoverRange) {
                    return new vscode.Hover(function255, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function256 = new vscode.MarkdownString(``);
            function256.appendCodeblock("ta.roc(source = int|float, length = int) → series float");
            function256.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}roc)*`);
            function256.isTrusted = true;
            function256.supportHtml = false;
            const pattern256 = new RegExp("(ta\\.roc)\\(");
            if (pattern256.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern256);
                if (hoverRange) {
                    return new vscode.Hover(function256, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function257 = new vscode.MarkdownString(``);
            function257.appendCodeblock("ta.rsi(source = int|float, length = int) → series float");
            function257.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}rsi)*`);
            function257.isTrusted = true;
            function257.supportHtml = false;
            const pattern257 = new RegExp("(ta\\.rsi)\\(");
            if (pattern257.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern257);
                if (hoverRange) {
                    return new vscode.Hover(function257, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function258 = new vscode.MarkdownString(``);
            function258.appendCodeblock("ta.sar(start = int|float, inc = int|float, max = int|float) → series float");
            function258.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}sar)*`);
            function258.isTrusted = true;
            function258.supportHtml = false;
            const pattern258 = new RegExp("(ta\\.sar)\\(");
            if (pattern258.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern258);
                if (hoverRange) {
                    return new vscode.Hover(function258, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function259 = new vscode.MarkdownString(``);
            function259.appendCodeblock("ta.sma(source = int|float, length = int) → series float");
            function259.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}sma)*`);
            function259.isTrusted = true;
            function259.supportHtml = false;
            const pattern259 = new RegExp("(ta\\.sma)\\(");
            if (pattern259.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern259);
                if (hoverRange) {
                    return new vscode.Hover(function259, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function260 = new vscode.MarkdownString(``);
            function260.appendCodeblock("ta.stdev(source = int|float, length = int) → series float");
            function260.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}stdev)*`);
            function260.isTrusted = true;
            function260.supportHtml = false;
            const pattern260 = new RegExp("(ta\\.stdev)\\(");
            if (pattern260.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern260);
                if (hoverRange) {
                    return new vscode.Hover(function260, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function261 = new vscode.MarkdownString(``);
            function261.appendCodeblock("ta.stoch(source = int|float, high = int|float, low = int|float, length = int) → series float");
            function261.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}stoch)*`);
            function261.isTrusted = true;
            function261.supportHtml = false;
            const pattern261 = new RegExp("(ta\\.stoch)\\(");
            if (pattern261.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern261);
                if (hoverRange) {
                    return new vscode.Hover(function261, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function262 = new vscode.MarkdownString(``);
            function262.appendCodeblock("ta.supertrend(factor = int|float, atrPeriod = int) → [series float, series float]");
            function262.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}supertrend)*`);
            function262.isTrusted = true;
            function262.supportHtml = false;
            const pattern262 = new RegExp("(ta\\.supertrend)\\(");
            if (pattern262.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern262);
                if (hoverRange) {
                    return new vscode.Hover(function262, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function263 = new vscode.MarkdownString(``);
            function263.appendCodeblock("ta.swma(source = int|float) → series float");
            function263.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}swma)*`);
            function263.isTrusted = true;
            function263.supportHtml = false;
            const pattern263 = new RegExp("(ta\\.swma)\\(");
            if (pattern263.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern263);
                if (hoverRange) {
                    return new vscode.Hover(function263, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function264 = new vscode.MarkdownString(``);
            function264.appendCodeblock("ta.tr(handle_na = bool) → series float");
            function264.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}tr)*`);
            function264.isTrusted = true;
            function264.supportHtml = false;
            const pattern264 = new RegExp("(ta\\.tr)\\(");
            if (pattern264.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern264);
                if (hoverRange) {
                    return new vscode.Hover(function264, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function265 = new vscode.MarkdownString(``);
            function265.appendCodeblock("ta.tsi(source = int|float, short_length = int, long_length = int) → series float");
            function265.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}tsi)*`);
            function265.isTrusted = true;
            function265.supportHtml = false;
            const pattern265 = new RegExp("(ta\\.tsi)\\(");
            if (pattern265.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern265);
                if (hoverRange) {
                    return new vscode.Hover(function265, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function266 = new vscode.MarkdownString(``);
            function266.appendCodeblock("ta.valuewhen(condition = bool, source = int|float, occurrence = int) → series int|float");
            function266.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}valuewhen)*`);
            function266.isTrusted = true;
            function266.supportHtml = false;
            const pattern266 = new RegExp("(ta\\.valuewhen)\\(");
            if (pattern266.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern266);
                if (hoverRange) {
                    return new vscode.Hover(function266, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function267 = new vscode.MarkdownString(``);
            function267.appendCodeblock("ta.variance(source = int|float, length = int) → series float");
            function267.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}variance)*`);
            function267.isTrusted = true;
            function267.supportHtml = false;
            const pattern267 = new RegExp("(ta\\.variance)\\(");
            if (pattern267.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern267);
                if (hoverRange) {
                    return new vscode.Hover(function267, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function268 = new vscode.MarkdownString(``);
            function268.appendCodeblock("ta.vwap(source = int|float) → series float");
            function268.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}vwap)*`);
            function268.isTrusted = true;
            function268.supportHtml = false;
            const pattern268 = new RegExp("(ta\\.vwap)\\(");
            if (pattern268.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern268);
                if (hoverRange) {
                    return new vscode.Hover(function268, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function269 = new vscode.MarkdownString(``);
            function269.appendCodeblock("ta.vwma(source = int|float, length = int) → series float");
            function269.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}vwma)*`);
            function269.isTrusted = true;
            function269.supportHtml = false;
            const pattern269 = new RegExp("(ta\\.vwma)\\(");
            if (pattern269.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern269);
                if (hoverRange) {
                    return new vscode.Hover(function269, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function270 = new vscode.MarkdownString(``);
            function270.appendCodeblock("ta.wma(source = int|float, length = int) → series float");
            function270.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}wma)*`);
            function270.isTrusted = true;
            function270.supportHtml = false;
            const pattern270 = new RegExp("(ta\\.wma)\\(");
            if (pattern270.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern270);
                if (hoverRange) {
                    return new vscode.Hover(function270, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function271 = new vscode.MarkdownString(``);
            function271.appendCodeblock("ta.wpr(length = int) → series float");
            function271.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}wpr)*`);
            function271.isTrusted = true;
            function271.supportHtml = false;
            const pattern271 = new RegExp("(ta\\.wpr)\\(");
            if (pattern271.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern271);
                if (hoverRange) {
                    return new vscode.Hover(function271, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function272 = new vscode.MarkdownString(``);
            function272.appendCodeblock("table(x = table) → series table");
            function272.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table)*`);
            function272.isTrusted = true;
            function272.supportHtml = false;
            const pattern272 = new RegExp("(table)\\(");
            if (pattern272.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern272);
                if (hoverRange) {
                    return new vscode.Hover(function272, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function273 = new vscode.MarkdownString(``);
            function273.appendCodeblock("table.cell(table_id = table, column = int, row = int, text = string, width = int|float, height = int|float, text_color = color, text_halign = string, text_valign = string, text_size = string, bgcolor = color) → void");
            function273.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell)*`);
            function273.isTrusted = true;
            function273.supportHtml = false;
            const pattern273 = new RegExp("(table\\.cell)\\(");
            if (pattern273.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern273);
                if (hoverRange) {
                    return new vscode.Hover(function273, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function274 = new vscode.MarkdownString(``);
            function274.appendCodeblock("table.cell_set_bgcolor(table_id = table, column = int, row = int, bgcolor = color) → void");
            function274.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_bgcolor)*`);
            function274.isTrusted = true;
            function274.supportHtml = false;
            const pattern274 = new RegExp("(table\\.cell_set_bgcolor)\\(");
            if (pattern274.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern274);
                if (hoverRange) {
                    return new vscode.Hover(function274, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function275 = new vscode.MarkdownString(``);
            function275.appendCodeblock("table.cell_set_height(table_id = table, column = int, row = int, height = int|float) → void");
            function275.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_height)*`);
            function275.isTrusted = true;
            function275.supportHtml = false;
            const pattern275 = new RegExp("(table\\.cell_set_height)\\(");
            if (pattern275.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern275);
                if (hoverRange) {
                    return new vscode.Hover(function275, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function276 = new vscode.MarkdownString(``);
            function276.appendCodeblock("table.cell_set_text(table_id = table, column = int, row = int, text = string) → void");
            function276.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text)*`);
            function276.isTrusted = true;
            function276.supportHtml = false;
            const pattern276 = new RegExp("(table\\.cell_set_text)\\(");
            if (pattern276.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern276);
                if (hoverRange) {
                    return new vscode.Hover(function276, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function277 = new vscode.MarkdownString(``);
            function277.appendCodeblock("table.cell_set_text_color(table_id = table, column = int, row = int, text_color = color) → void");
            function277.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text_color)*`);
            function277.isTrusted = true;
            function277.supportHtml = false;
            const pattern277 = new RegExp("(table\\.cell_set_text_color)\\(");
            if (pattern277.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern277);
                if (hoverRange) {
                    return new vscode.Hover(function277, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function278 = new vscode.MarkdownString(``);
            function278.appendCodeblock("table.cell_set_text_halign(table_id = table, column = int, row = int, text_halign = string) → void");
            function278.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text_halig)*`);
            function278.isTrusted = true;
            function278.supportHtml = false;
            const pattern278 = new RegExp("(table\\.cell_set_text_halign)\\(");
            if (pattern278.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern278);
                if (hoverRange) {
                    return new vscode.Hover(function278, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function279 = new vscode.MarkdownString(``);
            function279.appendCodeblock("table.cell_set_text_size(table_id = table, column = int, row = int, text_size = string) → void");
            function279.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text_size)*`);
            function279.isTrusted = true;
            function279.supportHtml = false;
            const pattern279 = new RegExp("(table\\.cell_set_text_size)\\(");
            if (pattern279.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern279);
                if (hoverRange) {
                    return new vscode.Hover(function279, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function280 = new vscode.MarkdownString(``);
            function280.appendCodeblock("table.cell_set_text_valign(table_id = table, column = int, row = int, text_valign = string) → void");
            function280.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text_valig)*`);
            function280.isTrusted = true;
            function280.supportHtml = false;
            const pattern280 = new RegExp("(table\\.cell_set_text_valign)\\(");
            if (pattern280.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern280);
                if (hoverRange) {
                    return new vscode.Hover(function280, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function281 = new vscode.MarkdownString(``);
            function281.appendCodeblock("table.cell_set_width(table_id = table, column = int, row = int, width = int|float) → void");
            function281.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_width)*`);
            function281.isTrusted = true;
            function281.supportHtml = false;
            const pattern281 = new RegExp("(table\\.cell_set_width)\\(");
            if (pattern281.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern281);
                if (hoverRange) {
                    return new vscode.Hover(function281, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function282 = new vscode.MarkdownString(``);
            function282.appendCodeblock("table.clear(table_id = table, start_column = int, start_row = int, end_column = int, end_row = int) → void");
            function282.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}clear)*`);
            function282.isTrusted = true;
            function282.supportHtml = false;
            const pattern282 = new RegExp("(table\\.clear)\\(");
            if (pattern282.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern282);
                if (hoverRange) {
                    return new vscode.Hover(function282, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function283 = new vscode.MarkdownString(``);
            function283.appendCodeblock("table.delete(table_id = table) → void");
            function283.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}delete)*`);
            function283.isTrusted = true;
            function283.supportHtml = false;
            const pattern283 = new RegExp("(table\\.delete)\\(");
            if (pattern283.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern283);
                if (hoverRange) {
                    return new vscode.Hover(function283, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function284 = new vscode.MarkdownString(``);
            function284.appendCodeblock("table.new(position = int, columns = int, rows = int, bgcolor = color, frame_color = color, frame_width = int, border_color = color, border_width = int) → series table");
            function284.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}new)*`);
            function284.isTrusted = true;
            function284.supportHtml = false;
            const pattern284 = new RegExp("(table\\.new)\\(");
            if (pattern284.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern284);
                if (hoverRange) {
                    return new vscode.Hover(function284, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function285 = new vscode.MarkdownString(``);
            function285.appendCodeblock("table.set_bgcolor(table_id = table, bgcolor = color) → void");
            function285.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_bgcolor)*`);
            function285.isTrusted = true;
            function285.supportHtml = false;
            const pattern285 = new RegExp("(table\\.set_bgcolor)\\(");
            if (pattern285.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern285);
                if (hoverRange) {
                    return new vscode.Hover(function285, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function286 = new vscode.MarkdownString(``);
            function286.appendCodeblock("table.set_border_color(table_id = table, border_color = color) → void");
            function286.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_border_color)*`);
            function286.isTrusted = true;
            function286.supportHtml = false;
            const pattern286 = new RegExp("(table\\.set_border_color)\\(");
            if (pattern286.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern286);
                if (hoverRange) {
                    return new vscode.Hover(function286, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function287 = new vscode.MarkdownString(``);
            function287.appendCodeblock("table.set_border_width(table_id = table, border_width = int) → void");
            function287.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_border_width)*`);
            function287.isTrusted = true;
            function287.supportHtml = false;
            const pattern287 = new RegExp("(table\\.set_border_width)\\(");
            if (pattern287.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern287);
                if (hoverRange) {
                    return new vscode.Hover(function287, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function288 = new vscode.MarkdownString(``);
            function288.appendCodeblock("table.set_frame_color(table_id = table, frame_color = color) → void");
            function288.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_frame_color)*`);
            function288.isTrusted = true;
            function288.supportHtml = false;
            const pattern288 = new RegExp("(table\\.set_frame_color)\\(");
            if (pattern288.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern288);
                if (hoverRange) {
                    return new vscode.Hover(function288, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function289 = new vscode.MarkdownString(``);
            function289.appendCodeblock("table.set_frame_width(table_id = table, frame_width = int) → void");
            function289.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_frame_width)*`);
            function289.isTrusted = true;
            function289.supportHtml = false;
            const pattern289 = new RegExp("(table\\.set_frame_width)\\(");
            if (pattern289.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern289);
                if (hoverRange) {
                    return new vscode.Hover(function289, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function290 = new vscode.MarkdownString(``);
            function290.appendCodeblock("table.set_position(table_id = table, position = string) → void");
            function290.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_position)*`);
            function290.isTrusted = true;
            function290.supportHtml = false;
            const pattern290 = new RegExp("(table\\.set_position)\\(");
            if (pattern290.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern290);
                if (hoverRange) {
                    return new vscode.Hover(function290, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function291 = new vscode.MarkdownString(``);
            function291.appendCodeblock("ticker.heikinashi(symbol = simple string) → simple string");
            function291.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}heikinashi)*`);
            function291.isTrusted = true;
            function291.supportHtml = false;
            const pattern291 = new RegExp("(ticker\\.heikinashi)\\(");
            if (pattern291.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern291);
                if (hoverRange) {
                    return new vscode.Hover(function291, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function292 = new vscode.MarkdownString(``);
            function292.appendCodeblock("ticker.kagi(symbol = string, reversal = int|float) → simple string");
            function292.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}kagi)*`);
            function292.isTrusted = true;
            function292.supportHtml = false;
            const pattern292 = new RegExp("(ticker\\.kagi)\\(");
            if (pattern292.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern292);
                if (hoverRange) {
                    return new vscode.Hover(function292, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function293 = new vscode.MarkdownString(``);
            function293.appendCodeblock("ticker.linebreak(symbol = string, number_of_lines = int) → simple string");
            function293.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}linebreak)*`);
            function293.isTrusted = true;
            function293.supportHtml = false;
            const pattern293 = new RegExp("(ticker\\.linebreak)\\(");
            if (pattern293.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern293);
                if (hoverRange) {
                    return new vscode.Hover(function293, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function294 = new vscode.MarkdownString(``);
            function294.appendCodeblock("ticker.modify(tickerid = string, session = string, adjustment = string) → simple string");
            function294.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}modify)*`);
            function294.isTrusted = true;
            function294.supportHtml = false;
            const pattern294 = new RegExp("(ticker\\.modify)\\(");
            if (pattern294.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern294);
                if (hoverRange) {
                    return new vscode.Hover(function294, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function295 = new vscode.MarkdownString(``);
            function295.appendCodeblock("ticker.new(prefix = string, ticker = string, session = string, adjustment = string) → simple string");
            function295.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}new)*`);
            function295.isTrusted = true;
            function295.supportHtml = false;
            const pattern295 = new RegExp("(ticker\\.new)\\(");
            if (pattern295.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern295);
                if (hoverRange) {
                    return new vscode.Hover(function295, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function296 = new vscode.MarkdownString(``);
            function296.appendCodeblock("ticker.pointfigure(symbol = string, source = string, style = string, param = int|float, reversal = int) → simple string");
            function296.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}pointfigure)*`);
            function296.isTrusted = true;
            function296.supportHtml = false;
            const pattern296 = new RegExp("(ticker\\.pointfigure)\\(");
            if (pattern296.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern296);
                if (hoverRange) {
                    return new vscode.Hover(function296, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function297 = new vscode.MarkdownString(``);
            function297.appendCodeblock("ticker.renko(symbol = string, style = string, param = int|float) → simple string");
            function297.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}renko)*`);
            function297.isTrusted = true;
            function297.supportHtml = false;
            const pattern297 = new RegExp("(ticker\\.renko)\\(");
            if (pattern297.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern297);
                if (hoverRange) {
                    return new vscode.Hover(function297, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function298 = new vscode.MarkdownString(``);
            function298.appendCodeblock("time(timeframe = string, timezone = series string) → series int");
            function298.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_time)*`);
            function298.isTrusted = true;
            function298.supportHtml = false;
            const pattern298 = new RegExp("(time)\\(");
            if (pattern298.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern298);
                if (hoverRange) {
                    return new vscode.Hover(function298, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function299 = new vscode.MarkdownString(``);
            function299.appendCodeblock("time_close(timeframe = string, timezone = series string) → series int");
            function299.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_time_close)*`);
            function299.isTrusted = true;
            function299.supportHtml = false;
            const pattern299 = new RegExp("(time_close)\\(");
            if (pattern299.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern299);
                if (hoverRange) {
                    return new vscode.Hover(function299, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function300 = new vscode.MarkdownString(``);
            function300.appendCodeblock("timestamp(timezone = string, year = int, month = int, day = int, hour = int, minute = int, second = int) → simple int");
            function300.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_timestamp)*`);
            function300.isTrusted = true;
            function300.supportHtml = false;
            const pattern300 = new RegExp("(timestamp)\\(");
            if (pattern300.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern300);
                if (hoverRange) {
                    return new vscode.Hover(function300, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function301 = new vscode.MarkdownString(``);
            function301.appendCodeblock("weekofyear(time = int, timezone = series string) → series int");
            function301.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_weekofyear)*`);
            function301.isTrusted = true;
            function301.supportHtml = false;
            const pattern301 = new RegExp("(weekofyear)\\(");
            if (pattern301.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern301);
                if (hoverRange) {
                    return new vscode.Hover(function301, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function302 = new vscode.MarkdownString(``);
            function302.appendCodeblock("year(time = int, timezone = series string) → series int");
            function302.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_year)*`);
            function302.isTrusted = true;
            function302.supportHtml = false;
            const pattern302 = new RegExp("(year)\\(");
            if (pattern302.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern302);
                if (hoverRange) {
                    return new vscode.Hover(function302, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            /* Orphans
             */
            const function46 = new vscode.MarkdownString(``);
            function46.appendCodeblock("bool(x = int) → simple|input|const|series int");
            function46.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_bool)*`);
            function46.isTrusted = true;
            function46.supportHtml = false;
            const pattern46 = new RegExp("(bool)\\(");
            if (pattern46.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern46);
                if (hoverRange) {
                    return new vscode.Hover(function46, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function77 = new vscode.MarkdownString(``);
            function77.appendCodeblock("float(x = any) → simple|input|const|series float");
            function77.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_float)*`);
            function77.isTrusted = true;
            function77.supportHtml = false;
            const pattern77 = new RegExp("(float)\\(");
            if (pattern77.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern77);
                if (hoverRange) {
                    return new vscode.Hover(function77, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
            const function92 = new vscode.MarkdownString(``);
            function92.appendCodeblock("int(x = int) → simple|input|const|series int");
            function92.appendMarkdown(`
	
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_int)*`);
            function92.isTrusted = true;
            function92.supportHtml = false;
            const pattern92 = new RegExp("(int)\\(");
            if (pattern92.test(hoverLineText)) {
                hoverRange = document.getWordRangeAtPosition(position, pattern92);
                if (hoverRange) {
                    return new vscode.Hover(function92, new vscode.Range(position, position));
                }
                else {
                    return null;
                }
            }
        }
    });
    context.subscriptions.push(pinehovers);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=functions.js.map