// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import CommitMessageFormatter, {
  CommitMessageFormatterOptions,
  SubjectFormattingMode,
} from "@bendera/commit-message-formatter";
import Logger from "./Logger";

function getConfiguration(): Omit<
  CommitMessageFormatterOptions,
  "tabSize" | "indentWithTabs"
> {
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
    protectedPatterns,
  };
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const logger = new Logger();

  logger.log("Extension has been activated.");

  vscode.languages.registerDocumentFormattingEditProvider("git-commit", {
    provideDocumentFormattingEdits(
      document: vscode.TextDocument,
      formattingOptions: vscode.FormattingOptions
    ): vscode.TextEdit[] {
      const firstLine = document.lineAt(0);
      const lastLine = document.lineAt(document.lineCount - 1);
      const textRange = new vscode.Range(
        firstLine.range.start,
        lastLine.range.end
      );

      const { insertSpaces, tabSize } = formattingOptions;
      const config: CommitMessageFormatterOptions = getConfiguration();
      config.indentWithTabs = !insertSpaces;
      config.tabSize = tabSize;
      const formatter = new CommitMessageFormatter(config);

      logger.log(
        `Formatted commit message with the following settings:\n${JSON.stringify(
          config,
          undefined,
          2
        )}`
      );

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
