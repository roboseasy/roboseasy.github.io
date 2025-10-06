import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  // docs 컬렉션을 예시로 사용, 필요시 blog 등으로 변경
  const posts = await getCollection('docs');
  return rss({
    title: 'RobosEasy LeRobot RSS Feed',
    description: 'Physical AI, LeRobot 관련 최신 소식',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/docs/${post.slug}/`,
    })),
  });
}
