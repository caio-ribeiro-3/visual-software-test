describe('Fluxo de Criação de Usuário', () => {
  it('deve cadastrar um novo usuário e redirecionar para a listagem', () => {
    // Visita a tela de criação
    cy.visit('/users/create');

    // Preenche os campos
    cy.get('input[name="nome"]').type('João Teste');
    cy.get('input[name="email"]').type('joao@provedor.com');
    cy.get('input[name="telefone"]').type('11988887777');
    cy.get('input[name="cidade"]').type('Maringá');

    // Clica no botão de salvar
    cy.contains('button', 'Salvar Usuário').click();

    // Verifica se voltou para a listagem e se o toast de sucesso (se houver) apareceu
    cy.url().should('include', '/users');
    cy.contains('João Teste').should('be.visible');
  });
});
