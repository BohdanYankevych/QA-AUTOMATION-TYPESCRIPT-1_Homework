import { test, expect } from '@playwright/test';

test('GET users endpoint returns 200', async ({ request }) => {
    const response = await request.get('https://new.fophelp.pro/api/users');
    expect(response.status()).toBe(200);
});
