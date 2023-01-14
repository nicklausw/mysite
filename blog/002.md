---
title: Comparse, Wordbot and Chinscraper
subtitle: My Raspberry Pi-powered toys.
dateCreated: 2/24/22
---

They're the newest of my programs, though the latter 2 are redone versions of older ones. Here's a little bit about what each does, starting with the new and most dramatic one.

# Comparse. Yes...it's COBOL.
Have you ever wondered what it was like for people to code back in the 1960s? Back then, we took a much different approach on how code should be written. People didn't understand that the brain can look at abstract symbols and derive meaning from them, without those symbols being entire English words. Actually, people did understand that, hence math existing at the time. The issue was when you had no alternative from using pure assembly code, having a computer language that could be read like a book seemed like an infinitely greener field of grass for the oddly-dressed 60s people to frolick in.

Thus COBOL happened, and to sum it up, the grass ain't greener. Let's not jump to conclusions, though. After all, I consider it a fact that if something is over 60 years old and isn't being replaced, it clearly isn't broken. The reason that ATM you went to earlier processed your transaction with COBOL is because it still works. Will it bring any harm to the banks if they don't bother switching the code to Java? No. It's cheaper to keep finding random people who still know this dinosaur of a language than to move on from it.

And guess what? To an extent, I'm now one of those random people. I'll tell you right now, the biggest road block in learning COBOL is the lack of resources. I had an especially hard time with this because the de facto for modern COBOL use seems to be the IBM dialect and its monstrous (in a good way) documentation. My project needed interfacing with C, so I was stuck with gnuCOBOL instead, which has sufficient but less powerful documentation. We're talking "giant one-page manual" kind of deal.

There is, however, a huge advantage to using gnuCOBOL: you can use any C library you want with it. With this power, I am utilizing [MPFR](https://www.mpfr.org/) and its giant number capabilities. That's a good hint for what my COBOL program actually does: it's a math parser! And a discord bot.

![Demonstration](https://github.com/nicklausw/comparse/raw/main/demonstration.jpg)

It's called Comparse for COBOL Math Parse. You send the bot a formula via Discord, and thanks to the Concord C library, your text gets sent to a COBOL function that tokenizes, parses and evaluates the statement. It works incredibly well and is capable of performing ridiculous calculations in a fraction of a second.

# Wordbot
Back in 2019, I made a Discord bot in Lua called bitchbot. It did whatever I wanted it to; the main function was counting your curse words so people could call you out on it later. The word counts were written into a text file that you couldn't understand anything about from looking at it.

Earlier this year I redid the bot in C#. It worked nicely with LINQ and an XML table and all, but the code was ugly (as ugly as bringing a tank to a fist fight) and there were 2 languages I really wanted to pick up some experience with: TypeScript and SQL. So this version is dead.

Today stands Wordbot! The million-times-better version. It's in TypeScript now. This time around, the words it monitors aren't hard-coded; it tracks every single word you use with a relational database. I started off with MySQL, switching to MariaDB upon finding out about it.

SQL can be frustrating to work with, but the resulting speeds are absolutely incredible. Once you learn the powers of relational databases, you then understand how social media networks are capable of handling so much data at once. As of the time of writing, Wordbot is tracking over 100,000 words (over 10,000 are unique) and still, even on a raspberry pi, none of its commands take even half a second to execute.

![Demonstration](https://github.com/nicklausw/wordbot/raw/main/demonstration.jpg)

# Chinscraper
Around 2020 I wrote a 4chan scraper in C#. It worked well, and supported exporting to an Excel database which had absolutely no use but was fun to look at. It seemed a good candidate for a redo in TypeScript, thus today we have Chinscraper. There isn't a whole lot to say about this one other than "it's pretty fast." Its scraped data is being used for something much more interesting that I hope to present in the coming months. ;)

![Demonstration](https://github.com/nicklausw/chinscraper/raw/main/demonstration.jpg)