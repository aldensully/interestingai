import { type NextPage } from "next";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import { api } from "@/utils/api";
import Navbar from "@/components/Navbar";
import Spotlight from "@/components/Spotlight";
import NewProjects from "@/components/NewProjects";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const Home: NextPage = () => {
  const { data } = api.projects.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Interestingai</title>
        <meta name="description" content="The freshest projects in ai, updated every day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <main className='w-full flex flex-col h-full bg-bg min-h-screen '>
        <Navbar />
        <Spotlight />
        <NewProjects />
        {/* <div>
          {data?.map((project) => (
            <div key={project.id}>
              <text className='text-lg'>Satoshi</text>
            </div>
          ))}
        </div> */}
      </main>
    </>
  );
};

export default Home;
