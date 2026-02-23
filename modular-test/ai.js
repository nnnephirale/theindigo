// ============================================
// IMAGE CONFIGURATION
// ============================================
const USE_IMAGES = true;

function getCardImageUrl(card) {
    // Resolve path relative to HTML document (root ai.html vs modular-test/ai-dev.html)
    const prefix = window.location.pathname.includes('/modular-test/') ? '../' : '';
    const baseUrl = prefix + 'cardimages/riderwaite/sm_RWSa-';
    
    if (card.arcana === 'Major') {
        // Major Arcana: T-00 to T-21
        return `${baseUrl}T-${card.number.toString().padStart(2, '0')}.webp`;
    }
    
    // Minor Arcana suit codes
    const suitCode = { Wands: 'W', Cups: 'C', Swords: 'S', Pentacles: 'P' }[card.suit];
    
    // Number/court mapping
    let numCode;
    if (card.number === 1) {
        numCode = '0A'; // Ace
    } else if (card.number <= 10) {
        numCode = card.number.toString().padStart(2, '0');
    } else if (card.number === 11) {
        numCode = 'J1'; // Page
    } else if (card.number === 12) {
        numCode = 'J2'; // Knight
    } else if (card.number === 13) {
        numCode = 'QU'; // Queen
    } else if (card.number === 14) {
        numCode = 'KI'; // King
    }
    
    return `${baseUrl}${suitCode}-${numCode}.webp`;
}

// Full 78-card Rider-Waite deck
const TAROT_DECK = [
    // Major Arcana (22)
    { id: 'major-00', name: 'The Fool', arcana: 'Major', number: 0 },
    { id: 'major-01', name: 'The Magician', arcana: 'Major', number: 1 },
    { id: 'major-02', name: 'The High Priestess', arcana: 'Major', number: 2 },
    { id: 'major-03', name: 'The Empress', arcana: 'Major', number: 3 },
    { id: 'major-04', name: 'The Emperor', arcana: 'Major', number: 4 },
    { id: 'major-05', name: 'The Hierophant', arcana: 'Major', number: 5 },
    { id: 'major-06', name: 'The Lovers', arcana: 'Major', number: 6 },
    { id: 'major-07', name: 'The Chariot', arcana: 'Major', number: 7 },
    { id: 'major-08', name: 'Strength', arcana: 'Major', number: 8 },
    { id: 'major-09', name: 'The Hermit', arcana: 'Major', number: 9 },
    { id: 'major-10', name: 'Wheel of Fortune', arcana: 'Major', number: 10 },
    { id: 'major-11', name: 'Justice', arcana: 'Major', number: 11 },
    { id: 'major-12', name: 'The Hanged Man', arcana: 'Major', number: 12 },
    { id: 'major-13', name: 'Death', arcana: 'Major', number: 13 },
    { id: 'major-14', name: 'Temperance', arcana: 'Major', number: 14 },
    { id: 'major-15', name: 'The Devil', arcana: 'Major', number: 15 },
    { id: 'major-16', name: 'The Tower', arcana: 'Major', number: 16 },
    { id: 'major-17', name: 'The Star', arcana: 'Major', number: 17 },
    { id: 'major-18', name: 'The Moon', arcana: 'Major', number: 18 },
    { id: 'major-19', name: 'The Sun', arcana: 'Major', number: 19 },
    { id: 'major-20', name: 'Judgement', arcana: 'Major', number: 20 },
    { id: 'major-21', name: 'The World', arcana: 'Major', number: 21 },
    // Wands (14)
    { id: 'wands-01', name: 'Ace of Wands', arcana: 'Minor', suit: 'Wands', number: 1 },
    { id: 'wands-02', name: 'Two of Wands', arcana: 'Minor', suit: 'Wands', number: 2 },
    { id: 'wands-03', name: 'Three of Wands', arcana: 'Minor', suit: 'Wands', number: 3 },
    { id: 'wands-04', name: 'Four of Wands', arcana: 'Minor', suit: 'Wands', number: 4 },
    { id: 'wands-05', name: 'Five of Wands', arcana: 'Minor', suit: 'Wands', number: 5 },
    { id: 'wands-06', name: 'Six of Wands', arcana: 'Minor', suit: 'Wands', number: 6 },
    { id: 'wands-07', name: 'Seven of Wands', arcana: 'Minor', suit: 'Wands', number: 7 },
    { id: 'wands-08', name: 'Eight of Wands', arcana: 'Minor', suit: 'Wands', number: 8 },
    { id: 'wands-09', name: 'Nine of Wands', arcana: 'Minor', suit: 'Wands', number: 9 },
    { id: 'wands-10', name: 'Ten of Wands', arcana: 'Minor', suit: 'Wands', number: 10 },
    { id: 'wands-11', name: 'Page of Wands', arcana: 'Minor', suit: 'Wands', number: 11 },
    { id: 'wands-12', name: 'Knight of Wands', arcana: 'Minor', suit: 'Wands', number: 12 },
    { id: 'wands-13', name: 'Queen of Wands', arcana: 'Minor', suit: 'Wands', number: 13 },
    { id: 'wands-14', name: 'King of Wands', arcana: 'Minor', suit: 'Wands', number: 14 },
    // Cups (14)
    { id: 'cups-01', name: 'Ace of Cups', arcana: 'Minor', suit: 'Cups', number: 1 },
    { id: 'cups-02', name: 'Two of Cups', arcana: 'Minor', suit: 'Cups', number: 2 },
    { id: 'cups-03', name: 'Three of Cups', arcana: 'Minor', suit: 'Cups', number: 3 },
    { id: 'cups-04', name: 'Four of Cups', arcana: 'Minor', suit: 'Cups', number: 4 },
    { id: 'cups-05', name: 'Five of Cups', arcana: 'Minor', suit: 'Cups', number: 5 },
    { id: 'cups-06', name: 'Six of Cups', arcana: 'Minor', suit: 'Cups', number: 6 },
    { id: 'cups-07', name: 'Seven of Cups', arcana: 'Minor', suit: 'Cups', number: 7 },
    { id: 'cups-08', name: 'Eight of Cups', arcana: 'Minor', suit: 'Cups', number: 8 },
    { id: 'cups-09', name: 'Nine of Cups', arcana: 'Minor', suit: 'Cups', number: 9 },
    { id: 'cups-10', name: 'Ten of Cups', arcana: 'Minor', suit: 'Cups', number: 10 },
    { id: 'cups-11', name: 'Page of Cups', arcana: 'Minor', suit: 'Cups', number: 11 },
    { id: 'cups-12', name: 'Knight of Cups', arcana: 'Minor', suit: 'Cups', number: 12 },
    { id: 'cups-13', name: 'Queen of Cups', arcana: 'Minor', suit: 'Cups', number: 13 },
    { id: 'cups-14', name: 'King of Cups', arcana: 'Minor', suit: 'Cups', number: 14 },
    // Swords (14)
    { id: 'swords-01', name: 'Ace of Swords', arcana: 'Minor', suit: 'Swords', number: 1 },
    { id: 'swords-02', name: 'Two of Swords', arcana: 'Minor', suit: 'Swords', number: 2 },
    { id: 'swords-03', name: 'Three of Swords', arcana: 'Minor', suit: 'Swords', number: 3 },
    { id: 'swords-04', name: 'Four of Swords', arcana: 'Minor', suit: 'Swords', number: 4 },
    { id: 'swords-05', name: 'Five of Swords', arcana: 'Minor', suit: 'Swords', number: 5 },
    { id: 'swords-06', name: 'Six of Swords', arcana: 'Minor', suit: 'Swords', number: 6 },
    { id: 'swords-07', name: 'Seven of Swords', arcana: 'Minor', suit: 'Swords', number: 7 },
    { id: 'swords-08', name: 'Eight of Swords', arcana: 'Minor', suit: 'Swords', number: 8 },
    { id: 'swords-09', name: 'Nine of Swords', arcana: 'Minor', suit: 'Swords', number: 9 },
    { id: 'swords-10', name: 'Ten of Swords', arcana: 'Minor', suit: 'Swords', number: 10 },
    { id: 'swords-11', name: 'Page of Swords', arcana: 'Minor', suit: 'Swords', number: 11 },
    { id: 'swords-12', name: 'Knight of Swords', arcana: 'Minor', suit: 'Swords', number: 12 },
    { id: 'swords-13', name: 'Queen of Swords', arcana: 'Minor', suit: 'Swords', number: 13 },
    { id: 'swords-14', name: 'King of Swords', arcana: 'Minor', suit: 'Swords', number: 14 },
    // Pentacles (14)
    { id: 'pentacles-01', name: 'Ace of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 1 },
    { id: 'pentacles-02', name: 'Two of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 2 },
    { id: 'pentacles-03', name: 'Three of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 3 },
    { id: 'pentacles-04', name: 'Four of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 4 },
    { id: 'pentacles-05', name: 'Five of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 5 },
    { id: 'pentacles-06', name: 'Six of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 6 },
    { id: 'pentacles-07', name: 'Seven of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 7 },
    { id: 'pentacles-08', name: 'Eight of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 8 },
    { id: 'pentacles-09', name: 'Nine of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 9 },
    { id: 'pentacles-10', name: 'Ten of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 10 },
    { id: 'pentacles-11', name: 'Page of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 11 },
    { id: 'pentacles-12', name: 'Knight of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 12 },
    { id: 'pentacles-13', name: 'Queen of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 13 },
    { id: 'pentacles-14', name: 'King of Pentacles', arcana: 'Minor', suit: 'Pentacles', number: 14 },
];

// Card meanings data (source: Labyrinthos.co)
const TAROT_MEANINGS = {
    "major-00": {
        keywords: { upright: ["innocence", "new beginnings", "free spirit", "adventure"], reversed: ["recklessness", "taken advantage of", "inconsideration", "naivety"] },
        upright: "A beginning of a new journey filled with optimism and freedom. Every day is a chance to open up new areas in your life with anticipation, wonder, and curiosity.",
        reversed: "Acting without considering repercussions. Living in the moment without planning for the future. Be more aware so as not to be taken advantage of."
    },
    "major-01": {
        keywords: { upright: ["willpower", "desire", "creation", "manifestation"], reversed: ["trickery", "illusions", "out of touch", "manipulation"] },
        upright: "Making things manifest through skill, creativity, and determination. The power to turn ideas into action by utilizing your talents and inner resources.",
        reversed: "Untapped talents or using skills for deceptive purposes. Manipulation or illusions may be at work."
    },
    "major-02": {
        keywords: { upright: ["intuition", "unconscious", "inner voice", "mystery"], reversed: ["lack of center", "lost inner voice", "repressed feelings"] },
        upright: "Trust your intuition and inner voice. A time for introspection, meditation, and listening to your subconscious.",
        reversed: "Disconnection from intuition, ignoring your inner voice, or secrets being kept. Time to reconnect with your spiritual self."
    },
    "major-03": {
        keywords: { upright: ["motherhood", "fertility", "nature", "abundance"], reversed: ["dependence", "smothering", "emptiness", "creative block"] },
        upright: "Abundance, fertility, and nurturing energy. A time of creativity, growth, and connection with nature.",
        reversed: "Creative blocks, dependence on others, or feeling disconnected from your nurturing side."
    },
    "major-04": {
        keywords: { upright: ["authority", "structure", "control", "stability"], reversed: ["tyranny", "rigidity", "coldness", "domination"] },
        upright: "Authority, structure, and solid foundations. Leadership and the ability to achieve goals through organization.",
        reversed: "Excessive control, domination, or lack of discipline. May indicate an abuse of authority."
    },
    "major-05": {
        keywords: { upright: ["tradition", "conformity", "morality", "spiritual wisdom"], reversed: ["rebellion", "subversiveness", "new approaches"] },
        upright: "Seeking spiritual wisdom through conventional means. Education, mentorship, and following established paths.",
        reversed: "Challenging traditions or seeking unconventional spiritual paths. Time for new approaches."
    },
    "major-06": {
        keywords: { upright: ["partnerships", "duality", "union", "choices"], reversed: ["loss of balance", "one-sidedness", "disharmony"] },
        upright: "Union, partnership, and important choices. Alignment of values and harmony in relationships.",
        reversed: "Disharmony, imbalance in relationships, or facing a difficult choice."
    },
    "major-07": {
        keywords: { upright: ["direction", "control", "willpower", "victory"], reversed: ["lack of control", "lack of direction", "aggression"] },
        upright: "Victory through willpower and determination. Control over opposing forces and achievement of goals.",
        reversed: "Lack of direction, feeling out of control, or aggression without purpose."
    },
    "major-08": {
        keywords: { upright: ["inner strength", "bravery", "compassion", "courage"], reversed: ["self doubt", "weakness", "insecurity"] },
        upright: "Inner strength and patience. Mastery over base instincts through compassion rather than force.",
        reversed: "Self-doubt, weakness, or lack of confidence. Difficulty controlling emotions."
    },
    "major-09": {
        keywords: { upright: ["contemplation", "search for truth", "inner guidance"], reversed: ["loneliness", "isolation", "lost your way"] },
        upright: "Soul-searching, introspection, and seeking inner guidance. A time for solitude and reflection.",
        reversed: "Excessive isolation or losing your way. Fear of introspection."
    },
    "major-10": {
        keywords: { upright: ["change", "cycles", "inevitable fate", "turning point"], reversed: ["no control", "clinging to control", "bad luck"] },
        upright: "A turning point and the cyclical nature of life. Destiny and karma at work. Embrace coming changes.",
        reversed: "Resistance to change or feeling like you have no control. This too shall pass."
    },
    "major-11": {
        keywords: { upright: ["cause and effect", "clarity", "truth", "fairness"], reversed: ["dishonesty", "unaccountability", "unfairness"] },
        upright: "Truth, fairness, and the law of cause and effect. Accountability and consequences of actions.",
        reversed: "Injustice, dishonesty, or lack of accountability."
    },
    "major-12": {
        keywords: { upright: ["sacrifice", "release", "martyrdom", "new perspective"], reversed: ["stalling", "needless sacrifice", "fear of sacrifice"] },
        upright: "Suspension, sacrifice, and letting go. Seeing things from a new perspective.",
        reversed: "Stalling, resistance to necessary sacrifice, or fear of letting go."
    },
    "major-13": {
        keywords: { upright: ["end of cycle", "beginnings", "change", "transformation"], reversed: ["fear of change", "holding on", "stagnation"] },
        upright: "Endings and beginnings, transformation and transition. The end of one cycle and start of another.",
        reversed: "Resistance to change or holding onto what no longer serves you."
    },
    "major-14": {
        keywords: { upright: ["middle path", "patience", "finding meaning", "balance"], reversed: ["extremes", "excess", "lack of balance"] },
        upright: "Balance, moderation, and patience. Finding the middle path and mixing elements in harmony.",
        reversed: "Imbalance, excess, or going to extremes."
    },
    "major-15": {
        keywords: { upright: ["addiction", "materialism", "playfulness", "shadow self"], reversed: ["freedom", "release", "restoring control"] },
        upright: "Bondage to material things or shadow aspects of self. Can also represent playfulness.",
        reversed: "Breaking free from bondage or reclaiming control over your life."
    },
    "major-16": {
        keywords: { upright: ["sudden upheaval", "broken pride", "disaster", "revelation"], reversed: ["disaster avoided", "delayed disaster", "fear of suffering"] },
        upright: "Sudden change and the destruction of false beliefs. A necessary breakdown before breakthrough.",
        reversed: "Avoiding disaster or internal transformation rather than external chaos."
    },
    "major-17": {
        keywords: { upright: ["hope", "faith", "rejuvenation", "serenity"], reversed: ["faithlessness", "discouragement", "insecurity"] },
        upright: "Hope, faith, and renewal after difficulty. Inspiration and connection to the divine.",
        reversed: "Loss of faith, discouragement, or feeling disconnected from hope."
    },
    "major-18": {
        keywords: { upright: ["unconscious", "illusions", "intuition", "dreams"], reversed: ["confusion", "fear", "misinterpretation"] },
        upright: "Illusion and the unconscious mind. Things are not as they seem. Trust your instincts.",
        reversed: "Confusion lifting or fears being confronted. Clarity emerging from darkness."
    },
    "major-19": {
        keywords: { upright: ["joy", "success", "celebration", "positivity"], reversed: ["negativity", "depression", "sadness"] },
        upright: "Joy, success, and positivity. Celebration and everything coming together harmoniously.",
        reversed: "Temporary depression or blocked happiness. The sun is still there."
    },
    "major-20": {
        keywords: { upright: ["reflection", "reckoning", "awakening", "renewal"], reversed: ["lack of self awareness", "doubt", "self loathing"] },
        upright: "Reflection and spiritual awakening. Answering a calling or experiencing rebirth.",
        reversed: "Lack of self-awareness or refusing to learn from the past."
    },
    "major-21": {
        keywords: { upright: ["fulfillment", "harmony", "completion", "accomplishment"], reversed: ["incompletion", "no closure", "lack of achievement"] },
        upright: "Completion, fulfillment, and wholeness. The successful end of a cycle.",
        reversed: "Incompletion or feeling like something is missing."
    },
    "wands-01": {
        keywords: { upright: ["creation", "willpower", "inspiration", "desire"], reversed: ["lack of energy", "lack of passion", "boredom"] },
        upright: "A new beginning filled with inspiration and creative energy. The spark of a new idea.",
        reversed: "Lack of energy, creative blocks, or delays in new ventures."
    },
    "wands-02": {
        keywords: { upright: ["planning", "making decisions", "leaving home"], reversed: ["fear of change", "playing safe", "bad planning"] },
        upright: "Planning for the future and making decisions about which path to take.",
        reversed: "Fear of the unknown or reluctance to leave your comfort zone."
    },
    "wands-03": {
        keywords: { upright: ["looking ahead", "expansion", "rapid growth"], reversed: ["obstacles", "delays", "frustration"] },
        upright: "Expansion and looking ahead to future opportunities. Progress is being made.",
        reversed: "Delays, obstacles, or frustration with the pace of progress."
    },
    "wands-04": {
        keywords: { upright: ["community", "home", "celebration", "harmony"], reversed: ["lack of support", "transience", "home conflicts"] },
        upright: "Celebration, homecoming, and community. A milestone achieved.",
        reversed: "Lack of support or conflicts at home."
    },
    "wands-05": {
        keywords: { upright: ["competition", "rivalry", "conflict"], reversed: ["avoiding conflict", "respecting differences"] },
        upright: "Competition and differing opinions. Healthy rivalry or frustrating disagreements.",
        reversed: "Avoiding conflict or finding common ground."
    },
    "wands-06": {
        keywords: { upright: ["victory", "success", "public reward"], reversed: ["excess pride", "lack of recognition", "fall from grace"] },
        upright: "Victory and public recognition. Your efforts are being acknowledged.",
        reversed: "Lack of recognition or success that feels hollow."
    },
    "wands-07": {
        keywords: { upright: ["perseverance", "defensive", "maintaining control"], reversed: ["give up", "destroyed confidence", "overwhelmed"] },
        upright: "Standing your ground and persevering despite opposition.",
        reversed: "Feeling overwhelmed or losing confidence."
    },
    "wands-08": {
        keywords: { upright: ["rapid action", "movement", "quick decisions"], reversed: ["panic", "waiting", "slowdown"] },
        upright: "Rapid movement and things happening quickly. Travel and momentum.",
        reversed: "Delays or feeling stuck."
    },
    "wands-09": {
        keywords: { upright: ["resilience", "grit", "last stand"], reversed: ["exhaustion", "fatigue", "questioning motivations"] },
        upright: "Resilience and determination. You've been through challenges but are still standing.",
        reversed: "Exhaustion or questioning whether it's worth continuing."
    },
    "wands-10": {
        keywords: { upright: ["accomplishment", "responsibility", "burden"], reversed: ["inability to delegate", "overstressed", "burnt out"] },
        upright: "Heavy burdens and responsibility. You may be taking on too much.",
        reversed: "Burnout or being crushed by responsibilities."
    },
    "wands-11": {
        keywords: { upright: ["exploration", "excitement", "freedom"], reversed: ["lack of direction", "procrastination", "creating conflict"] },
        upright: "Exploration and discovering new passions. A message about creativity.",
        reversed: "Lack of direction or enthusiasm without follow-through."
    },
    "wands-12": {
        keywords: { upright: ["action", "adventure", "fearlessness"], reversed: ["anger", "impulsiveness", "recklessness"] },
        upright: "Energy, passion, and charging forward fearlessly toward goals.",
        reversed: "Recklessness or energy that's scattered."
    },
    "wands-13": {
        keywords: { upright: ["courage", "determination", "joy"], reversed: ["selfishness", "jealousy", "insecurities"] },
        upright: "Confidence and warmth. Someone who inspires others with courage and joy.",
        reversed: "Jealousy or insecurity masked by bravado."
    },
    "wands-14": {
        keywords: { upright: ["big picture", "leader", "overcoming challenges"], reversed: ["impulsive", "overbearing", "unachievable expectations"] },
        upright: "Visionary leadership and seeing the big picture. Inspiring action.",
        reversed: "Impulsive decisions or setting unrealistic expectations."
    },
    "cups-01": {
        keywords: { upright: ["new feelings", "spirituality", "intuition"], reversed: ["emotional loss", "blocked creativity", "emptiness"] },
        upright: "New emotional beginnings and spiritual connection. Overflowing feelings.",
        reversed: "Emotional blockages or spiritual disconnection."
    },
    "cups-02": {
        keywords: { upright: ["unity", "partnership", "connection"], reversed: ["imbalance", "broken communication", "tension"] },
        upright: "Partnership and deep connection. The beginning of a meaningful relationship.",
        reversed: "Imbalance in relationships or broken communication."
    },
    "cups-03": {
        keywords: { upright: ["friendship", "community", "happiness"], reversed: ["overindulgence", "gossip", "isolation"] },
        upright: "Celebration, friendship, and shared joy.",
        reversed: "Overindulgence or feeling isolated from community."
    },
    "cups-04": {
        keywords: { upright: ["apathy", "contemplation", "disconnectedness"], reversed: ["sudden awareness", "choosing happiness", "acceptance"] },
        upright: "Contemplation or missing opportunities. A need for introspection.",
        reversed: "Sudden awareness or choosing to engage with life again."
    },
    "cups-05": {
        keywords: { upright: ["loss", "grief", "self-pity"], reversed: ["acceptance", "moving on", "finding peace"] },
        upright: "Loss and focusing on what's gone rather than what remains.",
        reversed: "Acceptance and moving on from loss."
    },
    "cups-06": {
        keywords: { upright: ["familiarity", "happy memories", "healing"], reversed: ["moving forward", "leaving home", "independence"] },
        upright: "Nostalgia and happy memories. Healing through familiar comfort.",
        reversed: "Leaving the past behind and gaining independence."
    },
    "cups-07": {
        keywords: { upright: ["searching for purpose", "choices", "daydreaming"], reversed: ["lack of purpose", "diversion", "confusion"] },
        upright: "Many options before you. Discernment needed to separate illusion from reality.",
        reversed: "Overwhelm from too many choices or lacking clear purpose."
    },
    "cups-08": {
        keywords: { upright: ["walking away", "disillusionment", "leaving behind"], reversed: ["avoidance", "fear of change", "fear of loss"] },
        upright: "Walking away from what no longer serves you. Seeking deeper meaning.",
        reversed: "Fear of leaving or avoidance of necessary change."
    },
    "cups-09": {
        keywords: { upright: ["satisfaction", "emotional stability", "luxury"], reversed: ["lack of inner joy", "smugness", "dissatisfaction"] },
        upright: "Emotional satisfaction and wishes coming true. Enjoying your efforts.",
        reversed: "Superficial happiness or dissatisfaction despite having what you wanted."
    },
    "cups-10": {
        keywords: { upright: ["inner happiness", "fulfillment", "dreams coming true"], reversed: ["shattered dreams", "broken family", "domestic disharmony"] },
        upright: "Emotional fulfillment and lasting happiness.",
        reversed: "Family discord or broken dreams."
    },
    "cups-11": {
        keywords: { upright: ["happy surprise", "dreamer", "sensitivity"], reversed: ["emotional immaturity", "insecurity", "disappointment"] },
        upright: "Creative opportunities and emotional sensitivity. A dreamer.",
        reversed: "Emotional immaturity or sensitivity without boundaries."
    },
    "cups-12": {
        keywords: { upright: ["following the heart", "idealist", "romantic"], reversed: ["moodiness", "disappointment", "unrealistic expectations"] },
        upright: "Following your heart and seeking beauty. An idealistic person.",
        reversed: "Moodiness or unrealistic romantic expectations."
    },
    "cups-13": {
        keywords: { upright: ["compassion", "calm", "comfort"], reversed: ["martyrdom", "insecurity", "dependence"] },
        upright: "Compassion and emotional security. A nurturing presence.",
        reversed: "Emotional insecurity or giving too much at your own expense."
    },
    "cups-14": {
        keywords: { upright: ["compassion", "control", "balance"], reversed: ["coldness", "moodiness", "bad advice"] },
        upright: "Emotional balance and diplomacy. Mastery over emotions while remaining caring.",
        reversed: "Emotional manipulation or using emotional intelligence selfishly."
    },
    "swords-01": {
        keywords: { upright: ["breakthrough", "clarity", "sharp mind"], reversed: ["confusion", "brutality", "chaos"] },
        upright: "Mental clarity and breakthrough. The power of truth and understanding.",
        reversed: "Confusion or using intellect cruelly."
    },
    "swords-02": {
        keywords: { upright: ["difficult choices", "indecision", "stalemate"], reversed: ["lesser of two evils", "no right choice", "confusion"] },
        upright: "Difficult decisions and being caught between two options.",
        reversed: "Forced choice or finally making a decision you've been avoiding."
    },
    "swords-03": {
        keywords: { upright: ["heartbreak", "suffering", "grief"], reversed: ["recovery", "forgiveness", "moving on"] },
        upright: "Heartbreak and emotional pain from loss or betrayal.",
        reversed: "Recovery from heartbreak and the healing process beginning."
    },
    "swords-04": {
        keywords: { upright: ["rest", "restoration", "contemplation"], reversed: ["restlessness", "burnout", "stress"] },
        upright: "Rest and recovery. A necessary period to heal and restore energy.",
        reversed: "Restlessness or burnout from not taking needed breaks."
    },
    "swords-05": {
        keywords: { upright: ["unbridled ambition", "win at all costs", "sneakiness"], reversed: ["lingering resentment", "desire to reconcile", "forgiveness"] },
        upright: "Conflict and winning at any cost. A hollow victory.",
        reversed: "Desire to reconcile or letting go of conflict."
    },
    "swords-06": {
        keywords: { upright: ["transition", "leaving behind", "moving on"], reversed: ["emotional baggage", "unresolved issues", "resisting transition"] },
        upright: "Transition and moving away from difficulty. A journey toward calmer waters.",
        reversed: "Resisting necessary change or carrying emotional baggage."
    },
    "swords-07": {
        keywords: { upright: ["deception", "trickery", "tactics and strategy"], reversed: ["coming clean", "rethinking approach", "deception revealed"] },
        upright: "Deception and using cunning to achieve goals.",
        reversed: "Deception revealed or rethinking a sneaky approach."
    },
    "swords-08": {
        keywords: { upright: ["imprisonment", "entrapment", "self-victimization"], reversed: ["self acceptance", "new perspective", "freedom"] },
        upright: "Feeling trapped. Often the imprisonment is self-imposed.",
        reversed: "Freedom from mental prison or realizing you had the power to leave."
    },
    "swords-09": {
        keywords: { upright: ["anxiety", "hopelessness", "trauma"], reversed: ["hope", "reaching out", "despair lifting"] },
        upright: "Anxiety and worry. The darkest hour when fears seem overwhelming.",
        reversed: "Light at the end of the tunnel or anxiety beginning to lift."
    },
    "swords-10": {
        keywords: { upright: ["failure", "collapse", "defeat"], reversed: ["can't get worse", "only upwards", "inevitable end"] },
        upright: "Rock bottom. The worst has happened, but now there's nowhere to go but up.",
        reversed: "The worst is over or recovery beginning."
    },
    "swords-11": {
        keywords: { upright: ["curiosity", "restlessness", "mental energy"], reversed: ["deception", "manipulation", "all talk"] },
        upright: "Curiosity and new ideas. A messenger bringing intellectual challenges.",
        reversed: "All talk and no action or using words to manipulate."
    },
    "swords-12": {
        keywords: { upright: ["action", "impulsiveness", "defending beliefs"], reversed: ["no direction", "disregard for consequences", "unpredictability"] },
        upright: "Swift action and charging forward. Someone who acts quickly on ideas.",
        reversed: "Reckless action or disregard for consequences."
    },
    "swords-13": {
        keywords: { upright: ["complexity", "perceptiveness", "clear mindedness"], reversed: ["cold hearted", "cruel", "bitterness"] },
        upright: "Clear thinking and direct communication. Seeing through deception.",
        reversed: "Coldness or using sharp intellect to hurt others."
    },
    "swords-14": {
        keywords: { upright: ["head over heart", "discipline", "truth"], reversed: ["manipulative", "cruel", "weakness"] },
        upright: "Intellectual authority and clear judgment. Leading with logic.",
        reversed: "Manipulation through intellect or tyrannical use of power."
    },
    "pentacles-01": {
        keywords: { upright: ["opportunity", "prosperity", "new venture"], reversed: ["lost opportunity", "missed chance", "bad investment"] },
        upright: "New financial or material opportunity. The seed of prosperity.",
        reversed: "Missed opportunity or failed financial venture."
    },
    "pentacles-02": {
        keywords: { upright: ["balancing decisions", "priorities", "adapting to change"], reversed: ["loss of balance", "disorganized", "overwhelmed"] },
        upright: "Juggling priorities and managing responsibilities with flexibility.",
        reversed: "Loss of balance or dropping the ball on important matters."
    },
    "pentacles-03": {
        keywords: { upright: ["teamwork", "collaboration", "building"], reversed: ["lack of teamwork", "disorganized", "group conflict"] },
        upright: "Collaboration and skilled work. Teamwork leading to quality results.",
        reversed: "Lack of cooperation or conflicts within a team."
    },
    "pentacles-04": {
        keywords: { upright: ["conservation", "frugality", "security"], reversed: ["greediness", "stinginess", "possessiveness"] },
        upright: "Security and protecting what you have, sometimes too tightly.",
        reversed: "Greed or holding on too tightly to possessions."
    },
    "pentacles-05": {
        keywords: { upright: ["need", "poverty", "insecurity"], reversed: ["recovery", "charity", "improvement"] },
        upright: "Financial hardship or feeling left out in the cold.",
        reversed: "Recovery from hardship or finding help."
    },
    "pentacles-06": {
        keywords: { upright: ["charity", "generosity", "sharing"], reversed: ["strings attached", "stinginess", "power and domination"] },
        upright: "Generosity and the balance of giving and receiving.",
        reversed: "Generosity with strings attached or using charity for power."
    },
    "pentacles-07": {
        keywords: { upright: ["hard work", "perseverance", "diligence"], reversed: ["work without results", "distractions", "lack of rewards"] },
        upright: "Patience and evaluating progress. Taking the long view.",
        reversed: "Frustration with slow progress or lack of results."
    },
    "pentacles-08": {
        keywords: { upright: ["apprenticeship", "passion", "high standards"], reversed: ["lack of passion", "uninspired", "no motivation"] },
        upright: "Skill development and dedication to craft.",
        reversed: "Lack of motivation or feeling uninspired."
    },
    "pentacles-09": {
        keywords: { upright: ["fruits of labor", "rewards", "luxury"], reversed: ["reckless spending", "living beyond means", "false success"] },
        upright: "Enjoying rewards of hard work. Material comfort and independence.",
        reversed: "Living beyond your means or hollow success."
    },
    "pentacles-10": {
        keywords: { upright: ["legacy", "culmination", "inheritance"], reversed: ["fleeting success", "lack of stability", "lack of resources"] },
        upright: "Legacy and family wealth. The culmination of material achievement.",
        reversed: "Family financial troubles or unstable foundations."
    },
    "pentacles-11": {
        keywords: { upright: ["ambition", "desire", "diligence"], reversed: ["lack of commitment", "greediness", "laziness"] },
        upright: "New opportunities for prosperity. A message about finances or career.",
        reversed: "Laziness or greed without the work to back it up."
    },
    "pentacles-12": {
        keywords: { upright: ["efficiency", "hard work", "responsibility"], reversed: ["laziness", "obsessiveness", "work without reward"] },
        upright: "Hard work and steady progress. Getting things done through dedication.",
        reversed: "Being stuck in routine or working without seeing results."
    },
    "pentacles-13": {
        keywords: { upright: ["practicality", "creature comforts", "financial security"], reversed: ["self-centeredness", "jealousy", "smothering"] },
        upright: "Practical nurturing and creating a comfortable home.",
        reversed: "Neglecting home life or jealousy over others' success."
    },
    "pentacles-14": {
        keywords: { upright: ["abundance", "prosperity", "security"], reversed: ["greed", "indulgence", "sensuality"] },
        upright: "Material success and abundance through discipline.",
        reversed: "Greed or using wealth for status rather than substance."
    }
};

function getDisplayNumber(card) {
    if (card.arcana === 'Major') return card.number.toString();
    const court = { 11: 'Pg', 12: 'Kn', 13: 'Q', 14: 'K' };
    return court[card.number] || card.number.toString();
}

function getCardFrontContent(card) {
    if (USE_IMAGES) {
        const url = getCardImageUrl(card);
        if (url) return `<img src="${url}" alt="${card.name}" loading="lazy">`;
    }
    return `<div class="card-placeholder"><div class="card-number">${getDisplayNumber(card)}</div><div class="card-suit">${card.suit || 'Major'}</div></div>`;
}

function getModalContent(card) {
    if (USE_IMAGES) {
        const url = getCardImageUrl(card);
        if (url) return `<img src="${url}" alt="${card.name}">`;
    }
    return `<div class="modal-placeholder"><div class="card-number">${getDisplayNumber(card)}</div><div class="card-suit">${card.suit || 'Major Arcana'}</div></div>`;
}

// State
let deck = [];
let placedCards = [];
let draggedCard = null;
let dragOffset = { x: 0, y: 0 };
let reversalsEnabled = false;
let currentReadingId = null;

// LocalStorage keys
const STORAGE_KEYS = {
    PREFERENCES: 'tarot_preferences',
    CURRENT_READING: 'tarot_current_reading',
    READING_HISTORY: 'tarot_reading_history'
};

// ============================================
// LOCALSTORAGE FUNCTIONS
// ============================================

function savePreferences() {
    const prefs = {
        theme: document.body.classList.contains('dark') ? 'dark' : 'light',
        reversalsEnabled: reversalsEnabled,
        devMode: document.body.classList.contains('dev-mode')
    };
    localStorage.setItem(STORAGE_KEYS.PREFERENCES, JSON.stringify(prefs));
}

function loadPreferences() {
    try {
        const prefs = JSON.parse(localStorage.getItem(STORAGE_KEYS.PREFERENCES));
        if (prefs) {
            // Theme
            if (prefs.theme === 'dark') {
                document.body.classList.add('dark');
                updateThemeIcon(true);
            }
            // Reversals
            if (prefs.reversalsEnabled) {
                reversalsEnabled = true;
                reversalsToggle.classList.add('active');
            }
            // Dev mode
            if (prefs.devMode) {
                document.body.classList.add('dev-mode');
                devToggle.classList.add('active');
            }
        }
    } catch (e) {
        console.warn('Could not load preferences:', e);
    }
}

function saveCurrentReading() {
    if (placedCards.length === 0 && textBoxes.length === 0 && !currentSpread) {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_READING);
        return;
    }
    
    const surfaceRect = readingSurface.getBoundingClientRect();
    
    const reading = {
        id: currentReadingId || generateReadingId(),
        timestamp: Date.now(),
        spreadId: currentSpread ? currentSpread.id : null,
        cards: placedCards.map(p => ({
            cardId: p.card.id,
            percentX: parseFloat(p.element.dataset.percentX) || 0,
            percentY: parseFloat(p.element.dataset.percentY) || 0,
            isFlipped: p.element.classList.contains('flipped'),
            isReversed: p.element.classList.contains('reversed')
        })),
        textBoxes: textBoxes.map(tb => {
            const textarea = tb.element.querySelector('.text-box-content');
            // Convert pixel positions to percentages
            const percentX = (tb.element.offsetLeft / surfaceRect.width) * 100;
            const percentY = (tb.element.offsetTop / surfaceRect.height) * 100;
            const percentW = (tb.element.offsetWidth / surfaceRect.width) * 100;
            const percentH = (tb.element.offsetHeight / surfaceRect.height) * 100;
            return {
                id: tb.id,
                percentX,
                percentY,
                percentW,
                percentH,
                content: textarea ? textarea.value : '',
                fontSize: tb.fontSize || 13,
                showBorder: tb.element.classList.contains('show-border')
            };
        }),
        deckOrder: deck.map(c => c.id),
        chatHistory: chatHistory || []
    };
    
    currentReadingId = reading.id;
    localStorage.setItem(STORAGE_KEYS.CURRENT_READING, JSON.stringify(reading));
}

function loadCurrentReading() {
    try {
        const reading = JSON.parse(localStorage.getItem(STORAGE_KEYS.CURRENT_READING));
        if (reading && (
            (reading.cards && reading.cards.length > 0) || 
            (reading.textBoxes && reading.textBoxes.length > 0) ||
            reading.spreadId
        )) {
            return reading;
        }
    } catch (e) {
        console.warn('Could not load current reading:', e);
    }
    return null;
}

function restoreReading(reading) {
    // Clear current cards and text boxes but keep Aa button
    placedCards.forEach(p => p.element.remove());
    textBoxes.forEach(tb => tb.element.remove());
    placedCards = [];
    textBoxes = [];
    textBoxIdCounter = 0;
    currentReadingId = reading.id;
    
    // Restore spread
    if (reading.spreadId && SPREADS[reading.spreadId]) {
        currentSpread = SPREADS[reading.spreadId];
    } else {
        currentSpread = null;
    }
    clearSpreadSlots();
    
    // Restore deck order
    if (reading.deckOrder) {
        deck = reading.deckOrder.map(id => TAROT_DECK.find(c => c.id === id)).filter(Boolean);
    }
    
    // Restore placed cards
    if (reading.cards) {
        reading.cards.forEach(savedCard => {
            const cardData = TAROT_DECK.find(c => c.id === savedCard.cardId);
            if (cardData) {
                // Remove from deck if present
                deck = deck.filter(c => c.id !== savedCard.cardId);
                
                // Create and place card
                const el = document.createElement('div');
                el.className = 'placed-card card';
                if (savedCard.isFlipped) el.classList.add('flipped');
                if (savedCard.isReversed) el.classList.add('reversed');
                el.dataset.cardId = cardData.id;
                el.style.left = savedCard.percentX + '%';
                el.style.top = savedCard.percentY + '%';
                el.dataset.percentX = savedCard.percentX;
                el.dataset.percentY = savedCard.percentY;
                el.style.animation = 'none'; // Skip grow animation on restore
                
                el.innerHTML = `
                    <div class="card-face card-back"></div>
                    <div class="card-face card-front">${getCardFrontContent(cardData)}</div>
                    <div class="dev-label">${cardData.id}</div>
                `;
                
                // Add event handlers
                addPlacedCardHandlers(el, cardData);
                
                readingSurfaceContent.appendChild(el);
                placedCards.push({ card: cardData, element: el });
            }
        });
    }
    
    // Restore text boxes
    if (reading.textBoxes && reading.textBoxes.length > 0) {
        reading.textBoxes.forEach(savedBox => {
            restoreTextBox(savedBox);
        });
    }
    
    if (placedCards.length > 0) {
        readingSurface.classList.add('has-cards');
        document.querySelector('.deck-area').classList.add('docked');
    } else {
        readingSurface.classList.remove('has-cards');
        document.querySelector('.deck-area').classList.remove('docked');
    }
    
    // Render spread slots after cards are placed
    if (currentSpread) {
        renderSpreadSlots();
    }

    // Restore chat history if exists
    if (reading.chatHistory && reading.chatHistory.length > 0) {
        chatHistory = reading.chatHistory;
        restoreAIChatDisplay();
    } else {
        chatHistory = [];
        resetAIChat();
    }

    renderDeck();
    updateDevPanel();
}

function generateReadingId() {
    return 'reading_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function saveToHistory(title = '') {
    if (placedCards.length === 0 && textBoxes.length === 0) return null;
    
    const surfaceRect = readingSurface.getBoundingClientRect();
    
    const reading = {
        id: currentReadingId || generateReadingId(),
        title: title || `Reading - ${new Date().toLocaleDateString()}`,
        timestamp: Date.now(),
        spreadId: currentSpread ? currentSpread.id : null,
        cards: placedCards.map(p => ({
            cardId: p.card.id,
            cardName: p.card.name,
            percentX: parseFloat(p.element.dataset.percentX) || 0,
            percentY: parseFloat(p.element.dataset.percentY) || 0,
            isFlipped: p.element.classList.contains('flipped'),
            isReversed: p.element.classList.contains('reversed')
        })),
        textBoxes: textBoxes.map(tb => {
            const textarea = tb.element.querySelector('.text-box-content');
            const percentX = (tb.element.offsetLeft / surfaceRect.width) * 100;
            const percentY = (tb.element.offsetTop / surfaceRect.height) * 100;
            const percentW = (tb.element.offsetWidth / surfaceRect.width) * 100;
            const percentH = (tb.element.offsetHeight / surfaceRect.height) * 100;
            return {
                id: tb.id,
                percentX,
                percentY,
                percentW,
                percentH,
                content: textarea ? textarea.value : '',
                fontSize: tb.fontSize || 13,
                showBorder: tb.element.classList.contains('show-border')
            };
        }),
        deckOrder: deck.map(c => c.id),
        chatHistory: chatHistory || []
    };
    
    try {
        let history = JSON.parse(localStorage.getItem(STORAGE_KEYS.READING_HISTORY)) || [];
        
        // Update existing or add new
        const existingIndex = history.findIndex(r => r.id === reading.id);
        if (existingIndex >= 0) {
            history[existingIndex] = reading;
        } else {
            history.unshift(reading);
        }
        
        // Keep only last 50 readings
        history = history.slice(0, 50);
        
        localStorage.setItem(STORAGE_KEYS.READING_HISTORY, JSON.stringify(history));
        return reading.id;
    } catch (e) {
        console.warn('Could not save to history:', e);
        return null;
    }
}

function getReadingHistory() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.READING_HISTORY)) || [];
    } catch (e) {
        return [];
    }
}

function deleteFromHistory(readingId) {
    try {
        let history = JSON.parse(localStorage.getItem(STORAGE_KEYS.READING_HISTORY)) || [];
        history = history.filter(r => r.id !== readingId);
        localStorage.setItem(STORAGE_KEYS.READING_HISTORY, JSON.stringify(history));
    } catch (e) {
        console.warn('Could not delete from history:', e);
    }
}

function clearAllData() {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
    currentReadingId = null;
}

// ============================================
// END LOCALSTORAGE FUNCTIONS
// ============================================

// DOM
const deckContainer = document.getElementById('deckContainer');
const readingSurface = document.getElementById('readingSurface');
const devToggle = document.getElementById('devToggle');
const reversalsToggle = document.getElementById('reversalsToggle');
const themeToggle = document.getElementById('themeToggle');
const shuffleBtn = document.getElementById('shuffleBtn');
const resetBtn = document.getElementById('resetBtn');
const cardModal = document.getElementById('cardModal');
const modalClose = document.getElementById('modalClose');
const devInfo = document.getElementById('devInfo');
const validationStatus = document.getElementById('validationStatus');

// Save/History DOM
const saveBtn = document.getElementById('saveBtn');
const saveModal = document.getElementById('saveModal');
const readingTitleInput = document.getElementById('readingTitleInput');
const saveCancelBtn = document.getElementById('saveCancelBtn');
const saveConfirmBtn = document.getElementById('saveConfirmBtn');
const historyBtn = document.getElementById('historyBtn');
const historyPanel = document.getElementById('historyPanel');
const historyOverlay = document.getElementById('historyOverlay');
const historyClose = document.getElementById('historyClose');
const historyList = document.getElementById('historyList');
const historyEmpty = document.getElementById('historyEmpty');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// Text Tool DOM
const textToolBtn = document.getElementById('textToolBtn');

// Fisher-Yates with crypto
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const buf = new Uint32Array(1);
        crypto.getRandomValues(buf);
        const j = buf[0] % (i + 1);
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function initializeDeck() {
    deck = shuffleArray([...TAROT_DECK]);
    placedCards = [];
    renderDeck();
    updateDevPanel();
}

function getCardDimensions() {
    const style = getComputedStyle(document.documentElement);
    const cardW = parseFloat(style.getPropertyValue('--deck-card-width')) || 56;
    const overlap = parseFloat(style.getPropertyValue('--card-overlap')) || 9;
    return { cardW, overlap };
}

function isMobileView() {
    return window.innerWidth <= 600;
}

// Helper: Calculate and apply card positions in deck layout
function applyDeckLayout(cards, cardW, overlap, onCard) {
    const total = cards.length;
    
    if (isMobileView()) {
        // Mobile: Single arc showing 26 cards (subset of deck)
        const visibleCount = Math.min(26, total);
        const arcHeight = 20;
        const maxRotation = 15;
        const mobileOverlap = Math.min(overlap * 1.1, cardW * 0.6);
        
        const totalW = cardW + (visibleCount - 1) * mobileOverlap;
        const startX = -totalW / 2 + cardW / 2;
        
        // Show first 26 cards (evenly distributed from deck if desired, or just first 26)
        for (let i = 0; i < visibleCount && i < total; i++) {
            const card = cards[i];
            const xPos = startX + i * mobileOverlap;
            const progress = visibleCount > 1 ? i / (visibleCount - 1) : 0.5;
            const arcY = -Math.sin(progress * Math.PI) * arcHeight;
            const rotation = (progress - 0.5) * maxRotation * 2;
            // Position cards at 30% so they appear in the visible portion of the docked container
            onCard(card, i, { xPos, arcY, rotation, top: '30%' });
        }
    } else {
        // Single row (desktop)
        const totalW = cardW + (total - 1) * overlap;
        const startX = -totalW / 2 + cardW / 2;
        
        cards.forEach((card, i) => {
            const xPos = startX + i * overlap;
            onCard(card, i, { xPos, arcY: 0, rotation: 0, top: '50%' });
        });
    }
}

function renderDeck() {
    deckContainer.innerHTML = '';
    
    // On mobile, render dummy decorative cards instead of real deck
    if (isMobileView()) {
        renderMobileDummyDeck();
        return;
    }
    
    const { cardW, overlap } = getCardDimensions();
    
    applyDeckLayout(deck, cardW, overlap, (card, index, pos) => {
        const el = createCardElement(card, index);
        el.style.left = '50%';
        el.style.top = pos.top;
        el.style.transform = `translate(-50%, -50%) translateX(${pos.xPos}px)${pos.arcY ? ` translateY(${pos.arcY}px)` : ''}${pos.rotation ? ` rotate(${pos.rotation}deg)` : ''}`;
        el.style.setProperty('--base-x', `${pos.xPos}px`);
        if (pos.arcY) el.style.setProperty('--base-y', `${pos.arcY}px`);
        if (pos.rotation) el.style.setProperty('--base-rot', `${pos.rotation}deg`);
        el.style.zIndex = index;
        deckContainer.appendChild(el);
    });
}

// Mobile dummy deck - decorative cards not tied to deck array
const MOBILE_DUMMY_CARD_COUNT = 26;

function renderMobileDummyDeck() {
    deckContainer.innerHTML = '';
    const { cardW, overlap } = getCardDimensions();
    
    const arcHeight = 20;
    const maxRotation = 15;
    const mobileOverlap = Math.min(overlap * 1.1, cardW * 0.6);
    
    const totalW = cardW + (MOBILE_DUMMY_CARD_COUNT - 1) * mobileOverlap;
    const startX = -totalW / 2 + cardW / 2;
    
    for (let i = 0; i < MOBILE_DUMMY_CARD_COUNT; i++) {
        const el = createDummyCardElement(i);
        
        const xPos = startX + i * mobileOverlap;
        const progress = i / (MOBILE_DUMMY_CARD_COUNT - 1);
        const arcY = -Math.sin(progress * Math.PI) * arcHeight;
        const rotation = (progress - 0.5) * maxRotation * 2;
        
        el.style.left = '50%';
        el.style.top = '30%';
        el.style.transform = `translate(-50%, -50%) translateX(${xPos}px) translateY(${arcY}px) rotate(${rotation}deg)`;
        el.style.setProperty('--base-x', `${xPos}px`);
        el.style.setProperty('--base-y', `${arcY}px`);
        el.style.setProperty('--base-rot', `${rotation}deg`);
        el.style.zIndex = i;
        
        deckContainer.appendChild(el);
    }
}

function createDummyCardElement(index) {
    const el = document.createElement('div');
    el.className = 'card dummy-card';
    el.dataset.dummyIndex = index;
    el.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front"></div>
    `;
    
    // Tap opens the card picker modal immediately
    el.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!stagedCard) {
            triggerHaptic('light');
            openCardPickerModal();
        }
    }, { passive: false });
    
    return el;
}

function createCardElement(card, index) {
    const el = document.createElement('div');
    el.className = 'card';
    el.dataset.cardId = card.id;
    el.dataset.index = index;
    el.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">${getCardFrontContent(card)}</div>
        <div class="dev-label">${card.id}</div>
    `;
    // On mobile, only use touchstart (mousedown would double-trigger)
    el.addEventListener('mousedown', (e) => {
        if (!isMobileView()) {
            startDrag(e);
        }
    });
    el.addEventListener('touchstart', handleDeckTouchStart, { passive: false });
    return el;
}

// Mobile Card Picker State
let stagedCard = null; // Card waiting to be placed

function triggerHaptic(style = 'light') {
    // Try iOS Haptic Engine first (for PWA/web apps with haptic support)
    if (window.webkit?.messageHandlers?.haptic) {
        window.webkit.messageHandlers.haptic.postMessage(style);
        return;
    }
    
    // Fallback to Vibration API (Android, some browsers)
    if (navigator.vibrate) {
        switch(style) {
            case 'light': navigator.vibrate(8); break;
            case 'medium': navigator.vibrate(15); break;
            case 'heavy': navigator.vibrate(30); break;
            case 'tick': navigator.vibrate(4); break;
        }
    }
}

// Mobile Card Picker Modal
let cardPickerModal = null;

function createCardPickerModal() {
    if (cardPickerModal) return cardPickerModal;
    
    cardPickerModal = document.createElement('div');
    cardPickerModal.className = 'card-picker-modal';
    cardPickerModal.innerHTML = `
        <div class="card-picker-overlay"></div>
        <div class="card-picker-content">
            <div class="card-picker-notch-area">
                <div class="card-picker-notch"></div>
            </div>
            <div class="card-picker-cards"></div>
            <div class="card-picker-nav" id="pickerNav">
                <button class="card-picker-nav-btn" id="pickerPrevBtn" disabled>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 18l-6-6 6-6"/>
                    </svg>
                </button>
                <button class="card-picker-action-btn" id="pickerSelectBtn" title="Select Card">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 6L9 17l-5-5"/>
                    </svg>
                </button>
                <button class="card-picker-nav-btn" id="pickerNextBtn" disabled>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 18l6-6-6-6"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(cardPickerModal);
    
    // Close on overlay click
    cardPickerModal.querySelector('.card-picker-overlay').addEventListener('click', closeCardPickerModal);
    
    // Tap on cards area (but not on a card) to deselect
    cardPickerModal.querySelector('.card-picker-cards').addEventListener('click', (e) => {
        if (!e.target.closest('.card-picker-card')) {
            deselectPickerCard();
        }
    });
    
    // Setup notch drag to dismiss
    setupNotchDragToDismiss(cardPickerModal);
    
    // Setup navigation buttons
    setupPickerNavigation(cardPickerModal);
    
    // Setup scrub selection for mobile
    initPickerScrubSelection(cardPickerModal);
    
    return cardPickerModal;
}

function setupNotchDragToDismiss(modal) {
    const notchArea = modal.querySelector('.card-picker-notch-area');
    const content = modal.querySelector('.card-picker-content');
    
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    
    notchArea.addEventListener('touchstart', (e) => {
        isDragging = true;
        startY = e.touches[0].clientY;
        currentY = 0;
        content.classList.add('dragging');
    }, { passive: true });
    
    notchArea.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        const deltaY = e.touches[0].clientY - startY;
        // Only allow dragging down (positive deltaY)
        currentY = Math.max(0, deltaY);
        content.style.transform = `translateY(${currentY}px)`;
    }, { passive: true });
    
    notchArea.addEventListener('touchend', () => {
        if (!isDragging) return;
        isDragging = false;
        content.classList.remove('dragging');
        
        // If dragged more than 100px down, dismiss
        if (currentY > 100) {
            content.classList.add('dismissing');
            setTimeout(() => {
                closeCardPickerModal();
                content.classList.remove('dismissing');
                content.style.transform = '';
            }, 200);
        } else {
            // Snap back
            content.style.transform = '';
        }
    });
}

function openCardPickerModal() {
    const modal = createCardPickerModal();
    renderPickerCards();
    
    modal.classList.add('open');
    triggerHaptic('light');
}

// Card picker focus state
let pickerFocusedIndex = -1; // -1 = no card focused
let pickerAllCards = []; // Flat array of all cards in picker

function renderPickerCards() {
    const modal = cardPickerModal;
    if (!modal) return;
    
    const cardsContainer = modal.querySelector('.card-picker-cards');
    cardsContainer.innerHTML = '';
    
    // Create inner wrapper for transform animation
    const innerWrapper = document.createElement('div');
    innerWrapper.className = 'card-picker-cards-inner';
    
    // Reset focus state and hide nav
    pickerFocusedIndex = -1;
    pickerAllCards = [];
    hidePickerNav();
    
    // Get card dimensions (same as dock)
    const { cardW, overlap } = getCardDimensions();
    
    // Split deck into 3 rows (26 cards max per row)
    const cardsPerRow = 26;
    const rows = [
        deck.slice(0, cardsPerRow),
        deck.slice(cardsPerRow, cardsPerRow * 2),
        deck.slice(cardsPerRow * 2)
    ].filter(row => row.length > 0); // Remove empty rows
    
    // Arc settings matching the dock exactly
    const arcHeight = 20;
    const maxRotation = 15;
    const mobileOverlap = Math.min(overlap * 1.1, cardW * 0.6);
    
    let globalIndex = 0;
    
    rows.forEach((rowCards, rowIndex) => {
        const rowEl = document.createElement('div');
        rowEl.className = 'card-picker-row';
        // Set row height to accommodate arc + card height
        rowEl.style.height = (cardW * 1.6 + arcHeight + 10) + 'px';
        
        // Calculate positioning based on THIS row's card count
        const rowCount = rowCards.length;
        const totalW = cardW + (rowCount - 1) * mobileOverlap;
        const startX = -totalW / 2 + cardW / 2;
        
        rowCards.forEach((card, i) => {
            const cardEl = createPickerCard(card, globalIndex, cardW);
            
            // Calculate position for this row's cards
            const xPos = startX + i * mobileOverlap;
            const progress = rowCount > 1 ? i / (rowCount - 1) : 0.5;
            const arcY = -Math.sin(progress * Math.PI) * arcHeight;
            const rotation = (progress - 0.5) * maxRotation * 2;
            
            // Set CSS custom properties (transform is composed in CSS)
            cardEl.style.setProperty('--x', `${xPos}px`);
            cardEl.style.setProperty('--y', `${arcY}px`);
            cardEl.style.setProperty('--rot', `${rotation}deg`);
            // Rightmost card on top (higher index = higher z-index)
            cardEl.style.zIndex = i;
            
            // Store reference for navigation
            pickerAllCards.push({ element: cardEl, card: card, globalIndex: globalIndex });
            
            rowEl.appendChild(cardEl);
            globalIndex++;
        });
        
        innerWrapper.appendChild(rowEl);
    });
    
    cardsContainer.appendChild(innerWrapper);
}

function createPickerCard(card, index, cardW) {
    const el = document.createElement('div');
    el.className = 'card-picker-card';
    el.dataset.cardId = card.id;
    el.dataset.globalIndex = index;
    
    // Set size explicitly (same as dock cards)
    el.style.width = cardW + 'px';
    el.style.height = (cardW * 1.6) + 'px';
    
    el.innerHTML = `<div class="card-picker-card-back"></div>`;
    
    // Touch handling is done at the container level for scrub selection
    // But we still need click for desktop fallback
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        // On desktop, click to focus, click again to select
        if (pickerFocusedIndex === index) {
            confirmPickerSelection();
        } else {
            focusPickerCard(index);
        }
    });
    
    return el;
}

// ============================================
// PICKER SCRUB SELECTION (press and slide)
// ============================================

let pickerScrubMode = false;
let pickerScrubTimer = null;
let pickerScrubStartX = 0;
let pickerScrubStartY = 0;
let stickyCardCenterX = 0;
let stickyCardCenterY = 0;
const SCRUB_INITIATE_DELAY = 150; // ms before scrub mode activates
const STICKY_ZONE_RADIUS = 25; // px - must move this far from card center to switch

function initPickerScrubSelection(modal) {
    const cardsContainer = modal.querySelector('.card-picker-cards');
    if (!cardsContainer) return;
    
    cardsContainer.addEventListener('touchstart', handlePickerTouchStart, { passive: false });
    cardsContainer.addEventListener('touchmove', handlePickerTouchMove, { passive: false });
    cardsContainer.addEventListener('touchend', handlePickerTouchEnd);
    cardsContainer.addEventListener('touchcancel', handlePickerTouchCancel);
}

function handlePickerTouchStart(e) {
    if (e.touches.length !== 1) return;
    
    const touch = e.touches[0];
    pickerScrubStartX = touch.clientX;
    pickerScrubStartY = touch.clientY;
    
    // Start timer to initiate scrub mode
    pickerScrubTimer = setTimeout(() => {
        pickerScrubMode = true;
        // Hide nav bar during scrub
        hidePickerNav();
        // Lift card under finger
        updateScrubSelection(touch.clientX, touch.clientY, true); // force update on first touch
        triggerHaptic('light');
    }, SCRUB_INITIATE_DELAY);
}

function handlePickerTouchMove(e) {
    if (e.touches.length !== 1) return;
    
    const touch = e.touches[0];
    
    if (pickerScrubMode) {
        // In scrub mode - update selection based on finger position
        e.preventDefault(); // Prevent scrolling while scrubbing
        updateScrubSelection(touch.clientX, touch.clientY, false);
    } else if (pickerScrubTimer) {
        // Not yet in scrub mode - check if moved too much (allow some tolerance)
        const dx = Math.abs(touch.clientX - pickerScrubStartX);
        const dy = Math.abs(touch.clientY - pickerScrubStartY);
        
        // If moved significantly before timer, cancel (user is scrolling)
        if (dy > 15) {
            clearTimeout(pickerScrubTimer);
            pickerScrubTimer = null;
        }
    }
}

function handlePickerTouchEnd(e) {
    if (pickerScrubTimer) {
        clearTimeout(pickerScrubTimer);
        pickerScrubTimer = null;
    }
    
    if (pickerScrubMode) {
        pickerScrubMode = false;
        
        // Show nav bar for confirmation (don't auto-select)
        if (pickerFocusedIndex >= 0) {
            showPickerNav();
            updatePickerNavButtons();
        }
    }
}

function handlePickerTouchCancel() {
    if (pickerScrubTimer) {
        clearTimeout(pickerScrubTimer);
        pickerScrubTimer = null;
    }
    
    if (pickerScrubMode) {
        pickerScrubMode = false;
        // Unfocus without selecting
        deselectPickerCard();
    }
}

function updateScrubSelection(clientX, clientY, forceUpdate) {
    // Check if we're still within the sticky zone of the current card
    if (!forceUpdate && pickerFocusedIndex >= 0) {
        const distFromSticky = Math.sqrt(
            Math.pow(clientX - stickyCardCenterX, 2) + 
            Math.pow(clientY - stickyCardCenterY, 2)
        );
        
        if (distFromSticky < STICKY_ZONE_RADIUS) {
            // Still in sticky zone, don't switch
            return;
        }
    }
    
    // Find which card is under the finger
    // Temporarily hide pointer-events on current focused card to look beneath
    const currentFocused = pickerFocusedIndex >= 0 ? pickerAllCards[pickerFocusedIndex]?.element : null;
    if (currentFocused) {
        currentFocused.style.pointerEvents = 'none';
    }
    
    const elementUnderFinger = document.elementFromPoint(clientX, clientY);
    
    if (currentFocused) {
        currentFocused.style.pointerEvents = '';
    }
    
    // Check if it's a picker card
    const cardEl = elementUnderFinger?.closest('.card-picker-card');
    
    if (cardEl) {
        const index = parseInt(cardEl.dataset.globalIndex, 10);
        if (index !== pickerFocusedIndex && !isNaN(index)) {
            focusPickerCardSilent(index);
            
            // Update sticky zone center to new card's center
            const cardRect = cardEl.getBoundingClientRect();
            stickyCardCenterX = cardRect.left + cardRect.width / 2;
            stickyCardCenterY = cardRect.top + cardRect.height / 2;
            
            triggerHaptic('light');
        }
    } else {
        // Finger is in gap - unfocus all and reset sticky zone
        if (pickerFocusedIndex >= 0) {
            unfocusCurrentCard();
            stickyCardCenterX = 0;
            stickyCardCenterY = 0;
        }
    }
}

function focusPickerCardSilent(index) {
    // Focus card without showing nav bar (used during scrub)
    if (pickerFocusedIndex >= 0 && pickerAllCards[pickerFocusedIndex]) {
        pickerAllCards[pickerFocusedIndex].element.classList.remove('focused');
    }
    
    pickerFocusedIndex = index;
    
    if (index >= 0 && pickerAllCards[index]) {
        pickerAllCards[index].element.classList.add('focused');
    }
}

function unfocusCurrentCard() {
    if (pickerFocusedIndex >= 0 && pickerAllCards[pickerFocusedIndex]) {
        pickerAllCards[pickerFocusedIndex].element.classList.remove('focused');
    }
    pickerFocusedIndex = -1;
}

function focusPickerCard(index) {
    // Remove focus from previous card
    if (pickerFocusedIndex >= 0 && pickerAllCards[pickerFocusedIndex]) {
        pickerAllCards[pickerFocusedIndex].element.classList.remove('focused');
    }
    
    // Set new focus
    pickerFocusedIndex = index;
    
    if (index >= 0 && pickerAllCards[index]) {
        pickerAllCards[index].element.classList.add('focused');
        triggerHaptic('light');
        
        // Scroll the focused card into view if needed
        const cardEl = pickerAllCards[index].element;
        const row = cardEl.closest('.card-picker-row');
        if (row) {
            row.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Show nav bar
        showPickerNav();
    }
    
    updatePickerNavButtons();
}

function deselectPickerCard() {
    if (pickerFocusedIndex >= 0 && pickerAllCards[pickerFocusedIndex]) {
        pickerAllCards[pickerFocusedIndex].element.classList.remove('focused');
    }
    pickerFocusedIndex = -1;
    hidePickerNav();
    triggerHaptic('light');
}

function showPickerNav() {
    const nav = cardPickerModal?.querySelector('#pickerNav');
    if (nav) nav.classList.add('visible');
    if (cardPickerModal) cardPickerModal.classList.add('nav-visible');
}

function hidePickerNav() {
    const nav = cardPickerModal?.querySelector('#pickerNav');
    if (nav) nav.classList.remove('visible');
    if (cardPickerModal) cardPickerModal.classList.remove('nav-visible');
}

function confirmPickerSelection() {
    if (pickerFocusedIndex >= 0 && pickerAllCards[pickerFocusedIndex]) {
        const { card } = pickerAllCards[pickerFocusedIndex];
        selectCardFromPicker(card, pickerFocusedIndex);
    }
}

function updatePickerNavButtons() {
    const prevBtn = cardPickerModal?.querySelector('#pickerPrevBtn');
    const nextBtn = cardPickerModal?.querySelector('#pickerNextBtn');
    
    if (!prevBtn || !nextBtn) return;
    
    const hasFocus = pickerFocusedIndex >= 0;
    const canGoPrev = hasFocus && pickerFocusedIndex > 0;
    const canGoNext = hasFocus && pickerFocusedIndex < pickerAllCards.length - 1;
    
    prevBtn.disabled = !canGoPrev;
    nextBtn.disabled = !canGoNext;
}

function setupPickerNavigation(modal) {
    const prevBtn = modal.querySelector('#pickerPrevBtn');
    const nextBtn = modal.querySelector('#pickerNextBtn');
    const selectBtn = modal.querySelector('#pickerSelectBtn');
    
    prevBtn.addEventListener('click', () => {
        if (pickerFocusedIndex > 0) {
            focusPickerCard(pickerFocusedIndex - 1);
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (pickerFocusedIndex < pickerAllCards.length - 1) {
            focusPickerCard(pickerFocusedIndex + 1);
        }
    });
    
    selectBtn.addEventListener('click', () => {
        confirmPickerSelection();
    });
}

function selectCardFromPicker(card, index) {
    triggerHaptic('medium');
    closeCardPickerModal();
    
    // Remove the selected card from the deck array
    deck = deck.filter(c => c.id !== card.id);
    
    // Re-render the deck (will show remaining cards at full opacity)
    renderDeck();
    
    // If in mobile spread guided mode, place directly in active slot
    if (mobileSpreadMode) {
        placeCardInActiveSlot(card);
        updateDevPanel();
        return;
    }
    
    // Create a staged card element
    const selectedEl = document.createElement('div');
    selectedEl.className = 'card card-staged';
    selectedEl.dataset.cardId = card.id;
    selectedEl.dataset.index = index;
    selectedEl.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">${getCardFrontContent(card)}</div>
        <div class="dev-label">${card.id}</div>
    `;
    
    if (isMobileView()) {
        // Mobile: append to body, position via JS
        document.body.appendChild(selectedEl);
        
        // Calculate staged position: centered horizontally, overlapping dock
        const deckRect = deckContainer.getBoundingClientRect();
        const cardHeight = selectedEl.offsetHeight || 90; // fallback if not yet rendered
        
        // Position: horizontally centered, vertically so bottom of card overlaps top of dock
        const stagedX = window.innerWidth / 2;
        const stagedY = deckRect.top - (cardHeight * 0.3); // 30% overlap with deck
        
        // Store staged position for return-to-staged behavior
        selectedEl.stagedX = stagedX;
        selectedEl.stagedY = stagedY;
        
        // Apply position and transform
        selectedEl.style.left = stagedX + 'px';
        selectedEl.style.top = stagedY + 'px';
        selectedEl.style.transform = 'translate(-50%, -50%) scale(1.15)';
        
        // Add floating animation class
        selectedEl.classList.add('floating');
        
        // Add dedicated touch handler for staged card drag
        selectedEl.addEventListener('touchstart', handleStagedCardTouch, { passive: false });
    } else {
        // Desktop: append to deck container
        selectedEl.style.left = '50%';
        selectedEl.style.top = '50%';
        deckContainer.appendChild(selectedEl);
        selectedEl.addEventListener('mousedown', startDrag);
    }
    
    // Store reference
    stagedCard = selectedEl;
    stagedCard.dataset.deckIndex = index;
    
    // Store the card data for when it's placed
    stagedCard.cardData = card;
    
    updateDevPanel();
}

function closeCardPickerModal() {
    if (cardPickerModal) {
        cardPickerModal.classList.remove('open');
    }
}

// Mobile staged card touch handling - dedicated handler for clean drag behavior
function handleStagedCardTouch(e) {
    if (!stagedCard) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const rect = stagedCard.getBoundingClientRect();
    
    // Calculate offset from touch point to card center
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const offsetX = touch.clientX - cardCenterX;
    const offsetY = touch.clientY - cardCenterY;
    
    // Switch from floating to dragging state
    stagedCard.classList.remove('floating');
    stagedCard.classList.add('dragging');
    
    // Keep scale during drag
    stagedCard.style.transform = 'translate(-50%, -50%) scale(1.15)';
    
    function onTouchMove(e) {
        if (!stagedCard) return;
        e.preventDefault();
        
        const touch = e.touches[0];
        // Move card to follow finger, accounting for initial offset
        const newX = touch.clientX - offsetX;
        const newY = touch.clientY - offsetY;
        
        stagedCard.style.left = newX + 'px';
        stagedCard.style.top = newY + 'px';
    }
    
    function onTouchEnd(e) {
        if (!stagedCard) return;
        
        const touch = e.changedTouches[0];
        const surfaceRect = readingSurface.getBoundingClientRect();
        
        // Check if released over reading surface
        const releasedOnSurface = 
            touch.clientX >= surfaceRect.left && 
            touch.clientX <= surfaceRect.right &&
            touch.clientY >= surfaceRect.top && 
            touch.clientY <= surfaceRect.bottom;
        
        if (releasedOnSurface) {
            // Place the card
            const contentRect = readingSurfaceContent.getBoundingClientRect();
            const x = (touch.clientX - contentRect.left) / currentZoom;
            const y = (touch.clientY - contentRect.top) / currentZoom;
            
            // Convert to percentages
            const percentX = (x / (contentRect.width / currentZoom)) * 100;
            const percentY = (y / (contentRect.height / currentZoom)) * 100;
            
            placeStagedCard(percentX, percentY);
        } else {
            // Return to staged position
            returnToStagedPosition();
        }
        
        // Clean up listeners
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onTouchEnd);
    }
    
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
}

function returnToStagedPosition() {
    if (!stagedCard) return;
    
    // Return to stored staged position
    stagedCard.style.left = stagedCard.stagedX + 'px';
    stagedCard.style.top = stagedCard.stagedY + 'px';
    stagedCard.style.transform = 'translate(-50%, -50%) scale(1.15)';
    
    // Switch back to floating state
    stagedCard.classList.remove('dragging');
    stagedCard.classList.add('floating');
    
    triggerHaptic('light');
}

function handleDeckTouchStart(e) {
    // If there's already a staged card on mobile, ignore taps on deck cards
    // (staged card has its own handler: handleStagedCardTouch)
    if (stagedCard && isMobileView()) {
        e.preventDefault();
        return;
    }
    
    // On desktop-sized screens, use normal drag
    if (!isMobileView()) {
        startDrag(e);
        return;
    }
    
    // On mobile, tap opens the card picker modal
    e.preventDefault();
    openCardPickerModal();
}

function cancelStagedCard() {
    if (!stagedCard) return;
    
    // Re-add the card to the deck if we have its data
    if (stagedCard.cardData) {
        deck.push(stagedCard.cardData);
    }
    
    // Remove the staged card element from DOM (it was dynamically created)
    stagedCard.remove();
    stagedCard = null;
    
    // Re-render deck to show the returned card
    renderDeck();
    updateDevPanel();
}

// Tap on deck area (not on a card) to cancel staged card
document.querySelector('.deck-area').addEventListener('touchstart', e => {
    if (!stagedCard) return;
    
    // If tapping directly on the deck area (not on a card), cancel
    if (!e.target.closest('.card')) {
        e.preventDefault();
        triggerHaptic('light');
        cancelStagedCard();
    }
}, { passive: false });

function startDrag(e) {
    if (e.target.closest('.placed-card.flipped')) return;
    e.preventDefault();
    const el = e.target.closest('.card');
    if (!el) return;

    draggedCard = el;
    
    // Get current visual position before changing anything
    const rect = el.getBoundingClientRect();
    
    // Add dragging classes to disable hover effects and keep deck visible
    draggedCard.classList.add('dragging');
    deckContainer.classList.add('dragging-active');
    deckContainer.closest('.deck-area').classList.add('dragging-active');
    
    // Store original styles to calculate position
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Move card to body to escape clip-path on deck-container
    document.body.appendChild(draggedCard);
    
    // Apply fixed positioning
    draggedCard.style.position = 'fixed';
    draggedCard.style.left = centerX + 'px';
    draggedCard.style.top = centerY + 'px';
    draggedCard.style.transform = 'translate(-50%, -50%)';
    draggedCard.style.zIndex = '10000';

    const cx = e.clientX || e.touches[0].clientX;
    const cy = e.clientY || e.touches[0].clientY;
    dragOffset.x = cx - centerX;
    dragOffset.y = cy - centerY;

    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchmove', drag, { passive: false });
    document.addEventListener('touchend', endDrag);
}

function drag(e) {
    if (!draggedCard) return;
    e.preventDefault();
    const cx = e.clientX || e.touches[0].clientX;
    const cy = e.clientY || e.touches[0].clientY;
    draggedCard.style.left = (cx - dragOffset.x) + 'px';
    draggedCard.style.top = (cy - dragOffset.y) + 'px';
}

function endDrag(e) {
    if (!draggedCard) return;
    const cx = e.clientX || (e.changedTouches && e.changedTouches[0].clientX);
    const cy = e.clientY || (e.changedTouches && e.changedTouches[0].clientY);
    const surfaceRect = readingSurface.getBoundingClientRect();
    
    const droppedOnSurface = cx >= surfaceRect.left && cx <= surfaceRect.right && 
                             cy >= surfaceRect.top && cy <= surfaceRect.bottom;

    // Remove dragging state from container
    deckContainer.classList.remove('dragging-active');
    deckContainer.closest('.deck-area').classList.remove('dragging-active');

    if (droppedOnSurface) {
        const cardId = draggedCard.dataset.cardId;
        // For staged cards from picker, cardData is stored on the element
        // For regular deck cards, find it in the deck array
        const cardData = draggedCard.cardData || deck.find(c => c.id === cardId);
        if (cardData) {
            // Calculate position relative to the content (accounting for zoom/pan)
            // The content is transformed with translate(panX, panY) scale(currentZoom)
            const contentRect = readingSurfaceContent.getBoundingClientRect();
            
            // Get cursor position relative to the transformed content
            const relX = cx - contentRect.left;
            const relY = cy - contentRect.top;
            
            // Convert to unscaled coordinates (the content's internal coordinate system)
            // Since content uses transform-origin: center, and we're placing with percentages,
            // we need the position relative to the content's actual size
            placeCard(cardData, relX / currentZoom, relY / currentZoom);
            
            // Only filter from deck if it wasn't already removed (staged cards are pre-removed)
            if (!draggedCard.cardData) {
                deck = deck.filter(c => c.id !== cardId);
            }
            
            // Clear staged card reference if this was the staged card
            if (draggedCard === stagedCard) {
                stagedCard = null;
            }
            
            draggedCard.remove();
            updateDevPanel();
        }
    } else {
        // If this was a staged card, return it to floating position
        if (draggedCard.classList.contains('card-staged')) {
            draggedCard.classList.remove('dragging');
            // On mobile, it stays in body with fixed positioning via CSS
            // Just remove the dragging class and let CSS handle it
        } else {
            // Return regular card to deck container
            draggedCard.classList.remove('dragging');
            draggedCard.style.position = '';
            draggedCard.style.left = '50%';
            draggedCard.style.top = '50%';
            draggedCard.style.zIndex = draggedCard.dataset.index;
            const xPos = draggedCard.style.getPropertyValue('--base-x') || '0px';
            draggedCard.style.transform = `translate(-50%, -50%) translateX(${xPos})`;
            // Move back to deck container
            deckContainer.appendChild(draggedCard);
        }
    }

    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', endDrag);
    document.removeEventListener('touchmove', drag);
    document.removeEventListener('touchend', endDrag);
    draggedCard = null;
}

function placeCard(card, x, y) {
    const el = document.createElement('div');
    el.className = 'placed-card card';
    el.dataset.cardId = card.id;
    
    // Store position as percentage for responsive scaling
    // Use the surface dimensions (not content, since content is scaled)
    const surfaceRect = readingSurface.getBoundingClientRect();
    let percentX = (x / surfaceRect.width) * 100;
    let percentY = (y / surfaceRect.height) * 100;
    
    // Check for nearby spread slot and snap to it
    const nearestSlot = findNearestSlot(percentX, percentY);
    if (nearestSlot) {
        percentX = nearestSlot.position.percentX;
        percentY = nearestSlot.position.percentY;
        // Store position name for AI context
        el.dataset.positionName = nearestSlot.position.name;
    }

    el.style.left = percentX + '%';
    el.style.top = percentY + '%';
    el.dataset.percentX = percentX;
    el.dataset.percentY = percentY;
    
    el.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">${getCardFrontContent(card)}</div>
        <div class="dev-label">${card.id}</div>
    `;
    
    addPlacedCardHandlers(el, card);
    
    readingSurfaceContent.appendChild(el);
    placedCards.push({ card, element: el });
    
    // Hide "Drag cards here" text and dock the deck after first card
    readingSurface.classList.add('has-cards');
    document.querySelector('.deck-area').classList.add('docked');
    
    // Update spread slots filled state
    updateSpreadSlotsFilled();
    clearSlotHighlights();
    
    // Auto-save
    saveCurrentReading();
}

function addPlacedCardHandlers(el, card) {
    // Time-based click vs drag detection
    let mouseDownTime = 0;
    let hasMoved = false;
    let hasLiftedToBody = false;
    // Track cursor offset from card center to prevent jumping
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    // Store initial position for drag detection
    let startX = 0;
    let startY = 0;
    
    const DRAG_THRESHOLD = 5; // pixels before considered a drag
    
    // Helper to get coordinates
    function getEventCoords(e, forEnd = false) {
        if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        if (forEnd && e.changedTouches?.[0]) return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
        return { x: e.clientX, y: e.clientY };
    }
    
    // Initialize drag tracking (but don't move to body yet)
    function initDrag(coords) {
        mouseDownTime = Date.now();
        hasMoved = false;
        hasLiftedToBody = false;
        startX = coords.x;
        startY = coords.y;
        
        // Calculate center of card on screen
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate offset from cursor to center
        dragOffsetX = coords.x - centerX;
        dragOffsetY = coords.y - centerY;
    }
    
    // Actually lift card to body (called when drag threshold exceeded)
    function liftToBody() {
        if (hasLiftedToBody) return;
        hasLiftedToBody = true;
        
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Move element to body so it isn't clipped by reading-surface
        document.body.appendChild(el);
        el.style.position = 'fixed';
        el.style.zIndex = '10000';
        
        // Set position to current screen coordinates
        el.style.left = centerX + 'px';
        el.style.top = centerY + 'px';
        
        // Maintain visual scale and rotation
        let transform = `translate(-50%, -50%) scale(${currentZoom})`;
        if (el.classList.contains('flipped')) {
            transform += ' rotateY(180deg)';
            if (el.classList.contains('reversed')) transform += ' rotate(180deg)';
        }
        el.style.transform = transform;
        
        el.classList.add('dragging');
    }
    
    // Shared: Handle move during drag
    function handleMove(coords) {
        const dx = Math.abs(coords.x - startX);
        const dy = Math.abs(coords.y - startY);
        
        // Check if we've exceeded drag threshold
        if (dx > DRAG_THRESHOLD || dy > DRAG_THRESHOLD) {
            if (!hasLiftedToBody) {
                liftToBody();
            }
            hasMoved = true;
            
            // Move based on screen coordinates (minus offset to keep cursor relative)
            el.style.left = (coords.x - dragOffsetX) + 'px';
            el.style.top = (coords.y - dragOffsetY) + 'px';
            
            // Highlight nearest slot
            const surfaceRect = readingSurface.getBoundingClientRect();
            const percentX = ((coords.x - surfaceRect.left) / surfaceRect.width) * 100;
            const percentY = ((coords.y - surfaceRect.top) / surfaceRect.height) * 100;
            highlightNearestSlot(percentX, percentY);
        }
    }
    
    // Shared: Handle end of interaction
    function handleEnd(coords) {
        clearSlotHighlights();
        
        if (hasMoved && coords && hasLiftedToBody) {
            // Check if dropped on deck
            const deckRect = document.querySelector('.deck-area').getBoundingClientRect();
            if (coords.x >= deckRect.left && coords.x <= deckRect.right && 
                coords.y >= deckRect.top && coords.y <= deckRect.bottom) {
                returnCardToDeck(card, el);
                return;
            }
            
            // If dropped back on surface, put it back in the container
            readingSurfaceContent.appendChild(el);
            el.style.position = 'absolute';
            el.classList.remove('dragging');
            el.style.zIndex = '';
            el.style.transform = '';
            
            // Calculate new percentage position
            const contentRect = readingSurfaceContent.getBoundingClientRect();
            const relX = (coords.x - dragOffsetX - contentRect.left) / currentZoom;
            const relY = (coords.y - dragOffsetY - contentRect.top) / currentZoom;
            
            const surfaceRect = readingSurface.getBoundingClientRect();
            let newPercentX = (relX / surfaceRect.width) * 100;
            let newPercentY = (relY / surfaceRect.height) * 100;

            const nearestSlot = findNearestSlot(newPercentX, newPercentY);
            if (nearestSlot) {
                newPercentX = nearestSlot.position.percentX;
                newPercentY = nearestSlot.position.percentY;
                // Store position name for AI context
                el.dataset.positionName = nearestSlot.position.name;
            } else {
                // Clear position name if not snapped to a slot
                delete el.dataset.positionName;
            }

            el.style.left = newPercentX + '%';
            el.style.top = newPercentY + '%';
            el.dataset.percentX = newPercentX;
            el.dataset.percentY = newPercentY;
            
            updateSpreadSlotsFilled();
            saveCurrentReading();
        } else if (hasLiftedToBody) {
            // Was lifted but didn't move far - put back
            readingSurfaceContent.appendChild(el);
            el.style.position = 'absolute';
            el.style.transform = '';
            el.classList.remove('dragging');
            el.style.zIndex = '';
            el.style.left = el.dataset.percentX + '%';
            el.style.top = el.dataset.percentY + '%';
        }
        // If never lifted to body, card is still in place - no cleanup needed
        
        // Click action (Flip/Modal) - only if quick and didn't move
        const elapsed = Date.now() - mouseDownTime;
        if (elapsed < 200 && !hasMoved) {
            if (!el.classList.contains('flipped') && !el.classList.contains('flipping')) {
                const willReverse = reversalsEnabled && Math.random() < 0.5;
                el.classList.add('flipping');
                if (willReverse) el.classList.add('will-reverse');
                
                setTimeout(() => {
                    el.classList.remove('flipping', 'will-reverse');
                    el.classList.add('flipped', 'just-flipped');
                    if (willReverse) el.classList.add('reversed');
                    saveCurrentReading();
                    
                    // Remove just-flipped after transition can settle
                    setTimeout(() => {
                        el.classList.remove('just-flipped');
                    }, 50);
                }, 600);
            } else if (el.classList.contains('flipped')) {
                el.classList.add('lifting');
                setTimeout(() => {
                    showCardModal(card, el.classList.contains('reversed'), el);
                    setTimeout(() => {
                        el.classList.remove('lifting');
                    }, 100);
                }, 200);
            }
        }
    }
    
    // Mouse events
    el.addEventListener('mousedown', e => {
        e.preventDefault();
        initDrag(getEventCoords(e));
        
        const onMove = e => handleMove(getEventCoords(e));
        const onUp = e => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            handleEnd(getEventCoords(e));
        };
        
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    });
    
    // Touch events
    el.addEventListener('touchstart', e => {
        initDrag(getEventCoords(e));
        
        const onMove = e => handleMove(getEventCoords(e));
        const onEnd = e => {
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onEnd);
            const coords = e.changedTouches?.[0] ? { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY } : null;
            handleEnd(coords);
        };
        
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('touchend', onEnd);
    }, { passive: false });
}

function returnCardToDeck(card, element) {
    // Remove from placed cards
    placedCards = placedCards.filter(p => p.card.id !== card.id);
    element.remove();
    
    // Add back to deck
    deck.push(card);
    
    // Re-render deck to include returned card
    renderDeck();
    updateDevPanel();
    
    // Update spread slots filled state
    updateSpreadSlotsFilled();
    
    // Auto-save (or clear if no cards left)
    saveCurrentReading();
    
    // Show drag text if no cards left
    if (placedCards.length === 0) {
        readingSurface.classList.remove('has-cards');
    }
}

function showCardModal(card, isReversed = false, cardElement = null) {
    const modalCard = document.getElementById('modalCard');
    const modalPositionTitle = document.getElementById('modalPositionTitle');
    
    modalCard.innerHTML = getModalContent(card);
    if (isReversed) {
        modalCard.classList.add('reversed');
    } else {
        modalCard.classList.remove('reversed');
    }
    
    // Find spread position if applicable
    let positionName = null;
    let positionPrompt = null;
    if (cardElement && currentSpread) {
        const cardX = parseFloat(cardElement.dataset.percentX);
        const cardY = parseFloat(cardElement.dataset.percentY);
        const matchingPos = currentSpread.positions.find(pos => 
            Math.abs(cardX - pos.percentX) < 3 && Math.abs(cardY - pos.percentY) < 3
        );
        if (matchingPos) {
            positionName = matchingPos.name;
            positionPrompt = matchingPos.prompt;
        }
    }
    
    // Show position title and prompt if found
    if (positionName) {
        let positionHtml = `<span class="position-name">${positionName}</span>`;
        if (positionPrompt) {
            positionHtml += `<span class="position-prompt">${positionPrompt}</span>`;
        }
        modalPositionTitle.innerHTML = positionHtml;
        modalPositionTitle.style.display = 'block';
    } else {
        modalPositionTitle.style.display = 'none';
    }
    
    document.getElementById('modalTitle').textContent = card.name + (isReversed ? ' (Reversed)' : '');
    document.getElementById('modalSubtitle').textContent = card.arcana + ' Arcana' + (card.suit ? ' · ' + card.suit : '');
    
    // Populate meanings
    const meanings = TAROT_MEANINGS[card.id];
    if (meanings) {
        document.getElementById('keywordsUpright').textContent = meanings.keywords.upright.join(' · ');
        document.getElementById('keywordsReversed').textContent = meanings.keywords.reversed.join(' · ');
        document.getElementById('meaningText').textContent = isReversed ? meanings.reversed : meanings.upright;
        document.getElementById('modalMeanings').style.display = 'block';
        
        // Highlight active orientation
        document.querySelector('.keywords-upright').classList.toggle('active', !isReversed);
        document.querySelector('.keywords-reversed').classList.toggle('active', isReversed);
        
        // Reset meanings toggle state (collapsed by default)
        document.getElementById('meaningsToggle').classList.remove('expanded');
        document.getElementById('meaningsContent').classList.remove('expanded');
    } else {
        document.getElementById('modalMeanings').style.display = 'none';
    }
    
    cardModal.classList.add('active');
}

// Meanings toggle
document.getElementById('meaningsToggle').addEventListener('click', () => {
    document.getElementById('meaningsToggle').classList.toggle('expanded');
    document.getElementById('meaningsContent').classList.toggle('expanded');
});

modalClose.addEventListener('click', () => cardModal.classList.remove('active'));
cardModal.addEventListener('click', e => { if (e.target === cardModal) cardModal.classList.remove('active'); });

// Shuffle with swirl
shuffleBtn.addEventListener('click', () => {
    const cards = deckContainer.querySelectorAll('.card');
    if (cards.length === 0) return;
    shuffleBtn.disabled = true;
    
    const isMobile = isMobileView();

    // Phase 1: Scatter
    cards.forEach(card => {
        card.classList.add('shuffling');
        const rx = (Math.random() - 0.5) * 320;
        const ry = (Math.random() - 0.5) * 50;
        const rr = (Math.random() - 0.5) * 400;
        card.style.transform = `translate(-50%, -50%) translateX(${rx}px) translateY(${ry}px) rotate(${rr}deg)`;
        card.style.zIndex = Math.floor(Math.random() * 100);
    });

    // Phase 2: More chaos
    setTimeout(() => {
        cards.forEach(card => {
            const rx = (Math.random() - 0.5) * 280;
            const ry = (Math.random() - 0.5) * 40;
            const rr = (Math.random() - 0.5) * 300;
            card.style.transform = `translate(-50%, -50%) translateX(${rx}px) translateY(${ry}px) rotate(${rr}deg)`;
        });
    }, 300);

    // Phase 3: Shuffle data (always shuffle the real deck)
    setTimeout(() => { deck = shuffleArray(deck); }, 600);

    // Phase 4: Settle
    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('shuffling');
            card.classList.add('settling');
        });
        
        if (isMobile) {
            // Mobile: Animate dummy cards back to their fixed positions
            renderMobileDummyDeckAnimated();
        } else {
            // Desktop: Animate real cards to new positions
            renderDeckAnimated();
        }
        updateDevPanel();
    }, 800);

    // Cleanup
    setTimeout(() => {
        deckContainer.querySelectorAll('.card').forEach(c => c.classList.remove('settling'));
        shuffleBtn.disabled = false;
    }, 1500);
});

// Animated version for mobile dummy deck (cards return to fixed positions)
function renderMobileDummyDeckAnimated() {
    const { cardW, overlap } = getCardDimensions();
    const cards = deckContainer.querySelectorAll('.card');
    
    const arcHeight = 20;
    const maxRotation = 15;
    const mobileOverlap = Math.min(overlap * 1.1, cardW * 0.6);
    
    const totalW = cardW + (MOBILE_DUMMY_CARD_COUNT - 1) * mobileOverlap;
    const startX = -totalW / 2 + cardW / 2;
    
    cards.forEach((el, i) => {
        const xPos = startX + i * mobileOverlap;
        const progress = i / (MOBILE_DUMMY_CARD_COUNT - 1);
        const arcY = -Math.sin(progress * Math.PI) * arcHeight;
        const rotation = (progress - 0.5) * maxRotation * 2;
        
        el.style.top = '30%';
        el.style.transform = `translate(-50%, -50%) translateX(${xPos}px) translateY(${arcY}px) rotate(${rotation}deg)`;
        el.style.setProperty('--base-x', `${xPos}px`);
        el.style.setProperty('--base-y', `${arcY}px`);
        el.style.setProperty('--base-rot', `${rotation}deg`);
        el.style.zIndex = i;
    });
}

function renderDeckAnimated() {
    const { cardW, overlap } = getCardDimensions();
    const cardMap = {};
    deckContainer.querySelectorAll('.card').forEach(c => { cardMap[c.dataset.cardId] = c; });

    applyDeckLayout(deck, cardW, overlap, (card, index, pos) => {
        const el = cardMap[card.id];
        if (el) {
            el.style.top = pos.top;
            el.style.transform = `translate(-50%, -50%) translateX(${pos.xPos}px)${pos.arcY ? ` translateY(${pos.arcY}px)` : ''}${pos.rotation ? ` rotate(${pos.rotation}deg)` : ''}`;
            el.style.setProperty('--base-x', `${pos.xPos}px`);
            if (pos.arcY) el.style.setProperty('--base-y', `${pos.arcY}px`);
            if (pos.rotation) el.style.setProperty('--base-rot', `${pos.rotation}deg`);
            el.style.zIndex = index;
            el.dataset.index = index;
        }
    });
}

// Reset
resetBtn.addEventListener('click', () => {
    // Clear placed cards and text boxes but keep Aa button
    placedCards.forEach(p => p.element.remove());
    textBoxes.forEach(tb => tb.element.remove());
    placedCards = [];
    textBoxes = [];
    textBoxIdCounter = 0;
    readingSurface.classList.remove('has-cards');
    document.querySelector('.deck-area').classList.remove('docked');
    currentReadingId = null;
    
    // Clear spread
    currentSpread = null;
    clearSpreadSlots();
    hideSpreadReference();
    
    // Reset zoom/pan
    resetZoom();
    
    localStorage.removeItem(STORAGE_KEYS.CURRENT_READING);
    initializeDeck();
});

// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileShuffleBtn = document.getElementById('mobileShuffleBtn');
const mobileResetBtn = document.getElementById('mobileResetBtn');
const mobileReversalsBtn = document.getElementById('mobileReversalsBtn');
const mobileSpreadBtn = document.getElementById('mobileSpreadBtn');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
    }
});

// Mobile menu actions - trigger the same handlers as desktop buttons
mobileShuffleBtn.addEventListener('click', () => {
    shuffleBtn.click();
    mobileMenu.classList.remove('open');
});

mobileResetBtn.addEventListener('click', () => {
    resetBtn.click();
    mobileMenu.classList.remove('open');
});

mobileReversalsBtn.addEventListener('click', () => {
    reversalsToggle.click();
    // Update active state on mobile button
    mobileReversalsBtn.classList.toggle('active', reversalsToggle.classList.contains('active'));
    mobileMenu.classList.remove('open');
});

mobileSpreadBtn.addEventListener('click', () => {
    spreadBtn.click();
    mobileMenu.classList.remove('open');
});

// Sync reversals state on load
if (reversalsToggle.classList.contains('active')) {
    mobileReversalsBtn.classList.add('active');
}

// Reversals toggle
reversalsToggle.addEventListener('click', () => {
    reversalsToggle.classList.toggle('active');
    reversalsEnabled = reversalsToggle.classList.contains('active');
    savePreferences();
});

// Dev toggle
devToggle.addEventListener('click', () => {
    devToggle.classList.toggle('active');
    document.body.classList.toggle('dev-mode', devToggle.classList.contains('active'));
    savePreferences();
});

// Theme toggle
function updateThemeIcon(isDark) {
    const icon = document.getElementById('themeIcon');
    if (isDark) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
    }
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateThemeIcon(document.body.classList.contains('dark'));
    savePreferences();
});

// Dev panel
function updateDevPanel() {
    const all = [...deck, ...placedCards.map(p => p.card)];
    const ids = all.map(c => c.id);
    const counts = {};
    ids.forEach(id => { counts[id] = (counts[id] || 0) + 1; });

    devInfo.innerHTML = all.map(c => `<span class="${counts[c.id] > 1 ? 'duplicate' : ''}">${c.id}</span>`).join('');

    const hasDupes = Object.values(counts).some(c => c > 1);
    const unique = new Set(ids).size;

    if (!hasDupes && all.length === 78 && unique === 78) {
        validationStatus.className = 'validation-status valid';
        validationStatus.textContent = `✓ Valid: 78 unique cards (${deck.length} deck, ${placedCards.length} placed)`;
    } else {
        validationStatus.className = 'validation-status invalid';
        validationStatus.textContent = `✗ Invalid: ${unique} unique, ${all.length} total`;
    }
}

// Re-render deck on window resize (debounced)
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (deck.length > 0) {
            renderDeck();
        }
    }, 150);
});

// Init
// ============================================
// TEXT TOOL
// ============================================

let textModeActive = false;
let textBoxes = [];
let textBoxIdCounter = 0;
let activeTextBox = null;

function toggleTextMode() {
    textModeActive = !textModeActive;
    if (textToolBtn) textToolBtn.classList.toggle('active', textModeActive);
    readingSurface.classList.toggle('text-mode', textModeActive);
    
    if (!textModeActive) {
        // Deselect active text box
        if (activeTextBox) {
            deactivateTextBox(activeTextBox);
        }
    }
}

function exitTextMode() {
    if (textModeActive) {
        textModeActive = false;
        if (textToolBtn) textToolBtn.classList.remove('active');
        readingSurface.classList.remove('text-mode');
        readingSurface.classList.remove('text-mode-drawing');
        if (activeTextBox) {
            deactivateTextBox(activeTextBox);
        }
    }
}

function createTextBox(x, y, width = null, height = null, showBorder = false, initialContent = '', initialFontSize = 13, usePercent = false) {
    const id = ++textBoxIdCounter;
    const box = document.createElement('div');
    box.className = 'text-box';
    box.id = `text-box-${id}`;
    box.dataset.textBoxId = id;
    
    // Convert to percentages if not already
    // Use content's actual dimensions (not transformed) for percentage calculation
    const contentRect = readingSurfaceContent.getBoundingClientRect();
    const contentWidth = contentRect.width / currentZoom;
    const contentHeight = contentRect.height / currentZoom;
    
    let percentX, percentY;
    if (usePercent) {
        percentX = x;
        percentY = y;
    } else {
        percentX = (x / contentWidth) * 100;
        percentY = (y / contentHeight) * 100;
    }
    
    box.style.left = percentX + '%';
    box.style.top = percentY + '%';
    box.dataset.percentX = percentX;
    box.dataset.percentY = percentY;
    
    if (width && height) {
        box.style.width = width + 'px';
        box.style.height = height + 'px';
        box.classList.add('show-border');
    }
    
    box.innerHTML = `
        <div class="text-box-border"></div>
        <textarea class="text-box-content" placeholder="Start typing..." spellcheck="false">${initialContent}</textarea>
        <div class="text-box-controls">
            <button class="text-box-font-btn" data-action="increase">+</button>
            <span class="text-box-font-label">Aa</span>
            <button class="text-box-font-btn" data-action="decrease">−</button>
        </div>
        <div class="text-box-handle nw"></div>
        <div class="text-box-handle n"></div>
        <div class="text-box-handle ne"></div>
        <div class="text-box-handle e"></div>
        <div class="text-box-handle se"></div>
        <div class="text-box-handle s"></div>
        <div class="text-box-handle sw"></div>
        <div class="text-box-handle w"></div>
    `;
    
    const textarea = box.querySelector('.text-box-content');
    const fontBtns = box.querySelectorAll('.text-box-font-btn');
    const handles = box.querySelectorAll('.text-box-handle');
    
    // Auto-resize textarea height
    function autoResizeTextarea() {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
        box.style.height = 'auto';
    }
    
    let fontSize = initialFontSize;
    textarea.style.fontSize = fontSize + 'px';
    const minFontSize = 10;
    const maxFontSize = 24;
    
    // Font size controls
    fontBtns.forEach(btn => {
        btn.addEventListener('mousedown', e => e.stopPropagation());
        btn.addEventListener('click', e => {
            e.stopPropagation();
            const action = btn.dataset.action;
            if (action === 'increase' && fontSize < maxFontSize) {
                fontSize += 2;
            } else if (action === 'decrease' && fontSize > minFontSize) {
                fontSize -= 2;
            }
            textarea.style.fontSize = fontSize + 'px';
            // Update stored fontSize
            const tbData = textBoxes.find(tb => tb.element === box);
            if (tbData) tbData.fontSize = fontSize;
            saveCurrentReading();
        });
    });
    
    // Focus/blur handling
    textarea.addEventListener('focus', () => {
        activateTextBox(box);
    });
    
    textarea.addEventListener('blur', e => {
        // Small delay to allow click on controls
        setTimeout(() => {
            if (!box.contains(document.activeElement)) {
                // If empty (including just spaces), remove the box
                if (!textarea.value.trim()) {
                    removeTextBox(box);
                } else {
                    deactivateTextBox(box);
                    saveCurrentReading();
                }
            }
        }, 150);
    });
    
    // Save on input
    textarea.addEventListener('input', () => {
        autoResizeTextarea();
        saveCurrentReading();
    });
    
    // Initial auto-resize
    if (initialContent) {
        setTimeout(autoResizeTextarea, 0);
    }
    
    // Drag handling - on the box itself (padding area), not textarea
    let isDraggingBox = false;
    let dragStartX, dragStartY, boxStartPercentX, boxStartPercentY;
    
    box.addEventListener('mousedown', e => {
        // If clicking directly on the box (padding area), start drag
        // If clicking on textarea, controls, or handles, don't drag
        if (e.target === box) {
            e.preventDefault();
            e.stopPropagation();
            isDraggingBox = true;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            boxStartPercentX = parseFloat(box.dataset.percentX);
            boxStartPercentY = parseFloat(box.dataset.percentY);
            box.style.zIndex = 70;
            box.classList.add('dragging');
            
            document.addEventListener('mousemove', onDragBox);
            document.addEventListener('mouseup', onDragBoxEnd);
        }
    });
    
    function onDragBox(e) {
        if (!isDraggingBox) return;
        const surfaceRect = readingSurface.getBoundingClientRect();
        // Convert pixel delta to percentage delta, accounting for zoom
        const dx = ((e.clientX - dragStartX) / currentZoom / surfaceRect.width) * 100;
        const dy = ((e.clientY - dragStartY) / currentZoom / surfaceRect.height) * 100;
        const newPercentX = boxStartPercentX + dx;
        const newPercentY = boxStartPercentY + dy;
        box.style.left = newPercentX + '%';
        box.style.top = newPercentY + '%';
        box.dataset.percentX = newPercentX;
        box.dataset.percentY = newPercentY;
    }
    
    function onDragBoxEnd() {
        isDraggingBox = false;
        box.style.zIndex = 55;
        box.classList.remove('dragging');
        document.removeEventListener('mousemove', onDragBox);
        document.removeEventListener('mouseup', onDragBoxEnd);
        saveCurrentReading();
    }
    
    // Click on textarea focuses it
    textarea.addEventListener('mousedown', e => {
        e.stopPropagation();
        activateTextBox(box);
    });
    
    // Resize handles
    handles.forEach(handle => {
        handle.addEventListener('mousedown', e => {
            e.stopPropagation();
            e.preventDefault();
            startResize(box, handle, e);
        });
    });
    
    readingSurfaceContent.appendChild(box);
    textBoxes.push({ id, element: box, fontSize });
    
    // Auto-focus only if not restoring
    if (!initialContent) {
        textarea.focus();
        activateTextBox(box);
    }
    
    return box;
}

function restoreTextBox(savedBox) {
    const surfaceRect = readingSurface.getBoundingClientRect();
    
    let x, y, width, height, usePercent;
    
    if (savedBox.percentX !== undefined) {
        // Use percentages directly
        x = savedBox.percentX;
        y = savedBox.percentY;
        width = savedBox.percentW ? (savedBox.percentW / 100) * surfaceRect.width : null;
        height = savedBox.percentH ? (savedBox.percentH / 100) * surfaceRect.height : null;
        usePercent = true;
    } else {
        // Legacy support for pixel values
        x = savedBox.left;
        y = savedBox.top;
        width = savedBox.width;
        height = savedBox.height;
        usePercent = false;
    }
    
    const box = createTextBox(
        x,
        y,
        width,
        height,
        savedBox.showBorder,
        savedBox.content || '',
        savedBox.fontSize || 13,
        usePercent
    );
    
    if (savedBox.showBorder) {
        box.classList.add('show-border');
    }
    
    // Don't focus restored boxes
    const textarea = box.querySelector('.text-box-content');
    textarea.blur();
    deactivateTextBox(box);
    
    return box;
}

function activateTextBox(box) {
    if (activeTextBox && activeTextBox !== box) {
        deactivateTextBox(activeTextBox);
    }
    activeTextBox = box;
    box.classList.add('editing');
}

function deactivateTextBox(box) {
    box.classList.remove('editing');
    if (activeTextBox === box) {
        activeTextBox = null;
    }
}

function removeTextBox(box) {
    box.remove();
    textBoxes = textBoxes.filter(tb => tb.element !== box);
    if (activeTextBox === box) {
        activeTextBox = null;
    }
}

// Resize functionality
let resizeState = null;

function startResize(box, handle, e) {
    const rect = box.getBoundingClientRect();
    const surfaceRect = readingSurface.getBoundingClientRect();
    
    resizeState = {
        box,
        handle: handle.className.split(' ').find(c => c !== 'text-box-handle'),
        startX: e.clientX,
        startY: e.clientY,
        startPercentX: parseFloat(box.dataset.percentX),
        startPercentY: parseFloat(box.dataset.percentY),
        startWidth: rect.width,
        startHeight: rect.height,
        surfaceWidth: surfaceRect.width,
        surfaceHeight: surfaceRect.height
    };
    
    document.addEventListener('mousemove', doResize);
    document.addEventListener('mouseup', endResize);
}

function doResize(e) {
    if (!resizeState) return;
    
    const { box, handle, startX, startY, startPercentX, startPercentY, startWidth, startHeight, surfaceWidth, surfaceHeight } = resizeState;
    const dx = (e.clientX - startX) / currentZoom;
    const dy = (e.clientY - startY) / currentZoom;
    
    let newPercentX = startPercentX;
    let newPercentY = startPercentY;
    let newWidth = startWidth;
    let newHeight = startHeight;
    
    // Handle horizontal resize
    if (handle.includes('w')) {
        newWidth = Math.max(50, startWidth - dx);
        newPercentX = startPercentX + ((startWidth - newWidth) / surfaceWidth) * 100;
    } else if (handle.includes('e')) {
        newWidth = Math.max(50, startWidth + dx);
    }
    
    // Handle vertical resize
    if (handle.includes('n')) {
        newHeight = Math.max(30, startHeight - dy);
        newPercentY = startPercentY + ((startHeight - newHeight) / surfaceHeight) * 100;
    } else if (handle.includes('s')) {
        newHeight = Math.max(30, startHeight + dy);
    }
    
    box.style.left = newPercentX + '%';
    box.style.top = newPercentY + '%';
    box.dataset.percentX = newPercentX;
    box.dataset.percentY = newPercentY;
    box.style.width = newWidth + 'px';
    
    // Only set fixed height if vertically resizing, otherwise auto-fit to content
    if (handle.includes('n') || handle.includes('s')) {
        box.style.height = newHeight + 'px';
    } else {
        // Auto-fit height to text content when only changing width
        const textarea = box.querySelector('.text-box-content');
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
        box.style.height = 'auto';
    }
    box.classList.add('show-border');
}

function endResize() {
    if (resizeState) {
        const box = resizeState.box;
        const handle = resizeState.handle;
        // If was horizontal-only resize, ensure height stays auto-fit
        if (!handle.includes('n') && !handle.includes('s')) {
            const textarea = box.querySelector('.text-box-content');
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
            box.style.height = 'auto';
        }
    }
    resizeState = null;
    document.removeEventListener('mousemove', doResize);
    document.removeEventListener('mouseup', endResize);
    saveCurrentReading();
}

// Text tool button - use event delegation since button may be recreated
document.addEventListener('click', e => {
    const btn = e.target.closest('.text-tool-btn');
    if (btn) {
        e.stopPropagation();
        toggleTextMode();
    }
});

// Reading surface click/drag for text mode
let textDrawState = null;

readingSurface.addEventListener('mousedown', e => {
    if (!textModeActive) return;
    
    // Ignore if clicking on a card, text box, or button
    if (e.target.closest('.placed-card') || 
        e.target.closest('.text-box') || 
        e.target.closest('.text-tool-btn')) {
        return;
    }
    
    // Use content rect to account for zoom/pan transform
    const contentRect = readingSurfaceContent.getBoundingClientRect();
    const x = (e.clientX - contentRect.left) / currentZoom;
    const y = (e.clientY - contentRect.top) / currentZoom;
    
    textDrawState = {
        startX: x,
        startY: y,
        isDragging: false,
        previewBox: null
    };
    
    document.addEventListener('mousemove', onTextDraw);
    document.addEventListener('mouseup', onTextDrawEnd);
});

function onTextDraw(e) {
    if (!textDrawState) return;
    
    // Use content rect to account for zoom/pan transform
    const contentRect = readingSurfaceContent.getBoundingClientRect();
    const x = (e.clientX - contentRect.left) / currentZoom;
    const y = (e.clientY - contentRect.top) / currentZoom;
    
    const dx = Math.abs(x - textDrawState.startX);
    const dy = Math.abs(y - textDrawState.startY);
    
    // Start dragging if moved more than 5px
    if (dx > 5 || dy > 5) {
        textDrawState.isDragging = true;
        readingSurface.classList.add('text-mode-drawing');
        readingSurface.classList.remove('text-mode');
        
        // Create or update preview box
        if (!textDrawState.previewBox) {
            textDrawState.previewBox = document.createElement('div');
            textDrawState.previewBox.className = 'text-box show-border';
            textDrawState.previewBox.style.pointerEvents = 'none';
            textDrawState.previewBox.style.opacity = '0.6';
            textDrawState.previewBox.innerHTML = '<div class="text-box-border" style="opacity:1"></div>';
            readingSurfaceContent.appendChild(textDrawState.previewBox);
        }
        
        const left = Math.min(textDrawState.startX, x);
        const top = Math.min(textDrawState.startY, y);
        const width = Math.abs(x - textDrawState.startX);
        const height = Math.abs(y - textDrawState.startY);
        
        textDrawState.previewBox.style.left = left + 'px';
        textDrawState.previewBox.style.top = top + 'px';
        textDrawState.previewBox.style.width = width + 'px';
        textDrawState.previewBox.style.height = height + 'px';
    }
}

function onTextDrawEnd(e) {
    document.removeEventListener('mousemove', onTextDraw);
    document.removeEventListener('mouseup', onTextDrawEnd);
    
    if (!textDrawState) return;
    
    readingSurface.classList.remove('text-mode-drawing');
    readingSurface.classList.add('text-mode');
    
    // Remove preview box
    if (textDrawState.previewBox) {
        textDrawState.previewBox.remove();
    }
    
    if (textDrawState.isDragging) {
        // Create text box with dragged dimensions
        // Use content rect to account for zoom/pan transform
        const contentRect = readingSurfaceContent.getBoundingClientRect();
        const x = (e.clientX - contentRect.left) / currentZoom;
        const y = (e.clientY - contentRect.top) / currentZoom;
        
        const left = Math.min(textDrawState.startX, x);
        const top = Math.min(textDrawState.startY, y);
        const width = Math.max(50, Math.abs(x - textDrawState.startX));
        const height = Math.max(30, Math.abs(y - textDrawState.startY));
        
        createTextBox(left, top, width, height, true);
    } else {
        // Single click - create borderless text box
        createTextBox(textDrawState.startX, textDrawState.startY);
    }
    
    textDrawState = null;
}

// Exit text mode when clicking on a card
readingSurface.addEventListener('click', e => {
    if (e.target.closest('.placed-card')) {
        exitTextMode();
    }
});

// Exit text mode with Escape key
// Global escape key handler for all modals and overlays
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        // Priority order: close innermost/most recent first
        
        // 1. Card meaning modal (hide via class, don't remove - it's a persistent element)
        const cardModal = document.getElementById('cardModal');
        if (cardModal && cardModal.classList.contains('active')) {
            cardModal.classList.remove('active');
            return;
        }
        
        // 2. Card picker modal (mobile)
        if (cardPickerModal && cardPickerModal.classList.contains('open')) {
            closeCardPickerModal();
            return;
        }
        
        // 3. Save modal
        const saveModal = document.getElementById('saveModal');
        if (saveModal && saveModal.classList.contains('active')) {
            closeSaveModal();
            return;
        }
        
        // 4. Reading history panel (has both panel and overlay)
        const historyPanel = document.getElementById('historyPanel');
        if (historyPanel && historyPanel.classList.contains('active')) {
            closeHistoryPanel();
            return;
        }
        
        // 5. Spread panel (has both panel and overlay)
        const spreadPanel = document.getElementById('spreadPanel');
        if (spreadPanel && spreadPanel.classList.contains('active')) {
            closeSpreadPanel();
            return;
        }
        
        // 6. Mobile menu
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
            return;
        }
        
        // 7. Text mode (last priority)
        if (textModeActive) {
            exitTextMode();
            return;
        }
    }
});

// ============================================
// ZOOM FUNCTIONALITY
// ============================================

let currentZoom = 1;
let panX = 0;
let panY = 0;
let isPanning = false;
let panStartX, panStartY, panStartPanX, panStartPanY;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.15;

const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const readingSurfaceContent = document.getElementById('readingSurfaceContent');

function updateTransform() {
    readingSurfaceContent.style.transform = `translate(${panX}px, ${panY}px) scale(${currentZoom})`;
    
    // Update button states
    zoomInBtn.disabled = currentZoom >= MAX_ZOOM;
    zoomOutBtn.disabled = currentZoom <= MIN_ZOOM;
}

function setZoom(level, centerX = null, centerY = null) {
    const oldZoom = currentZoom;
    currentZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, level));
    
    // If center point provided, adjust pan to zoom toward that point
    if (centerX !== null && centerY !== null) {
        const surfaceRect = readingSurface.getBoundingClientRect();
        const contentCenterX = surfaceRect.width / 2;
        const contentCenterY = surfaceRect.height / 2;
        
        // Calculate the point relative to content center
        const pointX = centerX - contentCenterX - panX;
        const pointY = centerY - contentCenterY - panY;
        
        // Scale the pan offset
        const zoomRatio = currentZoom / oldZoom;
        panX = panX - pointX * (zoomRatio - 1);
        panY = panY - pointY * (zoomRatio - 1);
    }
    
    updateTransform();
}

function zoomIn(centerX = null, centerY = null) {
    setZoom(currentZoom + ZOOM_STEP, centerX, centerY);
}

function zoomOut(centerX = null, centerY = null) {
    setZoom(currentZoom - ZOOM_STEP, centerX, centerY);
}

function resetZoom() {
    currentZoom = 1;
    panX = 0;
    panY = 0;
    updateTransform();
}

zoomInBtn.addEventListener('click', e => {
    e.stopPropagation();
    zoomIn();
});

zoomOutBtn.addEventListener('click', e => {
    e.stopPropagation();
    zoomOut();
});

// Cmd/Ctrl + scroll to zoom at cursor position
readingSurface.addEventListener('wheel', e => {
    if (e.metaKey || e.ctrlKey) {
        e.preventDefault();
        const rect = readingSurface.getBoundingClientRect();
        const cursorX = e.clientX - rect.left;
        const cursorY = e.clientY - rect.top;
        
        if (e.deltaY < 0) {
            zoomIn(cursorX, cursorY);
        } else {
            zoomOut(cursorX, cursorY);
        }
    } else {
        // Normal scroll - pan vertically
        e.preventDefault();
        panY -= e.deltaY * 0.5;
        panX -= e.deltaX * 0.5;
        updateTransform();
    }
}, { passive: false });

// ============================================
// DESKTOP CLICK-AND-DRAG PAN
// ============================================

let isDesktopPanning = false;
let desktopPanStartX = 0;
let desktopPanStartY = 0;
let desktopPanStartPanX = 0;
let desktopPanStartPanY = 0;

readingSurface.addEventListener('mousedown', e => {
    // Only pan if clicking on empty space (not cards, text boxes, buttons, spread reference)
    // And not in text mode
    if (textModeActive) return;
    if (e.target.closest('.placed-card')) return;
    if (e.target.closest('.text-box')) return;
    if (e.target.closest('.spread-slot')) return;
    if (e.target.closest('button')) return;
    if (e.target.closest('.spread-reference')) return;
    
    // Only left mouse button
    if (e.button !== 0) return;
    
    isDesktopPanning = true;
    desktopPanStartX = e.clientX;
    desktopPanStartY = e.clientY;
    desktopPanStartPanX = panX;
    desktopPanStartPanY = panY;
    
    readingSurface.style.cursor = 'grabbing';
    e.preventDefault();
});

document.addEventListener('mousemove', e => {
    if (!isDesktopPanning) return;
    
    const dx = e.clientX - desktopPanStartX;
    const dy = e.clientY - desktopPanStartY;
    
    panX = desktopPanStartPanX + dx;
    panY = desktopPanStartPanY + dy;
    updateTransform();
});

document.addEventListener('mouseup', e => {
    if (isDesktopPanning) {
        isDesktopPanning = false;
        readingSurface.style.cursor = '';
    }
});

// ============================================
// MOBILE PINCH-TO-ZOOM AND TWO-FINGER PAN
// ============================================

let pinchStartDistance = 0;
let pinchStartZoom = 1;
let pinchCenterX = 0;
let pinchCenterY = 0;
let isTwoFingerGesture = false;
let twoFingerPanStartX = 0;
let twoFingerPanStartY = 0;
let twoFingerStartPanX = 0;
let twoFingerStartPanY = 0;

function getDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

function getMidpoint(touch1, touch2) {
    return {
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2
    };
}

readingSurface.addEventListener('touchstart', e => {
    if (e.touches.length === 2) {
        // Two finger gesture starting
        e.preventDefault();
        isTwoFingerGesture = true;
        
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        
        // Store pinch start state
        pinchStartDistance = getDistance(touch1, touch2);
        pinchStartZoom = currentZoom;
        
        // Store pan start state
        const midpoint = getMidpoint(touch1, touch2);
        const rect = readingSurface.getBoundingClientRect();
        pinchCenterX = midpoint.x - rect.left;
        pinchCenterY = midpoint.y - rect.top;
        twoFingerPanStartX = midpoint.x;
        twoFingerPanStartY = midpoint.y;
        twoFingerStartPanX = panX;
        twoFingerStartPanY = panY;
    }
}, { passive: false });

readingSurface.addEventListener('touchmove', e => {
    if (e.touches.length === 2 && isTwoFingerGesture) {
        e.preventDefault();
        
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        
        // Calculate new distance for pinch zoom
        const currentDistance = getDistance(touch1, touch2);
        const scale = currentDistance / pinchStartDistance;
        const newZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, pinchStartZoom * scale));
        
        // Calculate pan from midpoint movement
        const midpoint = getMidpoint(touch1, touch2);
        const panDeltaX = midpoint.x - twoFingerPanStartX;
        const panDeltaY = midpoint.y - twoFingerPanStartY;
        
        // Apply zoom with center point
        const oldZoom = currentZoom;
        currentZoom = newZoom;
        
        // Adjust pan to zoom toward pinch center
        const surfaceRect = readingSurface.getBoundingClientRect();
        const contentCenterX = surfaceRect.width / 2;
        const contentCenterY = surfaceRect.height / 2;
        
        const pointX = pinchCenterX - contentCenterX - twoFingerStartPanX;
        const pointY = pinchCenterY - contentCenterY - twoFingerStartPanY;
        
        const zoomRatio = currentZoom / pinchStartZoom;
        panX = twoFingerStartPanX - pointX * (zoomRatio - 1) + panDeltaX;
        panY = twoFingerStartPanY - pointY * (zoomRatio - 1) + panDeltaY;
        
        updateTransform();
    }
}, { passive: false });

readingSurface.addEventListener('touchend', e => {
    if (e.touches.length < 2) {
        isTwoFingerGesture = false;
    }
});

// Space + drag to pan
document.addEventListener('keydown', e => {
    if (e.code === 'Space' && !e.target.matches('input, textarea')) {
        e.preventDefault();
        readingSurface.style.cursor = 'grab';
    }
});

document.addEventListener('keyup', e => {
    if (e.code === 'Space') {
        readingSurface.style.cursor = '';
        if (isPanning) {
            isPanning = false;
            readingSurface.style.cursor = '';
        }
    }
});

readingSurface.addEventListener('mousedown', e => {
    // Check if space is held
    if (e.buttons === 1 && readingSurface.style.cursor === 'grab') {
        e.preventDefault();
        isPanning = true;
        panStartX = e.clientX;
        panStartY = e.clientY;
        panStartPanX = panX;
        panStartPanY = panY;
        readingSurface.style.cursor = 'grabbing';
    }
});

document.addEventListener('mousemove', e => {
    if (isPanning) {
        panX = panStartPanX + (e.clientX - panStartX);
        panY = panStartPanY + (e.clientY - panStartY);
        updateTransform();
    }
});

document.addEventListener('mouseup', e => {
    if (isPanning) {
        isPanning = false;
        readingSurface.style.cursor = 'grab';
    }
});

// Arrow keys to pan
document.addEventListener('keydown', e => {
    if (e.target.matches('input, textarea')) return;
    
    const panAmount = 30;
    switch (e.key) {
        case 'ArrowUp':
            e.preventDefault();
            panY += panAmount;
            updateTransform();
            break;
        case 'ArrowDown':
            e.preventDefault();
            panY -= panAmount;
            updateTransform();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            panX += panAmount;
            updateTransform();
            break;
        case 'ArrowRight':
            e.preventDefault();
            panX -= panAmount;
            updateTransform();
            break;
        case '0':
            if (e.metaKey || e.ctrlKey) {
                e.preventDefault();
                resetZoom();
            }
            break;
    }
});

// ============================================
// MOBILE TAP-TO-PLACE (for staged cards)
// ============================================

readingSurface.addEventListener('touchstart', e => {
    // Ignore multi-touch (pinch/pan gestures)
    if (e.touches.length > 1) return;
    
    // Only handle if there's a staged card waiting to be placed
    if (!stagedCard) return;
    
    // Ignore if touching a placed card or text box
    if (e.target.closest('.placed-card') || e.target.closest('.text-box')) {
        return;
    }
    
    e.preventDefault();
    const touch = e.touches[0];
    
    // Get position relative to reading surface content (accounting for zoom/pan)
    const surfaceRect = readingSurfaceContent.getBoundingClientRect();
    const x = (touch.clientX - surfaceRect.left) / currentZoom;
    const y = (touch.clientY - surfaceRect.top) / currentZoom;
    
    // Convert to percentages
    const percentX = (x / readingSurfaceContent.offsetWidth) * 100;
    const percentY = (y / readingSurfaceContent.offsetHeight) * 100;
    
    // Place the staged card
    placeStagedCard(percentX, percentY);
}, { passive: false });

function placeStagedCard(percentX, percentY) {
    if (!stagedCard) return;
    
    // Get the card data (stored on the element for picker-selected cards)
    const cardId = stagedCard.dataset.cardId;
    const card = stagedCard.cardData;
    
    if (!card) {
        cancelStagedCard();
        return;
    }
    
    triggerHaptic('medium');
    
    // Card already removed from deck in selectCardFromPicker, no need to remove again
    
    // Clean up staged card element
    stagedCard.classList.remove('card-staged');
    stagedCard.remove();
    stagedCard = null;
    
    // Restore opacity of remaining deck cards (in case any were dimmed)
    const cards = deckContainer.querySelectorAll('.card');
    cards.forEach(c => {
        c.style.opacity = '';
    });
    
    // Check for reversals
    const willReverse = reversalsEnabled && Math.random() < 0.3;
    
    // Create placed card
    const placedCard = document.createElement('div');
    placedCard.className = 'placed-card';
    placedCard.dataset.cardId = card.id;
    placedCard.dataset.percentX = percentX;
    placedCard.dataset.percentY = percentY;
    placedCard.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">${getCardFrontContent(card)}</div>
    `;
    placedCard.style.left = percentX + '%';
    placedCard.style.top = percentY + '%';
    
    // Find nearest slot if there's a spread active
    const nearestSlot = findNearestSlot(percentX, percentY);
    if (nearestSlot) {
        placedCard.style.left = nearestSlot.percentX + '%';
        placedCard.style.top = nearestSlot.percentY + '%';
        placedCard.dataset.percentX = nearestSlot.percentX;
        placedCard.dataset.percentY = nearestSlot.percentY;
        // Store position name for AI context
        placedCard.dataset.positionName = nearestSlot.position.name;
    }
    
    readingSurfaceContent.appendChild(placedCard);
    placedCards.push({ card, element: placedCard, isReversed: willReverse });
    
    // Add handlers for the placed card
    addPlacedCardHandlers(placedCard, card, willReverse);
    
    // Update UI
    readingSurface.classList.add('has-cards');
    updateSpreadSlotsFilled();
    dockDeck();
    renderDeck();
    saveCurrentReading();
}

// ============================================
// SPREAD TEMPLATES
// ============================================

const SPREADS = {
    threeCard: {
        id: 'threeCard',
        name: 'Three Card',
        description: 'Past, Present, and Future. A versatile spread for understanding the flow of a situation.',
        positions: [
            { id: 1, name: 'Past', percentX: 35, percentY: 45, prompt: 'Past influences and foundations that led to this moment' },
            { id: 2, name: 'Present', percentX: 50, percentY: 45, prompt: 'Current situation, energies, and challenges' },
            { id: 3, name: 'Future', percentX: 65, percentY: 45, prompt: 'Likely outcome if current path continues' }
        ],
        mobilePositions: [
            { id: 1, name: 'Past', percentX: 15, percentY: 45, prompt: 'Past influences and foundations that led to this moment' },
            { id: 2, name: 'Present', percentX: 50, percentY: 45, prompt: 'Current situation, energies, and challenges' },
            { id: 3, name: 'Future', percentX: 85, percentY: 45, prompt: 'Likely outcome if current path continues' }
        ]
    },
    spirit: {
        id: 'spirit',
        name: 'The Spirit Spread',
        description: 'A five-card elemental cross. Earth (North), Air (East), Fire (South), Water (West), and Spirit at center.',
        detailedDescription: `The Spirit Spread is a popular and useful spread among many tarot readers, with many variations. The four elemental cards represent the four suits, and the central Spirit card represents the Major Arcana.

The first card represents the direction North, the element Earth, and the Tarot suit of Pentacles. The second card represents the direction East, the element Air, and the Tarot suit of Swords. The third card represents the direction South, the element Fire, and the Tarot suit of Wands. The fourth card represents the direction West, the element Water, and the Tarot suit of Cups. Finally, the fifth card in the center of the cross represents Spirit and the archetypal Major Arcana.

This reading is especially useful for analyzing a person or a situation. When the character of the person or a situation is described to us metaphorically through the cards, it is easier to see the component and synergistic aspects, the harmonies and the chaotic elements at work.

The Spirit Spread bridges the Past, Present and Future Spread and the Celtic Cross in terms of complexity, making it an excellent intermediate spread for those ready to explore beyond simple three-card readings.`,
        credit: 'Spread information courtesy of Fool\'s Dog Tarot',
        positionDescriptions: {
            1: 'This card represents the physical and material qualities of the person or situation. Look to this card for information about physical health and all aspects of wealth, such as inheritance, property and real estate.',
            2: 'This card represents the mental aspects of the person or situation. Look to this card for information about personal and interpersonal communications, mental health or illness, or the group mind created by those involved in a situation.',
            3: 'This card represents the strength of character of a person, or the power of a situation. Look to this card for information about the passion and will alive within a person, or the pivotal power of a situation to foment change and to affect all those involved.',
            4: 'This card represents the emotional characteristics of a person or a situation. Look to this card for information about the normal emotional state and the range of emotions from a person, or about the emotional development and the value of emotion within a group.',
            5: 'This card provides archetypal information about the person or situation that is the focus of the reading. Look to this card for overarching resonances, for commentary about a person\'s future path, or what kind of future trajectory will manifest from a situation. Take careful note of this card, especially what suit and arcana it comes from, and you will learn much.'
        },
        positions: [
            { id: 1, name: 'Earth', percentX: 50, percentY: 15, prompt: 'Physical and material aspects: health, wealth, property' },
            { id: 2, name: 'Air', percentX: 65, percentY: 45, prompt: 'Mental aspects: communication, thoughts, intellect' },
            { id: 3, name: 'Fire', percentX: 50, percentY: 75, prompt: 'Passion and will: strength, drive, power to change' },
            { id: 4, name: 'Water', percentX: 35, percentY: 45, prompt: 'Emotional aspects: feelings, intuition, relationships' },
            { id: 5, name: 'Spirit', percentX: 50, percentY: 45, prompt: 'Archetypal overview: the soul of the matter, future trajectory' }
        ],
        mobilePositions: [
            { id: 1, name: 'Earth', percentX: 50, percentY: 15, prompt: 'Physical and material aspects: health, wealth, property' },
            { id: 2, name: 'Air', percentX: 85, percentY: 45, prompt: 'Mental aspects: communication, thoughts, intellect' },
            { id: 3, name: 'Fire', percentX: 50, percentY: 75, prompt: 'Passion and will: strength, drive, power to change' },
            { id: 4, name: 'Water', percentX: 15, percentY: 45, prompt: 'Emotional aspects: feelings, intuition, relationships' },
            { id: 5, name: 'Spirit', percentX: 50, percentY: 45, prompt: 'Archetypal overview: the soul of the matter, future trajectory' }
        ]
    },
    treeOfLife: {
        id: 'treeOfLife',
        name: 'Tree of Life',
        description: 'Rachel Mann\'s Practical Tree of Life via Mary K. Greer. Work down the pillars (1-6), then up the middle (7-10). Da\'at (11) bridges knowledge.',
        detailedDescription: `This is Rachel Mann's Practical Tree of Life spread, as shared by Mary K. Greer. The Tree of Life is a profound map of consciousness from the Kabbalistic tradition, and this spread adapts it for practical tarot reading.

The spread follows a specific reading order: work down the outer pillars first (positions 1-6), then ascend the middle pillar (positions 7-10). Da'at (position 11) represents hidden knowledge that bridges understanding.

The right pillar (Force, For, Feelings) represents active, expansive energy. The left pillar (Form, Against, Thoughts) represents receptive, constraining energy. The middle pillar represents balance and the path of spiritual development.

This spread is excellent for deep self-examination, understanding complex situations, and exploring the interplay between different aspects of your life or question. Each position corresponds to a Sephirah on the traditional Tree of Life, bringing rich symbolic meaning to the reading.`,
        credit: 'Rachel Mann\'s spread via Mary K. Greer',
        positions: [
            { id: 10, name: 'Spirit', percentX: 50, percentY: 5, prompt: 'The divine or higher purpose guiding the situation' },
            { id: 2, name: 'Form', percentX: 30, percentY: 20, prompt: 'The structure or form the issue takes' },
            { id: 1, name: 'Force', percentX: 70, percentY: 20, prompt: 'The generative, active energy behind the issue' },
            { id: 11, name: 'Da\'at', percentX: 50, percentY: 35, prompt: 'Hidden knowledge bridging understanding' },
            { id: 4, name: 'Against', percentX: 30, percentY: 50, prompt: 'Forces or factors working against you' },
            { id: 3, name: 'For', percentX: 70, percentY: 50, prompt: 'Forces or factors working in your favor' },
            { id: 9, name: 'Advice', percentX: 50, percentY: 65, prompt: 'Guidance or recommended action' },
            { id: 6, name: 'Thoughts', percentX: 30, percentY: 80, prompt: 'Mental aspects and thought patterns' },
            { id: 5, name: 'Feelings', percentX: 70, percentY: 80, prompt: 'Emotional aspects and feelings involved' },
            { id: 8, name: 'Persona', percentX: 50, percentY: 95, prompt: 'How you present yourself or are perceived' },
            { id: 7, name: 'World', percentX: 50, percentY: 125, prompt: 'Material world and practical manifestation' }
        ],
        mobilePositions: [
            { id: 10, name: 'Spirit', percentX: 50, percentY: 5, prompt: 'The divine or higher purpose guiding the situation' },
            { id: 2, name: 'Form', percentX: 10, percentY: 20, prompt: 'The structure or form the issue takes' },
            { id: 1, name: 'Force', percentX: 90, percentY: 20, prompt: 'The generative, active energy behind the issue' },
            { id: 11, name: 'Da\'at', percentX: 50, percentY: 35, prompt: 'Hidden knowledge bridging understanding' },
            { id: 4, name: 'Against', percentX: 10, percentY: 50, prompt: 'Forces or factors working against you' },
            { id: 3, name: 'For', percentX: 90, percentY: 50, prompt: 'Forces or factors working in your favor' },
            { id: 9, name: 'Advice', percentX: 50, percentY: 65, prompt: 'Guidance or recommended action' },
            { id: 6, name: 'Thoughts', percentX: 10, percentY: 80, prompt: 'Mental aspects and thought patterns' },
            { id: 5, name: 'Feelings', percentX: 90, percentY: 80, prompt: 'Emotional aspects and feelings involved' },
            { id: 8, name: 'Persona', percentX: 50, percentY: 95, prompt: 'How you present yourself or are perceived' },
            { id: 7, name: 'World', percentX: 50, percentY: 125, prompt: 'Material world and practical manifestation' }
        ]
    }
};

// Helper: Get positions array based on viewport (mobile vs desktop)
function getSpreadPositions(spread) {
    if (!spread) return [];
    return (isMobileView() && spread.mobilePositions) ? spread.mobilePositions : spread.positions;
}

// Spread state
let currentSpread = null;
let spreadSlots = [];

// Mobile spread guided mode state
let mobileSpreadMode = false;
let currentSpreadStep = 0;
let spreadStepIndicator = null;

// Helper: Check if a spread position has a card placed on it
function isSlotFilledByCard(pos) {
    return placedCards.some(p => {
        const cardX = parseFloat(p.element.dataset.percentX);
        const cardY = parseFloat(p.element.dataset.percentY);
        return Math.abs(cardX - pos.percentX) < 3 && Math.abs(cardY - pos.percentY) < 3;
    });
}

// Mobile Spread Guided Mode Functions
function startMobileSpreadMode() {
    if (!currentSpread || !isMobileView()) return;
    
    mobileSpreadMode = true;
    currentSpreadStep = 0;
    document.body.classList.add('mobile-spread-mode');
    
    // Create step indicator
    createSpreadStepIndicator();
    
    // Update slot visual states and pan to first slot
    updateMobileSpreadStep();
}

function endMobileSpreadMode() {
    mobileSpreadMode = false;
    document.body.classList.remove('mobile-spread-mode');
    
    // Remove step indicator
    if (spreadStepIndicator) {
        spreadStepIndicator.remove();
        spreadStepIndicator = null;
    }
    
    // Clear slot states
    spreadSlots.forEach(s => {
        s.element.classList.remove('active-slot', 'future-slot');
    });
}

function createSpreadStepIndicator() {
    if (spreadStepIndicator) spreadStepIndicator.remove();
    
    spreadStepIndicator = document.createElement('div');
    spreadStepIndicator.className = 'spread-step-indicator';
    readingSurfaceContent.appendChild(spreadStepIndicator);
}

function updateMobileSpreadStep() {
    if (!mobileSpreadMode || !currentSpread) return;
    
    const positions = getSpreadPositions(currentSpread);
    const totalSteps = positions.length;
    
    // Check if spread is complete
    if (currentSpreadStep >= totalSteps) {
        endMobileSpreadMode();
        return;
    }
    
    // Update slot visual states
    spreadSlots.forEach((slot, index) => {
        slot.element.classList.remove('active-slot', 'future-slot');
        
        if (index === currentSpreadStep) {
            slot.element.classList.add('active-slot');
        } else if (index > currentSpreadStep) {
            slot.element.classList.add('future-slot');
        }
    });
    
    // Update step indicator
    const currentPos = positions[currentSpreadStep];
    const slotData = spreadSlots[currentSpreadStep];
    
    if (spreadStepIndicator && slotData) {
        const posName = currentPos.name || `Position ${currentSpreadStep + 1}`;
        spreadStepIndicator.textContent = `${currentSpreadStep + 1} of ${totalSteps}: ${posName}`;
        
        // Position indicator above the active slot
        spreadStepIndicator.style.left = currentPos.percentX + '%';
        spreadStepIndicator.style.top = currentPos.percentY + '%';
    }
    
    // Pan to center the active slot
    panToSpreadSlot(currentSpreadStep);
}

function panToSpreadSlot(stepIndex) {
    if (!spreadSlots[stepIndex]) return;
    
    const positions = getSpreadPositions(currentSpread);
    const pos = positions[stepIndex];
    const surfaceRect = readingSurface.getBoundingClientRect();
    const contentRect = readingSurfaceContent.getBoundingClientRect();
    
    // Calculate where the slot is in content coordinates
    const slotX = (pos.percentX / 100) * contentRect.width;
    const slotY = (pos.percentY / 100) * contentRect.height;
    
    // Calculate pan needed to center the slot in the viewport
    const targetPanX = (surfaceRect.width / 2) - (slotX * currentZoom) - (contentRect.left - surfaceRect.left);
    const targetPanY = (surfaceRect.height / 2) - (slotY * currentZoom) - (contentRect.top - surfaceRect.top);
    
    // Smoothly animate pan
    const startPanX = panX;
    const startPanY = panY;
    const duration = 300;
    const startTime = performance.now();
    
    function animatePan(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        
        panX = startPanX + (targetPanX - startPanX) * eased;
        panY = startPanY + (targetPanY - startPanY) * eased;
        
        readingSurfaceContent.style.transform = `translate(${panX}px, ${panY}px) scale(${currentZoom})`;
        
        if (progress < 1) {
            requestAnimationFrame(animatePan);
        }
    }
    
    requestAnimationFrame(animatePan);
}

function advanceSpreadStep() {
    if (!mobileSpreadMode) return;
    
    currentSpreadStep++;
    updateMobileSpreadStep();
}

function placeCardInActiveSlot(card) {
    const positions = getSpreadPositions(currentSpread);
    if (!mobileSpreadMode || currentSpreadStep >= positions.length) return false;
    
    const pos = positions[currentSpreadStep];
    
    // Place card at slot position
    placeCardAtPosition(card, pos.percentX, pos.percentY);
    
    // Mark slot as filled
    if (spreadSlots[currentSpreadStep]) {
        spreadSlots[currentSpreadStep].element.classList.add('filled');
    }
    
    // Advance to next step
    advanceSpreadStep();
    
    return true;
}

function placeCardAtPosition(card, percentX, percentY) {
    // Check for reversals
    const willReverse = reversalsEnabled && Math.random() < 0.3;
    
    // Create placed card element
    const placedCard = document.createElement('div');
    placedCard.className = 'placed-card card';
    placedCard.dataset.cardId = card.id;
    placedCard.dataset.percentX = percentX;
    placedCard.dataset.percentY = percentY;
    
    placedCard.innerHTML = `
        <div class="card-face card-back"></div>
        <div class="card-face card-front">${getCardFrontContent(card)}</div>
        <div class="dev-label">${card.id}</div>
    `;
    
    if (willReverse) {
        placedCard.dataset.reversed = 'true';
        placedCard.classList.add('will-reverse');
    }
    
    placedCard.style.left = percentX + '%';
    placedCard.style.top = percentY + '%';
    
    readingSurfaceContent.appendChild(placedCard);
    
    // Store reference
    placedCards.push({ element: placedCard, card: card });
    
    // Setup interactions
    addPlacedCardHandlers(placedCard, card);
    
    // Hide "Drag cards here" text and dock the deck
    readingSurface.classList.add('has-cards');
    document.querySelector('.deck-area').classList.add('docked');
    
    // Update spread slots filled state
    updateSpreadSlotsFilled();
    
    triggerHaptic('medium');
    saveCurrentReading();
}

// DOM elements
const spreadBtn = document.getElementById('spreadBtn');
const spreadPanel = document.getElementById('spreadPanel');
const spreadOverlay = document.getElementById('spreadOverlay');
const spreadPanelClose = document.getElementById('spreadPanelClose');
const spreadList = document.getElementById('spreadList');
const clearSpreadBtn = document.getElementById('clearSpreadBtn');
const spreadListView = document.getElementById('spreadListView');
const spreadDetailView = document.getElementById('spreadDetailView');
const spreadDetailBack = document.getElementById('spreadDetailBack');
const spreadDetailTitle = document.getElementById('spreadDetailTitle');
const spreadDetailContent = document.getElementById('spreadDetailContent');
const useSpreadBtn = document.getElementById('useSpreadBtn');

let selectedSpreadId = null;

function openSpreadPanel() {
    renderSpreadList();
    showSpreadListView();
    spreadPanel.classList.add('active');
    spreadOverlay.classList.add('active');
}

function closeSpreadPanel() {
    spreadPanel.classList.remove('active');
    spreadOverlay.classList.remove('active');
    // Reset to list view for next open
    setTimeout(() => showSpreadListView(), 200);
}

function showSpreadListView() {
    spreadListView.style.display = 'flex';
    spreadListView.style.flexDirection = 'column';
    spreadListView.style.height = '100%';
    spreadDetailView.classList.remove('active');
    spreadDetailView.classList.remove('info-only');
}

function showSpreadDetailView(spreadId, infoOnly = false) {
    const spread = SPREADS[spreadId];
    if (!spread) return;
    
    selectedSpreadId = infoOnly ? null : spreadId; // Don't allow "Use Spread" in info-only mode
    spreadDetailTitle.textContent = spread.name;
    
    // Build preview visualization
    const positions = spread.positions;
    const minX = Math.min(...positions.map(p => p.percentX));
    const maxX = Math.max(...positions.map(p => p.percentX));
    const minY = Math.min(...positions.map(p => p.percentY));
    const maxY = Math.max(...positions.map(p => p.percentY));
    // Use larger padding to ensure cards stay well within the preview box
    const padX = 20;
    const padY = 18;
    const rangeX = (maxX - minX) + padX * 2;
    const rangeY = (maxY - minY) + padY * 2;
    
    const previewCards = positions.map(pos => {
        // Map positions to percentages with padding buffer
        const normX = ((pos.percentX - minX + padX) / rangeX) * 100;
        const normY = ((pos.percentY - minY + padY) / rangeY) * 100;
        // Clamp to ensure cards stay within bounds (accounting for card size)
        const clampedX = Math.max(12, Math.min(88, normX));
        const clampedY = Math.max(15, Math.min(85, normY));
        return `<div class="spread-detail-preview-card" style="left: ${clampedX}%; top: ${clampedY}%">${pos.id}</div>`;
    }).join('');
    
    // Build position descriptions - sort by ID for numeric order
    const sortedPositions = [...positions].sort((a, b) => a.id - b.id);
    const positionItems = sortedPositions.map(pos => {
        const detailedPrompt = spread.positionDescriptions?.[pos.id] || pos.prompt;
        return `
            <div class="spread-position-item">
                <div class="spread-position-name">
                    <span class="position-number">${pos.id}</span>
                    ${pos.name}
                </div>
                <div class="spread-position-prompt">${detailedPrompt}</div>
            </div>
        `;
    }).join('');
    
    // Build content
    const detailedDesc = spread.detailedDescription || spread.description;
    const creditHtml = spread.credit ? `<div class="spread-detail-credit">${spread.credit}</div>` : '';
    
    spreadDetailContent.innerHTML = `
        <div class="spread-detail-preview">${previewCards}</div>
        <div class="spread-detail-info">
            <h4>About This Spread</h4>
            <p>${detailedDesc.replace(/\n\n/g, '</p><p>')}</p>
        </div>
        <div class="spread-detail-positions">
            <h4>Card Positions</h4>
            ${positionItems}
        </div>
        ${creditHtml}
    `;
    
    spreadListView.style.display = 'none';
    spreadDetailView.classList.add('active');
    
    // Toggle info-only mode (hides Use Spread button)
    if (infoOnly) {
        spreadDetailView.classList.add('info-only');
    } else {
        spreadDetailView.classList.remove('info-only');
    }
}

// Show spread info modal from the reference panel
function showSpreadInfo() {
    if (!currentSpread) return;
    showSpreadDetailView(currentSpread.id, true);
    spreadPanel.classList.add('active');
    spreadOverlay.classList.add('active');
}

function renderSpreadList() {
    spreadList.innerHTML = Object.values(SPREADS).map(spread => {
        const isActive = currentSpread && currentSpread.id === spread.id;
        const previewSlots = spread.positions.slice(0, 5).map(() => 
            '<div class="spread-preview-slot"></div>'
        ).join('');
        const moreCount = spread.positions.length > 5 ? `+${spread.positions.length - 5}` : '';
        
        return `
            <div class="spread-item ${isActive ? 'active' : ''}" data-spread-id="${spread.id}">
                <div class="spread-item-header">
                    <span class="spread-item-name">${spread.name}</span>
                    <span class="spread-item-count">${spread.positions.length} cards</span>
                </div>
                <p class="spread-item-desc">${spread.description}</p>
                <div class="spread-item-preview">${previewSlots}${moreCount ? `<span style="font-size:0.625rem;color:hsl(var(--muted-foreground))">${moreCount}</span>` : ''}</div>
            </div>
        `;
    }).join('');
}

function selectSpread(spreadId) {
    // Show detail view instead of immediately selecting
    showSpreadDetailView(spreadId);
}

function confirmUseSpread() {
    if (!selectedSpreadId) return;
    
    const spread = SPREADS[selectedSpreadId];
    if (!spread) return;
    
    currentSpread = spread;
    renderSpreadSlots();
    closeSpreadPanel();
    saveCurrentReading();
    
    // Start mobile spread guided mode
    if (isMobileView()) {
        // Small delay to let slots render
        setTimeout(() => {
            startMobileSpreadMode();
        }, 100);
    }
}

function clearSpread() {
    // End mobile spread mode if active
    if (mobileSpreadMode) {
        endMobileSpreadMode();
    }
    
    currentSpread = null;
    clearSpreadSlots();
    hideSpreadReference();
    closeSpreadPanel();
    saveCurrentReading();
}

function renderSpreadSlots() {
    clearSpreadSlots();
    if (!currentSpread) {
        hideSpreadReference();
        return;
    }
    
    // Get placed card dimensions by creating a temp element
    const tempCard = document.createElement('div');
    tempCard.className = 'placed-card';
    tempCard.style.visibility = 'hidden';
    tempCard.style.position = 'absolute';
    document.body.appendChild(tempCard);
    const computedStyle = getComputedStyle(tempCard);
    const cardW = parseFloat(computedStyle.width) || 120;
    const cardH = parseFloat(computedStyle.height) || 192;
    document.body.removeChild(tempCard);
    
    const positions = getSpreadPositions(currentSpread);
    positions.forEach(pos => {
        const slot = document.createElement('div');
        slot.className = 'spread-slot';
        slot.dataset.slotId = pos.id;
        slot.dataset.slotName = pos.name;
        slot.dataset.slotPrompt = pos.prompt || '';
        slot.style.left = pos.percentX + '%';
        slot.style.top = pos.percentY + '%';
        slot.style.width = cardW + 'px';
        slot.style.height = cardH + 'px';
        
        // Only show label if name exists
        if (pos.name) {
            const label = document.createElement('span');
            label.className = 'spread-slot-label';
            label.textContent = pos.name;
            if (pos.prompt) {
                label.setAttribute('title', pos.prompt);
            }
            slot.appendChild(label);
        }
        
        // Check if slot is already filled
        if (isSlotFilledByCard(pos)) {
            slot.classList.add('filled');
        }
        
        readingSurfaceContent.appendChild(slot);
        spreadSlots.push({ position: pos, element: slot });
    });
    
    // Show and render reference panel
    showSpreadReference();
    
    // Auto-zoom to fit spread
    autoZoomToFitSpread();
}

function autoZoomToFitSpread() {
    if (!currentSpread) {
        resetZoom();
        return;
    }
    
    const positions = getSpreadPositions(currentSpread);
    
    // Get bounds of all positions
    const minX = Math.min(...positions.map(p => p.percentX));
    const maxX = Math.max(...positions.map(p => p.percentX));
    const minY = Math.min(...positions.map(p => p.percentY));
    const maxY = Math.max(...positions.map(p => p.percentY));
    
    // Get card size relative to surface (approximate)
    const surfaceRect = readingSurface.getBoundingClientRect();
    const tempCard = document.createElement('div');
    tempCard.className = 'placed-card';
    tempCard.style.visibility = 'hidden';
    tempCard.style.position = 'absolute';
    document.body.appendChild(tempCard);
    const cardStyle = getComputedStyle(tempCard);
    const cardW = parseFloat(cardStyle.width) || 120;
    const cardH = parseFloat(cardStyle.height) || 192;
    document.body.removeChild(tempCard);
    
    // Card dimensions as percentage of surface
    const cardWPercent = (cardW / surfaceRect.width) * 100;
    const cardHPercent = (cardH / surfaceRect.height) * 100;
    
    // Add padding for cards and labels (half card size + some margin)
    const padX = cardWPercent / 2 + 5;
    const padY = cardHPercent / 2 + 8; // Extra for label above
    
    // Calculate spread bounds including card sizes
    const spreadWidth = (maxX - minX) + cardWPercent + padX * 2;
    const spreadHeight = (maxY - minY) + cardHPercent + padY * 2;
    
    // Calculate zoom to fit
    const zoomX = 100 / spreadWidth;
    const zoomY = 100 / spreadHeight;
    let targetZoom = Math.min(zoomX, zoomY, MAX_ZOOM);
    targetZoom = Math.max(targetZoom, MIN_ZOOM);
    
    // Calculate pan to center the spread
    const spreadCenterX = (minX + maxX) / 2;
    const spreadCenterY = (minY + maxY) / 2;
    
    // Pan offset (in pixels) to center the spread
    const offsetX = (50 - spreadCenterX) * surfaceRect.width / 100 * targetZoom;
    const offsetY = (50 - spreadCenterY) * surfaceRect.height / 100 * targetZoom;
    
    // Apply zoom and pan
    currentZoom = targetZoom;
    panX = offsetX;
    panY = offsetY;
    updateTransform();
}

// Spread Reference Panel
const spreadReference = document.getElementById('spreadReference');
const spreadRefHeader = document.getElementById('spreadRefHeader');
const spreadRefTitle = document.getElementById('spreadRefTitle');
const spreadRefContent = document.getElementById('spreadRefContent');

function showSpreadReference() {
    if (!currentSpread) return;
    
    spreadRefTitle.textContent = currentSpread.name;
    spreadReference.classList.add('active');
    spreadReference.classList.remove('minimized');
    renderSpreadReferenceCards();
}

function hideSpreadReference() {
    spreadReference.classList.remove('active');
    spreadReference.classList.remove('minimized');
}

function toggleSpreadReferenceMinimize() {
    spreadReference.classList.toggle('minimized');
}

function renderSpreadReferenceCards() {
    if (!currentSpread) return;
    
    // Use desktop positions for the reference preview (consistent view)
    const positions = currentSpread.positions;
    const minX = Math.min(...positions.map(p => p.percentX));
    const maxX = Math.max(...positions.map(p => p.percentX));
    const minY = Math.min(...positions.map(p => p.percentY));
    const maxY = Math.max(...positions.map(p => p.percentY));
    
    // Add padding
    const padX = 15;
    const padY = 10;
    const rangeX = (maxX - minX) + padX * 2;
    const rangeY = (maxY - minY) + padY * 2;
    
    // Get mobile positions for filled state checking
    const mobilePositions = getSpreadPositions(currentSpread);
    
    spreadRefContent.innerHTML = positions.map((pos, index) => {
        // Normalize positions to fit in reference panel
        const normX = ((pos.percentX - minX + padX) / rangeX) * 100;
        const normY = ((pos.percentY - minY + padY) / rangeY) * 100;
        
        // Check if filled using the appropriate positions for current view
        const checkPos = mobilePositions[index] || pos;
        const isFilled = isSlotFilledByCard(checkPos);
        
        return `<div class="spread-ref-card ${isFilled ? 'filled' : ''}" 
                     style="left: ${normX}%; top: ${normY}%"
                     data-slot-id="${pos.id}"
                     title="${pos.name}">${pos.id}</div>`;
    }).join('');
}

function updateSpreadReference() {
    if (!currentSpread || !spreadReference.classList.contains('active')) return;
    renderSpreadReferenceCards();
}

// Make reference panel draggable (mouse and touch)
let isRefDragging = false;
let refDragStartX, refDragStartY, refStartLeft, refStartTop;
let refDragMoved = false;

function startRefDrag(clientX, clientY) {
    isRefDragging = true;
    refDragMoved = false;
    refDragStartX = clientX;
    refDragStartY = clientY;
    refStartLeft = spreadReference.offsetLeft;
    refStartTop = spreadReference.offsetTop;
    spreadReference.classList.add('dragging');
}

function moveRefDrag(clientX, clientY) {
    if (!isRefDragging) return;
    const dx = clientX - refDragStartX;
    const dy = clientY - refDragStartY;
    
    // Only consider it a drag if moved more than 5px
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
        refDragMoved = true;
    }
    
    // Constrain to reading surface bounds
    const surfaceRect = readingSurface.getBoundingClientRect();
    const panelRect = spreadReference.getBoundingClientRect();
    
    let newLeft = refStartLeft + dx;
    let newTop = refStartTop + dy;
    
    // Keep panel within surface
    newLeft = Math.max(0, Math.min(newLeft, surfaceRect.width - panelRect.width));
    newTop = Math.max(0, Math.min(newTop, surfaceRect.height - panelRect.height));
    
    spreadReference.style.left = newLeft + 'px';
    spreadReference.style.top = newTop + 'px';
}

function endRefDrag() {
    if (!isRefDragging) return;
    isRefDragging = false;
    spreadReference.classList.remove('dragging');
    
    // If didn't drag (just clicked), toggle minimize
    if (!refDragMoved) {
        toggleSpreadReferenceMinimize();
    }
}

// Mouse drag events
spreadRefHeader.addEventListener('mousedown', e => {
    startRefDrag(e.clientX, e.clientY);
    e.preventDefault();
});

document.addEventListener('mousemove', e => {
    moveRefDrag(e.clientX, e.clientY);
});

document.addEventListener('mouseup', () => {
    endRefDrag();
});

// Touch drag events
spreadRefHeader.addEventListener('touchstart', e => {
    const touch = e.touches[0];
    startRefDrag(touch.clientX, touch.clientY);
    e.preventDefault();
}, { passive: false });

document.addEventListener('touchmove', e => {
    if (!isRefDragging) return;
    const touch = e.touches[0];
    moveRefDrag(touch.clientX, touch.clientY);
}, { passive: true });

document.addEventListener('touchend', () => {
    endRefDrag();
});

function clearSpreadSlots() {
    spreadSlots.forEach(s => s.element.remove());
    spreadSlots = [];
}

function updateSpreadSlotsFilled() {
    spreadSlots.forEach(slot => {
        const pos = slot.position;
        if (isSlotFilledByCard(pos)) {
            slot.element.classList.add('filled');
        } else {
            slot.element.classList.remove('filled');
        }
    });
    
    // Update reference panel
    updateSpreadReference();
}

function findNearestSlot(percentX, percentY, threshold = 10) {
    if (!currentSpread || spreadSlots.length === 0) return null;
    
    let nearest = null;
    let minDist = threshold;
    
    spreadSlots.forEach(slot => {
        const pos = slot.position;
        const dist = Math.sqrt(
            Math.pow(percentX - pos.percentX, 2) + 
            Math.pow(percentY - pos.percentY, 2)
        );
        
        if (dist < minDist && !isSlotFilledByCard(pos)) {
            minDist = dist;
            nearest = slot;
        }
    });
    
    return nearest;
}

function highlightNearestSlot(percentX, percentY) {
    // Remove all highlights
    spreadSlots.forEach(s => s.element.classList.remove('highlight'));
    
    const nearest = findNearestSlot(percentX, percentY);
    if (nearest) {
        nearest.element.classList.add('highlight');
    }
}

function clearSlotHighlights() {
    spreadSlots.forEach(s => s.element.classList.remove('highlight'));
}

// Event listeners
spreadBtn.addEventListener('click', openSpreadPanel);
spreadPanelClose.addEventListener('click', closeSpreadPanel);
spreadOverlay.addEventListener('click', closeSpreadPanel);
clearSpreadBtn.addEventListener('click', clearSpread);
spreadDetailBack.addEventListener('click', () => {
    // If in info-only mode, close the panel entirely
    if (spreadDetailView.classList.contains('info-only')) {
        closeSpreadPanel();
    } else {
        showSpreadListView();
    }
});
useSpreadBtn.addEventListener('click', confirmUseSpread);

// Click on spread reference content to show spread info
spreadRefContent.addEventListener('click', showSpreadInfo);

spreadList.addEventListener('click', e => {
    const item = e.target.closest('.spread-item');
    if (item) {
        selectSpread(item.dataset.spreadId);
    }
});

// Handle window resize for spread slots
window.addEventListener('resize', () => {
    if (currentSpread) {
        renderSpreadSlots();
    }
});

// ============================================
// INIT
// ============================================

function init() {
    // Load user preferences (theme, reversals, dev mode)
    loadPreferences();
    
    // Check for saved reading to restore
    const savedReading = loadCurrentReading();
    if (savedReading) {
        restoreReading(savedReading);
    } else {
        initializeDeck();
    }
}

// ============================================
// SAVE MODAL
// ============================================

const saveExistingInfo = document.getElementById('saveExistingInfo');
const saveExistingTitle = document.getElementById('saveExistingTitle');
const saveExistingDate = document.getElementById('saveExistingDate');
const saveNewBtn = document.getElementById('saveNewBtn');

function openSaveModal() {
    if (placedCards.length === 0 && textBoxes.length === 0) {
        alert('No cards or notes to save. Place some cards first!');
        return;
    }
    
    // Check if this reading already exists in history
    const history = getReadingHistory();
    const existingReading = currentReadingId ? history.find(r => r.id === currentReadingId) : null;
    
    if (existingReading) {
        saveModal.classList.add('has-existing');
        saveExistingInfo.classList.add('show');
        saveExistingTitle.textContent = existingReading.title || 'Untitled Reading';
        const date = new Date(existingReading.timestamp);
        saveExistingDate.textContent = `Last saved: ${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
        readingTitleInput.value = existingReading.title || '';
        readingTitleInput.placeholder = 'Update title (optional)';
    } else {
        saveModal.classList.remove('has-existing');
        saveExistingInfo.classList.remove('show');
        readingTitleInput.value = '';
        readingTitleInput.placeholder = 'Enter a title (optional)';
    }
    
    saveModal.classList.add('active');
    readingTitleInput.focus();
}

function closeSaveModal() {
    saveModal.classList.remove('active');
    saveModal.classList.remove('has-existing');
    saveExistingInfo.classList.remove('show');
}

function confirmSave(asNew = false) {
    const title = readingTitleInput.value.trim();
    
    if (asNew) {
        // Generate new ID for "Save as New"
        currentReadingId = generateReadingId();
    }
    
    const id = saveToHistory(title);
    if (id) {
        closeSaveModal();
        showToast(asNew ? 'Saved as new reading!' : 'Reading saved!');
    }
}

saveBtn.addEventListener('click', openSaveModal);
saveCancelBtn.addEventListener('click', closeSaveModal);
saveConfirmBtn.addEventListener('click', () => confirmSave(false));
saveNewBtn.addEventListener('click', () => confirmSave(true));
saveModal.addEventListener('click', e => { if (e.target === saveModal) closeSaveModal(); });
readingTitleInput.addEventListener('keydown', e => { if (e.key === 'Enter') confirmSave(false); });

// ============================================
// HISTORY PANEL
// ============================================

function openHistoryPanel() {
    renderHistoryList();
    historyPanel.classList.add('active');
    historyOverlay.classList.add('active');
}

function closeHistoryPanel() {
    historyPanel.classList.remove('active');
    historyOverlay.classList.remove('active');
}

function renderHistoryList() {
    const history = getReadingHistory();
    
    if (history.length === 0) {
        historyList.innerHTML = '';
        historyEmpty.classList.remove('hidden');
        return;
    }
    
    historyEmpty.classList.add('hidden');
    
    historyList.innerHTML = history.map(reading => {
        const date = new Date(reading.timestamp);
        const dateStr = date.toLocaleDateString();
        const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const cardCount = reading.cards.length;
        
        // Show mini card previews (up to 5)
        const cardPreviews = reading.cards.slice(0, 5).map(c => {
            const cardData = TAROT_DECK.find(card => card.id === c.cardId);
            const reversedClass = c.isReversed ? 'reversed' : '';
            if (USE_IMAGES && cardData) {
                const imgUrl = getCardImageUrl(cardData);
                return `<div class="history-item-card ${reversedClass}"><img src="${imgUrl}" alt=""></div>`;
            }
            return `<div class="history-item-card ${reversedClass}">${getDisplayNumber(cardData)}</div>`;
        }).join('');
        
        const moreCards = cardCount > 5 ? `<div class="history-item-card">+${cardCount - 5}</div>` : '';
        const hasChatIcon = reading.chatHistory && reading.chatHistory.length > 0
            ? `<svg class="icon" style="width: 14px; height: 14px; opacity: 0.6;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>`
            : '';

        return `
            <div class="history-item" data-reading-id="${reading.id}">
                <div class="history-item-title">${reading.title || 'Untitled Reading'}</div>
                <div class="history-item-meta">
                    <span>${dateStr} ${timeStr} · ${cardCount} card${cardCount !== 1 ? 's' : ''} ${hasChatIcon}</span>
                    <button class="history-item-delete" data-delete-id="${reading.id}" title="Delete">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
                <div class="history-item-cards">${cardPreviews}${moreCards}</div>
            </div>
        `;
    }).join('');
}

function loadReadingFromHistory(readingId) {
    const history = getReadingHistory();
    const reading = history.find(r => r.id === readingId);
    if (reading) {
        restoreReading(reading);
        closeHistoryPanel();
        showToast('Reading restored!');
    }
}

function deleteReadingFromHistory(readingId, e) {
    e.stopPropagation();
    if (confirm('Delete this reading?')) {
        deleteFromHistory(readingId);
        renderHistoryList();
    }
}

function clearAllHistory() {
    if (confirm('Delete all reading history? This cannot be undone.')) {
        localStorage.removeItem(STORAGE_KEYS.READING_HISTORY);
        renderHistoryList();
        showToast('History cleared');
    }
}

historyBtn.addEventListener('click', openHistoryPanel);
historyClose.addEventListener('click', closeHistoryPanel);
historyOverlay.addEventListener('click', closeHistoryPanel);
clearHistoryBtn.addEventListener('click', clearAllHistory);

historyList.addEventListener('click', e => {
    const deleteBtn = e.target.closest('.history-item-delete');
    if (deleteBtn) {
        deleteReadingFromHistory(deleteBtn.dataset.deleteId, e);
        return;
    }
    
    const item = e.target.closest('.history-item');
    if (item) {
        loadReadingFromHistory(item.dataset.readingId);
    }
});

// ============================================
// TOAST NOTIFICATION
// ============================================

function showToast(message, duration = 2000) {
    // Remove existing toast
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('show'));
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// ============================================
// AI CHAT INTEGRATION
// ============================================

// AI Chat state
let groqApiKey = localStorage.getItem('groqApiKey') || '';
let chatHistory = [];

// Get elements
const aiChatSidebar = document.getElementById('aiChatSidebar');
const aiChatToggle = document.getElementById('aiChatToggle');
const aiChatClose = document.getElementById('aiChatClose');
const aiResetBtn = document.getElementById('aiResetBtn');
const aiReadSpreadBtn = document.getElementById('aiReadSpreadBtn');
const aiChatMessages = document.getElementById('aiChatMessages');
const aiChatInput = document.getElementById('aiChatInput');
const aiSendBtn = document.getElementById('aiSendBtn');
const aiSettingsBtn = document.getElementById('aiSettingsBtn');
const aiSettingsModal = document.getElementById('aiSettingsModal');
const aiSettingsCancelBtn = document.getElementById('aiSettingsCancelBtn');
const aiSettingsSaveBtn = document.getElementById('aiSettingsSaveBtn');
const groqApiKeyInput = document.getElementById('groqApiKeyInput');
const aiSettingsStatus = document.getElementById('aiSettingsStatus');

// Toggle sidebar
aiChatToggle.addEventListener('click', () => {
    aiChatSidebar.classList.toggle('open');
});

aiChatClose.addEventListener('click', () => {
    aiChatSidebar.classList.remove('open');
});

// Settings modal
aiSettingsBtn.addEventListener('click', () => {
    aiSettingsModal.classList.add('open');
    groqApiKeyInput.value = groqApiKey;
    aiSettingsStatus.textContent = '';
    aiSettingsStatus.className = 'ai-settings-status';
});

aiSettingsCancelBtn.addEventListener('click', () => {
    aiSettingsModal.classList.remove('open');
});

aiSettingsSaveBtn.addEventListener('click', () => {
    const newKey = groqApiKeyInput.value.trim();
    if (!newKey) {
        aiSettingsStatus.textContent = 'Please enter an API key';
        aiSettingsStatus.className = 'ai-settings-status error';
        return;
    }

    groqApiKey = newKey;
    localStorage.setItem('groqApiKey', newKey);
    aiSettingsStatus.textContent = 'API key saved successfully!';
    aiSettingsStatus.className = 'ai-settings-status success';

    setTimeout(() => {
        aiSettingsModal.classList.remove('open');
    }, 1000);
});

// Close settings modal on outside click
aiSettingsModal.addEventListener('click', (e) => {
    if (e.target === aiSettingsModal) {
        aiSettingsModal.classList.remove('open');
    }
});

// Gather reading context
function gatherReadingContext() {
    const context = {
        cards: [],
        notes: [],
        spread: null
    };

    // Gather placed cards
    if (placedCards && placedCards.length > 0) {
        context.cards = placedCards.map(p => {
            const cardName = p.card.name;
            const isReversed = p.card.reversed;
            // Read position name from element data attribute (set when snapped to spread slot)
            const position = p.element.dataset.positionName || p.card.position || null;

            return {
                name: cardName,
                reversed: isReversed,
                position: position
            };
        });
    }

    // Gather notes from text boxes
    if (textBoxes && textBoxes.length > 0) {
        context.notes = textBoxes.map(tb => {
            const textarea = tb.element.querySelector('.text-box-content');
            return textarea ? textarea.value.trim() : '';
        }).filter(note => note.length > 0);
    }

    // Gather spread info
    if (currentSpread) {
        context.spread = {
            name: currentSpread.name,
            description: currentSpread.description,
            detailedDescription: currentSpread.detailedDescription,
            positionDescriptions: currentSpread.positionDescriptions,
            positions: currentSpread.positions || []
        };
    }

    return context;
}

// Format context for AI
function formatContextForAI(context) {
    let prompt = 'Current Tarot Reading:\n\n';

    if (context.spread) {
        prompt += `Spread: ${context.spread.name}\n`;

        // Add detailed spread description if available
        if (context.spread.detailedDescription) {
            prompt += `\n${context.spread.detailedDescription}\n\n`;
        } else if (context.spread.description) {
            prompt += `${context.spread.description}\n\n`;
        }

        // Add position meanings for the spread
        if (context.spread.positions && context.spread.positions.length > 0) {
            prompt += 'Position Meanings:\n';
            context.spread.positions.forEach(pos => {
                // Use positionDescriptions if available (for Spirit and Tree of Life), otherwise use prompt
                const meaning = context.spread.positionDescriptions?.[pos.id] || pos.prompt;
                prompt += `${pos.name || `Position ${pos.id}`}: ${meaning}\n`;
            });
            prompt += '\n';
        }
    }

    if (context.cards.length > 0) {
        prompt += 'Cards drawn:\n';
        context.cards.forEach((card, index) => {
            const positionText = card.position ? ` (Position: ${card.position})` : '';
            const reversedText = card.reversed ? ' (Reversed)' : '';
            prompt += `${index + 1}. ${card.name}${reversedText}${positionText}\n`;
        });
        prompt += '\n';
    }

    if (context.notes.length > 0) {
        prompt += 'Notes/Questions:\n';
        context.notes.forEach((note, index) => {
            prompt += `${index + 1}. ${note}\n`;
        });
        prompt += '\n';
    }

    if (context.cards.length === 0 && context.notes.length === 0) {
        prompt = 'No cards have been drawn yet and no notes have been taken.\n\n';
    }

    return prompt;
}

// Send message to AI
async function sendAIMessage(userMessage) {
    if (!groqApiKey) {
        addAIMessage('Please set your Groq API key in settings first.');
        return;
    }

    // Add user message to chat
    addUserMessage(userMessage);

    // Clear input and reset height
    aiChatInput.value = '';
    aiChatInput.style.height = '60px';

    // Show loading
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'ai-message-loading';
    loadingDiv.textContent = 'Thinking...';
    aiChatMessages.appendChild(loadingDiv);
    scrollChatToBottom();

    try {
        // Gather context
        const context = gatherReadingContext();
        const contextPrompt = formatContextForAI(context);

        // Build messages for API with conversation history
        const messages = [
            {
                role: 'system',
                content: `You're reading tarot like a thoughtful friend—someone who notices things and wonders aloud with the person, not at them. You're curious, not prescriptive. Warm, not performative.

Voice: Conversational. Natural rhythm—mix short and long sentences. Use contractions. Let thoughts breathe. Avoid anything that sounds like it's trying to sound wise. If it feels quotable, rewrite it. Use "like" once max. No filler ("it's important to note", "the key here is", "it's worth mentioning"). No binary drama ("it's not just X, it's Y"). No em-dash reveals. Vary how you end paragraphs—don't fall into a pattern of punchy one-liners.

Structure: Break responses into short paragraphs (2-4 sentences each). Makes it easier to read, easier to breathe.

First reading: Give the spread its full attention. 2-3 sentences per card. Read it through.

Follow-ups (CRITICAL): Stop listing cards. You already read the spread. Now you're in conversation. HARD LIMIT: mention 1-2 cards by name, max. Instead, offer a synthesis, a pattern you're noticing, or ask one really good question—something that cracks the reading open a bit more. End with something like "(or point me to whichever card feels loudest right now)" so they can steer if they want. Only go card-by-card again if they explicitly ask about a specific one.

Questions: When the spread lacks context (3+ cards, unclear what it's about), acknowledge what you're seeing, then create space: "There's something here about [brief observation]. What's this reading for?" Make it an invitation. Once you know, weave the cards into a story—how they're talking to each other, what narrative they're building together.

Your best questions aren't clarifying, they're generative. They help the person think differently, see a new angle, sit with something uncomfortable. Ask what would actually be useful to reflect on given where the conversation is.

Technical: Always italicize card names (*Card Name*). Never repeat yourself—if you need to reference something you already said, say it completely differently. Match their message length energy gradually (long messages → you can expand; short messages → stay warm but brief). This is a conversation, not a performance. Build on what's been said. Answer what they actually asked.

Tone: You're holding space for something vulnerable. Stay conversational, warm, curious. You're wondering with them, not telling them what to do.`
            }
        ];

        // Add conversation history (last 6 exchanges to keep context manageable)
        const recentHistory = chatHistory.slice(-6);
        recentHistory.forEach(exchange => {
            messages.push(
                { role: 'user', content: exchange.user },
                { role: 'assistant', content: exchange.assistant }
            );
        });

        // Add current context and user message
        messages.push({
            role: 'user',
            content: contextPrompt + 'User question: ' + userMessage
        });

        // Call Groq API
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${groqApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: messages,
                temperature: 0.7,
                max_tokens: 1024
            })
        });

        // Remove loading
        loadingDiv.remove();

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error?.message || `API Error: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        // Add AI response to chat
        addAIMessage(aiResponse);

        // Save to history
        chatHistory.push({
            user: userMessage,
            assistant: aiResponse,
            context: context
        });

    } catch (error) {
        loadingDiv.remove();
        addAIMessage(`Error: ${error.message}. Please check your API key and try again.`);
        console.error('AI Chat Error:', error);
    }
}

// Add user message to chat
function addUserMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.innerHTML = `
        <div class="user-message-content">
            <p>${escapeHtml(message)}</p>
        </div>
    `;
    aiChatMessages.appendChild(messageDiv);
    scrollChatToBottom();
}

// Add AI message to chat with typing animation and message chunking
function addAIMessage(message) {
    // Parse markdown italics: *text* -> <em>text</em>
    function parseMarkdown(text) {
        return text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    }

    // Split message into paragraphs (chunks)
    const paragraphs = message.split('\n\n').filter(p => p.trim().length > 0);

    let chunkIndex = 0;
    const messageContainer = document.createElement('div');
    messageContainer.className = 'ai-message';
    aiChatMessages.appendChild(messageContainer);

    function showNextChunk() {
        if (chunkIndex >= paragraphs.length) return;

        // Show typing indicator for chunks after the first one
        if (chunkIndex > 0 && paragraphs.length > 3) {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'ai-message-content';
            typingDiv.style.opacity = '0.5';
            typingDiv.innerHTML = '<p>...</p>';
            messageContainer.appendChild(typingDiv);
            scrollChatToBottom();

            // Wait 1-2 seconds, then remove typing indicator and show message
            const delay = Math.min(800 + Math.random() * 400, 2000);
            setTimeout(() => {
                typingDiv.remove();
                addChunk();
            }, delay);
        } else {
            addChunk();
        }
    }

    function addChunk() {
        const contentDiv = document.createElement('div');
        contentDiv.className = 'ai-message-content';

        const para = paragraphs[chunkIndex];
        const p = document.createElement('p');
        // Parse markdown and preserve line breaks
        p.innerHTML = parseMarkdown(escapeHtml(para)).replace(/\n/g, '<br>');
        contentDiv.appendChild(p);

        messageContainer.appendChild(contentDiv);
        scrollChatToBottom();

        chunkIndex++;

        // Continue to next chunk
        if (chunkIndex < paragraphs.length) {
            setTimeout(showNextChunk, 100);
        }
    }

    showNextChunk();
}

// Scroll chat to bottom
function scrollChatToBottom() {
    aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Send button click
aiSendBtn.addEventListener('click', () => {
    const message = aiChatInput.value.trim();
    if (message) {
        sendAIMessage(message);
    }
});

// Enter key to send (Shift+Enter for new line)
aiChatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        const message = aiChatInput.value.trim();
        if (message) {
            sendAIMessage(message);
        }
    }
});

// Auto-resize textarea
aiChatInput.addEventListener('input', () => {
    if (aiChatInput.value.trim() === '') {
        aiChatInput.style.height = '60px';
    } else {
        aiChatInput.style.height = 'auto';
        aiChatInput.style.height = Math.min(aiChatInput.scrollHeight, 400) + 'px';
    }
});

// Reset chat conversation
aiResetBtn.addEventListener('click', () => {
    if (chatHistory.length === 0) {
        showToast('Chat is already empty');
        return;
    }

    if (confirm('Reset this conversation? This will clear all chat history but keep your reading.')) {
        resetAIChat();
        showToast('Chat reset');
    }
});

// "Read my spread" quick-start button
aiReadSpreadBtn.addEventListener('click', () => {
    if (placedCards.length === 0) {
        showToast('Draw some cards first');
        return;
    }

    // Generate template and populate text box (don't send yet)
    const template = generateReadSpreadTemplate();
    aiChatInput.value = template;
    aiChatInput.style.height = 'auto';
    aiChatInput.style.height = Math.min(aiChatInput.scrollHeight, 400) + 'px';
    aiChatInput.focus();
});

function generateReadSpreadTemplate() {
    let template = 'help read this spread:\n';

    // Get all cards in order they were placed
    const spreadItems = [];

    placedCards.forEach((p, index) => {
        const reversedText = p.card.reversed ? ' (Reversed)' : '';

        // Try to find matching text box nearby
        let positionLabel = null;

        if (textBoxes && textBoxes.length > 0) {
            const cardRect = p.element.getBoundingClientRect();
            const cardCenterX = cardRect.left + cardRect.width / 2;
            const cardCenterY = cardRect.top + cardRect.height / 2;

            let nearestTextBox = null;
            let minDistance = Infinity;

            textBoxes.forEach(tb => {
                const tbRect = tb.element.getBoundingClientRect();
                const tbCenterX = tbRect.left + tbRect.width / 2;
                const tbCenterY = tbRect.top + tbRect.height / 2;
                const distance = Math.sqrt(
                    Math.pow(cardCenterX - tbCenterX, 2) +
                    Math.pow(cardCenterY - tbCenterY, 2)
                );

                if (distance < minDistance) {
                    minDistance = distance;
                    nearestTextBox = tb;
                }
            });

            if (nearestTextBox && minDistance < 300) { // Only match if reasonably close
                const textarea = nearestTextBox.element.querySelector('.text-box-content');
                const textContent = textarea ? textarea.value.trim() : '';
                if (textContent) {
                    // Use full text box content, preserving line breaks
                    positionLabel = textContent;
                }
            }
        }

        // If no text box found, use position from spread or number
        if (!positionLabel) {
            positionLabel = p.card.position || `Position ${index + 1}`;
        }

        spreadItems.push({
            position: positionLabel,
            card: p.card.name + reversedText
        });
    });

    // Format as numbered list with line breaks between cards
    spreadItems.forEach((item, index) => {
        template += `${index + 1}. ${item.position}\n${item.card}\n\n`;
    });

    return template;
}

function resetAIChat() {
    chatHistory = [];
    aiChatMessages.innerHTML = `
        <div class="ai-message">
            <div class="ai-message-content">
                <p>Chat reset. Ask me anything about your reading!</p>
            </div>
        </div>
    `;
}

function restoreAIChatDisplay() {
    aiChatMessages.innerHTML = '';

    if (chatHistory.length === 0) {
        resetAIChat();
        return;
    }

    chatHistory.forEach(exchange => {
        // Add user message
        const userDiv = document.createElement('div');
        userDiv.className = 'user-message';
        userDiv.innerHTML = `
            <div class="user-message-content">
                <p>${escapeHtml(exchange.user)}</p>
            </div>
        `;
        aiChatMessages.appendChild(userDiv);

        // Add AI response
        const aiDiv = document.createElement('div');
        aiDiv.className = 'ai-message';
        const paragraphs = exchange.assistant.split('\n\n').filter(p => p.trim().length > 0);
        const paragraphsHtml = paragraphs.map(p => `<p>${escapeHtml(p).replace(/\n/g, '<br>')}</p>`).join('');
        aiDiv.innerHTML = `
            <div class="ai-message-content">
                ${paragraphsHtml}
            </div>
        `;
        aiChatMessages.appendChild(aiDiv);
    });

    scrollChatToBottom();
}

init();
