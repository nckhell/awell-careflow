const steps = require('../actions/actions.json');

describe('Steps', () => {
  it('Message action should have a "Message" as a title', () => {
    const messageAction = steps.find(d => d.action.definition_id === 'Curq2wSogAU5').action

    expect(messageAction.title).toBe('Message');
  });
});