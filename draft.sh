#!/bin/bash

echo -e "\033[0;32mPublishing drafts...\033[0m"

# Build the project.
export HUGO_GOOGLEANALYTICS="x"
hugo -D -d docs -b 'http://draft.kenardapara.com'

git config user.name "VaryemezAmca"
git config user.email "coder@kenardapara.com"


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
