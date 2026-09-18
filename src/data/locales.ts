export type Locale = 'km' | 'en';

export interface Translations {
  nav_home: string;
  nav_articles: string;
  nav_academy: string;
  nav_playrooms: string;
  nav_collaborate: string;
  nav_about: string;
  nav_services: string;
  hero_subscribers: string;
  hero_watch_video: string;
  hero_about_us: string;
  hero_title: string;
  hero_description: string;
  hero_author: string;
  hero_author_title: string;
  social_networks: string;
  latest_articles: string;
  view_all_articles: string;
  latest_videos: string;
  view_all_videos: string;
  work_with_us: string;
  work_with_desc: string;
  become_partner: string;
  footer_tagline: string;
  footer_rights: string;
}

export const LOCALES: Record<Locale, Translations> = {
  km: {
    nav_home: 'ទំព័រដើម',
    nav_articles: 'អត្ថបទ',
    nav_academy: 'ថ្នាក់រៀន',
    nav_playrooms: 'បន្ទប់ AI & ML',
    nav_collaborate: 'សហការ',
    nav_about: 'អំពីយើង',
    nav_services: 'សេវាកម្ម',
    hero_subscribers: 'ចំនួនអ្នកជាវ',
    hero_watch_video: 'មើលវីដេអូ',
    hero_about_us: 'អំពីយើង',
    hero_title: 'នាំយកបច្ចេកវិទ្យាសម្រាប់ទាំងអស់គ្នា!',
    hero_description: 'ខ្ញុំគិតថា ភាពជោគជ័យមិនមែនស្ថិតលើការទទួលបានរង្វាន់ម្តងៗនោះទេ ភាពជោគជ័យគឺជាដំណើរការវិវត្តន៍ទៅមុខ មានន័យថា យើងចេះដួលងើប នឹង កែប្រែខ្លួនឯង ទទួលស្គាល់ចំនុចខ្វះខាត នៅចំពោះមុខការបរាជ័យ។',
    hero_author: 'ចៅ ដារ៉ា',
    hero_author_title: 'ស្ថាបនិកនៃ TFD',
    social_networks: 'ចូលបណ្ដាញសង្គមរបស់យើង',
    latest_articles: 'អត្ថបទចុងក្រោយ',
    view_all_articles: 'មើលអត្ថបទទាំងអស់',
    latest_videos: 'វីដេអូចុងក្រោយ',
    view_all_videos: 'មើលវីដេអូទាំងអស់',
    work_with_us: 'សហការជាមួយ TFDevs',
    work_with_desc: 'នាំយីហោ និងផលិតផលរបស់អ្នកទៅកាន់សហគមន៍បច្ចេកវិទ្យាដ៏ធំជាងគេនៅកម្ពុជា។',
    become_partner: 'ទំនាក់ទំនងសហការ',
    footer_tagline: 'នាំយកការអប់រំបច្ចេកវិទ្យាដល់ប្រជាជនកម្ពុជាទាំងអស់។ រៀន AI ការអភិវឌ្ឍន៍កម្មវិធី និងច្រើនទៀត។',
    footer_rights: 'រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ TFD ។'
  },
  en: {
    nav_home: 'Home',
    nav_articles: 'Articles',
    nav_academy: 'Academy',
    nav_playrooms: 'Playrooms',
    nav_collaborate: 'Collaborate',
    nav_about: 'About',
    nav_services: 'Services',
    hero_subscribers: 'Subscribers',
    hero_watch_video: 'Watch Videos',
    hero_about_us: 'About Us',
    hero_title: "Let's Spread Technology For All",
    hero_description: "Success isn’t just about winning prizes; it’s about the journey. True success is found in resilience, bouncing back stronger with each setback.",
    hero_author: 'Chau Dara',
    hero_author_title: 'Founder of TFD',
    social_networks: 'join our social networks!',
    latest_articles: 'Latest Articles',
    view_all_articles: 'View All Articles',
    latest_videos: 'Latest Videos',
    view_all_videos: 'View All Videos',
    work_with_us: "Work With Cambodia's #1 Tech Channel",
    work_with_desc: 'Put your brand, dev tools, and enterprise products directly in front of active Cambodian engineers.',
    become_partner: 'Become a Sponsor',
    footer_tagline: 'Bringing technology education to everyone in Cambodia. Learn AI, software development, and more.',
    footer_rights: 'All rights reserved by TFD.'
  }
};
