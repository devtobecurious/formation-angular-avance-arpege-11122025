export interface Selfie {
  id: string;
  title: string;
  imageUrl: string;
}

/**
 * Creates an empty Selfie object.
 * @returns An empty Selfie.
 */
export const createEmptySelfie = (): Selfie => ({
  id: '',
  title: 'test 01',
  imageUrl: '',
});

export type Selfies = Selfie[];
