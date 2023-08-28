set dotenv-load := true

run:
	npm start

# Merge into your current branch
# Will need to ggpush after
merge-upstream:
  git fetch upstream
  git merge upstream/master
