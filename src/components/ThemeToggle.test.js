import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import ThemeToggle from './ThemeToggle.svelte';

test('ThemeToggle', async () => {
    const user = userEvent.setup();
    render(ThemeToggle);
    
    const button = screen.getByRole('button');
    const html = document.documentElement;
    
    await user.click(button);
    expect(html.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
    
    await user.click(button);
    expect(html.getAttribute('data-theme')).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
    
    // TOOO: Test system theme preference
    await user.click(button);
    expect(html.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('system');

    await user.click(button);
    expect(html.getAttribute('data-theme')).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
})

test('ThemeToggle initializes with system preference', () => {
    localStorage.setItem('theme', 'dark');
    render(ThemeToggle);

    const html = document.documentElement;
    expect(html.getAttribute('data-theme')).toBe('dark');
})
