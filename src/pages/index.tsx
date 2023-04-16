import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { Variants, motion, useScroll } from "framer-motion";
import { useRef } from "react";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const Home: NextPage = () => {
  const food: [string, number, number][] = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320]
  ];

  const cardVariants: Variants = {
    offscreen: {
      y: 300, scale: 0,
    },
    onscreen: {
      y: 50,
      scale: 1,
      rotate: -10,
      backgroundColor: 'red',
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

  function Card({ emoji, hueA, hueB }: Props) {
    // const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();
    // const { scrollYProgress } = useScroll({
    //   target: ref,
    //   offset: ["end end", "start start"]
    // });
    // console.log(scrollYProgress);
    return (
      <motion.div
        ref={ref}
        // initial="offscreen"
        whileInView="onscreen"
        // className='w-[600px] h-[600px] bg-red'
        style={{ scale: scrollYProgress, width: 80, height: 80 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        {/* <div className="splash" style={{ background }} /> */}
        <motion.div className="bg-red" variants={cardVariants}>
          <div className="h-80 w-40 bg-red" />
        </motion.div>
      </motion.div>
    );
  }


  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Interestingai</title>
        <meta name="description" content="The freshest projects in ai, updated every day" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-full'>

      </main>
    </>
  );
};

export default Home;
