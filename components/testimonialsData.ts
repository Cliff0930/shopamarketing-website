export interface Testimonial {
  quote: string;
  name: string;
  bio: string;
  logo?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Royal Park Dental uses Shopa Marketing and are pleased with their customer service and product. Thank you for your patience and being so accommodating to our needs. Highly recommend!',
    name: 'Royal Park Dental',
    bio: 'Dental Clinic, Melbourne',
    logo: '/assets/img/testimonials/royal-park-dental.png',
  },
  {
    quote: 'We really appreciate Shopa Marketing and their service. Their employees are reliable and quick to action anything you need.',
    name: 'First Step Fertility',
    bio: 'Fertility Clinic, Australia',
    logo: '/assets/img/testimonials/first-step-fertility.png',
  },
  {
    quote: 'I am so happy with the entire process and end product. Tom Richards from Shopa Marketing handled my digital advertising campaign and web design. Result is excellent.',
    name: 'Lmt Finance',
    bio: 'Mortgage Broker, Geelong',
    logo: '/assets/img/testimonials/lmt-finance.jpg',
  },
  {
    quote: 'They look after the people they work with, with very good deals.',
    name: 'Bargain Beds',
    bio: 'Small Family Business',
    logo: '/assets/img/testimonials/bargain-beds.png',
  },
  {
    quote: 'Very professional and very helpful with building a new business website and online marketing.',
    name: 'Independent Property Sales',
    bio: 'Real Estate, Geelong',
  },
  {
    quote: 'Easy well supported process with excellent communication along the way.',
    name: 'Coastal Skin & Beauty',
    bio: 'Beauty Clinic, Kapiti Coast',
    logo: '/assets/img/testimonials/coastal-skin-beauty.png',
  },
  {
    quote: "Lawrence's professional guidance was instrumental in crafting a compelling advertisement. Thrilled with the results and highly recommend his services.",
    name: 'Home Caring Tranmere',
    bio: 'NDIS & Home Care Provider, Adelaide',
    logo: '/assets/img/testimonials/home-caring-tranmere.webp',
  },
  {
    quote: 'The team were easy to communicate with which made the process smooth.',
    name: 'Hutt Dental Hub',
    bio: 'Dental Clinic',
    logo: '/assets/img/testimonials/hutt-dental-hub.png',
  },
  {
    quote: 'They were quick to respond and provided us with great quality artwork.',
    name: 'Fountain College',
    bio: 'Education',
    logo: '/assets/img/testimonials/fountain-college.png',
  },
  {
    quote: 'We (Bare) partnered with Shopa Marketing to execute our branded in-store print and digital signage across local supermarkets in Adelaide, and the results have been great. From initial discussions to final rollout, the team has been wonderful to work with - highly professional, responsive, and deeply attentive. They brought our vision to life, and the signage has significantly expanded our brand awareness in the local community.',
    name: 'Bare',
    bio: 'Brand, Adelaide',
    logo: '/assets/img/testimonials/bare.svg',
  },
];

// Home-page-only testimonials — appended to the wall on the homepage only,
// passed via the `extra` prop of ServiceTestimonials. Kept verbatim.
export const homeExtraTestimonials: Testimonial[] = [
  {
    quote: `We started our campaign for Care Next Level (NDIS) in medical centres with Shopa Marketing in July and began seeing results by mid-October, with new calls from potential clients that successfully converted into clients. We've now signed up for three medical centres and love the exposure our business gets in local communities. This campaign has not only brought in direct inquiries but has also significantly increased word-of-mouth referrals. The Shopa Marketing team has been incredibly helpful, designing our artwork and accommodating any changes quickly and professionally. Highly recommend their services! Cheers Vik`,
    name: 'Vikas Thakur',
    bio: 'Care Next Level (NDIS)',
  },
  {
    quote: `I recently worked with Shopa Marketing to promote my business, Gittoes Real Estate, through their Digital Screen advertising service at the Green Point Medical Centre, and I couldn't be more pleased with the experience. From the initial contact to the final stages of getting my ad live, the team was incredibly professional, responsive, and helpful. Their design work was top-notch, capturing exactly what I wanted to communicate. The customer service provided by Lawrence and the team was exceptional — they made the entire process seamless and stress-free. Any questions or adjustments I had were addressed promptly, which made me feel confident and valued as a client. I highly recommend Shopa Marketing to anyone looking to boost their business visibility. Their expertise and dedication truly set them apart. Thanks again to the whole team for making this such a positive experience!`,
    name: 'Blake Stretton',
    bio: 'Gittoes Real Estate',
  },
  {
    quote: `Maison Realty recently collaborated with Shopa Marketing on a 15 second advertisement for the big screen at 365 Medical Centre in St Peters. I'll be honest — as a first time collaboration I was a little hesitant. That hesitation was completely unfounded. The team were prompt, efficient and delivered exactly what I was looking for. They understood our brand, brought our vision to life and genuinely supported Maison Realty's marketing journey every step of the way. If you are looking for a marketing team that delivers with care and precision — look no further. We will absolutely be working together again. Highly recommend. Elaina Picken, Founder & Principal | Maison Realty`,
    name: 'Maison Realty',
    bio: 'Real Estate',
  },
  {
    quote: `We wholeheartedly endorse our Campaign Manager and the team at Shopa Marketing Aust. Mosman Preparatory School engaged them to assist with retail advertising services. Their team crafted a strategic plan that included impactful out-of-home placements, demonstrably elevating our brand awareness. This approach, coupled with their professionalism, clear communication, and commitment to measurable results, significantly enhanced our business's reach. For any business seeking a comprehensive and effective out-of-home advertising solution, we highly recommend Shopa Marketing.`,
    name: 'Sonya Hemsley',
    bio: 'Mosman Preparatory School',
  },
  {
    quote: `As a real estate agent who relies heavily on external marketing like signage and billboards, I found working with Nico to be a really positive experience. The process was smooth, professional, and easy from start to finish. We have also seen great exposure via increased foot traffic through the shopping centre as a result. Shopa Marketing did a great job.`,
    name: 'Malcolm Quinn',
    bio: 'Real Estate Agent',
  },
  {
    quote: `Shaan and Yash from Shopa Marketing have been absolutely amazing. They created my website (NDIS Support Coordination Services) and would amend content upon my request immediately, and this was ongoing as I needed. There was a collaborative approach, and they were both very understanding and kind in answering all my questions. They are very customer focused and I highly recommend them. Their response to emails and phone calls were within the same day, alleviating concerns that I may have had. There were also IT issues that were out of our control, but Shaan and Yash helped me by going above and beyond with regards to solving IT issues (external IT issues) in order to go live with my website. They were absolutely amazing!! — Alison, Adelaide Support Coordination Services Pty Ltd`,
    name: 'Alison Sinnott',
    bio: 'Adelaide Support Coordination Services',
  },
  {
    quote: `A big shout out to the team at Shopa Marketing. Tom and Steve have bent over backwards to assist with any issues that arise. Tom & Steve are valued employees of the company. I highly recommend this company for advertising and customer service. Steve & Tom as the company face are an asset to Shopa Marketing. We receive no less than 7 enquiries a week. Thanks for doing what you said you are committed to provide.`,
    name: 'Leonie Dawson Buckley',
    bio: 'Advertising Client',
  },
  {
    quote: `I'd happily recommend working alongside Lawrence Seymour and the Shopa Marketing team. I found all coordination to be flawless, quick turnaround and digitally promoting my company Helping Hands Support Work Pty Ltd within a week's turnaround within medical centres and hospital to aid in building my NDIS, ACAT & Veteran clientele in new locations. I'm grateful for our working relationship. Thank you Lawrence and team. — Danielle Rae, Flying Fish Point QLD`,
    name: 'Danielle Rae',
    bio: 'Helping Hands Support Work',
  },
  {
    quote: `Garry from Shopa Marketing has been absolutely phenomenal to work with for our website design. His service has been top-notch, and the website he created for us is exceptional. We were particularly impressed by the quick follow-ups and updates on our website. Garry's attention to detail and commitment to ensuring our satisfaction have been outstanding. I highly recommend Garry and Shopa Marketing for any website design needs. Thank you, Garry, for your exceptional service and dedication! Us at The Valor Group will definitely recommend the Shopa Marketing Team.`,
    name: 'Abdul Hinderry',
    bio: 'The Valor Group',
  },
  {
    quote: `I am a Real Estate agency in Thornleigh, Page & Co Real Estate, and have been working with the team at Shopa Marketing for my Digital screen advertising. I have found them to be extremely efficient, reliable and helpful. I gave them a brief for what I would like in my advertising and they nailed it first go! They were also helpful in recommending other services they thought would give me more exposure. I would highly recommend the team at Shopa Marketing.`,
    name: 'Karen Page',
    bio: 'Page & Co Real Estate',
  },
  {
    quote: `Tom and Seth from Shopa Marketing have been fantastic to work with. My new website is exactly what I was looking for and Tom has been proactive at making changes as I have requested them. The site is perfect. I highly recommend Tom and the team at Shopa Marketing for your new website. Thanks guys.`,
    name: 'Jennifer Marshall',
    bio: 'Website Design Client',
  },
  {
    quote: `We recently had the pleasure of working with Victor and his team at Shopa Marketing for advertising Premier Care Australia through digital screen advertising at Caddens Medical Centre. The experience has been nothing short of exceptional. From the outset, the team at Shopa Marketing was incredibly professional, taking the time to understand our needs and providing us with tailored solutions. The team was responsive, efficient, and ensured that our advertisement was displayed exactly as we envisioned.`,
    name: 'Lessa Cutmore',
    bio: 'Premier Care Australia',
  },
  {
    quote: `We were recently given the opportunity by Shopa Marketing to create an ad for our local supermarket and couldn't be happier with our experience. Russel was our main point of contact and he was incredibly friendly, helpful, and professional — both over email and on the phone. He made the whole process seamless and we're really pleased with the final result. Thanks again Russel and the Shopa Marketing team for making it so easy!`,
    name: 'Yovich Advisory',
    bio: 'Advisory Services',
  },
  {
    quote: `We were recently contacted by Shopa Marketing to launch a digital campaign for Your Ability Services at Hassall Grove Medical Centre, and the experience was seamless from start to finish. Lawrence and the team were responsive, professional, and incredibly supportive throughout the entire process — from the initial brief to final approval. Even with a few rounds of changes on our end, they were patient and helpful every step of the way. I highly recommend Shopa Marketing for any business looking to elevate their digital advertising in a professional, stress-free way.`,
    name: 'Roshni Devi',
    bio: 'Your Ability Services',
  },
  {
    quote: `We've used Shopa Marketing for some local TV screen advertising for Storage King Brendale. Both Mark and Jennifer have provided exceptional customer service and are prompt with their replies to our requests. The process is easy and changes can be made within 48 hours. It's helping get our name out there to potential customers that may not know where we are.`,
    name: 'Storage King Brendale',
    bio: 'Self Storage',
  },
  {
    quote: `I would highly recommend Shopa Marketing for advertising your business. Recently I worked with them to publish our ad in one of the local grocery stores. Victor and team have done a fantastic job. They are very professional and addressed our requirements in a timely manner. Great art work!`,
    name: 'Arpana Ahluwalia',
    bio: 'Retail Advertising Client',
  },
  {
    quote: `Thank you to Michael, Lawrence, and the team at Shopa Marketing for promoting our business, Gorman Jones Lawyers, through digital screen advertising at Centre Health Medical Centre in Campbelltown. Their pricing was excellent, and communication was effective. With the option to use our video, we were able to act quickly and achieve exactly what we wanted. — Brenda, Gorman Jones Lawyers`,
    name: 'Brenda Rowlands',
    bio: 'Gorman Jones Lawyers',
  },
  {
    quote: `RAWR Support Services went for the digital screen advertising. We were successful in securing 3 sites which will assist with driving referrals for our service. Advertising with Shopa Marketing was an easy process and communication with the team was prompt. Thank you Shopa Marketing team.`,
    name: 'David Wallis',
    bio: 'RAWR Support Services',
  },
  {
    quote: `It has been a great experience working with Victor and his team at Shopa Marketing for advertising TK Community Care Services in Darwin through digital screen advertising at Top End Medical Services – Casuarina. The process was smooth and professional, with timely delivery of samples and full consideration of our requests. They provided personalised artwork rather than standard designs and were very accommodating, making multiple revisions to ensure our satisfaction. Highly recommend their services!`,
    name: 'TK Community Care Services',
    bio: 'Community Care, Darwin',
  },
  {
    quote: `Shopa have been very helpful with our new advertising campaign for Pit Stop Palmerston North. This is our second time with them — the first time was for advertising in Melody's supermarket, this time is for Victoria Health Centre in Hokowhitu. Rex has been fabulous making the adverts very quickly and getting our Christmas one sorted as well.`,
    name: 'Maria King',
    bio: 'Pit Stop, Palmerston North',
  },
];

// OOH Advertising page only — replaces the shared testimonials on that page.
export const oohPageTestimonials: Testimonial[] = [
  {
    quote: `Ray White Elevate Group recently worked with Shopa Marketing for advertising on a digital screen display in a medical centre. The team was efficient, helpful, and pleasant to deal with throughout the entire process. Great communication and service — we would happily recommend Shopa Marketing to other businesses.`,
    name: 'Lily Brandhoj',
    bio: 'Ray White Elevate Group',
  },
  {
    quote: `I am very impressed with the service we received with Shopa Marketing. The ad design to display in medical centres is perfect to promote Comfort Keepers South. Very efficient and professional service.`,
    name: 'Petrina Beeton',
    bio: 'Comfort Keepers South',
  },
  {
    quote: `Shopa Marketing did a great job getting our Oz Carers ad live at the medical centre. The whole process was smooth and professional, and the ad looks fantastic. They really understood our vision and helped us share what we do with the community as an NDIS Provider.`,
    name: 'Oz Carers',
    bio: 'NDIS Provider',
  },
  {
    quote: `Great marketing team at Shopa Marketing. Albury IVF have been advertising with Shopa Marketing for 12 months now and we are very happy with the screen advertising they have provided. Highly recommend this company for professionalism.`,
    name: 'Albury IVF',
    bio: 'IVF Clinic',
  },
  {
    quote: `Yogaruka partnered with Shopa Marketing to launch a digital campaign at IGA Drummoyne, and we were very pleased with the results. Thank you Rex & team.`,
    name: 'Yogaruka',
    bio: 'Yoga Studio',
  },
  {
    quote: `Rex and the design team from Shopa Marketing worked with me to prepare two ads for Talking Dog to go in supermarkets. They took my ideas and worked with me to produce a very good result. I'm a happy customer.`,
    name: 'Dudley Harvey-Smith',
    bio: 'Talking Dog',
  },
  {
    quote: `Shopa Marketing is doing a great job advertising Holy Family Primary School at Merewether IGA. Thank you!`,
    name: 'Phillipa Dobinson',
    bio: 'Holy Family Primary School',
  },
  {
    quote: `Shopa Marketing recently assisted our business, Janson Lawyers, to create artwork to advertise our firm with a local medical centre. Very happy with the advertisement. The service provided was prompt and professional. Will highly recommend. Thank you Victor for making the process painless!`,
    name: 'Janson Lawyers',
    bio: 'Law Firm',
  },
  {
    quote: `It was great to deal with Tomin and Lawrence from Shopa Marketing. They presented our company Air Light Insulation with a great promotion opportunity at Sovereign Hills Shopping Centre. I greatly appreciate their attention to detail with design and efficiency with communication! 10/10 recommend!`,
    name: 'Jesse Webber',
    bio: 'Air Light Insulation',
  },
  {
    quote: `Victor and his team worked on some digital screen marketing for our real estate agency in Jimboomba QLD. Their service in creating the artwork was prompt and their creation was in line with the directive given. Victor's customer service was professional and friendly.`,
    name: 'Brogan Duff',
    bio: 'Real Estate, Jimboomba QLD',
  },
];

// Website Design page only — replaces the shared testimonials on that page.
export const websitePageTestimonials: Testimonial[] = [
  {
    quote: `I've been working with the Shopa Marketing team for a long time, and they have been nothing but fantastic. They are incredibly responsive and professional. Shopa Marketing designed my website (sreg.com.au) and are managing my SEO for over a year now, helping my online presence grow steadily. I've also been advertising with them in IGAs and medical centres for the past few months and couldn't be happier with the results. I highly recommend them to anyone looking for local or digital advertising. Special shoutout to Shaan Newman, who is knowledgeable and truly knows what he's doing! This company is a one stop shop for all advertising needs.`,
    name: 'TJ Kooner',
    bio: 'SREG',
  },
  {
    quote: `Keymer Child Care needed a website to reach further families in our area. Shopa Marketing approached me and offered a very affordable solution. I found them to be very professional and very helpful with building a new business website, and online marketing. Tom and Steve have been absolutely wonderful, nothing is ever a problem. We have just signed for another 12 months with Shopa Marketing. Thanks to Steve and Tom.`,
    name: 'Keymer Child Care',
    bio: 'Child Care',
  },
  {
    quote: `Tom, Steve and the team at Shopa Marketing designed our new website. They did a fantastic job and met all requirements for our business, Humpty Doo Hotel. Thanks guys!`,
    name: 'Rodney Parry',
    bio: 'Humpty Doo Hotel',
  },
  {
    quote: `TSD Pest Control in Tweed Heads needed a website page built for our business and Tom and Steve at Shopa Marketing provided this, with a great outcome.`,
    name: 'Sue Davidson',
    bio: 'TSD Pest Control, Tweed Heads',
  },
  {
    quote: `Shopa Marketing is a great choice for marketing services. Yash and Lawrence have been very accommodating and assisted us a lot to update and give a boost for our company website and social media sites. Would definitely recommend them! — Leah Bett Nursing Services, Alice Springs NT`,
    name: 'Rea Buenaflor',
    bio: 'Leah Bett Nursing Services',
  },
  {
    quote: `The team at Shopa Marketing were very helpful with designing a professional and eye-catching website. They provided examples of websites and promptly tailored any changes we requested and were very hands on through the whole design process. We love the website for our NDIS Plan Management business — Disability Insurance Administration Services in North QLD.`,
    name: 'Ellianna Temp',
    bio: 'Disability Insurance Administration Services',
  },
  {
    quote: `James Brown Electrical and Communications in Oatley NSW used Shopa Marketing's web design services to design and set up a website. Excellent service and all round an enjoyable experience using their services.`,
    name: 'James Brown',
    bio: 'James Brown Electrical & Communications',
  },
  {
    quote: `I had been planning to get a professional website done for the past 12 months. I had been approached by 2 website companies that were very persistent but I did not like their approach. Along came Shopa Marketing and the lady on the phone line was very pleasant and easy to understand. The team listened to my requirements and an outstanding website was developed. My business is Caring Support Matters, a Registered NDIS Provider on the Fraser Coast in Qld, and we provide services to the Disability Sector. I highly recommend the team at Shopa Marketing for website design and marketing.`,
    name: 'Brad Trace',
    bio: 'Caring Support Matters (NDIS)',
  },
  {
    quote: `The team at Shopa Marketing, especially Lawrence Seymour, were very helpful and supportive with designing a professional website (Austwise). Thank you.`,
    name: 'Michael Todd',
    bio: 'Austwise',
  },
  {
    quote: `I am Lynne Tompkins of Lmt Finance in Geelong, a mortgage broker with over 21 years experience and a sole owner operator of my business. Tom Richards from Shopa Marketing handled my digital advertising campaign and web design, a first for me, and I am so happy with the entire process and end product. I couldn't have done it on my own and was always putting it off — until I met Tom at Shopa Marketing. Result is excellent.`,
    name: 'Lynne Tompkins',
    bio: 'Lmt Finance, Geelong',
  },
];

// SEO Services page only — replaces the shared testimonials on that page.
export const seoPageTestimonials: Testimonial[] = [
  {
    quote: `I worked with Shopa Marketing late last year to improve my SEO in Google and update blogs for my website at Deb's Design Lab. Over only a few months my sales increased and my Google ranking went up! Very pleased with the result. Thank you Neil, Gary and team.`,
    name: `Deb's Design Lab`,
    bio: 'Design Studio',
  },
  {
    quote: `Thank you for all your support and guidance. We've had such a positive and easy experience working with you to help promote our business, StoMac Plumbing. We really appreciate the effort, communication and professionalism from Shopa Marketing in helping us grow our online presence and showcase our services.`,
    name: 'Brooke Macnaughtan',
    bio: 'StoMac Plumbing',
  },
  {
    quote: `Nico from Shopa Marketing has been very helpful, he has done exceptional work on my website project, and he has also helped with my online marketing by giving me timely insight into how our marketing trend is going.`,
    name: 'SIA Support Services',
    bio: 'Support Services',
  },
  {
    quote: `A great service — Shopa Marketing makes it easy to reach more people and create awareness. — Dr Rylan Hayes, The Vision Surgeon`,
    name: 'Dr Rylan Hayes',
    bio: 'The Vision Surgeon',
  },
  {
    quote: `The Shopa Marketing team understand our requirements very well. They take good responsibility and do good follow-up when something is pending from our end. Their designs are very professional and mostly meet our expectations. They support us well. It has been more than 6 months that we have been using their service for our digital marketing requirements. Overall, they are professional and we are very much satisfied with their work. Thanks to Neil, Victor, Kate and the team.`,
    name: 'Vinayak Hegde',
    bio: 'Digital Marketing Client',
  },
  {
    quote: `We're grateful to Shopa Marketing for helping us reach our target audience of young people under the age of 16, a challenging cohort to reach given new legislation for social media. Social Futures is running digital screen ads in the Northern Rivers promoting headspace, a youth mental health service.`,
    name: 'Brooke Billett',
    bio: 'Social Futures',
  },
  {
    quote: `We've had a positive experience partnering with Shopa Marketing to support the digital marketing for one of our early childhood services. The team has been professional, responsive and easy to work with throughout the campaign. Communication has been clear, they have consistently followed through on commitments, and they've been receptive to feedback and campaign adjustments as our needs have evolved. We value working with businesses that are collaborative, solution focused and committed to continuous improvement, and Shopa Marketing has demonstrated those qualities throughout our partnership. Thank you to the team at Shopa Marketing for your support! We appreciate your professionalism and look forward to continuing to work together.`,
    name: 'Bel Burgess',
    bio: 'Early Childhood Services',
  },
  {
    quote: `We from Soul Agenda Yoga & Pilates think Victor is an incredibly talented art designer with a great eye for detail and branding. He's created a number of online ads for us that have been visually stunning, on-brand, and high-performing. He's quick, professional, and always a pleasure to work with. Highly recommend Shopa Marketing if you're looking for creative that truly stands out!`,
    name: 'Nell Arnold',
    bio: 'Soul Agenda Yoga & Pilates',
  },
  {
    quote: `We recently worked with Lawrence Seymour from Shopa Marketing to market our conveyancing business, Balben Property Transfers in Ballarat. Lawrence took the time to understand our needs and created a great advertising campaign that effectively reached the intended target audience. His communication was excellent; he kept us informed and answered all questions quickly. A big thanks to Lawrence and the team — we highly recommend their services for anyone looking to improve or broaden their own business's marketing.`,
    name: 'MegT',
    bio: 'Balben Property Transfers, Ballarat',
  },
  {
    quote: `We are a local primary school in Mosman NSW and local marketing is very important in building those community connections. Lawrence and the team from Shopa Marketing are outstanding and very knowledgeable. We love working with them on local digital retail marketing. They listen and spend time understanding our business needs.`,
    name: 'MCEPS Marketing',
    bio: 'Primary School, Mosman NSW',
  },
];

// Google Ads page only — replaces the shared testimonials on that page.
export const googleAdsPageTestimonials: Testimonial[] = [
  {
    quote: `As a tourism operator offering daily 3-hour lunch cruises known as Captain Proud Paddle Boat Cruises, based out of Murray Bridge South Australia, we have been heavily affected by the Covid-19 pandemic and, just recently, the River Murray floods. Shopa Marketing has been really good for us — they help promote us through Google Ads, YouTube, Facebook, Instagram etc. Always very easy to deal with, and would recommend to anyone needing this type of service.`,
    name: 'Captain Proud Cruises',
    bio: 'Paddle Boat Cruises, Murray Bridge SA',
  },
  {
    quote: `We have a Level 2 ASP and Electrical Contracting Business in Newcastle. Lawrence Seymour from Shopa Marketing provided us with a fabulous digital advertising campaign. Lawrence made the whole experience a breeze from start to finish. He provided everything that we requested. I would highly recommend him to other businesses out there for your advertising.`,
    name: 'C Mack Electrical',
    bio: 'Electrical Contractor, Newcastle',
  },
  {
    quote: `I had a great experience working with Shopa Marketing, especially Rex and Shaan. Communication has been clear and professional throughout the process, and they've been responsive to feedback and revisions. The digital advertising setup for Flourish Tree Wellbeing was handled smoothly, and I appreciate the support provided to ensure the campaign aligned with my brand and services. Thank you to the team for your professionalism and assistance.`,
    name: 'Chioma Obimma',
    bio: 'Flourish Tree Wellbeing',
  },
  {
    quote: `We recently worked with Lawrence Seymour from Shopa Marketing to market our conveyancing business, Balben Property Transfers in Ballarat. Lawrence took the time to understand our needs and created a great advertising campaign that effectively reached the intended target audience. His communication was excellent; he kept us informed and answered all questions quickly. A big thanks to Lawrence and the team — we highly recommend their services for anyone looking to improve or broaden their own business's marketing.`,
    name: 'MegT',
    bio: 'Balben Property Transfers, Ballarat',
  },
  {
    quote: `Blue Cross Health and Wellbeing is a small registered NDIS service provider. We had a great working experience with Shopa Marketing. The staff members are knowledgeable, friendly and very responsive. They understood our unique business expectations clearly in terms of our digital advertising requirements. — Blue Cross Health and Wellbeing Pty Ltd`,
    name: 'Dasharathi Karamchedu',
    bio: 'Blue Cross Health and Wellbeing (NDIS)',
  },
  {
    quote: `We are Home Caring Tranmere, an NDIS and Home Care Package service provider in Adelaide. We recently collaborated with Lawrence Seymour from Shopa Marketing for our digital video advertising campaign. Lawrence's professional guidance was instrumental in crafting a compelling advertisement and ensuring it was displayed perfectly. We're thrilled with the results and highly recommend his services to anyone looking to elevate their digital marketing efforts!`,
    name: 'Wang Alex',
    bio: 'Home Caring Tranmere',
  },
  {
    quote: `It's been great working with Shopa Marketing. The staff members are friendly and very responsive. They understand the business expectations clearly in terms of digital advertising. — Mental Health Foundation Australia, South Yarra Victoria`,
    name: 'Mental Health Foundation Australia',
    bio: 'South Yarra, Victoria',
  },
  {
    quote: `Nicholas from Shopa Marketing did an excellent and speedy job working on a digital advertisement for Otago Oral Surgery & Implant Centre. It made the whole process smooth and easy.`,
    name: 'Otago Oral Surgery',
    bio: 'Oral Surgery & Implant Centre',
  },
  {
    quote: `We at Strathalbyn Physiotherapy found Shopa Marketing to be a very professional digital marketing agency! Easy communication and affordable pricing. Highly recommend.`,
    name: 'Joel Varghese Simon',
    bio: 'Strathalbyn Physiotherapy',
  },
  {
    quote: `Thank you Nicholas for your expert support with my Dymond Psychology marketing campaign! Very impressed with your digital skills and quick turnaround for my video to be displayed at West Brunswick Clinic!`,
    name: 'Sarah Dymond',
    bio: 'Dymond Psychology',
  },
];

// Social Media page only — replaces the shared testimonials on that page.
export const socialMediaPageTestimonials: Testimonial[] = [
  {
    quote: `As a tourism operator offering daily 3-hour lunch cruises known as Captain Proud Paddle Boat Cruises, based out of Murray Bridge South Australia, we have been heavily affected by the Covid-19 pandemic and, just recently, the River Murray floods. Shopa Marketing has been really good for us — they help promote us through Google Ads, YouTube, Facebook, Instagram etc. Always very easy to deal with, and would recommend to anyone needing this type of service.`,
    name: 'Captain Proud Cruises',
    bio: 'Paddle Boat Cruises, Murray Bridge SA',
  },
  {
    quote: `I worked with Shopa Marketing to create brand awareness through social media and the Google Display Network for my business, Taxsafe Public Accountants, Marsden Park, NSW. Kenny was great at explaining the advantages of the campaign, the process to go through and guiding me at each stage. The most important part was the level of communication, his professionalism, regular follow-up and the amount of patience he has in answering my tons of questions. He understood exactly what I needed and I was delighted with the outcome of the campaign. I would definitely recommend Shopa Marketing and Kenny.`,
    name: 'Lata Pahuja',
    bio: 'Taxsafe Public Accountants, NSW',
  },
  {
    quote: `I have been with the Shopa Marketing team for the last four years. They have looked after my social media sites very well. Specially Patrick & Gary — always helpful.`,
    name: 'Alam Topon',
    bio: 'Social Media Client',
  },
  {
    quote: `We from Soul Agenda Yoga & Pilates think Victor is an incredibly talented art designer with a great eye for detail and branding. He's created a number of online ads for us that have been visually stunning, on-brand, and high-performing. He's quick, professional, and always a pleasure to work with. Highly recommend Shopa Marketing if you're looking for creative that truly stands out!`,
    name: 'Nell Arnold',
    bio: 'Soul Agenda Yoga & Pilates',
  },
  {
    quote: `We recently worked with Shopa Marketing to launch a digital campaign for Breathe Health Clubs Morayfield at Bertha Street Medical & Dental Centre, and the experience was seamless from start to finish. Nicholas and the team were responsive, professional, and incredibly supportive throughout the entire process — from the initial brief to final approval. Even with a few rounds of changes on our end, they were patient and helpful every step of the way. As someone working in marketing, I really appreciated how easy they made the experience and how clear their communication was. Highly recommend Shopa Marketing for any business looking to elevate their digital advertising in a professional, stress-free way.`,
    name: 'Sandi Heffernan',
    bio: 'Breathe Health Clubs, Morayfield',
  },
  {
    quote: `We're grateful to Shopa Marketing for helping us reach our target audience of young people under the age of 16, a challenging cohort to reach given new legislation for social media. Social Futures is running digital screen ads in the Northern Rivers promoting headspace, a youth mental health service.`,
    name: 'Brooke Billett',
    bio: 'Social Futures',
  },
  {
    quote: `I had a great experience working with Shopa Marketing, especially Rex and Shaan. Communication has been clear and professional throughout the process, and they've been responsive to feedback and revisions. The digital advertising setup for Flourish Tree Wellbeing was handled smoothly, and I appreciate the support provided to ensure the campaign aligned with my brand and services. Thank you to the team for your professionalism and assistance.`,
    name: 'Chioma Obimma',
    bio: 'Flourish Tree Wellbeing',
  },
  {
    quote: `The Shopa Marketing team understand our requirements very well. They take good responsibility and do good follow-up when something is pending from our end. Their designs are very professional and mostly meet our expectations. They support us well. It has been more than 6 months that we have been using their service for our digital marketing requirements. Overall, they are professional and we are very much satisfied with their work. Thanks to Neil, Victor, Kate and the team.`,
    name: 'Vinayak Hegde',
    bio: 'Digital Marketing Client',
  },
  {
    quote: `We've had a positive experience partnering with Shopa Marketing to support the digital marketing for one of our early childhood services. The team has been professional, responsive and easy to work with throughout the campaign. Communication has been clear, they have consistently followed through on commitments, and they've been receptive to feedback and campaign adjustments as our needs have evolved. We value working with businesses that are collaborative, solution focused and committed to continuous improvement, and Shopa Marketing has demonstrated those qualities throughout our partnership. Thank you to the team at Shopa Marketing for your support! We appreciate your professionalism and look forward to continuing to work together.`,
    name: 'Bel Burgess',
    bio: 'Early Childhood Services',
  },
  {
    quote: `We are Home Caring Tranmere, an NDIS and Home Care Package service provider in Adelaide. We recently collaborated with Lawrence Seymour from Shopa Marketing for our digital video advertising campaign. Lawrence's professional guidance was instrumental in crafting a compelling advertisement and ensuring it was displayed perfectly. We're thrilled with the results and highly recommend his services to anyone looking to elevate their digital marketing efforts!`,
    name: 'Wang Alex',
    bio: 'Home Caring Tranmere',
  },
];
