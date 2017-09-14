window.SpaBlog = window.SpaBlog || {}; // Our namespace

(function (SpaBlog) {
    SpaBlog.posts =
        [
            {
                "title": "Building a real SPA blog",
                "published": true,
                "publishDate": "2017-08-08T06:00:00.000Z",
                "summary": `This blog is a real single-page application with no server code or database. It\'s refreshingly easy to work with.`,
                "niceUrl": "/2017/08/building-a-real-spa-blog",
                "text": `<h4>tl;dr</h4>This blog is created with <i>Knockout</i> and <i>Materialize</i>, and have all blog posts in a single <i>JavaScript array</i>. All static.
                
<h4>Medium</h4>I wanted a blog. A plain and simple blog. More often than not I read blog posts hosted by <a href="https://medium.com/">medium.com</a>. It seems like they are really dominating these days (at least for tech blogs). And I understand why; the layout is so simple yet attractive and easy to read.
                
I expected to settle with a medium.com blog. However, it isn't possible to have ads in the blog posts. And I wanted that.

<h4>Wordpress</h4>Wordpress has ruled the world for quite a long time. <a href="https://wordpress.com">wordpress.com</a> of course costs money if you want to make any money using ads. I don't expect many dollars in income, so I'd like to avoid any fixed costs. Then there is <a href="https://wordpress.org">wordpress.org</a>, but I don't really want to host it myself and stay up to date with <a href="https://www.cvedetails.com/product/4096/Wordpress-Wordpress.html">security issues</a> and all.

<h4>Blogger</h4>I looked at Google's <a href="https://blogger.com">blogger.com</a>. Customizing the layout and templates I thought I was getting there. They have some really nice features. But I couldn't make it look and feel exactly right. And it felt cumbersome to do all the adjustments to get where I wanted.

<h4>Good old days</h4>I knew I didn't want to reinvent the wheel. If this had been somewhere from 2000 to 2007 I probably would have mashed something together using PHP and MySQL. But the thought of doing that in 2017 repelled me. I didn't want any database setup, SQLs or stuff that takes time from creating the actual product.

<h4>Cloud hosting</h4>Further on I didn't want some hosting at one of the big companies offering "free" (they tend to end up costing a few bucks) backend hosting with all the hassle of setting up a new environment and installing some SDKs that needs to be constantly updated or suddenly removes support for some version of whatever you use.

<h4>Requirements</h4>Basically I had the following requirements.
<ul><li> - High readability and ok design</li><li> - Ad support</li><li> - Simple hosting</li><li> - Easy, but advanced customization</li><li> - Quick to set up with no hassle (no database setup, easy development, no unecessary heavy build systems)</li><li> - SEO friendly</li></ul>
<h4>Solution</h4>I was wondering about using just static HTML files. That would indeed answer most of my requirements. But then I thought about having a simple JavaScript SPA.

<h5>JavaScript framework</h5>I suppose <a href="https://angular.io/">Angular 2</a> or <a href="https://facebook.github.io/react/">React</a> would be among the most logical choices of JavaScript frameworks in 2017. But I wanted productivity and not use a lot of time to learn yet another framework when all I want is a quick and simple blog, so I went for good old <a href="http://knockoutjs.com/">Knockout</a> which I have used quite a lot as earlier on as an IT consultant.

<img class="materialboxed responsive-img" title="Knockout js dead? Not the Google auto completion you want." data-caption="Knockout js dead? Not the Google auto completion you want." alt="Is Knockout JS dead?" src="/images/knockout-js_dead.png">

While one might argue that Knockout is beyond its prime time, it sure works great and it is mature. And no matter which newer JavaScript framework I would go for it would soon be considered "old". If you haven't read the article <a href="https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f">How it feels to learn JavaScript in 2016</a> by Jose Aguinaga, you really should. It's painful to read, but so true.

<h5>Design</h5>I'm no designer. So I like to use UI frameworks that ensures that I can't get it completely wrong. I really like Google's <a href="https://material.io/guidelines/">Material Design</a> and is used to using it on Android. I quickly found <a href="http://materializecss.com">Materialize</a> and haven't looked back. It has great features and is a joy to use. I just wish it didn't depend on jQuery.

<h4>GitHub project</h4>If you're interested you can have a look at the source code for this blog at <a href="https://github.com/roys/js-web-blog">https://github.com/roys/js-web-blog</a>. The project itself is licenced under the MIT License, but for the contents (posts and images) I reserve all rights.
`,
                "images": ["/images/knockout-js_dead.png"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "JavaScript",
                        "url": "/javascript"
                    },
                    {
                        "title": "SPA",
                        "url": "/spa"
                    }
                ],
                "commentsIdentifier": "http://blog.roysolberg.com/2017/08/get-your-ssn-here"
            },
            {
                "title": "Security vulnerability disclosures",
                "published": true,
                "publishDate": "2017-08-09T21:00:00.000Z",
                "summary": `I\'m preparing a series of posts where I\'m disclosing several security vulnerabilities that I discovered the spring and summer of 2017.`,
                "niceUrl": "/2017/08/security-vulnerability-disclosures",
                "text": `<h4>tl;dr</h4>Over the years I've discovered so many security holes and information leaks on the Internet. Earlier I've only notified the involved parties, but I think it's time to go public doing "responsible disclosure".
                
<h4>The purpose</h4>Working with preparing these posts I've asked myself repeatedly if I should go public with my findings or not.

I'm still not entirely sure what the right answer is. What I do know is that <b>I want increased focus on web security</b> and that I feel a <a href="https://en.wikipedia.org/wiki/Social_responsibility">social responsibility</a> to do so.

The purpose of posting these vulnerabilities is fivefold:
 - Make people aware that close to all their personal information is already in the hands of anyone who wants it.
 - I want computer security to be a (bigger) part of the IT education and training.
 - I want computer security to be a natural part of any developer's mindset.
 - I want businesses to know that there might be consequences of being sloppy with people's data.
 - Make your and my own data more safe.

<b>Hopefully the issues presented on this site can be a small part of getting some kind of discussion on how to deal with computer security and personal data.</b>

<h4>What I have done</h4>While looking for security vulnerabilities I have followed a few simple rules.

<h5>What I have done:</h5> - Only looked at webapps (frontends and APIs) and mobile apps
 - Only looked at Norwegian services (though some are internationally available)
 - Immediately reported any security concerns and given reasonably time to fix any problems
 - Only spent minutes until I found some security hole or information leak

<h5>What I have not done:</h5> - Not hid my identity:
   - I have worked from my home IP
   - When logged in I have used my own personal account
   - I have not tried to fly under the radar in regards of staying out of logs etc.
 - Not looked for or used security holes in operating systems, app servers, networking equipment, etc.
 - Not interferred with the operation of the webapps or companies
 - Not altered or deleted any data
 - Not stored any personal data or even tried accessing anything beyond proving the weakness

<h4>Information sensitivity</h4>The levels of the sensitivity in the information leaks I found vary. They go all the way from <i>"Nah, I dont really care"</i> to <i>"0hly shit, this is not cool"</i>. But I think they all represent some unique points in respect of vulnerabilities and in respect of type of personal information.

<h4>Reponsible disclosure</h4>I'm all for <a href="https://en.wikipedia.org/wiki/Responsible_disclosure">responsible disclosure</a> and have immediately reported my findings. Generally I'm not publishing any details the problem has been confirmed fixed. However, sadly, in some cases there's just no interest or response from the other party.

If you want more thoughts about responsible disclosure I would recommand reading <a href="https://www.troyhunt.com/kids-pass-just-reminded-us-how-hard-responsible-disclosure-is/">Troy Hunt's site</a> (and maybe especially the video in that link).
`,
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Background article",
                        "url": "/background"
                    }
                ]
            },
            {
                "title": `Case #1: Get your Social Security numbers here!`,
                "published": true,
                "publishDate": "2017-08-14T05:30:00.000Z",
                "updateDate": "2017-08-17T16:50:00.000Z",
                "summary": `Using only the plate number of a Norwegian car you can find the name, address, Social Security number, etc. of the owners.`,
                "niceUrl": "/2017/08/get-your-ssn-here",
                "text": `<h4>tl;dr</h4>While <a href="https://en.wikipedia.org/wiki/National_identification_number#Norway">Norway's version of the Social Security number (SSN)</a> isn't considered sensitive personal information, it can still be used for ID theft and is sometimes treated as an authenticator and not only used for indentification. Knowing (or systematically picking) a car's number plate you can get quite a bit of personal information about the owners. Also, services hosted alongside the one in question seem to have dubious security.

<h4>Summary</h4><table class="summary">
    <tr>
        <td style="width:30%">Who:</td>
        <td>Tryg's mobile app and Infotorg's web services</td>
    </tr>
    <tr>
        <td style="width:30%">Severity level:</td>
        <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
    </tr>
    <tr>
        <td style="width:30%">Reported:</td>
        <td>February 2017</td>
    </tr>
    <tr>
        <td style="width:30%">Reception and handling:</td>
        <td><span class="red-text">Very poor</span></td>
    </tr>
    <tr>
        <td style="width:30%">Status:</td>
        <td><span class="red-text"><strike>Not fixed</strike></span> <span class="green-text">Fixed after this post was published</span></td>
    </tr>
    <tr>
        <td style="width:30%">Issue:</td>
        <td>A lot of personal info available for anyone who wants it</td>
    </tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4><img style="float:left;width:240px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from Tryg's app Trygg på reise." data-caption="Screenshot from Tryg's app Trygg på reise." src="/images/tryg-trygg_paa_reise.png"/>The way to get the name (typically to look up the phone number to make contact) of a car owner in Norway has typically been to just send an SMS that costs some cents. A friend and former colleague told me about the insurance company Tryg's app <a href="https://play.google.com/store/apps/details?id=com.no.tryg&hl=en">Trygg på reise (Safe travel)</a> where you can look up this information for free (plus Google broke their SMS app Hangouts making it impossible to send SMSes to 4 digit phone numbers). I had used it for quite a long time when one day I was curious about where it got its data from, if it maybe was possible to create some services on top of that data.

<h4>Approach (technical stuff)</h4><h5>HTTP proxy</h5>If you want to intercept traffic between a server and a mobile app (even SSL), the HTTP proxy <a href="https://www.charlesproxy.com/">Charles</a> (and Android 6 or below for SSL) is the <b>the</b> way to go. It's very easy to use and gives a very good overview of the data going back and forth. And it let's you easily copy the HTTP requests as <a href="https://curl.haxx.se/">Curl</a> commands.

Within a couple of minutes you have a pretty decent control of the HTTP calls for that app.

<h5>Web Service endpoint</h5>The first surprise I got was that the app and server actually use the procotol <a href="https://en.wikipedia.org/wiki/SOAP">SOAP</a> which is just terrible to work with. (I suspect people having to use, develop and debug SOAP services live in a fog of <a href="http://www.urbandictionary.com/define.php?term=FML#1256378">#FML</a>.)
<!--img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="We can finally get all the details about the real-life replica of Il Tempo Gigante. Picture by Curt (https://www.flickr.com/photos/curt-dk/ / CC BY-NC 2.0)" data-caption="We can finally get all the details about the real-life replica of Il Tempo Gigante. Picture by Curt (https://www.flickr.com/photos/curt-dk/ / CC BY-NC 2.0)" src="/images/il_tempo_gigante.jpg"/-->
<img style="width:300px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Some of the data about the real-life replica of Il Tempo Gigante returned by the web service." data-caption="Some of the data about the real-life replica of Il Tempo Gigante returned by the web service." src="/images/il_tempo_gigante_ws.png"/>The second surprise was that the web service actually sent back much more info than what it display in the user interface in the app, and not only the municipality that you also get with the amentioned SMS service. I've summarized all the details further down after all the technical details here. <b>But seeing both the owner and co-owner's SSNs and addresses surprised me the most.</b>

I noticed that the web service call always included the username and password instead of the returned session id. No biggie, but a bit strange. <b>The strings for usernames and password were all upper case and only 6-7 characters long. The password was almost the same as the username and all of them containing the name of the customer and the abbreviation of the service name. I hope that isn't the standard, that it gives me a clue on how the logins for the other services are.</b>

<img class="materialboxed responsive-img" title="Curl version of the HTTP request from the Tryg app." data-caption="Curl version of the HTTP request from the Tryg app." src="/images/curl_infotorg.png"/>
<h4>Security issue?</h4>The data returned is returned as intended, so there's so information leak in itself. The web service works as it should. However, <b>it's more questionable if it's okay that a service like to be facing a public client</b>.

The data returned from the service is as follows:
 - The owner's first, middle and last name (alt. company name)
 - The owner's full address
 - The owner's Social Security number (org.no. if company)
 - The owner's birthday (as it's part of the SSN in Norway)
 - Any co-owner's first, middle and last name
 - Any co-owner's full address
 - Any co-owner's Social Security number
 - The co-owner's birthday (as it's part of the SSN in Norway)
 - A lot of technical data about the vehicle
 - The insurance company and date of the vehicle insurance
 - The insurance company and dates of the previous vehicle insurance
 - The name of the previous owner
 - Info if and when the vehicle was stolen

<b>Is this okay?</b> All the app does is show the name of the owner and details about the vehicle itself.

Apparently the name of the co-owner and previous owner is public information according to the law called <a href="https://lovdata.no/dokument/NL/lov/2006-05-19-16">Offentlighetsloven (Freedom of information act)</a> (Norwegian link only).

<h4>But wait, could there be more?</h4><a href="https://www.infotorg.no/alle-tjenester">Infotorg provides quite a few services.</a> (Norwegian link only, sorry.) Having the URL for the web service I of course checked out what else was on the server. I was a bit surprised to see that the root site had a seemingly complete list of all the services available at Infotorg. There were links to the documentation and WSDLs (Web Services Description Language) telling about all these services available and how to connect to them and use them. And these services do indeed contain much more sensitive information. There is a national population register, financial information, credit assement, employee register, lay judge register, etc. etc. <b>It's important to note that I never had (or tried to get) access to these other services. My point is that the openess is a bit too much, and seemingly the user credentials policy isn't very strict. But this is just speculation.</b>

To add to the eerie feeling about these services there are links to some test site and test CMS and information about a test client. Google has of course indexed all these other sites and sub domains. Also there are pages giving errors that gives more information about infrastructure and services running.

<h4>Reception and handling</h4><h5>Day zero</h5>I sent an e-mail to the contact e-mail address provided by Tryg at the app's Play Store page. <b>I never got an answer.</b>

I also used a web form to get in touch with Infotorg.

<h5>Day 1 - X</h5>I got an answer from Infotorg in less than 24 hours. That's prompt, that's good. And they wanted more details.

When I provided more details with an example Curl command for them to try I got an automatic e-mail back telling that the person handling this was unavailable. <b>I never heard back after that</b>, so I tried again one month later and this time including a e-mail address from the automatic e-mail that was supposed to be used for urgent cases. <b>I never heard back.</b> So I tried again writing both e-mails again five days before publishing this. <b>I never heard back.</b>

<h5>Day 186</h5>I'm publishing this post. So is this responsible disclosure? Yes, I tried hard to get an answer. But on the other hand, it seems to me that the involved parties don't think that this is a disclosure to begin with, and that it isn't a problem.

<div style="background-color:#ffecb3;padding:10px 10px 15px 10px;" class=""><h4 id="udpate">Update</h4><h5>Day 187 - Tuesday - post publish day 1</h5>Tryg's user at Infotorg's service got closed (as far as I understand, after Tryg contacted Infotorg).

<h5>Day 188 - Wednesday - post publish day 2</h5>Tryg reached out to me. They thanked for the help finding the issue, said they were sorry for it being there in the first place, and told me it had been resolved.

<h5>Day 189 - Thursday - post publish day 3</h5>digi.no published the article <i><a href="https://www.digi.no/artikler/norsk-mobilapp-apnet-for-tapping-av-masse-informasjon-om-norske-bileiere/400386">Norsk mobilapp åpnet for tapping av masse informasjon om norske bileiere</a></i>.

Tryg <a href="#comment-3472389318">commented on this post</a> here themselves.

<b>I think Tryg has - when the information finally reached them - has handled the case very well. They reacted promptly, fixed the problem, and has been very open and honest about everything. I'm really happy with that.</b>
</div>

<h4>Some fun facts</h4><h5>Fun fact #1: The previous King of Norway had his cars registered on him personally</h5><a href="https://no.wikipedia.org/wiki/Kongelige_biler_i_Norge">His Majesty The King has got a few cars</a>. Looking up e.g. the one with licence plate <i>A-1</i> you'll see that now the car is registered with <i>The Royal Court</i>, but it used to be registered directly on our previous King - <a href="https://en.wikipedia.org/wiki/Olav_V_of_Norway">Olav V</a>. They have also trusted the insurance company <a href="https://if.no">If</a> since 1995.

<h5>Fun fact #2: The service also works for Norway's new personal licence plates</h5>The summer 2017 Norwegian Public Roads Administration opened for paying to get your own personal licence plate. It's been quite a few news articles about people getting different funny and fascinating plates. The web service in question works for those as well. Maybe something to think about before sticking your head out there.

<h5>Fun fact #3: Exposed by one single post</h5>Reporting this issue I got a question back for more details. There's no better way to understand a security issue than seeing your own data. The person who responded had got this fully closed private Facebook profile. Or, did he? Well, he had <b>one single public post; a check-in</b>. The check-in was from when he got a free car wash from a big radio show in Norway. In that post there was a picture of the car in the car wash. So he got a pretty low profile on the Internet, but still one could look up the name, address, SSN, etc. Doesn't that hurt just a little bit?

<h4>Conclusion</h4><b>We should probably not fear for our SSN. But I'm still not sure if I like the idea that just based on a licence plate anyone should get your full address or know any details about your insurances.

Further I hope all of Infotorg's more sensitive services are much more secure than first impression I got; that they are alerted if anyone tries any brute force attacks or systematic information gathering, and that the logins don't consist of only a few capital letters.

Also, I wish that it wasn't so hard to get the attention when trying to report a security concern...</b>

<h4>At last some - hopefully - far fetched ideas</h4>I call this "far fetched", because it's hard to believe it would happen, but I can't help thinking it.

We know from media the later years that governments from different countries do collect quite a bit of intelligence and information about people. Wouldn't be interesting for some states to get a catalogue of a big part of Norway's population? I mean, they get a real one-to-one identifier and full names and quite a bit of meta information. Combining this information over time with information from other sources? Observering a dataset like discussed here over time, one can get a sense of family relations, split-ups, address changes, income changes, etc. Is that okay? What if you at some point shared an address with a person that has got an entry ban in a country you want to travel to? Should they stop you too just to be sure?

What about insurance companies? They could in theory use the dataset to target potential customers. If they know that they beat the prices of one other particular insurance company they could make contact and try to sell their product instead. But then again, they have probably always had full access to these data.

If you use your imagination I'm sure you can come up with other ways to (ab)use the data.
`,
                "images": ["/images/il_tempo_gigante_ws.png", "/images/tryg-trygg_paa_reise.png", "/images/curl_infotorg.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Social Security numbers",
                        "url": "/ssn"
                    },
                    {
                        "title": "OWASP 2013 A2",
                        "url": "/owasp-2013-a2"
                    },
                    {
                        "title": "OWASP 2013 A6",
                        "url": "/owasp-2013-a6"
                    }
                ],
                "commentsIdentifier": "http://blog.roysolberg.com/2017/08/get-your-ssn-here"
            },
            {
                "title": `Case #2: Good authentication, but lacking authorization`,
                "published": true,
                "publishDate": "2017-08-21T07:00:00.000Z",
                "summary": `That a service is heavily gated doesn't mean that your information is safe. I'm taking it down a notch this week; this is not a severe case, but an OK reminder for us developers on how we protect our resources and to never trust the client.`,
                "niceUrl": "/2017/08/auth-auth",
                "text": `<h4>tl;dr</h4>The service uses the industry de facto standard for high security in Norway - <a href="https://bankid.no">BankID</a> - for authentication, but still missed authorization check on a HTTP PUT call. A classical weakness to be found in web apps of today.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td>Anonymous, let's call them <a href="https://en.wikipedia.org/wiki/Fictional_company">Acme</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Very low</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>March 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Very good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>1 x <a href="https://www.norsk-tipping.no/flax">Flax scratch ticket</a> (≈3 USD (1:600,000 chance to win 125,000.- USD (but no, I didn't win anything)))</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Missing authorization on REST endpoint + still authenticated after browser timing out session</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>Acme is a "service booklet" for your home. It's a place to store all of the documentation about who's done what and your proof that all is ok if you were to sell your home. Everything about my house is stored at their servers.

I got a "snap" of 5 scratch tickets from a friend that he got from Acme for reporting some problem with him getting the wrong house number. I thought maybe there could be an easy way for me to get some scratch tickets as well.

<h4>Approach (technical stuff)</h4>This was a quick one I did while grabbing some lunch one Saturday.

<h5>Browser developer tools</h5>I logged in to Acme using BankID and having <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome DevTools</a> open. I surfed back and forth and got an impression of the webapp and got a list of URLs that was being called + headers and cookies and whatnot.

As with most webapps today there were a lot of Ajax calls going on, transfering JSON. I then tried replacing some IDs in URLs. In general stuff seemed pretty good. The security seemed to be in place.

Then I saw this sort of "task list" where you have these set tasks - and can create new ones - for stuff you need to do with your home. You can also share them with third parties so they can do them for your and sign of on the work done. Once finished can set the task to status <i>Done</i>.

<h5>Curl</h5>Most developer tools for browsers let you copy any HTTP request as a <a href="https://curl.haxx.se/">Curl</a> command. <b>I got an ID of one of the tasks of my friend and his approval to change the status of it.</b>

I've changed URLs and IDs, but otherwise it was this command used:<pre class="prettyprint">
curl 'https://example.com/UpdateTask' \\
    -H 'Cookie: &lt;some cookies for BankID, session and Google Analytics&gt;' \\
    -H 'Origin: https://example.com' \\
    -H 'Accept-Encoding: gzip, deflate, br' \\
    -H 'Accept-Language: nb-NO,nb;q=0.8,no;q=0.6,nn;q=0.4,en-US;q=0.2,en;q=0.2' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Accept: application/json, text/plain, */*' \\
    -H 'Referer: https://example.com/app/index.html' \\
    -H 'X-Requested-With: XMLHttpRequest' \\
    -H 'Connection: keep-alive'  \\
    --data-binary '{"taskId":&lt;some other person\’s task ID&gt;,"status":true}' \\
    --compressed</pre>
<b>And bingo, the server returned HTTP 200 and the task was changed.</b>

<h5>Session management</h5>Returning to my computer some time after doing this, the browser told me I got logged out because of the session being timed out. I tried one of the Curl commands one more time and saw that the HTTP request went through and returned HTTP 200. <b>Appearantly I was still logged in and had a valid session even though my browser told me otherwise.</b>

<h4>Classical issue</h4><b>I think this is one of the more common issues in web apps today. When authorization of GETting data is in place, one have a tendency not to check if the client is allowed to do what he's telling the server when PUTting data back.</b>

<h4>Reception and handling</h4><h5>Day zero</h5>I sent an e-mail telling about the two minor issues.

<h5>Day 2 - before noon</h5>I got a long and well-written reply thanking me for finding the issue and telling that the developers were looking at it. They also went on telling that they were growing and there was a new employee coming in who would have the service's security as its responsiblity.

<h5>Day 2 - night</h5>I got an update. <b>They had found the authorization issue and were in the process of fixing it.</b> In regards of the session still being valid they said it was just that the sever had one hour session timeout while the JavaScript app had it set to 20 minutes.

<h4>Anonymous you say?</h4><b>I contacted Acme telling them that I was posting this. Until then they were very professional and open, but suddenly they became a bit defensive.</b> And they wanted to "inform me" that I had broken their terms the moment I had checked if they had any security holes. They did not want me to mention their company name or brand. They were afraid of the media. I can fully understand that. Who doesn't want to protect their brand?

<b>I think they have handled the situation so well, and the issue was so minor, that I want to encourage them to come forward.</b>

<h4>Conclusion</h4>This was a minor issue, but an issue I see quite a bit. The reception and handling was good, at least until I told I was publishing this. Developers: Go and check those POST and PUT requests and double check that you verify if the client is allowed to do what it wants to.
`,
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "Session handling",
                        "url": "/session-handling"
                    },
                    {
                        "title": "OWASP 2013 A2",
                        "url": "/owasp-2013-a2"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ],
                "commentsIdentifier": "http://blog.roysolberg.com/2017/08/auth-auth"
            },
            {
                "title": `Case #3: Who's got your IP address today?`,
                "published": true,
                "publishDate": "2017-08-28T04:45:00.000Z",
                "summary": `One of the "digital mailbox" services used by more than 400 central and local Norwegian government agencies to send mail, was leaking IP addresses and full names.`,
                "niceUrl": "/2017/08/digipost-leak",
                "text": `<h4>tl;dr</h4><i>Digipost</i> - one of two "digital mailboxes" in Norway where you can get mail from public authorities - leaked users' full real name, IP addresses and login timestamps.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://www.posten.no/en/">Norwegian postal service's</a> <a href="https://www.digipost.no/">Digipost</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="orange-text">Medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>May 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Very good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>125 USD worth of gift certificates</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with users' name and IP address</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>In Norway we have two official suppliers for a "digital mailbox" where Norwegian public agencies can send you letters and documents. It's considered a more secure way than regular mail for delievering important letters and documents. The mailboxes have been pushed pretty hard the last couple of years, ensuring that as many as possible will sign up for it.

I've personally used Digipost for quite a few years now. I think it's a great service for receiving important documents. One day I was wondering if my information and documents were safe with them.

<h4>Approach (technical stuff)</h4><h5>HATEOAS</h5>Earlier on I used to attend the very good Java conference <a href="https://javazone.no/">JavaZone</a> every year. Five years ago I was at a talk from a couple of consultants working with Digipost, called <a href="https://vimeo.com/49392437">Hypermediadrevet API i praksis</a> (Hypermedia driven API in practice). It was an inspiring talk which made me make at least the next REST API hypermedia driven.

Little did I know that I would use this "Hypermedia as the Engine of Application State" (HATEOAS) to an advantage when looking for security issues at the same site years later. Simply explained, the HATEOAS makes REST APIs more self-documenting and easier to browse through using the links provided.

<h5>Browser developer tools</h5><img style="width:500px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Wait a minute, those aren't my logins? Screenshot from Chrome containing JSON with login history." data-caption="Wait a minute, those aren't my logins? Screenshot from Chrome containing JSON with login history." src="/images/digipost_eventlogs.png"/>I logged in to Digipost having <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome DevTools</a> open to see what was going on. I opened one or more of the REST URLs in a different tab. Having a JSON viewer browser extension like <a href="https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa">JSON Formatter</a> (that hopefully doesn't ship everything it sees to a third party server) makes looking at JSON a pleasure. The API being hypermedia driven meant that you get instant linkification and can browse through the data quickly.

Digipost seemingly uses an auto increment integer as ID for the user, making it easy to check if your data is secured against the access of others. (Remind me to write a post about the pros and cons against IDs like that (and no, security by obscurity does not make your data safe)). I changed a few IDs here and there and mostly got different kinds of error messages thrown back at me. <b>However, I quickly found two URLs that didn't seem to have a proper authorization check.</b>

<h4>Security issue</h4>Two URLs without proper authorization checks was found.

The first URL apparently returned the number of unpaid invoices you have. Not something you would care about if someone accessed.

<b>The second one was the alarming one for me. It returned the account activities for the past 30 days.</b> The data had the following elements:
- Date of activity
- <b>Full name</b> of the person performing the activity
- Type of activity (e.g. level of authorization and authentication method)
- <b>IP address</b> of client
- The role of the person

<h4>What's the big deal about this?</h4>The information exposed isn't sensitive, so why should you care? Well, I think there are two important points here.

<b>The first point is that a service like this - promoted and pushed by the government - should have zero tolerance on any kind of information leak.</b> As system developers we make mistakes all the time. Every week we go to work and create new bugs. Hopefully they aren't security related, but sometimes they are. When working with services like this it's so incredibly important to have proper methods and routines to minimize the chance that this can't happen.

<b>The second point is that I think the combination of a full real name and a fresh IP address is unfortunate.</b> It doesn't really matter for me, and probably not for you, but what about public figures or persons with unlisted addresses?

<h4>Reception and handling</h4><h5>Day zero</h5>At night I sent an e-mail to the customer service.

<h5>Day 2</h5>Less than 48 hours afterwards I got an e-mail apologizing that I didn't receive an answer before and telling that they had fixed the issue and were going to deploy it the same day.

<h5>Day X</h5>I received a reward of some gift cards which I appreciated, but what might've impressed me the most was that the chief of security actually took the time to add hand written thank you note.

<b>I think the issue in question was handled very well. Digipost responded quickly, fixed it quickly, and communicated in a clear and professional way. Even when reaching out telling about this post they responded in the same manner.</b>

<h4>Conclusion</h4><b>It's important to underline that I never got access to any documents, communication or any information regarded as sensitive.</b> But for me this is a type of service that should have the same level of security as a bank. There just shouldn't be any information leaks. I truly believe that the information leaked could've be used for bad purposes.
`,
                "images": ["/images/digipost_eventlogs.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ],
                "commentsIdentifier": "http://blog.roysolberg.com/2017/08/digipost-leak"
            },
            {
                "title": `My dumb smart home`,
                "published": true,
                "publishDate": "2017-08-31T05:15:00.000Z",
                "summary": `My smart home isn't all smart. When it comes to security it's pretty dumb.`,
                "niceUrl": "/2017/08/my-dumb-smart-home",
                "text": `<div style="background-color:#ffecb3;padding:10px 10px 10px 10px;">This post was originally <a href="https://plus.google.com/+RoySolberg/posts/gNt4paU7KEZ">published on Google+</a> September 2015.</div>
<h4>tl;dr</h4>It isn't that the home automation system <a href="http://www.hdlautomation.com/">HDL-BUS Pro</a> has any security holes; it doesn't have any security. If your house, the hotel you're staying on or your business uses HDL you should definitely read on.
                
<h4>Intro</h4>This spring I moved into my new house. When building a house in 2014/2015 you kind of feel obligated to make it a bit smart. Being a programmer it makes it a must. I looked into quite a few systems and protocols for home automation. Since this is a new building I preferred a cabled system instead of a wireless one. The electrical contractor for the house wasn't much updated on smart homes, but luckily they had a few electricians which knew and installs HDL-BUS Pro systems. So a bit coincidentally I ended up with HDL.

Long before the actual installation I went to a training for "programming" (configuring really) the system. I was very curious about the underlying protocol and how stuff worked under the hood. Luckily HDL is open about its buspro protocol - and that's a healthy sign - and I learned about and was given the specification for the internal communication between the components. This was when I first was a bit surprised about the lack of security. <b>It's a straight forward simple protocol - and that's a good thing - but it completely lacks encryption, authentication and authorization.</b>

HDL has a component called IP gateway which is a gateway between ethernet and the wired HDL components. The IP gateway is necessary to configure the components through the Windows application called HDL-BUS Pro Setup Tool. It also supports remote configuration from anywhere on the Internet.

<h4>Security precaution #1</h4>If you have an IP gateway connected to your ethernet you want to make that a network that isn't reachable for unauthorized parties - meaning that both wired and wireless network shouldn't be available for anyone you don't trust. My neighbour was over the other day and casually asked "What's the password for the Wi-Fi?" Of course, I run the guest Wi-Fi in my house on a separate network so I could give him access. However, I suspect that most people (or businesses) with HDL don't realize the dangers and let anyone access the same network. If you want your IP gateway to be available via your Wi-Fi you want to make sure that the encryption, password and security in general is at a high level.

<h4>Security precaution #2</h4>Very much like the precaution #1 regarding Wi-Fi and cabled ethernet, you should think twice if you have your ethernet available over your powerlines. What about that power outlet you have outside your house or just inside the garage?

<h4>Security precaution #3</h4>With so many "trusted" devices connected to your Wi-Fi chances are that the security in or more of them have been comprimised. A typical home Wi-Fi for a family have several phones, tablets, laptops, TVs, and a video game console connected. Also with Internet of Things on the rise more and more units are allowed on your local network. If only one of those are compromised, someone could theoretically get access to your smart home. Considering precaution #1-3 you probably shouldn't have the IP gateway connected to the ethernet at all.

<h4>Security precaution #4</h4>Do you have any outdoor sensors for e.g. temperature or motion connected to your system? Well, I don't think you should. What happens if someone hooks up an IP gateway and a computer on that unit or the unit's wires? Correct, they have full access to your system.

<h4>Security precaution #5</h4>Being on a ethernet with a HDL system and recent version of the IP gateway's firmware lets you enable remote access. So, have you possibly had any unwelcome guests connected to your local network at some point? Have you checked if someone has enabled remote access to your system? Or maybe they just fetched the IP address, username and password from the IP gateway. Either way someone could access your system from remote at any desired time later on. My advice is to have the remote connection disabled.

<h4>Security precaution #6</h4>If you have ever accessed your HDL system from remote through the IP gateway you should consider changing the login info and/or disable the remote access. As mentioned, HDL doesn't have any encryption, meaning that nearly anyone could possibly have picked up your login info when connecting through the Internet.

<h4>Security precaution #7</h4>HDL has an SMS gateway that lets you text commands to the HDL system. Typically a set of phone numbers are whitelisted for sending commands. Commands can be something like "VACATION", "ALARM OFF", "OPEN GARAGE". It is very easy to spoof a phone number when sending a text. If someone knows - or guesses - the phone number you send commands from, so can they. If someone has/had access to the SMS gateway that someone could know the commands and even set up other commands.

<h4>Hacking scenario #1</h4>So, what's the problem with having anyone connected to your HDL system either remotely or locally? Well, what if someone reads the status of the motion sensors? Then it could be possible to know if there's anybody home, maybe they could even make educated guesses about who's home depending on which areas that are in use. You don't post a sign outside your home telling potenial burglars that you aren't home, so you shouldn't let your smart home do that either.

<h4>Hacking scenario #2</h4>Okay, somebody knows that noone's home, but you're protected by your smart home aren't you? Motion detectors, alarm sound, blinking lights, SMS warnings on intrusion. If someone has access to your HDL system they can easily turn this off. They could even turn it off, break in, turn the alarm system back on after leaving, and you wouldn't have a clue what happened.

<h4>Hacking scenario #3</h4>If you have smoke detectors connected to the system any communication with the HDL system can be disabled.

<h4>Hacking scenario #4</h4>Got your garage door connected to the system? Or even your front door? Well, you've probably figured it out by now. The doors can be opened (after disabling any alarms).

<h4>Hacking scenario #5</h4>Someone could connect to your system and do vandalism like turning the heat on for full or control the blinds. Some things might be considered just a prank, but what if someone pushes the dimmers, relays and heating to the edge by either turning them on and off quickly or turning them to a 100%? Would it do damage to the components? Cause a fire?

<h4>Hacking scenario #6</h4>Those previous five scenarios were the ones on top of my head. I'm sure you can think of a sixth and endless more yourself.

<h4>Conclusion</h4>This isn't some zero-day vulnerability disclosure of HDL-BUS pro. The system is working as intended. These are just my observations, worries and security tips when dealing with HDL. Make your local network secure, consider not having an IP gateway connected, make sure wires and components aren't accessible for anyone who shouldn't have access. <b>I wish they taught this on the HDL training.</b>

For the ones of you trusting on your local network security I want to quote a great book I'm reading now - <a href="http://shop.oreilly.com/product/0636920033547.do">Abusing the Internet of Things" by Nitesh Dhanjani</a>: <i>"As we add additional IoT devices to our homes, the reliance on WiFi security becomes a hard sell. Given the impact to our physical privacy and safety, it's difficult to stand by the argument that all bets are off once a single device (computer or IoT device) is compromised. Homes in developed countries are bound to have dozens of remotely controllable IoT devices. The single point of failure can't be the WiFi password. What's more, a compromised computer or device will already have access to the network, so a remote attacker does not need the WiFi password."</i>
`,
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Smart home",
                    "url": "/smart-home"
                },
                "tags": [
                    {
                        "title": "HDL Buspro",
                        "url": "/hdl-buspro"
                    }
                ]
            },
            {
                "title": `Case #4: Blast from the past`,
                "published": true,
                "publishDate": "2017-09-04T05:25:00.000Z",
                "summary": `In 2017 you don't see that many sites running PHP, but recently I stumbled on this site of classical PHP vulnerabilities.`,
                "niceUrl": "/2017/09/php-hack",
                "text": `<h4>tl;dr</h4>A small Norwegian company is using a completely broken and open amateur PHP CMS. The site is open for (at least) local file inclusion and it's possible to completely take over the CMS.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td>Anonymous, let's call them <a href="https://en.wikipedia.org/wiki/Fictional_company">Acme2</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">Critical</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>August 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="red-text">Not fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>Not even a thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Completely broken PHP web site</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I actually can't remember why I landed on the web site. Someone asked me to read something on this or a linking web site. Having seen a lot of bad sites over the years you can sometimes tell just from looking at the front page that you'll find some issues there.

The site is for a very small Norwegian company doing some kind of training programs for other companies. It has some public facing login for editing the content inline and is written in the server-side scripting language <a href="https://en.wikipedia.org/wiki/PHP">PHP</a>. <a href="https://trends.google.com/trends/explore?date=all&q=%2Fm%2F060kv">There was a time when PHP was very popular</a>, but I guess those days over.

<h4>Approach (technical stuff)</h4>Once in a while I take a quick peek at web sites' source code. I was expecting to find something on this particular one, but I didn't expect to find it that quickly:
<pre class="prettyprint">
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;
&lt;head&gt;
&lt;title>[name of company]&lt;/title&gt;
...
&lt;link rel="stylesheet" type="text/css"
    href="merge.php?css[]=%2Fcss%2Fstandard.css&amp;css[]=%2Fcss%2Fcustom.css" /&gt;
...
&lt;/head&gt;
...
&lt;/html&gt;
</pre>
Can you spot the opening? <b>Obviously the CSS was produced by some PHP script combining separate CSS files into one. Could it be that it would work for other files and directories?</b>

Well, first I had to find the name of some other PHP files. I didn't see any, so I logically guessed on <span class="code">index.php</span>: <pre class="prettyprint">http://example.com/merge.php?css[]=index.php</pre>
But then it responed something like <pre class="prettyprint lang-php">/* File is not a CSS or JavaScript file. */</pre>
Good, maybe there was some sort of security in place after all?

As you might know, PHP is built mainly using the programming language C. And C uses <a href="https://en.wikipedia.org/wiki/Null_character">null bytes</a> to terminate strings. So the next natural step is to try a URL like <pre class="prettyprint">http://example.com/merge.php?css[]=index.php%00.css</pre> where the script will still check for the <span class="code">.css</span> file ending, but when using the input string to include a underlying file it'll only use the part up to the null byte (URL encoded as <span class="code">%00</span>).

<b>This was bulls eye. I got the source of the <span class="code">index.php</span> file back. At this point you know that you are golden.</b>

Normally I would just provide a URL like <pre class="prettyprint">http://example.com/merge.php?css[]=../../../../../etc/passwd%00.css</pre> just to prove the point to the site owner. Not that <span class="code"><a href="https://en.wikipedia.org/wiki/Passwd">/etc/passwd</a></span> contains any passwords any longer, but it will typically reveal usernames and shows that one can retrieve almost any file from the file system. However, this was a Windows machine and the <span class="code">index.php</span> was not containing anything fun in itself.

<span class="code">index.php</span> did however point me towards other scripts files and moments later <b>I got hold of this PHP file that actually defined the username and <a href="https://en.wikipedia.org/wiki/Cryptographic_hash_function">hashed</a> version of the password of the admin user.</b> Given the state of the site I'd be surprised if there even was some random <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a> per user. So what you do you do when you have a hash? Well, you search for a online <a href="https://en.wikipedia.org/wiki/Rainbow_table">rainbow table</a> site.

<b>I got an immediate hit for the hash.</b> Not surprisingly the hash function used was the no longer recommended <a href="https://en.wikipedia.org/wiki/SHA-1">SHA-1</a> and the password itself was so short and simple that you probably won't find it on <a href="https://en.wikipedia.org/wiki/List_of_the_most_common_passwords">lists of the most common passwords</a>. Using the username and password you'd get full access to the content management system for the site.

At this point I stopped looking any further. I had enough info to report the issue and give a sense of the severity of what I saw.

<h5>What I overlooked</h5>In my eagerness to find the security holes in the web app (and due to lacking branding) I didn't notice that this was actually not a homemade PHP site like I first thought. I didn't see it until writing this post, but there was a very interesting HTML meta tag: <pre class="prettyprint">&lt;meta name="generator" content="gpEasy CMS" /&gt;</pre>
While I couldn't easily find the full history, it seems like gpEasy CMS is an old version of <a href="http://www.typesettercms.com/">Typesetter CMS</a>. I couldn't find the file inclusion among <a href="https://www.cvedetails.com/product/19479/Gpeasy-Gpeasy-Cms.html?vendor_id=10881">the issues on CVE details</a>, though there was <a href="https://packetstormsecurity.com/search/?q=gpeasy">another site with quite a few issues listed</a>.

<h4>Security issue</h4>This is a completely broken PHP CMS. It's possible to retrieve about any file on the server, and you can change any contents of the site.

This is only speculation as I didn't look further after finding the file inclusion issue, but when you find a site like this you most probably also will find other types of holes like remote code injection.

<h4>Reception and handling</h4><h5>Day zero</h5>I sent an e-mail to the contact address. <b>8 minutes later I got a response. That's a new record.</b> But the answer wasn't that uplifting. Apparently the site hadn't been of much in use the last years (though I would definitely guessed otherwise looking at the public accounting and taxation figures..). It didn't seem to be of any interest doing anything with the site or server. So hopefully there isn't anything of value there and hopefully no one makes the server into some kind of <a href="https://en.wikipedia.org/wiki/Zombie_(computer_science)">zombie</a>.

<h4>Anonymous you say?</h4>This is a small company, possibly not in any real operation. They haven't fixed - and probably won't fix - the issue. I don't think it's right naming them. Let's just hope no one else finds the site and that they don't have any important or customer data on the server.

<h4>Conclusion</h4>This was a blast from the past for me. It's been quite some time since I last saw an amateur PHP site like this. PHP once was very hot as the scripting language, partly because it is very easy to get started with, but it had a lot of pitfalls and it was so easy to make a site insecure. As the language matured the usage has gone down. Today most issues I see are HTTP service endpoints with lacking authorization checks.
`,
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "PHP",
                        "url": "/php"
                    },
                    {
                        "title": "File inclusion",
                        "url": "/file-inclusion"
                    },
                    {
                        "title": "OWASP 2013 A1",
                        "url": "/owasp-2013-a1"
                    }
                ]
            },
            {
                "title": "Building an almost real SPA blog",
                "published": true,
                "publishDate": "2017-09-07T14:50:00.000Z",
                "summary": "I thought I could have this blog as a real single-page application with no server code. That sort of worked. If it only hadn't been for the previews.",
                "niceUrl": "/2017/09/an-almost-real-spa-blog",
                "text": `<h4>tl;dr</h4>My first post on this blog was <a href="/2017/08/building-a-real-spa-blog">Building almost a real SPA blog</a>. While the title mostly is still true, I ended up having a bit more <span class="code">.htaccess</span> config and a small Python script for previews of posts in social media and add support for web feed.
                
<h4>Single-page application</h4>I was able to build this blog as a <a href="https://en.wikipedia.org/wiki/Single-page_application">single-page application</a>. I had - and still have - all contents in <a href="https://github.com/roys/js-web-blog/blob/master/contents.js">one single static JavaScript array</a> and use the JavaScript framework <i>Knockout</i> and the front-end framework <i>Materialize</i>. So far so good.
                
<h4>Search engine optimization</h4>Google has since 2014 been able to <a href="https://webmasters.googleblog.com/2015/10/deprecating-our-ajax-crawling-scheme.html">render and understand JavaScript web applications</a>. <b>Using the Search Console's <a href="https://www.google.com/webmasters/tools/googlebot-fetch">Fetch as Google</a> I have been able to verify that Google understands my site just perfect.</b> Doing a <a href="https://www.google.no/search?q=site:blog.roysolberg.com">site: search</a> also confirms that.

I have to admit that I don't care too much about other search engines like Bing, Yahoo, etc. Google is in its own class when it comes to searching. However, because of the mentioned Python script I now have a tool for that as well. More about that in a second.

<h4>Article preview</h4><img style="width:450px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Typical article preview using Open Graph Protocol tags." data-caption="Typical article preview using Open Graph Protocol tags." src="/images/linkedin_preview.png"/>I sometimes post my articles to <a href="https://twitter.com/roysolberg">Twitter</a>, Facebook and <a href="https://www.linkedin.com/in/roysolberg/">LinkedIn</a>. <b>When creating a preview of the links those sites certainly does not try to parse any of the contents as a modern browser. They just look for <a href="https://dev.twitter.com/cards/overview">Twitter Cards</a> or <a href="http://ogp.me/">Open Graph Protocol</a> (OGP) meta tags.</b> If they don't find anything they typically default to the <span class="code">&lt;title/&gt;</span> tag.

My <span class="code">index.html</span> only has a standard <span class="code">&lt;title/&gt;</span> tag which makes no sense in the context of my articles. That makes the previews pretty bad, so I mostly skipped them in the start. However, I think the content is so much better with a good preview of the contents. I'm sure it also makes more people click the links.

<h4>Web feed</h4>Naturally one doesn't get any web feed like <a href="https://en.wikipedia.org/wiki/Atom_(standard)">Atom</a> or <a href="https://en.wikipedia.org/wiki/RSS">RSS</a> out of the box when building a single-page application. And that's also one of the things I wanted to have for my site.

So far I've added support for Atom which you can acess at <a href="https://blog.roysolberg.com/atom">https://blog.roysolberg.com/atom</a>.

<h4>The easy way out</h4>I couldn't find a way to solve the preview challenge without resorting to some backend code. I really like <a href="https://en.wikipedia.org/wiki/Python_(programming_language)">the programming language Python</a>. Writing just a few lines of code I was able to create a script that read the contents in the JavaScript array and produced the necessary OGP tags. You can <a href="https://github.com/roys/js-web-blog/blob/master/preview.cgi">see the source code of the script on GitHub</a>.

Now that I had the script for generating the preview I needed a way to route the bots to it. For that I used the already existing <span class="code">.htaccess</span> configuration file and look for the <a href="https://en.wikipedia.org/wiki/User_agent">User-Agent header</a> belonging to the different sites' bots. You can <a href="https://github.com/roys/js-web-blog/blob/master/.htaccess">see the source code for .htaccess on GitHub</a>.

Because of the preview setup I got support for other non-Google search engines for free. They access the same code as generated by the Python script. Google is still served the same site as you are.

Having the preview script it didn't take long to make support for the Atom feed. You can <a href="https://github.com/roys/js-web-blog/blob/master/atom.cgi">see the source code of the script on GitHub</a>.

<h4>Wishes for the future</h4><b>I don't think the Open Graph Protocol is very flexible or ready for single-page applications and thicker clients.</b>

<b>The first thing that hit me when creating the script was that I couldn't just inject the meta data as HTTP headers.</b> I had to create HTML markup for it. I can't understand why one shouldn't be able to choose between headers and tags.

Secondly the different social media sites need to start doing what Google has been doing since 2014; render the pages with some kind of <a href="https://en.wikipedia.org/wiki/Headless_browser">headless browser</a> to be able to understand the contents and get dynamically injected OGP meta tags. It's not that much magic or resource demanding in 2017.

<h4>GitHub project</h4>If you're interested you can have a look at the source code for this blog at <a href="https://github.com/roys/js-web-blog">https://github.com/roys/js-web-blog</a>. The project itself is licenced under the MIT License, but for the contents (posts and images) I reserve all rights.
`,
                "images": ["/images/linkedin_preview.png"],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                },
                "tags": [
                    {
                        "title": "JavaScript",
                        "url": "/javascript"
                    },
                    {
                        "title": "SPA",
                        "url": "/spa"
                    }
                ]
            },
            {
                "title": "Case #5: Tell me your bank account no. and I'll tell you how rich you are",
                "published": true,
                "publishDate": "2017-09-11T05:00:00.000Z",
                "summary": "I'm sure you expect your bank accounts to be safe from prying eyes. For a while other customers knowing my bank account number could check my account balance.",
                "niceUrl": "/2017/09/skandiabanken-leak",
                "text": `<h4>tl;dr</h4>The Norwegian bank Skandiabanken leaked the balance of other customers' bank accounts. I also question parts of their session handling.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://skandiabanken.no">Skandiabanken</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>September 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Very good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A big thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with other customers' bank account balances and account names</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div>
<h4>Background</h4>Skandiabanken - soon to be called Sbanken - is a fairly large bank in Norway with its more than 400,000 customers. It was Norway's first pure online bank when it started in 2000. I have been a customer since that first time and all along from the start it's been my favourite bank.

This summer a regulation for personal savings accounts for shares was approved. From September 1st 2017 it was possible to move shares and funds into this new type of account. The timing meant that all banks in Norway suddenly were in a hurry for getting the product ready.

The morning of the opening of the new account type I was logged in to create one for myself. I noticed that there was a few missing text translations and some places where it said <i>undefined</i> in the user interface. This new part of the bank wasn't all bug free yet.

<h4>Approach (technical stuff)</h4><img style="width:500px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from Vivaldi containing JSON with back account details." data-caption="Screenshot from Vivaldi containing JSON with back account details." src="/images/skandiabanken_accountdetails.png"/>I opened <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> when logged in, to see what was going on in regards of network calls. I was surprised to see that one of the presumably new <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a> calls contained one of my bank account numbers. I could be wrong, but I think it's atypical for them to use that ID when asking for data from the backend. That of course doesn't mean anything, but I got curious and wondered if my data was properly secured.

The Ajax call returned <a href="https://en.wikipedia.org/wiki/JSON">JSON</a> with the balance and some other data about the bank account in question. <b>I asked a friend for a bank account number and permission to check if I could get any of his data returned. And indeed I got his data.</b>

<h4>Security issue</h4><b>Knowing just the bank account number of another customer one would get these data:</b>
- Some UUID of the bank account
- Customer's own name of the account
- <b>The account's bank balance</b>
- <b>The account's book balance</b>

<h4>Reception and handling</h4><h5>Day zero</h5>I notified the bank and they immediately responded and started checking out the issue.

<b>Just hours later they had rolled out a fix for the problem.</b> This must be the quickest fix I have ever seen for a security issue.

Later the same I day I was phoned up by one of the chiefs who thanked me and told me they were grateful for that I found and reported the issue.

<h5>Day 4 - incorrectly reporting a second issue...</h5>I had left my browser logged into this new part of the bank called "Min sparing" ("My savings"). When I returned to the computer quite a bit later I noticed that I was still logged in. And I noticed that I could close and open my browser and still be logged in to this part of the bank. Going to other parts of the bank would log me out from everything.

I reported this by e-mail, but just after that I learned that <a href="https://skandiabanken.no/sporsmal-og-svar/min-sparing/hvor-lenge-kan-jeg-vare-inaktiv-i-min-sparing-appen-for-jeg-blir-logget-ut/">this part of the bank has 9 hours session time</a> and not 20 minutes as most parts of the bank. I felt a bit embarrassed for reporting a non-issue and wasting their time.

<h5>Day 5 - ...or was I into something?</h5>The next morning I realized something. Though this "My savings" session time was intentionally high, Skandiabanken offers simultaneous logins, and logging out from one session doesn't invalidate any others. <b>This means that if you are able to get access to a computer where the user forgot to log out after accessing "My savings" in the last hours you can get hold of the cookies and keep the session alive by only calling the server once in a while.</b>

<b>What's more is that you can do this call from any location. You don't have to use the same computer or IP address.</b> The "My savings" page gives a pretty good glance into your economy (like shares, funds and some transactions), and using the mentioned Ajax call you <s>can</s> could also use the same cookie to access the balance of other known account numbers for that logged in user. <b>Hopefully the session can't be kept alive forever without signing in again.</b> While testing I had this one session alive for more than 36 hours (while changing locations and having other devices logged in and out).

<b>Skandiabanken replied and told me that this session handling is a feature and not a bug.</b> They want a long session time, and they don't want to restrict the session to IP addresses because of mobile clients.

<h5>Day 5 - new webapp deployed</h5>Skandiabanken seems to have removed the bank account number from the Ajax call, making it always return the balance of the payment account for funds and making the "My savings" page only getting savings related data. I would say that's a step in right direction. The 9 hours session time seems to stay the same.

<h4>Conclusion</h4><b>As far as I know the security hole with balance access was introduced that morning and was only in the wild less than a day.</b> I have worked with online banking as an IT consultant and know how seriously security is taken in that industry. I was pleased - but not surprised - to see how seriously and professionally Skandiabanken handled everything.

I feel confident that this issue would've been discovered relatively quickly by the bank itself hadn't I reported it. However, for me online banking is one of those services that just need to always be secure and never leak information like this.

<b>What makes me a bit uneasy is the session handling feature/issue where someone could be watching my economy with a logged in session that I'm unaware of.</b>

<b>Please remember to always hit that <i>Log out</i> button.</b>
`,
                "images": ["/images/skandiabanken_accountdetails.png"],
                "links": [
                    {
                        "title": "Background: Purpose of these posts",
                        "url": "/2017/08/security-vulnerability-disclosures"
                    }
                ],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "Security Monday",
                        "url": "/security-monday"
                    },
                    {
                        "title": "Information leak",
                        "url": "/information-leak"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "Bank account",
                        "url": "/bank-account"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ],
                "commentsIdentifier": "https://blog.roysolberg.com/2017/09/skandiabanken-leak"
            },
            {
                "title": "1995: When you could get a demo of the Internet on a floppy disk",
                "published": true,
                "publishDate": "2017-09-13T21:00:00.000Z",
                "summary": "This one is for you who actually know what that save icon in Word is.",
                "niceUrl": "/2017/09/internet-demo",
                "text": `<h4>tl;dr</h4>I've uploaded all the HTML files from a Norwegian Internet Service Provider's Internet demo diskette so you can (almost) surf like it's 1995.

<h4>Background</h4><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="The diskette containing the browser and demo pages." data-caption="The diskette containing the browser and demo pages." src="/images/floppy02.jpg">
Back in 1995 - one year before I tried the Internet for the first time, and two years before I got Internet access at home - my mother brought me this floppy disk from work. She thought I might be interested in checking it out. <b>It was a demo of the Internet!</b>

I didn't really know what the <a href="https://en.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a> was about. The diskette contained a web browser (I think it was <a href="https://en.wikipedia.org/wiki/Mosaic_(web_browser)">Mosaic</a> (sorry, I only copied the <span class="code">.htm</span> files 10 years ago)). And it actually gave a feel of what the Internet was like.

<h4>Demo</h4>Below is the demo itself. It's nice to see the HTML pages still working the same 22 years later. You can also <a href="https://blog.roysolberg.com/stuff/sol/initial.htm">open demo in full screen</a>.
<input type="button" value=" < " onclick="window.parent.frames[1].history.back()"/> <input type="button" value=" > " onclick="window.parent.frames[1].history.forward()"/>
<iframe style="margin: none;padding: none;border:1px solid #000;line-height: 0;" src="https://blog.roysolberg.com/stuff/sol/initial.htm" width="600" height="600" />

<h4>First lines of HTML</h4>When I tried the demo disk I remember being curious about how those pages worked. I found the source code and from there I wrote my first lines of HTML. It was pretty cool to see how the markup was rendered in the browser from the floppy disk. Little did I know I would code web pages for a living 10 years later. :)

<h4>References</h4>- <a href="https://www.nrk.no/trondelag/hun-lanserte-internett-i-norge-1.11078996">– Folk syntes internett var for raringer</a>
- <a href="http://www.oslo.net/historie/CW/utg/9510/cw951033.html">"Scandinavia online" på lufta</a>
`,
                "images": ["/images/floppy01.jpg", "/images/floppy02.jpg"],
                "category":
                {
                    "title": "Internet archive",
                    "url": "/internet-archive"
                },
                "tags": [
                    {
                        "title": "1990s",
                        "url": "/security-monday"
                    }
                ]
            }
        ];
}(window.SpaBlog));
