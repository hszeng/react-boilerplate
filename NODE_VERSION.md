# Node.js Version Requirements

## Required Version

This project requires **Node.js 20.0.0 or higher**.

## Why Node.js 20+?

- **Storybook Compatibility**: Storybook 8+ requires Node.js 20+
- **Modern JavaScript Features**: Better support for ES2022+ features
- **Performance**: Improved performance and security
- **Long-term Support**: Node.js 20 is an LTS version

## How to Check Your Version

```bash
node --version
```

## How to Upgrade Node.js

### Using nvm (Node Version Manager) - Recommended

```bash
# Install Node.js 20
nvm install 20

# Use Node.js 20
nvm use 20

# Set as default
nvm alias default 20
```

### Using Homebrew (macOS)

```bash
brew install node@20
```

### Direct Download

Download from [nodejs.org](https://nodejs.org/)

## Automatic Version Check

This project includes automatic Node.js version checking:

- **Pre-install Hook**: Runs before `npm install`
- **Manual Check**: Run `npm run check-node`
- **Error Message**: Clear error if version is incompatible

## Files That Enforce Version Requirements

1. **`.nvmrc`**: Specifies Node.js version for nvm users
2. **`package.json`**: Contains `engines` field with version requirements
3. **`scripts/check-node-version.js`**: Version validation script
4. **`preinstall` script**: Automatic version check on npm install

## Troubleshooting

### If you get version errors:

1. Check your current version: `node --version`
2. Upgrade if needed: `nvm install 20 && nvm use 20`
3. Clear npm cache: `npm cache clean --force`
4. Reinstall dependencies: `rm -rf node_modules && npm install`

### If using nvm:

```bash
# Make sure you're using the right version
nvm use

# If .nvmrc exists, it will automatically use that version
cd /path/to/project
nvm use  # This will read .nvmrc and switch to Node.js 20
```
