export const Vacinas: Vacina [] = [
{nome: 'BCG/ID'},
{nome: 'Dupla Adulto'},
{nome: 'Febre Amarela'},
{nome: 'Hepatite A'},
{nome: 'Hepatite B'},
{nome: 'HPV'},
{nome: 'Influenza'},
{nome: 'Meningocócica ACWY'},
{nome: 'Meningocócica C'},
{nome: 'Pentavalente'},
{nome: 'Pneumocócica 10 V'},
{nome: 'Rotavírus'},
{nome: 'Tetra Viral (SCRV)'},
{nome: 'Tríplice Viral (SCR)'},
{nome: 'Varicela'},
{nome: 'VIP'},

]

export interface Vacina {
  nome: string,
  selecionado?: boolean
}
