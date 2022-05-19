import { StaticImageData } from "next/image";
import ImageObj from "../components/ImageObj"
import Page from "../components/Page"

import githubLogo from "../public/pictures/GitHub_Logo.png"

type CardProps = {
  title?: string;
  href: string;
  image?: StaticImageData | string;
  imageWidth?: string;
  imageHeight?: string;
  children: JSX.Element | JSX.Element[];
}

function Card(props: CardProps) {
  return (
    <div className="flex flex-col items-center text-center w-full lg:w-1/2 lg:px-3 card-container">
      <div className="flex w-full h-full items-center justify-center card-color m-3 rounded-xl">
        <div className="block p-6 lg:p-8 rounded-xl">
          <a className="text-black hover:text-black" href={props.href} target="_blank" rel="noreferrer">
            {props.title !== undefined ? (
            <p className="text-3xl text-black font-bold">
              {props.title}
            </p>
            ) : (<></>)}
            {props.image !== undefined ? (
              <ImageObj src={props.image} width={props.imageWidth} height={props.imageHeight}/>
            ) : (<></>)}
            <hr className="my-3 border-black"/>
            <div className="block text-xl font-semibold">
              {props.children}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <Page>
      <div className="opaque-background text-white font-semibold text-5xl w-3/4 lg:w-3/5 text-center m-auto rounded-lg py-2">
        <p>
          Welcome to my space.
        </p>
        <hr className="mt-6"/>
      </div>
      <div className="flex flex-wrap justify-center flex-row items-stretch text-black w-3/4 lg:w-3/5 mx-auto">
        <Card image="https://nicklausw.com/haisten/pictures/title.png" href="https://nicklausw.com/haisten/" imageWidth="400px" imageHeight="100px">
          <>
            I had the honor of making this website for one of the most respected journalists of this generation.
          </>
        </Card>

        <Card title="Wordbot" href="https://github.com/nicklausw/wordbot">
          <>
            Discord bot that tracks word usage among users in a database.
            Demonstrates proficiency with TypeScript and MySQL/MariaDB.
          </>
        </Card>

        <Card title="Comparse: It's COBOL" href="https://github.com/nicklausw/comparse">
          <>
            That&apos;s right! Here&apos;s a math parser written with GnuCOBOL.
            It interfaces with C to create a Discord bot.
          </>
        </Card>

        <Card title="NDSA - NDS C++ Engine" href="https://github.com/nicklausw/ndsa">
          <>
          A good amount of homebrew coded for the Nintendo DS is in C.
          Here&apos;s a C++ header library incorporating an object system that demonstrates
          what everyone is missing out on.
          </>
        </Card>

        <Card title="This site is open source!" href="https://github.com/nicklausw/mysite">
          <>
            Click the text above to see the source code. I always have and always
            will love and support the &quot;open-source initiative.&quot;
          </>
        </Card>

        <Card image={githubLogo} href="https://github.com/nicklausw/" imageWidth="300px" imageHeight="120px">
          <>
            Take a look for yourself.
          </>
        </Card>

        <Card title="Read the blog!" href="https://nicklausw.com/blog/">
          <>
          I give updates on whatever it is I&apos;m working on. Read all about it.
          </>
        </Card>

        <Card title="My Résumé" href="https://nicklausw.com/resume.pdf">
          <>
            Hire me.
          </>
        </Card>
      </div>
    </Page>
  )
}