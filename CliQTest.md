# Design System Inspired by cliQTest | AI

## Mission
Create implementation-ready, token-driven UI guidance for cliQTest that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: cliQTest
- URL: https://cliqtest.com/
- Audience: developers and technical teams
- Product surface: documentation site

## Color Palette & Roles

### Primary
- **Canvas Background**: `#ffffff`
- **Secondary Surface**: `lab(37.7963 36.865 -56.8783 / 0.05)`

### Accent & Interactive
- **Primary Accent**: `#fafafa`

### Text & Neutrals
- **Text Tier 1**: `#171717`
- **Text Tier 2**: `lab(47.7841 -0.393182 -10.0268)`
- **Text Tier 3**: `#6843b7`
- **Text Tier 4**: `#ffffff`

## Typography Rules

### Hierarchy

| Role | Font | Size | Weight | Line Height |
|---|---|---|---|---|
| Hero Display (h1) | 'Space Grotesk' | 48px | 600 | 52.8px |
| Section Heading (h2) | 'Space Grotesk' | 36px | 600 | 43.2px |
| Section Heading (h3) | 'Space Grotesk' | 28px | 400 | 35px |
| Card Title (h4) | 'Space Grotesk' | 20px | 400 | 25px |
| Card Title (h3) | 'Space Grotesk' | 20px | 600 | 27.5px |
| Body (p) | 'Space Grotesk' | 18px | 500 | 29.25px |
| Body (p) | 'Space Grotesk' | 18px | 300 | 29.25px |
| Link (a) | 'Space Grotesk' | 16px | 400 | 24px |
| Link (a) | 'Space Grotesk' | 16px | 500 | 24px |
| Body (h2) | 'Space Grotesk' | 14px | 500 | 20px |
| Body (h4) | 'Space Grotesk' | 14px | 700 | 17.5px |
| Body (p) | 'Space Grotesk' | 14px | 400 | 22.75px |
| Link (a) | 'Space Grotesk' | 14px | 500 | 20px |
| Micro Label (p) | 'Space Grotesk' | 13px | 400 | 21.125px |
| Link (a) | 'Space Grotesk' | 13px | 400 | 19.5px |

## Component Stylings

### Buttons

**Variant 1**
- Background: `oklab(0 0 0 / 0.6)`, Text: `#ffffff`, Radius: `3.35544e+07px`

**Variant 2**
- Background: `#6843b7`, Text: `#ffffff`, Radius: `4px`

**Variant 3**
- Background: `oklab(0.999994 0.0000455678 0.0000200868 / 0.05)`, Text: `#ffffff`, Radius: `12px`

**Variant 4**
- Background: `oklab(0.999994 0.0000455678 0.0000200868 / 0.05)`, Text: `#ffffff`, Radius: `32px`

### Shape & Border Radius Scale
- **Radiuses in use**: `3.35544e+07px`, `4px`, `12px`, `32px`

> [!NOTE]
> **AI Analysis Required**: Detail how cards and containers are styled (borders, fills, padding).


## Depth & Elevation

| Level | Treatment | Suggested Use |
|---|---|---|
| Level 0 | Flat canvas | Base background |
| Level 1 | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 25px 50px -12px` | Popovers, dropdowns |
| Level 2 | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px` | Popovers, dropdowns |
| Level 3 | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(104, 67, 183, 0.3) 0px 10px 30px 0px` | Popovers, dropdowns |
| Level 4 | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px` | Popovers, dropdowns |


### Reference Tokens
- **Primary CTA**: `#fafafa`
- **Canvas**: `#ffffff`
- **Text**: `#171717`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (34), buttons (7), lists (2), navigation (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
