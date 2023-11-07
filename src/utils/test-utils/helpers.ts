import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

export async function clickOnButton(buttonName: string) {
  const button = screen.getByRole('button', { name: buttonName });

  await userEvent.click(button);
}
