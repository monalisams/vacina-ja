export const Vacinas: Vacina [] = [
{nome: 'BCG/ID', valor: 'BCG'},
{nome: 'Dupla Adulto',valor: 'DUPLAADULTO'},
{nome: 'Febre Amarela',valor:'FEBREAMARELA'},
{nome: 'Hepatite A',valor:'HEPATITEA'},
{nome: 'Hepatite B',valor:'HEPATITEB'},
{nome: 'HPV',valor:'HPV'},
{nome: 'Influenza',valor:'INFLUENZA'},
{nome: 'Meningocócica ACWY',valor:'MENINGOCÓCICAACWY'},
{nome: 'Meningocócica C',valor:'MENINGOCÓCICAC'},
{nome: 'Pentavalente',valor:'PENTAVALENTE'},
{nome: 'Pneumocócica 10 V',valor:'PNEUMOCÓCICAV'},
{nome: 'Rotavírus',valor:'ROTAVÍRUS'},
{nome: 'Tetra Viral (SCRV)',valor:'TETRAVIRAL'},
{nome: 'Tríplice Viral (SCR)',valor:''},
{nome: 'Varicela',valor:'VARICELA'},
{nome: 'VIP',valor:'VIP'},

]

export interface Vacina {
  nome: string,
  valor: string,
  selecionado?: boolean
}
