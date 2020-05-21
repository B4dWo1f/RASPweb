# RASPweb

## DUC
Download the DUC from https://my.noip.com/#!/dynamic-dns/duc

### Install
$ cd /usr/local/src
$ sudo tar xzf noip-duc-linux.tar.gz
$ sudo cd no-ip-2.1.9
$ sudo make
$ sudo make install

### Make service
https://askubuntu.com/questions/1089704/cant-get-service-noip2-to-start-on-boot
Create the file /etc/systemd/system/noip2.service with:
```
[Unit]
Description=noip2 service

[Service]
Type=forking
ExecStart=/usr/local/bin/noip2
Restart=always

[Install]
WantedBy=default.target
```

### Make it a service
Create the service
$ sudo systemctl daemon-reload
$ sudo systemctl enable noip2

$ sudo systemctl status noip2
$ sudo systemctl start  noip2
$ sudo systemctl status noip2
$ sudo systemctl stop   noip2
$ sudo systemctl status noip2


### Link content
```
sudo chown -R n03l:n03l /var/www/html/**
ln -s $HOME/CODES/RASPweb/*.* /var/www/html/RASP/
ln -s /home/n03l/CODES/RASPweb/css/ /var/www/html/RASP/
ln -s /home/n03l/CODES/RASPweb/js/ /var/www/html/RASP/
ln -s $HOME/Documents/RASP/PLOTS /var/www/html/RASP/data/
```

## Enable https
From "Let's Encrypt" and "certbot": https://certbot.eff.org/lets-encrypt/ubuntubionic-apache

```
sudo apt-get update
sudo apt-get install software-properties-common
sudo add-apt-repository universe
sudo add-apt-repository ppa:certbot/certbot
sudo apt-get update
```

```
sudo apt-get install certbot python-certbot-apache
```
