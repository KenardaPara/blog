#!/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# Build the project.
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

#simulasyonu ekle
mkdir public/simulasyon

cp -rvf simulasyon/besdata public/simulasyon
cp simulasyon/charts.js public/simulasyon
cp simulasyon/index.html public/simulasyon
cp simulasyon/papaparse.min.js public/simulasyon
cp simulasyon/ui.js public/simulasyon

# Go To Public folder
cd public

git config user.name "VaryemezAmca"
git config user.email "coder@kenardapara.com"
 git config commit.gpgsign false

# Add changes to git.
git add .

# Commit changes.
msg="rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"


# Push source and build repos.
git push origin master

# Come Back up to the Project Root
cd ..
