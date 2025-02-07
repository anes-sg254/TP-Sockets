# TP SSH
## exercice1
* j'ai lancé cette commande:  ssh -i ./test/id_rsa user@localhost -p 2222 ls
* j'ai eu ça :
    -logs
    -ssh_host_keys
    -sshd
    -sshd.pid
* j'ai lancé cette commande: scp -i ./test/id_rsa -P 2222 fichier.txt user@localhost:

* j'ai eu ça en faisant ls :
   -fichier.txt
   -logs
   -ssh_host_keys
   -sshd
   -sshd.pid 