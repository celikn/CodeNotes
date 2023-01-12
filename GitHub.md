### Error 
git@github.com: Permission denied (publickey).  <br />
fatal: Could not read from remote repository.   <br />
### Solution 
eval "$(ssh-agent -s)"  <br />
ssh-add "C:/Users/user.name/.ssh/id_ed25519"  <br />
