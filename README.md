# CS 561 CTF: Browser Spoofing

This is a CTF based around the idea of browser spoofing, from the UMass Spring 2023 CS 561: System Defense and Test. Enjoy!

## To Use

The container exposes port 3000 and starts a node server. Additionally, the JS script reads from `flag.txt`, which is supposed to be the secret flag that is the solution here. Feel free to change the flag so it's not public! Example file included.

Assuming `docker` and `docker-compose` are installed, simply run the following command to start the server:
```
docker-compose up
```

Then, navigate to `localhost:3000` in the browser to access the page. See if you can get the flag!
