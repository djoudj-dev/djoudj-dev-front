// setup-jest.ts
import 'jest-preset-angular/setup-jest';
import { TextEncoder, TextDecoder } from 'node:util';

(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;
