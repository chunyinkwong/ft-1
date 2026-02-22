import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import Calculator from './Calculator.svelte';

test('Calculator', async () => {
	const user = userEvent.setup();
	render(Calculator);

	const button_one = screen.getByText('1');
    const button_plus = screen.getByText('+');
    const button_two = screen.getByText('2');
    const button_equal = screen.getByText('=');
    const display = screen.getByTestId('display');

    await user.click(button_one);
    await user.click(button_plus);
    await user.click(button_two);
	await user.click(button_equal);

	expect(display).toHaveTextContent('1+2 = 3');

    const button_clear = screen.getByText('C');
    await user.click(button_clear);
    
    expect(display).toHaveTextContent('');
});
