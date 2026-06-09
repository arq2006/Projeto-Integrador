export const governanceRisks = [
  {
    id: 'risk-1',
    risk: 'Dados incorretos de estabelecimentos',
    impact: 'Tutores podem se deslocar para endereco ou horario errado.',
    preventiveAction: 'Validacao manual antes da publicacao e revisao periodica dos cadastros.',
  },
  {
    id: 'risk-2',
    risk: 'Informacoes falsas ou maliciosas',
    impact: 'Perda de confianca da comunidade e possivel dano ao tutor ou prestador.',
    preventiveAction: 'Fila administrativa para revisar sugestoes e canal para denunciar inconsistencias.',
  },
  {
    id: 'risk-3',
    risk: 'Indisponibilidade do sistema',
    impact: 'Usuarios nao conseguem consultar servicos ou acompanhar agendamentos.',
    preventiveAction: 'Hospedagem confiavel, backup dos dados e monitoramento basico de disponibilidade.',
  },
  {
    id: 'risk-4',
    risk: 'Exposicao de dados de usuarios',
    impact: 'Vazamento de contato, endereco e historico de atendimento.',
    preventiveAction: 'Coleta minima de dados, controle de acesso e boas praticas de privacidade.',
  },
]
