#!/bin/bash
# GIT_REPO_URL=$(git config --get remote.origin.url)

# # npm run build && gh-pages -d build


GIT_REPO_URL="https://github.com/bialign-workshop/bialign-workshop.github.io.git"


# Stop at the first failure. Without this, a failed `git init` below lets the
# following git commands fall through to the main repo and commit on its branch.
set -e

mkdir .deploy
cp -R ./* .deploy
cd build
git init .
if [ ! -d .git ]; then
  echo "deploy: git init failed in build/; aborting so nothing is committed to the main repo" >&2
  exit 1
fi
git remote add github $GIT_REPO_URL
git checkout -b gh-pages
git add .
git commit -am "Static site deploy"
# The build is ~100 MB; git's default 1 MB HTTP buffer makes GitHub reject the push (HTTP 400).
git -c http.postBuffer=524288000 push github gh-pages --force
# Drop the throwaway repo so build/ stays a plain folder in the main repo.
rm -rf .git
cd ..
rm -rf .deploy


# How to Update the Website in the Future
# To update the website, run these two commands:
# npm run build
# bash deploy.sh

# npm run build
# bash deploy.sh
# Or use the npm deploy script (which does both):
# npm run deploy


# git push origin gh-pages --force



# #!/bin/bas
# GIT_REPO_URL="https://github.com/bialign-workshop/bialign-workshop.github.io.git"

# # Create and copy to deploy directory, excluding node_modules
# mkdir .deploy
# cp -R ./* .deploy/ 2>/dev/null || :
# rm -rf .deploy/node_modules

# # Navigate to deploy directory
# cd .deploy

# # Initialize git and push to gh-pages
# git init
# git remote add github $GIT_REPO_URL
# git checkout -b gh-pages
# git add .
# git commit -am "Static site deploy"
# git push github gh-pages --force

# # Cleanup
# cd ..
# rm -rf .deploy

