# Modular Version Test

This folder contains a **modularized version** of the tarot reader for testing purposes.

## Structure

```
modular-test/
├── ai-dev.html      # Development HTML (references external files)
├── ai.css           # All styles (~1,534 lines)
├── ai.js            # All JavaScript (~4,987 lines)
├── build.sh         # Build script (combines into single file)
├── ai-built.html    # Built single-file version (auto-generated)
└── README.md        # This file
```

## Development Workflow

### For Development (Editing)
1. Open `ai-dev.html` in your browser
2. Edit `ai.css` for styles
3. Edit `ai.js` for functionality
4. Refresh browser to see changes

### For Deployment
1. Run `./build.sh`
2. This creates `ai-built.html` (single file, identical to original)
3. Deploy `ai-built.html` to production

## File Sizes

- **ai-dev.html:** ~8KB (structure only)
- **ai.css:** ~40KB (styles)
- **ai.js:** ~220KB (logic)
- **ai-built.html:** ~270KB (combined)

## Token Consumption Comparison

### Before (Monolithic):
- Edit chat system: Load 6,851 lines
- Edit styles: Load 6,851 lines
- Every change: Full file

### After (Modular):
- Edit chat system: Load ~1,000 lines (ai.js chat section) ✅
- Edit styles: Load ~1,534 lines (ai.css) ✅
- Edit structure: Load ~270 lines (ai-dev.html) ✅
- **Token savings: 85-95%** 🎉

## Testing Checklist

Before considering this stable:

- [ ] Open `ai-dev.html` in browser - does it load?
- [ ] Draw cards - do they appear?
- [ ] Click card - does modal open?
- [ ] Add text box - does it work?
- [ ] Open AI chat - does sidebar appear?
- [ ] Save reading - does it persist?
- [ ] Load reading from history - does it restore?
- [ ] Test "Read This Spread" button
- [ ] Build with `./build.sh`
- [ ] Open `ai-built.html` - is it identical to `ai-dev.html`?
- [ ] Compare `ai-built.html` to original `../ai.html` - any differences?

## Advantages

✅ **Faster edits** - Only load the file you're working on
✅ **Better organization** - Clear separation of concerns
✅ **Easier collaboration** - Multiple people can work on different files
✅ **Version control** - Cleaner diffs, easier to review changes
✅ **Token efficient** - 85-95% reduction in tokens per edit

## Potential Issues

⚠️ **Build step required** - Must run `./build.sh` before deployment
⚠️ **File references** - Development version needs all 3 files in same folder
⚠️ **Browser caching** - May need hard refresh when switching between files

## Next Steps

If testing succeeds:
1. Update `.gitignore` to track modular files
2. Replace main `ai.html` with build process
3. Update development workflow documentation
