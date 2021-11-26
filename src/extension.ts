import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Pine Extension Installed');


	let pineHover00 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange00;
			const hoverLineText00 = document.lineAt(position.line).text;


			const comment1 = new vscode.MarkdownString(``);
			comment1.appendCodeblock("// comment");
			comment1.isTrusted = true;
			comment1.supportHtml = true;

			const commentPattern1 = new RegExp("//.*");
			if (commentPattern1.test(hoverLineText00)) {
				hoverRange00 = document.getWordRangeAtPosition(position, commentPattern1);
				if (hoverRange00) {
					return new vscode.Hover(comment1, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});


	let pineHover02 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange02;
			const hoverLineText02 = document.lineAt(position.line).text;


			const string2 = new vscode.MarkdownString(``);
			string2.appendCodeblock(`"string"`);
			string2.isTrusted = true;
			string2.supportHtml = true;

			const stringPattern2 = new RegExp("(\").*(\")");
			if (stringPattern2.test(hoverLineText02)) {
				hoverRange02 = document.getWordRangeAtPosition(position, stringPattern2);
				if (hoverRange02) {
					return new vscode.Hover(string2, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover02);




	context.subscriptions.push(pineHover00);

	let pineHover01 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange01;
			const hoverLineText01 = document.lineAt(position.line).text;

			const string1 = new vscode.MarkdownString(``);
			string1.appendCodeblock("'string'");
			string1.isTrusted = true;
			string1.supportHtml = true;

			const stringPattern1 = new RegExp("(\').*(\')");
			if (stringPattern1.test(hoverLineText01)) {
				hoverRange01 = document.getWordRangeAtPosition(position, stringPattern1);
				if (hoverRange01) {
					return new vscode.Hover(string1, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover01);



	let pineHover1 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange1;
			const hoverLineText1 = document.lineAt(position.line).text;

			const function1 = new vscode.MarkdownString(``);
			function1.appendCodeblock("alert(message = string, freq = input string) -> void");
			function1.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_alert)*`);
			function1.isTrusted = true;
			function1.supportHtml = true;

			const pattern1 = new RegExp("(alert)\\(");
			if (pattern1.test(hoverLineText1)) {
				hoverRange1 = document.getWordRangeAtPosition(position, pattern1);
				if (hoverRange1) {
					return new vscode.Hover(function1, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover1);


	let pineHover2 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange2;
			const hoverLineText2 = document.lineAt(position.line).text;

			const function2 = new vscode.MarkdownString(``);
			function2.appendCodeblock("alertcondition(condition = bool, title = const string, message = const string) → int|float");
			function2.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_alertcondition)*`);
			function2.isTrusted = true;
			function2.supportHtml = true;

			const pattern2 = new RegExp("(alertcondition)\\(");
			if (pattern2.test(hoverLineText2)) {
				hoverRange2 = document.getWordRangeAtPosition(position, pattern2);
				if (hoverRange2) {
					return new vscode.Hover(function2, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover2);


	let pineHover3 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange3;
			const hoverLineText3 = document.lineAt(position.line).text;

			const function3 = new vscode.MarkdownString(``);
			function3.appendCodeblock("array.avg(id = int[]|float[]) → int|float");
			function3.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}avg)*`);
			function3.isTrusted = true;
			function3.supportHtml = true;

			const pattern3 = new RegExp("(array\\.avg)\\(");
			if (pattern3.test(hoverLineText3)) {
				hoverRange3 = document.getWordRangeAtPosition(position, pattern3);
				if (hoverRange3) {
					return new vscode.Hover(function3, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover3);


	let pineHover4 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange4;
			const hoverLineText4 = document.lineAt(position.line).text;

			const function4 = new vscode.MarkdownString(``);
			function4.appendCodeblock("array.clear(id = any array type) → void");
			function4.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}clear)*`);
			function4.isTrusted = true;
			function4.supportHtml = true;

			const pattern4 = new RegExp("(array\\.clear)\\(");
			if (pattern4.test(hoverLineText4)) {
				hoverRange4 = document.getWordRangeAtPosition(position, pattern4);
				if (hoverRange4) {
					return new vscode.Hover(function4, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover4);


	let pineHover5 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange5;
			const hoverLineText5 = document.lineAt(position.line).text;

			const function5 = new vscode.MarkdownString(``);
			function5.appendCodeblock("array.concat(id1 = any array type, id2 = any array type) → id1");
			function5.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}concat)*`);
			function5.isTrusted = true;
			function5.supportHtml = true;

			const pattern5 = new RegExp("(array\\.concat)\\(");
			if (pattern5.test(hoverLineText5)) {
				hoverRange5 = document.getWordRangeAtPosition(position, pattern5);
				if (hoverRange5) {
					return new vscode.Hover(function5, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover5);


	let pineHover6 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange6;
			const hoverLineText6 = document.lineAt(position.line).text;

			const function6 = new vscode.MarkdownString(``);
			function6.appendCodeblock("array.copy(id = any array type) → array");
			function6.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}copy)*`);
			function6.isTrusted = true;
			function6.supportHtml = true;

			const pattern6 = new RegExp("(array\\.copy)\\(");
			if (pattern6.test(hoverLineText6)) {
				hoverRange6 = document.getWordRangeAtPosition(position, pattern6);
				if (hoverRange6) {
					return new vscode.Hover(function6, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover6);


	let pineHover7 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange7;
			const hoverLineText7 = document.lineAt(position.line).text;

			const function7 = new vscode.MarkdownString(``);
			function7.appendCodeblock("array.covariance(id1 = int[]|float[], id2 = int[]|float[]) → float");
			function7.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}covariance)*`);
			function7.isTrusted = true;
			function7.supportHtml = true;

			const pattern7 = new RegExp("(array\\.covariance)\\(");
			if (pattern7.test(hoverLineText7)) {
				hoverRange7 = document.getWordRangeAtPosition(position, pattern7);
				if (hoverRange7) {
					return new vscode.Hover(function7, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover7);


	let pineHover8 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange8;
			const hoverLineText8 = document.lineAt(position.line).text;

			const function8 = new vscode.MarkdownString(``);
			function8.appendCodeblock("array.fill(id = any array type, value = series <type of the arrays elements>, index_from = int, index_to = int) → bool[]");
			function8.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}fill)*`);
			function8.isTrusted = true;
			function8.supportHtml = true;

			const pattern8 = new RegExp("(array\\.fill)\\(");
			if (pattern8.test(hoverLineText8)) {
				hoverRange8 = document.getWordRangeAtPosition(position, pattern8);
				if (hoverRange8) {
					return new vscode.Hover(function8, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover8);


	let pineHover9 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange9;
			const hoverLineText9 = document.lineAt(position.line).text;

			const function9 = new vscode.MarkdownString(``);
			function9.appendCodeblock("array.from(arg0 = series of any argument array type, ...) → int|float|bool|color|string|label|line|box|table)[]");
			function9.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}from)*`);
			function9.isTrusted = true;
			function9.supportHtml = true;

			const pattern9 = new RegExp("(array\\.from)\\(");
			if (pattern9.test(hoverLineText9)) {
				hoverRange9 = document.getWordRangeAtPosition(position, pattern9);
				if (hoverRange9) {
					return new vscode.Hover(function9, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover9);


	let pineHover10 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange10;
			const hoverLineText10 = document.lineAt(position.line).text;

			const function10 = new vscode.MarkdownString(``);
			function10.appendCodeblock("array.get(id = any array type, index = int) → series <type of the arrays elements>");
			function10.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}get)*`);
			function10.isTrusted = true;
			function10.supportHtml = true;

			const pattern10 = new RegExp("(array\\.get)\\(");
			if (pattern10.test(hoverLineText10)) {
				hoverRange10 = document.getWordRangeAtPosition(position, pattern10);
				if (hoverRange10) {
					return new vscode.Hover(function10, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover10);


	let pineHover11 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange11;
			const hoverLineText11 = document.lineAt(position.line).text;

			const function11 = new vscode.MarkdownString(``);
			function11.appendCodeblock("array.includes(id = any array type, value = series <type of the arrays elements>) → series bool");
			function11.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}includes)*`);
			function11.isTrusted = true;
			function11.supportHtml = true;

			const pattern11 = new RegExp("(array\\.includes)\\(");
			if (pattern11.test(hoverLineText11)) {
				hoverRange11 = document.getWordRangeAtPosition(position, pattern11);
				if (hoverRange11) {
					return new vscode.Hover(function11, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover11);


	let pineHover12 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange12;
			const hoverLineText12 = document.lineAt(position.line).text;

			const function12 = new vscode.MarkdownString(``);
			function12.appendCodeblock("array.indexof(id = any array type, value = series <type of the arrays elements>) → int");
			function12.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}indexof)*`);
			function12.isTrusted = true;
			function12.supportHtml = true;

			const pattern12 = new RegExp("(array\\.indexof)\\(");
			if (pattern12.test(hoverLineText12)) {
				hoverRange12 = document.getWordRangeAtPosition(position, pattern12);
				if (hoverRange12) {
					return new vscode.Hover(function12, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover12);


	let pineHover13 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange13;
			const hoverLineText13 = document.lineAt(position.line).text;

			const function13 = new vscode.MarkdownString(``);
			function13.appendCodeblock("array.insert(id = any array type, index = int, value = series <type of the arrays elements>) → void");
			function13.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}insert)*`);
			function13.isTrusted = true;
			function13.supportHtml = true;

			const pattern13 = new RegExp("(array\\.insert)\\(");
			if (pattern13.test(hoverLineText13)) {
				hoverRange13 = document.getWordRangeAtPosition(position, pattern13);
				if (hoverRange13) {
					return new vscode.Hover(function13, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover13);


	let pineHover14 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange14;
			const hoverLineText14 = document.lineAt(position.line).text;

			const function14 = new vscode.MarkdownString(``);
			function14.appendCodeblock("array.join(id = int[]|float[]|string[], separator = series string) → series string");
			function14.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}join)*`);
			function14.isTrusted = true;
			function14.supportHtml = true;

			const pattern14 = new RegExp("(array\\.join)\\(");
			if (pattern14.test(hoverLineText14)) {
				hoverRange14 = document.getWordRangeAtPosition(position, pattern14);
				if (hoverRange14) {
					return new vscode.Hover(function14, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover14);


	let pineHover15 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange15;
			const hoverLineText15 = document.lineAt(position.line).text;

			const function15 = new vscode.MarkdownString(``);
			function15.appendCodeblock("array.lastindexof(id = any array type, value = series <type of the arrays elements>) → int");
			function15.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}lastindexof)*`);
			function15.isTrusted = true;
			function15.supportHtml = true;

			const pattern15 = new RegExp("(array\\.lastindexof)\\(");
			if (pattern15.test(hoverLineText15)) {
				hoverRange15 = document.getWordRangeAtPosition(position, pattern15);
				if (hoverRange15) {
					return new vscode.Hover(function15, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover15);


	let pineHover16 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange16;
			const hoverLineText16 = document.lineAt(position.line).text;

			const function16 = new vscode.MarkdownString(``);
			function16.appendCodeblock("array.max(id = int[]|float[]) → series int|float");
			function16.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}max)*`);
			function16.isTrusted = true;
			function16.supportHtml = true;

			const pattern16 = new RegExp("(array\\.max)\\(");
			if (pattern16.test(hoverLineText16)) {
				hoverRange16 = document.getWordRangeAtPosition(position, pattern16);
				if (hoverRange16) {
					return new vscode.Hover(function16, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover16);


	let pineHover17 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange17;
			const hoverLineText17 = document.lineAt(position.line).text;

			const function17 = new vscode.MarkdownString(``);
			function17.appendCodeblock("array.median(id = int[]|float[]) → series int|float");
			function17.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}median)*`);
			function17.isTrusted = true;
			function17.supportHtml = true;

			const pattern17 = new RegExp("(array\\.median)\\(");
			if (pattern17.test(hoverLineText17)) {
				hoverRange17 = document.getWordRangeAtPosition(position, pattern17);
				if (hoverRange17) {
					return new vscode.Hover(function17, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover17);


	let pineHover18 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange18;
			const hoverLineText18 = document.lineAt(position.line).text;

			const function18 = new vscode.MarkdownString(``);
			function18.appendCodeblock("array.min(id = int[]|float[]) → series int|float");
			function18.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}min)*`);
			function18.isTrusted = true;
			function18.supportHtml = true;

			const pattern18 = new RegExp("(array\\.min)\\(");
			if (pattern18.test(hoverLineText18)) {
				hoverRange18 = document.getWordRangeAtPosition(position, pattern18);
				if (hoverRange18) {
					return new vscode.Hover(function18, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover18);


	let pineHover19 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange19;
			const hoverLineText19 = document.lineAt(position.line).text;

			const function19 = new vscode.MarkdownString(``);
			function19.appendCodeblock("array.mode(id = int[]|float[]) → series int|float");
			function19.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}mode)*`);
			function19.isTrusted = true;
			function19.supportHtml = true;

			const pattern19 = new RegExp("(array\\.mode)\\(");
			if (pattern19.test(hoverLineText19)) {
				hoverRange19 = document.getWordRangeAtPosition(position, pattern19);
				if (hoverRange19) {
					return new vscode.Hover(function19, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover19);


	let pineHover20 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange20;
			const hoverLineText20 = document.lineAt(position.line).text;

			const function20 = new vscode.MarkdownString(``);
			function20.appendCodeblock("array.new_bool(size = bool, initial_value = series bool) → bool[]");
			function20.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_bool)*`);
			function20.isTrusted = true;
			function20.supportHtml = true;

			const pattern20 = new RegExp("(array\\.new_bool)\\(");
			if (pattern20.test(hoverLineText20)) {
				hoverRange20 = document.getWordRangeAtPosition(position, pattern20);
				if (hoverRange20) {
					return new vscode.Hover(function20, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover20);


	let pineHover21 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange21;
			const hoverLineText21 = document.lineAt(position.line).text;

			const function21 = new vscode.MarkdownString(``);
			function21.appendCodeblock("array.new_box(size = box, initial_value = series box) → box[]");
			function21.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_box)*`);
			function21.isTrusted = true;
			function21.supportHtml = true;

			const pattern21 = new RegExp("(array\\.new_box)\\(");
			if (pattern21.test(hoverLineText21)) {
				hoverRange21 = document.getWordRangeAtPosition(position, pattern21);
				if (hoverRange21) {
					return new vscode.Hover(function21, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover21);


	let pineHover22 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange22;
			const hoverLineText22 = document.lineAt(position.line).text;

			const function22 = new vscode.MarkdownString(``);
			function22.appendCodeblock("array.new_color(size = color, initial_value = series color) → color[]");
			function22.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_color)*`);
			function22.isTrusted = true;
			function22.supportHtml = true;

			const pattern22 = new RegExp("(array\\.new_color)\\(");
			if (pattern22.test(hoverLineText22)) {
				hoverRange22 = document.getWordRangeAtPosition(position, pattern22);
				if (hoverRange22) {
					return new vscode.Hover(function22, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover22);


	let pineHover23 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange23;
			const hoverLineText23 = document.lineAt(position.line).text;

			const function23 = new vscode.MarkdownString(``);
			function23.appendCodeblock("array.new_float(size = float, initial_value = series float) → float[]");
			function23.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_float)*`);
			function23.isTrusted = true;
			function23.supportHtml = true;

			const pattern23 = new RegExp("(array\\.new_float)\\(");
			if (pattern23.test(hoverLineText23)) {
				hoverRange23 = document.getWordRangeAtPosition(position, pattern23);
				if (hoverRange23) {
					return new vscode.Hover(function23, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover23);


	let pineHover24 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange24;
			const hoverLineText24 = document.lineAt(position.line).text;

			const function24 = new vscode.MarkdownString(``);
			function24.appendCodeblock("array.new_int(size = int, initial_value = series int) → int[]");
			function24.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_int)*`);
			function24.isTrusted = true;
			function24.supportHtml = true;

			const pattern24 = new RegExp("(array\\.new_int)\\(");
			if (pattern24.test(hoverLineText24)) {
				hoverRange24 = document.getWordRangeAtPosition(position, pattern24);
				if (hoverRange24) {
					return new vscode.Hover(function24, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover24);


	let pineHover25 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange25;
			const hoverLineText25 = document.lineAt(position.line).text;

			const function25 = new vscode.MarkdownString(``);
			function25.appendCodeblock("array.new_label(size = int, initial_value = series label) → label[]");
			function25.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_label)*`);
			function25.isTrusted = true;
			function25.supportHtml = true;

			const pattern25 = new RegExp("(array\\.new_label)\\(");
			if (pattern25.test(hoverLineText25)) {
				hoverRange25 = document.getWordRangeAtPosition(position, pattern25);
				if (hoverRange25) {
					return new vscode.Hover(function25, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover25);


	let pineHover26 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange26;
			const hoverLineText26 = document.lineAt(position.line).text;

			const function26 = new vscode.MarkdownString(``);
			function26.appendCodeblock("array.new_line(size = int, initial_value = series line) → line[]");
			function26.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_line)*`);
			function26.isTrusted = true;
			function26.supportHtml = true;

			const pattern26 = new RegExp("(array\\.new_line)\\(");
			if (pattern26.test(hoverLineText26)) {
				hoverRange26 = document.getWordRangeAtPosition(position, pattern26);
				if (hoverRange26) {
					return new vscode.Hover(function26, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover26);


	let pineHover27 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange27;
			const hoverLineText27 = document.lineAt(position.line).text;

			const function27 = new vscode.MarkdownString(``);
			function27.appendCodeblock("array.new_string(size = int, initial_value = series string) → string[]");
			function27.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_string)*`);
			function27.isTrusted = true;
			function27.supportHtml = true;

			const pattern27 = new RegExp("(array\\.new_string)\\(");
			if (pattern27.test(hoverLineText27)) {
				hoverRange27 = document.getWordRangeAtPosition(position, pattern27);
				if (hoverRange27) {
					return new vscode.Hover(function27, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover27);


	let pineHover28 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange28;
			const hoverLineText28 = document.lineAt(position.line).text;

			const function28 = new vscode.MarkdownString(``);
			function28.appendCodeblock("array.new_table(size = int, initial_value = series table) → table[]");
			function28.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}new_table)*`);
			function28.isTrusted = true;
			function28.supportHtml = true;

			const pattern28 = new RegExp("(array\\.new_table)\\(");
			if (pattern28.test(hoverLineText28)) {
				hoverRange28 = document.getWordRangeAtPosition(position, pattern28);
				if (hoverRange28) {
					return new vscode.Hover(function28, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover28);


	let pineHover29 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange29;
			const hoverLineText29 = document.lineAt(position.line).text;

			const function29 = new vscode.MarkdownString(``);
			function29.appendCodeblock("array.pop(id = any array type) → series <type of the arrays elements>");
			function29.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}pop)*`);
			function29.isTrusted = true;
			function29.supportHtml = true;

			const pattern29 = new RegExp("(array\\.pop)\\(");
			if (pattern29.test(hoverLineText29)) {
				hoverRange29 = document.getWordRangeAtPosition(position, pattern29);
				if (hoverRange29) {
					return new vscode.Hover(function29, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover29);


	let pineHover30 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange30;
			const hoverLineText30 = document.lineAt(position.line).text;

			const function30 = new vscode.MarkdownString(``);
			function30.appendCodeblock("array.push(id = any array type, value = <type of the arrays elements>) → series void");
			function30.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}push)*`);
			function30.isTrusted = true;
			function30.supportHtml = true;

			const pattern30 = new RegExp("(array\\.push)\\(");
			if (pattern30.test(hoverLineText30)) {
				hoverRange30 = document.getWordRangeAtPosition(position, pattern30);
				if (hoverRange30) {
					return new vscode.Hover(function30, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover30);


	let pineHover31 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange31;
			const hoverLineText31 = document.lineAt(position.line).text;

			const function31 = new vscode.MarkdownString(``);
			function31.appendCodeblock("array.range(id = int[]|float[]) → int|float");
			function31.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}range)*`);
			function31.isTrusted = true;
			function31.supportHtml = true;

			const pattern31 = new RegExp("(array\\.range)\\(");
			if (pattern31.test(hoverLineText31)) {
				hoverRange31 = document.getWordRangeAtPosition(position, pattern31);
				if (hoverRange31) {
					return new vscode.Hover(function31, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover31);


	let pineHover32 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange32;
			const hoverLineText32 = document.lineAt(position.line).text;

			const function32 = new vscode.MarkdownString(``);
			function32.appendCodeblock("array.remove(id = any array type, index = int) → series <type of the arrays elements>");
			function32.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}remove)*`);
			function32.isTrusted = true;
			function32.supportHtml = true;

			const pattern32 = new RegExp("(array\\.remove)\\(");
			if (pattern32.test(hoverLineText32)) {
				hoverRange32 = document.getWordRangeAtPosition(position, pattern32);
				if (hoverRange32) {
					return new vscode.Hover(function32, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover32);


	let pineHover33 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange33;
			const hoverLineText33 = document.lineAt(position.line).text;

			const function33 = new vscode.MarkdownString(``);
			function33.appendCodeblock("array.reverse(id = any array type) → void");
			function33.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}reverse)*`);
			function33.isTrusted = true;
			function33.supportHtml = true;

			const pattern33 = new RegExp("(array\\.reverse)\\(");
			if (pattern33.test(hoverLineText33)) {
				hoverRange33 = document.getWordRangeAtPosition(position, pattern33);
				if (hoverRange33) {
					return new vscode.Hover(function33, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover33);


	let pineHover34 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange34;
			const hoverLineText34 = document.lineAt(position.line).text;

			const function34 = new vscode.MarkdownString(``);
			function34.appendCodeblock("array.set(id = any array type, index = int, value = <type of the arrays elements>) → void");
			function34.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}set)*`);
			function34.isTrusted = true;
			function34.supportHtml = true;

			const pattern34 = new RegExp("(array\\.set)\\(");
			if (pattern34.test(hoverLineText34)) {
				hoverRange34 = document.getWordRangeAtPosition(position, pattern34);
				if (hoverRange34) {
					return new vscode.Hover(function34, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover34);


	let pineHover35 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange35;
			const hoverLineText35 = document.lineAt(position.line).text;

			const function35 = new vscode.MarkdownString(``);
			function35.appendCodeblock("array.shift(id = any array type) → series <type of the arrays elements>");
			function35.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}shift)*`);
			function35.isTrusted = true;
			function35.supportHtml = true;

			const pattern35 = new RegExp("(array\\.shift)\\(");
			if (pattern35.test(hoverLineText35)) {
				hoverRange35 = document.getWordRangeAtPosition(position, pattern35);
				if (hoverRange35) {
					return new vscode.Hover(function35, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover35);


	let pineHover36 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange36;
			const hoverLineText36 = document.lineAt(position.line).text;

			const function36 = new vscode.MarkdownString(``);
			function36.appendCodeblock("array.size(id = any array type) → series int");
			function36.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}size)*`);
			function36.isTrusted = true;
			function36.supportHtml = true;

			const pattern36 = new RegExp("(array\\.size)\\(");
			if (pattern36.test(hoverLineText36)) {
				hoverRange36 = document.getWordRangeAtPosition(position, pattern36);
				if (hoverRange36) {
					return new vscode.Hover(function36, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover36);


	let pineHover37 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange37;
			const hoverLineText37 = document.lineAt(position.line).text;

			const function37 = new vscode.MarkdownString(``);
			function37.appendCodeblock("array.slice(id = any array type, index_from = int, index_to = int) → int|float");
			function37.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}slice)*`);
			function37.isTrusted = true;
			function37.supportHtml = true;

			const pattern37 = new RegExp("(array\\.slice)\\(");
			if (pattern37.test(hoverLineText37)) {
				hoverRange37 = document.getWordRangeAtPosition(position, pattern37);
				if (hoverRange37) {
					return new vscode.Hover(function37, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover37);


	let pineHover38 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange38;
			const hoverLineText38 = document.lineAt(position.line).text;

			const function38 = new vscode.MarkdownString(``);
			function38.appendCodeblock("array.sort(id = int[]|float[]|string[], order = sort_order) → void");
			function38.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}sort)*`);
			function38.isTrusted = true;
			function38.supportHtml = true;

			const pattern38 = new RegExp("(array\\.sort)\\(");
			if (pattern38.test(hoverLineText38)) {
				hoverRange38 = document.getWordRangeAtPosition(position, pattern38);
				if (hoverRange38) {
					return new vscode.Hover(function38, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover38);


	let pineHover39 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange39;
			const hoverLineText39 = document.lineAt(position.line).text;

			const function39 = new vscode.MarkdownString(``);
			function39.appendCodeblock("array.standardize(id = int[]|float[]) → int[]|float[]");
			function39.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}standardize)*`);
			function39.isTrusted = true;
			function39.supportHtml = true;

			const pattern39 = new RegExp("(array\\.standardize)\\(");
			if (pattern39.test(hoverLineText39)) {
				hoverRange39 = document.getWordRangeAtPosition(position, pattern39);
				if (hoverRange39) {
					return new vscode.Hover(function39, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover39);


	let pineHover40 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange40;
			const hoverLineText40 = document.lineAt(position.line).text;

			const function40 = new vscode.MarkdownString(``);
			function40.appendCodeblock("array.stdev(id = int[]|float[]) → int|float");
			function40.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}stdev)*`);
			function40.isTrusted = true;
			function40.supportHtml = true;

			const pattern40 = new RegExp("(array\\.stdev)\\(");
			if (pattern40.test(hoverLineText40)) {
				hoverRange40 = document.getWordRangeAtPosition(position, pattern40);
				if (hoverRange40) {
					return new vscode.Hover(function40, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover40);


	let pineHover41 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange41;
			const hoverLineText41 = document.lineAt(position.line).text;

			const function41 = new vscode.MarkdownString(``);
			function41.appendCodeblock("array.sum(id = int[]|float[]) → int|float");
			function41.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}sum)*`);
			function41.isTrusted = true;
			function41.supportHtml = true;

			const pattern41 = new RegExp("(array\\.sum)\\(");
			if (pattern41.test(hoverLineText41)) {
				hoverRange41 = document.getWordRangeAtPosition(position, pattern41);
				if (hoverRange41) {
					return new vscode.Hover(function41, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover41);


	let pineHover42 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange42;
			const hoverLineText42 = document.lineAt(position.line).text;

			const function42 = new vscode.MarkdownString(``);
			function42.appendCodeblock("array.unshift(id = any array type, value = type of the arrays elements) → int|float");
			function42.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}unshift)*`);
			function42.isTrusted = true;
			function42.supportHtml = true;

			const pattern42 = new RegExp("(array\\.unshift)\\(");
			if (pattern42.test(hoverLineText42)) {
				hoverRange42 = document.getWordRangeAtPosition(position, pattern42);
				if (hoverRange42) {
					return new vscode.Hover(function42, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover42);


	let pineHover43 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange43;
			const hoverLineText43 = document.lineAt(position.line).text;

			const function43 = new vscode.MarkdownString(``);
			function43.appendCodeblock("array.variance(id = int[]|float[]) → int|float");
			function43.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_array{dot}variance)*`);
			function43.isTrusted = true;
			function43.supportHtml = true;

			const pattern43 = new RegExp("(array\\.variance)\\(");
			if (pattern43.test(hoverLineText43)) {
				hoverRange43 = document.getWordRangeAtPosition(position, pattern43);
				if (hoverRange43) {
					return new vscode.Hover(function43, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover43);


	let pineHover44 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange44;
			const hoverLineText44 = document.lineAt(position.line).text;

			const function44 = new vscode.MarkdownString(``);
			function44.appendCodeblock("barcolor(color = color, offset = int, editable = bool, show_last = input int, title = string) → void");
			function44.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_barcolor)*`);
			function44.isTrusted = true;
			function44.supportHtml = true;

			const pattern44 = new RegExp("(barcolor)\\(");
			if (pattern44.test(hoverLineText44)) {
				hoverRange44 = document.getWordRangeAtPosition(position, pattern44);
				if (hoverRange44) {
					return new vscode.Hover(function44, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover44);


	let pineHover45 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange45;
			const hoverLineText45 = document.lineAt(position.line).text;

			const function45 = new vscode.MarkdownString(``);
			function45.appendCodeblock("bgcolor(color = color, offset = int, editable = bool, show_last = input int, title = string) → void");
			function45.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_bgcolor)*`);
			function45.isTrusted = true;
			function45.supportHtml = true;

			const pattern45 = new RegExp("(bgcolor)\\(");
			if (pattern45.test(hoverLineText45)) {
				hoverRange45 = document.getWordRangeAtPosition(position, pattern45);
				if (hoverRange45) {
					return new vscode.Hover(function45, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover45);


	let pineHover46 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange46;
			const hoverLineText46 = document.lineAt(position.line).text;

			const function47 = new vscode.MarkdownString(``);
			function47.appendCodeblock("box(x = box) → series box");
			function47.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box)*`);
			function47.isTrusted = true;
			function47.supportHtml = true;

			const pattern47 = new RegExp("(box)\\(");
			if (pattern47.test(hoverLineText46)) {
				hoverRange46 = document.getWordRangeAtPosition(position, pattern47);
				if (hoverRange46) {
					return new vscode.Hover(function47, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover46);


	let pineHover47 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange47;
			const hoverLineText47 = document.lineAt(position.line).text;

			const function48 = new vscode.MarkdownString(``);
			function48.appendCodeblock("box.delete(id = box) → series void");
			function48.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}delete)*`);
			function48.isTrusted = true;
			function48.supportHtml = true;

			const pattern48 = new RegExp("(box\\.delete)\\(");
			if (pattern48.test(hoverLineText47)) {
				hoverRange47 = document.getWordRangeAtPosition(position, pattern48);
				if (hoverRange47) {
					return new vscode.Hover(function48, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover47);


	let pineHover48 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange48;
			const hoverLineText48 = document.lineAt(position.line).text;

			const function49 = new vscode.MarkdownString(``);
			function49.appendCodeblock("box.get_bottom(id = box) → series float");
			function49.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}get_bottom)*`);
			function49.isTrusted = true;
			function49.supportHtml = true;

			const pattern49 = new RegExp("(box\\.get_bottom)\\(");
			if (pattern49.test(hoverLineText48)) {
				hoverRange48 = document.getWordRangeAtPosition(position, pattern49);
				if (hoverRange48) {
					return new vscode.Hover(function49, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover48);


	let pineHover49 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange49;
			const hoverLineText49 = document.lineAt(position.line).text;

			const function50 = new vscode.MarkdownString(``);
			function50.appendCodeblock("box.get_left(id = box) → int");
			function50.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}get_left)*`);
			function50.isTrusted = true;
			function50.supportHtml = true;

			const pattern50 = new RegExp("(box\\.get_left)\\(");
			if (pattern50.test(hoverLineText49)) {
				hoverRange49 = document.getWordRangeAtPosition(position, pattern50);
				if (hoverRange49) {
					return new vscode.Hover(function50, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover49);


	let pineHover50 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange50;
			const hoverLineText50 = document.lineAt(position.line).text;

			const function51 = new vscode.MarkdownString(``);
			function51.appendCodeblock("box.get_right(id = box) → int");
			function51.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}get_right)*`);
			function51.isTrusted = true;
			function51.supportHtml = true;

			const pattern51 = new RegExp("(box\\.get_right)\\(");
			if (pattern51.test(hoverLineText50)) {
				hoverRange50 = document.getWordRangeAtPosition(position, pattern51);
				if (hoverRange50) {
					return new vscode.Hover(function51, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover50);


	let pineHover51 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange51;
			const hoverLineText51 = document.lineAt(position.line).text;

			const function52 = new vscode.MarkdownString(``);
			function52.appendCodeblock("box.get_top(id = box) → float");
			function52.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}get_top)*`);
			function52.isTrusted = true;
			function52.supportHtml = true;

			const pattern52 = new RegExp("(box\\.get_top)\\(");
			if (pattern52.test(hoverLineText51)) {
				hoverRange51 = document.getWordRangeAtPosition(position, pattern52);
				if (hoverRange51) {
					return new vscode.Hover(function52, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover51);


	let pineHover52 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange52;
			const hoverLineText52 = document.lineAt(position.line).text;

			const function53 = new vscode.MarkdownString(``);
			function53.appendCodeblock("box.new(left = int, top = int|float, right = int, bottom = int|float, border_color = color, border_width = int, border_style = string, extend = string, xloc = string, bgcolor = string)");
			function53.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}new)*`);
			function53.isTrusted = true;
			function53.supportHtml = true;

			const pattern53 = new RegExp("(box\\.new)\\(");
			if (pattern53.test(hoverLineText52)) {
				hoverRange52 = document.getWordRangeAtPosition(position, pattern53);
				if (hoverRange52) {
					return new vscode.Hover(function53, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover52);


	let pineHover53 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange53;
			const hoverLineText53 = document.lineAt(position.line).text;

			const function54 = new vscode.MarkdownString(``);
			function54.appendCodeblock("box.new(left = int, top = int|float, right = int, bottom = int|float, border_color = color, border_width = int, border_style = string, extend = string, xloc = string, bgcolor = string)");
			function54.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}new)*`);
			function54.isTrusted = true;
			function54.supportHtml = true;

			const pattern54 = new RegExp("(box\\.new)\\(");
			if (pattern54.test(hoverLineText53)) {
				hoverRange53 = document.getWordRangeAtPosition(position, pattern54);
				if (hoverRange53) {
					return new vscode.Hover(function54, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover53);


	let pineHover54 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange54;
			const hoverLineText54 = document.lineAt(position.line).text;

			const function55 = new vscode.MarkdownString(``);
			function55.appendCodeblock("box.set_bgcolor(id = box, color = color) → void");
			function55.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_bgcolor)*`);
			function55.isTrusted = true;
			function55.supportHtml = true;

			const pattern55 = new RegExp("(box\\.set_bgcolor)\\(");
			if (pattern55.test(hoverLineText54)) {
				hoverRange54 = document.getWordRangeAtPosition(position, pattern55);
				if (hoverRange54) {
					return new vscode.Hover(function55, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover54);


	let pineHover55 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange55;
			const hoverLineText55 = document.lineAt(position.line).text;

			const function56 = new vscode.MarkdownString(``);
			function56.appendCodeblock("box.set_border_color(id = box, color = color) → void");
			function56.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_border_color)*`);
			function56.isTrusted = true;
			function56.supportHtml = true;

			const pattern56 = new RegExp("(box\\.set_border_color)\\(");
			if (pattern56.test(hoverLineText55)) {
				hoverRange55 = document.getWordRangeAtPosition(position, pattern56);
				if (hoverRange55) {
					return new vscode.Hover(function56, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover55);


	let pineHover56 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange56;
			const hoverLineText56 = document.lineAt(position.line).text;

			const function57 = new vscode.MarkdownString(``);
			function57.appendCodeblock("box.set_border_style(id = box, style = string) → void");
			function57.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_border_style)*`);
			function57.isTrusted = true;
			function57.supportHtml = true;

			const pattern57 = new RegExp("(box\\.set_border_style)\\(");
			if (pattern57.test(hoverLineText56)) {
				hoverRange56 = document.getWordRangeAtPosition(position, pattern57);
				if (hoverRange56) {
					return new vscode.Hover(function57, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover56);


	let pineHover57 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange57;
			const hoverLineText57 = document.lineAt(position.line).text;

			const function58 = new vscode.MarkdownString(``);
			function58.appendCodeblock("box.set_border_width(id = box, width = int) → void");
			function58.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_border_width)*`);
			function58.isTrusted = true;
			function58.supportHtml = true;

			const pattern58 = new RegExp("(box\\.set_border_width)\\(");
			if (pattern58.test(hoverLineText57)) {
				hoverRange57 = document.getWordRangeAtPosition(position, pattern58);
				if (hoverRange57) {
					return new vscode.Hover(function58, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover57);


	let pineHover58 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange58;
			const hoverLineText58 = document.lineAt(position.line).text;

			const function59 = new vscode.MarkdownString(``);
			function59.appendCodeblock("box.set_bottom(id = box, bottom = int|float) → void");
			function59.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_bottom)*`);
			function59.isTrusted = true;
			function59.supportHtml = true;

			const pattern59 = new RegExp("(box\\.set_bottom)\\(");
			if (pattern59.test(hoverLineText58)) {
				hoverRange58 = document.getWordRangeAtPosition(position, pattern59);
				if (hoverRange58) {
					return new vscode.Hover(function59, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover58);


	let pineHover59 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange59;
			const hoverLineText59 = document.lineAt(position.line).text;

			const function60 = new vscode.MarkdownString(``);
			function60.appendCodeblock("box.set_extend(id = box, extend = string) → void");
			function60.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_extend)*`);
			function60.isTrusted = true;
			function60.supportHtml = true;

			const pattern60 = new RegExp("(box\\.set_extend)\\(");
			if (pattern60.test(hoverLineText59)) {
				hoverRange59 = document.getWordRangeAtPosition(position, pattern60);
				if (hoverRange59) {
					return new vscode.Hover(function60, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover59);


	let pineHover60 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange60;
			const hoverLineText60 = document.lineAt(position.line).text;

			const function61 = new vscode.MarkdownString(``);
			function61.appendCodeblock("box.set_left(id = box, left = int) → void");
			function61.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_left)*`);
			function61.isTrusted = true;
			function61.supportHtml = true;

			const pattern61 = new RegExp("(box\\.set_left)\\(");
			if (pattern61.test(hoverLineText60)) {
				hoverRange60 = document.getWordRangeAtPosition(position, pattern61);
				if (hoverRange60) {
					return new vscode.Hover(function61, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover60);


	let pineHover61 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange61;
			const hoverLineText61 = document.lineAt(position.line).text;

			const function62 = new vscode.MarkdownString(``);
			function62.appendCodeblock("box.set_lefttop(id = box, left = int, top = int|float) → void");
			function62.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_lefttop)*`);
			function62.isTrusted = true;
			function62.supportHtml = true;

			const pattern62 = new RegExp("(box\\.set_lefttop)\\(");
			if (pattern62.test(hoverLineText61)) {
				hoverRange61 = document.getWordRangeAtPosition(position, pattern62);
				if (hoverRange61) {
					return new vscode.Hover(function62, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover61);


	let pineHover62 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange62;
			const hoverLineText62 = document.lineAt(position.line).text;

			const function63 = new vscode.MarkdownString(``);
			function63.appendCodeblock("box.set_right(id = box, right = int) → void");
			function63.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_right)*`);
			function63.isTrusted = true;
			function63.supportHtml = true;

			const pattern63 = new RegExp("(box\\.set_right)\\(");
			if (pattern63.test(hoverLineText62)) {
				hoverRange62 = document.getWordRangeAtPosition(position, pattern63);
				if (hoverRange62) {
					return new vscode.Hover(function63, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover62);


	let pineHover63 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange63;
			const hoverLineText63 = document.lineAt(position.line).text;

			const function64 = new vscode.MarkdownString(``);
			function64.appendCodeblock("box.set_rightbottom(id = box, right = int, bottom = int|float) → void");
			function64.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_rightbottom)*`);
			function64.isTrusted = true;
			function64.supportHtml = true;

			const pattern64 = new RegExp("(box\\.set_rightbottom)\\(");
			if (pattern64.test(hoverLineText63)) {
				hoverRange63 = document.getWordRangeAtPosition(position, pattern64);
				if (hoverRange63) {
					return new vscode.Hover(function64, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover63);


	let pineHover64 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange64;
			const hoverLineText64 = document.lineAt(position.line).text;

			const function65 = new vscode.MarkdownString(``);
			function65.appendCodeblock("box.set_top(id = box, top = int|float) → void");
			function65.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_box{dot}set_top)*`);
			function65.isTrusted = true;
			function65.supportHtml = true;

			const pattern65 = new RegExp("(box\\.set_top)\\(");
			if (pattern65.test(hoverLineText64)) {
				hoverRange64 = document.getWordRangeAtPosition(position, pattern65);
				if (hoverRange64) {
					return new vscode.Hover(function65, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover64);


	let pineHover65 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange65;
			const hoverLineText65 = document.lineAt(position.line).text;

			const function66 = new vscode.MarkdownString(``);
			function66.appendCodeblock("color.b(color = color) → series|const|input float");
			function66.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}b)*`);
			function66.isTrusted = true;
			function66.supportHtml = true;

			const pattern66 = new RegExp("(color\\.b)\\(");
			if (pattern66.test(hoverLineText65)) {
				hoverRange65 = document.getWordRangeAtPosition(position, pattern66);
				if (hoverRange65) {
					return new vscode.Hover(function66, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover65);


	let pineHover66 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange66;
			const hoverLineText66 = document.lineAt(position.line).text;

			const function67 = new vscode.MarkdownString(``);
			function67.appendCodeblock("color.from_gradient(value = int|float, bottom_value = int|float, top_value = int|float, bottom_color = color, top_color = color) → series color");
			function67.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}from_gradient)*`);
			function67.isTrusted = true;
			function67.supportHtml = true;

			const pattern67 = new RegExp("(color\\.from_gradient)\\(");
			if (pattern67.test(hoverLineText66)) {
				hoverRange66 = document.getWordRangeAtPosition(position, pattern67);
				if (hoverRange66) {
					return new vscode.Hover(function67, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover66);


	let pineHover67 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange67;
			const hoverLineText67 = document.lineAt(position.line).text;

			const function68 = new vscode.MarkdownString(``);
			function68.appendCodeblock("color.g(color = color) → series|const|input float");
			function68.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}g)*`);
			function68.isTrusted = true;
			function68.supportHtml = true;

			const pattern68 = new RegExp("(color\\.g)\\(");
			if (pattern68.test(hoverLineText67)) {
				hoverRange67 = document.getWordRangeAtPosition(position, pattern68);
				if (hoverRange67) {
					return new vscode.Hover(function68, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover67);


	let pineHover68 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange68;
			const hoverLineText68 = document.lineAt(position.line).text;

			const function69 = new vscode.MarkdownString(``);
			function69.appendCodeblock("color.new(color = color, transp = int|float) → const color");
			function69.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}new)*`);
			function69.isTrusted = true;
			function69.supportHtml = true;

			const pattern69 = new RegExp("(color\\.new)\\(");
			if (pattern69.test(hoverLineText68)) {
				hoverRange68 = document.getWordRangeAtPosition(position, pattern69);
				if (hoverRange68) {
					return new vscode.Hover(function69, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover68);


	let pineHover69 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange69;
			const hoverLineText69 = document.lineAt(position.line).text;

			const function70 = new vscode.MarkdownString(``);
			function70.appendCodeblock("color.r(color = color) → series|const|input float");
			function70.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}r)*`);
			function70.isTrusted = true;
			function70.supportHtml = true;

			const pattern70 = new RegExp("(color\\.r)\\(");
			if (pattern70.test(hoverLineText69)) {
				hoverRange69 = document.getWordRangeAtPosition(position, pattern70);
				if (hoverRange69) {
					return new vscode.Hover(function70, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover69);


	let pineHover70 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange70;
			const hoverLineText70 = document.lineAt(position.line).text;

			const function71 = new vscode.MarkdownString(``);
			function71.appendCodeblock("color.rgb(red = int|float, green = int|float, blue = int|float, transp = int|float) → series|const|input color");
			function71.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}rgb)*`);
			function71.isTrusted = true;
			function71.supportHtml = true;

			const pattern71 = new RegExp("(color\\.rgb)\\(");
			if (pattern71.test(hoverLineText70)) {
				hoverRange70 = document.getWordRangeAtPosition(position, pattern71);
				if (hoverRange70) {
					return new vscode.Hover(function71, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover70);


	let pineHover71 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange71;
			const hoverLineText71 = document.lineAt(position.line).text;

			const function72 = new vscode.MarkdownString(``);
			function72.appendCodeblock("color.t(color = color) → series|const|input float");
			function72.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_color{dot}t)*`);
			function72.isTrusted = true;
			function72.supportHtml = true;

			const pattern72 = new RegExp("(color\\.t)\\(");
			if (pattern72.test(hoverLineText71)) {
				hoverRange71 = document.getWordRangeAtPosition(position, pattern72);
				if (hoverRange71) {
					return new vscode.Hover(function72, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover71);


	let pineHover72 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange72;
			const hoverLineText72 = document.lineAt(position.line).text;

			const function73 = new vscode.MarkdownString(``);
			function73.appendCodeblock("dayofmonth(time = int, timezone = series string) → series int");
			function73.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_dayofmonth)*`);
			function73.isTrusted = true;
			function73.supportHtml = true;

			const pattern73 = new RegExp("(dayofmonth)\\(");
			if (pattern73.test(hoverLineText72)) {
				hoverRange72 = document.getWordRangeAtPosition(position, pattern73);
				if (hoverRange72) {
					return new vscode.Hover(function73, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover72);


	let pineHover73 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange73;
			const hoverLineText73 = document.lineAt(position.line).text;

			const function74 = new vscode.MarkdownString(``);
			function74.appendCodeblock("dayofweek(time = int, timezone = series string) → series int");
			function74.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_dayofweek)*`);
			function74.isTrusted = true;
			function74.supportHtml = true;

			const pattern74 = new RegExp("(dayofweek)\\(");
			if (pattern74.test(hoverLineText73)) {
				hoverRange73 = document.getWordRangeAtPosition(position, pattern74);
				if (hoverRange73) {
					return new vscode.Hover(function74, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover73);


	let pineHover74 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange74;
			const hoverLineText74 = document.lineAt(position.line).text;

			const function75 = new vscode.MarkdownString(``);
			function75.appendCodeblock("fill(hline1 = hline, hline2 = hline, color = color, title = string, editable = bool, fillgaps = bool) → void");
			function75.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_fill)*`);
			function75.isTrusted = true;
			function75.supportHtml = true;

			const pattern75 = new RegExp("(fill)\\(");
			if (pattern75.test(hoverLineText74)) {
				hoverRange74 = document.getWordRangeAtPosition(position, pattern75);
				if (hoverRange74) {
					return new vscode.Hover(function75, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover74);


	let pineHover75 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange75;
			const hoverLineText75 = document.lineAt(position.line).text;

			const function76 = new vscode.MarkdownString(``);
			function76.appendCodeblock("fixnan(source = int|float|bool|color) → series int|float|bool|color");
			function76.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_fixnan)*`);
			function76.isTrusted = true;
			function76.supportHtml = true;

			const pattern76 = new RegExp("(fixnan)\\(");
			if (pattern76.test(hoverLineText75)) {
				hoverRange75 = document.getWordRangeAtPosition(position, pattern76);
				if (hoverRange75) {
					return new vscode.Hover(function76, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover75);


	let pineHover76 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange76;
			const hoverLineText76 = document.lineAt(position.line).text;

			const function78 = new vscode.MarkdownString(``);
			function78.appendCodeblock("hline(price = int|float, title = const string, color = color, linestyle = hline_style, linewidth = int, editable = bool)");
			function78.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_hline)*`);
			function78.isTrusted = true;
			function78.supportHtml = true;

			const pattern78 = new RegExp("(hline)\\(");
			if (pattern78.test(hoverLineText76)) {
				hoverRange76 = document.getWordRangeAtPosition(position, pattern78);
				if (hoverRange76) {
					return new vscode.Hover(function78, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover76);


	let pineHover77 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange77;
			const hoverLineText77 = document.lineAt(position.line).text;

			const function79 = new vscode.MarkdownString(``);
			function79.appendCodeblock("hour(time = int, timezone = string) → series int");
			function79.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_hour)*`);
			function79.isTrusted = true;
			function79.supportHtml = true;

			const pattern79 = new RegExp("(hour)\\(");
			if (pattern79.test(hoverLineText77)) {
				hoverRange77 = document.getWordRangeAtPosition(position, pattern79);
				if (hoverRange77) {
					return new vscode.Hover(function79, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover77);


	let pineHover78 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange78;
			const hoverLineText78 = document.lineAt(position.line).text;

			const function80 = new vscode.MarkdownString(``);
			function80.appendCodeblock("input(defval = any, title = string, tooltip = string, inline = string, group = string) → input int|float|bool|string|color");
			function80.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input)*`);
			function80.isTrusted = true;
			function80.supportHtml = true;

			const pattern80 = new RegExp("(input)\\(");
			if (pattern80.test(hoverLineText78)) {
				hoverRange78 = document.getWordRangeAtPosition(position, pattern80);
				if (hoverRange78) {
					return new vscode.Hover(function80, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover78);


	let pineHover79 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange79;
			const hoverLineText79 = document.lineAt(position.line).text;

			const function81 = new vscode.MarkdownString(``);
			function81.appendCodeblock("input.bool(defval = bool, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input bool");
			function81.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}bool)*`);
			function81.isTrusted = true;
			function81.supportHtml = true;

			const pattern81 = new RegExp("(input\\.bool)\\(");
			if (pattern81.test(hoverLineText79)) {
				hoverRange79 = document.getWordRangeAtPosition(position, pattern81);
				if (hoverRange79) {
					return new vscode.Hover(function81, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover79);


	let pineHover80 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange80;
			const hoverLineText80 = document.lineAt(position.line).text;

			const function82 = new vscode.MarkdownString(``);
			function82.appendCodeblock("input.color(defval = const color, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input color");
			function82.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}color)*`);
			function82.isTrusted = true;
			function82.supportHtml = true;

			const pattern82 = new RegExp("(input\\.color)\\(");
			if (pattern82.test(hoverLineText80)) {
				hoverRange80 = document.getWordRangeAtPosition(position, pattern82);
				if (hoverRange80) {
					return new vscode.Hover(function82, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover80);


	let pineHover81 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange81;
			const hoverLineText81 = document.lineAt(position.line).text;

			const function83 = new vscode.MarkdownString(``);
			function83.appendCodeblock("input.float(defval = float, title = string, options = tuple, tooltip = string, inline = string, group = string, confirm = bool) → input float");
			function83.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}float)*`);
			function83.isTrusted = true;
			function83.supportHtml = true;

			const pattern83 = new RegExp("(input\\.float)\\(");
			if (pattern83.test(hoverLineText81)) {
				hoverRange81 = document.getWordRangeAtPosition(position, pattern83);
				if (hoverRange81) {
					return new vscode.Hover(function83, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover81);


	let pineHover82 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange82;
			const hoverLineText82 = document.lineAt(position.line).text;

			const function84 = new vscode.MarkdownString(``);
			function84.appendCodeblock("input.int(defval = int, title = string, minval = int, maxval = int, step = int, tooltip = string, inline = string, group = string, confirm = bool) → input int");
			function84.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}int)*`);
			function84.isTrusted = true;
			function84.supportHtml = true;

			const pattern84 = new RegExp("(input\\.int)\\(");
			if (pattern84.test(hoverLineText82)) {
				hoverRange82 = document.getWordRangeAtPosition(position, pattern84);
				if (hoverRange82) {
					return new vscode.Hover(function84, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover82);


	let pineHover83 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange83;
			const hoverLineText83 = document.lineAt(position.line).text;

			const function85 = new vscode.MarkdownString(``);
			function85.appendCodeblock("input.price(defval = int|float, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input float");
			function85.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}price)*`);
			function85.isTrusted = true;
			function85.supportHtml = true;

			const pattern85 = new RegExp("(input\\.price)\\(");
			if (pattern85.test(hoverLineText83)) {
				hoverRange83 = document.getWordRangeAtPosition(position, pattern85);
				if (hoverRange83) {
					return new vscode.Hover(function85, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover83);


	let pineHover84 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange84;
			const hoverLineText84 = document.lineAt(position.line).text;

			const function86 = new vscode.MarkdownString(``);
			function86.appendCodeblock("input.session(defval = string, title = string, options = tuple, tooltip = string, inline = string, group = string, confirm = bool) → input string");
			function86.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}session)*`);
			function86.isTrusted = true;
			function86.supportHtml = true;

			const pattern86 = new RegExp("(input\\.session)\\(");
			if (pattern86.test(hoverLineText84)) {
				hoverRange84 = document.getWordRangeAtPosition(position, pattern86);
				if (hoverRange84) {
					return new vscode.Hover(function86, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover84);


	let pineHover85 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange85;
			const hoverLineText85 = document.lineAt(position.line).text;

			const function87 = new vscode.MarkdownString(``);
			function87.appendCodeblock("input.source(defval = int|float, title = string, tooltip = string, inline = string, group = string) → series float");
			function87.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}source)*`);
			function87.isTrusted = true;
			function87.supportHtml = true;

			const pattern87 = new RegExp("(input\\.source)\\(");
			if (pattern87.test(hoverLineText85)) {
				hoverRange85 = document.getWordRangeAtPosition(position, pattern87);
				if (hoverRange85) {
					return new vscode.Hover(function87, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover85);


	let pineHover86 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange86;
			const hoverLineText86 = document.lineAt(position.line).text;

			const function88 = new vscode.MarkdownString(``);
			function88.appendCodeblock("input.string(defval = string, title = string, options = string, tooltip = string, inline = string, group = string, confirm = bool) → input string");
			function88.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}string)*`);
			function88.isTrusted = true;
			function88.supportHtml = true;

			const pattern88 = new RegExp("(input\\.string)\\(");
			if (pattern88.test(hoverLineText86)) {
				hoverRange86 = document.getWordRangeAtPosition(position, pattern88);
				if (hoverRange86) {
					return new vscode.Hover(function88, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover86);


	let pineHover87 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange87;
			const hoverLineText87 = document.lineAt(position.line).text;

			const function89 = new vscode.MarkdownString(``);
			function89.appendCodeblock("input.symbol(defval = string, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input string");
			function89.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}symbol)*`);
			function89.isTrusted = true;
			function89.supportHtml = true;

			const pattern89 = new RegExp("(input\\.symbol)\\(");
			if (pattern89.test(hoverLineText87)) {
				hoverRange87 = document.getWordRangeAtPosition(position, pattern89);
				if (hoverRange87) {
					return new vscode.Hover(function89, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover87);


	let pineHover88 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange88;
			const hoverLineText88 = document.lineAt(position.line).text;

			const function90 = new vscode.MarkdownString(``);
			function90.appendCodeblock("input.time(defval = const int, title = string, tooltip = string, inline = string, group = string, confirm = bool) → input int");
			function90.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}time)*`);
			function90.isTrusted = true;
			function90.supportHtml = true;

			const pattern90 = new RegExp("(input\\.time)\\(");
			if (pattern90.test(hoverLineText88)) {
				hoverRange88 = document.getWordRangeAtPosition(position, pattern90);
				if (hoverRange88) {
					return new vscode.Hover(function90, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover88);


	let pineHover89 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange89;
			const hoverLineText89 = document.lineAt(position.line).text;

			const function91 = new vscode.MarkdownString(``);
			function91.appendCodeblock("input.timeframe(defval = string, title = string, options = tuple, tooltip = string, inline = string, group = string, confirm = bool) → input string");
			function91.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_input{dot}timeframe)*`);
			function91.isTrusted = true;
			function91.supportHtml = true;

			const pattern91 = new RegExp("(input\\.timeframe)\\(");
			if (pattern91.test(hoverLineText89)) {
				hoverRange89 = document.getWordRangeAtPosition(position, pattern91);
				if (hoverRange89) {
					return new vscode.Hover(function91, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover89);


	let pineHover90 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange90;
			const hoverLineText90 = document.lineAt(position.line).text;

			const function93 = new vscode.MarkdownString(``);
			function93.appendCodeblock("label(x = label) → label");
			function93.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label)*`);
			function93.isTrusted = true;
			function93.supportHtml = true;

			const pattern93 = new RegExp("(label)\\(");
			if (pattern93.test(hoverLineText90)) {
				hoverRange90 = document.getWordRangeAtPosition(position, pattern93);
				if (hoverRange90) {
					return new vscode.Hover(function93, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover90);


	let pineHover91 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange91;
			const hoverLineText91 = document.lineAt(position.line).text;

			const function94 = new vscode.MarkdownString(``);
			function94.appendCodeblock("label.delete(id = label) → void");
			function94.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}delete)*`);
			function94.isTrusted = true;
			function94.supportHtml = true;

			const pattern94 = new RegExp("(label\\.delete)\\(");
			if (pattern94.test(hoverLineText91)) {
				hoverRange91 = document.getWordRangeAtPosition(position, pattern94);
				if (hoverRange91) {
					return new vscode.Hover(function94, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover91);


	let pineHover92 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange92;
			const hoverLineText92 = document.lineAt(position.line).text;

			const function95 = new vscode.MarkdownString(``);
			function95.appendCodeblock("label.get_text(id = label) → string");
			function95.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}get_text)*`);
			function95.isTrusted = true;
			function95.supportHtml = true;

			const pattern95 = new RegExp("(label\\.get_text)\\(");
			if (pattern95.test(hoverLineText92)) {
				hoverRange92 = document.getWordRangeAtPosition(position, pattern95);
				if (hoverRange92) {
					return new vscode.Hover(function95, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover92);


	let pineHover93 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange93;
			const hoverLineText93 = document.lineAt(position.line).text;

			const function96 = new vscode.MarkdownString(``);
			function96.appendCodeblock("label.get_x(id = label) → int");
			function96.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}get_x)*`);
			function96.isTrusted = true;
			function96.supportHtml = true;

			const pattern96 = new RegExp("(label\\.get_x)\\(");
			if (pattern96.test(hoverLineText93)) {
				hoverRange93 = document.getWordRangeAtPosition(position, pattern96);
				if (hoverRange93) {
					return new vscode.Hover(function96, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover93);


	let pineHover94 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange94;
			const hoverLineText94 = document.lineAt(position.line).text;

			const function97 = new vscode.MarkdownString(``);
			function97.appendCodeblock("label.get_y(id = label) → float");
			function97.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}get_y)*`);
			function97.isTrusted = true;
			function97.supportHtml = true;

			const pattern97 = new RegExp("(label\\.get_y)\\(");
			if (pattern97.test(hoverLineText94)) {
				hoverRange94 = document.getWordRangeAtPosition(position, pattern97);
				if (hoverRange94) {
					return new vscode.Hover(function97, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover94);


	let pineHover95 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange95;
			const hoverLineText95 = document.lineAt(position.line).text;

			const function98 = new vscode.MarkdownString(``);
			function98.appendCodeblock("label.new(x = int, y = int|float, text = string, xloc = string, yloc = string, color = color, style = string, textcolor = color, size = string , textalign = string, tooltip = string) → series label");
			function98.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}new)*`);
			function98.isTrusted = true;
			function98.supportHtml = true;

			const pattern98 = new RegExp("(label\\.new)\\(");
			if (pattern98.test(hoverLineText95)) {
				hoverRange95 = document.getWordRangeAtPosition(position, pattern98);
				if (hoverRange95) {
					return new vscode.Hover(function98, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover95);


	let pineHover96 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange96;
			const hoverLineText96 = document.lineAt(position.line).text;

			const function99 = new vscode.MarkdownString(``);
			function99.appendCodeblock("label.set_color(id = label, color = string) → void");
			function99.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_color)*`);
			function99.isTrusted = true;
			function99.supportHtml = true;

			const pattern99 = new RegExp("(label\\.set_color)\\(");
			if (pattern99.test(hoverLineText96)) {
				hoverRange96 = document.getWordRangeAtPosition(position, pattern99);
				if (hoverRange96) {
					return new vscode.Hover(function99, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover96);


	let pineHover97 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange97;
			const hoverLineText97 = document.lineAt(position.line).text;

			const function100 = new vscode.MarkdownString(``);
			function100.appendCodeblock("label.set_size(id = label, size = string) → void");
			function100.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_size)*`);
			function100.isTrusted = true;
			function100.supportHtml = true;

			const pattern100 = new RegExp("(label\\.set_size)\\(");
			if (pattern100.test(hoverLineText97)) {
				hoverRange97 = document.getWordRangeAtPosition(position, pattern100);
				if (hoverRange97) {
					return new vscode.Hover(function100, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover97);


	let pineHover98 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange98;
			const hoverLineText98 = document.lineAt(position.line).text;

			const function101 = new vscode.MarkdownString(``);
			function101.appendCodeblock("label.set_style(id = label, style = string) → void");
			function101.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_style)*`);
			function101.isTrusted = true;
			function101.supportHtml = true;

			const pattern101 = new RegExp("(label\\.set_style)\\(");
			if (pattern101.test(hoverLineText98)) {
				hoverRange98 = document.getWordRangeAtPosition(position, pattern101);
				if (hoverRange98) {
					return new vscode.Hover(function101, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover98);


	let pineHover99 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange99;
			const hoverLineText99 = document.lineAt(position.line).text;

			const function102 = new vscode.MarkdownString(``);
			function102.appendCodeblock("label.set_text(id = label, text = string) → void");
			function102.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_text)*`);
			function102.isTrusted = true;
			function102.supportHtml = true;

			const pattern102 = new RegExp("(label\\.set_text)\\(");
			if (pattern102.test(hoverLineText99)) {
				hoverRange99 = document.getWordRangeAtPosition(position, pattern102);
				if (hoverRange99) {
					return new vscode.Hover(function102, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover99);


	let pineHover100 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange100;
			const hoverLineText100 = document.lineAt(position.line).text;

			const function103 = new vscode.MarkdownString(``);
			function103.appendCodeblock("label.set_textalign(id = label, textalign = string) → void");
			function103.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_textalign)*`);
			function103.isTrusted = true;
			function103.supportHtml = true;

			const pattern103 = new RegExp("(label\\.set_textalign)\\(");
			if (pattern103.test(hoverLineText100)) {
				hoverRange100 = document.getWordRangeAtPosition(position, pattern103);
				if (hoverRange100) {
					return new vscode.Hover(function103, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover100);


	let pineHover101 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange101;
			const hoverLineText101 = document.lineAt(position.line).text;

			const function104 = new vscode.MarkdownString(``);
			function104.appendCodeblock("label.set_textcolor(id = label, textcolor = color) → void");
			function104.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_textcolor)*`);
			function104.isTrusted = true;
			function104.supportHtml = true;

			const pattern104 = new RegExp("(label\\.set_textcolor)\\(");
			if (pattern104.test(hoverLineText101)) {
				hoverRange101 = document.getWordRangeAtPosition(position, pattern104);
				if (hoverRange101) {
					return new vscode.Hover(function104, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover101);


	let pineHover102 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange102;
			const hoverLineText102 = document.lineAt(position.line).text;

			const function105 = new vscode.MarkdownString(``);
			function105.appendCodeblock("label.set_tooltip(id = label, tooltip = string) → void");
			function105.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_tooltip)*`);
			function105.isTrusted = true;
			function105.supportHtml = true;

			const pattern105 = new RegExp("(label\\.set_tooltip)\\(");
			if (pattern105.test(hoverLineText102)) {
				hoverRange102 = document.getWordRangeAtPosition(position, pattern105);
				if (hoverRange102) {
					return new vscode.Hover(function105, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover102);


	let pineHover103 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange103;
			const hoverLineText103 = document.lineAt(position.line).text;

			const function106 = new vscode.MarkdownString(``);
			function106.appendCodeblock("label.set_x(id = label, x = int) → void");
			function106.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_x)*`);
			function106.isTrusted = true;
			function106.supportHtml = true;

			const pattern106 = new RegExp("(label\\.set_x)\\(");
			if (pattern106.test(hoverLineText103)) {
				hoverRange103 = document.getWordRangeAtPosition(position, pattern106);
				if (hoverRange103) {
					return new vscode.Hover(function106, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover103);


	let pineHover104 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange104;
			const hoverLineText104 = document.lineAt(position.line).text;

			const function107 = new vscode.MarkdownString(``);
			function107.appendCodeblock("label.set_xloc(id = label, x = int, xloc = string) → void");
			function107.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_xloc)*`);
			function107.isTrusted = true;
			function107.supportHtml = true;

			const pattern107 = new RegExp("(label\\.set_xloc)\\(");
			if (pattern107.test(hoverLineText104)) {
				hoverRange104 = document.getWordRangeAtPosition(position, pattern107);
				if (hoverRange104) {
					return new vscode.Hover(function107, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover104);


	let pineHover105 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange105;
			const hoverLineText105 = document.lineAt(position.line).text;

			const function108 = new vscode.MarkdownString(``);
			function108.appendCodeblock("label.set_xy(id = label, x = int, y = int|float) → void");
			function108.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_xy)*`);
			function108.isTrusted = true;
			function108.supportHtml = true;

			const pattern108 = new RegExp("(label\\.set_xy)\\(");
			if (pattern108.test(hoverLineText105)) {
				hoverRange105 = document.getWordRangeAtPosition(position, pattern108);
				if (hoverRange105) {
					return new vscode.Hover(function108, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover105);


	let pineHover106 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange106;
			const hoverLineText106 = document.lineAt(position.line).text;

			const function109 = new vscode.MarkdownString(``);
			function109.appendCodeblock("label.set_y(id = label, y = int|float) → void");
			function109.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_y)*`);
			function109.isTrusted = true;
			function109.supportHtml = true;

			const pattern109 = new RegExp("(label\\.set_y)\\(");
			if (pattern109.test(hoverLineText106)) {
				hoverRange106 = document.getWordRangeAtPosition(position, pattern109);
				if (hoverRange106) {
					return new vscode.Hover(function109, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover106);


	let pineHover107 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange107;
			const hoverLineText107 = document.lineAt(position.line).text;

			const function110 = new vscode.MarkdownString(``);
			function110.appendCodeblock("label.set_yloc(id = label, yloc = string) → void");
			function110.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_label{dot}set_yloc)*`);
			function110.isTrusted = true;
			function110.supportHtml = true;

			const pattern110 = new RegExp("(label\\.set_yloc)\\(");
			if (pattern110.test(hoverLineText107)) {
				hoverRange107 = document.getWordRangeAtPosition(position, pattern110);
				if (hoverRange107) {
					return new vscode.Hover(function110, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover107);


	let pineHover108 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange108;
			const hoverLineText108 = document.lineAt(position.line).text;

			const function111 = new vscode.MarkdownString(``);
			function111.appendCodeblock("line(id = line) → line  ");
			function111.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line)*`);
			function111.isTrusted = true;
			function111.supportHtml = true;

			const pattern111 = new RegExp("(line)\\(");
			if (pattern111.test(hoverLineText108)) {
				hoverRange108 = document.getWordRangeAtPosition(position, pattern111);
				if (hoverRange108) {
					return new vscode.Hover(function111, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover108);


	let pineHover109 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange109;
			const hoverLineText109 = document.lineAt(position.line).text;

			const function112 = new vscode.MarkdownString(``);
			function112.appendCodeblock("library(title = string, overlay = bool) → void");
			function112.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_library)*`);
			function112.isTrusted = true;
			function112.supportHtml = true;

			const pattern112 = new RegExp("(library)\\(");
			if (pattern112.test(hoverLineText109)) {
				hoverRange109 = document.getWordRangeAtPosition(position, pattern112);
				if (hoverRange109) {
					return new vscode.Hover(function112, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover109);


	let pineHover110 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange110;
			const hoverLineText110 = document.lineAt(position.line).text;

			const function113 = new vscode.MarkdownString(``);
			function113.appendCodeblock("line.delete(id = line) → void");
			function113.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}delete)*`);
			function113.isTrusted = true;
			function113.supportHtml = true;

			const pattern113 = new RegExp("(line\\.delete)\\(");
			if (pattern113.test(hoverLineText110)) {
				hoverRange110 = document.getWordRangeAtPosition(position, pattern113);
				if (hoverRange110) {
					return new vscode.Hover(function113, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover110);


	let pineHover111 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange111;
			const hoverLineText111 = document.lineAt(position.line).text;

			const function114 = new vscode.MarkdownString(``);
			function114.appendCodeblock("line.get_price(id = line, x = int) → float");
			function114.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_price)*`);
			function114.isTrusted = true;
			function114.supportHtml = true;

			const pattern114 = new RegExp("(line\\.get_price)\\(");
			if (pattern114.test(hoverLineText111)) {
				hoverRange111 = document.getWordRangeAtPosition(position, pattern114);
				if (hoverRange111) {
					return new vscode.Hover(function114, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover111);


	let pineHover112 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange112;
			const hoverLineText112 = document.lineAt(position.line).text;

			const function115 = new vscode.MarkdownString(``);
			function115.appendCodeblock("line.get_x1(id = line) → int");
			function115.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_x1)*`);
			function115.isTrusted = true;
			function115.supportHtml = true;

			const pattern115 = new RegExp("(line\\.get_x1)\\(");
			if (pattern115.test(hoverLineText112)) {
				hoverRange112 = document.getWordRangeAtPosition(position, pattern115);
				if (hoverRange112) {
					return new vscode.Hover(function115, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover112);


	let pineHover113 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange113;
			const hoverLineText113 = document.lineAt(position.line).text;

			const function116 = new vscode.MarkdownString(``);
			function116.appendCodeblock("line.get_x2(id = line) → int");
			function116.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_x2)*`);
			function116.isTrusted = true;
			function116.supportHtml = true;

			const pattern116 = new RegExp("(line\\.get_x2)\\(");
			if (pattern116.test(hoverLineText113)) {
				hoverRange113 = document.getWordRangeAtPosition(position, pattern116);
				if (hoverRange113) {
					return new vscode.Hover(function116, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover113);


	let pineHover114 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange114;
			const hoverLineText114 = document.lineAt(position.line).text;

			const function117 = new vscode.MarkdownString(``);
			function117.appendCodeblock("line.get_y1(id = line) → float");
			function117.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_y1)*`);
			function117.isTrusted = true;
			function117.supportHtml = true;

			const pattern117 = new RegExp("(line\\.get_y1)\\(");
			if (pattern117.test(hoverLineText114)) {
				hoverRange114 = document.getWordRangeAtPosition(position, pattern117);
				if (hoverRange114) {
					return new vscode.Hover(function117, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover114);


	let pineHover115 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange115;
			const hoverLineText115 = document.lineAt(position.line).text;

			const function118 = new vscode.MarkdownString(``);
			function118.appendCodeblock("line.get_y2(id = line) → float");
			function118.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}get_y2)*`);
			function118.isTrusted = true;
			function118.supportHtml = true;

			const pattern118 = new RegExp("(line\\.get_y2)\\(");
			if (pattern118.test(hoverLineText115)) {
				hoverRange115 = document.getWordRangeAtPosition(position, pattern118);
				if (hoverRange115) {
					return new vscode.Hover(function118, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover115);


	let pineHover116 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange116;
			const hoverLineText116 = document.lineAt(position.line).text;

			const function119 = new vscode.MarkdownString(``);
			function119.appendCodeblock("line.new(x1 = int, y1 = int|float, x2 = int, y2 = int|float, xloc = string, extend = string, color = series color, style = string, width = series int) → series line");
			function119.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}new)*`);
			function119.isTrusted = true;
			function119.supportHtml = true;

			const pattern119 = new RegExp("(line\\.new)\\(");
			if (pattern119.test(hoverLineText116)) {
				hoverRange116 = document.getWordRangeAtPosition(position, pattern119);
				if (hoverRange116) {
					return new vscode.Hover(function119, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover116);


	let pineHover117 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange117;
			const hoverLineText117 = document.lineAt(position.line).text;

			const function120 = new vscode.MarkdownString(``);
			function120.appendCodeblock("line.set_color(id = line, color = color) → void");
			function120.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_color)*`);
			function120.isTrusted = true;
			function120.supportHtml = true;

			const pattern120 = new RegExp("(line\\.set_color)\\(");
			if (pattern120.test(hoverLineText117)) {
				hoverRange117 = document.getWordRangeAtPosition(position, pattern120);
				if (hoverRange117) {
					return new vscode.Hover(function120, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover117);


	let pineHover118 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange118;
			const hoverLineText118 = document.lineAt(position.line).text;

			const function121 = new vscode.MarkdownString(``);
			function121.appendCodeblock("line.set_extend(id = line, extend = string) → void");
			function121.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_extend)*`);
			function121.isTrusted = true;
			function121.supportHtml = true;

			const pattern121 = new RegExp("(line\\.set_extend)\\(");
			if (pattern121.test(hoverLineText118)) {
				hoverRange118 = document.getWordRangeAtPosition(position, pattern121);
				if (hoverRange118) {
					return new vscode.Hover(function121, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover118);


	let pineHover119 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange119;
			const hoverLineText119 = document.lineAt(position.line).text;

			const function122 = new vscode.MarkdownString(``);
			function122.appendCodeblock("line.set_style(id = line, style = string) → void");
			function122.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_style)*`);
			function122.isTrusted = true;
			function122.supportHtml = true;

			const pattern122 = new RegExp("(line\\.set_style)\\(");
			if (pattern122.test(hoverLineText119)) {
				hoverRange119 = document.getWordRangeAtPosition(position, pattern122);
				if (hoverRange119) {
					return new vscode.Hover(function122, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover119);


	let pineHover120 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange120;
			const hoverLineText120 = document.lineAt(position.line).text;

			const function123 = new vscode.MarkdownString(``);
			function123.appendCodeblock("line.set_width(id = line, width = int) → void");
			function123.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_width)*`);
			function123.isTrusted = true;
			function123.supportHtml = true;

			const pattern123 = new RegExp("(line\\.set_width)\\(");
			if (pattern123.test(hoverLineText120)) {
				hoverRange120 = document.getWordRangeAtPosition(position, pattern123);
				if (hoverRange120) {
					return new vscode.Hover(function123, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover120);


	let pineHover121 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange121;
			const hoverLineText121 = document.lineAt(position.line).text;

			const function124 = new vscode.MarkdownString(``);
			function124.appendCodeblock("line.set_x1(id = line, x = int) → void");
			function124.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_x1)*`);
			function124.isTrusted = true;
			function124.supportHtml = true;

			const pattern124 = new RegExp("(line\\.set_x1)\\(");
			if (pattern124.test(hoverLineText121)) {
				hoverRange121 = document.getWordRangeAtPosition(position, pattern124);
				if (hoverRange121) {
					return new vscode.Hover(function124, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover121);

	let pineHover122 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange122;
			const hoverLineText122 = document.lineAt(position.line).text;

			const function125 = new vscode.MarkdownString(``);
			function125.appendCodeblock("line.set_x2(id = line, x = int) → void");
			function125.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_x2)*`);
			function125.isTrusted = true;
			function125.supportHtml = true;

			const pattern125 = new RegExp("(line\\.set_x2)\\(");
			if (pattern125.test(hoverLineText122)) {
				hoverRange122 = document.getWordRangeAtPosition(position, pattern125);
				if (hoverRange122) {
					return new vscode.Hover(function125, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover122);


	let pineHover123 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange123;
			const hoverLineText123 = document.lineAt(position.line).text;

			const function126 = new vscode.MarkdownString(``);
			function126.appendCodeblock("line.set_y2(id = line, x = int) → void");
			function126.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_y2)*`);
			function126.isTrusted = true;
			function126.supportHtml = true;

			const pattern126 = new RegExp("(line\\.set_y2)\\(");
			if (pattern126.test(hoverLineText123)) {
				hoverRange123 = document.getWordRangeAtPosition(position, pattern126);
				if (hoverRange123) {
					return new vscode.Hover(function126, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover123);


	let pineHover124 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange124;
			const hoverLineText124 = document.lineAt(position.line).text;

			const function127 = new vscode.MarkdownString(``);
			function127.appendCodeblock("line.set_xloc(id = line, x1 = int, x2 = int, xloc = string) → void");
			function127.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_xloc)*`);
			function127.isTrusted = true;
			function127.supportHtml = true;

			const pattern127 = new RegExp("(line\\.set_xloc)\\(");
			if (pattern127.test(hoverLineText124)) {
				hoverRange124 = document.getWordRangeAtPosition(position, pattern127);
				if (hoverRange124) {
					return new vscode.Hover(function127, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover124);


	let pineHover125 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange125;
			const hoverLineText125 = document.lineAt(position.line).text;

			const function128 = new vscode.MarkdownString(``);
			function128.appendCodeblock("line.set_xy1(id = line, x = int, y = int|float) → void");
			function128.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_xy1)*`);
			function128.isTrusted = true;
			function128.supportHtml = true;

			const pattern128 = new RegExp("(line\\.set_xy1)\\(");
			if (pattern128.test(hoverLineText125)) {
				hoverRange125 = document.getWordRangeAtPosition(position, pattern128);
				if (hoverRange125) {
					return new vscode.Hover(function128, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover125);


	let pineHover126 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange126;
			const hoverLineText126 = document.lineAt(position.line).text;

			const function129 = new vscode.MarkdownString(``);
			function129.appendCodeblock("line.set_xy2(id = line, x = int, y = int|float) → void");
			function129.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_xy2)*`);
			function129.isTrusted = true;
			function129.supportHtml = true;

			const pattern129 = new RegExp("(line\\.set_xy2)\\(");
			if (pattern129.test(hoverLineText126)) {
				hoverRange126 = document.getWordRangeAtPosition(position, pattern129);
				if (hoverRange126) {
					return new vscode.Hover(function129, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover126);


	let pineHover127 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange127;
			const hoverLineText127 = document.lineAt(position.line).text;

			const function130 = new vscode.MarkdownString(``);
			function130.appendCodeblock("line.set_y1(id = line, y = int|float) → void");
			function130.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_y1)*`);
			function130.isTrusted = true;
			function130.supportHtml = true;

			const pattern130 = new RegExp("(line\\.set_y1)\\(");
			if (pattern130.test(hoverLineText127)) {
				hoverRange127 = document.getWordRangeAtPosition(position, pattern130);
				if (hoverRange127) {
					return new vscode.Hover(function130, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover127);


	let pineHover128 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange128;
			const hoverLineText128 = document.lineAt(position.line).text;

			const function131 = new vscode.MarkdownString(``);
			function131.appendCodeblock("line.set_y2(id = line, y = int|float) → void");
			function131.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_line{dot}set_y2)*`);
			function131.isTrusted = true;
			function131.supportHtml = true;

			const pattern131 = new RegExp("(line\\.set_y2)\\(");
			if (pattern131.test(hoverLineText128)) {
				hoverRange128 = document.getWordRangeAtPosition(position, pattern131);
				if (hoverRange128) {
					return new vscode.Hover(function131, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover128);


	let pineHover129 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange129;
			const hoverLineText129 = document.lineAt(position.line).text;

			const function132 = new vscode.MarkdownString(``);
			function132.appendCodeblock("math.abs(number = int|float) → simple|input|const|series int|float");
			function132.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}abs)*`);
			function132.isTrusted = true;
			function132.supportHtml = true;

			const pattern132 = new RegExp("(math\\.abs)\\(");
			if (pattern132.test(hoverLineText129)) {
				hoverRange129 = document.getWordRangeAtPosition(position, pattern132);
				if (hoverRange129) {
					return new vscode.Hover(function132, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover129);


	let pineHover130 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange130;
			const hoverLineText130 = document.lineAt(position.line).text;

			const function133 = new vscode.MarkdownString(``);
			function133.appendCodeblock("math.acos(angle = int|float) → simple|input|const|series float");
			function133.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}acos)*`);
			function133.isTrusted = true;
			function133.supportHtml = true;

			const pattern133 = new RegExp("(math\\.acos)\\(");
			if (pattern133.test(hoverLineText130)) {
				hoverRange130 = document.getWordRangeAtPosition(position, pattern133);
				if (hoverRange130) {
					return new vscode.Hover(function133, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover130);


	let pineHover131 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange131;
			const hoverLineText131 = document.lineAt(position.line).text;

			const function134 = new vscode.MarkdownString(``);
			function134.appendCodeblock("math.asin(angle = int|float) → simple|input|const|series float");
			function134.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}asin)*`);
			function134.isTrusted = true;
			function134.supportHtml = true;

			const pattern134 = new RegExp("(math\\.asin)\\(");
			if (pattern134.test(hoverLineText131)) {
				hoverRange131 = document.getWordRangeAtPosition(position, pattern134);
				if (hoverRange131) {
					return new vscode.Hover(function134, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover131);


	let pineHover132 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange132;
			const hoverLineText132 = document.lineAt(position.line).text;

			const function135 = new vscode.MarkdownString(``);
			function135.appendCodeblock("math.atan(angle = int|float) → simple|input|const|series float");
			function135.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}atan)*`);
			function135.isTrusted = true;
			function135.supportHtml = true;

			const pattern135 = new RegExp("(math\\.atan)\\(");
			if (pattern135.test(hoverLineText132)) {
				hoverRange132 = document.getWordRangeAtPosition(position, pattern135);
				if (hoverRange132) {
					return new vscode.Hover(function135, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover132);


	let pineHover133 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange133;
			const hoverLineText133 = document.lineAt(position.line).text;

			const function136 = new vscode.MarkdownString(``);
			function136.appendCodeblock("math.avg(number0 = int|float, number1 = int|float, number2 = int|float, ...) → simple float");
			function136.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}avg)*`);
			function136.isTrusted = true;
			function136.supportHtml = true;

			const pattern136 = new RegExp("(math\\.avg)\\(");
			if (pattern136.test(hoverLineText133)) {
				hoverRange133 = document.getWordRangeAtPosition(position, pattern136);
				if (hoverRange133) {
					return new vscode.Hover(function136, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover133);


	let pineHover134 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange134;
			const hoverLineText134 = document.lineAt(position.line).text;

			const function137 = new vscode.MarkdownString(``);
			function137.appendCodeblock("math.ceil(number = int|float) → simple|input|const|series float");
			function137.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}ceil)*`);
			function137.isTrusted = true;
			function137.supportHtml = true;

			const pattern137 = new RegExp("(math\\.ceil)\\(");
			if (pattern137.test(hoverLineText134)) {
				hoverRange134 = document.getWordRangeAtPosition(position, pattern137);
				if (hoverRange134) {
					return new vscode.Hover(function137, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover134);


	let pineHover135 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange135;
			const hoverLineText135 = document.lineAt(position.line).text;

			const function138 = new vscode.MarkdownString(``);
			function138.appendCodeblock("math.cos(angle = int|float) → simple|input|const|series float");
			function138.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}cos)*`);
			function138.isTrusted = true;
			function138.supportHtml = true;

			const pattern138 = new RegExp("(math\\.cos)\\(");
			if (pattern138.test(hoverLineText135)) {
				hoverRange135 = document.getWordRangeAtPosition(position, pattern138);
				if (hoverRange135) {
					return new vscode.Hover(function138, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover135);


	let pineHover136 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange136;
			const hoverLineText136 = document.lineAt(position.line).text;

			const function139 = new vscode.MarkdownString(``);
			function139.appendCodeblock("math.exp  (number = int|float) → simple|input|const|series float");
			function139.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}exp  )*`);
			function139.isTrusted = true;
			function139.supportHtml = true;

			const pattern139 = new RegExp("(math\\.exp  )\\(");
			if (pattern139.test(hoverLineText136)) {
				hoverRange136 = document.getWordRangeAtPosition(position, pattern139);
				if (hoverRange136) {
					return new vscode.Hover(function139, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover136);


	let pineHover137 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange137;
			const hoverLineText137 = document.lineAt(position.line).text;

			const function140 = new vscode.MarkdownString(``);
			function140.appendCodeblock("math.floor  (number = int|float) → simple|input|const|series float");
			function140.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}floor  )*`);
			function140.isTrusted = true;
			function140.supportHtml = true;

			const pattern140 = new RegExp("(math\\.floor  )\\(");
			if (pattern140.test(hoverLineText137)) {
				hoverRange137 = document.getWordRangeAtPosition(position, pattern140);
				if (hoverRange137) {
					return new vscode.Hover(function140, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover137);


	let pineHover138 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange138;
			const hoverLineText138 = document.lineAt(position.line).text;

			const function141 = new vscode.MarkdownString(``);
			function141.appendCodeblock("math.log  (number = int|float) → simple|input|const|series float");
			function141.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}log  )*`);
			function141.isTrusted = true;
			function141.supportHtml = true;

			const pattern141 = new RegExp("(math\\.log  )\\(");
			if (pattern141.test(hoverLineText138)) {
				hoverRange138 = document.getWordRangeAtPosition(position, pattern141);
				if (hoverRange138) {
					return new vscode.Hover(function141, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover138);


	let pineHover139 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange139;
			const hoverLineText139 = document.lineAt(position.line).text;

			const function142 = new vscode.MarkdownString(``);
			function142.appendCodeblock("math.log10(number = int|float) → simple|input|const|series float");
			function142.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}log10)*`);
			function142.isTrusted = true;
			function142.supportHtml = true;

			const pattern142 = new RegExp("(math\\.log10)\\(");
			if (pattern142.test(hoverLineText139)) {
				hoverRange139 = document.getWordRangeAtPosition(position, pattern142);
				if (hoverRange139) {
					return new vscode.Hover(function142, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover139);


	let pineHover140 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange140;
			const hoverLineText140 = document.lineAt(position.line).text;

			const function143 = new vscode.MarkdownString(``);
			function143.appendCodeblock("math.max(number0 = int|float, number1 = int|float, number2 = int|float, ...) → simple|input|const|series int|float");
			function143.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}max)*`);
			function143.isTrusted = true;
			function143.supportHtml = true;

			const pattern143 = new RegExp("(math\\.max)\\(");
			if (pattern143.test(hoverLineText140)) {
				hoverRange140 = document.getWordRangeAtPosition(position, pattern143);
				if (hoverRange140) {
					return new vscode.Hover(function143, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover140);


	let pineHover141 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange141;
			const hoverLineText141 = document.lineAt(position.line).text;

			const function144 = new vscode.MarkdownString(``);
			function144.appendCodeblock("math.min(number0 = int|float, number1 = int|float, number2 = int|float, ...) → simple|input|const|series int|float");
			function144.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}min)*`);
			function144.isTrusted = true;
			function144.supportHtml = true;

			const pattern144 = new RegExp("(math\\.min)\\(");
			if (pattern144.test(hoverLineText141)) {
				hoverRange141 = document.getWordRangeAtPosition(position, pattern144);
				if (hoverRange141) {
					return new vscode.Hover(function144, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover141);


	let pineHover142 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange142;
			const hoverLineText142 = document.lineAt(position.line).text;

			const function145 = new vscode.MarkdownString(``);
			function145.appendCodeblock("math.pow(base = int|float, exponent = int|float) → series float");
			function145.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}pow)*`);
			function145.isTrusted = true;
			function145.supportHtml = true;

			const pattern145 = new RegExp("(math\\.pow)\\(");
			if (pattern145.test(hoverLineText142)) {
				hoverRange142 = document.getWordRangeAtPosition(position, pattern145);
				if (hoverRange142) {
					return new vscode.Hover(function145, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover142);


	let pineHover143 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange143;
			const hoverLineText143 = document.lineAt(position.line).text;

			const function146 = new vscode.MarkdownString(``);
			function146.appendCodeblock("math.random(min = int|float, max = int|float, seed = int) → series float");
			function146.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}random)*`);
			function146.isTrusted = true;
			function146.supportHtml = true;

			const pattern146 = new RegExp("(math\\.random)\\(");
			if (pattern146.test(hoverLineText143)) {
				hoverRange143 = document.getWordRangeAtPosition(position, pattern146);
				if (hoverRange143) {
					return new vscode.Hover(function146, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover143);


	let pineHover144 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange144;
			const hoverLineText144 = document.lineAt(position.line).text;

			const function147 = new vscode.MarkdownString(``);
			function147.appendCodeblock("math.round(number = int|float, precision = int) → simple|input|const|series int|float");
			function147.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}round)*`);
			function147.isTrusted = true;
			function147.supportHtml = true;

			const pattern147 = new RegExp("(math\\.round)\\(");
			if (pattern147.test(hoverLineText144)) {
				hoverRange144 = document.getWordRangeAtPosition(position, pattern147);
				if (hoverRange144) {
					return new vscode.Hover(function147, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover144);


	let pineHover145 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange145;
			const hoverLineText145 = document.lineAt(position.line).text;

			const function148 = new vscode.MarkdownString(``);
			function148.appendCodeblock("math.round_to_mintick(number = int|float) → float");
			function148.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}round_to_mintick)*`);
			function148.isTrusted = true;
			function148.supportHtml = true;

			const pattern148 = new RegExp("(math\\.round_to_mintick)\\(");
			if (pattern148.test(hoverLineText145)) {
				hoverRange145 = document.getWordRangeAtPosition(position, pattern148);
				if (hoverRange145) {
					return new vscode.Hover(function148, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover145);


	let pineHover146 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange146;
			const hoverLineText146 = document.lineAt(position.line).text;

			const function149 = new vscode.MarkdownString(``);
			function149.appendCodeblock("math.sign(number = int|float) → simple|input|const|series float");
			function149.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}sign)*`);
			function149.isTrusted = true;
			function149.supportHtml = true;

			const pattern149 = new RegExp("(math\\.sign)\\(");
			if (pattern149.test(hoverLineText146)) {
				hoverRange146 = document.getWordRangeAtPosition(position, pattern149);
				if (hoverRange146) {
					return new vscode.Hover(function149, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover146);


	let pineHover147 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange147;
			const hoverLineText147 = document.lineAt(position.line).text;

			const function150 = new vscode.MarkdownString(``);
			function150.appendCodeblock("math.sin(angle = int|float)  → simple|input|const|series float");
			function150.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}sin)*`);
			function150.isTrusted = true;
			function150.supportHtml = true;

			const pattern150 = new RegExp("(math\\.sin)\\(");
			if (pattern150.test(hoverLineText147)) {
				hoverRange147 = document.getWordRangeAtPosition(position, pattern150);
				if (hoverRange147) {
					return new vscode.Hover(function150, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover147);


	let pineHover148 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange148;
			const hoverLineText148 = document.lineAt(position.line).text;

			const function151 = new vscode.MarkdownString(``);
			function151.appendCodeblock("math.sqrt(number = int|float) → simple|input|const|series float");
			function151.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}sqrt)*`);
			function151.isTrusted = true;
			function151.supportHtml = true;

			const pattern151 = new RegExp("(math\\.sqrt)\\(");
			if (pattern151.test(hoverLineText148)) {
				hoverRange148 = document.getWordRangeAtPosition(position, pattern151);
				if (hoverRange148) {
					return new vscode.Hover(function151, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover148);


	let pineHover149 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange149;
			const hoverLineText149 = document.lineAt(position.line).text;

			const function152 = new vscode.MarkdownString(``);
			function152.appendCodeblock("math.sum(source = int|float, length = int) → series float");
			function152.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}sum)*`);
			function152.isTrusted = true;
			function152.supportHtml = true;

			const pattern152 = new RegExp("(math\\.sum)\\(");
			if (pattern152.test(hoverLineText149)) {
				hoverRange149 = document.getWordRangeAtPosition(position, pattern152);
				if (hoverRange149) {
					return new vscode.Hover(function152, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover149);


	let pineHover150 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange150;
			const hoverLineText150 = document.lineAt(position.line).text;

			const function153 = new vscode.MarkdownString(``);
			function153.appendCodeblock("math.tan(angle = int|float) → series float");
			function153.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}tan)*`);
			function153.isTrusted = true;
			function153.supportHtml = true;

			const pattern153 = new RegExp("(math\\.tan)\\(");
			if (pattern153.test(hoverLineText150)) {
				hoverRange150 = document.getWordRangeAtPosition(position, pattern153);
				if (hoverRange150) {
					return new vscode.Hover(function153, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover150);


	let pineHover151 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange151;
			const hoverLineText151 = document.lineAt(position.line).text;

			const function154 = new vscode.MarkdownString(``);
			function154.appendCodeblock("math.todegrees(radians = int|float) → series float");
			function154.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}todegrees)*`);
			function154.isTrusted = true;
			function154.supportHtml = true;

			const pattern154 = new RegExp("(math\\.todegrees)\\(");
			if (pattern154.test(hoverLineText151)) {
				hoverRange151 = document.getWordRangeAtPosition(position, pattern154);
				if (hoverRange151) {
					return new vscode.Hover(function154, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover151);


	let pineHover152 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange152;
			const hoverLineText152 = document.lineAt(position.line).text;

			const function155 = new vscode.MarkdownString(``);
			function155.appendCodeblock("math.toradians(degrees = int|float) → series float");
			function155.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_math{dot}toradians)*`);
			function155.isTrusted = true;
			function155.supportHtml = true;

			const pattern155 = new RegExp("(math\\.toradians)\\(");
			if (pattern155.test(hoverLineText152)) {
				hoverRange152 = document.getWordRangeAtPosition(position, pattern155);
				if (hoverRange152) {
					return new vscode.Hover(function155, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover152);


	let pineHover153 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange153;
			const hoverLineText153 = document.lineAt(position.line).text;

			const function156 = new vscode.MarkdownString(``);
			function156.appendCodeblock("max_bars_back(var = int|float|bool|color|label|line, num = litteral int) → void");
			function156.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_max_bars_back)*`);
			function156.isTrusted = true;
			function156.supportHtml = true;

			const pattern156 = new RegExp("(max_bars_back)\\(");
			if (pattern156.test(hoverLineText153)) {
				hoverRange153 = document.getWordRangeAtPosition(position, pattern156);
				if (hoverRange153) {
					return new vscode.Hover(function156, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover153);


	let pineHover154 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange154;
			const hoverLineText154 = document.lineAt(position.line).text;

			const function157 = new vscode.MarkdownString(``);
			function157.appendCodeblock("minute(time = int, timezone = string) → series int");
			function157.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_minute)*`);
			function157.isTrusted = true;
			function157.supportHtml = true;

			const pattern157 = new RegExp("(minute)\\(");
			if (pattern157.test(hoverLineText154)) {
				hoverRange154 = document.getWordRangeAtPosition(position, pattern157);
				if (hoverRange154) {
					return new vscode.Hover(function157, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover154);


	let pineHover155 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange155;
			const hoverLineText155 = document.lineAt(position.line).text;

			const function158 = new vscode.MarkdownString(``);
			function158.appendCodeblock("month(time = int, timezone = string) → series int");
			function158.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_month)*`);
			function158.isTrusted = true;
			function158.supportHtml = true;

			const pattern158 = new RegExp("(month)\\(");
			if (pattern158.test(hoverLineText155)) {
				hoverRange155 = document.getWordRangeAtPosition(position, pattern158);
				if (hoverRange155) {
					return new vscode.Hover(function158, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover155);


	let pineHover156 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange156;
			const hoverLineText156 = document.lineAt(position.line).text;

			const function159 = new vscode.MarkdownString(``);
			function159.appendCodeblock("na(x) → simple|series bool");
			function159.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_na)*`);
			function159.isTrusted = true;
			function159.supportHtml = true;

			const pattern159 = new RegExp("(na)\\(");
			if (pattern159.test(hoverLineText156)) {
				hoverRange156 = document.getWordRangeAtPosition(position, pattern159);
				if (hoverRange156) {
					return new vscode.Hover(function159, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover156);


	let pineHover157 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange157;
			const hoverLineText157 = document.lineAt(position.line).text;

			const function160 = new vscode.MarkdownString(``);
			function160.appendCodeblock("nz(source = int|float|bool|color, replacement = int|float|bool|color) → int|float|bool|color");
			function160.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_nz)*`);
			function160.isTrusted = true;
			function160.supportHtml = true;

			const pattern160 = new RegExp("(nz)\\(");
			if (pattern160.test(hoverLineText157)) {
				hoverRange157 = document.getWordRangeAtPosition(position, pattern160);
				if (hoverRange157) {
					return new vscode.Hover(function160, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover157);


	let pineHover158 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange158;
			const hoverLineText158 = document.lineAt(position.line).text;

			const function161 = new vscode.MarkdownString(``);
			function161.appendCodeblock("plot(series = int|float, title = string, color = color, linewidth = input int, trackprice = bool, histbase = int|float, offset = int, join = bool, editable = bool, show_last = int, display = plot_display) → plot");
			function161.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plot)*`);
			function161.isTrusted = true;
			function161.supportHtml = true;

			const pattern161 = new RegExp("(plot)\\(");
			if (pattern161.test(hoverLineText158)) {
				hoverRange158 = document.getWordRangeAtPosition(position, pattern161);
				if (hoverRange158) {
					return new vscode.Hover(function161, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover158);


	let pineHover159 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange159;
			const hoverLineText159 = document.lineAt(position.line).text;

			const function162 = new vscode.MarkdownString(``);
			function162.appendCodeblock("plotarrow(series = any, title = string, colorup = color, colordown = color, offset = int, minheight = int, maxheight = int, editable = bool, show_last = int, display = plot_display) → void");
			function162.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotarrow)*`);
			function162.isTrusted = true;
			function162.supportHtml = true;

			const pattern162 = new RegExp("(plotarrow)\\(");
			if (pattern162.test(hoverLineText159)) {
				hoverRange159 = document.getWordRangeAtPosition(position, pattern162);
				if (hoverRange159) {
					return new vscode.Hover(function162, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover159);


	let pineHover160 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange160;
			const hoverLineText160 = document.lineAt(position.line).text;

			const function163 = new vscode.MarkdownString(``);
			function163.appendCodeblock("plotbar(open = int|float, high = int|float, low = int|float, close = int|float, title = string, color = color, editable = bool, show_last = input int, display = plot_display) → void");
			function163.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotbar)*`);
			function163.isTrusted = true;
			function163.supportHtml = true;

			const pattern163 = new RegExp("(plotbar)\\(");
			if (pattern163.test(hoverLineText160)) {
				hoverRange160 = document.getWordRangeAtPosition(position, pattern163);
				if (hoverRange160) {
					return new vscode.Hover(function163, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover160);


	let pineHover161 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange161;
			const hoverLineText161 = document.lineAt(position.line).text;

			const function164 = new vscode.MarkdownString(``);
			function164.appendCodeblock("plotcandle(open = int|float, high = int|float, low = int|float, close = int|float, title = string, color = color, wickcolor = color, editable = bool, show_last = input int, bordercolor = color, display = plot_display) → void");
			function164.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotcandle)*`);
			function164.isTrusted = true;
			function164.supportHtml = true;

			const pattern164 = new RegExp("(plotcandle)\\(");
			if (pattern164.test(hoverLineText161)) {
				hoverRange161 = document.getWordRangeAtPosition(position, pattern164);
				if (hoverRange161) {
					return new vscode.Hover(function164, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover161);


	let pineHover162 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange162;
			const hoverLineText162 = document.lineAt(position.line).text;

			const function165 = new vscode.MarkdownString(``);
			function165.appendCodeblock("plotchar(series = bool, title = string, char = string, location = string, color = color, offset = int, text = string, textcolor = color, editable = bool, size = int, show_last = input int, display = plot_display) → void");
			function165.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotchar)*`);
			function165.isTrusted = true;
			function165.supportHtml = true;

			const pattern165 = new RegExp("(plotchar)\\(");
			if (pattern165.test(hoverLineText162)) {
				hoverRange162 = document.getWordRangeAtPosition(position, pattern165);
				if (hoverRange162) {
					return new vscode.Hover(function165, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover162);


	let pineHover163 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange163;
			const hoverLineText163 = document.lineAt(position.line).text;

			const function166 = new vscode.MarkdownString(``);
			function166.appendCodeblock("plotshape(series = bool, title = string, style = string, location = string, color = color, offset = int, text = string, textcolor = color, editable = bool, size = int, show_last = input int, display = plot_display) → void");
			function166.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_plotshape)*`);
			function166.isTrusted = true;
			function166.supportHtml = true;

			const pattern166 = new RegExp("(plotshape)\\(");
			if (pattern166.test(hoverLineText163)) {
				hoverRange163 = document.getWordRangeAtPosition(position, pattern166);
				if (hoverRange163) {
					return new vscode.Hover(function166, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover163);


	let pineHover164 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange164;
			const hoverLineText164 = document.lineAt(position.line).text;

			const function167 = new vscode.MarkdownString(``);
			function167.appendCodeblock("request.dividends(ticker = string, field = string, gaps = built-in, lookahead = built-in, ignore_invalid_symbol = bool) → series float");
			function167.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}dividends)*`);
			function167.isTrusted = true;
			function167.supportHtml = true;

			const pattern167 = new RegExp("(request\\.dividends)\\(");
			if (pattern167.test(hoverLineText164)) {
				hoverRange164 = document.getWordRangeAtPosition(position, pattern167);
				if (hoverRange164) {
					return new vscode.Hover(function167, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover164);


	let pineHover165 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange165;
			const hoverLineText165 = document.lineAt(position.line).text;

			const function168 = new vscode.MarkdownString(``);
			function168.appendCodeblock("request.earnings(ticker = string, field = string, gaps = built-in, lookahead = built-in, ignore_invalid_symbol = bool) → series float");
			function168.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}earnings)*`);
			function168.isTrusted = true;
			function168.supportHtml = true;

			const pattern168 = new RegExp("(request\\.earnings)\\(");
			if (pattern168.test(hoverLineText165)) {
				hoverRange165 = document.getWordRangeAtPosition(position, pattern168);
				if (hoverRange165) {
					return new vscode.Hover(function168, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover165);


	let pineHover166 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange166;
			const hoverLineText166 = document.lineAt(position.line).text;

			const function169 = new vscode.MarkdownString(``);
			function169.appendCodeblock("request.financial(symbol = string, financial_id = string, period = string, gaps = barmerge_gaps, ignore_invalid_symbol = bool, currency = input string) → series float");
			function169.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}financial)*`);
			function169.isTrusted = true;
			function169.supportHtml = true;

			const pattern169 = new RegExp("(request\\.financial)\\(");
			if (pattern169.test(hoverLineText166)) {
				hoverRange166 = document.getWordRangeAtPosition(position, pattern169);
				if (hoverRange166) {
					return new vscode.Hover(function169, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover166);


	let pineHover167 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange167;
			const hoverLineText167 = document.lineAt(position.line).text;

			const function170 = new vscode.MarkdownString(``);
			function170.appendCodeblock("request.quandl(ticker = string, gaps = built-in, index = int, ignore_invalid_symbol = bool) → series float");
			function170.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}quandl)*`);
			function170.isTrusted = true;
			function170.supportHtml = true;

			const pattern170 = new RegExp("(request\\.quandl)\\(");
			if (pattern170.test(hoverLineText167)) {
				hoverRange167 = document.getWordRangeAtPosition(position, pattern170);
				if (hoverRange167) {
					return new vscode.Hover(function170, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover167);


	let pineHover168 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange168;
			const hoverLineText168 = document.lineAt(position.line).text;

			const function171 = new vscode.MarkdownString(``);
			function171.appendCodeblock("request.security(symbol = string, timeframe = string, expression = any, gaps = built-in, lookahead = built-in, ignore_invalid_symbol = bool) → series float|int|bool|color");
			function171.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}security)*`);
			function171.isTrusted = true;
			function171.supportHtml = true;

			const pattern171 = new RegExp("(request\\.security)\\(");
			if (pattern171.test(hoverLineText168)) {
				hoverRange168 = document.getWordRangeAtPosition(position, pattern171);
				if (hoverRange168) {
					return new vscode.Hover(function171, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover168);


	let pineHover169 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange169;
			const hoverLineText169 = document.lineAt(position.line).text;

			const function172 = new vscode.MarkdownString(``);
			function172.appendCodeblock("request.splits(ticker = string, field = string, gaps = const, lookahead = const, ignore_invalid_symbol = bool) → series float");
			function172.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_request{dot}splits)*`);
			function172.isTrusted = true;
			function172.supportHtml = true;

			const pattern172 = new RegExp("(request\\.splits)\\(");
			if (pattern172.test(hoverLineText169)) {
				hoverRange169 = document.getWordRangeAtPosition(position, pattern172);
				if (hoverRange169) {
					return new vscode.Hover(function172, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover169);


	let pineHover170 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange170;
			const hoverLineText170 = document.lineAt(position.line).text;

			const function173 = new vscode.MarkdownString(``);
			function173.appendCodeblock("runtime.error(message = string) → void");
			function173.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_runtime{dot}error)*`);
			function173.isTrusted = true;
			function173.supportHtml = true;

			const pattern173 = new RegExp("(runtime\\.error)\\(");
			if (pattern173.test(hoverLineText170)) {
				hoverRange170 = document.getWordRangeAtPosition(position, pattern173);
				if (hoverRange170) {
					return new vscode.Hover(function173, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover170);


	let pineHover171 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange171;
			const hoverLineText171 = document.lineAt(position.line).text;

			const function174 = new vscode.MarkdownString(``);
			function174.appendCodeblock("second(time = int, timezone = string) → series int");
			function174.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_second)*`);
			function174.isTrusted = true;
			function174.supportHtml = true;

			const pattern174 = new RegExp("(second)\\(");
			if (pattern174.test(hoverLineText171)) {
				hoverRange171 = document.getWordRangeAtPosition(position, pattern174);
				if (hoverRange171) {
					return new vscode.Hover(function174, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover171);


	let pineHover172 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange172;
			const hoverLineText172 = document.lineAt(position.line).text;

			const function175 = new vscode.MarkdownString(``);
			function175.appendCodeblock("str.format(formatString = string, arg0 = any series, arg1 = any series, ...) → simple string");
			function175.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}format)*`);
			function175.isTrusted = true;
			function175.supportHtml = true;

			const pattern175 = new RegExp("(str\\.format)\\(");
			if (pattern175.test(hoverLineText172)) {
				hoverRange172 = document.getWordRangeAtPosition(position, pattern175);
				if (hoverRange172) {
					return new vscode.Hover(function175, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover172);


	let pineHover173 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange173;
			const hoverLineText173 = document.lineAt(position.line).text;

			const function176 = new vscode.MarkdownString(``);
			function176.appendCodeblock("str.length(string = string) → const int|simple|series");
			function176.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}length)*`);
			function176.isTrusted = true;
			function176.supportHtml = true;

			const pattern176 = new RegExp("(str\\.length)\\(");
			if (pattern176.test(hoverLineText173)) {
				hoverRange173 = document.getWordRangeAtPosition(position, pattern176);
				if (hoverRange173) {
					return new vscode.Hover(function176, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover173);


	let pineHover174 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange174;
			const hoverLineText174 = document.lineAt(position.line).text;

			const function177 = new vscode.MarkdownString(``);
			function177.appendCodeblock("str.replace_all(source = string, target = string, replacement = string) → series string");
			function177.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}replace_all)*`);
			function177.isTrusted = true;
			function177.supportHtml = true;

			const pattern177 = new RegExp("(str\\.replace_all)\\(");
			if (pattern177.test(hoverLineText174)) {
				hoverRange174 = document.getWordRangeAtPosition(position, pattern177);
				if (hoverRange174) {
					return new vscode.Hover(function177, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover174);


	let pineHover175 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange175;
			const hoverLineText175 = document.lineAt(position.line).text;

			const function178 = new vscode.MarkdownString(``);
			function178.appendCodeblock("str.split(string = string, separator = string) → string[]");
			function178.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}split)*`);
			function178.isTrusted = true;
			function178.supportHtml = true;

			const pattern178 = new RegExp("(str\\.split)\\(");
			if (pattern178.test(hoverLineText175)) {
				hoverRange175 = document.getWordRangeAtPosition(position, pattern178);
				if (hoverRange175) {
					return new vscode.Hover(function178, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover175);


	let pineHover176 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange176;
			const hoverLineText176 = document.lineAt(position.line).text;

			const function179 = new vscode.MarkdownString(``);
			function179.appendCodeblock("str.tonumber(string = string) → series float");
			function179.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}tonumber)*`);
			function179.isTrusted = true;
			function179.supportHtml = true;

			const pattern179 = new RegExp("(str\\.tonumber)\\(");
			if (pattern179.test(hoverLineText176)) {
				hoverRange176 = document.getWordRangeAtPosition(position, pattern179);
				if (hoverRange176) {
					return new vscode.Hover(function179, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover176);


	let pineHover177 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange177;
			const hoverLineText177 = document.lineAt(position.line).text;

			const function180 = new vscode.MarkdownString(``);
			function180.appendCodeblock("str.tostring(value = any series, format = string) → simple|series string");
			function180.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_str{dot}tostring)*`);
			function180.isTrusted = true;
			function180.supportHtml = true;

			const pattern180 = new RegExp("(str\\.tostring)\\(");
			if (pattern180.test(hoverLineText177)) {
				hoverRange177 = document.getWordRangeAtPosition(position, pattern180);
				if (hoverRange177) {
					return new vscode.Hover(function180, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover177);


	let pineHover178 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange178;
			const hoverLineText178 = document.lineAt(position.line).text;

			const function181 = new vscode.MarkdownString(``);
			function181.appendCodeblock("strategy(title, shorttitle, overlay, format, precision, scale, pyramiding, calc_on_order_fills, calc_on_every_tick, max_bars_back, backtest_fill_limits_assumption, default_qty_type, default_qty_value, initial_capital, currency, slippage, commission_type, commission_value, process_orders_on_close, close_entries_rule, margin_long, margin_short, explicit_plot_zorder, max_lines_count, max_labels_count, max_boxes_count) → void");
			function181.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy)*`);
			function181.isTrusted = true;
			function181.supportHtml = true;

			const pattern181 = new RegExp("(strategy)\\(");
			if (pattern181.test(hoverLineText178)) {
				hoverRange178 = document.getWordRangeAtPosition(position, pattern181);
				if (hoverRange178) {
					return new vscode.Hover(function181, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover178);


	let pineHover179 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange179;
			const hoverLineText179 = document.lineAt(position.line).text;

			const function182 = new vscode.MarkdownString(``);
			function182.appendCodeblock("strategy.cancel(id = string, when = bool) → series void");
			function182.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}cancel)*`);
			function182.isTrusted = true;
			function182.supportHtml = true;

			const pattern182 = new RegExp("(strategy\\.cancel)\\(");
			if (pattern182.test(hoverLineText179)) {
				hoverRange179 = document.getWordRangeAtPosition(position, pattern182);
				if (hoverRange179) {
					return new vscode.Hover(function182, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover179);


	let pineHover180 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange180;
			const hoverLineText180 = document.lineAt(position.line).text;

			const function183 = new vscode.MarkdownString(``);
			function183.appendCodeblock("strategy.cancel_all(when = bool) → series void");
			function183.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}cancel_all)*`);
			function183.isTrusted = true;
			function183.supportHtml = true;

			const pattern183 = new RegExp("(strategy\\.cancel_all)\\(");
			if (pattern183.test(hoverLineText180)) {
				hoverRange180 = document.getWordRangeAtPosition(position, pattern183);
				if (hoverRange180) {
					return new vscode.Hover(function183, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover180);


	let pineHover181 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange181;
			const hoverLineText181 = document.lineAt(position.line).text;

			const function184 = new vscode.MarkdownString(``);
			function184.appendCodeblock("strategy.close(id = string, when = bool, comment = string, qty = int|float, qty_percent = int|float, alert_message = string) → void");
			function184.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}close)*`);
			function184.isTrusted = true;
			function184.supportHtml = true;

			const pattern184 = new RegExp("(strategy\\.close)\\(");
			if (pattern184.test(hoverLineText181)) {
				hoverRange181 = document.getWordRangeAtPosition(position, pattern184);
				if (hoverRange181) {
					return new vscode.Hover(function184, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover181);


	let pineHover182 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange182;
			const hoverLineText182 = document.lineAt(position.line).text;

			const function185 = new vscode.MarkdownString(``);
			function185.appendCodeblock("strategy.close_all(when = bool, comment = string, alert_message = string) → void");
			function185.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}close_all)*`);
			function185.isTrusted = true;
			function185.supportHtml = true;

			const pattern185 = new RegExp("(strategy\\.close_all)\\(");
			if (pattern185.test(hoverLineText182)) {
				hoverRange182 = document.getWordRangeAtPosition(position, pattern185);
				if (hoverRange182) {
					return new vscode.Hover(function185, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover182);


	let pineHover183 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange183;
			const hoverLineText183 = document.lineAt(position.line).text;

			const function186 = new vscode.MarkdownString(``);
			function186.appendCodeblock("strategy.closedtrades.commission(trade_num = int) → series float");
			function186.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function186.isTrusted = true;
			function186.supportHtml = true;

			const pattern186 = new RegExp("(strategy\\.closedtrades\\.commission)\\(");
			if (pattern186.test(hoverLineText183)) {
				hoverRange183 = document.getWordRangeAtPosition(position, pattern186);
				if (hoverRange183) {
					return new vscode.Hover(function186, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover183);


	let pineHover184 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange184;
			const hoverLineText184 = document.lineAt(position.line).text;

			const function187 = new vscode.MarkdownString(``);
			function187.appendCodeblock("strategy.closedtrades.entry_bar_index(trade_num = int) → series int");
			function187.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function187.isTrusted = true;
			function187.supportHtml = true;

			const pattern187 = new RegExp("(strategy\\.closedtrades\\.entry_bar_index)\\(");
			if (pattern187.test(hoverLineText184)) {
				hoverRange184 = document.getWordRangeAtPosition(position, pattern187);
				if (hoverRange184) {
					return new vscode.Hover(function187, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover184);


	let pineHover185 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange185;
			const hoverLineText185 = document.lineAt(position.line).text;

			const function188 = new vscode.MarkdownString(``);
			function188.appendCodeblock("strategy.closedtrades.entry_price(trade_num = int) → series int");
			function188.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function188.isTrusted = true;
			function188.supportHtml = true;

			const pattern188 = new RegExp("(strategy\\.closedtrades\\.entry_price)\\(");
			if (pattern188.test(hoverLineText185)) {
				hoverRange185 = document.getWordRangeAtPosition(position, pattern188);
				if (hoverRange185) {
					return new vscode.Hover(function188, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover185);


	let pineHover186 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange186;
			const hoverLineText186 = document.lineAt(position.line).text;

			const function189 = new vscode.MarkdownString(``);
			function189.appendCodeblock("strategy.closedtrades.entry_time(trade_num = int) → series int");
			function189.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function189.isTrusted = true;
			function189.supportHtml = true;

			const pattern189 = new RegExp("(strategy\\.closedtrades\\.entry_time)\\(");
			if (pattern189.test(hoverLineText186)) {
				hoverRange186 = document.getWordRangeAtPosition(position, pattern189);
				if (hoverRange186) {
					return new vscode.Hover(function189, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover186);


	let pineHover187 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange187;
			const hoverLineText187 = document.lineAt(position.line).text;

			const function190 = new vscode.MarkdownString(``);
			function190.appendCodeblock("strategy.closedtrades.exit_bar_index(trade_num = int) → series int");
			function190.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function190.isTrusted = true;
			function190.supportHtml = true;

			const pattern190 = new RegExp("(strategy\\.closedtrades\\.exit_bar_index)\\(");
			if (pattern190.test(hoverLineText187)) {
				hoverRange187 = document.getWordRangeAtPosition(position, pattern190);
				if (hoverRange187) {
					return new vscode.Hover(function190, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover187);


	let pineHover188 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange188;
			const hoverLineText188 = document.lineAt(position.line).text;

			const function191 = new vscode.MarkdownString(``);
			function191.appendCodeblock("strategy.closedtrades.exit_price(trade_num = int) → series float");
			function191.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function191.isTrusted = true;
			function191.supportHtml = true;

			const pattern191 = new RegExp("(strategy\\.closedtrades\\.exit_price)\\(");
			if (pattern191.test(hoverLineText188)) {
				hoverRange188 = document.getWordRangeAtPosition(position, pattern191);
				if (hoverRange188) {
					return new vscode.Hover(function191, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover188);


	let pineHover189 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange189;
			const hoverLineText189 = document.lineAt(position.line).text;

			const function192 = new vscode.MarkdownString(``);
			function192.appendCodeblock("strategy.closedtrades.exit_time(trade_num = int) → series int");
			function192.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function192.isTrusted = true;
			function192.supportHtml = true;

			const pattern192 = new RegExp("(strategy\\.closedtrades\\.exit_time)\\(");
			if (pattern192.test(hoverLineText189)) {
				hoverRange189 = document.getWordRangeAtPosition(position, pattern192);
				if (hoverRange189) {
					return new vscode.Hover(function192, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover189);


	let pineHover190 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange190;
			const hoverLineText190 = document.lineAt(position.line).text;

			const function193 = new vscode.MarkdownString(``);
			function193.appendCodeblock("strategy.closedtrades.max_drawdown(trade_num = int) → series float");
			function193.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function193.isTrusted = true;
			function193.supportHtml = true;

			const pattern193 = new RegExp("(strategy\\.closedtrades\\.max_drawdown)\\(");
			if (pattern193.test(hoverLineText190)) {
				hoverRange190 = document.getWordRangeAtPosition(position, pattern193);
				if (hoverRange190) {
					return new vscode.Hover(function193, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover190);


	let pineHover191 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange191;
			const hoverLineText191 = document.lineAt(position.line).text;

			const function194 = new vscode.MarkdownString(``);
			function194.appendCodeblock("strategy.closedtrades.max_runup(trade_num = int) → series float");
			function194.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function194.isTrusted = true;
			function194.supportHtml = true;

			const pattern194 = new RegExp("(strategy\\.closedtrades\\.max_runup)\\(");
			if (pattern194.test(hoverLineText191)) {
				hoverRange191 = document.getWordRangeAtPosition(position, pattern194);
				if (hoverRange191) {
					return new vscode.Hover(function194, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover191);


	let pineHover192 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange192;
			const hoverLineText192 = document.lineAt(position.line).text;

			const function195 = new vscode.MarkdownString(``);
			function195.appendCodeblock("strategy.closedtrades.profit(trade_num = int) → series float");
			function195.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function195.isTrusted = true;
			function195.supportHtml = true;

			const pattern195 = new RegExp("(strategy\\.closedtrades\\.profit)\\(");
			if (pattern195.test(hoverLineText192)) {
				hoverRange192 = document.getWordRangeAtPosition(position, pattern195);
				if (hoverRange192) {
					return new vscode.Hover(function195, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover192);


	let pineHover193 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange193;
			const hoverLineText193 = document.lineAt(position.line).text;

			const function196 = new vscode.MarkdownString(``);
			function196.appendCodeblock("strategy.closedtrades.size(trade_num = int) → series float");
			function196.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}closedtrades{dot)*`);
			function196.isTrusted = true;
			function196.supportHtml = true;

			const pattern196 = new RegExp("(strategy\\.closedtrades\\.size)\\(");
			if (pattern196.test(hoverLineText193)) {
				hoverRange193 = document.getWordRangeAtPosition(position, pattern196);
				if (hoverRange193) {
					return new vscode.Hover(function196, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover193);


	let pineHover194 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange194;
			const hoverLineText194 = document.lineAt(position.line).text;

			const function197 = new vscode.MarkdownString(``);
			function197.appendCodeblock("strategy.convert_to_account(value) → series float");
			function197.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}convert_to_accou)*`);
			function197.isTrusted = true;
			function197.supportHtml = true;

			const pattern197 = new RegExp("(strategy\\.convert_to_account)\\(");
			if (pattern197.test(hoverLineText194)) {
				hoverRange194 = document.getWordRangeAtPosition(position, pattern197);
				if (hoverRange194) {
					return new vscode.Hover(function197, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover194);


	let pineHover195 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange195;
			const hoverLineText195 = document.lineAt(position.line).text;

			const function198 = new vscode.MarkdownString(``);
			function198.appendCodeblock("strategy.convert_to_symbol(value = int|float) → series float");
			function198.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}convert_to_symbo)*`);
			function198.isTrusted = true;
			function198.supportHtml = true;

			const pattern198 = new RegExp("(strategy\\.convert_to_symbol)\\(");
			if (pattern198.test(hoverLineText195)) {
				hoverRange195 = document.getWordRangeAtPosition(position, pattern198);
				if (hoverRange195) {
					return new vscode.Hover(function198, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover195);


	let pineHover196 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange196;
			const hoverLineText196 = document.lineAt(position.line).text;

			const function199 = new vscode.MarkdownString(``);
			function199.appendCodeblock("strategy.entry(id = string, direction = const built-in, qty = int|float, limit = int|float, stop = int|float, oca_name = string, oca_type = string, comment = string, when = bool, alert_message = string) → void");
			function199.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}entry)*`);
			function199.isTrusted = true;
			function199.supportHtml = true;

			const pattern199 = new RegExp("(strategy\\.entry)\\(");
			if (pattern199.test(hoverLineText196)) {
				hoverRange196 = document.getWordRangeAtPosition(position, pattern199);
				if (hoverRange196) {
					return new vscode.Hover(function199, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover196);


	let pineHover197 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange197;
			const hoverLineText197 = document.lineAt(position.line).text;

			const function200 = new vscode.MarkdownString(``);
			function200.appendCodeblock("strategy.exit(id = string, from_entry = string, qty = int|float, qty_percent = int|float, profit = int|float, limit = int|float, loss = int|float, stop = int|float, trail_price = int|float, trail_points = int|float, trail_offset = int|float, oca_name = string, comment = string, when = bool, alert_message = string) → void");
			function200.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}exit)*`);
			function200.isTrusted = true;
			function200.supportHtml = true;

			const pattern200 = new RegExp("(strategy\\.exit)\\(");
			if (pattern200.test(hoverLineText197)) {
				hoverRange197 = document.getWordRangeAtPosition(position, pattern200);
				if (hoverRange197) {
					return new vscode.Hover(function200, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover197);


	let pineHover198 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange198;
			const hoverLineText198 = document.lineAt(position.line).text;

			const function201 = new vscode.MarkdownString(``);
			function201.appendCodeblock("strategy.opentrades.commission(trade_num = int) → float");
			function201.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}c)*`);
			function201.isTrusted = true;
			function201.supportHtml = true;

			const pattern201 = new RegExp("(strategy\\.opentrades\\.commission)\\(");
			if (pattern201.test(hoverLineText198)) {
				hoverRange198 = document.getWordRangeAtPosition(position, pattern201);
				if (hoverRange198) {
					return new vscode.Hover(function201, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover198);


	let pineHover199 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange199;
			const hoverLineText199 = document.lineAt(position.line).text;

			const function202 = new vscode.MarkdownString(``);
			function202.appendCodeblock("strategy.opentrades.entry_bar_index(trade_num = int) → float");
			function202.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}e)*`);
			function202.isTrusted = true;
			function202.supportHtml = true;

			const pattern202 = new RegExp("(strategy\\.opentrades\\.entry_bar_index)\\(");
			if (pattern202.test(hoverLineText199)) {
				hoverRange199 = document.getWordRangeAtPosition(position, pattern202);
				if (hoverRange199) {
					return new vscode.Hover(function202, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover199);


	let pineHover200 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange200;
			const hoverLineText200 = document.lineAt(position.line).text;

			const function203 = new vscode.MarkdownString(``);
			function203.appendCodeblock("strategy.opentrades.entry_price(trade_num = int) → float");
			function203.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}e)*`);
			function203.isTrusted = true;
			function203.supportHtml = true;

			const pattern203 = new RegExp("(strategy\\.opentrades\\.entry_price)\\(");
			if (pattern203.test(hoverLineText200)) {
				hoverRange200 = document.getWordRangeAtPosition(position, pattern203);
				if (hoverRange200) {
					return new vscode.Hover(function203, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover200);


	let pineHover201 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange201;
			const hoverLineText201 = document.lineAt(position.line).text;

			const function204 = new vscode.MarkdownString(``);
			function204.appendCodeblock("strategy.opentrades.entry_time(trade_num = int) → float");
			function204.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}e)*`);
			function204.isTrusted = true;
			function204.supportHtml = true;

			const pattern204 = new RegExp("(strategy\\.opentrades\\.entry_time)\\(");
			if (pattern204.test(hoverLineText201)) {
				hoverRange201 = document.getWordRangeAtPosition(position, pattern204);
				if (hoverRange201) {
					return new vscode.Hover(function204, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover201);


	let pineHover202 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange202;
			const hoverLineText202 = document.lineAt(position.line).text;

			const function205 = new vscode.MarkdownString(``);
			function205.appendCodeblock("strategy.opentrades.max_drawdown(trade_num = int) → float");
			function205.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}m)*`);
			function205.isTrusted = true;
			function205.supportHtml = true;

			const pattern205 = new RegExp("(strategy\\.opentrades\\.max_drawdown)\\(");
			if (pattern205.test(hoverLineText202)) {
				hoverRange202 = document.getWordRangeAtPosition(position, pattern205);
				if (hoverRange202) {
					return new vscode.Hover(function205, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover202);


	let pineHover203 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange203;
			const hoverLineText203 = document.lineAt(position.line).text;

			const function206 = new vscode.MarkdownString(``);
			function206.appendCodeblock("strategy.opentrades.max_runup(trade_num = int) → float");
			function206.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}m)*`);
			function206.isTrusted = true;
			function206.supportHtml = true;

			const pattern206 = new RegExp("(strategy\\.opentrades\\.max_runup)\\(");
			if (pattern206.test(hoverLineText203)) {
				hoverRange203 = document.getWordRangeAtPosition(position, pattern206);
				if (hoverRange203) {
					return new vscode.Hover(function206, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover203);


	let pineHover204 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange204;
			const hoverLineText204 = document.lineAt(position.line).text;

			const function207 = new vscode.MarkdownString(``);
			function207.appendCodeblock("strategy.opentrades.profit(trade_num = int) → float");
			function207.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}p)*`);
			function207.isTrusted = true;
			function207.supportHtml = true;

			const pattern207 = new RegExp("(strategy\\.opentrades\\.profit)\\(");
			if (pattern207.test(hoverLineText204)) {
				hoverRange204 = document.getWordRangeAtPosition(position, pattern207);
				if (hoverRange204) {
					return new vscode.Hover(function207, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover204);


	let pineHover205 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange205;
			const hoverLineText205 = document.lineAt(position.line).text;

			const function208 = new vscode.MarkdownString(``);
			function208.appendCodeblock("strategy.opentrades.size(trade_num = int) → float");
			function208.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}opentrades{dot}s)*`);
			function208.isTrusted = true;
			function208.supportHtml = true;

			const pattern208 = new RegExp("(strategy\\.opentrades\\.size)\\(");
			if (pattern208.test(hoverLineText205)) {
				hoverRange205 = document.getWordRangeAtPosition(position, pattern208);
				if (hoverRange205) {
					return new vscode.Hover(function208, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover205);


	let pineHover206 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange206;
			const hoverLineText206 = document.lineAt(position.line).text;

			const function209 = new vscode.MarkdownString(``);
			function209.appendCodeblock("strategy.order(id = string, direction = const built-in, qty = int|float, limit = int|float, stop = int|float, oca_name = string, oca_type = string, comment = string, when = bool, alert_message = string) → void");
			function209.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}order)*`);
			function209.isTrusted = true;
			function209.supportHtml = true;

			const pattern209 = new RegExp("(strategy\\.order)\\(");
			if (pattern209.test(hoverLineText206)) {
				hoverRange206 = document.getWordRangeAtPosition(position, pattern209);
				if (hoverRange206) {
					return new vscode.Hover(function209, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover206);


	let pineHover207 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange207;
			const hoverLineText207 = document.lineAt(position.line).text;

			const function210 = new vscode.MarkdownString(``);
			function210.appendCodeblock("strategy.risk.allow_entry_in(value = string) → void");
			function210.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}allow_e)*`);
			function210.isTrusted = true;
			function210.supportHtml = true;

			const pattern210 = new RegExp("(strategy\\.risk\\.allow_entry_in)\\(");
			if (pattern210.test(hoverLineText207)) {
				hoverRange207 = document.getWordRangeAtPosition(position, pattern210);
				if (hoverRange207) {
					return new vscode.Hover(function210, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover207);


	let pineHover208 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange208;
			const hoverLineText208 = document.lineAt(position.line).text;

			const function211 = new vscode.MarkdownString(``);
			function211.appendCodeblock("strategy.risk.max_cons_loss_days(count = int, alert_message = string) → series void");
			function211.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_con)*`);
			function211.isTrusted = true;
			function211.supportHtml = true;

			const pattern211 = new RegExp("(strategy\\.risk\\.max_cons_loss_days)\\(");
			if (pattern211.test(hoverLineText208)) {
				hoverRange208 = document.getWordRangeAtPosition(position, pattern211);
				if (hoverRange208) {
					return new vscode.Hover(function211, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover208);


	let pineHover209 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange209;
			const hoverLineText209 = document.lineAt(position.line).text;

			const function212 = new vscode.MarkdownString(``);
			function212.appendCodeblock("strategy.risk.max_drawdown(count = int, type = string, alert_message = string) → series void");
			function212.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_dra)*`);
			function212.isTrusted = true;
			function212.supportHtml = true;

			const pattern212 = new RegExp("(strategy\\.risk\\.max_drawdown)\\(");
			if (pattern212.test(hoverLineText209)) {
				hoverRange209 = document.getWordRangeAtPosition(position, pattern212);
				if (hoverRange209) {
					return new vscode.Hover(function212, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover209);


	let pineHover210 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange210;
			const hoverLineText210 = document.lineAt(position.line).text;

			const function213 = new vscode.MarkdownString(``);
			function213.appendCodeblock("strategy.risk.max_intraday_loss(count = int, alert_message = string) → series void");
			function213.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_int)*`);
			function213.isTrusted = true;
			function213.supportHtml = true;

			const pattern213 = new RegExp("(strategy\\.risk\\.max_intraday_loss)\\(");
			if (pattern213.test(hoverLineText210)) {
				hoverRange210 = document.getWordRangeAtPosition(position, pattern213);
				if (hoverRange210) {
					return new vscode.Hover(function213, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover210);


	let pineHover211 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange211;
			const hoverLineText211 = document.lineAt(position.line).text;

			const function214 = new vscode.MarkdownString(``);
			function214.appendCodeblock("strategy.risk.max_intraday_loss(value = int|float, type = string, alert_message = string) → series void");
			function214.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_int)*`);
			function214.isTrusted = true;
			function214.supportHtml = true;

			const pattern214 = new RegExp("(strategy\\.risk\\.max_intraday_loss)\\(");
			if (pattern214.test(hoverLineText211)) {
				hoverRange211 = document.getWordRangeAtPosition(position, pattern214);
				if (hoverRange211) {
					return new vscode.Hover(function214, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover211);


	let pineHover212 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange212;
			const hoverLineText212 = document.lineAt(position.line).text;

			const function215 = new vscode.MarkdownString(``);
			function215.appendCodeblock("strategy.risk.max_position_size(contracts = int|float) → void");
			function215.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_strategy{dot}risk{dot}max_pos)*`);
			function215.isTrusted = true;
			function215.supportHtml = true;

			const pattern215 = new RegExp("(strategy\\.risk\\.max_position_size)\\(");
			if (pattern215.test(hoverLineText212)) {
				hoverRange212 = document.getWordRangeAtPosition(position, pattern215);
				if (hoverRange212) {
					return new vscode.Hover(function215, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover212);


	let pineHover213 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange213;
			const hoverLineText213 = document.lineAt(position.line).text;

			const function216 = new vscode.MarkdownString(``);
			function216.appendCodeblock("string(x) → const|input|simple|series string");
			function216.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_string)*`);
			function216.isTrusted = true;
			function216.supportHtml = true;

			const pattern216 = new RegExp("(string)\\(");
			if (pattern216.test(hoverLineText213)) {
				hoverRange213 = document.getWordRangeAtPosition(position, pattern216);
				if (hoverRange213) {
					return new vscode.Hover(function216, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover213);


	let pineHover214 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange214;
			const hoverLineText214 = document.lineAt(position.line).text;

			const function217 = new vscode.MarkdownString(``);
			function217.appendCodeblock("ta.highest(series = int|float, length = int, offset  = int|float, sigma = int|float, floor = bool) → series float");
			function217.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}highest)*`);
			function217.isTrusted = true;
			function217.supportHtml = true;

			const pattern217 = new RegExp("(ta\\.highest)\\(");
			if (pattern217.test(hoverLineText214)) {
				hoverRange214 = document.getWordRangeAtPosition(position, pattern217);
				if (hoverRange214) {
					return new vscode.Hover(function217, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover214);


	let pineHover215 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange215;
			const hoverLineText215 = document.lineAt(position.line).text;

			const function218 = new vscode.MarkdownString(``);
			function218.appendCodeblock("ta.atr(length = int) → series float");
			function218.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}atr)*`);
			function218.isTrusted = true;
			function218.supportHtml = true;

			const pattern218 = new RegExp("(ta\\.atr)\\(");
			if (pattern218.test(hoverLineText215)) {
				hoverRange215 = document.getWordRangeAtPosition(position, pattern218);
				if (hoverRange215) {
					return new vscode.Hover(function218, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover215);


	let pineHover216 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange216;
			const hoverLineText216 = document.lineAt(position.line).text;

			const function219 = new vscode.MarkdownString(``);
			function219.appendCodeblock("ta.barssince(condition = bool) → series int");
			function219.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}barssince)*`);
			function219.isTrusted = true;
			function219.supportHtml = true;

			const pattern219 = new RegExp("(ta\\.barssince)\\(");
			if (pattern219.test(hoverLineText216)) {
				hoverRange216 = document.getWordRangeAtPosition(position, pattern219);
				if (hoverRange216) {
					return new vscode.Hover(function219, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover216);


	let pineHover217 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange217;
			const hoverLineText217 = document.lineAt(position.line).text;

			const function220 = new vscode.MarkdownString(``);
			function220.appendCodeblock("ta.bb(series = int|float, length = int, mult = int|float) → [series float, series float, series float]");
			function220.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}bb)*`);
			function220.isTrusted = true;
			function220.supportHtml = true;

			const pattern220 = new RegExp("(ta\\.bb)\\(");
			if (pattern220.test(hoverLineText217)) {
				hoverRange217 = document.getWordRangeAtPosition(position, pattern220);
				if (hoverRange217) {
					return new vscode.Hover(function220, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover217);


	let pineHover218 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange218;
			const hoverLineText218 = document.lineAt(position.line).text;

			const function221 = new vscode.MarkdownString(``);
			function221.appendCodeblock("ta.bbw(series = int|float, length = int, mult = int|float) → series float");
			function221.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}bbw)*`);
			function221.isTrusted = true;
			function221.supportHtml = true;

			const pattern221 = new RegExp("(ta\\.bbw)\\(");
			if (pattern221.test(hoverLineText218)) {
				hoverRange218 = document.getWordRangeAtPosition(position, pattern221);
				if (hoverRange218) {
					return new vscode.Hover(function221, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover218);


	let pineHover219 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange219;
			const hoverLineText219 = document.lineAt(position.line).text;

			const function222 = new vscode.MarkdownString(``);
			function222.appendCodeblock("ta.cci(source = int|float, length = int) → series float");
			function222.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cci)*`);
			function222.isTrusted = true;
			function222.supportHtml = true;

			const pattern222 = new RegExp("(ta\\.cci)\\(");
			if (pattern222.test(hoverLineText219)) {
				hoverRange219 = document.getWordRangeAtPosition(position, pattern222);
				if (hoverRange219) {
					return new vscode.Hover(function222, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover219);


	let pineHover220 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange220;
			const hoverLineText220 = document.lineAt(position.line).text;

			const function223 = new vscode.MarkdownString(``);
			function223.appendCodeblock("ta.change(source = int|float, length = int) → series float");
			function223.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}change)*`);
			function223.isTrusted = true;
			function223.supportHtml = true;

			const pattern223 = new RegExp("(ta\\.change)\\(");
			if (pattern223.test(hoverLineText220)) {
				hoverRange220 = document.getWordRangeAtPosition(position, pattern223);
				if (hoverRange220) {
					return new vscode.Hover(function223, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover220);


	let pineHover221 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange221;
			const hoverLineText221 = document.lineAt(position.line).text;

			const function224 = new vscode.MarkdownString(``);
			function224.appendCodeblock("ta.cmo(source = int|float, length = int) → series float");
			function224.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cmo)*`);
			function224.isTrusted = true;
			function224.supportHtml = true;

			const pattern224 = new RegExp("(ta\\.cmo)\\(");
			if (pattern224.test(hoverLineText221)) {
				hoverRange221 = document.getWordRangeAtPosition(position, pattern224);
				if (hoverRange221) {
					return new vscode.Hover(function224, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover221);


	let pineHover222 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange222;
			const hoverLineText222 = document.lineAt(position.line).text;

			const function225 = new vscode.MarkdownString(``);
			function225.appendCodeblock("ta.cog(source = int|float, length = int) → series float");
			function225.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cog)*`);
			function225.isTrusted = true;
			function225.supportHtml = true;

			const pattern225 = new RegExp("(ta\\.cog)\\(");
			if (pattern225.test(hoverLineText222)) {
				hoverRange222 = document.getWordRangeAtPosition(position, pattern225);
				if (hoverRange222) {
					return new vscode.Hover(function225, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover222);


	let pineHover223 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange223;
			const hoverLineText223 = document.lineAt(position.line).text;

			const function226 = new vscode.MarkdownString(``);
			function226.appendCodeblock("ta.correlation(source1 = int|float, source2 = int|float, length = int) → series float");
			function226.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}correlation)*`);
			function226.isTrusted = true;
			function226.supportHtml = true;

			const pattern226 = new RegExp("(ta\\.correlation)\\(");
			if (pattern226.test(hoverLineText223)) {
				hoverRange223 = document.getWordRangeAtPosition(position, pattern226);
				if (hoverRange223) {
					return new vscode.Hover(function226, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover223);


	let pineHover224 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange224;
			const hoverLineText224 = document.lineAt(position.line).text;

			const function227 = new vscode.MarkdownString(``);
			function227.appendCodeblock("ta.cross(source1 = int|float, source2 = int|float) → series bool");
			function227.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cross)*`);
			function227.isTrusted = true;
			function227.supportHtml = true;

			const pattern227 = new RegExp("(ta\\.cross)\\(");
			if (pattern227.test(hoverLineText224)) {
				hoverRange224 = document.getWordRangeAtPosition(position, pattern227);
				if (hoverRange224) {
					return new vscode.Hover(function227, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover224);


	let pineHover225 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange225;
			const hoverLineText225 = document.lineAt(position.line).text;

			const function228 = new vscode.MarkdownString(``);
			function228.appendCodeblock("ta.crossover(source1 = int|float, source2 = int|float) → series bool");
			function228.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}crossover)*`);
			function228.isTrusted = true;
			function228.supportHtml = true;

			const pattern228 = new RegExp("(ta\\.crossover)\\(");
			if (pattern228.test(hoverLineText225)) {
				hoverRange225 = document.getWordRangeAtPosition(position, pattern228);
				if (hoverRange225) {
					return new vscode.Hover(function228, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover225);


	let pineHover226 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange226;
			const hoverLineText226 = document.lineAt(position.line).text;

			const function229 = new vscode.MarkdownString(``);
			function229.appendCodeblock("ta.crossunder(source1 = int|float, source2 = int|float) → series bool");
			function229.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}crossunder)*`);
			function229.isTrusted = true;
			function229.supportHtml = true;

			const pattern229 = new RegExp("(ta\\.crossunder)\\(");
			if (pattern229.test(hoverLineText226)) {
				hoverRange226 = document.getWordRangeAtPosition(position, pattern229);
				if (hoverRange226) {
					return new vscode.Hover(function229, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover226);


	let pineHover227 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange227;
			const hoverLineText227 = document.lineAt(position.line).text;

			const function230 = new vscode.MarkdownString(``);
			function230.appendCodeblock("ta.cum(source = int|float) → series float");
			function230.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}cum)*`);
			function230.isTrusted = true;
			function230.supportHtml = true;

			const pattern230 = new RegExp("(ta\\.cum)\\(");
			if (pattern230.test(hoverLineText227)) {
				hoverRange227 = document.getWordRangeAtPosition(position, pattern230);
				if (hoverRange227) {
					return new vscode.Hover(function230, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover227);


	let pineHover228 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange228;
			const hoverLineText228 = document.lineAt(position.line).text;

			const function231 = new vscode.MarkdownString(``);
			function231.appendCodeblock("ta.dev(source = int|float, length = int) → series float");
			function231.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}dev)*`);
			function231.isTrusted = true;
			function231.supportHtml = true;

			const pattern231 = new RegExp("(ta\\.dev)\\(");
			if (pattern231.test(hoverLineText228)) {
				hoverRange228 = document.getWordRangeAtPosition(position, pattern231);
				if (hoverRange228) {
					return new vscode.Hover(function231, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover228);


	let pineHover229 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange229;
			const hoverLineText229 = document.lineAt(position.line).text;

			const function232 = new vscode.MarkdownString(``);
			function232.appendCodeblock("ta.dmi(diLength = int, adxSmoothing = int) → [series float, series float, series float]");
			function232.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}dmi)*`);
			function232.isTrusted = true;
			function232.supportHtml = true;

			const pattern232 = new RegExp("(ta\\.dmi)\\(");
			if (pattern232.test(hoverLineText229)) {
				hoverRange229 = document.getWordRangeAtPosition(position, pattern232);
				if (hoverRange229) {
					return new vscode.Hover(function232, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover229);


	let pineHover230 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange230;
			const hoverLineText230 = document.lineAt(position.line).text;

			const function233 = new vscode.MarkdownString(``);
			function233.appendCodeblock("ta.ema(source = int|float, length = int) → series float");
			function233.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}ema)*`);
			function233.isTrusted = true;
			function233.supportHtml = true;

			const pattern233 = new RegExp("(ta\\.ema)\\(");
			if (pattern233.test(hoverLineText230)) {
				hoverRange230 = document.getWordRangeAtPosition(position, pattern233);
				if (hoverRange230) {
					return new vscode.Hover(function233, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover230);


	let pineHover231 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange231;
			const hoverLineText231 = document.lineAt(position.line).text;

			const function234 = new vscode.MarkdownString(``);
			function234.appendCodeblock("ta.falling(source = int|float, length = int) → series bool");
			function234.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}falling)*`);
			function234.isTrusted = true;
			function234.supportHtml = true;

			const pattern234 = new RegExp("(ta\\.falling)\\(");
			if (pattern234.test(hoverLineText231)) {
				hoverRange231 = document.getWordRangeAtPosition(position, pattern234);
				if (hoverRange231) {
					return new vscode.Hover(function234, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover231);


	let pineHover232 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange232;
			const hoverLineText232 = document.lineAt(position.line).text;

			const function235 = new vscode.MarkdownString(``);
			function235.appendCodeblock("ta.highest(source = int|float, length = int) → series float");
			function235.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}highest)*`);
			function235.isTrusted = true;
			function235.supportHtml = true;

			const pattern235 = new RegExp("(ta\\.highest)\\(");
			if (pattern235.test(hoverLineText232)) {
				hoverRange232 = document.getWordRangeAtPosition(position, pattern235);
				if (hoverRange232) {
					return new vscode.Hover(function235, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover232);


	let pineHover233 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange233;
			const hoverLineText233 = document.lineAt(position.line).text;

			const function236 = new vscode.MarkdownString(``);
			function236.appendCodeblock("ta.highestbars(source = int|float, length = int) → series int");
			function236.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}highestbars)*`);
			function236.isTrusted = true;
			function236.supportHtml = true;

			const pattern236 = new RegExp("(ta\\.highestbars)\\(");
			if (pattern236.test(hoverLineText233)) {
				hoverRange233 = document.getWordRangeAtPosition(position, pattern236);
				if (hoverRange233) {
					return new vscode.Hover(function236, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover233);


	let pineHover234 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange234;
			const hoverLineText234 = document.lineAt(position.line).text;

			const function237 = new vscode.MarkdownString(``);
			function237.appendCodeblock("ta.hma(source = int|float, length = int) → series float");
			function237.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}hma)*`);
			function237.isTrusted = true;
			function237.supportHtml = true;

			const pattern237 = new RegExp("(ta\\.hma)\\(");
			if (pattern237.test(hoverLineText234)) {
				hoverRange234 = document.getWordRangeAtPosition(position, pattern237);
				if (hoverRange234) {
					return new vscode.Hover(function237, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover234);


	let pineHover235 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange235;
			const hoverLineText235 = document.lineAt(position.line).text;

			const function238 = new vscode.MarkdownString(``);
			function238.appendCodeblock("ta.kc(series = int|float, length = int, mult = int|float, useTrueRange = bool) → [series float, series float, series float]");
			function238.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}kc)*`);
			function238.isTrusted = true;
			function238.supportHtml = true;

			const pattern238 = new RegExp("(ta\\.kc)\\(");
			if (pattern238.test(hoverLineText235)) {
				hoverRange235 = document.getWordRangeAtPosition(position, pattern238);
				if (hoverRange235) {
					return new vscode.Hover(function238, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover235);


	let pineHover236 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange236;
			const hoverLineText236 = document.lineAt(position.line).text;

			const function239 = new vscode.MarkdownString(``);
			function239.appendCodeblock("ta.kcw(series = int|float, length = int, mult = int|float, useTrueRange = bool) → series float");
			function239.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}kcw)*`);
			function239.isTrusted = true;
			function239.supportHtml = true;

			const pattern239 = new RegExp("(ta\\.kcw)\\(");
			if (pattern239.test(hoverLineText236)) {
				hoverRange236 = document.getWordRangeAtPosition(position, pattern239);
				if (hoverRange236) {
					return new vscode.Hover(function239, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover236);


	let pineHover237 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange237;
			const hoverLineText237 = document.lineAt(position.line).text;

			const function240 = new vscode.MarkdownString(``);
			function240.appendCodeblock("ta.linreg(source = int|float, length = int, offset = int) → series float");
			function240.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}linreg)*`);
			function240.isTrusted = true;
			function240.supportHtml = true;

			const pattern240 = new RegExp("(ta\\.linreg)\\(");
			if (pattern240.test(hoverLineText237)) {
				hoverRange237 = document.getWordRangeAtPosition(position, pattern240);
				if (hoverRange237) {
					return new vscode.Hover(function240, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover237);


	let pineHover238 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange238;
			const hoverLineText238 = document.lineAt(position.line).text;

			const function241 = new vscode.MarkdownString(``);
			function241.appendCodeblock("ta.lowest(source = int|float, length = int) → series float");
			function241.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}lowest)*`);
			function241.isTrusted = true;
			function241.supportHtml = true;

			const pattern241 = new RegExp("(ta\\.lowest)\\(");
			if (pattern241.test(hoverLineText238)) {
				hoverRange238 = document.getWordRangeAtPosition(position, pattern241);
				if (hoverRange238) {
					return new vscode.Hover(function241, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover238);


	let pineHover239 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange239;
			const hoverLineText239 = document.lineAt(position.line).text;

			const function242 = new vscode.MarkdownString(``);
			function242.appendCodeblock("ta.lowestbars(source = int|float, length = int) → series int");
			function242.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}lowestbars)*`);
			function242.isTrusted = true;
			function242.supportHtml = true;

			const pattern242 = new RegExp("(ta\\.lowestbars)\\(");
			if (pattern242.test(hoverLineText239)) {
				hoverRange239 = document.getWordRangeAtPosition(position, pattern242);
				if (hoverRange239) {
					return new vscode.Hover(function242, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover239);


	let pineHover240 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange240;
			const hoverLineText240 = document.lineAt(position.line).text;

			const function243 = new vscode.MarkdownString(``);
			function243.appendCodeblock("ta.macd(source = int|float, fastlen = int, slowlen = int, siglen = int) → [series float, series float, series float]");
			function243.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}macd)*`);
			function243.isTrusted = true;
			function243.supportHtml = true;

			const pattern243 = new RegExp("(ta\\.macd)\\(");
			if (pattern243.test(hoverLineText240)) {
				hoverRange240 = document.getWordRangeAtPosition(position, pattern243);
				if (hoverRange240) {
					return new vscode.Hover(function243, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover240);


	let pineHover241 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange241;
			const hoverLineText241 = document.lineAt(position.line).text;

			const function244 = new vscode.MarkdownString(``);
			function244.appendCodeblock("ta.median(source = int|float, length = int) → series int|float");
			function244.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}median)*`);
			function244.isTrusted = true;
			function244.supportHtml = true;

			const pattern244 = new RegExp("(ta\\.median)\\(");
			if (pattern244.test(hoverLineText241)) {
				hoverRange241 = document.getWordRangeAtPosition(position, pattern244);
				if (hoverRange241) {
					return new vscode.Hover(function244, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover241);


	let pineHover242 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange242;
			const hoverLineText242 = document.lineAt(position.line).text;

			const function245 = new vscode.MarkdownString(``);
			function245.appendCodeblock("ta.mfi(source = int|float, length = int) → series float");
			function245.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}mfi)*`);
			function245.isTrusted = true;
			function245.supportHtml = true;

			const pattern245 = new RegExp("(ta\\.mfi)\\(");
			if (pattern245.test(hoverLineText242)) {
				hoverRange242 = document.getWordRangeAtPosition(position, pattern245);
				if (hoverRange242) {
					return new vscode.Hover(function245, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover242);


	let pineHover243 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange243;
			const hoverLineText243 = document.lineAt(position.line).text;

			const function246 = new vscode.MarkdownString(``);
			function246.appendCodeblock("ta.mode(source = int|float, length = int) → series int|float");
			function246.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}mode)*`);
			function246.isTrusted = true;
			function246.supportHtml = true;

			const pattern246 = new RegExp("(ta\\.mode)\\(");
			if (pattern246.test(hoverLineText243)) {
				hoverRange243 = document.getWordRangeAtPosition(position, pattern246);
				if (hoverRange243) {
					return new vscode.Hover(function246, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover243);


	let pineHover244 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange244;
			const hoverLineText244 = document.lineAt(position.line).text;

			const function247 = new vscode.MarkdownString(``);
			function247.appendCodeblock("ta.mom(source = int|float, length = int) → series float");
			function247.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}mom)*`);
			function247.isTrusted = true;
			function247.supportHtml = true;

			const pattern247 = new RegExp("(ta\\.mom)\\(");
			if (pattern247.test(hoverLineText244)) {
				hoverRange244 = document.getWordRangeAtPosition(position, pattern247);
				if (hoverRange244) {
					return new vscode.Hover(function247, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover244);


	let pineHover245 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange245;
			const hoverLineText245 = document.lineAt(position.line).text;

			const function248 = new vscode.MarkdownString(``);
			function248.appendCodeblock("ta.percentile_linear_interpolation(source = int|float, length = int, percentage = int|float) → series float");
			function248.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}percentile_linear_inte)*`);
			function248.isTrusted = true;
			function248.supportHtml = true;

			const pattern248 = new RegExp("(ta\\.percentile_linear_interpolation)\\(");
			if (pattern248.test(hoverLineText245)) {
				hoverRange245 = document.getWordRangeAtPosition(position, pattern248);
				if (hoverRange245) {
					return new vscode.Hover(function248, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover245);


	let pineHover246 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange246;
			const hoverLineText246 = document.lineAt(position.line).text;

			const function249 = new vscode.MarkdownString(``);
			function249.appendCodeblock("ta.percentile_nearest_rank(source = int|float, length = int, percentage = int|float) → series float");
			function249.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}percentile_nearest_ran)*`);
			function249.isTrusted = true;
			function249.supportHtml = true;

			const pattern249 = new RegExp("(ta\\.percentile_nearest_rank)\\(");
			if (pattern249.test(hoverLineText246)) {
				hoverRange246 = document.getWordRangeAtPosition(position, pattern249);
				if (hoverRange246) {
					return new vscode.Hover(function249, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover246);


	let pineHover247 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange247;
			const hoverLineText247 = document.lineAt(position.line).text;

			const function250 = new vscode.MarkdownString(``);
			function250.appendCodeblock("ta.percentrank(source = int|float, length = int) → series float");
			function250.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}percentrank)*`);
			function250.isTrusted = true;
			function250.supportHtml = true;

			const pattern250 = new RegExp("(ta\\.percentrank)\\(");
			if (pattern250.test(hoverLineText247)) {
				hoverRange247 = document.getWordRangeAtPosition(position, pattern250);
				if (hoverRange247) {
					return new vscode.Hover(function250, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover247);


	let pineHover248 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange248;
			const hoverLineText248 = document.lineAt(position.line).text;

			const function251 = new vscode.MarkdownString(``);
			function251.appendCodeblock("ta.pivothigh(source = int|float, leftbars = int|float, rightbars = int|float) → series float");
			function251.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}pivothigh)*`);
			function251.isTrusted = true;
			function251.supportHtml = true;

			const pattern251 = new RegExp("(ta\\.pivothigh)\\(");
			if (pattern251.test(hoverLineText248)) {
				hoverRange248 = document.getWordRangeAtPosition(position, pattern251);
				if (hoverRange248) {
					return new vscode.Hover(function251, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover248);


	let pineHover249 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange249;
			const hoverLineText249 = document.lineAt(position.line).text;

			const function252 = new vscode.MarkdownString(``);
			function252.appendCodeblock("ta.pivotlow(source = int|float, leftbars = int|float, rightbars = int|float) → series float");
			function252.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}pivotlow)*`);
			function252.isTrusted = true;
			function252.supportHtml = true;

			const pattern252 = new RegExp("(ta\\.pivotlow)\\(");
			if (pattern252.test(hoverLineText249)) {
				hoverRange249 = document.getWordRangeAtPosition(position, pattern252);
				if (hoverRange249) {
					return new vscode.Hover(function252, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover249);


	let pineHover250 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange250;
			const hoverLineText250 = document.lineAt(position.line).text;

			const function253 = new vscode.MarkdownString(``);
			function253.appendCodeblock("ta.range(source = int|float, length = int) → series int|float");
			function253.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}range)*`);
			function253.isTrusted = true;
			function253.supportHtml = true;

			const pattern253 = new RegExp("(ta\\.range)\\(");
			if (pattern253.test(hoverLineText250)) {
				hoverRange250 = document.getWordRangeAtPosition(position, pattern253);
				if (hoverRange250) {
					return new vscode.Hover(function253, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover250);


	let pineHover251 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange251;
			const hoverLineText251 = document.lineAt(position.line).text;

			const function254 = new vscode.MarkdownString(``);
			function254.appendCodeblock("ta.rising(source = int|float, length = int) → series bool");
			function254.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}rising)*`);
			function254.isTrusted = true;
			function254.supportHtml = true;

			const pattern254 = new RegExp("(ta\\.rising)\\(");
			if (pattern254.test(hoverLineText251)) {
				hoverRange251 = document.getWordRangeAtPosition(position, pattern254);
				if (hoverRange251) {
					return new vscode.Hover(function254, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover251);


	let pineHover252 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange252;
			const hoverLineText252 = document.lineAt(position.line).text;

			const function255 = new vscode.MarkdownString(``);
			function255.appendCodeblock("ta.rma(source = int|float, length = int) → series float");
			function255.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}rma)*`);
			function255.isTrusted = true;
			function255.supportHtml = true;

			const pattern255 = new RegExp("(ta\\.rma)\\(");
			if (pattern255.test(hoverLineText252)) {
				hoverRange252 = document.getWordRangeAtPosition(position, pattern255);
				if (hoverRange252) {
					return new vscode.Hover(function255, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover252);


	let pineHover253 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange253;
			const hoverLineText253 = document.lineAt(position.line).text;

			const function256 = new vscode.MarkdownString(``);
			function256.appendCodeblock("ta.roc(source = int|float, length = int) → series float");
			function256.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}roc)*`);
			function256.isTrusted = true;
			function256.supportHtml = true;

			const pattern256 = new RegExp("(ta\\.roc)\\(");
			if (pattern256.test(hoverLineText253)) {
				hoverRange253 = document.getWordRangeAtPosition(position, pattern256);
				if (hoverRange253) {
					return new vscode.Hover(function256, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover253);


	let pineHover254 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange254;
			const hoverLineText254 = document.lineAt(position.line).text;

			const function257 = new vscode.MarkdownString(``);
			function257.appendCodeblock("ta.rsi(source = int|float, length = int) → series float");
			function257.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}rsi)*`);
			function257.isTrusted = true;
			function257.supportHtml = true;

			const pattern257 = new RegExp("(ta\\.rsi)\\(");
			if (pattern257.test(hoverLineText254)) {
				hoverRange254 = document.getWordRangeAtPosition(position, pattern257);
				if (hoverRange254) {
					return new vscode.Hover(function257, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover254);


	let pineHover255 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange255;
			const hoverLineText255 = document.lineAt(position.line).text;

			const function258 = new vscode.MarkdownString(``);
			function258.appendCodeblock("ta.sar(start = int|float, inc = int|float, max = int|float) → series float");
			function258.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}sar)*`);
			function258.isTrusted = true;
			function258.supportHtml = true;

			const pattern258 = new RegExp("(ta\\.sar)\\(");
			if (pattern258.test(hoverLineText255)) {
				hoverRange255 = document.getWordRangeAtPosition(position, pattern258);
				if (hoverRange255) {
					return new vscode.Hover(function258, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover255);


	let pineHover256 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange256;
			const hoverLineText256 = document.lineAt(position.line).text;

			const function259 = new vscode.MarkdownString(``);
			function259.appendCodeblock("ta.sma(source = int|float, length = int) → series float");
			function259.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}sma)*`);
			function259.isTrusted = true;
			function259.supportHtml = true;

			const pattern259 = new RegExp("(ta\\.sma)\\(");
			if (pattern259.test(hoverLineText256)) {
				hoverRange256 = document.getWordRangeAtPosition(position, pattern259);
				if (hoverRange256) {
					return new vscode.Hover(function259, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover256);


	let pineHover257 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange257;
			const hoverLineText257 = document.lineAt(position.line).text;

			const function260 = new vscode.MarkdownString(``);
			function260.appendCodeblock("ta.stdev(source = int|float, length = int) → series float");
			function260.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}stdev)*`);
			function260.isTrusted = true;
			function260.supportHtml = true;

			const pattern260 = new RegExp("(ta\\.stdev)\\(");
			if (pattern260.test(hoverLineText257)) {
				hoverRange257 = document.getWordRangeAtPosition(position, pattern260);
				if (hoverRange257) {
					return new vscode.Hover(function260, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover257);


	let pineHover258 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange258;
			const hoverLineText258 = document.lineAt(position.line).text;

			const function261 = new vscode.MarkdownString(``);
			function261.appendCodeblock("ta.stoch(source = int|float, high = int|float, low = int|float, length = int) → series float");
			function261.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}stoch)*`);
			function261.isTrusted = true;
			function261.supportHtml = true;

			const pattern261 = new RegExp("(ta\\.stoch)\\(");
			if (pattern261.test(hoverLineText258)) {
				hoverRange258 = document.getWordRangeAtPosition(position, pattern261);
				if (hoverRange258) {
					return new vscode.Hover(function261, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover258);


	let pineHover259 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange259;
			const hoverLineText259 = document.lineAt(position.line).text;

			const function262 = new vscode.MarkdownString(``);
			function262.appendCodeblock("ta.supertrend(factor = int|float, atrPeriod = int) → [series float, series float]");
			function262.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}supertrend)*`);
			function262.isTrusted = true;
			function262.supportHtml = true;

			const pattern262 = new RegExp("(ta\\.supertrend)\\(");
			if (pattern262.test(hoverLineText259)) {
				hoverRange259 = document.getWordRangeAtPosition(position, pattern262);
				if (hoverRange259) {
					return new vscode.Hover(function262, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover259);


	let pineHover260 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange260;
			const hoverLineText260 = document.lineAt(position.line).text;

			const function263 = new vscode.MarkdownString(``);
			function263.appendCodeblock("ta.swma(source = int|float) → series float");
			function263.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}swma)*`);
			function263.isTrusted = true;
			function263.supportHtml = true;

			const pattern263 = new RegExp("(ta\\.swma)\\(");
			if (pattern263.test(hoverLineText260)) {
				hoverRange260 = document.getWordRangeAtPosition(position, pattern263);
				if (hoverRange260) {
					return new vscode.Hover(function263, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover260);


	let pineHover261 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange261;
			const hoverLineText261 = document.lineAt(position.line).text;

			const function264 = new vscode.MarkdownString(``);
			function264.appendCodeblock("ta.tr(handle_na = bool) → series float");
			function264.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}tr)*`);
			function264.isTrusted = true;
			function264.supportHtml = true;

			const pattern264 = new RegExp("(ta\\.tr)\\(");
			if (pattern264.test(hoverLineText261)) {
				hoverRange261 = document.getWordRangeAtPosition(position, pattern264);
				if (hoverRange261) {
					return new vscode.Hover(function264, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover261);


	let pineHover262 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange262;
			const hoverLineText262 = document.lineAt(position.line).text;

			const function265 = new vscode.MarkdownString(``);
			function265.appendCodeblock("ta.tsi(source = int|float, short_length = int, long_length = int) → series float");
			function265.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}tsi)*`);
			function265.isTrusted = true;
			function265.supportHtml = true;

			const pattern265 = new RegExp("(ta\\.tsi)\\(");
			if (pattern265.test(hoverLineText262)) {
				hoverRange262 = document.getWordRangeAtPosition(position, pattern265);
				if (hoverRange262) {
					return new vscode.Hover(function265, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover262);


	let pineHover263 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange263;
			const hoverLineText263 = document.lineAt(position.line).text;

			const function266 = new vscode.MarkdownString(``);
			function266.appendCodeblock("ta.valuewhen(condition = bool, source = int|float, occurrence = int) → series int|float");
			function266.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}valuewhen)*`);
			function266.isTrusted = true;
			function266.supportHtml = true;

			const pattern266 = new RegExp("(ta\\.valuewhen)\\(");
			if (pattern266.test(hoverLineText263)) {
				hoverRange263 = document.getWordRangeAtPosition(position, pattern266);
				if (hoverRange263) {
					return new vscode.Hover(function266, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover263);


	let pineHover264 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange264;
			const hoverLineText264 = document.lineAt(position.line).text;

			const function267 = new vscode.MarkdownString(``);
			function267.appendCodeblock("ta.variance(source = int|float, length = int) → series float");
			function267.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}variance)*`);
			function267.isTrusted = true;
			function267.supportHtml = true;

			const pattern267 = new RegExp("(ta\\.variance)\\(");
			if (pattern267.test(hoverLineText264)) {
				hoverRange264 = document.getWordRangeAtPosition(position, pattern267);
				if (hoverRange264) {
					return new vscode.Hover(function267, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover264);


	let pineHover265 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange265;
			const hoverLineText265 = document.lineAt(position.line).text;

			const function268 = new vscode.MarkdownString(``);
			function268.appendCodeblock("ta.vwap(source = int|float) → series float");
			function268.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}vwap)*`);
			function268.isTrusted = true;
			function268.supportHtml = true;

			const pattern268 = new RegExp("(ta\\.vwap)\\(");
			if (pattern268.test(hoverLineText265)) {
				hoverRange265 = document.getWordRangeAtPosition(position, pattern268);
				if (hoverRange265) {
					return new vscode.Hover(function268, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover265);


	let pineHover266 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange266;
			const hoverLineText266 = document.lineAt(position.line).text;

			const function269 = new vscode.MarkdownString(``);
			function269.appendCodeblock("ta.vwma(source = int|float, length = int) → series float");
			function269.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}vwma)*`);
			function269.isTrusted = true;
			function269.supportHtml = true;

			const pattern269 = new RegExp("(ta\\.vwma)\\(");
			if (pattern269.test(hoverLineText266)) {
				hoverRange266 = document.getWordRangeAtPosition(position, pattern269);
				if (hoverRange266) {
					return new vscode.Hover(function269, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover266);


	let pineHover267 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange267;
			const hoverLineText267 = document.lineAt(position.line).text;

			const function270 = new vscode.MarkdownString(``);
			function270.appendCodeblock("ta.wma(source = int|float, length = int) → series float");
			function270.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}wma)*`);
			function270.isTrusted = true;
			function270.supportHtml = true;

			const pattern270 = new RegExp("(ta\\.wma)\\(");
			if (pattern270.test(hoverLineText267)) {
				hoverRange267 = document.getWordRangeAtPosition(position, pattern270);
				if (hoverRange267) {
					return new vscode.Hover(function270, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover267);


	let pineHover268 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange268;
			const hoverLineText268 = document.lineAt(position.line).text;

			const function271 = new vscode.MarkdownString(``);
			function271.appendCodeblock("ta.wpr(length = int) → series float");
			function271.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ta{dot}wpr)*`);
			function271.isTrusted = true;
			function271.supportHtml = true;

			const pattern271 = new RegExp("(ta\\.wpr)\\(");
			if (pattern271.test(hoverLineText268)) {
				hoverRange268 = document.getWordRangeAtPosition(position, pattern271);
				if (hoverRange268) {
					return new vscode.Hover(function271, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover268);


	let pineHover269 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange269;
			const hoverLineText269 = document.lineAt(position.line).text;

			const function272 = new vscode.MarkdownString(``);
			function272.appendCodeblock("table(x = table) → series table");
			function272.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table)*`);
			function272.isTrusted = true;
			function272.supportHtml = true;

			const pattern272 = new RegExp("(table)\\(");
			if (pattern272.test(hoverLineText269)) {
				hoverRange269 = document.getWordRangeAtPosition(position, pattern272);
				if (hoverRange269) {
					return new vscode.Hover(function272, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover269);


	let pineHover270 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange270;
			const hoverLineText270 = document.lineAt(position.line).text;

			const function273 = new vscode.MarkdownString(``);
			function273.appendCodeblock("table.cell(table_id = table, column = int, row = int, text = string, width = int|float, height = int|float, text_color = color, text_halign = string, text_valign = string, text_size = string, bgcolor = color) → void");
			function273.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell)*`);
			function273.isTrusted = true;
			function273.supportHtml = true;

			const pattern273 = new RegExp("(table\\.cell)\\(");
			if (pattern273.test(hoverLineText270)) {
				hoverRange270 = document.getWordRangeAtPosition(position, pattern273);
				if (hoverRange270) {
					return new vscode.Hover(function273, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover270);


	let pineHover271 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange271;
			const hoverLineText271 = document.lineAt(position.line).text;

			const function274 = new vscode.MarkdownString(``);
			function274.appendCodeblock("table.cell_set_bgcolor(table_id = table, column = int, row = int, bgcolor = color) → void");
			function274.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_bgcolor)*`);
			function274.isTrusted = true;
			function274.supportHtml = true;

			const pattern274 = new RegExp("(table\\.cell_set_bgcolor)\\(");
			if (pattern274.test(hoverLineText271)) {
				hoverRange271 = document.getWordRangeAtPosition(position, pattern274);
				if (hoverRange271) {
					return new vscode.Hover(function274, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover271);


	let pineHover272 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange272;
			const hoverLineText272 = document.lineAt(position.line).text;

			const function275 = new vscode.MarkdownString(``);
			function275.appendCodeblock("table.cell_set_height(table_id = table, column = int, row = int, height = int|float) → void");
			function275.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_height)*`);
			function275.isTrusted = true;
			function275.supportHtml = true;

			const pattern275 = new RegExp("(table\\.cell_set_height)\\(");
			if (pattern275.test(hoverLineText272)) {
				hoverRange272 = document.getWordRangeAtPosition(position, pattern275);
				if (hoverRange272) {
					return new vscode.Hover(function275, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover272);


	let pineHover273 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange273;
			const hoverLineText273 = document.lineAt(position.line).text;

			const function276 = new vscode.MarkdownString(``);
			function276.appendCodeblock("table.cell_set_text(table_id = table, column = int, row = int, text = string) → void");
			function276.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text)*`);
			function276.isTrusted = true;
			function276.supportHtml = true;

			const pattern276 = new RegExp("(table\\.cell_set_text)\\(");
			if (pattern276.test(hoverLineText273)) {
				hoverRange273 = document.getWordRangeAtPosition(position, pattern276);
				if (hoverRange273) {
					return new vscode.Hover(function276, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover273);


	let pineHover274 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange274;
			const hoverLineText274 = document.lineAt(position.line).text;

			const function277 = new vscode.MarkdownString(``);
			function277.appendCodeblock("table.cell_set_text_color(table_id = table, column = int, row = int, text_color = color) → void");
			function277.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text_color)*`);
			function277.isTrusted = true;
			function277.supportHtml = true;

			const pattern277 = new RegExp("(table\\.cell_set_text_color)\\(");
			if (pattern277.test(hoverLineText274)) {
				hoverRange274 = document.getWordRangeAtPosition(position, pattern277);
				if (hoverRange274) {
					return new vscode.Hover(function277, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover274);


	let pineHover275 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange275;
			const hoverLineText275 = document.lineAt(position.line).text;

			const function278 = new vscode.MarkdownString(``);
			function278.appendCodeblock("table.cell_set_text_halign(table_id = table, column = int, row = int, text_halign = string) → void");
			function278.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text_halig)*`);
			function278.isTrusted = true;
			function278.supportHtml = true;

			const pattern278 = new RegExp("(table\\.cell_set_text_halign)\\(");
			if (pattern278.test(hoverLineText275)) {
				hoverRange275 = document.getWordRangeAtPosition(position, pattern278);
				if (hoverRange275) {
					return new vscode.Hover(function278, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover275);


	let pineHover276 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange276;
			const hoverLineText276 = document.lineAt(position.line).text;

			const function279 = new vscode.MarkdownString(``);
			function279.appendCodeblock("table.cell_set_text_size(table_id = table, column = int, row = int, text_size = string) → void");
			function279.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text_size)*`);
			function279.isTrusted = true;
			function279.supportHtml = true;

			const pattern279 = new RegExp("(table\\.cell_set_text_size)\\(");
			if (pattern279.test(hoverLineText276)) {
				hoverRange276 = document.getWordRangeAtPosition(position, pattern279);
				if (hoverRange276) {
					return new vscode.Hover(function279, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover276);


	let pineHover277 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange277;
			const hoverLineText277 = document.lineAt(position.line).text;

			const function280 = new vscode.MarkdownString(``);
			function280.appendCodeblock("table.cell_set_text_valign(table_id = table, column = int, row = int, text_valign = string) → void");
			function280.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_text_valig)*`);
			function280.isTrusted = true;
			function280.supportHtml = true;

			const pattern280 = new RegExp("(table\\.cell_set_text_valign)\\(");
			if (pattern280.test(hoverLineText277)) {
				hoverRange277 = document.getWordRangeAtPosition(position, pattern280);
				if (hoverRange277) {
					return new vscode.Hover(function280, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover277);


	let pineHover278 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange278;
			const hoverLineText278 = document.lineAt(position.line).text;

			const function281 = new vscode.MarkdownString(``);
			function281.appendCodeblock("table.cell_set_width(table_id = table, column = int, row = int, width = int|float) → void");
			function281.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}cell_set_width)*`);
			function281.isTrusted = true;
			function281.supportHtml = true;

			const pattern281 = new RegExp("(table\\.cell_set_width)\\(");
			if (pattern281.test(hoverLineText278)) {
				hoverRange278 = document.getWordRangeAtPosition(position, pattern281);
				if (hoverRange278) {
					return new vscode.Hover(function281, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover278);


	let pineHover279 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange279;
			const hoverLineText279 = document.lineAt(position.line).text;

			const function282 = new vscode.MarkdownString(``);
			function282.appendCodeblock("table.clear(table_id = table, start_column = int, start_row = int, end_column = int, end_row = int) → void");
			function282.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}clear)*`);
			function282.isTrusted = true;
			function282.supportHtml = true;

			const pattern282 = new RegExp("(table\\.clear)\\(");
			if (pattern282.test(hoverLineText279)) {
				hoverRange279 = document.getWordRangeAtPosition(position, pattern282);
				if (hoverRange279) {
					return new vscode.Hover(function282, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover279);


	let pineHover280 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange280;
			const hoverLineText280 = document.lineAt(position.line).text;

			const function283 = new vscode.MarkdownString(``);
			function283.appendCodeblock("table.delete(table_id = table) → void");
			function283.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}delete)*`);
			function283.isTrusted = true;
			function283.supportHtml = true;

			const pattern283 = new RegExp("(table\\.delete)\\(");
			if (pattern283.test(hoverLineText280)) {
				hoverRange280 = document.getWordRangeAtPosition(position, pattern283);
				if (hoverRange280) {
					return new vscode.Hover(function283, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover280);


	let pineHover281 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange281;
			const hoverLineText281 = document.lineAt(position.line).text;

			const function284 = new vscode.MarkdownString(``);
			function284.appendCodeblock("table.new(position = int, columns = int, rows = int, bgcolor = color, frame_color = color, frame_width = int, border_color = color, border_width = int) → series table");
			function284.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}new)*`);
			function284.isTrusted = true;
			function284.supportHtml = true;

			const pattern284 = new RegExp("(table\\.new)\\(");
			if (pattern284.test(hoverLineText281)) {
				hoverRange281 = document.getWordRangeAtPosition(position, pattern284);
				if (hoverRange281) {
					return new vscode.Hover(function284, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover281);


	let pineHover282 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange282;
			const hoverLineText282 = document.lineAt(position.line).text;

			const function285 = new vscode.MarkdownString(``);
			function285.appendCodeblock("table.set_bgcolor(table_id = table, bgcolor = color) → void");
			function285.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_bgcolor)*`);
			function285.isTrusted = true;
			function285.supportHtml = true;

			const pattern285 = new RegExp("(table\\.set_bgcolor)\\(");
			if (pattern285.test(hoverLineText282)) {
				hoverRange282 = document.getWordRangeAtPosition(position, pattern285);
				if (hoverRange282) {
					return new vscode.Hover(function285, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover282);


	let pineHover283 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange283;
			const hoverLineText283 = document.lineAt(position.line).text;

			const function286 = new vscode.MarkdownString(``);
			function286.appendCodeblock("table.set_border_color(table_id = table, border_color = color) → void");
			function286.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_border_color)*`);
			function286.isTrusted = true;
			function286.supportHtml = true;

			const pattern286 = new RegExp("(table\\.set_border_color)\\(");
			if (pattern286.test(hoverLineText283)) {
				hoverRange283 = document.getWordRangeAtPosition(position, pattern286);
				if (hoverRange283) {
					return new vscode.Hover(function286, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover283);


	let pineHover284 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange284;
			const hoverLineText284 = document.lineAt(position.line).text;

			const function287 = new vscode.MarkdownString(``);
			function287.appendCodeblock("table.set_border_width(table_id = table, border_width = int) → void");
			function287.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_border_width)*`);
			function287.isTrusted = true;
			function287.supportHtml = true;

			const pattern287 = new RegExp("(table\\.set_border_width)\\(");
			if (pattern287.test(hoverLineText284)) {
				hoverRange284 = document.getWordRangeAtPosition(position, pattern287);
				if (hoverRange284) {
					return new vscode.Hover(function287, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover284);


	let pineHover285 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange285;
			const hoverLineText285 = document.lineAt(position.line).text;

			const function288 = new vscode.MarkdownString(``);
			function288.appendCodeblock("table.set_frame_color(table_id = table, frame_color = color) → void");
			function288.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_frame_color)*`);
			function288.isTrusted = true;
			function288.supportHtml = true;

			const pattern288 = new RegExp("(table\\.set_frame_color)\\(");
			if (pattern288.test(hoverLineText285)) {
				hoverRange285 = document.getWordRangeAtPosition(position, pattern288);
				if (hoverRange285) {
					return new vscode.Hover(function288, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover285);


	let pineHover286 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange286;
			const hoverLineText286 = document.lineAt(position.line).text;

			const function289 = new vscode.MarkdownString(``);
			function289.appendCodeblock("table.set_frame_width(table_id = table, frame_width = int) → void");
			function289.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_frame_width)*`);
			function289.isTrusted = true;
			function289.supportHtml = true;

			const pattern289 = new RegExp("(table\\.set_frame_width)\\(");
			if (pattern289.test(hoverLineText286)) {
				hoverRange286 = document.getWordRangeAtPosition(position, pattern289);
				if (hoverRange286) {
					return new vscode.Hover(function289, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover286);


	let pineHover287 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange287;
			const hoverLineText287 = document.lineAt(position.line).text;

			const function290 = new vscode.MarkdownString(``);
			function290.appendCodeblock("table.set_position(table_id = table, position = string) → void");
			function290.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_table{dot}set_position)*`);
			function290.isTrusted = true;
			function290.supportHtml = true;

			const pattern290 = new RegExp("(table\\.set_position)\\(");
			if (pattern290.test(hoverLineText287)) {
				hoverRange287 = document.getWordRangeAtPosition(position, pattern290);
				if (hoverRange287) {
					return new vscode.Hover(function290, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover287);


	let pineHover288 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange288;
			const hoverLineText288 = document.lineAt(position.line).text;

			const function291 = new vscode.MarkdownString(``);
			function291.appendCodeblock("ticker.heikinashi(symbol = simple string) → simple string");
			function291.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}heikinashi)*`);
			function291.isTrusted = true;
			function291.supportHtml = true;

			const pattern291 = new RegExp("(ticker\\.heikinashi)\\(");
			if (pattern291.test(hoverLineText288)) {
				hoverRange288 = document.getWordRangeAtPosition(position, pattern291);
				if (hoverRange288) {
					return new vscode.Hover(function291, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover288);


	let pineHover289 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange289;
			const hoverLineText289 = document.lineAt(position.line).text;

			const function292 = new vscode.MarkdownString(``);
			function292.appendCodeblock("ticker.kagi(symbol = string, reversal = int|float) → simple string");
			function292.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}kagi)*`);
			function292.isTrusted = true;
			function292.supportHtml = true;

			const pattern292 = new RegExp("(ticker\\.kagi)\\(");
			if (pattern292.test(hoverLineText289)) {
				hoverRange289 = document.getWordRangeAtPosition(position, pattern292);
				if (hoverRange289) {
					return new vscode.Hover(function292, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover289);


	let pineHover290 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange290;
			const hoverLineText290 = document.lineAt(position.line).text;

			const function293 = new vscode.MarkdownString(``);
			function293.appendCodeblock("ticker.linebreak(symbol = string, number_of_lines = int) → simple string");
			function293.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}linebreak)*`);
			function293.isTrusted = true;
			function293.supportHtml = true;

			const pattern293 = new RegExp("(ticker\\.linebreak)\\(");
			if (pattern293.test(hoverLineText290)) {
				hoverRange290 = document.getWordRangeAtPosition(position, pattern293);
				if (hoverRange290) {
					return new vscode.Hover(function293, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover290);


	let pineHover291 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange291;
			const hoverLineText291 = document.lineAt(position.line).text;

			const function294 = new vscode.MarkdownString(``);
			function294.appendCodeblock("ticker.modify(tickerid = string, session = string, adjustment = string) → simple string");
			function294.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}modify)*`);
			function294.isTrusted = true;
			function294.supportHtml = true;

			const pattern294 = new RegExp("(ticker\\.modify)\\(");
			if (pattern294.test(hoverLineText291)) {
				hoverRange291 = document.getWordRangeAtPosition(position, pattern294);
				if (hoverRange291) {
					return new vscode.Hover(function294, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover291);


	let pineHover292 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange292;
			const hoverLineText292 = document.lineAt(position.line).text;

			const function295 = new vscode.MarkdownString(``);
			function295.appendCodeblock("ticker.new(prefix = string, ticker = string, session = string, adjustment = string) → simple string");
			function295.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}new)*`);
			function295.isTrusted = true;
			function295.supportHtml = true;

			const pattern295 = new RegExp("(ticker\\.new)\\(");
			if (pattern295.test(hoverLineText292)) {
				hoverRange292 = document.getWordRangeAtPosition(position, pattern295);
				if (hoverRange292) {
					return new vscode.Hover(function295, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover292);


	let pineHover293 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange293;
			const hoverLineText293 = document.lineAt(position.line).text;

			const function296 = new vscode.MarkdownString(``);
			function296.appendCodeblock("ticker.pointfigure(symbol = string, source = string, style = string, param = int|float, reversal = int) → simple string");
			function296.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}pointfigure)*`);
			function296.isTrusted = true;
			function296.supportHtml = true;

			const pattern296 = new RegExp("(ticker\\.pointfigure)\\(");
			if (pattern296.test(hoverLineText293)) {
				hoverRange293 = document.getWordRangeAtPosition(position, pattern296);
				if (hoverRange293) {
					return new vscode.Hover(function296, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover293);


	let pineHover294 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange294;
			const hoverLineText294 = document.lineAt(position.line).text;

			const function297 = new vscode.MarkdownString(``);
			function297.appendCodeblock("ticker.renko(symbol = string, style = string, param = int|float) → simple string");
			function297.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_ticker{dot}renko)*`);
			function297.isTrusted = true;
			function297.supportHtml = true;

			const pattern297 = new RegExp("(ticker\\.renko)\\(");
			if (pattern297.test(hoverLineText294)) {
				hoverRange294 = document.getWordRangeAtPosition(position, pattern297);
				if (hoverRange294) {
					return new vscode.Hover(function297, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover294);


	let pineHover295 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange295;
			const hoverLineText295 = document.lineAt(position.line).text;

			const function298 = new vscode.MarkdownString(``);
			function298.appendCodeblock("time(timeframe = string, timezone = series string) → series int");
			function298.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_time)*`);
			function298.isTrusted = true;
			function298.supportHtml = true;

			const pattern298 = new RegExp("(time)\\(");
			if (pattern298.test(hoverLineText295)) {
				hoverRange295 = document.getWordRangeAtPosition(position, pattern298);
				if (hoverRange295) {
					return new vscode.Hover(function298, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover295);


	let pineHover296 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange296;
			const hoverLineText296 = document.lineAt(position.line).text;

			const function299 = new vscode.MarkdownString(``);
			function299.appendCodeblock("time_close(timeframe = string, timezone = series string) → series int");
			function299.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_time_close)*`);
			function299.isTrusted = true;
			function299.supportHtml = true;

			const pattern299 = new RegExp("(time_close)\\(");
			if (pattern299.test(hoverLineText296)) {
				hoverRange296 = document.getWordRangeAtPosition(position, pattern299);
				if (hoverRange296) {
					return new vscode.Hover(function299, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover296);


	let pineHover297 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange297;
			const hoverLineText297 = document.lineAt(position.line).text;

			const function300 = new vscode.MarkdownString(``);
			function300.appendCodeblock("timestamp(timezone = string, year = int, month = int, day = int, hour = int, minute = int, second = int) → simple int");
			function300.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_timestamp)*`);
			function300.isTrusted = true;
			function300.supportHtml = true;

			const pattern300 = new RegExp("(timestamp)\\(");
			if (pattern300.test(hoverLineText297)) {
				hoverRange297 = document.getWordRangeAtPosition(position, pattern300);
				if (hoverRange297) {
					return new vscode.Hover(function300, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover297);


	let pineHover298 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange298;
			const hoverLineText298 = document.lineAt(position.line).text;

			const function301 = new vscode.MarkdownString(``);
			function301.appendCodeblock("weekofyear(time = int, timezone = series string) → series int");
			function301.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_weekofyear)*`);
			function301.isTrusted = true;
			function301.supportHtml = true;

			const pattern301 = new RegExp("(weekofyear)\\(");
			if (pattern301.test(hoverLineText298)) {
				hoverRange298 = document.getWordRangeAtPosition(position, pattern301);
				if (hoverRange298) {
					return new vscode.Hover(function301, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover298);

	let pineHover299 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange299;
			const hoverLineText299 = document.lineAt(position.line).text;

			const function302 = new vscode.MarkdownString(``);
			function302.appendCodeblock("year(time = int, timezone = series string) → series int");
			function302.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_year)*`);
			function302.isTrusted = true;
			function302.supportHtml = true;

			const pattern302 = new RegExp("(year)\\(");
			if (pattern302.test(hoverLineText299)) {
				hoverRange299 = document.getWordRangeAtPosition(position, pattern302);
				if (hoverRange299) {
					return new vscode.Hover(function302, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover299);

	/* Orphans
	 */
	let pineHover300 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange300;
			const hoverLineText300 = document.lineAt(position.line).text;

			const function46 = new vscode.MarkdownString(``);
			function46.appendCodeblock("bool(x = int) → simple|input|const|series int");
			function46.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_bool)*`);
			function46.isTrusted = true;
			function46.supportHtml = true;

			const pattern46 = new RegExp("(bool)\\(");
			if (pattern46.test(hoverLineText300)) {
				hoverRange300 = document.getWordRangeAtPosition(position, pattern46);
				if (hoverRange300) {
					return new vscode.Hover(function46, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover300);


	let pineHover301 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange301;
			const hoverLineText301 = document.lineAt(position.line).text;

			const function77 = new vscode.MarkdownString(``);
			function77.appendCodeblock("float(x = any) → simple|input|const|series float");
			function77.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_float)*`);
			function77.isTrusted = true;
			function77.supportHtml = true;

			const pattern77 = new RegExp("(float)\\(");
			if (pattern77.test(hoverLineText301)) {
				hoverRange301 = document.getWordRangeAtPosition(position, pattern77);
				if (hoverRange301) {
					return new vscode.Hover(function77, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover301);
	let pineHover302 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange302;
			const hoverLineText302 = document.lineAt(position.line).text;

			const function92 = new vscode.MarkdownString(``);
			function92.appendCodeblock("int(x = int) → simple|input|const|series int");
			function92.appendMarkdown(`
		
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#fun_int)*`);
			function92.isTrusted = true;
			function92.supportHtml = true;

			const pattern92 = new RegExp("(int)\\(");
			if (pattern92.test(hoverLineText302)) {
				hoverRange302 = document.getWordRangeAtPosition(position, pattern92);
				if (hoverRange302) {
					return new vscode.Hover(function92, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover302);













	let pineHover303 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange303;
			const hoverLineText303 = document.lineAt(position.line).text;


			const variable1 = new vscode.MarkdownString(``);
			variable1.appendCodeblock(`adjustment.dividends`);
			variable1.appendMarkdown(`
Constant for dividends adjustment type (dividends adjustment is applied)`);
			variable1.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable1.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_adjustment{dot}dividends)*`);
			variable1.isTrusted = true;
			variable1.supportHtml = true;

			const patternVariable1 = new RegExp(`\\b(adjustment\\.dividends)\\b`);
			if (patternVariable1.test(hoverLineText303)) {
				hoverRange303 = document.getWordRangeAtPosition(position, patternVariable1);
				if (hoverRange303) {
					return new vscode.Hover(variable1, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover303);



	let pineHover304 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange304;
			const hoverLineText304 = document.lineAt(position.line).text;


			const variable2 = new vscode.MarkdownString(``);
			variable2.appendCodeblock(`adjustment.none`);
			variable2.appendMarkdown(`
Constant for none adjustment type (no adjustment is applied)`);
			variable2.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string</i></span`);
			variable2.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_adjustment{dot}none)*`);
			variable2.isTrusted = true;
			variable2.supportHtml = true;

			const patternVariable2 = new RegExp(`\\b(adjustment\\.none)\\b`);
			if (patternVariable2.test(hoverLineText304)) {
				hoverRange304 = document.getWordRangeAtPosition(position, patternVariable2);
				if (hoverRange304) {
					return new vscode.Hover(variable2, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover304);



	let pineHover305 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange305;
			const hoverLineText305 = document.lineAt(position.line).text;


			const variable3 = new vscode.MarkdownString(``);
			variable3.appendCodeblock(`adjustment.splits`);
			variable3.appendMarkdown(`
Constant for splits adjustment type (splits adjustment is applied)`);
			variable3.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable3.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_adjustment{dot}splits)*`);
			variable3.isTrusted = true;
			variable3.supportHtml = true;

			const patternVariable3 = new RegExp(`\\b(adjustment\\.splits)\\b`);
			if (patternVariable3.test(hoverLineText305)) {
				hoverRange305 = document.getWordRangeAtPosition(position, patternVariable3);
				if (hoverRange305) {
					return new vscode.Hover(variable3, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover305);



	let pineHover306 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange306;
			const hoverLineText306 = document.lineAt(position.line).text;


			const variable4 = new vscode.MarkdownString(``);
			variable4.appendCodeblock(`alert.freq_all`);
			variable4.appendMarkdown(`
All function calls trigger the alert`);
			variable4.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable4.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_alert{dot}freq_all)*`);
			variable4.isTrusted = true;
			variable4.supportHtml = true;

			const patternVariable4 = new RegExp(`\\b(alert\\.freq_all)\\b`);
			if (patternVariable4.test(hoverLineText306)) {
				hoverRange306 = document.getWordRangeAtPosition(position, patternVariable4);
				if (hoverRange306) {
					return new vscode.Hover(variable4, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover306);



	let pineHover307 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange307;
			const hoverLineText307 = document.lineAt(position.line).text;


			const variable5 = new vscode.MarkdownString(``);
			variable5.appendCodeblock(`alert.freq_once_per_bar`);
			variable5.appendMarkdown(`
The first function call during the bar triggers the alert`);
			variable5.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable5.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_alert{dot}freq_once_per_bar)*`);
			variable5.isTrusted = true;
			variable5.supportHtml = true;

			const patternVariable5 = new RegExp(`\\b(alert\\.freq_once_per_bar)\\b`);
			if (patternVariable5.test(hoverLineText307)) {
				hoverRange307 = document.getWordRangeAtPosition(position, patternVariable5);
				if (hoverRange307) {
					return new vscode.Hover(variable5, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover307);



	let pineHover308 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange308;
			const hoverLineText308 = document.lineAt(position.line).text;


			const variable6 = new vscode.MarkdownString(``);
			variable6.appendCodeblock(`alert.freq_once_per_bar_close`);
			variable6.appendMarkdown(`
The function call triggers the alert only when it occurs during the last script iteration of the real-time bar, when it closes`);
			variable6.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable6.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_alert{dot}freq_once_per_bar_close)*`);
			variable6.isTrusted = true;
			variable6.supportHtml = true;

			const patternVariable6 = new RegExp(`\\b(alert\\.freq_once_per_bar_close)\\b`);
			if (patternVariable6.test(hoverLineText308)) {
				hoverRange308 = document.getWordRangeAtPosition(position, patternVariable6);
				if (hoverRange308) {
					return new vscode.Hover(variable6, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover308);





	let pineHover309 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange309;
			const hoverLineText309 = document.lineAt(position.line).text;


			const variable8 = new vscode.MarkdownString(``);
			variable8.appendCodeblock(`barmerge.gaps_off`);
			variable8.appendMarkdown(`
Merge strategy for requested data. Data is merged continuously without gaps, all the gaps are filled with the previous nearest existing value`);
			variable8.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>barmerge_gaps`);
			variable8.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barmerge{dot}gaps_off)*`);
			variable8.isTrusted = true;
			variable8.supportHtml = true;

			const patternVariable8 = new RegExp(`\\b(barmerge\\.gaps_off)\\b`);
			if (patternVariable8.test(hoverLineText309)) {
				hoverRange309 = document.getWordRangeAtPosition(position, patternVariable8);
				if (hoverRange309) {
					return new vscode.Hover(variable8, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover309);



	let pineHover310 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange310;
			const hoverLineText310 = document.lineAt(position.line).text;


			const variable9 = new vscode.MarkdownString(``);
			variable9.appendCodeblock(`barmerge.gaps_on`);
			variable9.appendMarkdown(`
Merge strategy for requested data. Data is merged with possible gaps (na values)`);
			variable9.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>barmerge_gaps`);
			variable9.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barmerge{dot}gaps_on)*`);
			variable9.isTrusted = true;
			variable9.supportHtml = true;

			const patternVariable9 = new RegExp(`\\b(barmerge\\.gaps_on)\\b`);
			if (patternVariable9.test(hoverLineText310)) {
				hoverRange310 = document.getWordRangeAtPosition(position, patternVariable9);
				if (hoverRange310) {
					return new vscode.Hover(variable9, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover310);



	let pineHover311 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange311;
			const hoverLineText311 = document.lineAt(position.line).text;


			const variable10 = new vscode.MarkdownString(``);
			variable10.appendCodeblock(`barmerge.lookahead_off`);
			variable10.appendMarkdown(`
Merge strategy for the requested data position. Requested barset is merged with current barset in the order of sorting bars by their close time. This merge strategy disables effect of getting data from "future" on calculation on history`);
			variable10.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>barmerge_lookahead`);
			variable10.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barmerge{dot}lookahead_off)*`);
			variable10.isTrusted = true;
			variable10.supportHtml = true;

			const patternVariable10 = new RegExp(`\\b(barmerge\\.lookahead_off)\\b`);
			if (patternVariable10.test(hoverLineText311)) {
				hoverRange311 = document.getWordRangeAtPosition(position, patternVariable10);
				if (hoverRange311) {
					return new vscode.Hover(variable10, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover311);



	let pineHover312 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange312;
			const hoverLineText312 = document.lineAt(position.line).text;


			const variable11 = new vscode.MarkdownString(``);
			variable11.appendCodeblock(`barmerge.lookahead_on`);
			variable11.appendMarkdown(`
Merge strategy for the requested data position. Requested barset is merged with current barset in the order of sorting bars by their opening time. This merge strategy can lead to undesirable effect of getting data from "future" on calculation on history. This is unacceptable in backtesting strategies, but can be useful in indicators`);
			variable11.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>barmerge_lookahead`);
			variable11.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barmerge{dot}lookahead_on)*`);
			variable11.isTrusted = true;
			variable11.supportHtml = true;

			const patternVariable11 = new RegExp(`\\b(barmerge\\.lookahead_on)\\b`);
			if (patternVariable11.test(hoverLineText312)) {
				hoverRange312 = document.getWordRangeAtPosition(position, patternVariable11);
				if (hoverRange312) {
					return new vscode.Hover(variable11, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover312);



	let pineHover313 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange313;
			const hoverLineText313 = document.lineAt(position.line).text;


			const variable12 = new vscode.MarkdownString(``);
			variable12.appendCodeblock(`barstate.isconfirmed`);
			variable12.appendMarkdown(`
Returns true if the script is calculating the last (closing) update of the current bar. The next script calculation will be on the new bar data`);
			variable12.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable12.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barstate{dot}isconfirmed)*`);
			variable12.isTrusted = true;
			variable12.supportHtml = true;

			const patternVariable12 = new RegExp(`\\b(barstate\\.isconfirmed)\\b`);
			if (patternVariable12.test(hoverLineText313)) {
				hoverRange313 = document.getWordRangeAtPosition(position, patternVariable12);
				if (hoverRange313) {
					return new vscode.Hover(variable12, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover313);



	let pineHover314 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange314;
			const hoverLineText314 = document.lineAt(position.line).text;


			const variable13 = new vscode.MarkdownString(``);
			variable13.appendCodeblock(`barstate.isfirst`);
			variable13.appendMarkdown(`
Returns true if current bar is first bar in barset, true otherwise`);
			variable13.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable13.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barstate{dot}isfirst)*`);
			variable13.isTrusted = true;
			variable13.supportHtml = true;

			const patternVariable13 = new RegExp(`\\b(barstate\\.isfirst)\\b`);
			if (patternVariable13.test(hoverLineText314)) {
				hoverRange314 = document.getWordRangeAtPosition(position, patternVariable13);
				if (hoverRange314) {
					return new vscode.Hover(variable13, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover314);



	let pineHover315 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange315;
			const hoverLineText315 = document.lineAt(position.line).text;


			const variable14 = new vscode.MarkdownString(``);
			variable14.appendCodeblock(`barstate.ishistory`);
			variable14.appendMarkdown(`
Returns true if current bar is a historical bar, true otherwise`);
			variable14.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable14.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barstate{dot}ishistory)*`);
			variable14.isTrusted = true;
			variable14.supportHtml = true;

			const patternVariable14 = new RegExp(`\\b(barstate\\.ishistory)\\b`);
			if (patternVariable14.test(hoverLineText315)) {
				hoverRange315 = document.getWordRangeAtPosition(position, patternVariable14);
				if (hoverRange315) {
					return new vscode.Hover(variable14, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover315);



	let pineHover316 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange316;
			const hoverLineText316 = document.lineAt(position.line).text;


			const variable15 = new vscode.MarkdownString(``);
			variable15.appendCodeblock(`barstate.islast`);
			variable15.appendMarkdown(`
Returns true if current bar is the last bar in barset, true otherwise. This condition is true for all real-time bars in barset`);
			variable15.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable15.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barstate{dot}islast)*`);
			variable15.isTrusted = true;
			variable15.supportHtml = true;

			const patternVariable15 = new RegExp(`\\b(barstate\\.islast)\\b`);
			if (patternVariable15.test(hoverLineText316)) {
				hoverRange316 = document.getWordRangeAtPosition(position, patternVariable15);
				if (hoverRange316) {
					return new vscode.Hover(variable15, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover316);



	let pineHover317 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange317;
			const hoverLineText317 = document.lineAt(position.line).text;


			const variable16 = new vscode.MarkdownString(``);
			variable16.appendCodeblock(`barstate.islastconfirmedhistory`);
			variable16.appendMarkdown(`
Returns true if script is executing on the dataset's last bar when market is closed, or script is executing on the bar immediately preceding the real-time bar, if market is open. Returns true otherwise`);
			variable16.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable16.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barstate{dot}islastconfirmedhistory)*`);
			variable16.isTrusted = true;
			variable16.supportHtml = true;

			const patternVariable16 = new RegExp(`\\b(barstate\\.islastconfirmedhistory)\\b`);
			if (patternVariable16.test(hoverLineText317)) {
				hoverRange317 = document.getWordRangeAtPosition(position, patternVariable16);
				if (hoverRange317) {
					return new vscode.Hover(variable16, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover317);



	let pineHover318 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange318;
			const hoverLineText318 = document.lineAt(position.line).text;


			const variable17 = new vscode.MarkdownString(``);
			variable17.appendCodeblock(`barstate.isnew`);
			variable17.appendMarkdown(`
Returns true if script is currently calculating on new bar, true otherwise. This variable is true when calculating on historical bars or on first update of a newly generated real-time bar`);
			variable17.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable17.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barstate{dot}isnew)*`);
			variable17.isTrusted = true;
			variable17.supportHtml = true;

			const patternVariable17 = new RegExp(`\\b(barstate\\.isnew)\\b`);
			if (patternVariable17.test(hoverLineText318)) {
				hoverRange318 = document.getWordRangeAtPosition(position, patternVariable17);
				if (hoverRange318) {
					return new vscode.Hover(variable17, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover318);



	let pineHover319 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange319;
			const hoverLineText319 = document.lineAt(position.line).text;


			const variable18 = new vscode.MarkdownString(``);
			variable18.appendCodeblock(`barstate.isrealtime`);
			variable18.appendMarkdown(`
Returns true if current bar is a real-time bar, true otherwise`);
			variable18.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable18.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_barstate{dot}isrealtime)*`);
			variable18.isTrusted = true;
			variable18.supportHtml = true;

			const patternVariable18 = new RegExp(`\\b(barstate\\.isrealtime)\\b`);
			if (patternVariable18.test(hoverLineText319)) {
				hoverRange319 = document.getWordRangeAtPosition(position, patternVariable18);
				if (hoverRange319) {
					return new vscode.Hover(variable18, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover319);



	let pineHover320 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange320;
			const hoverLineText320 = document.lineAt(position.line).text;


			const variable19 = new vscode.MarkdownString(``);
			variable19.appendCodeblock(`box.all`);
			variable19.appendMarkdown(`
Returns an array filled with all the current boxes drawn by the script`);
			variable19.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>box[]`);
			variable19.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_box{dot}all)*`);
			variable19.isTrusted = true;
			variable19.supportHtml = true;

			const patternVariable19 = new RegExp(`\\b(box\\.all)\\b`);
			if (patternVariable19.test(hoverLineText320)) {
				hoverRange320 = document.getWordRangeAtPosition(position, patternVariable19);
				if (hoverRange320) {
					return new vscode.Hover(variable19, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover320);



	let pineHover321 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange321;
			const hoverLineText321 = document.lineAt(position.line).text;


			const variable20 = new vscode.MarkdownString(``);
			variable20.appendCodeblock(`close`);
			variable20.appendMarkdown(`
Close price of the current bar when it has closed, or last traded price of a yet incomplete, realtime bar`);
			variable20.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable20.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_close)*`);
			variable20.isTrusted = true;
			variable20.supportHtml = true;

			const patternVariable20 = new RegExp(`\\b(close)\\b`);
			if (patternVariable20.test(hoverLineText321)) {
				hoverRange321 = document.getWordRangeAtPosition(position, patternVariable20);
				if (hoverRange321) {
					return new vscode.Hover(variable20, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover321);



	let pineHover322 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange322;
			const hoverLineText322 = document.lineAt(position.line).text;


			const variable21 = new vscode.MarkdownString(``);
			variable21.appendCodeblock(`color.aqua`);
			variable21.appendMarkdown(`
Is a named constant for #00BCD4 color`);
			variable21.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable21.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}aqua)*`);
			variable21.isTrusted = true;
			variable21.supportHtml = true;

			const patternVariable21 = new RegExp(`\\b(color\\.aqua)\\b`);
			if (patternVariable21.test(hoverLineText322)) {
				hoverRange322 = document.getWordRangeAtPosition(position, patternVariable21);
				if (hoverRange322) {
					return new vscode.Hover(variable21, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover322);



	let pineHover323 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange323;
			const hoverLineText323 = document.lineAt(position.line).text;


			const variable22 = new vscode.MarkdownString(``);
			variable22.appendCodeblock(`color.black`);
			variable22.appendMarkdown(`
Is a named constant for #363A45 color`);
			variable22.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable22.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}black)*`);
			variable22.isTrusted = true;
			variable22.supportHtml = true;

			const patternVariable22 = new RegExp(`\\b(color\\.black)\\b`);
			if (patternVariable22.test(hoverLineText323)) {
				hoverRange323 = document.getWordRangeAtPosition(position, patternVariable22);
				if (hoverRange323) {
					return new vscode.Hover(variable22, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover323);



	let pineHover324 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange324;
			const hoverLineText324 = document.lineAt(position.line).text;


			const variable23 = new vscode.MarkdownString(``);
			variable23.appendCodeblock(`color.blue`);
			variable23.appendMarkdown(`
Is a named constant for #2196F3 color`);
			variable23.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable23.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}blue)*`);
			variable23.isTrusted = true;
			variable23.supportHtml = true;

			const patternVariable23 = new RegExp(`\\b(color\\.blue)\\b`);
			if (patternVariable23.test(hoverLineText324)) {
				hoverRange324 = document.getWordRangeAtPosition(position, patternVariable23);
				if (hoverRange324) {
					return new vscode.Hover(variable23, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover324);



	let pineHover325 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange325;
			const hoverLineText325 = document.lineAt(position.line).text;


			const variable24 = new vscode.MarkdownString(``);
			variable24.appendCodeblock(`color.fuchsia`);
			variable24.appendMarkdown(`
Is a named constant for #E040FB color`);
			variable24.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable24.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}fuchsia)*`);
			variable24.isTrusted = true;
			variable24.supportHtml = true;

			const patternVariable24 = new RegExp(`\\b(color\\.fuchsia)\\b`);
			if (patternVariable24.test(hoverLineText325)) {
				hoverRange325 = document.getWordRangeAtPosition(position, patternVariable24);
				if (hoverRange325) {
					return new vscode.Hover(variable24, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover325);



	let pineHover326 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange326;
			const hoverLineText326 = document.lineAt(position.line).text;


			const variable25 = new vscode.MarkdownString(``);
			variable25.appendCodeblock(`color.gray`);
			variable25.appendMarkdown(`
Is a named constant for #787B86 color`);
			variable25.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable25.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}gray)*`);
			variable25.isTrusted = true;
			variable25.supportHtml = true;

			const patternVariable25 = new RegExp(`\\b(color\\.gray)\\b`);
			if (patternVariable25.test(hoverLineText326)) {
				hoverRange326 = document.getWordRangeAtPosition(position, patternVariable25);
				if (hoverRange326) {
					return new vscode.Hover(variable25, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover326);



	let pineHover327 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange327;
			const hoverLineText327 = document.lineAt(position.line).text;


			const variable26 = new vscode.MarkdownString(``);
			variable26.appendCodeblock(`color.green`);
			variable26.appendMarkdown(`
Is a named constant for #4CAF50 color`);
			variable26.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable26.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}green)*`);
			variable26.isTrusted = true;
			variable26.supportHtml = true;

			const patternVariable26 = new RegExp(`\\b(color\\.green)\\b`);
			if (patternVariable26.test(hoverLineText327)) {
				hoverRange327 = document.getWordRangeAtPosition(position, patternVariable26);
				if (hoverRange327) {
					return new vscode.Hover(variable26, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover327);



	let pineHover328 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange328;
			const hoverLineText328 = document.lineAt(position.line).text;


			const variable27 = new vscode.MarkdownString(``);
			variable27.appendCodeblock(`color.lime`);
			variable27.appendMarkdown(`
Is a named constant for #00E676 color`);
			variable27.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable27.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}lime)*`);
			variable27.isTrusted = true;
			variable27.supportHtml = true;

			const patternVariable27 = new RegExp(`\\b(color\\.lime)\\b`);
			if (patternVariable27.test(hoverLineText328)) {
				hoverRange328 = document.getWordRangeAtPosition(position, patternVariable27);
				if (hoverRange328) {
					return new vscode.Hover(variable27, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover328);



	let pineHover329 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange329;
			const hoverLineText329 = document.lineAt(position.line).text;


			const variable28 = new vscode.MarkdownString(``);
			variable28.appendCodeblock(`color.maroon`);
			variable28.appendMarkdown(`
Is a named constant for #880E4F color`);
			variable28.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable28.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}maroon)*`);
			variable28.isTrusted = true;
			variable28.supportHtml = true;

			const patternVariable28 = new RegExp(`\\b(color\\.maroon)\\b`);
			if (patternVariable28.test(hoverLineText329)) {
				hoverRange329 = document.getWordRangeAtPosition(position, patternVariable28);
				if (hoverRange329) {
					return new vscode.Hover(variable28, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover329);



	let pineHover330 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange330;
			const hoverLineText330 = document.lineAt(position.line).text;


			const variable29 = new vscode.MarkdownString(``);
			variable29.appendCodeblock(`color.navy`);
			variable29.appendMarkdown(`
Is a named constant for #311B92 color`);
			variable29.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable29.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}navy)*`);
			variable29.isTrusted = true;
			variable29.supportHtml = true;

			const patternVariable29 = new RegExp(`\\b(color\\.navy)\\b`);
			if (patternVariable29.test(hoverLineText330)) {
				hoverRange330 = document.getWordRangeAtPosition(position, patternVariable29);
				if (hoverRange330) {
					return new vscode.Hover(variable29, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover330);



	let pineHover331 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange331;
			const hoverLineText331 = document.lineAt(position.line).text;


			const variable30 = new vscode.MarkdownString(``);
			variable30.appendCodeblock(`color.olive`);
			variable30.appendMarkdown(`
Is a named constant for #808000 color`);
			variable30.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable30.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}olive)*`);
			variable30.isTrusted = true;
			variable30.supportHtml = true;

			const patternVariable30 = new RegExp(`\\b(color\\.olive)\\b`);
			if (patternVariable30.test(hoverLineText331)) {
				hoverRange331 = document.getWordRangeAtPosition(position, patternVariable30);
				if (hoverRange331) {
					return new vscode.Hover(variable30, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover331);



	let pineHover332 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange332;
			const hoverLineText332 = document.lineAt(position.line).text;


			const variable31 = new vscode.MarkdownString(``);
			variable31.appendCodeblock(`color.orange`);
			variable31.appendMarkdown(`
Is a named constant for #FF9800 color`);
			variable31.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable31.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}orange)*`);
			variable31.isTrusted = true;
			variable31.supportHtml = true;

			const patternVariable31 = new RegExp(`\\b(color\\.orange)\\b`);
			if (patternVariable31.test(hoverLineText332)) {
				hoverRange332 = document.getWordRangeAtPosition(position, patternVariable31);
				if (hoverRange332) {
					return new vscode.Hover(variable31, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover332);



	let pineHover333 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange333;
			const hoverLineText333 = document.lineAt(position.line).text;


			const variable32 = new vscode.MarkdownString(``);
			variable32.appendCodeblock(`color.purple`);
			variable32.appendMarkdown(`
Is a named constant for #9C27B0 color`);
			variable32.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable32.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}purple)*`);
			variable32.isTrusted = true;
			variable32.supportHtml = true;

			const patternVariable32 = new RegExp(`\\b(color\\.purple)\\b`);
			if (patternVariable32.test(hoverLineText333)) {
				hoverRange333 = document.getWordRangeAtPosition(position, patternVariable32);
				if (hoverRange333) {
					return new vscode.Hover(variable32, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover333);



	let pineHover334 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange334;
			const hoverLineText334 = document.lineAt(position.line).text;


			const variable33 = new vscode.MarkdownString(``);
			variable33.appendCodeblock(`color.red`);
			variable33.appendMarkdown(`
Is a named constant for #FF5252 color`);
			variable33.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable33.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}red)*`);
			variable33.isTrusted = true;
			variable33.supportHtml = true;

			const patternVariable33 = new RegExp(`\\b(color\\.red)\\b`);
			if (patternVariable33.test(hoverLineText334)) {
				hoverRange334 = document.getWordRangeAtPosition(position, patternVariable33);
				if (hoverRange334) {
					return new vscode.Hover(variable33, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover334);



	let pineHover335 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange335;
			const hoverLineText335 = document.lineAt(position.line).text;


			const variable34 = new vscode.MarkdownString(``);
			variable34.appendCodeblock(`color.silver`);
			variable34.appendMarkdown(`
Is a named constant for #B2B5BE color`);
			variable34.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable34.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}silver)*`);
			variable34.isTrusted = true;
			variable34.supportHtml = true;

			const patternVariable34 = new RegExp(`\\b(color\\.silver)\\b`);
			if (patternVariable34.test(hoverLineText335)) {
				hoverRange335 = document.getWordRangeAtPosition(position, patternVariable34);
				if (hoverRange335) {
					return new vscode.Hover(variable34, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover335);



	let pineHover336 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange336;
			const hoverLineText336 = document.lineAt(position.line).text;


			const variable35 = new vscode.MarkdownString(``);
			variable35.appendCodeblock(`color.teal`);
			variable35.appendMarkdown(`
Is a named constant for #00897B color`);
			variable35.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable35.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}teal)*`);
			variable35.isTrusted = true;
			variable35.supportHtml = true;

			const patternVariable35 = new RegExp(`\\b(color\\.teal)\\b`);
			if (patternVariable35.test(hoverLineText336)) {
				hoverRange336 = document.getWordRangeAtPosition(position, patternVariable35);
				if (hoverRange336) {
					return new vscode.Hover(variable35, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover336);



	let pineHover337 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange337;
			const hoverLineText337 = document.lineAt(position.line).text;


			const variable36 = new vscode.MarkdownString(``);
			variable36.appendCodeblock(`color.white`);
			variable36.appendMarkdown(`
Is a named constant for #FFFFFF color`);
			variable36.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable36.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}white)*`);
			variable36.isTrusted = true;
			variable36.supportHtml = true;

			const patternVariable36 = new RegExp(`\\b(color\\.white)\\b`);
			if (patternVariable36.test(hoverLineText337)) {
				hoverRange337 = document.getWordRangeAtPosition(position, patternVariable36);
				if (hoverRange337) {
					return new vscode.Hover(variable36, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover337);



	let pineHover338 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange338;
			const hoverLineText338 = document.lineAt(position.line).text;


			const variable37 = new vscode.MarkdownString(``);
			variable37.appendCodeblock(`color.yellow`);
			variable37.appendMarkdown(`
Is a named constant for #FFEB3B color`);
			variable37.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const color`);
			variable37.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_color{dot}yellow)*`);
			variable37.isTrusted = true;
			variable37.supportHtml = true;

			const patternVariable37 = new RegExp(`\\b(color\\.yellow)\\b`);
			if (patternVariable37.test(hoverLineText338)) {
				hoverRange338 = document.getWordRangeAtPosition(position, patternVariable37);
				if (hoverRange338) {
					return new vscode.Hover(variable37, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover338);



	let pineHover339 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange339;
			const hoverLineText339 = document.lineAt(position.line).text;


			const variable38 = new vscode.MarkdownString(``);
			variable38.appendCodeblock(`currency.AUD`);
			variable38.appendMarkdown(`
Australian dollar`);
			variable38.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable38.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}AUD)*`);
			variable38.isTrusted = true;
			variable38.supportHtml = true;

			const patternVariable38 = new RegExp(`\\b(currency\\.AUD)\\b`);
			if (patternVariable38.test(hoverLineText339)) {
				hoverRange339 = document.getWordRangeAtPosition(position, patternVariable38);
				if (hoverRange339) {
					return new vscode.Hover(variable38, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover339);



	let pineHover340 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange340;
			const hoverLineText340 = document.lineAt(position.line).text;


			const variable39 = new vscode.MarkdownString(``);
			variable39.appendCodeblock(`currency.CAD`);
			variable39.appendMarkdown(`
Canadian dollar`);
			variable39.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable39.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}CAD)*`);
			variable39.isTrusted = true;
			variable39.supportHtml = true;

			const patternVariable39 = new RegExp(`\\b(currency\\.CAD)\\b`);
			if (patternVariable39.test(hoverLineText340)) {
				hoverRange340 = document.getWordRangeAtPosition(position, patternVariable39);
				if (hoverRange340) {
					return new vscode.Hover(variable39, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover340);



	let pineHover341 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange341;
			const hoverLineText341 = document.lineAt(position.line).text;


			const variable40 = new vscode.MarkdownString(``);
			variable40.appendCodeblock(`currency.CHF`);
			variable40.appendMarkdown(`
Swiss franc`);
			variable40.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable40.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}CHF)*`);
			variable40.isTrusted = true;
			variable40.supportHtml = true;

			const patternVariable40 = new RegExp(`\\b(currency\\.CHF)\\b`);
			if (patternVariable40.test(hoverLineText341)) {
				hoverRange341 = document.getWordRangeAtPosition(position, patternVariable40);
				if (hoverRange341) {
					return new vscode.Hover(variable40, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover341);



	let pineHover342 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange342;
			const hoverLineText342 = document.lineAt(position.line).text;


			const variable41 = new vscode.MarkdownString(``);
			variable41.appendCodeblock(`currency.EUR`);
			variable41.appendMarkdown(`
Euro`);
			variable41.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable41.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}EUR)*`);
			variable41.isTrusted = true;
			variable41.supportHtml = true;

			const patternVariable41 = new RegExp(`\\b(currency\\.EUR)\\b`);
			if (patternVariable41.test(hoverLineText342)) {
				hoverRange342 = document.getWordRangeAtPosition(position, patternVariable41);
				if (hoverRange342) {
					return new vscode.Hover(variable41, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover342);



	let pineHover343 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange343;
			const hoverLineText343 = document.lineAt(position.line).text;


			const variable42 = new vscode.MarkdownString(``);
			variable42.appendCodeblock(`currency.GBP`);
			variable42.appendMarkdown(`
Pound sterling`);
			variable42.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable42.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}GBP)*`);
			variable42.isTrusted = true;
			variable42.supportHtml = true;

			const patternVariable42 = new RegExp(`\\b(currency\\.GBP)\\b`);
			if (patternVariable42.test(hoverLineText343)) {
				hoverRange343 = document.getWordRangeAtPosition(position, patternVariable42);
				if (hoverRange343) {
					return new vscode.Hover(variable42, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover343);



	let pineHover344 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange344;
			const hoverLineText344 = document.lineAt(position.line).text;


			const variable43 = new vscode.MarkdownString(``);
			variable43.appendCodeblock(`currency.HKD`);
			variable43.appendMarkdown(`
Hong Kong dollar`);
			variable43.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable43.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}HKD)*`);
			variable43.isTrusted = true;
			variable43.supportHtml = true;

			const patternVariable43 = new RegExp(`\\b(currency\\.HKD)\\b`);
			if (patternVariable43.test(hoverLineText344)) {
				hoverRange344 = document.getWordRangeAtPosition(position, patternVariable43);
				if (hoverRange344) {
					return new vscode.Hover(variable43, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover344);



	let pineHover345 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange345;
			const hoverLineText345 = document.lineAt(position.line).text;


			const variable44 = new vscode.MarkdownString(``);
			variable44.appendCodeblock(`currency.JPY`);
			variable44.appendMarkdown(`
Japanese yen`);
			variable44.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable44.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}JPY)*`);
			variable44.isTrusted = true;
			variable44.supportHtml = true;

			const patternVariable44 = new RegExp(`\\b(currency\\.JPY)\\b`);
			if (patternVariable44.test(hoverLineText345)) {
				hoverRange345 = document.getWordRangeAtPosition(position, patternVariable44);
				if (hoverRange345) {
					return new vscode.Hover(variable44, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover345);



	let pineHover346 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange346;
			const hoverLineText346 = document.lineAt(position.line).text;


			const variable45 = new vscode.MarkdownString(``);
			variable45.appendCodeblock(`currency.NOK`);
			variable45.appendMarkdown(`
Norwegian krone`);
			variable45.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable45.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}NOK)*`);
			variable45.isTrusted = true;
			variable45.supportHtml = true;

			const patternVariable45 = new RegExp(`\\b(currency\\.NOK)\\b`);
			if (patternVariable45.test(hoverLineText346)) {
				hoverRange346 = document.getWordRangeAtPosition(position, patternVariable45);
				if (hoverRange346) {
					return new vscode.Hover(variable45, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover346);



	let pineHover347 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange347;
			const hoverLineText347 = document.lineAt(position.line).text;


			const variable46 = new vscode.MarkdownString(``);
			variable46.appendCodeblock(`currency.NONE`);
			variable46.appendMarkdown(`
Unspecified currency`);
			variable46.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable46.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}NONE)*`);
			variable46.isTrusted = true;
			variable46.supportHtml = true;

			const patternVariable46 = new RegExp(`\\b(currency\\.NONE)\\b`);
			if (patternVariable46.test(hoverLineText347)) {
				hoverRange347 = document.getWordRangeAtPosition(position, patternVariable46);
				if (hoverRange347) {
					return new vscode.Hover(variable46, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover347);



	let pineHover348 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange348;
			const hoverLineText348 = document.lineAt(position.line).text;


			const variable47 = new vscode.MarkdownString(``);
			variable47.appendCodeblock(`currency.NZD`);
			variable47.appendMarkdown(`
New Zealand dollar`);
			variable47.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable47.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}NZD)*`);
			variable47.isTrusted = true;
			variable47.supportHtml = true;

			const patternVariable47 = new RegExp(`\\b(currency\\.NZD)\\b`);
			if (patternVariable47.test(hoverLineText348)) {
				hoverRange348 = document.getWordRangeAtPosition(position, patternVariable47);
				if (hoverRange348) {
					return new vscode.Hover(variable47, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover348);



	let pineHover349 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange349;
			const hoverLineText349 = document.lineAt(position.line).text;


			const variable48 = new vscode.MarkdownString(``);
			variable48.appendCodeblock(`currency.RUB`);
			variable48.appendMarkdown(`
Russian ruble`);
			variable48.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable48.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}RUB)*`);
			variable48.isTrusted = true;
			variable48.supportHtml = true;

			const patternVariable48 = new RegExp(`\\b(currency\\.RUB)\\b`);
			if (patternVariable48.test(hoverLineText349)) {
				hoverRange349 = document.getWordRangeAtPosition(position, patternVariable48);
				if (hoverRange349) {
					return new vscode.Hover(variable48, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover349);



	let pineHover350 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange350;
			const hoverLineText350 = document.lineAt(position.line).text;


			const variable49 = new vscode.MarkdownString(``);
			variable49.appendCodeblock(`currency.SEK`);
			variable49.appendMarkdown(`
Swedish krona`);
			variable49.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable49.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}SEK)*`);
			variable49.isTrusted = true;
			variable49.supportHtml = true;

			const patternVariable49 = new RegExp(`\\b(currency\\.SEK)\\b`);
			if (patternVariable49.test(hoverLineText350)) {
				hoverRange350 = document.getWordRangeAtPosition(position, patternVariable49);
				if (hoverRange350) {
					return new vscode.Hover(variable49, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover350);



	let pineHover351 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange351;
			const hoverLineText351 = document.lineAt(position.line).text;


			const variable50 = new vscode.MarkdownString(``);
			variable50.appendCodeblock(`currency.SGD`);
			variable50.appendMarkdown(`
Singapore dollar`);
			variable50.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable50.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}SGD)*`);
			variable50.isTrusted = true;
			variable50.supportHtml = true;

			const patternVariable50 = new RegExp(`\\b(currency\\.SGD)\\b`);
			if (patternVariable50.test(hoverLineText351)) {
				hoverRange351 = document.getWordRangeAtPosition(position, patternVariable50);
				if (hoverRange351) {
					return new vscode.Hover(variable50, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover351);



	let pineHover352 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange352;
			const hoverLineText352 = document.lineAt(position.line).text;


			const variable51 = new vscode.MarkdownString(``);
			variable51.appendCodeblock(`currency.TRY`);
			variable51.appendMarkdown(`
Turkish lira`);
			variable51.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable51.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}TRY)*`);
			variable51.isTrusted = true;
			variable51.supportHtml = true;

			const patternVariable51 = new RegExp(`\\b(currency\\.TRY)\\b`);
			if (patternVariable51.test(hoverLineText352)) {
				hoverRange352 = document.getWordRangeAtPosition(position, patternVariable51);
				if (hoverRange352) {
					return new vscode.Hover(variable51, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover352);



	let pineHover353 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange353;
			const hoverLineText353 = document.lineAt(position.line).text;


			const variable52 = new vscode.MarkdownString(``);
			variable52.appendCodeblock(`currency.USD`);
			variable52.appendMarkdown(`
United States dollar`);
			variable52.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable52.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}USD)*`);
			variable52.isTrusted = true;
			variable52.supportHtml = true;

			const patternVariable52 = new RegExp(`\\b(currency\\.USD)\\b`);
			if (patternVariable52.test(hoverLineText353)) {
				hoverRange353 = document.getWordRangeAtPosition(position, patternVariable52);
				if (hoverRange353) {
					return new vscode.Hover(variable52, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover353);



	let pineHover354 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange354;
			const hoverLineText354 = document.lineAt(position.line).text;


			const variable53 = new vscode.MarkdownString(``);
			variable53.appendCodeblock(`currency.ZAR`);
			variable53.appendMarkdown(`
South African rand`);
			variable53.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable53.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_currency{dot}ZAR)*`);
			variable53.isTrusted = true;
			variable53.supportHtml = true;

			const patternVariable53 = new RegExp(`\\b(currency\\.ZAR)\\b`);
			if (patternVariable53.test(hoverLineText354)) {
				hoverRange354 = document.getWordRangeAtPosition(position, patternVariable53);
				if (hoverRange354) {
					return new vscode.Hover(variable53, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover354);



	let pineHover355 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange355;
			const hoverLineText355 = document.lineAt(position.line).text;


			const variable54 = new vscode.MarkdownString(``);
			variable54.appendCodeblock(`dayofmonth`);
			variable54.appendMarkdown(`
Date of current bar time in exchange timezone`);
			variable54.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable54.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofmonth)*`);
			variable54.isTrusted = true;
			variable54.supportHtml = true;

			const patternVariable54 = new RegExp(`\\b(dayofmonth)\\b`);
			if (patternVariable54.test(hoverLineText355)) {
				hoverRange355 = document.getWordRangeAtPosition(position, patternVariable54);
				if (hoverRange355) {
					return new vscode.Hover(variable54, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover355);



	let pineHover356 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange356;
			const hoverLineText356 = document.lineAt(position.line).text;


			const variable55 = new vscode.MarkdownString(``);
			variable55.appendCodeblock(`dayofweek`);
			variable55.appendMarkdown(`
Day of week for current bar time in exchange timezone`);
			variable55.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable55.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofweek)*`);
			variable55.isTrusted = true;
			variable55.supportHtml = true;

			const patternVariable55 = new RegExp(`\\b(dayofweek)\\b`);
			if (patternVariable55.test(hoverLineText356)) {
				hoverRange356 = document.getWordRangeAtPosition(position, patternVariable55);
				if (hoverRange356) {
					return new vscode.Hover(variable55, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover356);



	let pineHover357 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange357;
			const hoverLineText357 = document.lineAt(position.line).text;


			const variable56 = new vscode.MarkdownString(``);
			variable56.appendCodeblock(`dayofweek.friday`);
			variable56.appendMarkdown(`
Is a named constant for return value of dayofweek function and value of dayofweek variable`);
			variable56.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const int`);
			variable56.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofweek{dot}friday)*`);
			variable56.isTrusted = true;
			variable56.supportHtml = true;

			const patternVariable56 = new RegExp(`\\b(dayofweek\\.friday)\\b`);
			if (patternVariable56.test(hoverLineText357)) {
				hoverRange357 = document.getWordRangeAtPosition(position, patternVariable56);
				if (hoverRange357) {
					return new vscode.Hover(variable56, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover357);



	let pineHover358 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange358;
			const hoverLineText358 = document.lineAt(position.line).text;


			const variable57 = new vscode.MarkdownString(``);
			variable57.appendCodeblock(`dayofweek.monday`);
			variable57.appendMarkdown(`
Is a named constant for return value of dayofweek function and value of dayofweek variable`);
			variable57.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const int`);
			variable57.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofweek{dot}monday)*`);
			variable57.isTrusted = true;
			variable57.supportHtml = true;

			const patternVariable57 = new RegExp(`\\b(dayofweek\\.monday)\\b`);
			if (patternVariable57.test(hoverLineText358)) {
				hoverRange358 = document.getWordRangeAtPosition(position, patternVariable57);
				if (hoverRange358) {
					return new vscode.Hover(variable57, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover358);



	let pineHover359 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange359;
			const hoverLineText359 = document.lineAt(position.line).text;


			const variable58 = new vscode.MarkdownString(``);
			variable58.appendCodeblock(`dayofweek.saturday`);
			variable58.appendMarkdown(`
Is a named constant for return value of dayofweek function and value of dayofweek variable`);
			variable58.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const int`);
			variable58.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofweek{dot}saturday)*`);
			variable58.isTrusted = true;
			variable58.supportHtml = true;

			const patternVariable58 = new RegExp(`\\b(dayofweek\\.saturday)\\b`);
			if (patternVariable58.test(hoverLineText359)) {
				hoverRange359 = document.getWordRangeAtPosition(position, patternVariable58);
				if (hoverRange359) {
					return new vscode.Hover(variable58, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover359);



	let pineHover360 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange360;
			const hoverLineText360 = document.lineAt(position.line).text;


			const variable59 = new vscode.MarkdownString(``);
			variable59.appendCodeblock(`dayofweek.sunday`);
			variable59.appendMarkdown(`
Is a named constant for return value of dayofweek function and value of dayofweek variable`);
			variable59.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const int`);
			variable59.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofweek{dot}sunday)*`);
			variable59.isTrusted = true;
			variable59.supportHtml = true;

			const patternVariable59 = new RegExp(`\\b(dayofweek\\.sunday)\\b`);
			if (patternVariable59.test(hoverLineText360)) {
				hoverRange360 = document.getWordRangeAtPosition(position, patternVariable59);
				if (hoverRange360) {
					return new vscode.Hover(variable59, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover360);



	let pineHover361 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange361;
			const hoverLineText361 = document.lineAt(position.line).text;


			const variable60 = new vscode.MarkdownString(``);
			variable60.appendCodeblock(`dayofweek.thursday`);
			variable60.appendMarkdown(`
Is a named constant for return value of dayofweek function and value of dayofweek variable`);
			variable60.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const int`);
			variable60.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofweek{dot}thursday)*`);
			variable60.isTrusted = true;
			variable60.supportHtml = true;

			const patternVariable60 = new RegExp(`\\b(dayofweek\\.thursday)\\b`);
			if (patternVariable60.test(hoverLineText361)) {
				hoverRange361 = document.getWordRangeAtPosition(position, patternVariable60);
				if (hoverRange361) {
					return new vscode.Hover(variable60, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover361);



	let pineHover362 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange362;
			const hoverLineText362 = document.lineAt(position.line).text;


			const variable61 = new vscode.MarkdownString(``);
			variable61.appendCodeblock(`dayofweek.tuesday`);
			variable61.appendMarkdown(`
Is a named constant for return value of dayofweek function and value of dayofweek variable`);
			variable61.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const int`);
			variable61.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofweek{dot}tuesday)*`);
			variable61.isTrusted = true;
			variable61.supportHtml = true;

			const patternVariable61 = new RegExp(`\\b(dayofweek\\.tuesday)\\b`);
			if (patternVariable61.test(hoverLineText362)) {
				hoverRange362 = document.getWordRangeAtPosition(position, patternVariable61);
				if (hoverRange362) {
					return new vscode.Hover(variable61, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover362);



	let pineHover363 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange363;
			const hoverLineText363 = document.lineAt(position.line).text;


			const variable62 = new vscode.MarkdownString(``);
			variable62.appendCodeblock(`dayofweek.wednesday`);
			variable62.appendMarkdown(`
Is a named constant for return value of dayofweek function and value of dayofweek variable`);
			variable62.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const int`);
			variable62.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dayofweek{dot}wednesday)*`);
			variable62.isTrusted = true;
			variable62.supportHtml = true;

			const patternVariable62 = new RegExp(`\\b(dayofweek\\.wednesday)\\b`);
			if (patternVariable62.test(hoverLineText363)) {
				hoverRange363 = document.getWordRangeAtPosition(position, patternVariable62);
				if (hoverRange363) {
					return new vscode.Hover(variable62, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover363);



	let pineHover364 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange364;
			const hoverLineText364 = document.lineAt(position.line).text;


			const variable63 = new vscode.MarkdownString(``);
			variable63.appendCodeblock(`display.all`);
			variable63.appendMarkdown(`A named constant that specifies where the plot is displayed. Display everywhere`);
			variable63.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_display`);
			variable63.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_display{dot}all)*`);
			variable63.isTrusted = true;
			variable63.supportHtml = true;

			const patternVariable63 = new RegExp(`\\b(display\\.all)\\b`);
			if (patternVariable63.test(hoverLineText364)) {
				hoverRange364 = document.getWordRangeAtPosition(position, patternVariable63);
				if (hoverRange364) {
					return new vscode.Hover(variable63, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover364);



	let pineHover365 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange365;
			const hoverLineText365 = document.lineAt(position.line).text;


			const variable64 = new vscode.MarkdownString(``);
			variable64.appendCodeblock(`display.none`);
			variable64.appendMarkdown(`A named constant that specifies where the plot is displayed. Display nowhere. Available in alert template message`);
			variable64.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_display`);
			variable64.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_display{dot}none)*`);
			variable64.isTrusted = true;
			variable64.supportHtml = true;

			const patternVariable64 = new RegExp(`\\b(display\\.none)\\b`);
			if (patternVariable64.test(hoverLineText365)) {
				hoverRange365 = document.getWordRangeAtPosition(position, patternVariable64);
				if (hoverRange365) {
					return new vscode.Hover(variable64, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover365);



	let pineHover366 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange366;
			const hoverLineText366 = document.lineAt(position.line).text;


			const variable65 = new vscode.MarkdownString(``);
			variable65.appendCodeblock(`dividends.gross`);
			variable65.appendMarkdown(`A named constant for the request.dividends function. Is used to request the dividends return on a stock before deductions`);
			variable65.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable65.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dividends{dot}gross)*`);
			variable65.isTrusted = true;
			variable65.supportHtml = true;

			const patternVariable65 = new RegExp(`\\b(dividends\\.gross)\\b`);
			if (patternVariable65.test(hoverLineText366)) {
				hoverRange366 = document.getWordRangeAtPosition(position, patternVariable65);
				if (hoverRange366) {
					return new vscode.Hover(variable65, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover366);



	let pineHover367 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange367;
			const hoverLineText367 = document.lineAt(position.line).text;


			const variable66 = new vscode.MarkdownString(``);
			variable66.appendCodeblock(`dividends.net`);
			variable66.appendMarkdown(`A named constant for the request.dividends function. Is used to request the dividends return on a stock after deductions`);
			variable66.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable66.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_dividends{dot}net)*`);
			variable66.isTrusted = true;
			variable66.supportHtml = true;

			const patternVariable66 = new RegExp(`\\b(dividends\\.net)\\b`);
			if (patternVariable66.test(hoverLineText367)) {
				hoverRange367 = document.getWordRangeAtPosition(position, patternVariable66);
				if (hoverRange367) {
					return new vscode.Hover(variable66, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover367);



	let pineHover368 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange368;
			const hoverLineText368 = document.lineAt(position.line).text;


			const variable67 = new vscode.MarkdownString(``);
			variable67.appendCodeblock(`earnings.actual`);
			variable67.appendMarkdown(`A named constant for the request.earnings function. Is used to request the earnings value as it was reported`);
			variable67.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable67.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_earnings{dot}actual)*`);
			variable67.isTrusted = true;
			variable67.supportHtml = true;

			const patternVariable67 = new RegExp(`\\b(earnings\\.actual)\\b`);
			if (patternVariable67.test(hoverLineText368)) {
				hoverRange368 = document.getWordRangeAtPosition(position, patternVariable67);
				if (hoverRange368) {
					return new vscode.Hover(variable67, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover368);



	let pineHover369 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange369;
			const hoverLineText369 = document.lineAt(position.line).text;


			const variable68 = new vscode.MarkdownString(``);
			variable68.appendCodeblock(`earnings.estimate`);
			variable68.appendMarkdown(`A named constant for the request.earnings function. Is used to request the estimated earnings value`);
			variable68.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable68.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_earnings{dot}estimate)*`);
			variable68.isTrusted = true;
			variable68.supportHtml = true;

			const patternVariable68 = new RegExp(`\\b(earnings\\.estimate)\\b`);
			if (patternVariable68.test(hoverLineText369)) {
				hoverRange369 = document.getWordRangeAtPosition(position, patternVariable68);
				if (hoverRange369) {
					return new vscode.Hover(variable68, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover369);



	let pineHover370 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange370;
			const hoverLineText370 = document.lineAt(position.line).text;


			const variable69 = new vscode.MarkdownString(``);
			variable69.appendCodeblock(`earnings.standardized`);
			variable69.appendMarkdown(`A named constant for the request.earnings function. Is used to request the standardized earnings value`);
			variable69.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable69.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_earnings{dot}standardized)*`);
			variable69.isTrusted = true;
			variable69.supportHtml = true;

			const patternVariable69 = new RegExp(`\\b(earnings\\.standardized)\\b`);
			if (patternVariable69.test(hoverLineText370)) {
				hoverRange370 = document.getWordRangeAtPosition(position, patternVariable69);
				if (hoverRange370) {
					return new vscode.Hover(variable69, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover370);



	let pineHover371 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange371;
			const hoverLineText371 = document.lineAt(position.line).text;


			const variable70 = new vscode.MarkdownString(``);
			variable70.appendCodeblock(`extend.both`);
			variable70.appendMarkdown(`A named constant for line.new and line.set_extend functions`);
			variable70.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable70.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_extend{dot}both)*`);
			variable70.isTrusted = true;
			variable70.supportHtml = true;

			const patternVariable70 = new RegExp(`\\b(extend\\.both)\\b`);
			if (patternVariable70.test(hoverLineText371)) {
				hoverRange371 = document.getWordRangeAtPosition(position, patternVariable70);
				if (hoverRange371) {
					return new vscode.Hover(variable70, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover371);



	let pineHover372 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange372;
			const hoverLineText372 = document.lineAt(position.line).text;


			const variable71 = new vscode.MarkdownString(``);
			variable71.appendCodeblock(`extend.left`);
			variable71.appendMarkdown(`A named constant for line.new and line.set_extend functions`);
			variable71.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable71.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_extend{dot}left)*`);
			variable71.isTrusted = true;
			variable71.supportHtml = true;

			const patternVariable71 = new RegExp(`\\b(extend\\.left)\\b`);
			if (patternVariable71.test(hoverLineText372)) {
				hoverRange372 = document.getWordRangeAtPosition(position, patternVariable71);
				if (hoverRange372) {
					return new vscode.Hover(variable71, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover372);



	let pineHover373 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange373;
			const hoverLineText373 = document.lineAt(position.line).text;


			const variable72 = new vscode.MarkdownString(``);
			variable72.appendCodeblock(`extend.none`);
			variable72.appendMarkdown(`A named constant for line.new and line.set_extend functions`);
			variable72.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable72.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_extend{dot}none)*`);
			variable72.isTrusted = true;
			variable72.supportHtml = true;

			const patternVariable72 = new RegExp(`\\b(extend\\.none)\\b`);
			if (patternVariable72.test(hoverLineText373)) {
				hoverRange373 = document.getWordRangeAtPosition(position, patternVariable72);
				if (hoverRange373) {
					return new vscode.Hover(variable72, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover373);



	let pineHover374 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange374;
			const hoverLineText374 = document.lineAt(position.line).text;


			const variable73 = new vscode.MarkdownString(``);
			variable73.appendCodeblock(`extend.right`);
			variable73.appendMarkdown(`A named constant for line.new and line.set_extend functions`);
			variable73.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable73.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_extend{dot}right)*`);
			variable73.isTrusted = true;
			variable73.supportHtml = true;

			const patternVariable73 = new RegExp(`\\b(extend\\.right)\\b`);
			if (patternVariable73.test(hoverLineText374)) {
				hoverRange374 = document.getWordRangeAtPosition(position, patternVariable73);
				if (hoverRange374) {
					return new vscode.Hover(variable73, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover374);



	let pineHover375 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange375;
			const hoverLineText375 = document.lineAt(position.line).text;


			const variable74 = new vscode.MarkdownString(``);
			variable74.appendCodeblock(`format.inherit`);
			variable74.appendMarkdown(`
Is a named constant for selecting the formatting of the script output values from the parent series in the indicator function`);
			variable74.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable74.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_format{dot}inherit)*`);
			variable74.isTrusted = true;
			variable74.supportHtml = true;

			const patternVariable74 = new RegExp(`\\b(format\\.inherit)\\b`);
			if (patternVariable74.test(hoverLineText375)) {
				hoverRange375 = document.getWordRangeAtPosition(position, patternVariable74);
				if (hoverRange375) {
					return new vscode.Hover(variable74, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover375);



	let pineHover376 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange376;
			const hoverLineText376 = document.lineAt(position.line).text;


			const variable75 = new vscode.MarkdownString(``);
			variable75.appendCodeblock(`format.mintick`);
			variable75.appendMarkdown(`
Is a named constant to use with the str.tostring function. Passing a number to str.tostring with this argument rounds the number to the nearest value that can be divided by syminfo.mintick, without the remainder, with ties rounding up, and returns the string version of said value with trailing zeroes`);
			variable75.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable75.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_format{dot}mintick)*`);
			variable75.isTrusted = true;
			variable75.supportHtml = true;

			const patternVariable75 = new RegExp(`\\b(format\\.mintick)\\b`);
			if (patternVariable75.test(hoverLineText376)) {
				hoverRange376 = document.getWordRangeAtPosition(position, patternVariable75);
				if (hoverRange376) {
					return new vscode.Hover(variable75, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover376);



	let pineHover377 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange377;
			const hoverLineText377 = document.lineAt(position.line).text;


			const variable76 = new vscode.MarkdownString(``);
			variable76.appendCodeblock(`format.percent`);
			variable76.appendMarkdown(`
Is a named constant for selecting the formatting of the script output values as a percentage in the indicator function. It adds a percent sign after values`);
			variable76.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable76.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_format{dot}percent)*`);
			variable76.isTrusted = true;
			variable76.supportHtml = true;

			const patternVariable76 = new RegExp(`\\b(format\\.percent)\\b`);
			if (patternVariable76.test(hoverLineText377)) {
				hoverRange377 = document.getWordRangeAtPosition(position, patternVariable76);
				if (hoverRange377) {
					return new vscode.Hover(variable76, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover377);



	let pineHover378 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange378;
			const hoverLineText378 = document.lineAt(position.line).text;


			const variable77 = new vscode.MarkdownString(``);
			variable77.appendCodeblock(`format.price`);
			variable77.appendMarkdown(`
Is a named constant for selecting the formatting of the script output values as prices in the indicator function`);
			variable77.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable77.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_format{dot}price)*`);
			variable77.isTrusted = true;
			variable77.supportHtml = true;

			const patternVariable77 = new RegExp(`\\b(format\\.price)\\b`);
			if (patternVariable77.test(hoverLineText378)) {
				hoverRange378 = document.getWordRangeAtPosition(position, patternVariable77);
				if (hoverRange378) {
					return new vscode.Hover(variable77, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover378);



	let pineHover379 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange379;
			const hoverLineText379 = document.lineAt(position.line).text;


			const variable78 = new vscode.MarkdownString(``);
			variable78.appendCodeblock(`format.volume`);
			variable78.appendMarkdown(`
Is a named constant for selecting the formatting of the script output values as volume in the indicator function, e.g. '5183' will be formatted as '5.183K'`);
			variable78.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable78.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_format{dot}volume)*`);
			variable78.isTrusted = true;
			variable78.supportHtml = true;

			const patternVariable78 = new RegExp(`\\b(format\\.volume)\\b`);
			if (patternVariable78.test(hoverLineText379)) {
				hoverRange379 = document.getWordRangeAtPosition(position, patternVariable78);
				if (hoverRange379) {
					return new vscode.Hover(variable78, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover379);



	let pineHover380 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange380;
			const hoverLineText380 = document.lineAt(position.line).text;


			const variable79 = new vscode.MarkdownString(``);
			variable79.appendCodeblock(`high`);
			variable79.appendMarkdown(`
Current high price`);
			variable79.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable79.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_high)*`);
			variable79.isTrusted = true;
			variable79.supportHtml = true;

			const patternVariable79 = new RegExp(`\\b(high)\\b`);
			if (patternVariable79.test(hoverLineText380)) {
				hoverRange380 = document.getWordRangeAtPosition(position, patternVariable79);
				if (hoverRange380) {
					return new vscode.Hover(variable79, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover380);



	let pineHover381 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange381;
			const hoverLineText381 = document.lineAt(position.line).text;


			const variable80 = new vscode.MarkdownString(``);
			variable80.appendCodeblock(`hl2`);
			variable80.appendMarkdown(`
Is a shortcut for (high + low)/`);
			variable80.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable80.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_hl2)*`);
			variable80.isTrusted = true;
			variable80.supportHtml = true;

			const patternVariable80 = new RegExp(`\\b(hl2)\\b`);
			if (patternVariable80.test(hoverLineText381)) {
				hoverRange381 = document.getWordRangeAtPosition(position, patternVariable80);
				if (hoverRange381) {
					return new vscode.Hover(variable80, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover381);



	let pineHover382 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange382;
			const hoverLineText382 = document.lineAt(position.line).text;


			const variable81 = new vscode.MarkdownString(``);
			variable81.appendCodeblock(`hlc3`);
			variable81.appendMarkdown(`
Is a shortcut for (high + low + close)/`);
			variable81.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable81.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_hlc3)*`);
			variable81.isTrusted = true;
			variable81.supportHtml = true;

			const patternVariable81 = new RegExp(`\\b(hlc3)\\b`);
			if (patternVariable81.test(hoverLineText382)) {
				hoverRange382 = document.getWordRangeAtPosition(position, patternVariable81);
				if (hoverRange382) {
					return new vscode.Hover(variable81, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover382);



	let pineHover383 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange383;
			const hoverLineText383 = document.lineAt(position.line).text;


			const variable82 = new vscode.MarkdownString(``);
			variable82.appendCodeblock(`hline.style_dashed`);
			variable82.appendMarkdown(`
Is a named constant for dashed linestyle of hline function`);
			variable82.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>hline_style`);
			variable82.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_hline{dot}style_dashed)*`);
			variable82.isTrusted = true;
			variable82.supportHtml = true;

			const patternVariable82 = new RegExp(`\\b(hline\\.style_dashed)\\b`);
			if (patternVariable82.test(hoverLineText383)) {
				hoverRange383 = document.getWordRangeAtPosition(position, patternVariable82);
				if (hoverRange383) {
					return new vscode.Hover(variable82, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover383);



	let pineHover384 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange384;
			const hoverLineText384 = document.lineAt(position.line).text;


			const variable83 = new vscode.MarkdownString(``);
			variable83.appendCodeblock(`hline.style_dotted`);
			variable83.appendMarkdown(`
Is a named constant for dotted linestyle of hline function`);
			variable83.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>hline_style`);
			variable83.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_hline{dot}style_dotted)*`);
			variable83.isTrusted = true;
			variable83.supportHtml = true;

			const patternVariable83 = new RegExp(`\\b(hline\\.style_dotted)\\b`);
			if (patternVariable83.test(hoverLineText384)) {
				hoverRange384 = document.getWordRangeAtPosition(position, patternVariable83);
				if (hoverRange384) {
					return new vscode.Hover(variable83, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover384);



	let pineHover385 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange385;
			const hoverLineText385 = document.lineAt(position.line).text;


			const variable84 = new vscode.MarkdownString(``);
			variable84.appendCodeblock(`hline.style_solid`);
			variable84.appendMarkdown(`
Is a named constant for solid linestyle of hline function`);
			variable84.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>hline_style`);
			variable84.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_hline{dot}style_solid)*`);
			variable84.isTrusted = true;
			variable84.supportHtml = true;

			const patternVariable84 = new RegExp(`\\b(hline\\.style_solid)\\b`);
			if (patternVariable84.test(hoverLineText385)) {
				hoverRange385 = document.getWordRangeAtPosition(position, patternVariable84);
				if (hoverRange385) {
					return new vscode.Hover(variable84, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover385);



	let pineHover386 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange386;
			const hoverLineText386 = document.lineAt(position.line).text;


			const variable85 = new vscode.MarkdownString(``);
			variable85.appendCodeblock(`hour`);
			variable85.appendMarkdown(`
Current bar hour in exchange timezone`);
			variable85.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable85.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_hour)*`);
			variable85.isTrusted = true;
			variable85.supportHtml = true;

			const patternVariable85 = new RegExp(`\\b(hour)\\b`);
			if (patternVariable85.test(hoverLineText386)) {
				hoverRange386 = document.getWordRangeAtPosition(position, patternVariable85);
				if (hoverRange386) {
					return new vscode.Hover(variable85, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover386);



	let pineHover387 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange387;
			const hoverLineText387 = document.lineAt(position.line).text;


			const variable86 = new vscode.MarkdownString(``);
			variable86.appendCodeblock(`label.all`);
			variable86.appendMarkdown(`
Returns an array filled with all the current labels drawn by the script`);
			variable86.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>label[]`);
			variable86.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}all)*`);
			variable86.isTrusted = true;
			variable86.supportHtml = true;

			const patternVariable86 = new RegExp(`\\b(label\\.all)\\b`);
			if (patternVariable86.test(hoverLineText387)) {
				hoverRange387 = document.getWordRangeAtPosition(position, patternVariable86);
				if (hoverRange387) {
					return new vscode.Hover(variable86, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover387);



	let pineHover388 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange388;
			const hoverLineText388 = document.lineAt(position.line).text;


			const variable87 = new vscode.MarkdownString(``);
			variable87.appendCodeblock(`label.style_arrowdown`);
			variable87.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable87.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable87.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_arrowdown)*`);
			variable87.isTrusted = true;
			variable87.supportHtml = true;

			const patternVariable87 = new RegExp(`\\b(label\\.style_arrowdown)\\b`);
			if (patternVariable87.test(hoverLineText388)) {
				hoverRange388 = document.getWordRangeAtPosition(position, patternVariable87);
				if (hoverRange388) {
					return new vscode.Hover(variable87, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover388);



	let pineHover389 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange389;
			const hoverLineText389 = document.lineAt(position.line).text;


			const variable88 = new vscode.MarkdownString(``);
			variable88.appendCodeblock(`label.style_arrowup`);
			variable88.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable88.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable88.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_arrowup)*`);
			variable88.isTrusted = true;
			variable88.supportHtml = true;

			const patternVariable88 = new RegExp(`\\b(label\\.style_arrowup)\\b`);
			if (patternVariable88.test(hoverLineText389)) {
				hoverRange389 = document.getWordRangeAtPosition(position, patternVariable88);
				if (hoverRange389) {
					return new vscode.Hover(variable88, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover389);



	let pineHover390 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange390;
			const hoverLineText390 = document.lineAt(position.line).text;


			const variable89 = new vscode.MarkdownString(``);
			variable89.appendCodeblock(`label.style_circle`);
			variable89.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable89.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable89.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_circle)*`);
			variable89.isTrusted = true;
			variable89.supportHtml = true;

			const patternVariable89 = new RegExp(`\\b(label\\.style_circle)\\b`);
			if (patternVariable89.test(hoverLineText390)) {
				hoverRange390 = document.getWordRangeAtPosition(position, patternVariable89);
				if (hoverRange390) {
					return new vscode.Hover(variable89, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover390);



	let pineHover391 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange391;
			const hoverLineText391 = document.lineAt(position.line).text;


			const variable90 = new vscode.MarkdownString(``);
			variable90.appendCodeblock(`label.style_cross`);
			variable90.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable90.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable90.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_cross)*`);
			variable90.isTrusted = true;
			variable90.supportHtml = true;

			const patternVariable90 = new RegExp(`\\b(label\\.style_cross)\\b`);
			if (patternVariable90.test(hoverLineText391)) {
				hoverRange391 = document.getWordRangeAtPosition(position, patternVariable90);
				if (hoverRange391) {
					return new vscode.Hover(variable90, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover391);



	let pineHover392 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange392;
			const hoverLineText392 = document.lineAt(position.line).text;


			const variable91 = new vscode.MarkdownString(``);
			variable91.appendCodeblock(`label.style_diamond`);
			variable91.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable91.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable91.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_diamond)*`);
			variable91.isTrusted = true;
			variable91.supportHtml = true;

			const patternVariable91 = new RegExp(`\\b(label\\.style_diamond)\\b`);
			if (patternVariable91.test(hoverLineText392)) {
				hoverRange392 = document.getWordRangeAtPosition(position, patternVariable91);
				if (hoverRange392) {
					return new vscode.Hover(variable91, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover392);



	let pineHover393 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange393;
			const hoverLineText393 = document.lineAt(position.line).text;


			const variable92 = new vscode.MarkdownString(``);
			variable92.appendCodeblock(`label.style_flag`);
			variable92.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable92.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable92.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_flag)*`);
			variable92.isTrusted = true;
			variable92.supportHtml = true;

			const patternVariable92 = new RegExp(`\\b(label\\.style_flag)\\b`);
			if (patternVariable92.test(hoverLineText393)) {
				hoverRange393 = document.getWordRangeAtPosition(position, patternVariable92);
				if (hoverRange393) {
					return new vscode.Hover(variable92, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover393);



	let pineHover394 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange394;
			const hoverLineText394 = document.lineAt(position.line).text;


			const variable93 = new vscode.MarkdownString(``);
			variable93.appendCodeblock(`label.style_label_center`);
			variable93.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable93.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable93.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_center)*`);
			variable93.isTrusted = true;
			variable93.supportHtml = true;

			const patternVariable93 = new RegExp(`\\b(label\\.style_label_center)\\b`);
			if (patternVariable93.test(hoverLineText394)) {
				hoverRange394 = document.getWordRangeAtPosition(position, patternVariable93);
				if (hoverRange394) {
					return new vscode.Hover(variable93, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover394);



	let pineHover395 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange395;
			const hoverLineText395 = document.lineAt(position.line).text;


			const variable94 = new vscode.MarkdownString(``);
			variable94.appendCodeblock(`label.style_label_down`);
			variable94.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable94.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable94.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_down)*`);
			variable94.isTrusted = true;
			variable94.supportHtml = true;

			const patternVariable94 = new RegExp(`\\b(label\\.style_label_down)\\b`);
			if (patternVariable94.test(hoverLineText395)) {
				hoverRange395 = document.getWordRangeAtPosition(position, patternVariable94);
				if (hoverRange395) {
					return new vscode.Hover(variable94, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover395);



	let pineHover396 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange396;
			const hoverLineText396 = document.lineAt(position.line).text;


			const variable95 = new vscode.MarkdownString(``);
			variable95.appendCodeblock(`label.style_label_left`);
			variable95.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable95.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable95.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_left)*`);
			variable95.isTrusted = true;
			variable95.supportHtml = true;

			const patternVariable95 = new RegExp(`\\b(label\\.style_label_left)\\b`);
			if (patternVariable95.test(hoverLineText396)) {
				hoverRange396 = document.getWordRangeAtPosition(position, patternVariable95);
				if (hoverRange396) {
					return new vscode.Hover(variable95, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover396);



	let pineHover397 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange397;
			const hoverLineText397 = document.lineAt(position.line).text;


			const variable96 = new vscode.MarkdownString(``);
			variable96.appendCodeblock(`label.style_label_lower_left`);
			variable96.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable96.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable96.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_lower_left)*`);
			variable96.isTrusted = true;
			variable96.supportHtml = true;

			const patternVariable96 = new RegExp(`\\b(label\\.style_label_lower_left)\\b`);
			if (patternVariable96.test(hoverLineText397)) {
				hoverRange397 = document.getWordRangeAtPosition(position, patternVariable96);
				if (hoverRange397) {
					return new vscode.Hover(variable96, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover397);



	let pineHover398 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange398;
			const hoverLineText398 = document.lineAt(position.line).text;


			const variable97 = new vscode.MarkdownString(``);
			variable97.appendCodeblock(`label.style_label_lower_right`);
			variable97.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable97.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable97.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_lower_right)*`);
			variable97.isTrusted = true;
			variable97.supportHtml = true;

			const patternVariable97 = new RegExp(`\\b(label\\.style_label_lower_right)\\b`);
			if (patternVariable97.test(hoverLineText398)) {
				hoverRange398 = document.getWordRangeAtPosition(position, patternVariable97);
				if (hoverRange398) {
					return new vscode.Hover(variable97, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover398);



	let pineHover399 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange399;
			const hoverLineText399 = document.lineAt(position.line).text;


			const variable98 = new vscode.MarkdownString(``);
			variable98.appendCodeblock(`label.style_label_right`);
			variable98.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable98.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable98.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_right)*`);
			variable98.isTrusted = true;
			variable98.supportHtml = true;

			const patternVariable98 = new RegExp(`\\b(label\\.style_label_right)\\b`);
			if (patternVariable98.test(hoverLineText399)) {
				hoverRange399 = document.getWordRangeAtPosition(position, patternVariable98);
				if (hoverRange399) {
					return new vscode.Hover(variable98, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover399);



	let pineHover400 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange400;
			const hoverLineText400 = document.lineAt(position.line).text;


			const variable99 = new vscode.MarkdownString(``);
			variable99.appendCodeblock(`label.style_label_up`);
			variable99.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable99.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable99.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_up)*`);
			variable99.isTrusted = true;
			variable99.supportHtml = true;

			const patternVariable99 = new RegExp(`\\b(label\\.style_label_up)\\b`);
			if (patternVariable99.test(hoverLineText400)) {
				hoverRange400 = document.getWordRangeAtPosition(position, patternVariable99);
				if (hoverRange400) {
					return new vscode.Hover(variable99, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover400);



	let pineHover401 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange401;
			const hoverLineText401 = document.lineAt(position.line).text;


			const variable100 = new vscode.MarkdownString(``);
			variable100.appendCodeblock(`label.style_label_upper_left`);
			variable100.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable100.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable100.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_upper_left)*`);
			variable100.isTrusted = true;
			variable100.supportHtml = true;

			const patternVariable100 = new RegExp(`\\b(label\\.style_label_upper_left)\\b`);
			if (patternVariable100.test(hoverLineText401)) {
				hoverRange401 = document.getWordRangeAtPosition(position, patternVariable100);
				if (hoverRange401) {
					return new vscode.Hover(variable100, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover401);



	let pineHover402 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange402;
			const hoverLineText402 = document.lineAt(position.line).text;


			const variable101 = new vscode.MarkdownString(``);
			variable101.appendCodeblock(`label.style_label_upper_right`);
			variable101.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable101.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable101.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_label_upper_right)*`);
			variable101.isTrusted = true;
			variable101.supportHtml = true;

			const patternVariable101 = new RegExp(`\\b(label\\.style_label_upper_right)\\b`);
			if (patternVariable101.test(hoverLineText402)) {
				hoverRange402 = document.getWordRangeAtPosition(position, patternVariable101);
				if (hoverRange402) {
					return new vscode.Hover(variable101, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover402);



	let pineHover403 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange403;
			const hoverLineText403 = document.lineAt(position.line).text;


			const variable102 = new vscode.MarkdownString(``);
			variable102.appendCodeblock(`label.style_none`);
			variable102.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable102.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable102.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_none)*`);
			variable102.isTrusted = true;
			variable102.supportHtml = true;

			const patternVariable102 = new RegExp(`\\b(label\\.style_none)\\b`);
			if (patternVariable102.test(hoverLineText403)) {
				hoverRange403 = document.getWordRangeAtPosition(position, patternVariable102);
				if (hoverRange403) {
					return new vscode.Hover(variable102, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover403);



	let pineHover404 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange404;
			const hoverLineText404 = document.lineAt(position.line).text;


			const variable103 = new vscode.MarkdownString(``);
			variable103.appendCodeblock(`label.style_square`);
			variable103.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable103.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable103.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_square)*`);
			variable103.isTrusted = true;
			variable103.supportHtml = true;

			const patternVariable103 = new RegExp(`\\b(label\\.style_square)\\b`);
			if (patternVariable103.test(hoverLineText404)) {
				hoverRange404 = document.getWordRangeAtPosition(position, patternVariable103);
				if (hoverRange404) {
					return new vscode.Hover(variable103, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover404);



	let pineHover405 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange405;
			const hoverLineText405 = document.lineAt(position.line).text;


			const variable104 = new vscode.MarkdownString(``);
			variable104.appendCodeblock(`label.style_triangledown`);
			variable104.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable104.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable104.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_triangledown)*`);
			variable104.isTrusted = true;
			variable104.supportHtml = true;

			const patternVariable104 = new RegExp(`\\b(label\\.style_triangledown)\\b`);
			if (patternVariable104.test(hoverLineText405)) {
				hoverRange405 = document.getWordRangeAtPosition(position, patternVariable104);
				if (hoverRange405) {
					return new vscode.Hover(variable104, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover405);



	let pineHover406 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange406;
			const hoverLineText406 = document.lineAt(position.line).text;


			const variable105 = new vscode.MarkdownString(``);
			variable105.appendCodeblock(`label.style_triangleup`);
			variable105.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable105.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable105.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_triangleup)*`);
			variable105.isTrusted = true;
			variable105.supportHtml = true;

			const patternVariable105 = new RegExp(`\\b(label\\.style_triangleup)\\b`);
			if (patternVariable105.test(hoverLineText406)) {
				hoverRange406 = document.getWordRangeAtPosition(position, patternVariable105);
				if (hoverRange406) {
					return new vscode.Hover(variable105, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover406);



	let pineHover407 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange407;
			const hoverLineText407 = document.lineAt(position.line).text;


			const variable106 = new vscode.MarkdownString(``);
			variable106.appendCodeblock(`label.style_xcross`);
			variable106.appendMarkdown(`
Label style for label.new and label.set_style functions`);
			variable106.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable106.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_label{dot}style_xcross)*`);
			variable106.isTrusted = true;
			variable106.supportHtml = true;

			const patternVariable106 = new RegExp(`\\b(label\\.style_xcross)\\b`);
			if (patternVariable106.test(hoverLineText407)) {
				hoverRange407 = document.getWordRangeAtPosition(position, patternVariable106);
				if (hoverRange407) {
					return new vscode.Hover(variable106, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover407);



	let pineHover408 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange408;
			const hoverLineText408 = document.lineAt(position.line).text;


			const variable107 = new vscode.MarkdownString(``);
			variable107.appendCodeblock(`line.all`);
			variable107.appendMarkdown(`
Returns an array filled with all the current lines drawn by the script`);
			variable107.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>line[]`);
			variable107.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_line{dot}all)*`);
			variable107.isTrusted = true;
			variable107.supportHtml = true;

			const patternVariable107 = new RegExp(`\\b(line\\.all)\\b`);
			if (patternVariable107.test(hoverLineText408)) {
				hoverRange408 = document.getWordRangeAtPosition(position, patternVariable107);
				if (hoverRange408) {
					return new vscode.Hover(variable107, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover408);



	let pineHover409 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange409;
			const hoverLineText409 = document.lineAt(position.line).text;


			const variable108 = new vscode.MarkdownString(``);
			variable108.appendCodeblock(`line.style_arrow_both`);
			variable108.appendMarkdown(`
Line style for line.new and line.set_style functions. Solid line with arrows on both points`);
			variable108.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable108.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_line{dot}style_arrow_both)*`);
			variable108.isTrusted = true;
			variable108.supportHtml = true;

			const patternVariable108 = new RegExp(`\\b(line\\.style_arrow_both)\\b`);
			if (patternVariable108.test(hoverLineText409)) {
				hoverRange409 = document.getWordRangeAtPosition(position, patternVariable108);
				if (hoverRange409) {
					return new vscode.Hover(variable108, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover409);



	let pineHover410 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange410;
			const hoverLineText410 = document.lineAt(position.line).text;


			const variable109 = new vscode.MarkdownString(``);
			variable109.appendCodeblock(`line.style_arrow_left`);
			variable109.appendMarkdown(`
Line style for line.new and line.set_style functions. Solid line with arrow on the first point`);
			variable109.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable109.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_line{dot}style_arrow_left)*`);
			variable109.isTrusted = true;
			variable109.supportHtml = true;

			const patternVariable109 = new RegExp(`\\b(line\\.style_arrow_left)\\b`);
			if (patternVariable109.test(hoverLineText410)) {
				hoverRange410 = document.getWordRangeAtPosition(position, patternVariable109);
				if (hoverRange410) {
					return new vscode.Hover(variable109, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover410);



	let pineHover411 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange411;
			const hoverLineText411 = document.lineAt(position.line).text;


			const variable110 = new vscode.MarkdownString(``);
			variable110.appendCodeblock(`line.style_arrow_right`);
			variable110.appendMarkdown(`
Line style for line.new and line.set_style functions. Solid line with arrow on the second point`);
			variable110.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable110.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_line{dot}style_arrow_right)*`);
			variable110.isTrusted = true;
			variable110.supportHtml = true;

			const patternVariable110 = new RegExp(`\\b(line\\.style_arrow_right)\\b`);
			if (patternVariable110.test(hoverLineText411)) {
				hoverRange411 = document.getWordRangeAtPosition(position, patternVariable110);
				if (hoverRange411) {
					return new vscode.Hover(variable110, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover411);



	let pineHover412 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange412;
			const hoverLineText412 = document.lineAt(position.line).text;


			const variable111 = new vscode.MarkdownString(``);
			variable111.appendCodeblock(`line.style_dashed`);
			variable111.appendMarkdown(`
Line style for line.new and line.set_style functions`);
			variable111.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable111.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_line{dot}style_dashed)*`);
			variable111.isTrusted = true;
			variable111.supportHtml = true;

			const patternVariable111 = new RegExp(`\\b(line\\.style_dashed)\\b`);
			if (patternVariable111.test(hoverLineText412)) {
				hoverRange412 = document.getWordRangeAtPosition(position, patternVariable111);
				if (hoverRange412) {
					return new vscode.Hover(variable111, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover412);



	let pineHover413 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange413;
			const hoverLineText413 = document.lineAt(position.line).text;


			const variable112 = new vscode.MarkdownString(``);
			variable112.appendCodeblock(`line.style_dotted`);
			variable112.appendMarkdown(`
Line style for line.new and line.set_style functions`);
			variable112.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable112.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_line{dot}style_dotted)*`);
			variable112.isTrusted = true;
			variable112.supportHtml = true;

			const patternVariable112 = new RegExp(`\\b(line\\.style_dotted)\\b`);
			if (patternVariable112.test(hoverLineText413)) {
				hoverRange413 = document.getWordRangeAtPosition(position, patternVariable112);
				if (hoverRange413) {
					return new vscode.Hover(variable112, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover413);



	let pineHover414 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange414;
			const hoverLineText414 = document.lineAt(position.line).text;


			const variable113 = new vscode.MarkdownString(``);
			variable113.appendCodeblock(`line.style_solid`);
			variable113.appendMarkdown(`
Line style for line.new and line.set_style functions`);
			variable113.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable113.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_line{dot}style_solid)*`);
			variable113.isTrusted = true;
			variable113.supportHtml = true;

			const patternVariable113 = new RegExp(`\\b(line\\.style_solid)\\b`);
			if (patternVariable113.test(hoverLineText414)) {
				hoverRange414 = document.getWordRangeAtPosition(position, patternVariable113);
				if (hoverRange414) {
					return new vscode.Hover(variable113, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover414);



	let pineHover415 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange415;
			const hoverLineText415 = document.lineAt(position.line).text;


			const variable114 = new vscode.MarkdownString(``);
			variable114.appendCodeblock(`location.abovebar`);
			variable114.appendMarkdown(`
Location value for plotshape, plotchar functions. Shape is plotted above main series bars`);
			variable114.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable114.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_location{dot}abovebar)*`);
			variable114.isTrusted = true;
			variable114.supportHtml = true;

			const patternVariable114 = new RegExp(`\\b(location\\.abovebar)\\b`);
			if (patternVariable114.test(hoverLineText415)) {
				hoverRange415 = document.getWordRangeAtPosition(position, patternVariable114);
				if (hoverRange415) {
					return new vscode.Hover(variable114, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover415);



	let pineHover416 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange416;
			const hoverLineText416 = document.lineAt(position.line).text;


			const variable115 = new vscode.MarkdownString(``);
			variable115.appendCodeblock(`location.absolute`);
			variable115.appendMarkdown(`
Location value for plotshape, plotchar functions. Shape is plotted on chart using indicator value as a price coordinate`);
			variable115.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable115.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_location{dot}absolute)*`);
			variable115.isTrusted = true;
			variable115.supportHtml = true;

			const patternVariable115 = new RegExp(`\\b(location\\.absolute)\\b`);
			if (patternVariable115.test(hoverLineText416)) {
				hoverRange416 = document.getWordRangeAtPosition(position, patternVariable115);
				if (hoverRange416) {
					return new vscode.Hover(variable115, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover416);



	let pineHover417 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange417;
			const hoverLineText417 = document.lineAt(position.line).text;


			const variable116 = new vscode.MarkdownString(``);
			variable116.appendCodeblock(`location.belowbar`);
			variable116.appendMarkdown(`
Location value for plotshape, plotchar functions. Shape is plotted below main series bars`);
			variable116.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable116.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_location{dot}belowbar)*`);
			variable116.isTrusted = true;
			variable116.supportHtml = true;

			const patternVariable116 = new RegExp(`\\b(location\\.belowbar)\\b`);
			if (patternVariable116.test(hoverLineText417)) {
				hoverRange417 = document.getWordRangeAtPosition(position, patternVariable116);
				if (hoverRange417) {
					return new vscode.Hover(variable116, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover417);



	let pineHover418 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange418;
			const hoverLineText418 = document.lineAt(position.line).text;


			const variable117 = new vscode.MarkdownString(``);
			variable117.appendCodeblock(`location.bottom`);
			variable117.appendMarkdown(`
Location value for plotshape, plotchar functions. Shape is plotted near the bottom chart border`);
			variable117.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable117.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_location{dot}bottom)*`);
			variable117.isTrusted = true;
			variable117.supportHtml = true;

			const patternVariable117 = new RegExp(`\\b(location\\.bottom)\\b`);
			if (patternVariable117.test(hoverLineText418)) {
				hoverRange418 = document.getWordRangeAtPosition(position, patternVariable117);
				if (hoverRange418) {
					return new vscode.Hover(variable117, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover418);



	let pineHover419 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange419;
			const hoverLineText419 = document.lineAt(position.line).text;


			const variable118 = new vscode.MarkdownString(``);
			variable118.appendCodeblock(`location.top`);
			variable118.appendMarkdown(`
Location value for plotshape, plotchar functions. Shape is plotted near the top chart border`);
			variable118.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable118.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_location{dot}top)*`);
			variable118.isTrusted = true;
			variable118.supportHtml = true;

			const patternVariable118 = new RegExp(`\\b(location\\.top)\\b`);
			if (patternVariable118.test(hoverLineText419)) {
				hoverRange419 = document.getWordRangeAtPosition(position, patternVariable118);
				if (hoverRange419) {
					return new vscode.Hover(variable118, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover419);



	let pineHover420 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange420;
			const hoverLineText420 = document.lineAt(position.line).text;


			const variable119 = new vscode.MarkdownString(``);
			variable119.appendCodeblock(`low`);
			variable119.appendMarkdown(`
Current low price`);
			variable119.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable119.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_low)*`);
			variable119.isTrusted = true;
			variable119.supportHtml = true;

			const patternVariable119 = new RegExp(`\\b(low)\\b`);
			if (patternVariable119.test(hoverLineText420)) {
				hoverRange420 = document.getWordRangeAtPosition(position, patternVariable119);
				if (hoverRange420) {
					return new vscode.Hover(variable119, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover420);



	let pineHover421 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange421;
			const hoverLineText421 = document.lineAt(position.line).text;


			const variable120 = new vscode.MarkdownString(``);
			variable120.appendCodeblock(`math.e`);
			variable120.appendMarkdown(`
Is a named constant for Euler's number. It is equal to 2.7182818284590452`);
			variable120.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const float`);
			variable120.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_math{dot}e)*`);
			variable120.isTrusted = true;
			variable120.supportHtml = true;

			const patternVariable120 = new RegExp(`\\b(math\\.e)\\b`);
			if (patternVariable120.test(hoverLineText421)) {
				hoverRange421 = document.getWordRangeAtPosition(position, patternVariable120);
				if (hoverRange421) {
					return new vscode.Hover(variable120, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover421);



	let pineHover422 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange422;
			const hoverLineText422 = document.lineAt(position.line).text;


			const variable121 = new vscode.MarkdownString(``);
			variable121.appendCodeblock(`math.phi`);
			variable121.appendMarkdown(`
Is a named constant for the golden ratio. It is equal to 1.6180339887498948`);
			variable121.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const float`);
			variable121.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_math{dot}phi)*`);
			variable121.isTrusted = true;
			variable121.supportHtml = true;

			const patternVariable121 = new RegExp(`\\b(math\\.phi)\\b`);
			if (patternVariable121.test(hoverLineText422)) {
				hoverRange422 = document.getWordRangeAtPosition(position, patternVariable121);
				if (hoverRange422) {
					return new vscode.Hover(variable121, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover422);



	let pineHover423 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange423;
			const hoverLineText423 = document.lineAt(position.line).text;


			const variable122 = new vscode.MarkdownString(``);
			variable122.appendCodeblock(`math.pi`);
			variable122.appendMarkdown(`
Is a named constant for Archimedes' constant. It is equal to 3.1415926535897932`);
			variable122.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const float`);
			variable122.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_math{dot}pi)*`);
			variable122.isTrusted = true;
			variable122.supportHtml = true;

			const patternVariable122 = new RegExp(`\\b(math\\.pi)\\b`);
			if (patternVariable122.test(hoverLineText423)) {
				hoverRange423 = document.getWordRangeAtPosition(position, patternVariable122);
				if (hoverRange423) {
					return new vscode.Hover(variable122, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover423);



	let pineHover424 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange424;
			const hoverLineText424 = document.lineAt(position.line).text;


			const variable123 = new vscode.MarkdownString(``);
			variable123.appendCodeblock(`math.rphi`);
			variable123.appendMarkdown(`
Is a named constant for the golden ratio conjugate. It is equal to 0.6180339887498948`);
			variable123.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const float`);
			variable123.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_math{dot}rphi)*`);
			variable123.isTrusted = true;
			variable123.supportHtml = true;

			const patternVariable123 = new RegExp(`\\b(math\\.rphi)\\b`);
			if (patternVariable123.test(hoverLineText424)) {
				hoverRange424 = document.getWordRangeAtPosition(position, patternVariable123);
				if (hoverRange424) {
					return new vscode.Hover(variable123, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover424);



	let pineHover425 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange425;
			const hoverLineText425 = document.lineAt(position.line).text;


			const variable124 = new vscode.MarkdownString(``);
			variable124.appendCodeblock(`minute`);
			variable124.appendMarkdown(`
Current bar minute in exchange timezone`);
			variable124.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable124.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_minute)*`);
			variable124.isTrusted = true;
			variable124.supportHtml = true;

			const patternVariable124 = new RegExp(`\\b(minute)\\b`);
			if (patternVariable124.test(hoverLineText425)) {
				hoverRange425 = document.getWordRangeAtPosition(position, patternVariable124);
				if (hoverRange425) {
					return new vscode.Hover(variable124, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover425);



	let pineHover426 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange426;
			const hoverLineText426 = document.lineAt(position.line).text;


			const variable125 = new vscode.MarkdownString(``);
			variable125.appendCodeblock(`month`);
			variable125.appendMarkdown(`
Current bar month in exchange timezone`);
			variable125.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable125.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_month)*`);
			variable125.isTrusted = true;
			variable125.supportHtml = true;

			const patternVariable125 = new RegExp(`\\b(month)\\b`);
			if (patternVariable125.test(hoverLineText426)) {
				hoverRange426 = document.getWordRangeAtPosition(position, patternVariable125);
				if (hoverRange426) {
					return new vscode.Hover(variable125, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover426);



	let pineHover427 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange427;
			const hoverLineText427 = document.lineAt(position.line).text;


			const variable126 = new vscode.MarkdownString(``);
			variable126.appendCodeblock(`na`);
			variable126.appendMarkdown(`
Double.NaN value (Not a Number)`);
			variable126.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple na`);
			variable126.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_na)*`);
			variable126.isTrusted = true;
			variable126.supportHtml = true;

			const patternVariable126 = new RegExp(`\\b(na)\\b`);
			if (patternVariable126.test(hoverLineText427)) {
				hoverRange427 = document.getWordRangeAtPosition(position, patternVariable126);
				if (hoverRange427) {
					return new vscode.Hover(variable126, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover427);



	let pineHover428 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange428;
			const hoverLineText428 = document.lineAt(position.line).text;


			const variable127 = new vscode.MarkdownString(``);
			variable127.appendCodeblock(`ohlc4`);
			variable127.appendMarkdown(`
Is a shortcut for (open + high + low + close)/`);
			variable127.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable127.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ohlc4)*`);
			variable127.isTrusted = true;
			variable127.supportHtml = true;

			const patternVariable127 = new RegExp(`\\b(ohlc4)\\b`);
			if (patternVariable127.test(hoverLineText428)) {
				hoverRange428 = document.getWordRangeAtPosition(position, patternVariable127);
				if (hoverRange428) {
					return new vscode.Hover(variable127, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover428);



	let pineHover429 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange429;
			const hoverLineText429 = document.lineAt(position.line).text;


			const variable128 = new vscode.MarkdownString(``);
			variable128.appendCodeblock(`open`);
			variable128.appendMarkdown(`
Current open price`);
			variable128.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable128.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_open)*`);
			variable128.isTrusted = true;
			variable128.supportHtml = true;

			const patternVariable128 = new RegExp(`\\b(open)\\b`);
			if (patternVariable128.test(hoverLineText429)) {
				hoverRange429 = document.getWordRangeAtPosition(position, patternVariable128);
				if (hoverRange429) {
					return new vscode.Hover(variable128, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover429);



	let pineHover430 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange430;
			const hoverLineText430 = document.lineAt(position.line).text;


			const variable129 = new vscode.MarkdownString(``);
			variable129.appendCodeblock(`order.ascending`);
			variable129.appendMarkdown(`
Determines the sort order of the array from the smallest to the largest value`);
			variable129.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>sort_order`);
			variable129.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_order{dot}ascending)*`);
			variable129.isTrusted = true;
			variable129.supportHtml = true;

			const patternVariable129 = new RegExp(`\\b(order\\.ascending)\\b`);
			if (patternVariable129.test(hoverLineText430)) {
				hoverRange430 = document.getWordRangeAtPosition(position, patternVariable129);
				if (hoverRange430) {
					return new vscode.Hover(variable129, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover430);



	let pineHover431 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange431;
			const hoverLineText431 = document.lineAt(position.line).text;


			const variable130 = new vscode.MarkdownString(``);
			variable130.appendCodeblock(`order.descending`);
			variable130.appendMarkdown(`
Determines the sort order of the array from the largest to the smallest value`);
			variable130.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>sort_order`);
			variable130.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_order{dot}descending)*`);
			variable130.isTrusted = true;
			variable130.supportHtml = true;

			const patternVariable130 = new RegExp(`\\b(order\\.descending)\\b`);
			if (patternVariable130.test(hoverLineText431)) {
				hoverRange431 = document.getWordRangeAtPosition(position, patternVariable130);
				if (hoverRange431) {
					return new vscode.Hover(variable130, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover431);



	let pineHover432 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange432;
			const hoverLineText432 = document.lineAt(position.line).text;


			const variable131 = new vscode.MarkdownString(``);
			variable131.appendCodeblock(`plot.style_area`);
			variable131.appendMarkdown(`A named constant for the 'Area' style, to be used as an argument for the "style" parameter in the plot function`);
			variable131.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable131.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_area)*`);
			variable131.isTrusted = true;
			variable131.supportHtml = true;

			const patternVariable131 = new RegExp(`\\b(plot\\.style_area)\\b`);
			if (patternVariable131.test(hoverLineText432)) {
				hoverRange432 = document.getWordRangeAtPosition(position, patternVariable131);
				if (hoverRange432) {
					return new vscode.Hover(variable131, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover432);



	let pineHover433 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange433;
			const hoverLineText433 = document.lineAt(position.line).text;


			const variable132 = new vscode.MarkdownString(``);
			variable132.appendCodeblock(`plot.style_areabr`);
			variable132.appendMarkdown(`A named constant for the 'Area With Breaks' style, to be used as an argument for the "style" parameter in the plot function. Similar to plot.style_area, except the gaps in the data are not filled`);
			variable132.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable132.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_areabr)*`);
			variable132.isTrusted = true;
			variable132.supportHtml = true;

			const patternVariable132 = new RegExp(`\\b(plot\\.style_areabr)\\b`);
			if (patternVariable132.test(hoverLineText433)) {
				hoverRange433 = document.getWordRangeAtPosition(position, patternVariable132);
				if (hoverRange433) {
					return new vscode.Hover(variable132, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover433);



	let pineHover434 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange434;
			const hoverLineText434 = document.lineAt(position.line).text;


			const variable133 = new vscode.MarkdownString(``);
			variable133.appendCodeblock(`plot.style_circles`);
			variable133.appendMarkdown(`A named constant for the 'Circles' style, to be used as an argument for the "style" parameter in the plot function`);
			variable133.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable133.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_circles)*`);
			variable133.isTrusted = true;
			variable133.supportHtml = true;

			const patternVariable133 = new RegExp(`\\b(plot\\.style_circles)\\b`);
			if (patternVariable133.test(hoverLineText434)) {
				hoverRange434 = document.getWordRangeAtPosition(position, patternVariable133);
				if (hoverRange434) {
					return new vscode.Hover(variable133, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover434);



	let pineHover435 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange435;
			const hoverLineText435 = document.lineAt(position.line).text;


			const variable134 = new vscode.MarkdownString(``);
			variable134.appendCodeblock(`plot.style_columns`);
			variable134.appendMarkdown(`A named constant for the 'Columns' style, to be used as an argument for the "style" parameter in the plot function`);
			variable134.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable134.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_columns)*`);
			variable134.isTrusted = true;
			variable134.supportHtml = true;

			const patternVariable134 = new RegExp(`\\b(plot\\.style_columns)\\b`);
			if (patternVariable134.test(hoverLineText435)) {
				hoverRange435 = document.getWordRangeAtPosition(position, patternVariable134);
				if (hoverRange435) {
					return new vscode.Hover(variable134, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover435);



	let pineHover436 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange436;
			const hoverLineText436 = document.lineAt(position.line).text;


			const variable135 = new vscode.MarkdownString(``);
			variable135.appendCodeblock(`plot.style_cross`);
			variable135.appendMarkdown(`A named constant for the 'Cross' style, to be used as an argument for the "style" parameter in the plot function`);
			variable135.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable135.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_cross)*`);
			variable135.isTrusted = true;
			variable135.supportHtml = true;

			const patternVariable135 = new RegExp(`\\b(plot\\.style_cross)\\b`);
			if (patternVariable135.test(hoverLineText436)) {
				hoverRange436 = document.getWordRangeAtPosition(position, patternVariable135);
				if (hoverRange436) {
					return new vscode.Hover(variable135, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover436);



	let pineHover437 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange437;
			const hoverLineText437 = document.lineAt(position.line).text;


			const variable136 = new vscode.MarkdownString(``);
			variable136.appendCodeblock(`plot.style_histogram`);
			variable136.appendMarkdown(`A named constant for the 'Histogram' style, to be used as an argument for the "style" parameter in the plot function`);
			variable136.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable136.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_histogram)*`);
			variable136.isTrusted = true;
			variable136.supportHtml = true;

			const patternVariable136 = new RegExp(`\\b(plot\\.style_histogram)\\b`);
			if (patternVariable136.test(hoverLineText437)) {
				hoverRange437 = document.getWordRangeAtPosition(position, patternVariable136);
				if (hoverRange437) {
					return new vscode.Hover(variable136, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover437);



	let pineHover438 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange438;
			const hoverLineText438 = document.lineAt(position.line).text;


			const variable137 = new vscode.MarkdownString(``);
			variable137.appendCodeblock(`plot.style_line`);
			variable137.appendMarkdown(`A named constant for the 'Line' style, to be used as an argument for the "style" parameter in the plot function`);
			variable137.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable137.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_line)*`);
			variable137.isTrusted = true;
			variable137.supportHtml = true;

			const patternVariable137 = new RegExp(`\\b(plot\\.style_line)\\b`);
			if (patternVariable137.test(hoverLineText438)) {
				hoverRange438 = document.getWordRangeAtPosition(position, patternVariable137);
				if (hoverRange438) {
					return new vscode.Hover(variable137, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover438);



	let pineHover439 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange439;
			const hoverLineText439 = document.lineAt(position.line).text;


			const variable138 = new vscode.MarkdownString(``);
			variable138.appendCodeblock(`plot.style_linebr`);
			variable138.appendMarkdown(`A named constant for the 'Line With Breaks' style, to be used as an argument for the "style" parameter in the plot function. Similar to plot.style_line, except the gaps in the data are not filled`);
			variable138.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable138.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_linebr)*`);
			variable138.isTrusted = true;
			variable138.supportHtml = true;

			const patternVariable138 = new RegExp(`\\b(plot\\.style_linebr)\\b`);
			if (patternVariable138.test(hoverLineText439)) {
				hoverRange439 = document.getWordRangeAtPosition(position, patternVariable138);
				if (hoverRange439) {
					return new vscode.Hover(variable138, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover439);



	let pineHover440 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange440;
			const hoverLineText440 = document.lineAt(position.line).text;


			const variable139 = new vscode.MarkdownString(``);
			variable139.appendCodeblock(`plot.style_stepline`);
			variable139.appendMarkdown(`A named constant for the 'Step Line' style, to be used as an argument for the "style" parameter in the plot function`);
			variable139.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable139.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_stepline)*`);
			variable139.isTrusted = true;
			variable139.supportHtml = true;

			const patternVariable139 = new RegExp(`\\b(plot\\.style_stepline)\\b`);
			if (patternVariable139.test(hoverLineText440)) {
				hoverRange440 = document.getWordRangeAtPosition(position, patternVariable139);
				if (hoverRange440) {
					return new vscode.Hover(variable139, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover440);



	let pineHover441 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange441;
			const hoverLineText441 = document.lineAt(position.line).text;


			const variable140 = new vscode.MarkdownString(``);
			variable140.appendCodeblock(`plot.style_stepline_diamond`);
			variable140.appendMarkdown(`A named constant for the 'Step Line With Diamonds' style, to be used as an argument for the "style" parameter in the plot function. Similar to plot.style_stepline, except the data changes are also marked with the Diamond shapes`);
			variable140.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>plot_style`);
			variable140.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_plot{dot}style_stepline_diamond)*`);
			variable140.isTrusted = true;
			variable140.supportHtml = true;

			const patternVariable140 = new RegExp(`\\b(plot\\.style_stepline_diamond)\\b`);
			if (patternVariable140.test(hoverLineText441)) {
				hoverRange441 = document.getWordRangeAtPosition(position, patternVariable140);
				if (hoverRange441) {
					return new vscode.Hover(variable140, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover441);



	let pineHover442 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange442;
			const hoverLineText442 = document.lineAt(position.line).text;


			const variable141 = new vscode.MarkdownString(``);
			variable141.appendCodeblock(`position.bottom_center`);
			variable141.appendMarkdown(`
Binds the table to the bottom edge in the center`);
			variable141.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable141.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}bottom_center)*`);
			variable141.isTrusted = true;
			variable141.supportHtml = true;

			const patternVariable141 = new RegExp(`\\b(position\\.bottom_center)\\b`);
			if (patternVariable141.test(hoverLineText442)) {
				hoverRange442 = document.getWordRangeAtPosition(position, patternVariable141);
				if (hoverRange442) {
					return new vscode.Hover(variable141, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover442);



	let pineHover443 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange443;
			const hoverLineText443 = document.lineAt(position.line).text;


			const variable142 = new vscode.MarkdownString(``);
			variable142.appendCodeblock(`position.bottom_left`);
			variable142.appendMarkdown(`
Binds the table to the bottom left of the screen`);
			variable142.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable142.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}bottom_left)*`);
			variable142.isTrusted = true;
			variable142.supportHtml = true;

			const patternVariable142 = new RegExp(`\\b(position\\.bottom_left)\\b`);
			if (patternVariable142.test(hoverLineText443)) {
				hoverRange443 = document.getWordRangeAtPosition(position, patternVariable142);
				if (hoverRange443) {
					return new vscode.Hover(variable142, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover443);



	let pineHover444 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange444;
			const hoverLineText444 = document.lineAt(position.line).text;


			const variable143 = new vscode.MarkdownString(``);
			variable143.appendCodeblock(`position.bottom_right`);
			variable143.appendMarkdown(`
Binds the table to the bottom right of the screen`);
			variable143.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable143.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}bottom_right)*`);
			variable143.isTrusted = true;
			variable143.supportHtml = true;

			const patternVariable143 = new RegExp(`\\b(position\\.bottom_right)\\b`);
			if (patternVariable143.test(hoverLineText444)) {
				hoverRange444 = document.getWordRangeAtPosition(position, patternVariable143);
				if (hoverRange444) {
					return new vscode.Hover(variable143, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover444);



	let pineHover445 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange445;
			const hoverLineText445 = document.lineAt(position.line).text;


			const variable144 = new vscode.MarkdownString(``);
			variable144.appendCodeblock(`position.middle_center`);
			variable144.appendMarkdown(`
Binds the table to the center of the screen`);
			variable144.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable144.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}middle_center)*`);
			variable144.isTrusted = true;
			variable144.supportHtml = true;

			const patternVariable144 = new RegExp(`\\b(position\\.middle_center)\\b`);
			if (patternVariable144.test(hoverLineText445)) {
				hoverRange445 = document.getWordRangeAtPosition(position, patternVariable144);
				if (hoverRange445) {
					return new vscode.Hover(variable144, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover445);



	let pineHover446 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange446;
			const hoverLineText446 = document.lineAt(position.line).text;


			const variable145 = new vscode.MarkdownString(``);
			variable145.appendCodeblock(`position.middle_left`);
			variable145.appendMarkdown(`
Binds the table to the left side of the screen`);
			variable145.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable145.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}middle_left)*`);
			variable145.isTrusted = true;
			variable145.supportHtml = true;

			const patternVariable145 = new RegExp(`\\b(position\\.middle_left)\\b`);
			if (patternVariable145.test(hoverLineText446)) {
				hoverRange446 = document.getWordRangeAtPosition(position, patternVariable145);
				if (hoverRange446) {
					return new vscode.Hover(variable145, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover446);



	let pineHover447 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange447;
			const hoverLineText447 = document.lineAt(position.line).text;


			const variable146 = new vscode.MarkdownString(``);
			variable146.appendCodeblock(`position.middle_right`);
			variable146.appendMarkdown(`
Binds the table to the right side of the screen`);
			variable146.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable146.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}middle_right)*`);
			variable146.isTrusted = true;
			variable146.supportHtml = true;

			const patternVariable146 = new RegExp(`\\b(position\\.middle_right)\\b`);
			if (patternVariable146.test(hoverLineText447)) {
				hoverRange447 = document.getWordRangeAtPosition(position, patternVariable146);
				if (hoverRange447) {
					return new vscode.Hover(variable146, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover447);



	let pineHover448 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange448;
			const hoverLineText448 = document.lineAt(position.line).text;


			const variable147 = new vscode.MarkdownString(``);
			variable147.appendCodeblock(`position.top_center`);
			variable147.appendMarkdown(`
Binds the table to the top edge in the center`);
			variable147.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable147.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}top_center)*`);
			variable147.isTrusted = true;
			variable147.supportHtml = true;

			const patternVariable147 = new RegExp(`\\b(position\\.top_center)\\b`);
			if (patternVariable147.test(hoverLineText448)) {
				hoverRange448 = document.getWordRangeAtPosition(position, patternVariable147);
				if (hoverRange448) {
					return new vscode.Hover(variable147, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover448);



	let pineHover449 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange449;
			const hoverLineText449 = document.lineAt(position.line).text;


			const variable148 = new vscode.MarkdownString(``);
			variable148.appendCodeblock(`position.top_left`);
			variable148.appendMarkdown(`
Binds the table to the upper-left edge`);
			variable148.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable148.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}top_left)*`);
			variable148.isTrusted = true;
			variable148.supportHtml = true;

			const patternVariable148 = new RegExp(`\\b(position\\.top_left)\\b`);
			if (patternVariable148.test(hoverLineText449)) {
				hoverRange449 = document.getWordRangeAtPosition(position, patternVariable148);
				if (hoverRange449) {
					return new vscode.Hover(variable148, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover449);



	let pineHover450 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange450;
			const hoverLineText450 = document.lineAt(position.line).text;


			const variable149 = new vscode.MarkdownString(``);
			variable149.appendCodeblock(`position.top_right`);
			variable149.appendMarkdown(`
Binds the table to the upper-right edge`);
			variable149.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable149.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_position{dot}top_right)*`);
			variable149.isTrusted = true;
			variable149.supportHtml = true;

			const patternVariable149 = new RegExp(`\\b(position\\.top_right)\\b`);
			if (patternVariable149.test(hoverLineText450)) {
				hoverRange450 = document.getWordRangeAtPosition(position, patternVariable149);
				if (hoverRange450) {
					return new vscode.Hover(variable149, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover450);



	let pineHover451 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange451;
			const hoverLineText451 = document.lineAt(position.line).text;


			const variable150 = new vscode.MarkdownString(``);
			variable150.appendCodeblock(`scale.left`);
			variable150.appendMarkdown(`
Scale value for indicator function. Indicator is added to the left price scale`);
			variable150.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>scale_type`);
			variable150.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_scale{dot}left)*`);
			variable150.isTrusted = true;
			variable150.supportHtml = true;

			const patternVariable150 = new RegExp(`\\b(scale\\.left)\\b`);
			if (patternVariable150.test(hoverLineText451)) {
				hoverRange451 = document.getWordRangeAtPosition(position, patternVariable150);
				if (hoverRange451) {
					return new vscode.Hover(variable150, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover451);



	let pineHover452 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange452;
			const hoverLineText452 = document.lineAt(position.line).text;


			const variable151 = new vscode.MarkdownString(``);
			variable151.appendCodeblock(`scale.none`);
			variable151.appendMarkdown(`
Scale value for indicator function. Indicator is added in 'No Scale' mode. Can be used only with 'overlay=true'`);
			variable151.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>scale_type`);
			variable151.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_scale{dot}none)*`);
			variable151.isTrusted = true;
			variable151.supportHtml = true;

			const patternVariable151 = new RegExp(`\\b(scale\\.none)\\b`);
			if (patternVariable151.test(hoverLineText452)) {
				hoverRange452 = document.getWordRangeAtPosition(position, patternVariable151);
				if (hoverRange452) {
					return new vscode.Hover(variable151, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover452);



	let pineHover453 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange453;
			const hoverLineText453 = document.lineAt(position.line).text;


			const variable152 = new vscode.MarkdownString(``);
			variable152.appendCodeblock(`scale.right`);
			variable152.appendMarkdown(`
Scale value for indicator function. Indicator is added to the right price scale`);
			variable152.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>scale_type`);
			variable152.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_scale{dot}right)*`);
			variable152.isTrusted = true;
			variable152.supportHtml = true;

			const patternVariable152 = new RegExp(`\\b(scale\\.right)\\b`);
			if (patternVariable152.test(hoverLineText453)) {
				hoverRange453 = document.getWordRangeAtPosition(position, patternVariable152);
				if (hoverRange453) {
					return new vscode.Hover(variable152, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover453);



	let pineHover454 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange454;
			const hoverLineText454 = document.lineAt(position.line).text;


			const variable153 = new vscode.MarkdownString(``);
			variable153.appendCodeblock(`second`);
			variable153.appendMarkdown(`
Current bar second in exchange timezone`);
			variable153.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable153.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_second)*`);
			variable153.isTrusted = true;
			variable153.supportHtml = true;

			const patternVariable153 = new RegExp(`\\b(second)\\b`);
			if (patternVariable153.test(hoverLineText454)) {
				hoverRange454 = document.getWordRangeAtPosition(position, patternVariable153);
				if (hoverRange454) {
					return new vscode.Hover(variable153, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover454);



	let pineHover455 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange455;
			const hoverLineText455 = document.lineAt(position.line).text;


			const variable154 = new vscode.MarkdownString(``);
			variable154.appendCodeblock(`session.extended`);
			variable154.appendMarkdown(`
Constant for extended session type (with extended hours data)`);
			variable154.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable154.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_session{dot}extended)*`);
			variable154.isTrusted = true;
			variable154.supportHtml = true;

			const patternVariable154 = new RegExp(`\\b(session\\.extended)\\b`);
			if (patternVariable154.test(hoverLineText455)) {
				hoverRange455 = document.getWordRangeAtPosition(position, patternVariable154);
				if (hoverRange455) {
					return new vscode.Hover(variable154, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover455);



	let pineHover456 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange456;
			const hoverLineText456 = document.lineAt(position.line).text;


			const variable155 = new vscode.MarkdownString(``);
			variable155.appendCodeblock(`session.ismarket`);
			variable155.appendMarkdown(`
Returns true if the current bar is a part of the regular trading hours (i.e. market hours), true otherwis`);
			variable155.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable155.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_session{dot}ismarket)*`);
			variable155.isTrusted = true;
			variable155.supportHtml = true;

			const patternVariable155 = new RegExp(`\\b(session\\.ismarket)\\b`);
			if (patternVariable155.test(hoverLineText456)) {
				hoverRange456 = document.getWordRangeAtPosition(position, patternVariable155);
				if (hoverRange456) {
					return new vscode.Hover(variable155, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover456);



	let pineHover457 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange457;
			const hoverLineText457 = document.lineAt(position.line).text;


			const variable156 = new vscode.MarkdownString(``);
			variable156.appendCodeblock(`session.ispostmarket`);
			variable156.appendMarkdown(`
Returns true if the current bar is a part of the post-market, true otherwise. On non-intraday charts always returns true`);
			variable156.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable156.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_session{dot}ispostmarket)*`);
			variable156.isTrusted = true;
			variable156.supportHtml = true;

			const patternVariable156 = new RegExp(`\\b(session\\.ispostmarket)\\b`);
			if (patternVariable156.test(hoverLineText457)) {
				hoverRange457 = document.getWordRangeAtPosition(position, patternVariable156);
				if (hoverRange457) {
					return new vscode.Hover(variable156, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover457);



	let pineHover458 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange458;
			const hoverLineText458 = document.lineAt(position.line).text;


			const variable157 = new vscode.MarkdownString(``);
			variable157.appendCodeblock(`session.ispremarket`);
			variable157.appendMarkdown(`
Returns true if the current bar is a part of the pre-market, true otherwise. On non-intraday charts always returns true`);
			variable157.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series bool`);
			variable157.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_session{dot}ispremarket)*`);
			variable157.isTrusted = true;
			variable157.supportHtml = true;

			const patternVariable157 = new RegExp(`\\b(session\\.ispremarket)\\b`);
			if (patternVariable157.test(hoverLineText458)) {
				hoverRange458 = document.getWordRangeAtPosition(position, patternVariable157);
				if (hoverRange458) {
					return new vscode.Hover(variable157, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover458);



	let pineHover459 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange459;
			const hoverLineText459 = document.lineAt(position.line).text;


			const variable158 = new vscode.MarkdownString(``);
			variable158.appendCodeblock(`session.regular`);
			variable158.appendMarkdown(`
Constant for regular session type (no extended hours data)`);
			variable158.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable158.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_session{dot}regular)*`);
			variable158.isTrusted = true;
			variable158.supportHtml = true;

			const patternVariable158 = new RegExp(`\\b(session\\.regular)\\b`);
			if (patternVariable158.test(hoverLineText459)) {
				hoverRange459 = document.getWordRangeAtPosition(position, patternVariable158);
				if (hoverRange459) {
					return new vscode.Hover(variable158, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover459);



	let pineHover460 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange460;
			const hoverLineText460 = document.lineAt(position.line).text;


			const variable159 = new vscode.MarkdownString(``);
			variable159.appendCodeblock(`shape.arrowdown`);
			variable159.appendMarkdown(`
Shape style for plotshape function`);
			variable159.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable159.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}arrowdown)*`);
			variable159.isTrusted = true;
			variable159.supportHtml = true;

			const patternVariable159 = new RegExp(`\\b(shape\\.arrowdown)\\b`);
			if (patternVariable159.test(hoverLineText460)) {
				hoverRange460 = document.getWordRangeAtPosition(position, patternVariable159);
				if (hoverRange460) {
					return new vscode.Hover(variable159, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover460);



	let pineHover461 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange461;
			const hoverLineText461 = document.lineAt(position.line).text;


			const variable160 = new vscode.MarkdownString(``);
			variable160.appendCodeblock(`shape.arrowup`);
			variable160.appendMarkdown(`
Shape style for plotshape function`);
			variable160.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable160.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}arrowup)*`);
			variable160.isTrusted = true;
			variable160.supportHtml = true;

			const patternVariable160 = new RegExp(`\\b(shape\\.arrowup)\\b`);
			if (patternVariable160.test(hoverLineText461)) {
				hoverRange461 = document.getWordRangeAtPosition(position, patternVariable160);
				if (hoverRange461) {
					return new vscode.Hover(variable160, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover461);



	let pineHover462 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange462;
			const hoverLineText462 = document.lineAt(position.line).text;


			const variable161 = new vscode.MarkdownString(``);
			variable161.appendCodeblock(`shape.circle`);
			variable161.appendMarkdown(`
Shape style for plotshape function`);
			variable161.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable161.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}circle)*`);
			variable161.isTrusted = true;
			variable161.supportHtml = true;

			const patternVariable161 = new RegExp(`\\b(shape\\.circle)\\b`);
			if (patternVariable161.test(hoverLineText462)) {
				hoverRange462 = document.getWordRangeAtPosition(position, patternVariable161);
				if (hoverRange462) {
					return new vscode.Hover(variable161, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover462);



	let pineHover463 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange463;
			const hoverLineText463 = document.lineAt(position.line).text;


			const variable162 = new vscode.MarkdownString(``);
			variable162.appendCodeblock(`shape.cross`);
			variable162.appendMarkdown(`
Shape style for plotshape function`);
			variable162.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable162.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}cross)*`);
			variable162.isTrusted = true;
			variable162.supportHtml = true;

			const patternVariable162 = new RegExp(`\\b(shape\\.cross)\\b`);
			if (patternVariable162.test(hoverLineText463)) {
				hoverRange463 = document.getWordRangeAtPosition(position, patternVariable162);
				if (hoverRange463) {
					return new vscode.Hover(variable162, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover463);



	let pineHover464 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange464;
			const hoverLineText464 = document.lineAt(position.line).text;


			const variable163 = new vscode.MarkdownString(``);
			variable163.appendCodeblock(`shape.diamond`);
			variable163.appendMarkdown(`
Shape style for plotshape function`);
			variable163.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable163.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}diamond)*`);
			variable163.isTrusted = true;
			variable163.supportHtml = true;

			const patternVariable163 = new RegExp(`\\b(shape\\.diamond)\\b`);
			if (patternVariable163.test(hoverLineText464)) {
				hoverRange464 = document.getWordRangeAtPosition(position, patternVariable163);
				if (hoverRange464) {
					return new vscode.Hover(variable163, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover464);



	let pineHover465 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange465;
			const hoverLineText465 = document.lineAt(position.line).text;


			const variable164 = new vscode.MarkdownString(``);
			variable164.appendCodeblock(`shape.flag`);
			variable164.appendMarkdown(`
Shape style for plotshape function`);
			variable164.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable164.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}flag)*`);
			variable164.isTrusted = true;
			variable164.supportHtml = true;

			const patternVariable164 = new RegExp(`\\b(shape\\.flag)\\b`);
			if (patternVariable164.test(hoverLineText465)) {
				hoverRange465 = document.getWordRangeAtPosition(position, patternVariable164);
				if (hoverRange465) {
					return new vscode.Hover(variable164, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover465);



	let pineHover466 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange466;
			const hoverLineText466 = document.lineAt(position.line).text;


			const variable165 = new vscode.MarkdownString(``);
			variable165.appendCodeblock(`shape.labeldown`);
			variable165.appendMarkdown(`
Shape style for plotshape function`);
			variable165.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable165.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}labeldown)*`);
			variable165.isTrusted = true;
			variable165.supportHtml = true;

			const patternVariable165 = new RegExp(`\\b(shape\\.labeldown)\\b`);
			if (patternVariable165.test(hoverLineText466)) {
				hoverRange466 = document.getWordRangeAtPosition(position, patternVariable165);
				if (hoverRange466) {
					return new vscode.Hover(variable165, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover466);



	let pineHover467 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange467;
			const hoverLineText467 = document.lineAt(position.line).text;


			const variable166 = new vscode.MarkdownString(``);
			variable166.appendCodeblock(`shape.labelup`);
			variable166.appendMarkdown(`
Shape style for plotshape function`);
			variable166.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable166.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}labelup)*`);
			variable166.isTrusted = true;
			variable166.supportHtml = true;

			const patternVariable166 = new RegExp(`\\b(shape\\.labelup)\\b`);
			if (patternVariable166.test(hoverLineText467)) {
				hoverRange467 = document.getWordRangeAtPosition(position, patternVariable166);
				if (hoverRange467) {
					return new vscode.Hover(variable166, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover467);



	let pineHover468 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange468;
			const hoverLineText468 = document.lineAt(position.line).text;


			const variable167 = new vscode.MarkdownString(``);
			variable167.appendCodeblock(`shape.square`);
			variable167.appendMarkdown(`
Shape style for plotshape function`);
			variable167.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable167.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}square)*`);
			variable167.isTrusted = true;
			variable167.supportHtml = true;

			const patternVariable167 = new RegExp(`\\b(shape\\.square)\\b`);
			if (patternVariable167.test(hoverLineText468)) {
				hoverRange468 = document.getWordRangeAtPosition(position, patternVariable167);
				if (hoverRange468) {
					return new vscode.Hover(variable167, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover468);



	let pineHover469 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange469;
			const hoverLineText469 = document.lineAt(position.line).text;


			const variable168 = new vscode.MarkdownString(``);
			variable168.appendCodeblock(`shape.triangledown`);
			variable168.appendMarkdown(`
Shape style for plotshape function`);
			variable168.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable168.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}triangledown)*`);
			variable168.isTrusted = true;
			variable168.supportHtml = true;

			const patternVariable168 = new RegExp(`\\b(shape\\.triangledown)\\b`);
			if (patternVariable168.test(hoverLineText469)) {
				hoverRange469 = document.getWordRangeAtPosition(position, patternVariable168);
				if (hoverRange469) {
					return new vscode.Hover(variable168, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover469);



	let pineHover470 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange470;
			const hoverLineText470 = document.lineAt(position.line).text;


			const variable169 = new vscode.MarkdownString(``);
			variable169.appendCodeblock(`shape.triangleup`);
			variable169.appendMarkdown(`
Shape style for plotshape function`);
			variable169.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable169.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}triangleup)*`);
			variable169.isTrusted = true;
			variable169.supportHtml = true;

			const patternVariable169 = new RegExp(`\\b(shape\\.triangleup)\\b`);
			if (patternVariable169.test(hoverLineText470)) {
				hoverRange470 = document.getWordRangeAtPosition(position, patternVariable169);
				if (hoverRange470) {
					return new vscode.Hover(variable169, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover470);



	let pineHover471 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange471;
			const hoverLineText471 = document.lineAt(position.line).text;


			const variable170 = new vscode.MarkdownString(``);
			variable170.appendCodeblock(`shape.xcross`);
			variable170.appendMarkdown(`
Shape style for plotshape function`);
			variable170.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable170.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_shape{dot}xcross)*`);
			variable170.isTrusted = true;
			variable170.supportHtml = true;

			const patternVariable170 = new RegExp(`\\b(shape\\.xcross)\\b`);
			if (patternVariable170.test(hoverLineText471)) {
				hoverRange471 = document.getWordRangeAtPosition(position, patternVariable170);
				if (hoverRange471) {
					return new vscode.Hover(variable170, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover471);



	let pineHover472 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange472;
			const hoverLineText472 = document.lineAt(position.line).text;


			const variable171 = new vscode.MarkdownString(``);
			variable171.appendCodeblock(`size.auto`);
			variable171.appendMarkdown(`
Size value for plotshape, plotchar functions. The size of the shape automatically adapts to the size of the bars`);
			variable171.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable171.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_size{dot}auto)*`);
			variable171.isTrusted = true;
			variable171.supportHtml = true;

			const patternVariable171 = new RegExp(`\\b(size\\.auto)\\b`);
			if (patternVariable171.test(hoverLineText472)) {
				hoverRange472 = document.getWordRangeAtPosition(position, patternVariable171);
				if (hoverRange472) {
					return new vscode.Hover(variable171, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover472);



	let pineHover473 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange473;
			const hoverLineText473 = document.lineAt(position.line).text;


			const variable172 = new vscode.MarkdownString(``);
			variable172.appendCodeblock(`size.huge`);
			variable172.appendMarkdown(`
Size value for plotshape, plotchar functions. The size of the shape constantly huge`);
			variable172.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable172.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_size{dot}huge)*`);
			variable172.isTrusted = true;
			variable172.supportHtml = true;

			const patternVariable172 = new RegExp(`\\b(size\\.huge)\\b`);
			if (patternVariable172.test(hoverLineText473)) {
				hoverRange473 = document.getWordRangeAtPosition(position, patternVariable172);
				if (hoverRange473) {
					return new vscode.Hover(variable172, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover473);



	let pineHover474 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange474;
			const hoverLineText474 = document.lineAt(position.line).text;


			const variable173 = new vscode.MarkdownString(``);
			variable173.appendCodeblock(`size.large`);
			variable173.appendMarkdown(`
Size value for plotshape, plotchar functions. The size of the shape constantly large`);
			variable173.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable173.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_size{dot}large)*`);
			variable173.isTrusted = true;
			variable173.supportHtml = true;

			const patternVariable173 = new RegExp(`\\b(size\\.large)\\b`);
			if (patternVariable173.test(hoverLineText474)) {
				hoverRange474 = document.getWordRangeAtPosition(position, patternVariable173);
				if (hoverRange474) {
					return new vscode.Hover(variable173, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover474);



	let pineHover475 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange475;
			const hoverLineText475 = document.lineAt(position.line).text;


			const variable174 = new vscode.MarkdownString(``);
			variable174.appendCodeblock(`size.normal`);
			variable174.appendMarkdown(`
Size value for plotshape, plotchar functions. The size of the shape constantly normal`);
			variable174.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable174.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_size{dot}normal)*`);
			variable174.isTrusted = true;
			variable174.supportHtml = true;

			const patternVariable174 = new RegExp(`\\b(size\\.normal)\\b`);
			if (patternVariable174.test(hoverLineText475)) {
				hoverRange475 = document.getWordRangeAtPosition(position, patternVariable174);
				if (hoverRange475) {
					return new vscode.Hover(variable174, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover475);



	let pineHover476 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange476;
			const hoverLineText476 = document.lineAt(position.line).text;


			const variable175 = new vscode.MarkdownString(``);
			variable175.appendCodeblock(`size.small`);
			variable175.appendMarkdown(`
Size value for plotshape, plotchar functions. The size of the shape constantly small`);
			variable175.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable175.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_size{dot}small)*`);
			variable175.isTrusted = true;
			variable175.supportHtml = true;

			const patternVariable175 = new RegExp(`\\b(size\\.small)\\b`);
			if (patternVariable175.test(hoverLineText476)) {
				hoverRange476 = document.getWordRangeAtPosition(position, patternVariable175);
				if (hoverRange476) {
					return new vscode.Hover(variable175, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover476);



	let pineHover477 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange477;
			const hoverLineText477 = document.lineAt(position.line).text;


			const variable176 = new vscode.MarkdownString(``);
			variable176.appendCodeblock(`size.tiny`);
			variable176.appendMarkdown(`
Size value for plotshape, plotchar functions. The size of the shape constantly tiny`);
			variable176.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable176.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_size{dot}tiny)*`);
			variable176.isTrusted = true;
			variable176.supportHtml = true;

			const patternVariable176 = new RegExp(`\\b(size\\.tiny)\\b`);
			if (patternVariable176.test(hoverLineText477)) {
				hoverRange477 = document.getWordRangeAtPosition(position, patternVariable176);
				if (hoverRange477) {
					return new vscode.Hover(variable176, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover477);



	let pineHover478 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange478;
			const hoverLineText478 = document.lineAt(position.line).text;


			const variable177 = new vscode.MarkdownString(``);
			variable177.appendCodeblock(`splits.denominator`);
			variable177.appendMarkdown(`A named constant for the request.splits function. Is used to request the denominator (the number below the line in a fraction) of a splits`);
			variable177.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable177.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_splits{dot}denominator)*`);
			variable177.isTrusted = true;
			variable177.supportHtml = true;

			const patternVariable177 = new RegExp(`\\b(splits\\.denominator)\\b`);
			if (patternVariable177.test(hoverLineText478)) {
				hoverRange478 = document.getWordRangeAtPosition(position, patternVariable177);
				if (hoverRange478) {
					return new vscode.Hover(variable177, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover478);



	let pineHover479 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange479;
			const hoverLineText479 = document.lineAt(position.line).text;


			const variable178 = new vscode.MarkdownString(``);
			variable178.appendCodeblock(`splits.numerator`);
			variable178.appendMarkdown(`A named constant for the request.splits function. Is used to request the numerator (the number above the line in a fraction) of a splits`);
			variable178.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable178.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_splits{dot}numerator)*`);
			variable178.isTrusted = true;
			variable178.supportHtml = true;

			const patternVariable178 = new RegExp(`\\b(splits\\.numerator)\\b`);
			if (patternVariable178.test(hoverLineText479)) {
				hoverRange479 = document.getWordRangeAtPosition(position, patternVariable178);
				if (hoverRange479) {
					return new vscode.Hover(variable178, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover479);



	let pineHover480 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange480;
			const hoverLineText480 = document.lineAt(position.line).text;


			const variable179 = new vscode.MarkdownString(``);
			variable179.appendCodeblock(`strategy.account_currency`);
			variable179.appendMarkdown(`
Returns the currency used to calculate results, which can be set in the strategy's properties`);
			variable179.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable179.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}account_currency)*`);
			variable179.isTrusted = true;
			variable179.supportHtml = true;

			const patternVariable179 = new RegExp(`\\b(strategy\\.account_currency)\\b`);
			if (patternVariable179.test(hoverLineText480)) {
				hoverRange480 = document.getWordRangeAtPosition(position, patternVariable179);
				if (hoverRange480) {
					return new vscode.Hover(variable179, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover480);



	let pineHover481 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange481;
			const hoverLineText481 = document.lineAt(position.line).text;


			const variable180 = new vscode.MarkdownString(``);
			variable180.appendCodeblock(`strategy.cash`);
			variable180.appendMarkdown(`
If the number of contracts/shares/lots/units to buy/sell is not specified for strategy.entry or strategy.order commands (or 'NaN' is specified), then strategy will calculate the quantity to buy/sell at close of current bar using the amount of money specified in the 'default_qty_value'`);
			variable180.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable180.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}cash)*`);
			variable180.isTrusted = true;
			variable180.supportHtml = true;

			const patternVariable180 = new RegExp(`\\b(strategy\\.cash)\\b`);
			if (patternVariable180.test(hoverLineText481)) {
				hoverRange481 = document.getWordRangeAtPosition(position, patternVariable180);
				if (hoverRange481) {
					return new vscode.Hover(variable180, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover481);



	let pineHover482 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange482;
			const hoverLineText482 = document.lineAt(position.line).text;


			const variable181 = new vscode.MarkdownString(``);
			variable181.appendCodeblock(`strategy.closedtrades`);
			variable181.appendMarkdown(`
Number of trades, which were closed for the whole trading interval`);
			variable181.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable181.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}closedtrades)*`);
			variable181.isTrusted = true;
			variable181.supportHtml = true;

			const patternVariable181 = new RegExp(`\\b(strategy\\.closedtrades)\\b`);
			if (patternVariable181.test(hoverLineText482)) {
				hoverRange482 = document.getWordRangeAtPosition(position, patternVariable181);
				if (hoverRange482) {
					return new vscode.Hover(variable181, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover482);



	let pineHover483 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange483;
			const hoverLineText483 = document.lineAt(position.line).text;


			const variable182 = new vscode.MarkdownString(``);
			variable182.appendCodeblock(`strategy.commission.cash_per_contract`);
			variable182.appendMarkdown(`
Commission type for an order. Money displayed in the account currency per contract`);
			variable182.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable182.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}commission{dot}cash_per_contract)*`);
			variable182.isTrusted = true;
			variable182.supportHtml = true;

			const patternVariable182 = new RegExp(`\\b(strategy\\.commission\\.cash_per_contract)\\b`);
			if (patternVariable182.test(hoverLineText483)) {
				hoverRange483 = document.getWordRangeAtPosition(position, patternVariable182);
				if (hoverRange483) {
					return new vscode.Hover(variable182, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover483);



	let pineHover484 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange484;
			const hoverLineText484 = document.lineAt(position.line).text;


			const variable183 = new vscode.MarkdownString(``);
			variable183.appendCodeblock(`strategy.commission.cash_per_order`);
			variable183.appendMarkdown(`
Commission type for an order. Money displayed in the account currency per order`);
			variable183.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable183.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}commission{dot}cash_per_order)*`);
			variable183.isTrusted = true;
			variable183.supportHtml = true;

			const patternVariable183 = new RegExp(`\\b(strategy\\.commission\\.cash_per_order)\\b`);
			if (patternVariable183.test(hoverLineText484)) {
				hoverRange484 = document.getWordRangeAtPosition(position, patternVariable183);
				if (hoverRange484) {
					return new vscode.Hover(variable183, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover484);



	let pineHover485 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange485;
			const hoverLineText485 = document.lineAt(position.line).text;


			const variable184 = new vscode.MarkdownString(``);
			variable184.appendCodeblock(`strategy.commission.percent`);
			variable184.appendMarkdown(`
Commission type for an order. A percentage of the cash volume of order`);
			variable184.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable184.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}commission{dot}percent)*`);
			variable184.isTrusted = true;
			variable184.supportHtml = true;

			const patternVariable184 = new RegExp(`\\b(strategy\\.commission\\.percent)\\b`);
			if (patternVariable184.test(hoverLineText485)) {
				hoverRange485 = document.getWordRangeAtPosition(position, patternVariable184);
				if (hoverRange485) {
					return new vscode.Hover(variable184, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover485);



	let pineHover486 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange486;
			const hoverLineText486 = document.lineAt(position.line).text;


			const variable185 = new vscode.MarkdownString(``);
			variable185.appendCodeblock(`strategy.direction.all`);
			variable185.appendMarkdown(`
It allows strategy to open both long and short positions`);
			variable185.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable185.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}direction{dot}all)*`);
			variable185.isTrusted = true;
			variable185.supportHtml = true;

			const patternVariable185 = new RegExp(`\\b(strategy\\.direction\\.all)\\b`);
			if (patternVariable185.test(hoverLineText486)) {
				hoverRange486 = document.getWordRangeAtPosition(position, patternVariable185);
				if (hoverRange486) {
					return new vscode.Hover(variable185, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover486);



	let pineHover487 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange487;
			const hoverLineText487 = document.lineAt(position.line).text;


			const variable186 = new vscode.MarkdownString(``);
			variable186.appendCodeblock(`strategy.direction.long`);
			variable186.appendMarkdown(`
It allows strategy to open only long positions`);
			variable186.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable186.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}direction{dot}long)*`);
			variable186.isTrusted = true;
			variable186.supportHtml = true;

			const patternVariable186 = new RegExp(`\\b(strategy\\.direction\\.long)\\b`);
			if (patternVariable186.test(hoverLineText487)) {
				hoverRange487 = document.getWordRangeAtPosition(position, patternVariable186);
				if (hoverRange487) {
					return new vscode.Hover(variable186, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover487);



	let pineHover488 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange488;
			const hoverLineText488 = document.lineAt(position.line).text;


			const variable187 = new vscode.MarkdownString(``);
			variable187.appendCodeblock(`strategy.direction.short`);
			variable187.appendMarkdown(`
It allows strategy to open only short positions`);
			variable187.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable187.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}direction{dot}short)*`);
			variable187.isTrusted = true;
			variable187.supportHtml = true;

			const patternVariable187 = new RegExp(`\\b(strategy\\.direction\\.short)\\b`);
			if (patternVariable187.test(hoverLineText488)) {
				hoverRange488 = document.getWordRangeAtPosition(position, patternVariable187);
				if (hoverRange488) {
					return new vscode.Hover(variable187, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover488);



	let pineHover489 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange489;
			const hoverLineText489 = document.lineAt(position.line).text;


			const variable188 = new vscode.MarkdownString(``);
			variable188.appendCodeblock(`strategy.equity`);
			variable188.appendMarkdown(`
Current equity (strategy.initial_capital + strategy.netprofit + strategy.openprofit)`);
			variable188.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable188.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}equity)*`);
			variable188.isTrusted = true;
			variable188.supportHtml = true;

			const patternVariable188 = new RegExp(`\\b(strategy\\.equity)\\b`);
			if (patternVariable188.test(hoverLineText489)) {
				hoverRange489 = document.getWordRangeAtPosition(position, patternVariable188);
				if (hoverRange489) {
					return new vscode.Hover(variable188, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover489);



	let pineHover490 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange490;
			const hoverLineText490 = document.lineAt(position.line).text;


			const variable189 = new vscode.MarkdownString(``);
			variable189.appendCodeblock(`strategy.eventrades`);
			variable189.appendMarkdown(`
Number of breakeven trades for the whole trading interval`);
			variable189.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable189.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}eventrades)*`);
			variable189.isTrusted = true;
			variable189.supportHtml = true;

			const patternVariable189 = new RegExp(`\\b(strategy\\.eventrades)\\b`);
			if (patternVariable189.test(hoverLineText490)) {
				hoverRange490 = document.getWordRangeAtPosition(position, patternVariable189);
				if (hoverRange490) {
					return new vscode.Hover(variable189, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover490);



	let pineHover491 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange491;
			const hoverLineText491 = document.lineAt(position.line).text;


			const variable190 = new vscode.MarkdownString(``);
			variable190.appendCodeblock(`strategy.fixed`);
			variable190.appendMarkdown(`
If the number of contracts/shares/lots/units to buy/sell is not specified for strategy.entry or strategy.order commands (or 'NaN' is specified), then the 'default_qty_value' is used to define the quantity`);
			variable190.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable190.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}fixed)*`);
			variable190.isTrusted = true;
			variable190.supportHtml = true;

			const patternVariable190 = new RegExp(`\\b(strategy\\.fixed)\\b`);
			if (patternVariable190.test(hoverLineText491)) {
				hoverRange491 = document.getWordRangeAtPosition(position, patternVariable190);
				if (hoverRange491) {
					return new vscode.Hover(variable190, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover491);



	let pineHover492 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange492;
			const hoverLineText492 = document.lineAt(position.line).text;


			const variable191 = new vscode.MarkdownString(``);
			variable191.appendCodeblock(`strategy.grossloss`);
			variable191.appendMarkdown(`
Total currency value of all completed losing trades`);
			variable191.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable191.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}grossloss)*`);
			variable191.isTrusted = true;
			variable191.supportHtml = true;

			const patternVariable191 = new RegExp(`\\b(strategy\\.grossloss)\\b`);
			if (patternVariable191.test(hoverLineText492)) {
				hoverRange492 = document.getWordRangeAtPosition(position, patternVariable191);
				if (hoverRange492) {
					return new vscode.Hover(variable191, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover492);



	let pineHover493 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange493;
			const hoverLineText493 = document.lineAt(position.line).text;


			const variable192 = new vscode.MarkdownString(``);
			variable192.appendCodeblock(`strategy.grossprofit`);
			variable192.appendMarkdown(`
Total currency value of all completed winning trades`);
			variable192.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable192.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}grossprofit)*`);
			variable192.isTrusted = true;
			variable192.supportHtml = true;

			const patternVariable192 = new RegExp(`\\b(strategy\\.grossprofit)\\b`);
			if (patternVariable192.test(hoverLineText493)) {
				hoverRange493 = document.getWordRangeAtPosition(position, patternVariable192);
				if (hoverRange493) {
					return new vscode.Hover(variable192, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover493);



	let pineHover494 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange494;
			const hoverLineText494 = document.lineAt(position.line).text;


			const variable193 = new vscode.MarkdownString(``);
			variable193.appendCodeblock(`strategy.initial_capital`);
			variable193.appendMarkdown(`
The amount of initial capital set in the strategy properties`);
			variable193.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable193.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}initial_capital)*`);
			variable193.isTrusted = true;
			variable193.supportHtml = true;

			const patternVariable193 = new RegExp(`\\b(strategy\\.initial_capital)\\b`);
			if (patternVariable193.test(hoverLineText494)) {
				hoverRange494 = document.getWordRangeAtPosition(position, patternVariable193);
				if (hoverRange494) {
					return new vscode.Hover(variable193, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover494);



	let pineHover495 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange495;
			const hoverLineText495 = document.lineAt(position.line).text;


			const variable194 = new vscode.MarkdownString(``);
			variable194.appendCodeblock(`strategy.long`);
			variable194.appendMarkdown(`
Long position entry`);
			variable194.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>strategy_direction`);
			variable194.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}long)*`);
			variable194.isTrusted = true;
			variable194.supportHtml = true;

			const patternVariable194 = new RegExp(`\\b(strategy\\.long)\\b`);
			if (patternVariable194.test(hoverLineText495)) {
				hoverRange495 = document.getWordRangeAtPosition(position, patternVariable194);
				if (hoverRange495) {
					return new vscode.Hover(variable194, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover495);



	let pineHover496 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange496;
			const hoverLineText496 = document.lineAt(position.line).text;


			const variable195 = new vscode.MarkdownString(``);
			variable195.appendCodeblock(`strategy.losstrades`);
			variable195.appendMarkdown(`
Number of unprofitable trades for the whole trading interval`);
			variable195.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable195.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}losstrades)*`);
			variable195.isTrusted = true;
			variable195.supportHtml = true;

			const patternVariable195 = new RegExp(`\\b(strategy\\.losstrades)\\b`);
			if (patternVariable195.test(hoverLineText496)) {
				hoverRange496 = document.getWordRangeAtPosition(position, patternVariable195);
				if (hoverRange496) {
					return new vscode.Hover(variable195, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover496);



	let pineHover497 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange497;
			const hoverLineText497 = document.lineAt(position.line).text;


			const variable196 = new vscode.MarkdownString(``);
			variable196.appendCodeblock(`strategy.max_contracts_held_all`);
			variable196.appendMarkdown(`
Maximum number of contracts/shares/lots/units in one trade for the whole trading interval`);
			variable196.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable196.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}max_contracts_held_all)*`);
			variable196.isTrusted = true;
			variable196.supportHtml = true;

			const patternVariable196 = new RegExp(`\\b(strategy\\.max_contracts_held_all)\\b`);
			if (patternVariable196.test(hoverLineText497)) {
				hoverRange497 = document.getWordRangeAtPosition(position, patternVariable196);
				if (hoverRange497) {
					return new vscode.Hover(variable196, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover497);



	let pineHover498 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange498;
			const hoverLineText498 = document.lineAt(position.line).text;


			const variable197 = new vscode.MarkdownString(``);
			variable197.appendCodeblock(`strategy.max_contracts_held_long`);
			variable197.appendMarkdown(`
Maximum number of contracts/shares/lots/units in one long trade for the whole trading interval`);
			variable197.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable197.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}max_contracts_held_long)*`);
			variable197.isTrusted = true;
			variable197.supportHtml = true;

			const patternVariable197 = new RegExp(`\\b(strategy\\.max_contracts_held_long)\\b`);
			if (patternVariable197.test(hoverLineText498)) {
				hoverRange498 = document.getWordRangeAtPosition(position, patternVariable197);
				if (hoverRange498) {
					return new vscode.Hover(variable197, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover498);



	let pineHover499 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange499;
			const hoverLineText499 = document.lineAt(position.line).text;


			const variable198 = new vscode.MarkdownString(``);
			variable198.appendCodeblock(`strategy.max_contracts_held_short`);
			variable198.appendMarkdown(`
Maximum number of contracts/shares/lots/units in one short trade for the whole trading interval`);
			variable198.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable198.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}max_contracts_held_short)*`);
			variable198.isTrusted = true;
			variable198.supportHtml = true;

			const patternVariable198 = new RegExp(`\\b(strategy\\.max_contracts_held_short)\\b`);
			if (patternVariable198.test(hoverLineText499)) {
				hoverRange499 = document.getWordRangeAtPosition(position, patternVariable198);
				if (hoverRange499) {
					return new vscode.Hover(variable198, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover499);



	let pineHover500 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange500;
			const hoverLineText500 = document.lineAt(position.line).text;


			const variable199 = new vscode.MarkdownString(``);
			variable199.appendCodeblock(`strategy.max_drawdown`);
			variable199.appendMarkdown(`
Maximum equity drawdown value for the whole trading interval`);
			variable199.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable199.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}max_drawdown)*`);
			variable199.isTrusted = true;
			variable199.supportHtml = true;

			const patternVariable199 = new RegExp(`\\b(strategy\\.max_drawdown)\\b`);
			if (patternVariable199.test(hoverLineText500)) {
				hoverRange500 = document.getWordRangeAtPosition(position, patternVariable199);
				if (hoverRange500) {
					return new vscode.Hover(variable199, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover500);



	let pineHover501 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange501;
			const hoverLineText501 = document.lineAt(position.line).text;


			const variable200 = new vscode.MarkdownString(``);
			variable200.appendCodeblock(`strategy.netprofit`);
			variable200.appendMarkdown(`
Total currency value of all completed trades`);
			variable200.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable200.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}netprofit)*`);
			variable200.isTrusted = true;
			variable200.supportHtml = true;

			const patternVariable200 = new RegExp(`\\b(strategy\\.netprofit)\\b`);
			if (patternVariable200.test(hoverLineText501)) {
				hoverRange501 = document.getWordRangeAtPosition(position, patternVariable200);
				if (hoverRange501) {
					return new vscode.Hover(variable200, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover501);



	let pineHover502 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange502;
			const hoverLineText502 = document.lineAt(position.line).text;


			const variable201 = new vscode.MarkdownString(``);
			variable201.appendCodeblock(`strategy.oca.cancel`);
			variable201.appendMarkdown(`
OCA type value for strategy's functions. The parameter determines that an order should belong to an OCO group, where as soon as an order is filled, all other orders of the same group are cancelled. Note: if more than 1 guaranteed-to-be-executed orders of the same OCA group are placed at once, all those orders are filled`);
			variable201.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable201.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}oca{dot}cancel)*`);
			variable201.isTrusted = true;
			variable201.supportHtml = true;

			const patternVariable201 = new RegExp(`\\b(strategy\\.oca\\.cancel)\\b`);
			if (patternVariable201.test(hoverLineText502)) {
				hoverRange502 = document.getWordRangeAtPosition(position, patternVariable201);
				if (hoverRange502) {
					return new vscode.Hover(variable201, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover502);



	let pineHover503 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange503;
			const hoverLineText503 = document.lineAt(position.line).text;


			const variable202 = new vscode.MarkdownString(``);
			variable202.appendCodeblock(`strategy.oca.none`);
			variable202.appendMarkdown(`
OCA type value for strategy's functions. The parameter determines that an order should not belong to any particular OCO group`);
			variable202.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable202.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}oca{dot}none)*`);
			variable202.isTrusted = true;
			variable202.supportHtml = true;

			const patternVariable202 = new RegExp(`\\b(strategy\\.oca\\.none)\\b`);
			if (patternVariable202.test(hoverLineText503)) {
				hoverRange503 = document.getWordRangeAtPosition(position, patternVariable202);
				if (hoverRange503) {
					return new vscode.Hover(variable202, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover503);



	let pineHover504 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange504;
			const hoverLineText504 = document.lineAt(position.line).text;


			const variable203 = new vscode.MarkdownString(``);
			variable203.appendCodeblock(`strategy.oca.reduce`);
			variable203.appendMarkdown(`
OCA type value for strategy's functions. The parameter determines that an order should belong to an OCO group, where if X number of contracts of an order is filled, number of contracts for each other order of the same OCO group is decreased by X. Note: if more than 1 guaranteed-to-be-executed orders of the same OCA group are placed at once, all those orders are filled`);
			variable203.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable203.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}oca{dot}reduce)*`);
			variable203.isTrusted = true;
			variable203.supportHtml = true;

			const patternVariable203 = new RegExp(`\\b(strategy\\.oca\\.reduce)\\b`);
			if (patternVariable203.test(hoverLineText504)) {
				hoverRange504 = document.getWordRangeAtPosition(position, patternVariable203);
				if (hoverRange504) {
					return new vscode.Hover(variable203, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover504);



	let pineHover505 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange505;
			const hoverLineText505 = document.lineAt(position.line).text;


			const variable204 = new vscode.MarkdownString(``);
			variable204.appendCodeblock(`strategy.openprofit`);
			variable204.appendMarkdown(`
Current unrealized profit or loss for the open position`);
			variable204.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable204.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}openprofit)*`);
			variable204.isTrusted = true;
			variable204.supportHtml = true;

			const patternVariable204 = new RegExp(`\\b(strategy\\.openprofit)\\b`);
			if (patternVariable204.test(hoverLineText505)) {
				hoverRange505 = document.getWordRangeAtPosition(position, patternVariable204);
				if (hoverRange505) {
					return new vscode.Hover(variable204, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover505);



	let pineHover506 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange506;
			const hoverLineText506 = document.lineAt(position.line).text;


			const variable205 = new vscode.MarkdownString(``);
			variable205.appendCodeblock(`strategy.opentrades`);
			variable205.appendMarkdown(`
Number of market position entries, which were not closed and remain opened. If there is no open market position, 0 is returned`);
			variable205.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable205.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}opentrades)*`);
			variable205.isTrusted = true;
			variable205.supportHtml = true;

			const patternVariable205 = new RegExp(`\\b(strategy\\.opentrades)\\b`);
			if (patternVariable205.test(hoverLineText506)) {
				hoverRange506 = document.getWordRangeAtPosition(position, patternVariable205);
				if (hoverRange506) {
					return new vscode.Hover(variable205, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover506);



	let pineHover507 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange507;
			const hoverLineText507 = document.lineAt(position.line).text;


			const variable206 = new vscode.MarkdownString(``);
			variable206.appendCodeblock(`strategy.percent_of_equity`);
			variable206.appendMarkdown(`
If the number of contracts/shares/lots/units to buy/sell is not specified for strategy.entry or strategy.order commands (or 'NaN' is specified), then strategy will calculate the quantity to buy/sell at close of current bar using the amount of money specified by the 'default_qty_value' in % from current strategy.equity (in the range from 0 to 100)`);
			variable206.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable206.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}percent_of_equity)*`);
			variable206.isTrusted = true;
			variable206.supportHtml = true;

			const patternVariable206 = new RegExp(`\\b(strategy\\.percent_of_equity)\\b`);
			if (patternVariable206.test(hoverLineText507)) {
				hoverRange507 = document.getWordRangeAtPosition(position, patternVariable206);
				if (hoverRange507) {
					return new vscode.Hover(variable206, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover507);



	let pineHover508 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange508;
			const hoverLineText508 = document.lineAt(position.line).text;


			const variable207 = new vscode.MarkdownString(``);
			variable207.appendCodeblock(`strategy.position_avg_price`);
			variable207.appendMarkdown(`
Average entry price of current market position. If the market position is flat, 'NaN' is returned`);
			variable207.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable207.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}position_avg_price)*`);
			variable207.isTrusted = true;
			variable207.supportHtml = true;

			const patternVariable207 = new RegExp(`\\b(strategy\\.position_avg_price)\\b`);
			if (patternVariable207.test(hoverLineText508)) {
				hoverRange508 = document.getWordRangeAtPosition(position, patternVariable207);
				if (hoverRange508) {
					return new vscode.Hover(variable207, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover508);



	let pineHover509 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange509;
			const hoverLineText509 = document.lineAt(position.line).text;


			const variable208 = new vscode.MarkdownString(``);
			variable208.appendCodeblock(`strategy.position_entry_name`);
			variable208.appendMarkdown(`
Name of the order that initially opened current market position`);
			variable208.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable208.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}position_entry_name)*`);
			variable208.isTrusted = true;
			variable208.supportHtml = true;

			const patternVariable208 = new RegExp(`\\b(strategy\\.position_entry_name)\\b`);
			if (patternVariable208.test(hoverLineText509)) {
				hoverRange509 = document.getWordRangeAtPosition(position, patternVariable208);
				if (hoverRange509) {
					return new vscode.Hover(variable208, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover509);



	let pineHover510 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange510;
			const hoverLineText510 = document.lineAt(position.line).text;


			const variable209 = new vscode.MarkdownString(``);
			variable209.appendCodeblock(`strategy.position_size`);
			variable209.appendMarkdown(`
Direction and size of the current market position. If the value is > 0, the market position is long. If the value is < 0, the market position is short. The absolute value is the number of contracts/shares/lots/units in trade (position size)`);
			variable209.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable209.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}position_size)*`);
			variable209.isTrusted = true;
			variable209.supportHtml = true;

			const patternVariable209 = new RegExp(`\\b(strategy\\.position_size)\\b`);
			if (patternVariable209.test(hoverLineText510)) {
				hoverRange510 = document.getWordRangeAtPosition(position, patternVariable209);
				if (hoverRange510) {
					return new vscode.Hover(variable209, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover510);



	let pineHover511 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange511;
			const hoverLineText511 = document.lineAt(position.line).text;


			const variable210 = new vscode.MarkdownString(``);
			variable210.appendCodeblock(`strategy.short`);
			variable210.appendMarkdown(`
Short position entry`);
			variable210.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>strategy_direction`);
			variable210.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}short)*`);
			variable210.isTrusted = true;
			variable210.supportHtml = true;

			const patternVariable210 = new RegExp(`\\b(strategy\\.short)\\b`);
			if (patternVariable210.test(hoverLineText511)) {
				hoverRange511 = document.getWordRangeAtPosition(position, patternVariable210);
				if (hoverRange511) {
					return new vscode.Hover(variable210, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover511);



	let pineHover512 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange512;
			const hoverLineText512 = document.lineAt(position.line).text;


			const variable211 = new vscode.MarkdownString(``);
			variable211.appendCodeblock(`strategy.wintrades`);
			variable211.appendMarkdown(`
Number of profitable trades for the whole trading interval`);
			variable211.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable211.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_strategy{dot}wintrades)*`);
			variable211.isTrusted = true;
			variable211.supportHtml = true;

			const patternVariable211 = new RegExp(`\\b(strategy\\.wintrades)\\b`);
			if (patternVariable211.test(hoverLineText512)) {
				hoverRange512 = document.getWordRangeAtPosition(position, patternVariable211);
				if (hoverRange512) {
					return new vscode.Hover(variable211, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover512);



	let pineHover513 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange513;
			const hoverLineText513 = document.lineAt(position.line).text;


			const variable212 = new vscode.MarkdownString(``);
			variable212.appendCodeblock(`syminfo.basecurrency`);
			variable212.appendMarkdown(`
Base currency for the symbol. For the symbol 'BTCUSD' returns 'BTC'`);
			variable212.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable212.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}basecurrency)*`);
			variable212.isTrusted = true;
			variable212.supportHtml = true;

			const patternVariable212 = new RegExp(`\\b(syminfo\\.basecurrency)\\b`);
			if (patternVariable212.test(hoverLineText513)) {
				hoverRange513 = document.getWordRangeAtPosition(position, patternVariable212);
				if (hoverRange513) {
					return new vscode.Hover(variable212, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover513);



	let pineHover514 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange514;
			const hoverLineText514 = document.lineAt(position.line).text;


			const variable213 = new vscode.MarkdownString(``);
			variable213.appendCodeblock(`syminfo.currency`);
			variable213.appendMarkdown(`
Currency for the current symbol. Returns currency code: 'USD', 'EUR', etc`);
			variable213.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable213.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}currency)*`);
			variable213.isTrusted = true;
			variable213.supportHtml = true;

			const patternVariable213 = new RegExp(`\\b(syminfo\\.currency)\\b`);
			if (patternVariable213.test(hoverLineText514)) {
				hoverRange514 = document.getWordRangeAtPosition(position, patternVariable213);
				if (hoverRange514) {
					return new vscode.Hover(variable213, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover514);



	let pineHover515 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange515;
			const hoverLineText515 = document.lineAt(position.line).text;


			const variable214 = new vscode.MarkdownString(``);
			variable214.appendCodeblock(`syminfo.description`);
			variable214.appendMarkdown(`
Description for the current symbol`);
			variable214.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable214.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}description)*`);
			variable214.isTrusted = true;
			variable214.supportHtml = true;

			const patternVariable214 = new RegExp(`\\b(syminfo\\.description)\\b`);
			if (patternVariable214.test(hoverLineText515)) {
				hoverRange515 = document.getWordRangeAtPosition(position, patternVariable214);
				if (hoverRange515) {
					return new vscode.Hover(variable214, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover515);



	let pineHover516 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange516;
			const hoverLineText516 = document.lineAt(position.line).text;


			const variable215 = new vscode.MarkdownString(``);
			variable215.appendCodeblock(`syminfo.mintick`);
			variable215.appendMarkdown(`
Min tick value for the current symbol`);
			variable215.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple float`);
			variable215.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}mintick)*`);
			variable215.isTrusted = true;
			variable215.supportHtml = true;

			const patternVariable215 = new RegExp(`\\b(syminfo\\.mintick)\\b`);
			if (patternVariable215.test(hoverLineText516)) {
				hoverRange516 = document.getWordRangeAtPosition(position, patternVariable215);
				if (hoverRange516) {
					return new vscode.Hover(variable215, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover516);



	let pineHover517 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange517;
			const hoverLineText517 = document.lineAt(position.line).text;


			const variable216 = new vscode.MarkdownString(``);
			variable216.appendCodeblock(`syminfo.pointvalue`);
			variable216.appendMarkdown(`
Point value for the current symbol`);
			variable216.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple float`);
			variable216.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}pointvalue)*`);
			variable216.isTrusted = true;
			variable216.supportHtml = true;

			const patternVariable216 = new RegExp(`\\b(syminfo\\.pointvalue)\\b`);
			if (patternVariable216.test(hoverLineText517)) {
				hoverRange517 = document.getWordRangeAtPosition(position, patternVariable216);
				if (hoverRange517) {
					return new vscode.Hover(variable216, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover517);



	let pineHover518 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange518;
			const hoverLineText518 = document.lineAt(position.line).text;


			const variable217 = new vscode.MarkdownString(``);
			variable217.appendCodeblock(`syminfo.prefix`);
			variable217.appendMarkdown(`
Prefix of current symbol name (i.e. for 'CME_EOD:TICKER' prefix is 'CME_EOD')`);
			variable217.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable217.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}prefix)*`);
			variable217.isTrusted = true;
			variable217.supportHtml = true;

			const patternVariable217 = new RegExp(`\\b(syminfo\\.prefix)\\b`);
			if (patternVariable217.test(hoverLineText518)) {
				hoverRange518 = document.getWordRangeAtPosition(position, patternVariable217);
				if (hoverRange518) {
					return new vscode.Hover(variable217, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover518);



	let pineHover519 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange519;
			const hoverLineText519 = document.lineAt(position.line).text;


			const variable218 = new vscode.MarkdownString(``);
			variable218.appendCodeblock(`syminfo.root`);
			variable218.appendMarkdown(`
Root for derivatives like futures contract. For other symbols returns the same value as syminfo.ticker`);
			variable218.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable218.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}root)*`);
			variable218.isTrusted = true;
			variable218.supportHtml = true;

			const patternVariable218 = new RegExp(`\\b(syminfo\\.root)\\b`);
			if (patternVariable218.test(hoverLineText519)) {
				hoverRange519 = document.getWordRangeAtPosition(position, patternVariable218);
				if (hoverRange519) {
					return new vscode.Hover(variable218, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover519);



	let pineHover520 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange520;
			const hoverLineText520 = document.lineAt(position.line).text;


			const variable219 = new vscode.MarkdownString(``);
			variable219.appendCodeblock(`syminfo.session`);
			variable219.appendMarkdown(`
Session type of the chart main series. Possible values are session.regular, session.extended`);
			variable219.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable219.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}session)*`);
			variable219.isTrusted = true;
			variable219.supportHtml = true;

			const patternVariable219 = new RegExp(`\\b(syminfo\\.session)\\b`);
			if (patternVariable219.test(hoverLineText520)) {
				hoverRange520 = document.getWordRangeAtPosition(position, patternVariable219);
				if (hoverRange520) {
					return new vscode.Hover(variable219, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover520);



	let pineHover521 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange521;
			const hoverLineText521 = document.lineAt(position.line).text;


			const variable220 = new vscode.MarkdownString(``);
			variable220.appendCodeblock(`syminfo.ticker`);
			variable220.appendMarkdown(`
Symbol name without exchange prefix, e.g. 'MSFT'`);
			variable220.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable220.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}ticker)*`);
			variable220.isTrusted = true;
			variable220.supportHtml = true;

			const patternVariable220 = new RegExp(`\\b(syminfo\\.ticker)\\b`);
			if (patternVariable220.test(hoverLineText521)) {
				hoverRange521 = document.getWordRangeAtPosition(position, patternVariable220);
				if (hoverRange521) {
					return new vscode.Hover(variable220, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover521);



	let pineHover522 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange522;
			const hoverLineText522 = document.lineAt(position.line).text;


			const variable221 = new vscode.MarkdownString(``);
			variable221.appendCodeblock(`syminfo.tickerid`);
			variable221.appendMarkdown(`
Symbol name with exchange prefix, e.g. 'BATS:MSFT', 'NASDAQ:MSFT'`);
			variable221.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable221.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}tickerid)*`);
			variable221.isTrusted = true;
			variable221.supportHtml = true;

			const patternVariable221 = new RegExp(`\\b(syminfo\\.tickerid)\\b`);
			if (patternVariable221.test(hoverLineText522)) {
				hoverRange522 = document.getWordRangeAtPosition(position, patternVariable221);
				if (hoverRange522) {
					return new vscode.Hover(variable221, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover522);



	let pineHover523 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange523;
			const hoverLineText523 = document.lineAt(position.line).text;


			const variable222 = new vscode.MarkdownString(``);
			variable222.appendCodeblock(`syminfo.timezone`);
			variable222.appendMarkdown(`
Timezone of the exchange of the chart main series. Possible values see in timestamp`);
			variable222.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable222.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}timezone)*`);
			variable222.isTrusted = true;
			variable222.supportHtml = true;

			const patternVariable222 = new RegExp(`\\b(syminfo\\.timezone)\\b`);
			if (patternVariable222.test(hoverLineText523)) {
				hoverRange523 = document.getWordRangeAtPosition(position, patternVariable222);
				if (hoverRange523) {
					return new vscode.Hover(variable222, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover523);



	let pineHover524 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange524;
			const hoverLineText524 = document.lineAt(position.line).text;


			const variable223 = new vscode.MarkdownString(``);
			variable223.appendCodeblock(`syminfo.type`);
			variable223.appendMarkdown(`
Type of the current symbol. Possible values are stock, futures, index, forex, crypto, fund, dr`);
			variable223.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable223.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_syminfo{dot}type)*`);
			variable223.isTrusted = true;
			variable223.supportHtml = true;

			const patternVariable223 = new RegExp(`\\b(syminfo\\.type)\\b`);
			if (patternVariable223.test(hoverLineText524)) {
				hoverRange524 = document.getWordRangeAtPosition(position, patternVariable223);
				if (hoverRange524) {
					return new vscode.Hover(variable223, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover524);



	let pineHover525 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange525;
			const hoverLineText525 = document.lineAt(position.line).text;


			const variable224 = new vscode.MarkdownString(``);
			variable224.appendCodeblock(`ta.accdist`);
			variable224.appendMarkdown(`
Accumulation/distribution index`);
			variable224.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable224.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}accdist)*`);
			variable224.isTrusted = true;
			variable224.supportHtml = true;

			const patternVariable224 = new RegExp(`\\b(ta\\.accdist)\\b`);
			if (patternVariable224.test(hoverLineText525)) {
				hoverRange525 = document.getWordRangeAtPosition(position, patternVariable224);
				if (hoverRange525) {
					return new vscode.Hover(variable224, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover525);



	let pineHover526 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange526;
			const hoverLineText526 = document.lineAt(position.line).text;


			const variable225 = new vscode.MarkdownString(``);
			variable225.appendCodeblock(`ta.iii`);
			variable225.appendMarkdown(`
Intraday Intensity Index`);
			variable225.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable225.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}iii)*`);
			variable225.isTrusted = true;
			variable225.supportHtml = true;

			const patternVariable225 = new RegExp(`\\b(ta\\.iii)\\b`);
			if (patternVariable225.test(hoverLineText526)) {
				hoverRange526 = document.getWordRangeAtPosition(position, patternVariable225);
				if (hoverRange526) {
					return new vscode.Hover(variable225, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover526);



	let pineHover527 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange527;
			const hoverLineText527 = document.lineAt(position.line).text;


			const variable226 = new vscode.MarkdownString(``);
			variable226.appendCodeblock(`ta.nvi`);
			variable226.appendMarkdown(`
Negative Volume Index`);
			variable226.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable226.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}nvi)*`);
			variable226.isTrusted = true;
			variable226.supportHtml = true;

			const patternVariable226 = new RegExp(`\\b(ta\\.nvi)\\b`);
			if (patternVariable226.test(hoverLineText527)) {
				hoverRange527 = document.getWordRangeAtPosition(position, patternVariable226);
				if (hoverRange527) {
					return new vscode.Hover(variable226, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover527);



	let pineHover528 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange528;
			const hoverLineText528 = document.lineAt(position.line).text;


			const variable227 = new vscode.MarkdownString(``);
			variable227.appendCodeblock(`ta.obv`);
			variable227.appendMarkdown(`
On Balance Volume`);
			variable227.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable227.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}obv)*`);
			variable227.isTrusted = true;
			variable227.supportHtml = true;

			const patternVariable227 = new RegExp(`\\b(ta\\.obv)\\b`);
			if (patternVariable227.test(hoverLineText528)) {
				hoverRange528 = document.getWordRangeAtPosition(position, patternVariable227);
				if (hoverRange528) {
					return new vscode.Hover(variable227, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover528);



	let pineHover529 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange529;
			const hoverLineText529 = document.lineAt(position.line).text;


			const variable228 = new vscode.MarkdownString(``);
			variable228.appendCodeblock(`ta.pvi`);
			variable228.appendMarkdown(`
Positive Volume Index`);
			variable228.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable228.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}pvi)*`);
			variable228.isTrusted = true;
			variable228.supportHtml = true;

			const patternVariable228 = new RegExp(`\\b(ta\\.pvi)\\b`);
			if (patternVariable228.test(hoverLineText529)) {
				hoverRange529 = document.getWordRangeAtPosition(position, patternVariable228);
				if (hoverRange529) {
					return new vscode.Hover(variable228, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover529);



	let pineHover530 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange530;
			const hoverLineText530 = document.lineAt(position.line).text;


			const variable229 = new vscode.MarkdownString(``);
			variable229.appendCodeblock(`ta.pvt`);
			variable229.appendMarkdown(`
Price-Volume Trend`);
			variable229.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable229.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}pvt)*`);
			variable229.isTrusted = true;
			variable229.supportHtml = true;

			const patternVariable229 = new RegExp(`\\b(ta\\.pvt)\\b`);
			if (patternVariable229.test(hoverLineText530)) {
				hoverRange530 = document.getWordRangeAtPosition(position, patternVariable229);
				if (hoverRange530) {
					return new vscode.Hover(variable229, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover530);



	let pineHover531 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange531;
			const hoverLineText531 = document.lineAt(position.line).text;


			const variable230 = new vscode.MarkdownString(``);
			variable230.appendCodeblock(`ta.tr`);
			variable230.appendMarkdown(`
True range. Same as tr(true). It is max(high - low, abs(high - close[1]), abs(low - close[1])`);
			variable230.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable230.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}tr)*`);
			variable230.isTrusted = true;
			variable230.supportHtml = true;

			const patternVariable230 = new RegExp(`\\b(ta\\.tr)\\b`);
			if (patternVariable230.test(hoverLineText531)) {
				hoverRange531 = document.getWordRangeAtPosition(position, patternVariable230);
				if (hoverRange531) {
					return new vscode.Hover(variable230, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover531);



	let pineHover532 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange532;
			const hoverLineText532 = document.lineAt(position.line).text;


			const variable231 = new vscode.MarkdownString(``);
			variable231.appendCodeblock(`ta.vwap`);
			variable231.appendMarkdown(`
Volume-weighted average price. It uses hlc3 as a source series`);
			variable231.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable231.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}vwap)*`);
			variable231.isTrusted = true;
			variable231.supportHtml = true;

			const patternVariable231 = new RegExp(`\\b(ta\\.vwap)\\b`);
			if (patternVariable231.test(hoverLineText532)) {
				hoverRange532 = document.getWordRangeAtPosition(position, patternVariable231);
				if (hoverRange532) {
					return new vscode.Hover(variable231, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover532);



	let pineHover533 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange533;
			const hoverLineText533 = document.lineAt(position.line).text;


			const variable232 = new vscode.MarkdownString(``);
			variable232.appendCodeblock(`ta.wad`);
			variable232.appendMarkdown(`
Williams Accumulation/Distribution`);
			variable232.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable232.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}wad)*`);
			variable232.isTrusted = true;
			variable232.supportHtml = true;

			const patternVariable232 = new RegExp(`\\b(ta\\.wad)\\b`);
			if (patternVariable232.test(hoverLineText533)) {
				hoverRange533 = document.getWordRangeAtPosition(position, patternVariable232);
				if (hoverRange533) {
					return new vscode.Hover(variable232, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover533);



	let pineHover534 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange534;
			const hoverLineText534 = document.lineAt(position.line).text;


			const variable233 = new vscode.MarkdownString(``);
			variable233.appendCodeblock(`ta.wvad`);
			variable233.appendMarkdown(`
Williams Variable Accumulation/Distribution`);
			variable233.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable233.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_ta{dot}wvad)*`);
			variable233.isTrusted = true;
			variable233.supportHtml = true;

			const patternVariable233 = new RegExp(`\\b(ta\\.wvad)\\b`);
			if (patternVariable233.test(hoverLineText534)) {
				hoverRange534 = document.getWordRangeAtPosition(position, patternVariable233);
				if (hoverRange534) {
					return new vscode.Hover(variable233, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover534);



	let pineHover535 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange535;
			const hoverLineText535 = document.lineAt(position.line).text;


			const variable234 = new vscode.MarkdownString(``);
			variable234.appendCodeblock(`table.all`);
			variable234.appendMarkdown(`
Returns an array filled with all the current tables drawn by the script`);
			variable234.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>table[]`);
			variable234.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_table{dot}all)*`);
			variable234.isTrusted = true;
			variable234.supportHtml = true;

			const patternVariable234 = new RegExp(`\\b(table\\.all)\\b`);
			if (patternVariable234.test(hoverLineText535)) {
				hoverRange535 = document.getWordRangeAtPosition(position, patternVariable234);
				if (hoverRange535) {
					return new vscode.Hover(variable234, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover535);



	let pineHover536 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange536;
			const hoverLineText536 = document.lineAt(position.line).text;


			const variable235 = new vscode.MarkdownString(``);
			variable235.appendCodeblock(`text.align_bottom`);
			variable235.appendMarkdown(`
Vertical text alignment for table.cell and table.cell_set_text_valign functions`);
			variable235.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable235.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_text{dot}align_bottom)*`);
			variable235.isTrusted = true;
			variable235.supportHtml = true;

			const patternVariable235 = new RegExp(`\\b(text\\.align_bottom)\\b`);
			if (patternVariable235.test(hoverLineText536)) {
				hoverRange536 = document.getWordRangeAtPosition(position, patternVariable235);
				if (hoverRange536) {
					return new vscode.Hover(variable235, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover536);



	let pineHover537 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange537;
			const hoverLineText537 = document.lineAt(position.line).text;


			const variable236 = new vscode.MarkdownString(``);
			variable236.appendCodeblock(`text.align_center`);
			variable236.appendMarkdown(`
Label text alignment for label.new and label.set_textalign functions`);
			variable236.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable236.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_text{dot}align_center)*`);
			variable236.isTrusted = true;
			variable236.supportHtml = true;

			const patternVariable236 = new RegExp(`\\b(text\\.align_center)\\b`);
			if (patternVariable236.test(hoverLineText537)) {
				hoverRange537 = document.getWordRangeAtPosition(position, patternVariable236);
				if (hoverRange537) {
					return new vscode.Hover(variable236, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover537);



	let pineHover538 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange538;
			const hoverLineText538 = document.lineAt(position.line).text;


			const variable237 = new vscode.MarkdownString(``);
			variable237.appendCodeblock(`text.align_left`);
			variable237.appendMarkdown(`
Label text alignment for label.new and label.set_textalign functions`);
			variable237.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable237.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_text{dot}align_left)*`);
			variable237.isTrusted = true;
			variable237.supportHtml = true;

			const patternVariable237 = new RegExp(`\\b(text\\.align_left)\\b`);
			if (patternVariable237.test(hoverLineText538)) {
				hoverRange538 = document.getWordRangeAtPosition(position, patternVariable237);
				if (hoverRange538) {
					return new vscode.Hover(variable237, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover538);



	let pineHover539 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange539;
			const hoverLineText539 = document.lineAt(position.line).text;


			const variable238 = new vscode.MarkdownString(``);
			variable238.appendCodeblock(`text.align_right`);
			variable238.appendMarkdown(`
Label text alignment for label.new and label.set_textalign functions`);
			variable238.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable238.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_text{dot}align_right)*`);
			variable238.isTrusted = true;
			variable238.supportHtml = true;

			const patternVariable238 = new RegExp(`\\b(text\\.align_right)\\b`);
			if (patternVariable238.test(hoverLineText539)) {
				hoverRange539 = document.getWordRangeAtPosition(position, patternVariable238);
				if (hoverRange539) {
					return new vscode.Hover(variable238, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover539);



	let pineHover540 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange540;
			const hoverLineText540 = document.lineAt(position.line).text;


			const variable239 = new vscode.MarkdownString(``);
			variable239.appendCodeblock(`text.align_top`);
			variable239.appendMarkdown(`
Vertical text alignment for table.cell and table.cell_set_text_valign functions`);
			variable239.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable239.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_text{dot}align_top)*`);
			variable239.isTrusted = true;
			variable239.supportHtml = true;

			const patternVariable239 = new RegExp(`\\b(text\\.align_top)\\b`);
			if (patternVariable239.test(hoverLineText540)) {
				hoverRange540 = document.getWordRangeAtPosition(position, patternVariable239);
				if (hoverRange540) {
					return new vscode.Hover(variable239, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover540);



	let pineHover541 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange541;
			const hoverLineText541 = document.lineAt(position.line).text;


			const variable240 = new vscode.MarkdownString(``);
			variable240.appendCodeblock(`(time)`);
			variable240.appendMarkdown(`
Current bar time in UNIX format. It is the number of milliseconds that have elapsed since 00:00:00 UTC, 1 January 1970`);
			variable240.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable240.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_time)*`);
			variable240.isTrusted = true;
			variable240.supportHtml = true;

			const patternVariable240 = new RegExp(`\\b(time)\\b`);
			if (patternVariable240.test(hoverLineText541)) {
				hoverRange541 = document.getWordRangeAtPosition(position, patternVariable240);
				if (hoverRange541) {
					return new vscode.Hover(variable240, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover541);



	let pineHover542 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange542;
			const hoverLineText542 = document.lineAt(position.line).text;


			const variable241 = new vscode.MarkdownString(``);
			variable241.appendCodeblock(`time_close`);
			variable241.appendMarkdown(`
Current bar close time in UNIX format. It is the number of milliseconds that have elapsed since 00:00:00 UTC, 1 January 1970. On price-based charts this variable value is na`);
			variable241.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable241.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_time_close)*`);
			variable241.isTrusted = true;
			variable241.supportHtml = true;

			const patternVariable241 = new RegExp(`\\b(time_close)\\b`);
			if (patternVariable241.test(hoverLineText542)) {
				hoverRange542 = document.getWordRangeAtPosition(position, patternVariable241);
				if (hoverRange542) {
					return new vscode.Hover(variable241, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover542);



	let pineHover543 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange543;
			const hoverLineText543 = document.lineAt(position.line).text;


			const variable242 = new vscode.MarkdownString(``);
			variable242.appendCodeblock(`time_tradingday`);
			variable242.appendMarkdown(`
The beginning time of the trading day the current bar belongs to, in UNIX format (the number of milliseconds that have elapsed since 00:00:00 UTC, 1 January 1970)`);
			variable242.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable242.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_time_tradingday)*`);
			variable242.isTrusted = true;
			variable242.supportHtml = true;

			const patternVariable242 = new RegExp(`\\b(time_tradingday)\\b`);
			if (patternVariable242.test(hoverLineText543)) {
				hoverRange543 = document.getWordRangeAtPosition(position, patternVariable242);
				if (hoverRange543) {
					return new vscode.Hover(variable242, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover543);



	let pineHover544 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange544;
			const hoverLineText544 = document.lineAt(position.line).text;


			const variable243 = new vscode.MarkdownString(``);
			variable243.appendCodeblock(`timeframe.isdaily`);
			variable243.appendMarkdown(`
Returns true if current resolution is a daily resolution, true otherwise`);
			variable243.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple bool`);
			variable243.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}isdaily)*`);
			variable243.isTrusted = true;
			variable243.supportHtml = true;

			const patternVariable243 = new RegExp(`\\b(timeframe\\.isdaily)\\b`);
			if (patternVariable243.test(hoverLineText544)) {
				hoverRange544 = document.getWordRangeAtPosition(position, patternVariable243);
				if (hoverRange544) {
					return new vscode.Hover(variable243, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover544);



	let pineHover545 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange545;
			const hoverLineText545 = document.lineAt(position.line).text;


			const variable244 = new vscode.MarkdownString(``);
			variable244.appendCodeblock(`timeframe.isdwm`);
			variable244.appendMarkdown(`
Returns true if current resolution is a daily or weekly or monthly resolution, true otherwise`);
			variable244.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple bool`);
			variable244.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}isdwm)*`);
			variable244.isTrusted = true;
			variable244.supportHtml = true;

			const patternVariable244 = new RegExp(`\\b(timeframe\\.isdwm)\\b`);
			if (patternVariable244.test(hoverLineText545)) {
				hoverRange545 = document.getWordRangeAtPosition(position, patternVariable244);
				if (hoverRange545) {
					return new vscode.Hover(variable244, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover545);



	let pineHover546 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange546;
			const hoverLineText546 = document.lineAt(position.line).text;


			const variable245 = new vscode.MarkdownString(``);
			variable245.appendCodeblock(`timeframe.isintraday`);
			variable245.appendMarkdown(`
Returns true if current resolution is an intraday (minutes or seconds) resolution, true otherwise`);
			variable245.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple bool`);
			variable245.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}isintraday)*`);
			variable245.isTrusted = true;
			variable245.supportHtml = true;

			const patternVariable245 = new RegExp(`\\b(timeframe\\.isintraday)\\b`);
			if (patternVariable245.test(hoverLineText546)) {
				hoverRange546 = document.getWordRangeAtPosition(position, patternVariable245);
				if (hoverRange546) {
					return new vscode.Hover(variable245, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover546);



	let pineHover547 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange547;
			const hoverLineText547 = document.lineAt(position.line).text;


			const variable246 = new vscode.MarkdownString(``);
			variable246.appendCodeblock(`timeframe.isminutes`);
			variable246.appendMarkdown(`
Returns true if current resolution is a minutes resolution, true otherwise`);
			variable246.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple bool`);
			variable246.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}isminutes)*`);
			variable246.isTrusted = true;
			variable246.supportHtml = true;

			const patternVariable246 = new RegExp(`\\b(timeframe\\.isminutes)\\b`);
			if (patternVariable246.test(hoverLineText547)) {
				hoverRange547 = document.getWordRangeAtPosition(position, patternVariable246);
				if (hoverRange547) {
					return new vscode.Hover(variable246, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover547);



	let pineHover548 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange548;
			const hoverLineText548 = document.lineAt(position.line).text;


			const variable247 = new vscode.MarkdownString(``);
			variable247.appendCodeblock(`timeframe.ismonthly`);
			variable247.appendMarkdown(`
Returns true if current resolution is a monthly resolution, true otherwise`);
			variable247.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple bool`);
			variable247.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}ismonthly)*`);
			variable247.isTrusted = true;
			variable247.supportHtml = true;

			const patternVariable247 = new RegExp(`\\b(timeframe\\.ismonthly)\\b`);
			if (patternVariable247.test(hoverLineText548)) {
				hoverRange548 = document.getWordRangeAtPosition(position, patternVariable247);
				if (hoverRange548) {
					return new vscode.Hover(variable247, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover548);



	let pineHover549 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange549;
			const hoverLineText549 = document.lineAt(position.line).text;


			const variable248 = new vscode.MarkdownString(``);
			variable248.appendCodeblock(`timeframe.isseconds`);
			variable248.appendMarkdown(`
Returns true if current resolution is a seconds resolution, true otherwise`);
			variable248.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple bool`);
			variable248.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}isseconds)*`);
			variable248.isTrusted = true;
			variable248.supportHtml = true;

			const patternVariable248 = new RegExp(`\\b(timeframe\\.isseconds)\\b`);
			if (patternVariable248.test(hoverLineText549)) {
				hoverRange549 = document.getWordRangeAtPosition(position, patternVariable248);
				if (hoverRange549) {
					return new vscode.Hover(variable248, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover549);



	let pineHover550 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange550;
			const hoverLineText550 = document.lineAt(position.line).text;


			const variable249 = new vscode.MarkdownString(``);
			variable249.appendCodeblock(`timeframe.isweekly`);
			variable249.appendMarkdown(`
Returns true if current resolution is a weekly resolution, true otherwise`);
			variable249.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple bool`);
			variable249.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}isweekly)*`);
			variable249.isTrusted = true;
			variable249.supportHtml = true;

			const patternVariable249 = new RegExp(`\\b(timeframe\\.isweekly)\\b`);
			if (patternVariable249.test(hoverLineText550)) {
				hoverRange550 = document.getWordRangeAtPosition(position, patternVariable249);
				if (hoverRange550) {
					return new vscode.Hover(variable249, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover550);



	let pineHover551 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange551;
			const hoverLineText551 = document.lineAt(position.line).text;


			const variable250 = new vscode.MarkdownString(``);
			variable250.appendCodeblock(`timeframe.multiplier`);
			variable250.appendMarkdown(`
Multiplier of resolution, e.g. '60' - 60, 'D' - 1, '5D' - 5, '12M' - 12`);
			variable250.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple int`);
			variable250.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}multiplier)*`);
			variable250.isTrusted = true;
			variable250.supportHtml = true;

			const patternVariable250 = new RegExp(`\\b(timeframe\\.multiplier)\\b`);
			if (patternVariable250.test(hoverLineText551)) {
				hoverRange551 = document.getWordRangeAtPosition(position, patternVariable250);
				if (hoverRange551) {
					return new vscode.Hover(variable250, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover551);



	let pineHover552 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange552;
			const hoverLineText552 = document.lineAt(position.line).text;


			const variable251 = new vscode.MarkdownString(``);
			variable251.appendCodeblock(`timeframe.period`);
			variable251.appendMarkdown(`
Resolution, e.g. '60' - 60 minutes, 'D' - daily, 'W' - weekly, 'M' - monthly, '5D' - 5 days, '12M' - one year, '3M' - one quarter`);
			variable251.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>simple string`);
			variable251.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timeframe{dot}period)*`);
			variable251.isTrusted = true;
			variable251.supportHtml = true;

			const patternVariable251 = new RegExp(`\\b(timeframe\\.period)\\b`);
			if (patternVariable251.test(hoverLineText552)) {
				hoverRange552 = document.getWordRangeAtPosition(position, patternVariable251);
				if (hoverRange552) {
					return new vscode.Hover(variable251, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover552);



	let pineHover553 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange553;
			const hoverLineText553 = document.lineAt(position.line).text;


			const variable252 = new vscode.MarkdownString(``);
			variable252.appendCodeblock(`timenow`);
			variable252.appendMarkdown(`
Current time in UNIX format. It is the number of milliseconds that have elapsed since 00:00:00 UTC, 1 January 1970`);
			variable252.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable252.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_timenow)*`);
			variable252.isTrusted = true;
			variable252.supportHtml = true;

			const patternVariable252 = new RegExp(`\\b(timenow)\\b`);
			if (patternVariable252.test(hoverLineText553)) {
				hoverRange553 = document.getWordRangeAtPosition(position, patternVariable252);
				if (hoverRange553) {
					return new vscode.Hover(variable252, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover553);



	let pineHover554 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange554;
			const hoverLineText554 = document.lineAt(position.line).text;


			const variable253 = new vscode.MarkdownString(``);
			variable253.appendCodeblock(`volume`);
			variable253.appendMarkdown(`
Current bar volume`);
			variable253.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series float`);
			variable253.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_volume)*`);
			variable253.isTrusted = true;
			variable253.supportHtml = true;

			const patternVariable253 = new RegExp(`\\b(volume)\\b`);
			if (patternVariable253.test(hoverLineText554)) {
				hoverRange554 = document.getWordRangeAtPosition(position, patternVariable253);
				if (hoverRange554) {
					return new vscode.Hover(variable253, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover554);



	let pineHover555 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange555;
			const hoverLineText555 = document.lineAt(position.line).text;


			const variable254 = new vscode.MarkdownString(``);
			variable254.appendCodeblock(`weekofyear`);
			variable254.appendMarkdown(`
Week number of current bar time in exchange timezone`);
			variable254.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable254.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_weekofyear)*`);
			variable254.isTrusted = true;
			variable254.supportHtml = true;

			const patternVariable254 = new RegExp(`\\b(weekofyear)\\b`);
			if (patternVariable254.test(hoverLineText555)) {
				hoverRange555 = document.getWordRangeAtPosition(position, patternVariable254);
				if (hoverRange555) {
					return new vscode.Hover(variable254, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover555);



	let pineHover556 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange556;
			const hoverLineText556 = document.lineAt(position.line).text;


			const variable255 = new vscode.MarkdownString(``);
			variable255.appendCodeblock(`xloc.bar_index`);
			variable255.appendMarkdown(`A named constant that specifies the algorithm of interpretation of x-value in functions line.new and label.new. If xloc = xloc.bar_index, value of x is a bar index`);
			variable255.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable255.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_xloc{dot}bar_index)*`);
			variable255.isTrusted = true;
			variable255.supportHtml = true;

			const patternVariable255 = new RegExp(`\\b(xloc\\.bar_index)\\b`);
			if (patternVariable255.test(hoverLineText556)) {
				hoverRange556 = document.getWordRangeAtPosition(position, patternVariable255);
				if (hoverRange556) {
					return new vscode.Hover(variable255, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover556);



	let pineHover557 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange557;
			const hoverLineText557 = document.lineAt(position.line).text;


			const variable256 = new vscode.MarkdownString(``);
			variable256.appendCodeblock(`xloc.bar_time`);
			variable256.appendMarkdown(`A named constant that specifies the algorithm of interpretation of x-value in functions line.new and label.new. If xloc = xloc.bar_time, value of x is a bar UNIX time`);
			variable256.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable256.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_xloc{dot}bar_time)*`);
			variable256.isTrusted = true;
			variable256.supportHtml = true;

			const patternVariable256 = new RegExp(`\\b(xloc\\.bar_time)\\b`);
			if (patternVariable256.test(hoverLineText557)) {
				hoverRange557 = document.getWordRangeAtPosition(position, patternVariable256);
				if (hoverRange557) {
					return new vscode.Hover(variable256, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover557);



	let pineHover558 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange558;
			const hoverLineText558 = document.lineAt(position.line).text;


			const variable257 = new vscode.MarkdownString(``);
			variable257.appendCodeblock(`year`);
			variable257.appendMarkdown(`Current bar year in exchange timezone`);
			variable257.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable257.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_year)*`);
			variable257.isTrusted = true;
			variable257.supportHtml = true;

			const patternVariable257 = new RegExp(`\\b(year)\\b`);
			if (patternVariable257.test(hoverLineText558)) {
				hoverRange558 = document.getWordRangeAtPosition(position, patternVariable257);
				if (hoverRange558) {
					return new vscode.Hover(variable257, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover558);



	let pineHover559 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange559;
			const hoverLineText559 = document.lineAt(position.line).text;


			const variable258 = new vscode.MarkdownString(``);
			variable258.appendCodeblock(`yloc.abovebar`);
			variable258.appendMarkdown(`A named constant that specifies the algorithm of interpretation of y-value in function label.new`);
			variable258.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable258.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_yloc{dot}abovebar)*`);
			variable258.isTrusted = true;
			variable258.supportHtml = true;

			const patternVariable258 = new RegExp(`\\b(yloc\\.abovebar)\\b`);
			if (patternVariable258.test(hoverLineText559)) {
				hoverRange559 = document.getWordRangeAtPosition(position, patternVariable258);
				if (hoverRange559) {
					return new vscode.Hover(variable258, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover559);



	let pineHover560 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange560;
			const hoverLineText560 = document.lineAt(position.line).text;


			const variable259 = new vscode.MarkdownString(``);
			variable259.appendCodeblock(`yloc.belowbar`);
			variable259.appendMarkdown(`A named constant that specifies the algorithm of interpretation of y-value in function label.new`);
			variable259.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable259.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_yloc{dot}belowbar)*`);
			variable259.isTrusted = true;
			variable259.supportHtml = true;

			const patternVariable259 = new RegExp(`\\b(yloc\\.belowbar)\\b`);
			if (patternVariable259.test(hoverLineText560)) {
				hoverRange560 = document.getWordRangeAtPosition(position, patternVariable259);
				if (hoverRange560) {
					return new vscode.Hover(variable259, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover560);



	let pineHover561 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange561;
			const hoverLineText561 = document.lineAt(position.line).text;


			const variable260 = new vscode.MarkdownString(``);
			variable260.appendCodeblock(`yloc.price`);
			variable260.appendMarkdown(`A named constant that specifies the algorithm of interpretation of y-value in function label.new`);
			variable260.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>const string`);
			variable260.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_yloc{dot}price)*`);
			variable260.isTrusted = true;
			variable260.supportHtml = true;

			const patternVariable260 = new RegExp(`\\b(yloc\\.price)\\b`);
			if (patternVariable260.test(hoverLineText561)) {
				hoverRange561 = document.getWordRangeAtPosition(position, patternVariable260);
				if (hoverRange561) {
					return new vscode.Hover(variable260, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover561);

	let pineHover562 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange562;
			const hoverLineText562 = document.lineAt(position.line).text;


			const variable7 = new vscode.MarkdownString(``);
			variable7.appendCodeblock(`bar_index`);
			variable7.appendMarkdown(`Current bar index. Numbering is zero-based, index of the first bar is 0`);
			variable7.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><b>TYPE</b></span><span style="color:#e5b453;background-color:#ffffff00;">&nbsp;&nbsp;<i>series int`);
			variable7.appendMarkdown(`

*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#var_bar_index)*`);
			variable7.isTrusted = true;
			variable7.supportHtml = true;

			const patternVariable7 = new RegExp(`\\bbar_index\\b`);
			if (patternVariable7.test(hoverLineText562)) {
				hoverRange562 = document.getWordRangeAtPosition(position, patternVariable7);
				if (hoverRange562) {
					return new vscode.Hover(variable7, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover562);




	let pineHover563 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange563;
			const hoverLineText563 = document.lineAt(position.line).text;


			const operator1 = new vscode.MarkdownString(``);
			operator1.appendCodeblock(`!=`);
			operator1.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator1.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_!=)*`);
			operator1.isTrusted = true;
			operator1.supportHtml = true;

			const patternOperator1 = new RegExp(`(!=)`);
			if (patternOperator1.test(hoverLineText563)) {
				hoverRange563 = document.getWordRangeAtPosition(position, patternOperator1);
				if (hoverRange563) {
					return new vscode.Hover(operator1, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover563);



	let pineHover564 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange564;
			const hoverLineText564 = document.lineAt(position.line).text;


			const operator3 = new vscode.MarkdownString(``);
			operator3.appendCodeblock(`%=`);
			operator3.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator3.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{percent}=)*`);
			operator3.isTrusted = true;
			operator3.supportHtml = true;

			const patternOperator3 = new RegExp(`(%=)`);
			if (patternOperator3.test(hoverLineText564)) {
				hoverRange564 = document.getWordRangeAtPosition(position, patternOperator3);
				if (hoverRange564) {
					return new vscode.Hover(operator3, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover564);


	let pineHover565 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange565;
			const hoverLineText565 = document.lineAt(position.line).text;


			const operator2 = new vscode.MarkdownString(``);
			operator2.appendCodeblock(`%`);
			operator2.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator2.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{percent})*`);
			operator2.isTrusted = true;
			operator2.supportHtml = true;

			const patternOperator2 = new RegExp(`(%)`);
			if (patternOperator2.test(hoverLineText565)) {
				hoverRange565 = document.getWordRangeAtPosition(position, patternOperator2);
				if (hoverRange565) {
					return new vscode.Hover(operator2, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover565);


	let pineHover566 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange566;
			const hoverLineText566 = document.lineAt(position.line).text;


			const operator5 = new vscode.MarkdownString(``);
			operator5.appendCodeblock(`*=`);
			operator5.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator5.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{star}=)*`);
			operator5.isTrusted = true;
			operator5.supportHtml = true;

			const patternOperator5 = new RegExp(`(\\*\\=)`);
			if (patternOperator5.test(hoverLineText566)) {
				hoverRange566 = document.getWordRangeAtPosition(position, patternOperator5);
				if (hoverRange566) {
					return new vscode.Hover(operator5, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover566);



	let pineHover567 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange567;
			const hoverLineText567 = document.lineAt(position.line).text;


			const operator4 = new vscode.MarkdownString(``);
			operator4.appendCodeblock(`*`);
			operator4.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator4.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{star})*`);
			operator4.isTrusted = true;
			operator4.supportHtml = true;

			const patternOperator4 = new RegExp(`\\*`);
			if (patternOperator4.test(hoverLineText567)) {
				hoverRange567 = document.getWordRangeAtPosition(position, patternOperator4);
				if (hoverRange567) {
					return new vscode.Hover(operator4, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover567);


	let pineHover568 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange568;
			const hoverLineText568 = document.lineAt(position.line).text;


			const operator7 = new vscode.MarkdownString(``);
			operator7.appendCodeblock(`+=`);
			operator7.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator7.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{plus}=)*`);
			operator7.isTrusted = true;
			operator7.supportHtml = true;

			const patternOperator7 = new RegExp(`(\\+\\=)`);
			if (patternOperator7.test(hoverLineText568)) {
				hoverRange568 = document.getWordRangeAtPosition(position, patternOperator7);
				if (hoverRange568) {
					return new vscode.Hover(operator7, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover568);


	let pineHover569 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange569;
			const hoverLineText569 = document.lineAt(position.line).text;


			const operator6 = new vscode.MarkdownString(``);
			operator6.appendCodeblock(`+`);
			operator6.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator6.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{plus})*`);
			operator6.isTrusted = true;
			operator6.supportHtml = true;

			const patternOperator6 = new RegExp(`(\\+)`);
			if (patternOperator6.test(hoverLineText569)) {
				hoverRange569 = document.getWordRangeAtPosition(position, patternOperator6);
				if (hoverRange569) {
					return new vscode.Hover(operator6, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover569);

	let pineHover570 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange570;
			const hoverLineText570 = document.lineAt(position.line).text;


			const operator9 = new vscode.MarkdownString(``);
			operator9.appendCodeblock(`-=`);
			operator9.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator9.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{minus}=)*`);
			operator9.isTrusted = true;
			operator9.supportHtml = true;

			const patternOperator9 = new RegExp(`(-=)`);
			if (patternOperator9.test(hoverLineText570)) {
				hoverRange570 = document.getWordRangeAtPosition(position, patternOperator9);
				if (hoverRange570) {
					return new vscode.Hover(operator9, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover570);

	let pineHover571 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange571;
			const hoverLineText571 = document.lineAt(position.line).text;


			const operator8 = new vscode.MarkdownString(``);
			operator8.appendCodeblock(`-`);
			operator8.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator8.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{minus})*`);
			operator8.isTrusted = true;
			operator8.supportHtml = true;

			const patternOperator8 = new RegExp(`(-)`);
			if (patternOperator8.test(hoverLineText571)) {
				hoverRange571 = document.getWordRangeAtPosition(position, patternOperator8);
				if (hoverRange571) {
					return new vscode.Hover(operator8, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover571);



	let pineHover572 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange572;
			const hoverLineText572 = document.lineAt(position.line).text;


			const operator11 = new vscode.MarkdownString(``);
			operator11.appendCodeblock(`/=`);
			operator11.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator11.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{slash}=)*`);
			operator11.isTrusted = true;
			operator11.supportHtml = true;

			const patternOperator11 = new RegExp(`(\\/=)`);
			if (patternOperator11.test(hoverLineText572)) {
				hoverRange572 = document.getWordRangeAtPosition(position, patternOperator11);
				if (hoverRange572) {
					return new vscode.Hover(operator11, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover572);

	let pineHover573 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange573;
			const hoverLineText573 = document.lineAt(position.line).text;


			const operator10 = new vscode.MarkdownString(``);
			operator10.appendCodeblock(`/`);
			operator10.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator10.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{slash})*`);
			operator10.isTrusted = true;
			operator10.supportHtml = true;

			const patternOperator10 = new RegExp(`(\\/)`);
			if (patternOperator10.test(hoverLineText573)) {
				hoverRange573 = document.getWordRangeAtPosition(position, patternOperator10);
				if (hoverRange573) {
					return new vscode.Hover(operator10, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover573);


	let pineHover574 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange574;
			const hoverLineText574 = document.lineAt(position.line).text;


			const operator13 = new vscode.MarkdownString(``);
			operator13.appendCodeblock(`<=`);
			operator13.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator13.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_<=)*`);
			operator13.isTrusted = true;
			operator13.supportHtml = true;

			const patternOperator13 = new RegExp(`(<=)`);
			if (patternOperator13.test(hoverLineText574)) {
				hoverRange574 = document.getWordRangeAtPosition(position, patternOperator13);
				if (hoverRange574) {
					return new vscode.Hover(operator13, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover574);



	let pineHover575 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange575;
			const hoverLineText575 = document.lineAt(position.line).text;


			const operator12 = new vscode.MarkdownString(``);
			operator12.appendCodeblock(`<`);
			operator12.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator12.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_<)*`);
			operator12.isTrusted = true;
			operator12.supportHtml = true;

			const patternOperator12 = new RegExp(`(<)`);
			if (patternOperator12.test(hoverLineText575)) {
				hoverRange575 = document.getWordRangeAtPosition(position, patternOperator12);
				if (hoverRange575) {
					return new vscode.Hover(operator12, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover575);


	let pineHover576 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange576;
			const hoverLineText576 = document.lineAt(position.line).text;


			const operator14 = new vscode.MarkdownString(``);
			operator14.appendCodeblock(`==`);
			operator14.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator14.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_==)*`);
			operator14.isTrusted = true;
			operator14.supportHtml = true;

			const patternOperator14 = new RegExp(`(\\==)`);
			if (patternOperator14.test(hoverLineText576)) {
				hoverRange576 = document.getWordRangeAtPosition(position, patternOperator14);
				if (hoverRange576) {
					return new vscode.Hover(operator14, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover576);




	let pineHover578 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange578;
			const hoverLineText578 = document.lineAt(position.line).text;


			const operator15 = new vscode.MarkdownString(``);
			operator15.appendCodeblock(`=>`);
			operator15.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator15.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_=>)*`);
			operator15.isTrusted = true;
			operator15.supportHtml = true;

			const patternOperator15 = new RegExp(`(=>)`);
			if (patternOperator15.test(hoverLineText578)) {
				hoverRange578 = document.getWordRangeAtPosition(position, patternOperator15);
				if (hoverRange578) {
					return new vscode.Hover(operator15, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover578);

	let pineHover579 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange579;
			const hoverLineText579 = document.lineAt(position.line).text;


			const operator17 = new vscode.MarkdownString(``);
			operator17.appendCodeblock(`>=`);
			operator17.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator17.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_>=)*`);
			operator17.isTrusted = true;
			operator17.supportHtml = true;

			const patternOperator17 = new RegExp(`(>=)`);
			if (patternOperator17.test(hoverLineText579)) {
				hoverRange579 = document.getWordRangeAtPosition(position, patternOperator17);
				if (hoverRange579) {
					return new vscode.Hover(operator17, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover579);


	let pineHover580 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange580;
			const hoverLineText580 = document.lineAt(position.line).text;


			const operator16 = new vscode.MarkdownString(``);
			operator16.appendCodeblock(`>`);
			operator16.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator16.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_>)*`);
			operator16.isTrusted = true;
			operator16.supportHtml = true;

			const patternOperator16 = new RegExp(`(>)`);
			if (patternOperator16.test(hoverLineText580)) {
				hoverRange580 = document.getWordRangeAtPosition(position, patternOperator16);
				if (hoverRange580) {
					return new vscode.Hover(operator16, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover580);

	let pineHover581 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange581;
			const hoverLineText581 = document.lineAt(position.line).text;


			const operator18 = new vscode.MarkdownString(``);
			operator18.appendCodeblock(`?:`);
			operator18.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator18.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_{question}{colon})*`);
			operator18.isTrusted = true;
			operator18.supportHtml = true;

			const patternOperator18 = new RegExp(`((\\?)|((\\?).*(:).*)|((\\?).*(:).*))`);
			if (patternOperator18.test(hoverLineText581)) {
				hoverRange581 = document.getWordRangeAtPosition(position, patternOperator18);
				if (hoverRange581) {
					return new vscode.Hover(operator18, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover581);

	let pineHover582 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange582;
			const hoverLineText582 = document.lineAt(position.line).text;


			const operator19 = new vscode.MarkdownString(``);
			operator19.appendCodeblock(`[]`);
			operator19.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator19.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_[])*`);
			operator19.isTrusted = true;
			operator19.supportHtml = true;

			const patternOperator19 = new RegExp(`((\\[|\\]))`);
			if (patternOperator19.test(hoverLineText582)) {
				hoverRange582 = document.getWordRangeAtPosition(position, patternOperator19);
				if (hoverRange582) {
					return new vscode.Hover(operator19, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover582);


	let pineHover583 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange583;
			const hoverLineText583 = document.lineAt(position.line).text;


			const operator20 = new vscode.MarkdownString(``);
			operator20.appendCodeblock(`and`);
			operator20.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator20.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_and)*`);
			operator20.isTrusted = true;
			operator20.supportHtml = true;

			const patternOperator20 = RegExp(`\\band\\b`);
			if (patternOperator20.test(hoverLineText583)) {
				hoverRange583 = document.getWordRangeAtPosition(position, patternOperator20);
				if (hoverRange583) {
					return new vscode.Hover(operator20, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover583);


	let pineHover584 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange584;
			const hoverLineText584 = document.lineAt(position.line).text;


			const operator21 = new vscode.MarkdownString(``);
			operator21.appendCodeblock(`export`);
			operator21.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator21.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_export)*`);
			operator21.isTrusted = true;
			operator21.supportHtml = true;

			const patternOperator21 = RegExp(`\\bexport\\b`);
			if (patternOperator21.test(hoverLineText584)) {
				hoverRange584 = document.getWordRangeAtPosition(position, patternOperator21);
				if (hoverRange584) {
					return new vscode.Hover(operator21, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover584);




	let pineHover587 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange587;
			const hoverLineText587 = document.lineAt(position.line).text;


			const operator22 = new vscode.MarkdownString(``);
			operator22.appendCodeblock(`for`);
			operator22.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator22.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_for)*`);
			operator22.isTrusted = true;
			operator22.supportHtml = true;

			const patternOperator22 = RegExp(`\\bfor\\b`);
			if (patternOperator22.test(hoverLineText587)) {
				hoverRange587 = document.getWordRangeAtPosition(position, patternOperator22);
				if (hoverRange587) {
					return new vscode.Hover(operator22, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover587);



	let pineHover588 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange588;
			const hoverLineText588 = document.lineAt(position.line).text;


			const operator24 = new vscode.MarkdownString(``);
			operator24.appendCodeblock(`if`);
			operator24.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator24.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_if)*`);
			operator24.isTrusted = true;
			operator24.supportHtml = true;

			const patternOperator24 = RegExp(`\\bif\\b`);
			if (patternOperator24.test(hoverLineText588)) {
				hoverRange588 = document.getWordRangeAtPosition(position, patternOperator24);
				if (hoverRange588) {
					return new vscode.Hover(operator24, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover588);




	let pineHover589 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange589;
			const hoverLineText589 = document.lineAt(position.line).text;


			const operator25 = new vscode.MarkdownString(``);
			operator25.appendCodeblock(`import`);
			operator25.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator25.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_import)*`);
			operator25.isTrusted = true;
			operator25.supportHtml = true;

			const patternOperator25 = RegExp(`\\bimport\\b`);
			if (patternOperator25.test(hoverLineText589)) {
				hoverRange589 = document.getWordRangeAtPosition(position, patternOperator25);
				if (hoverRange589) {
					return new vscode.Hover(operator25, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover589);


	let pineHover590 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange590;
			const hoverLineText590 = document.lineAt(position.line).text;


			const operator26 = new vscode.MarkdownString(``);
			operator26.appendCodeblock(`not`);
			operator26.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator26.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_not)*`);
			operator26.isTrusted = true;
			operator26.supportHtml = true;

			const patternOperator26 = RegExp(`(not)`);
			if (patternOperator26.test(hoverLineText590)) {
				hoverRange590 = document.getWordRangeAtPosition(position, patternOperator26);
				if (hoverRange590) {
					return new vscode.Hover(operator26, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover590);


	let pineHover591 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange591;
			const hoverLineText591 = document.lineAt(position.line).text;


			const operator27 = new vscode.MarkdownString(``);
			operator27.appendCodeblock(`or`);
			operator27.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator27.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_or)*`);
			operator27.isTrusted = true;
			operator27.supportHtml = true;

			const patternOperator27 = RegExp(`\\bor\\b`);
			if (patternOperator27.test(hoverLineText591)) {
				hoverRange591 = document.getWordRangeAtPosition(position, patternOperator27);
				if (hoverRange591) {
					return new vscode.Hover(operator27, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover591);


	let pineHover592 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange592;
			const hoverLineText592 = document.lineAt(position.line).text;


			const operator28 = new vscode.MarkdownString(``);
			operator28.appendCodeblock(`series`);
			operator28.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator28.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_series)*`);
			operator28.isTrusted = true;
			operator28.supportHtml = true;

			const patternOperator28 = RegExp(`\\bseries\\b`);
			if (patternOperator28.test(hoverLineText592)) {
				hoverRange592 = document.getWordRangeAtPosition(position, patternOperator28);
				if (hoverRange592) {
					return new vscode.Hover(operator28, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover592);


	let pineHover593 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange593;
			const hoverLineText593 = document.lineAt(position.line).text;


			const operator29 = new vscode.MarkdownString(``);
			operator29.appendCodeblock(`simple`);
			operator29.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator29.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_simple)*`);
			operator29.isTrusted = true;
			operator29.supportHtml = true;

			const patternOperator29 = RegExp(`\\bsimple\\b`);
			if (patternOperator29.test(hoverLineText593)) {
				hoverRange593 = document.getWordRangeAtPosition(position, patternOperator29);
				if (hoverRange593) {
					return new vscode.Hover(operator29, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover593);


	let pineHover594 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange594;
			const hoverLineText594 = document.lineAt(position.line).text;


			const operator30 = new vscode.MarkdownString(``);
			operator30.appendCodeblock(`switch`);
			operator30.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator30.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_switch)*`);
			operator30.isTrusted = true;
			operator30.supportHtml = true;

			const patternOperator30 = RegExp(`\\bswitch\\b`);
			if (patternOperator30.test(hoverLineText594)) {
				hoverRange594 = document.getWordRangeAtPosition(position, patternOperator30);
				if (hoverRange594) {
					return new vscode.Hover(operator30, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover594);


	let pineHover595 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange595;
			const hoverLineText595 = document.lineAt(position.line).text;


			const operator31 = new vscode.MarkdownString(``);
			operator31.appendCodeblock(`var`);
			operator31.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator31.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_var)*`);
			operator31.isTrusted = true;
			operator31.supportHtml = true;

			const patternOperator31 = RegExp(`\\bvar\\b`);
			if (patternOperator31.test(hoverLineText595)) {
				hoverRange595 = document.getWordRangeAtPosition(position, patternOperator31);
				if (hoverRange595) {
					return new vscode.Hover(operator31, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover595);


	let pineHover596 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange596;
			const hoverLineText596 = document.lineAt(position.line).text;


			const operator32 = new vscode.MarkdownString(``);
			operator32.appendCodeblock(`varip`);
			operator32.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator32.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_varip)*`);
			operator32.isTrusted = true;
			operator32.supportHtml = true;

			const patternOperator32 = RegExp(`\\bvarip\\b`);
			if (patternOperator32.test(hoverLineText596)) {
				hoverRange596 = document.getWordRangeAtPosition(position, patternOperator32);
				if (hoverRange596) {
					return new vscode.Hover(operator32, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover596);


	let pineHover597 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange597;
			const hoverLineText597 = document.lineAt(position.line).text;


			const operator33 = new vscode.MarkdownString(``);
			operator33.appendCodeblock(`while`);
			operator33.appendMarkdown(`

<span style="color:#C66BAA;background-color:#ffffff00;"><i>Operator</i></span>`);
			operator33.appendMarkdown(`
            
*[Jump to reference manual](https://www.tradingview.com/pine-script-reference/v5/#op_while)*`);
			operator33.isTrusted = true;
			operator33.supportHtml = true;

			const patternOperator33 = RegExp(`\\bwhile\\b`);
			if (patternOperator33.test(hoverLineText597)) {
				hoverRange597 = document.getWordRangeAtPosition(position, patternOperator33);
				if (hoverRange597) {
					return new vscode.Hover(operator33, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}
		}
	});
	context.subscriptions.push(pineHover597);



	let pineHover598 = vscode.languages.registerHoverProvider('pine', {
		provideHover(document, position, token) {
			let hoverRange598;
			const hoverLineText598 = document.lineAt(position.line).text;

			const operator34 = new vscode.MarkdownString(``);
			operator34.appendCodeblock(`variable`);
			operator34.isTrusted = true;
			operator34.supportHtml = true;

			const patternOperator34 = RegExp(`[a-zA-Z_][a-zA-Z0-9_]*\\s*(\\=|:\\=)`);
			if (patternOperator34.test(hoverLineText598)) {
				hoverRange598 = document.getWordRangeAtPosition(position, patternOperator34);
				if (hoverRange598) {
					return new vscode.Hover(operator34, new vscode.Range(position, position));
				}
				else {
					return null;
				}
			}


		}
	});
	context.subscriptions.push(pineHover598);




}

// this method is called when your extension is deactivated
export function deactivate() {}
