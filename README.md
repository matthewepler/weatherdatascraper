Data Capture from Ambient Weather Device
===================

Background
-------------

[This is our weather station model](http://www.ambientweather.com/amws1400ip.html). It comes with a wireless receiver that connects to a router via ethernet to broadcast its data to the web. 

By using ‘curl’ commands, you can issue a GET request to the receiver’s built-in web host and get the latest data from the HTML data returned.

Requirements
-------------

 - Ambient Weather Station Ambient Weather [receiver
   unit](http://ep.yimg.com/ay/yhst-37697109791737/ambient-weather-ws-1400-ip-observer-solar-powered-wireless-ip-weather-station-with-internet-publishing-12.gif) 
   
 - Ability to set static IPs on your network reliably. 
	 - If you’re trying   to set this up in a work or school environment, you should talk to someone in IT about this. 
	 - OR, you can install your own access point for your existing network (also called a WISP, which can be done easily with something like [this](http://www.amazon.com/TP-LINK-TL-WR710N-Wireless-Repeater-Charging/dp/B00FRMAOIO/ref=pd_sim_147_13?ie=UTF8&dpID=31Tw6VyWLrL&dpSrc=sims&preST=_AC_UL160_SR160,160_&refRID=1TBQ7Z2F7AVGRN9EG9FH) or its battery-powered [brother](http://www.amazon.com/TP-LINK-TL-MR3040-Wireless-Portable-Compatible/dp/B0088PPFP4/ref=sr_1_1?ie=UTF8&qid=1448323147&sr=8-1&keywords=tp-link%20battery%20router)).



Setup
-------------

**Get the weather station working like it’s supposed to.**
Follow the instructions provided in the manual. If you’ve already physically installed the station, you can skip to section 5.6.2.

- When you get to the part where you’re configuring the receiver/station in your browser, make sure that you set up the unit to have a static IP address.
- Apply and reboot.
- Now go in your browser to the static IP address you assigned to your receiver to get back to the configuration page. Click on the “Live Data” tab at the top of the form. 
- Now spin the wind-o-meter part and wait a few seconds to see the updated data. You should see the wind data points change upon refresh (it will automatically refresh). If so, that means you are receiving real data and everything is working as expected.

----------

**Test with ‘curl’**

To access this same data in a different way, open up a Terminal shell. 

Make sure you’re connected to the same network the weather station receiver is on and enter the following command (replace the 192… with the static IP you assigned earlier):

    curl -X GET http://192.168.0.254/livedata.htm > html.txt

- Then, enter this command to read the result: `nano html.txt`
- Use your arrow keys to navigate the document and look for the `<tr>` tags that have to do with windspeed.
- Close the doc by pressing `Ctrl + O`, then Enter, then `Ctrl + X` to return to the command line.
- Spin the wind-o-meter again and while it’s spinning run the curl command again.
- Look up the results in the document (which has been overwritten with the new result) and check to see you got updated wind data. Try a couple of times if you don’t see it change on the first try.

----------


**Roll Your Own**
Now you can build your script with Node, Python, or whatever you want to get this data in a similar way. See the node script in this repo.

