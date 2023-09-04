import { randomBytes } from 'crypto'

export function generateRandomId() {
    const randomId: string = randomBytes(10).toString('hex');
    return randomId;
}

