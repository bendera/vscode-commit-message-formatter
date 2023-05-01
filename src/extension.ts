// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import CommitMessageFormatter, {
  CommitMessageFormatterOptions,
  SubjectFormattingMode,
} from "@bendera/commit-message-formatter";

function getConfiguration(): CommitMessageFormatterOptions {
  const globalEditorSettings = vscode.workspace.getConfiguration("editor");
  const globalTabsize = globalEditorSettings.get("tabSize") as number;
  const globalInsertSpaces = globalEditorSettings.get(
    "insertSpaces"
  ) as boolean;

  const extensionSettings = vscode.workspace.getConfiguration(
    "commit-message-formatter"
  );
  const subjectMode = extensionSettings.get(
    "subjectMode"
  ) as SubjectFormattingMode;
  const collapseMultipleEmptyLines = extensionSettings.get(
    "collapseMultipleEmptyLines"
  ) as boolean;
  const protectedPatterns = extensionSettings.get(
    "protectedPatterns"
  ) as string[];

  const gitCommitLanguageSettings =
    vscode.workspace.getConfiguration("[git-commit]");
  const tabSize =
    (gitCommitLanguageSettings.get("editor.tabSize") as number) ??
    (globalTabsize as number);
  const insertSpaces =
    gitCommitLanguageSettings.get("editor.insertSpaces") ?? globalInsertSpaces;

  const gitConfig = vscode.workspace.getConfiguration("git");
  const inputValidationLength = gitConfig.get(
    "inputValidationLength"
  ) as number;
  const inputValidationSubjectLength = gitConfig.get(
    "inputValidationSubjectLength"
  ) as number;

  return {
    lineLength: inputValidationLength,
    subjectLength: inputValidationSubjectLength,
    subjectMode,
    collapseMultipleEmptyLines,
    tabSize,
    indentWithTabs: !insertSpaces,
    protectedPatterns,
  };
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
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

      const config = getConfiguration();
      const formatter = new CommitMessageFormatter(config);

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
