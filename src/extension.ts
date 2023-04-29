// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import CommitMessageFormatter from "@bendera/commit-message-formatter";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const config = vscode.workspace.getConfiguration("git");
  const inputValidationLength = config.get("inputValidationLength") as number;
  const inputValidationSubjectLength = config.get(
    "inputValidationSubjectLength"
  ) as number;

  console.log(config);

  vscode.languages.registerDocumentFormattingEditProvider("git-commit", {
    provideDocumentFormattingEdits(
      document: vscode.TextDocument
    ): vscode.TextEdit[] {
      const firstLine = document.lineAt(0);
      const lastLine = document.lineAt(document.lineCount - 1);
      const textRange = new vscode.Range(
        firstLine.range.start,
        lastLine.range.end
      );
      const formatter = new CommitMessageFormatter({
        lineLength: inputValidationLength,
        subjectLength: inputValidationSubjectLength,
      });

      return [
        vscode.TextEdit.replace(
          textRange,
          formatter.format(document.getText())
        ),
      ];
    },
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}
