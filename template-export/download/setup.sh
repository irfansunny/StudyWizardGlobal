#!/bin/bash

# Edge Education Template Setup Script

echo "🚀 Setting up Edge Education Template..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v14 or higher and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 14 ]; then
    echo "❌ Node.js version is too old. Please upgrade to v14 or higher."
    exit 1
fi

echo "✅ Node.js version $(node -v) detected."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "🔧 Creating .env file..."
    echo "SESSION_SECRET=your-secret-key-change-this-in-production" > .env
    echo "PORT=5000" >> .env
fi

echo "✅ Environment file created."

# Setup complete
echo "✅ Setup complete! You can now start the development server with:"
echo "   npm run dev"
echo ""
echo "📝 For customization instructions, see CUSTOMIZATION.md"
echo "🌐 Visit http://localhost:5000 once the server is running"
echo ""
echo "Thanks for using Edge Education Template!"