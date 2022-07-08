import nftTrailerCover from '@assets/images/cover.jpg';
import trailerCover from '@assets/images/cover-new.jpeg';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'HELIX',
  'url': 'https://helixmetaverse.com',
  'logo': 'https://helixmetaverse.com/helix-logo.png',
};

export const trailerSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  'name': 'HELIX Official Trailer Teaser',
  'description': 'The world\'s most immersive metaverse is coming. Stay tuned for the full trailer reveal dropping soon 👀.',
  'thumbnailUrl': [ trailerCover ],
  'uploadDate': '2016-03-31T08:00:00+08:00',
  'duration': 'PT1M54S',
  'contentUrl': 'https://youtu.be/0ZMctoyu-P4',
};

export const nftTrailerSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  'name': 'HELIX Gameplay Trailer',
  'description': 'The world\'s most immersive metaverse is coming. Stay tuned for the full trailer reveal dropping soon 👀.',
  'thumbnailUrl': [ nftTrailerCover ],
  'uploadDate': '2016-03-31T08:00:00+08:00',
  'duration': 'PT1M54S',
  'contentUrl': 'https://youtu.be/0ZMctoyu-P4',
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is HELIX?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'HELIX is a decentralized, high-fidelity metaverse platform where you can meet new people, buy and sell virtual items, play games, and earn tokens.',
      },
    }, {
      '@type': 'Question',
      'name': 'When can I play HELIX?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We are pushing to release an early access preview build to our community by the end of 2022. After that, we’ll gradually roll out access to everyone.',
      },
    }, {
      '@type': 'Question',
      'name': 'Who’s behind HELIX and how is development being funded?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'HELIX is being developed by Hypersonic Laboratories, a venture-funded startup based in Los Angeles.',
      },
    }, {
      '@type': 'Question',
      'name': 'How does the play and earn model work? Where does this money come from?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'When you buy virtual items in a traditional game such as Fortnite or Roblox, the companies take all the profit. In play and earn games like HELIX, the majority of the revenue (from NFT sales, item transaction fees, etc.) goes to a nonprofit Community Treasury which distributes it back to players in the form of play and earn rewards.',
      },
    }, {
      '@type': 'Question',
      'name': 'What blockchain does HELIX use?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'HELIX uses Ethereum and Polygon, a layer 2 solution for faster and lower cost transactions.',
      },
    }, {
      '@type': 'Question',
      'name': 'Will I be able to own and trade virtual land?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. Parts of Parallel City will sold and claimed via an upcoming auction and land owners will be able to develop on their land or lease it to other players/businesses for profit.',
      },
    }, {
      '@type': 'Question',
      'name': 'Will there be a native token within HELIX?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We will announce our native token soon.',
      },
    },
  ],
};

export const nftFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How do I own a Founders Collection NFT?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'HELIX is an open-world multiplayer online game where you can meet new people, buy and sell virtual items, and play games.',
      },
    }, {
      '@type': 'Question',
      'name': 'How many NFTs are available?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We plan to release an early access build by Q2-Q3 of 2022, exclusively to Founders NFT holders. After that, we’ll gradually roll out access to more users.',
      },
    }, {
      '@type': 'Question',
      'name': 'How much are the NFTs?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'HELIX is being developed by Hypersonic Laboratories, a venture-funded startup based in Los Angeles. Our investors have backed many successful startups such as Twitter, Tumblr,  and Pinterest.',
      },
    },
  ],
};

export const gameSchema = {
  '@context': 'https://schema.org',
  '@type': [ 'VideoGame', 'SoftwareApplication' ],
  'name': 'HELIX Metaverse',
  'operatingSystem': 'Windows 10/11',
  'applicationCategory': 'GameApplication',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.6',
    'ratingCount': '8864',
  },
  'offers': {
    '@type': 'Offer',
    'price': '0',
  },
};