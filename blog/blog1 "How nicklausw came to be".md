# DS Game Maker: C coding
I started coding at age 10 with [DS Game Maker.](https://dsgamemaker.online/) It was a fun and wonderful place to start: you use a nice GUI program and learn C coding while you're at it. It was extremely easy to figure out. I made a game for it called Ball Buster (good name, right?) which has been lost to time. There were 50 levels where you touch balls to pop them. It demonstrated a lack of programming knowledge below the surface (I wrote every level by hand, for instance) but gave me a starting point. I had something to grow upon.

# My Own Game Maker: Visual Basic .NET
My next endeavor was trying to make the next DS Game Maker. Why? I had a problem: I wanted to make a GameBoy game, but it used this mysterious language called "gbZ80 assembly." Nothing too difficult, but assembly coders don't usually make pretty custom GUIs to make their programs with, something that I wasn't keen on giving up. After all, [CTurt](https://github.com/CTurt) made a SNES Game Maker with 65816 assembly, how hard could it be? So I picked up on Visual Basic .NET, got the DS Game Maker source from [James Garner](https://github.com/jadaradix) and began to study up. This screenshot is the only survivor from that whole experience.

![GBAdvanceIDE](https://nicklausw.com/GBAdvanceIDE.png)

# Attempts at GameBoy: gbZ80 assembly
Once I vowed to never use Visual Basic .NET again (unless you hire me for it, wink wink,) I was able to drop the dependency on fancy GUIs, but unfortunately the GameBoy homebrew scene was in a less accessible state than it is today. The scene seemed to die out after the release of the GBA, and the big return of the mid 2010's wasn't there yet. I don't even remember the de facto gbZ80 assembler, [bentley's fork of rgbds](https://github.com/gbdev/rgbds) being popular yet. Trying to develop for GameBoy only got you a ton of dead hyperlinks and outdated projects.

# The Master System: Z80 assembly
Due to these issues, I settled for an unfamiliar console with a much livelier dev scene: the Sega Master System! It uses regular Z80 assembly (gbZ80 is only slightly different) and while [MEKA](https://www.smspower.org/meka/) isn't an extremely accurate emulator, the debugging tools blew me away. [Maxim's tutorial on how to set up the development environment](https://www.smspower.org/maxim/HowToProgram/Index) was the most accessible one that I'd found thus far; this console was now home. My first project for the Master System was called BitTest. It's still out there, but it's so badly written that I won't be linking it here. I didn't even know how to handle a vBlank properly and assumed that people determined a game's execution speed by how many empty instructions they could pan things out with. I also had something against blank lines in code.

So I submitted BitTest to SMSPower's website, and it got published. I got more code pointers than ever before that day, with my favorite being that you're supposed to use vBlank. My next project was far, far better: [Sudoku for the Master System.](https://github.com/nicklausw/sudoku-sms) I still like this one. It felt incredible to actually finish something substantial and take pride in it. Did I take the time to comment the code? No. Did the code speak for itself? It's assembly, it never does that. What mattered to me was that I made a game that you could play from start to finish. It's public domain, too; feel free to steal it.

# The Console Bounce & Assembler Fascination
Eventually I realized that I didn't care for the Sega Master System all that much. It wasn't all that popular in the United States; no one was going to feel the nostalgia for a console that they didn't know existed. So I set my sights back on the GameBoy. And the NES. And the SNES. Not sure what the order was; I traded off a lot.

In doing these constant trade-offs, I discovered that I was working with one type of program more than any other: the assembler. The big one was [WLA-DX](https://github.com/vhelin/wla-dx). It's a wonderful program, but it suffers from aging. It was built with the mentality that if someone asks for a new feature, you drop everything and add that feature. Consistency wasn't a huge concern. The result was the first ever open-source program that I contributed to because of the number of small improvements to be made. Development on that project goes on; I don't use it anymore because I don't agree with the hard focus on maintaining backwards compatibility.

# Making My Own Assembler: C++
This is where chronology gets fuzzy; I actually tried writing my own assembler not long after picking up on it around 2013. Why? No clue. Were the attempts any good? Not at all, but my final attempt was by far the best. What changed: using C++ instead of C. I get that people love manual memory management, but I won't be dying on that hill with them when I'd rather finish coding something in less than twelve years. Thus [snesasm](https://github.com/nicklausw/snesasm) heartily uses the `std::vector` where needed. It reached my goal of being in one source file, but eventually I moved on from it.

# Contributions to Other Assemblers
My assembler contributions don't stop at [WLA-DX](https://github.com/vhelin/wla-dx). I traded assemblers a lot, and tried to improve something about each one that was used. My biggest contribution to WLA-DX was that the assembler itself now takes more standard argument input. In any other assembler, writing flags like `-o main.s main.o` is completely backwards. In this program, it wasn't.

My most useful assembler contributions were to [asm6f](https://github.com/freem/asm6f). This was fun to work on. The old-school NES assembler to use, [NESASM](https://github.com/camsaul/nesasm) is...decent. It has improved substantially over the years, but I still wouldn't use it. Why does anyone use it? There's at least one good reason: this assembler's way of handling the iNES header (a header for NES roms that describes the cartridge mapper) is the best around.
~~~
.inesprg 1   ; 1x 16KB PRG code
.ineschr 1   ; 1x  8KB CHR data
.inesmap 0   ; mapper 0 = NROM, no bank swapping
.inesmir 1   ; background mirroring
~~~
If I could implement these directives into asm6, I could convince people to leave the buggier assembler for one that's more portable (asm6 is one C file that you compile like `gcc -o asm6 asm6.c`) and works better overall. My first attempt was in [asm6n](https://github.com/nicklausw/asm6n). The problem: you had to add a `.inesins` directive after the header or it wouldn't end up in the file. This bothered people because at that point, you may as well implement the directives via macros. Besides, more people were already using the [asm6f](https://github.com/freem/asm6f) fork, why would they leave that one just for iNES headers?

True. So I didn't make them do that. I rewrote the implementation so it didn't need `.inesins` and this time, I added it to asm6f. I also fixed something quirky about asm6f at the time: it compiled into three binaries, one for each level of 6502 instruction stability that you'd like to permit. Do you want the normal instruction set, that plus the unstable ones, or *that* plus the extremely unstable ones? Before, it was a matter of choosing the right executable. Now you pass `.unstable` or `.hunstable` to the assembler.

## asm6 on the SNES!?
That's right, I made it happen. I always had the thought of "asm6 sure is great. Why hasn't anyone ported it to SNES? These SNES assemblers suck!" (In this context, anything I didn't understand sucked). So I did it myself, and [asm16](https://github.com/nicklausw/asm16) was born. The big thing it did that I loved was tracking opcode sizes on your behalf and calculating things accordingly. My approach on that issue has since flipped; you don't need opcode sizes hidden from you, that can cause bugs. `adc.w` may look ugly but there's no question that it's dealing with a word-sized number. Once again, I found something or another that this project wasn't capable of, and moved on.

## Modifications to bass
My favorite part about asm6 was the lack of a linker. Who needs one? It makes things harder. So what if you could take that approach and make it target any processor architecture you like? That's when I discovered [bass.](https://github.com/ARM9/bass) The syntax was picky, the error messages weren't entirely helpful, but the fascination with this program never went away. Contributing to the codebase directly wasn't going to happen as byuu was very particular in his ways. Thus my own fork, [bass-ultima.](https://github.com/nicklausw/bass-ultima)

Earlier I mentioned my completely changed approach to 65816 opcode sizes flipping. My biggest modification to bass demonstrated this: a `-require-modifier` flag. Take this code below.
~~~
adc #$1234 // 16-bit opcode size, as told by 4 numbers after hex symbol
adc number // ???
~~~
asm16 would bother to calculate the size of `number` to get the right opcode size for you. It automates things which is cool, but obscures information from you which is bug-prone. For example, direct page. If you point to address `$00007F` but the direct page isn't set to the 0 bank, asm16 won't know. So your `adc $00007F` will become `adc $7F` to save space, but it won't do the right thing at all; it could point to `$FF007F` for all you know.

Bass-ultima with `-require-modifier` does the opposite: you didn't specify the size of `number` so you get an error. No ambiguity, the assembler couldn't get it on the spot so you have to specify. Easy.

# NDSA: Put that C++ to use!
Bass was the first program I worked with that used C++. In the retro homebrew scene, you either write things with C/assembly, or you're clearly looking to crash your Amiga or Apple ][ or whatever. That's my only guess as to why people cling to C so badly. I certainly don't complain when emulators written in C like [mGBA](https://mgba.io/) run as well as they do, but that type of program deals with a level of memory management that I couldn't be bothered with.

Even my first dive into the world of programming with DS Game Maker was one without C++. That program used regular C with its own "object-oriented layer" that the GUI kept hidden from you. While I was in no position to understand the strengths/weaknesses of this approach at the time, I'm sure keeping things to C made the program more approachable for beginners. You can't expect to draw someone in after they look at a template error; that would scare anyone away.

The problem: I wasn't a beginner at this point. I saw the beauty of object-oriented programming with bass, and I didn't understand why the Nintendo DS shouldn't be shown that same kind of beauty. Thus [NDSA was born!](https://github.com/nicklausw/ndsa) There's an Object class, there's a Sprite class, there's a customized main function, there's all that! And it's a header library that isn't too heavy, so you can easily implement it. It even works with multiple modules.