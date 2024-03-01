import * as vscode from 'vscode';
import { formatTimeDifference } from './utils';

let myStatusBarItem: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
  myStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    Number.MIN_SAFE_INTEGER,
  );
  updateStatusBarItem();
  myStatusBarItem.show();
}

function updateStatusBarItem(): void {
  const initTime = Date.now();

  setInterval(() => {
    const currentTime = Date.now();
    const diffTime = currentTime - initTime;
    myStatusBarItem.text = `$(timeline-open) Today: ${formatTimeDifference(
      diffTime,
    )}`;
  }, 1000);
}
