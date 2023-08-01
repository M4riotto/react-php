import create from 'zustand';

const useAuthStore = create((set) => ({
  isLoading: true,
  isLogged: false,
  token: '',
  nome: '',
  sobrenome: '',
  loaded: (value) => set({ isLoading: false }),
  login: (token, nome, sobrenome) =>
    set({ isLogged: true, token, nome, sobrenome }),
  logout: () =>
    set({
      isLogged: false,
      token: '',
      nome: '',
      sobrenome: '',
    }),
}));

export default useAuthStore;
