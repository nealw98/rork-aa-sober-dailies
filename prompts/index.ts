// Export all AI sponsor prompts and initial messages
export { SALTY_SAM_SYSTEM_PROMPT, SALTY_SAM_INITIAL_MESSAGE } from './salty-sam';
export { STEADY_EDDIE_SYSTEM_PROMPT, STEADY_EDDIE_INITIAL_MESSAGE } from './steady-eddie';
export { GENTLE_GRACE_SYSTEM_PROMPT, GENTLE_GRACE_INITIAL_MESSAGE } from './gentle-grace';

// Sponsor type mapping for easy reference
export const SPONSOR_PROMPTS = {
  salty: {
    systemPrompt: 'SALTY_SAM_SYSTEM_PROMPT',
    initialMessage: 'SALTY_SAM_INITIAL_MESSAGE',
    displayName: 'Salty Sam',
    description: 'Gruff, no-nonsense sponsor with tough love approach'
  },
  supportive: {
    systemPrompt: 'STEADY_EDDIE_SYSTEM_PROMPT', 
    initialMessage: 'STEADY_EDDIE_INITIAL_MESSAGE',
    displayName: 'Steady Eddie',
    description: 'Compassionate, supportive sponsor with gentle guidance'
  },
  grace: {
    systemPrompt: 'GENTLE_GRACE_SYSTEM_PROMPT',
    initialMessage: 'GENTLE_GRACE_INITIAL_MESSAGE', 
    displayName: 'Gentle Grace',
    description: 'Spiritual, nurturing sponsor with deep emotional support'
  }
} as const;
