#!/bin/bash

source ./db.config

$PATH_MONGO $DB_HOST:$DB_PORT/$DB_NAME /home/dn4/config_erlang/update/config.js

if [ $? == 0 ]; then
        echo "Update config successfully!"
else
        echo "Update config failed!"
fi



