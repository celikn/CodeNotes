### Error 
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.
### Solution 
eval "$(ssh-agent -s)"
ssh-add "C:/Users/user.name/.ssh/id_ed25519"
