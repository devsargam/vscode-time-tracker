import * as vscode from 'vscode';
import { formatTimeDifference, getToday } from './utils';

let timeSpentIcon: vscode.StatusBarItem;

const todayDate = getToday();

export function activate({ globalState }: vscode.ExtensionContext) {
  const timeTillNow: number = globalState.get(todayDate) ?? 0;

  timeSpentIcon = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    Number.MIN_SAFE_INTEGER,
  );

  updateStatusBarItem({ timeTillNow, globalState });
  timeSpentIcon.show();
}

type updateStatusBarArgs = {
  timeTillNow: number;
  globalState: vscode.Memento;
};

function updateStatusBarItem({
  timeTillNow,
  globalState,
}: updateStatusBarArgs): void {
  const initTime = Date.now() - timeTillNow;

  setInterval(() => {
    const currentTime = Date.now();
    const diffTime = currentTime - initTime;

    globalState.update(todayDate, diffTime);

    timeSpentIcon.text = `$(timeline-open) Today: ${formatTimeDifference(
      diffTime,
    )}`;
  }, 1000);
}
