image: daocloud.io/library/ubuntu:14.04.3

services:
    - mongodb
    - rabbitmq

env:
    - PATH = '/var/lib/mongodb/'

install:
    - echo $PATH
    - echo "apt-get update"
    - echo "apt-get install -y sshd"
    - echo "wget https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-ubuntu1404-3.0.6.tgz & tar -zxvf mongodb-linux-x86_64-ubuntu1404-3.0.6.tgz"

before_script:

script:

