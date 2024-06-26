import FeaturedPosts from "@/components/home-page/FeaturedPosts";
import Hero from "@/components/home-page/Hero";
import { getAllPosts, getFeaturedPosts } from "@/lib/posts-util";
import { GetStaticProps } from "next";
import Head from "next/head";

export const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework that allows you to build static and dynamic websites. In this post, you will learn how to get started with NextJS.",
    date: "2022-02-10",
  },
  {
    slug: "react-vs-angular",
    title: "React vs Angular",
    image: "getting-started-nextjs.png",
    excerpt:
      "React and Angular are two popular frontend frameworks. In this post, you will learn the key differences between React and Angular.",
    date: "2022-02-11",
  },
  {
    slug: "state-management-in-react",
    title: "State Management in React",
    image: "getting-started-nextjs.png",
    excerpt:
      "State management is a critical aspect of building React applications. In this post, you will learn about the different state management solutions in React.",
    date: "2022-02-12",
  },
];

export type PostsProps = {
  posts: {
    slug: string;
    title: string;
    image: string;
    excerpt: string;
    date: string;
  }[];
};

const HomePage = ({ posts }: PostsProps) => {
  return (
    <main>
      <Head>
        <meta
          name="description"
          content="I am Rakib. I blog about web development - especially frontend frameworks like React"
          key={"home-page-meta"}
        />
        <meta name="author" content="Abdullah Al Rakib" />
        <title>Next Blog</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </main>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = (ctx) => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
};
