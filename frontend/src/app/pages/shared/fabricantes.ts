export const Fabricantes: Fabricante [] = [
{nome: 'AstraZeneca',valor:'ASTRAZENECA'},
{nome: 'CoronaVac',valor:'CORONAVAC'},
{nome: 'Covaxin',valor:'COVAXIN'},
{nome: 'Janssen',valor:'JANSSEN'},
{nome: 'Pfizer',valor:'PFIZER'},
{nome: 'Sputnik V',valor:'SPUTNIK'},
]

export interface Fabricante {
  nome: string,
  valor: string,
  selecionado?: boolean
}
