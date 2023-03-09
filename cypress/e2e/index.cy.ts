/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test

describe('Sample', () => {
    beforeEach(() => {
        cy.visitPage()
    })

    it('frontpage can be opened', () => {
        cy.contains('Sample')
    })
})

// Prevent TypeScript from reading file as legacy script
export {}
