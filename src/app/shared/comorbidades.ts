export const Comorbidades: Comorbidade [] = [

{nome: 'Asma'},

{nome: 'Displasia broncopulmonar'},
{nome: 'Diabetes'},
{nome: 'Doenças renais crônicas'},
{nome: 'Doenças hematológicas'},
{nome: 'Doenças cardíacas'},
{nome: 'Doenças respiratórias crônicas'},
{nome: 'Doenças pulmonares'},
{nome: 'Fibrose cística'},
{nome: 'Hepatopatias'},
{nome: 'Imunossupressos'},
{nome: 'Nefropatias'},
{nome: 'Obesidade'},
{nome: 'Pacientes em diálise'},
{nome: 'Portadores de doenças cromossômicas e com estados de fragilidade imunológica (ex.: Síndrome de Down)'},
{nome: 'Transplantados de órgãos sólidos e de medula óssea'},
]

export interface Comorbidade {
  nome: string,
  selecionado?: boolean
}
