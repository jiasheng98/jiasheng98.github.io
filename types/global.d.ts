export {};

declare global {
  interface Document {
    lazyLoadInstance?: {
      update: () => void;
    };
  }
}
