# Tarot Reader - Changelog & Development Log

**Project:** AI Tarot Reading Web App
**Main File:** `ai.html`
**Last Updated:** January 25, 2026

---

## Current Code Structure

### Main Application (`ai.html`)
Single-file HTML/CSS/JavaScript application with:

**Core Systems:**
- **Tarot Deck System** - 78-card Rider-Waite-Smith deck with image loading from steve-p.org
- **Spread Layouts** - Preset spreads (Single, 3-Card, Celtic Cross, Tree of Life, 5-Card Elements) + custom spread creation via text boxes
- **Card Placement** - Drag-and-drop with percentage-based positioning for responsive layout
- **Reading Surface** - Canvas for card placement with text annotation support
- **LocalStorage Persistence** - Saves current reading, reading history (last 50), and chat history with each saved reading

**AI Integration:**
- **Groq API** - Uses Llama-3.3-70b-versatile model
- **Chat Interface** - Sidebar panel with conversation history (last 6 exchanges retained in context)
- **Progressive Text Reveal** - Markdown parsing with italic support, paragraph chunking, typing delays
- **Context Gathering** - Reads cards, spread info, and text box notes to provide context to AI

**Key Functions:**
- `gatherReadingContext()` - Collects cards, notes, spread info for AI
- `formatContextForAI()` - Formats context into readable prompt
- `addAIMessage()` - Handles markdown parsing, message chunking, typing animation
- `generateReadSpreadTemplate()` - Creates auto-populated message template matching cards to nearby text boxes
- `saveCurrentReading()` / `loadCurrentReading()` - Handles persistence with chat history
- `restoreAIChatDisplay()` - Rebuilds chat UI from saved history

---

## Features Implemented (This Session)

### 1. AI Voice Refinement ✅
**Goal:** Create conversational, empathetic, Claude-like reading experience

**Changes:**
- Removed verbose "expert tarot reader" framing
- Added anti-AI-speak rules: no filler phrases, no binary setups, no em-dash reveals
- Banned overused words initially (later removed as too restrictive)
- Added "like" usage limit (max once per response)
- Emphasis on conversational warmth, curiosity, vulnerability-awareness

**Evolution:**
1. Initial: "Expert tarot reader and spiritual guide" (too formal)
2. Iteration 1: "Texting a friend" (too casual, became brash)
3. Final: "Thoughtful friend who wonders with you, not at you" (balanced)

### 2. Conversation Memory ✅
**Problem:** AI re-read all cards from scratch on every follow-up question

**Solution:**
- Send last 6 conversation exchanges in API context
- Added explicit instruction: "This is an ongoing conversation. Build on what you already said."
- System prompt now distinguishes between first reading vs follow-ups

### 3. Synthesis Over Repetition ✅
**Problem:** 5-7 card spreads resulted in 5-7 long messages on follow-ups

**Solution:**
- **HARD LIMIT:** Max 1-2 cards by name in follow-up responses
- First reading: 2-3 sentences per card, read whole spread
- Follow-ups: Synthesize patterns, offer one generative question, or focus on 1-2 relevant cards
- Invitation pattern: "(or point me to whichever card feels loudest right now)"
- Emphasis on generative questions over clarifying questions

### 4. Markdown Italics Rendering ✅
**Problem:** Card names showing as `*The Moon*` instead of italicized

**Solution:**
- Created `parseMarkdown()` function: `*text*` → `<em>text</em>`
- Applied to all AI message content before display

### 5. Message Chunking with Typing Animation ✅
**Goal:** Mimic texting experience, reduce overwhelming wall of text

**Implementation:**
- Split AI responses by paragraph breaks (`\n\n`)
- Display paragraphs sequentially as separate message bubbles
- Show "..." typing indicator between chunks (4+ paragraph responses only)
- Random delay: 800-1200ms between chunks (max 2 seconds)

### 6. Chat Input Auto-Resize ✅
**Behavior:**
- Empty: 60px (min-height)
- Typing: Expands to 400px max with scroll
- After sending: Resets to 60px
- CSS: `max-height: 400px` + `overflow-y: auto`

### 7. "Read This Spread" Quick-Start Button ✅
**Features:**
- Auto-generates message template from spread
- Matches cards to nearby text boxes using spatial distance (300px threshold)
- Preserves full text box content with line breaks
- Formats as:
  ```
  help read this spread:
  1. [Position text]
  [Card name]

  2. [Next position]
  [Card name]
  ```
- Populates input box but doesn't auto-send (user reviews/edits first)
- Button styling: Eye icon + "Read This Spread (Beta)" text

### 8. Chat History Persistence ✅
**Integration with Reading Sessions:**
- `chatHistory` array saved with each reading in localStorage
- Readings in history panel show 💬 icon if they have chat conversations
- Loading a reading restores both cards and chat conversation
- Reset button clears chat but keeps reading intact

### 9. System Prompt - Final Version ✅
**Philosophy:** "Conversation, not performance"

**Key Directives:**
- Voice: Conversational, warm, curious. Avoid sounding wise. If quotable, rewrite it.
- Structure: Short paragraphs (2-4 sentences). Let thoughts breathe.
- First reading: Give full attention, 2-3 sentences per card
- Follow-ups: Stop listing cards. Synthesize. Max 1-2 cards by name.
- Questions: Generative over clarifying. Help people think differently, see new angles.
- Technical: Italicize card names. Match user's message length energy gradually.
- Tone: Holding space for vulnerability. Wondering with them, not telling them what to do.

**Removed Elements:**
- Avoid word list (infrastructure, signal, delve, weave, contain) - too restrictive
- Direct questioning ("What is this reading for?") - felt too brash
- Replaced with: "There's something here about [observation]. What's this reading for?" - softer invitation

---

## Changes Removed or Incomplete

### Avoided Word List ❌
**Why Removed:** Too restrictive, broke natural flow
**Original Intent:** Reduce AI-speak texture
**Outcome:** Other rules (no filler, no quotables) handled this better

### Complex Spatial Matching in formatContextForAI ❌
**Why Removed:** Created duplicate card readings, unreliable matching
**Original Attempt:** Auto-match cards to text boxes in background context
**Issue:** Sometimes matched same card to multiple positions
**Solution:** Moved matching logic to "Read This Spread" button only (user-triggered, visible, editable)

### Direct Clarifying Questions ❌
**Why Changed:** Felt interrogative, made users feel "naked"
**Original:** "What is this reading about?" (too direct)
**Evolved To:** "There's something here about [pattern]. What's this reading for?" (invitation)
**Final Form:** Gentle space-creation, not demands for information

### 5+ Card Threshold for Context Questions ❌
**Why Changed:** Waited too long to ask
**Original:** Only ask for context on 5+ card spreads
**Updated To:** 3+ cards
**Reasoning:** Even 3-card spreads benefit from knowing context for cohesive reading

---

## Known Issues

### 1. Progressive Text Reveal Removed
**Status:** Intentionally simplified
**Original:** Word-by-word for first 3-4 lines, then line-by-line, then dump
**Current:** Paragraph chunking with typing delays
**Why:** Simpler, more predictable, better mimics texting experience

### 2. Text Box Spatial Matching Accuracy
**Issue:** 300px threshold may not work perfectly for all layouts
**Impact:** "Read This Spread" button might mismatch cards to positions
**Mitigation:** User can edit the generated template before sending
**Future:** Could add visual indicators showing which card matched which text box

### 3. Chat Context Window Limited
**Current:** Last 6 exchanges only
**Impact:** Very long conversations lose early context
**Reasoning:** Balance between context and token cost
**Future:** Could implement smarter context pruning or summary

### 4. Markdown Support Limited
**Current:** Only supports `*italic*` syntax
**Unsupported:** Bold, links, lists, code blocks
**Reasoning:** Italics for card names was primary need
**Future:** Could expand parseMarkdown() for more syntax

### 5. Mobile Typing Delays
**Potential Issue:** 800-1200ms delays might feel slow on mobile
**Status:** Not tested thoroughly on mobile yet
**Mitigation:** Only appears on 4+ paragraph responses
**Future:** Could add device detection for shorter mobile delays

---

## Technical Details

### Message Length Matching Algorithm
**Implementation:** Gradient-based, not mirroring
- Long user message → AI can expand (but doesn't have to)
- Short user message → AI stays brief but warm
- Avoids 1:1 mirroring (would feel manipulative)
- Instruction: "Match their message length energy gradually"

### Card-to-Text Box Spatial Matching
**Method:** Euclidean distance calculation
```javascript
distance = sqrt((cardCenterX - tbCenterX)² + (cardCenterY - tbCenterY)²)
```
- Uses getBoundingClientRect() for accurate screen positions
- 300px threshold for "reasonably close"
- Falls back to position number or "Position N" if no match

### Markdown Parsing
**Function:** `parseMarkdown(text)`
```javascript
text.replace(/\*([^*]+)\*/g, '<em>$1</em>')
```
- Simple regex for `*word*` → `<em>word</em>`
- Applied before escapeHtml() to preserve HTML tags
- Non-greedy matching prevents multi-paragraph italics

### Typing Animation Logic
```javascript
// Only show typing indicator if:
1. chunkIndex > 0 (not first chunk)
2. paragraphs.length > 3 (4+ total paragraphs)

// Delay calculation:
delay = Math.min(800 + Math.random() * 400, 2000)
// Results in: 800-1200ms randomized, capped at 2s max
```

### LocalStorage Structure
**Current Reading:**
```javascript
{
  id: 'reading_timestamp_randomstring',
  timestamp: Date.now(),
  spreadId: 'celtic-cross' | null,
  cards: [{cardId, percentX, percentY, isFlipped, isReversed}],
  textBoxes: [{id, percentX, percentY, percentW, percentH, content, fontSize, showBorder}],
  deckOrder: [cardId, ...],
  chatHistory: [{user: string, assistant: string, context: object}]
}
```

**Reading History:**
- Array of readings (max 50)
- Same structure as current reading
- Sorted by timestamp (newest first)

**Settings:**
```javascript
groqApiKey: 'gsk_...' // Stored separately
```

---

## System Prompt Evolution

### Version 1: Initial (Pre-Session)
```
You are an expert tarot reader and spiritual guide.
You provide insightful, thoughtful, and compassionate interpretations...
```
**Problems:** Too formal, verbose, "AI textbook" voice

### Version 2: Anti-AI-Speak
```
Read cards like you're texting a friend who asks what you think, not what they should do.
Skip the fluff—read the cards like you're texting a friend who asked for real talk.
```
**Improvements:** More casual, added banned phrases/patterns
**Problems:** Too brash, didn't feel safe for vulnerable topics

### Version 3: Introspective Softness
```
Read cards like you're texting a friend who asks what you think, not what they should do.
Notice what stands out. Sit with it a second.
```
**Improvements:** Added pause, contemplation, gentler pacing
**Problems:** Still felt a bit directive on follow-ups

### Version 4: Claude-like Warmth
```
Read cards like you're a thoughtful friend exploring what you see together with the reader.
Make it an invitation, not a demand.
```
**Improvements:** Collaborative framing, explicit gentleness
**Problems:** Still re-reading all cards on follow-ups

### Version 5: Synthesis Focus (Current)
```
You're reading tarot like a thoughtful friend—someone who notices things
and wonders aloud with the person, not at them. You're curious, not prescriptive.

First reading: Give the spread its full attention. 2-3 sentences per card.
Follow-ups: Stop listing cards. HARD LIMIT: 1-2 cards by name, max.
Questions: Your best questions aren't clarifying, they're generative.
```
**Key Achievement:** Clear mental models (first reading vs conversation mode)
**Philosophy:** "This is a conversation, not a performance"

---

## Additional Implementation Details

### API Configuration Choices

**Temperature: 0.7**
- Sweet spot between creativity and consistency
- Lower (0.1-0.4): Too robotic, repetitive phrasing
- Higher (0.8-1.0): Too creative, less reliable for follow-ups
- 0.7 allows natural variation while maintaining coherent conversation

**Max Tokens: 1024**
- Enough for thoughtful multi-card reading (typically 200-600 tokens)
- Prevents overly long responses that overwhelm
- Works with paragraph chunking to create natural breaks
- Could increase to 2048 if users want deeper explorations

**Model: llama-3.3-70b-versatile**
- Groq's fastest large model (sub-second responses)
- Good balance of speed and quality for conversational AI
- Free tier generous enough for regular use
- Alternatives considered: llama-3.1-8b (faster but less nuanced)

### Reading History Limit: 50 Readings

**Why 50?**
- Balances localStorage size (~5-10MB for 50 readings with chat)
- Keeps history panel scrollable without performance issues
- Represents ~2-3 months of regular use
- Old readings remain in git history if needed

**Storage per reading:** ~100-200KB
- Cards: ~10-50KB (depending on spread size)
- Chat history: ~50-150KB (most of the space)
- Text boxes: ~5-10KB
- Total for 50: ~5-10MB (acceptable for localStorage)

### "Read This Spread" Button Evolution

**Initial Placement:** Right side, after settings
**Problem:** Too hidden, users didn't notice it

**Iteration 1:** Large button with `flex: 1`
**Problem:** Dominated the interface, looked unbalanced

**Final Placement:** Settings (left) → Read This Spread (middle) → Send (right)
**Styling:**
```css
display: flex;
align-items: center;
gap: 0.25rem;
/* No flex: 1 - natural button width */
```
**Icon:** Eye icon (👁️ / visibility symbol) - "read this spread"
**Text:** "Read This Spread (Beta)" - proper capitalization, indicates experimental feature

### Progressive Text Reveal Simplification

**Original Implementation (Removed):**
```javascript
// First 3-4 lines: word-by-word (60ms per word)
// Lines 4-8: line-by-line (200ms per line)
// Rest: dump all at once
```

**Why Removed:**
- Overly complex state management (lineIndex, wordIndex)
- Unpredictable timing (varied wildly by response length)
- Didn't match texting experience (too mechanical)
- Made debugging harder

**Current Implementation:**
```javascript
// Split by paragraphs (\n\n)
// Show each paragraph as separate message bubble
// Typing "..." between chunks (800-1200ms) for 4+ paragraphs
```

**Why Better:**
- Simpler code (~30 lines vs ~80 lines)
- Predictable behavior (one delay per paragraph)
- Actually mimics texting (not typewriter effect)
- Easy to adjust timing in one place

### Chat Indicator Icon Details

**Location:** Reading history panel, next to card count
**Format:** SVG chat bubble icon (💬 equivalent)
**Styling:**
```css
width: 14px;
height: 14px;
opacity: 0.6;  /* Subtle, not distracting */
```

**Conditional Display:**
```javascript
reading.chatHistory && reading.chatHistory.length > 0
```
- Only shows if chat conversation exists for that reading
- Helps users quickly identify readings with discussion
- Clicking reading loads both cards AND chat

### Spatial Matching Algorithm Details

**Why getBoundingClientRect()?**
- Returns screen coordinates (viewport-relative)
- Accounts for scroll position automatically
- Works with responsive/scaled layouts
- More accurate than `offsetLeft`/`offsetTop` (which are parent-relative)

**Distance Calculation:**
```javascript
const distance = Math.sqrt(
  Math.pow(cardCenterX - tbCenterX, 2) +
  Math.pow(cardCenterY - tbCenterY, 2)
);
```
- Standard Euclidean distance formula
- Uses center points of elements (more accurate than edges)
- 300px threshold chosen empirically (roughly 3-4 card widths)

**Fallback Behavior:**
- If no text box within 300px: uses spread position name
- If no spread: uses "Position 1", "Position 2", etc.
- Always produces valid output even with weird layouts

### Chat Input Height Behavior

**Three States:**
1. **Empty:** 60px (CSS min-height)
2. **Typing:** Auto-expands to content, max 400px
3. **After Send:** Resets to 60px

**Implementation:**
```javascript
// On input:
if (value.trim() === '') {
  height = '60px';
} else {
  height = Math.min(scrollHeight, 400) + 'px';
}

// After send:
aiChatInput.value = '';
aiChatInput.style.height = '60px';
```

**CSS Support:**
```css
max-height: 400px;
overflow-y: auto;  /* Scroll if exceeds max */
```

**Why 400px max?**
- About 10-12 lines of text
- Enough for "Read This Spread" template (6-7 cards)
- Doesn't cover entire chat area
- User can scroll within input if needed

---

## Future Considerations

### Potential Enhancements
- **Voice Customization:** Let users choose reading style (mystical, psychological, concise)
- **Card Interpretation Library:** Local database of meanings, not just AI-generated
- **Visual Card Matching:** Show lines connecting cards to their text boxes in "Read This Spread"
- **Export Readings:** PDF or image export with chat conversation included
- **Shareable Readings:** Generate shareable links (would require backend)
- **Custom Decks:** Support for different tarot deck images/systems
- **Journal Mode:** Dedicated space for reflection notes separate from chat

### Code Quality
- **Extract Components:** Break ai.html into logical modules if it grows further
- **Error Handling:** More graceful API failure handling
- **Accessibility:** ARIA labels, keyboard navigation improvements
- **Testing:** Consider unit tests for core functions
- **Performance:** Lazy load card images, optimize for large reading histories

### AI Integration
- **Model Options:** Allow switching between Groq models (speed vs quality)
- **Prompt Templates:** Preset prompt styles users can choose from
- **Context Management:** Smarter pruning of old messages vs full retention
- **Streaming Responses:** Show AI response word-by-word as it generates
- **Multi-turn Planning:** Let AI ask multiple clarifying questions before reading

---

## Notes for Future Developers

### Working with the System Prompt
- Location: Line ~6518 in ai.html
- Changes take effect immediately (no rebuild needed)
- Test with various spread sizes (1, 3, 6+ cards)
- Pay attention to follow-up behavior—easy to slip back into re-reading everything

### Modifying Message Display
- `addAIMessage()` handles all formatting (line ~6593)
- Markdown parsing happens before escaping HTML
- Typing delays controlled by chunk count and random jitter
- Each paragraph becomes its own message bubble

### Spatial Matching Algorithm
- Located in `generateReadSpreadTemplate()` (line ~6744)
- Uses screen coordinates (getBoundingClientRect)
- Threshold is 300px—adjust if needed for different layouts
- Falls back gracefully if no text box nearby

### Chat History Management
- Stored in `chatHistory` array (global variable)
- Format: `{user: string, assistant: string, context: object}`
- Saved with readings automatically in `saveCurrentReading()`
- Restored via `restoreAIChatDisplay()` when loading a reading

### Git Workflow
- `.gitignore` whitelist: only `index.html` and `ai.html` tracked
- Commit messages use Co-Authored-By format
- All changes pushed to main branch (no feature branches currently)

---

**End of Changelog**
*This document tracks all significant changes, architectural decisions, and learnings from the development process.*
