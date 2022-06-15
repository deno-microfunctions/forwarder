# Forwarder

Deno Module to forward requests.

## Usage Example including pm2 start

Note: "pathToCertFile" & "pathToCertKeyFile" are only needed if you want to forward from an https port like *443

```sh
  
deno run --allow-read --allow-net https://deno.land/x/forwarder/forwarder.ts <port> <targetURL> <pathToCertFile> <pathToCertKeyFile>

```

or via pm2 

```sh
git clone https://github.com/deno-microfunctions/forwarder.git
cd forwarder
pm2 start -n "deno-forwarder"  --interpreter="deno" --interpreter-args="run --allow-net --allow-read" ./forwarder.ts -- <port> <targetURL> <pathToCertFile> <pathToCertKeyFile>

```


## Support my Open Source Contributions  

If you like my work, you might - after doing your own research - consider investing into [cultao.io](https://cultdao.io). 
