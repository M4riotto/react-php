import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLoading: true,
  isLogged: false,
  token: '',
  id: '', // Adicionando o campo "id" ao estado
  nome: '',
  sobrenome: '',
  loaded: (value) => set({ isLoading: false }),
  login: (token, id, nome, sobrenome) => // Incluindo "id" como argumento da função login
    set({ isLogged: true, token, id, nome, sobrenome }),
  logout: () =>
    set({
      isLogged: false,
      token: '',
      id: '', // Limpando também o campo "id" no logout
      nome: '',
      sobrenome: '',
    }),
}));

export default useAuthStore;
