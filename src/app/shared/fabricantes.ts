export const Fabricantes: Fabricante [] = [
{nome: 'AstraZeneca'},
{nome: 'CoronaVac'},
{nome: 'Covaxin'},
{nome: 'Janssen'},
{nome: 'Pfizer'},
{nome: 'Sputnik V'},
]

export interface Fabricante {
  nome: string,
  selecionado?: boolean
}
