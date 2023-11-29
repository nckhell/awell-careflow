const steps = require('../steps/steps.json');

describe('Steps', () => {
  it('Step should have "Message" as a title', () => {
    const messageStep = steps.find(d => d.step.definition_id === 'USlw4pE-bXT5').step
    console.log(messageStep)

    expect(messageStep.title).toBe('Message');
  });
});