/// <reference types="vite/client" />

interface Worker {
  postMessage(message: unknown, transfer?: Transferable[]): void;
}
