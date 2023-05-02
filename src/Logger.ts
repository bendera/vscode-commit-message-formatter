import * as vscode from "vscode";

export default class Logger {
  private _channel: vscode.OutputChannel;

  constructor() {
    this._channel = vscode.window.createOutputChannel(
      "Commit Message Formatter",
      "git-commit"
    );
  }

  log(message: string) {
    const now = new Date();
    const y = now.getFullYear();
    const m = (now.getMonth() + 1).toString().padStart(2, "0");
    const d = now.getDate().toString().padStart(2, "0");
    const h = now.getHours().toString().padStart(2, "0");
    const mi = now.getMinutes().toString().padStart(2, "0");
    const s = now.getSeconds().toString().padStart(2, "0");
    const ms = now.getMilliseconds().toString().padStart(3, "0");
    const timeStamp = `[${y}-${m}-${d} ${h}:${mi}:${s}.${ms}]`;

    this._channel.appendLine(`${timeStamp} ${message}`);
  }
}
