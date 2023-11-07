import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

export function getButton(name: string) {
  return screen.getByRole('button', { name });
}

export async function clickOnButton(buttonName: string) {
  const button = getButton(buttonName);

  await userEvent.click(button);
}
