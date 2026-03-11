import { create } from "zustand";

const useFilterStore = create((set) => ({
  image: null,
  grayscale: false,
  blur: 0,
  brightness: 100,

  setImage: (img) => set({ image: img }),
  setGrayscale: (value) => set({ grayscale: value }),
  setBlur: (value) => set({ blur: value }),
  setBrightness: (value) => set({ brightness: value }),
}));

export default useFilterStore;