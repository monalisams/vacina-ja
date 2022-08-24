export const Comorbidades: Comorbidade [] = [

{nome: 'Asma', valor: 'ASMA'},

{nome: 'Displasia broncopulmonar', valor: 'DISPLASIABRONCOPULMONAR'},
{nome: 'Diabetes', valor: 'DIABETES'},
{nome: 'Doenças renais crônicas', valor: 'DOENCASRENAISCRONICAS'},
{nome: 'Doenças hematológicas', valor: 'DOENCASHEMATOLOGICAS'},
{nome: 'Doenças cardíacas', valor: 'DOENCASCARDIACAS'},
{nome: 'Doenças respiratórias crônicas', valor: 'DOENCASRESPIRATORIASCRONICAS'},
{nome: 'Doenças pulmonares', valor: 'DOENCASPULMONARES'},
{nome: 'Fibrose cística', valor: 'FIBROSECISTICA'},
{nome: 'Hepatopatias', valor: 'HEPATOPATIAS'},
{nome: 'Imunossupressos', valor: 'IMUNOSSUPRESSOS'},
{nome: 'Nefropatias', valor: 'NEFROPATIAS'},
{nome: 'Obesidade', valor: 'OBESIDADE'},
{nome: 'Pacientes em diálise', valor: 'PACIENTESEMDIALISE'},
{nome: 'Portadores de doenças cromossômicas e com estados de fragilidade imunológica (ex.: Síndrome de Down)', valor: 'PORTADORESDEDOENCASCROMOSSOMICAS'},
{nome: 'Transplantados de órgãos sólidos e de medula óssea', valor: 'TRANSPLANTADOSDEORGAOSSOLIDOSEDEMEDULAOSSEA'},
]

export interface Comorbidade {
  nome: string,
  valor: string,
  selecionado?: boolean
}
