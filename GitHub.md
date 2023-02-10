### Error 
git@github.com: Permission denied (publickey).  <br />
fatal: Could not read from remote repository.   <br />
### Solution 
eval "$(ssh-agent -s)"  <br />
ssh-add "C:/Users/user.name/.ssh/id_ed25519"  <br />



After creating ssh key, dont forget to autorize your organization (organization has enabled or enforced SAML SSO)
https://docs.github.com/en/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
