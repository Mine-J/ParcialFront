export type telefonoApi = {
  is_valid: boolean;
  telefono: string;
  pais: string;
};
export type paisApi = {
  pais: string;
  capital: string;
};

export type ciudadApi = {
  pais: string;
  ciudad: string;
  temperatura: number;
};
