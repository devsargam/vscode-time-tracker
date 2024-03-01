import * as vscode from 'vscode';
import { formatTimeDifference } from './utils';

let timeSpentIcon: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
  timeSpentIcon = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    Number.MIN_SAFE_INTEGER,
  );
  updateStatusBarItem();
  timeSpentIcon.show();
}

function updateStatusBarItem(): void {
  const initTime = Date.now();

  setInterval(() => {
    const currentTime = Date.now();
    const diffTime = currentTime - initTime;
    timeSpentIcon.text = `$(timeline-open) Today: ${formatTimeDifference(
      diffTime,
    )}`;
  }, 1000);
}
