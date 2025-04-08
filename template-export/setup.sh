#!/bin/bash

# Edge Education Template Setup Script
# This script helps users set up the Edge Education template

# Colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}==================================================${NC}"
echo -e "${GREEN}    Edge Education Template Setup Script${NC}"
echo -e "${GREEN}==================================================${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js is not installed.${NC}"
    echo -e "${YELLOW}Please install Node.js (version 18 or higher) from https://nodejs.org${NC}"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
NODE_MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1)

if [ $NODE_MAJOR_VERSION -lt 18 ]; then
    echo -e "${RED}Node.js version $NODE_VERSION is too old.${NC}"
    echo -e "${YELLOW}Please upgrade to Node.js version 18 or higher.${NC}"
    exit 1
fi

echo -e "${GREEN}Node.js version $NODE_VERSION detected.${NC}"

# Navigate to the template directory
cd edge-education-template || {
    echo -e "${RED}Could not find the template directory.${NC}"
    echo -e "${YELLOW}Make sure you're running this script from the download directory.${NC}"
    exit 1
}

# Install dependencies
echo -e "\n${GREEN}Installing dependencies...${NC}"
npm install || {
    echo -e "${RED}Failed to install dependencies.${NC}"
    echo -e "${YELLOW}Please check your internet connection and try again.${NC}"
    exit 1
}

# Setup completed
echo -e "\n${GREEN}==================================================${NC}"
echo -e "${GREEN}    Setup completed successfully!${NC}"
echo -e "${GREEN}==================================================${NC}"
echo -e "\nTo start the development server, run:"
echo -e "${YELLOW}cd edge-education-template${NC}"
echo -e "${YELLOW}npm run dev${NC}"
echo -e "\nThe application will be available at: http://localhost:5000"
echo -e "\nFor customization options, refer to the CUSTOMIZATION.md file."