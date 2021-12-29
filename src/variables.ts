import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

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
	context.subscriptions.push(pineHover00);

}

// this method is called when your extension is deactivated
export function deactivate() {}
function activeTextEditor(activeTextEditor: any) {
	throw new Error('Function not implemented.');
}

