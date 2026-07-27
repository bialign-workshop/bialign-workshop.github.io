#!/bin/bash
# GIT_REPO_URL=$(git config --get remote.origin.url)

# # npm run build && gh-pages -d build


GIT_REPO_URL="https://github.com/bialign-workshop/bialign-workshop.github.io.git"


mkdir .deploy
cp -R ./* .deploy
cd build
git init .
git remote add github $GIT_REPO_URL
git checkout -b gh-pages
git add .
git commit -am "Static site deploy"
git push github gh-pages --force
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

