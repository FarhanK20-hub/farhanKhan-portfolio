# FRK Productions — Website User Flow

This document outlines the interactive journey a user takes when navigating through the Farhan Khan portfolio website.

## 1. The Gate (Entry Point)
**Location:** `/` (Root Page)
**Component:** `MainGate.tsx`

- **Initial State:** The user is greeted by a minimalist black screen. A blinking cursor types out the prompt: *"Who are you looking for?"*
- **Interaction:** The screen splits into two distinct, interactive halves:
  - **Left Half (The Architect):** Software Engineer persona. Features a subtle green matrix/grid glow. 
  - **Right Half (The Storyteller):** Cinematographer/Editor persona. Features a warm amber cinematic glow and film grain.
- **Action:** Clicking "THE STORYTELLER" initiates the Storyteller sequence.

---

## 2. The Cinematic Intro
**Component:** `StoryIntro.tsx`

- **Transition:** Upon selecting "The Storyteller", the screen cuts to black.
- **Sequence:** 
  1. A blinking cursor types: *"Some people make content."*
  2. Types: *"Some tell stories."*
  3. Types: *"Some make people feel something."*
  4. Pause.
  5. Fades in: *"Welcome."*
- **Action:** The intro automatically fades out after the sequence finishes (or can be skipped), smoothly revealing the Storyteller Page.

---

## 3. The Storyteller Portfolio
**Component:** `StorytellerPage.tsx`
This is a continuous, scrollable single-page experience comprised of four main acts.

### Act I: The Hero (`StoryHero.tsx`)
- **Visuals:** Parallax scrolling text with your name, roles, and rotating cinematic quotes.
- **Background:** **Floating Memories**. A 3D environment filled with drifting artifacts (polaroids, film frames, ticket stubs).
- **Interaction:** **Camera Lens Focus.** By default, memories are heavily blurred. Moving the mouse shifts the 3D space. Hovering over a memory changes the cursor to a camera reticle `[ + ]`, pulling that specific artifact into sharp focus and revealing a narrative fragment. Clicking locks the focus and displays a `[ FOCUS LOCKED ]` HUD.

### Act II: The Philosophy (`StoryAbout.tsx`)
- **Visuals:** A clean, typography-driven section.
- **Content:** Outlines your creative philosophy ("spaces between moments," "what you make the audience feel").

### Act III: Selected Work (`StoryWork.tsx`)
- **Navigation:** A tabbed interface allowing users to filter by category: `Reels`, `Edits`, `Cinematography`, and `Photography`.
- **Layout:** **Stacked Photographs.** Instead of boring grid cards, projects are presented as physical photograph prints scattered on a table. 
- **Interaction:** Each project print is slightly rotated. Hovering over a print lifts it off the canvas with a 3D shadow effect and smooth transition, making the projects feel like tactile, collectible items.

### Act IV: The Outro (`StoryContact.tsx`)
- **Visuals:** A dramatic footer section.
- **Content:** The final call to action to collaborate, featuring links to social media (Instagram, Twitter/X, LinkedIn) and email.

---

## 4. Global Interactions
- **Custom Cursor:** A cinematic dot cursor follows the mouse globally, shrinking/expanding when interacting with clickable elements.
- **Grain Overlay:** A subtle, animated film grain overlay persists across the entire Storyteller experience, unifying the pages with a cinematic texture.
