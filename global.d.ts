declare global {
  interface Window {
    versions: {
      chrome(): string;
      node(): string;
      electron(): string;
    };
  }
}

export {};
