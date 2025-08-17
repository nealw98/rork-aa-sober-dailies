# AI Sponsor Prompts

This directory contains the system prompts and initial messages for each AI sponsor personality in the AA Sober Dailies app.

## File Structure

- `salty-sam.ts` - Salty Sam's gruff, confrontational personality
- `steady-eddie.ts` - Steady Eddie's supportive, encouraging personality  
- `gentle-grace.ts` - Gentle Grace's spiritual, nurturing personality
- `index.ts` - Exports all prompts and provides sponsor type mapping

## Sponsor Personalities

### Salty Sam
- **Style**: Gruff, no-nonsense, confrontational
- **Approach**: Tough love with colorful language
- **Best for**: People who need direct, honest feedback
- **Key traits**: Direct, action-oriented, principle-focused

### Steady Eddie  
- **Style**: Compassionate, supportive, balanced
- **Approach**: Gentle but firm encouragement
- **Best for**: People who need steady, reliable support
- **Key traits**: Empathetic, patient, wisdom-focused

### Gentle Grace
- **Style**: Spiritual, nurturing, reflective
- **Approach**: Deep emotional support with spiritual guidance
- **Best for**: People who need gentle, spiritual wisdom
- **Key traits**: Deeply empathetic, spiritually grounded, calm

## Usage

```typescript
import { 
  SALTY_SAM_SYSTEM_PROMPT,
  STEADY_EDDIE_SYSTEM_PROMPT,
  GENTLE_GRACE_SYSTEM_PROMPT,
  SPONSOR_PROMPTS 
} from '@/prompts';

// Use system prompts for AI API calls
const apiMessages = [
  { role: 'system', content: SALTY_SAM_SYSTEM_PROMPT },
  { role: 'user', content: userMessage }
];

// Get sponsor info
const sponsorInfo = SPONSOR_PROMPTS.salty;
```

## Editing Prompts

Each prompt file contains:
1. **System Prompt**: The main personality and behavior instructions for the AI
2. **Initial Message**: The welcome message shown when starting a new chat

When editing prompts:
- Keep responses concise (2-3 sentences when possible)
- Maintain the sponsor's unique personality and speaking style
- Include appropriate crisis response guidance
- Ensure AA principles are properly referenced
- Test changes thoroughly before deploying

## Crisis Response

All prompts include guidance for:
- Mental health issues (direct to 988 or findahelpline.com)
- Medical/legal problems (direct to appropriate professionals)
- Domestic violence situations
- Other "outside help" scenarios

The prompts maintain their personality while appropriately directing users to professional help when needed.
