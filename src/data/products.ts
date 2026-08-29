export type Category = "t-shirts" | "graphic-tees" | "shirts" | "polos" | "tops" | "shackets";

export type Product = {
  id: string;
  name: string;
  price: number;
  compareAt: number | null;
  category: Category;
  sizes: string[];
  images: string[];
  description: string;
  bestSeller: boolean;
  oneOfOne: boolean;
};

export const categories: { slug: Category; title: string; blurb: string }[] = [
  { slug: "t-shirts", title: "T-Shirts", blurb: "Loose-fit 240 GSM French Terry tees built for everyday wear." },
  { slug: "graphic-tees", title: "Graphic Tees", blurb: "Statement prints on premium cotton — the INVI signature." },
  { slug: "shirts", title: "Shirts", blurb: "Linen-blend and statement shirts with clean, modern tailoring." },
  { slug: "polos", title: "Polos", blurb: "Knitted and structured polos that dress up or down." },
  { slug: "tops", title: "Baby Tees", blurb: "Fitted baby tees cut for a sharp, cropped silhouette." },
  { slug: "shackets", title: "Shackets", blurb: "Overshirt layering for in-between weather." },
];

export const products: Product[] = [
  {
    "id": "milange-charcoal-loose-fit-t-shirt",
    "name": "Milange Charcoal Loose Fit T-Shirt",
    "price": 899,
    "compareAt": null,
    "category": "t-shirts",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04889_2.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04780_2.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04867_3.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04899_2.jpg"
    ],
    "description": "A relaxed, loose-fit T-shirt designed in a clean silhouette with slightly dropped shoulders and a structured drape. Crafted from premium 240 GSM French Terry cotton , it features a smooth, substantial hand feel with breathable comfort for everyday wear. The charcoal finish adds a refined, versatile touch, while the relaxed proportions create an effortless contemporary look. Made for everyday movem",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "sky-blue-loose-fit-t-shirt",
    "name": "Sky Blue Loose Fit T-Shirt",
    "price": 899,
    "compareAt": null,
    "category": "t-shirts",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04717.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04667.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04707.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04751.jpg"
    ],
    "description": "A relaxed loose-fit T-shirt designed with a clean silhouette and slightly dropped shoulders for an effortless, contemporary look. Crafted from premium 240 GSM French Terry cotton , it offers a soft, substantial feel with a smooth finish and comfortable structure. The fresh sky blue shade adds a clean, versatile touch, making it an effortless everyday essential that pairs easily with any casual loo",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "light-orange-loose-fit-t-shirt",
    "name": "Light Orange Loose Fit T-Shirt",
    "price": 899,
    "compareAt": null,
    "category": "t-shirts",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04231.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04081.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04206__2.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04271_1__jpg.jpg"
    ],
    "description": "A relaxed loose-fit T-shirt designed with a clean silhouette and slightly dropped shoulders for an effortless, contemporary look. Crafted from premium 240 GSM French Terry cotton , it offers a soft, substantial feel with a smooth finish and comfortable structure. The light orange shade adds a fresh, understated pop of colour, making it a versatile everyday essential that pairs effortlessly with ca",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "baby-pink-loose-fit-t-shirt",
    "name": "Baby Pink Loose Fit T-Shirt",
    "price": 899,
    "compareAt": null,
    "category": "t-shirts",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04406.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04320.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04361.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04430_jpg.jpg"
    ],
    "description": "A relaxed loose-fit T-shirt designed with a clean silhouette and slightly dropped shoulders for an effortless, contemporary look. Crafted from premium 240 GSM French Terry cotton , it offers a soft, substantial feel with a smooth finish and comfortable structure. The soft baby pink shade adds a subtle, refined touch, making it an easy everyday essential that pairs effortlessly with a range of casu",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "navy-blue-loose-fit-t-shirt",
    "name": "Royal Blue Loose Fit T-Shirt",
    "price": 899,
    "compareAt": null,
    "category": "t-shirts",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04563.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04526_jpg.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04546.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID04615_jpg.jpg"
    ],
    "description": "A relaxed loose-fit T-shirt designed with a clean silhouette and slightly dropped shoulders for an effortless, contemporary look. Crafted from premium 240 GSM French Terry cotton , it offers a soft, substantial feel with a smooth finish and comfortable structure. The deep royal blue shade adds a timeless, refined touch, making it a versatile everyday essential that pairs effortlessly with any casu",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "shiry",
    "name": "WHITE LINEN BLEND SHIRT",
    "price": 1499,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09193.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09095_1.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09196.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09110_1.jpg"
    ],
    "description": "Timeless by design. Effortless by nature. The Plain Shirt is built around clean tailoring and everyday versatility. Free from unnecessary details, it focuses on quality, comfort, and a silhouette that never goes out of style. Whether you're dressing for work, weekends, or evenings out, this is the kind of shirt that fits seamlessly into every wardrobe. Crafted from a premium 40% Cotton, 60% Linen ",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "green-shirt",
    "name": "OLIVE GREEN LINEN BLEND SHIRT",
    "price": 1499,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09402.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09290_1.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09341.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09304.jpg"
    ],
    "description": "",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "maroon-shirt",
    "name": "MAROON LINEN BLEND SHIRT",
    "price": 1499,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09514_1_1.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09413_1.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09457.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09435.jpg"
    ],
    "description": "",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "blue-shirt",
    "name": "NAVY BLUE LINEN BLEND SHIRT",
    "price": 1499,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09615.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09556.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09652.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09590.jpg"
    ],
    "description": "",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "black-shirt",
    "name": "BLACK LINEN BLEND SHIRT",
    "price": 1499,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09847.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09722.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09779.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09738.jpg"
    ],
    "description": "",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "pink-shirt",
    "name": "DUSTY ROSE LINEN BLEND SHIRT",
    "price": 1499,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09955.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09902.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09995.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/SID09912.jpg"
    ],
    "description": "",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "honest-duck",
    "name": "HONEST DUCK 1*1",
    "price": 3999,
    "compareAt": null,
    "category": "graphic-tees",
    "sizes": [
      "M"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/6_jpg_0cd182ba-2e3c-4855-abdb-1e8631486043.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/5_jpg_a8fc8bf9-6e2a-4eda-894b-1c191e0f69f0.jpg"
    ],
    "description": "Not everything needs to look serious to say something real. The HONEST DUCK TEE is playful, unexpected, and made with personality. Inspired by being yourself without trying too hard, this piece is designed to stand out in its own simple way. Handmade and created as a one-of-one piece , every detail makes it unique. Crafted from premium 240 GSM 100% Terry Cotton , it gives a soft feel with enough s",
    "bestSeller": false,
    "oneOfOne": true
  },
  {
    "id": "nothing-without-you-tee",
    "name": "NOTHING WITHOUT YOU TEE 1*1",
    "price": 3999,
    "compareAt": null,
    "category": "graphic-tees",
    "sizes": [
      "M"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/1_jpg_ffe29661-ceaa-4d01-8545-94b1c4f317c7.jpg"
    ],
    "description": "Some things mean more when they’re shared. The NOTHING WITHOUT YOU TEE is a reminder that no one builds, grows, or becomes alone. Inspired by connection and the people who shape us, this piece keeps things simple while carrying meaning. Handmade with intentional details, each piece is unique and made only once. Crafted from premium 240 GSM 100% Terry Cotton , it feels soft, comfortable, and struct",
    "bestSeller": false,
    "oneOfOne": true
  },
  {
    "id": "splattered-tee",
    "name": "SPLATTERED TEE 1*1",
    "price": 1999,
    "compareAt": null,
    "category": "graphic-tees",
    "sizes": [
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/4_jpg_dfec7b7c-efc0-470a-8a45-04e8d25a57e5.jpg"
    ],
    "description": "",
    "bestSeller": false,
    "oneOfOne": true
  },
  {
    "id": "unfiltered-tee-1-1",
    "name": "UNFILTERED TEE 1*1",
    "price": 1999,
    "compareAt": null,
    "category": "graphic-tees",
    "sizes": [
      "M"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/8_jpg_4a7c796c-324a-4d1f-8e54-16ae2cf6647e.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/7_jpg_ea4aac3d-2439-4a0b-b4b4-08387af90cee.jpg"
    ],
    "description": "",
    "bestSeller": false,
    "oneOfOne": true
  },
  {
    "id": "garage-tee",
    "name": "GARAGE TEE 1*1",
    "price": 2499,
    "compareAt": null,
    "category": "graphic-tees",
    "sizes": [
      "L"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/3_jpg_01703b70-2f7f-4f03-a066-6939117b506b.jpg"
    ],
    "description": "Some things are better when they’re not perfect. The GARAGE TEE is handmade and designed to be one of a kind. Every mark and detail is created by hand, making each piece unique. Made from premium 240 GSM 100% Terry Cotton , it feels soft, structured, and comfortable to wear all day. The relaxed one-size fit gives an easy look that works for everyone. Simple design. Strong character. STYLE IT YOUR ",
    "bestSeller": false,
    "oneOfOne": true
  },
  {
    "id": "shacket",
    "name": "SHACKET",
    "price": 2999,
    "compareAt": null,
    "category": "shackets",
    "sizes": [
      "S",
      "M",
      "L"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/1.jpg_2_8bdc001a-920f-42df-9bd5-8499d1b94b60.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/2.jpg_2_11803536-fb55-45c7-b605-e5a140c1542e.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/3.jpg_1_d974daba-01a8-43f0-a6b9-cd1c367df0c9.jpg"
    ],
    "description": "Built to layer. Designed to stand out quietly. This shacket brings together the structure of a jacket and the ease of a shirt — giving you a piece that feels refined, versatile, and easy to wear through changing seasons. The clean silhouette, dual flap pockets, and deep navy tone make it feel sharp without looking overdone. With minimal detailing and a relaxed shape, it is designed to add presence",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "invi-pink-heart-tee",
    "name": "INVI Pink Heart Tee",
    "price": 649,
    "compareAt": null,
    "category": "tops",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/8_jpg_e0fe5184-920b-4b8d-ad7d-3c26df600976.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/10_jpg.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/9_jpg_e5f26826-05a3-49e8-bf9f-fe928b735005.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/7_jpg_82d3b7c7-01d6-42a2-a0d0-097db113f9cf.jpg"
    ],
    "description": "Soft. Playful. Confident. The INVI Pink Heart Tee is designed around simplicity with personality. Built with a clean, flattering silhouette, it keeps things minimal while the signature INVI heart graphic adds just the right amount of character. Crafted from a soft cotton-lycra blend , the fabric offers comfort, stretch, and a shape that moves with you. Lightweight and breathable, it’s made for eff",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "invi-white-heart-tee",
    "name": "INVI White Heart Tee",
    "price": 649,
    "compareAt": null,
    "category": "tops",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/2.jpg_1_199e9d8b-c916-4902-bbd2-e19873ef6efe.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/1.jpg_1_5968652a-0579-43fa-aced-85d51ec866f8.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/3_jpg_59bc5879-214b-4ac5-848d-369c91eabf2e.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/5_jpg_beb8ff56-83bd-44e7-9cee-2528f25ed139.jpg"
    ],
    "description": "Clean. Classic. Effortless. The INVI White Heart Tee brings together simplicity and subtle personality. Designed with a clean silhouette, the minimal look is elevated by the signature INVI heart graphic . Made with a soft cotton-lycra blend , it offers comfort, stretch, and a flattering shape that feels easy all day. Fresh, versatile, and effortless to style — this is a piece that fits naturally i",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "invi-jungle-tee",
    "name": "INVI JUNGLE TEE",
    "price": 699,
    "compareAt": 1199,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/E_S_F.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1046.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_093125_4e0611cf-e2ec-4da3-bb8f-cad2740fd51b.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/E_S_FF.png"
    ],
    "description": "Untamed. Confident. Unstoppable. The INVI Jungle Tee embodies raw individuality and fearless expression. Designed for those who stand out naturally, this tee is crafted from 240 GSM 100% cotton , delivering a structured, premium feel with everyday comfort. The jungle-inspired graphic paired with the rich green tone brings depth, strength, and an unmistakable streetwear edge. WHY YOU’LL LOVE IT 240",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "pink-contrast-collar-shirt",
    "name": "Pink Contrast Shirt",
    "price": 1299,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/4_jpg.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/3_jpg.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/8_jpg.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/2_jpg.jpg"
    ],
    "description": "Clean lines. Quiet confidence. The Pink Contrast Collar Shirt is built around one idea — let design do the talking. No prints, no excess, no distractions. Just a sharp silhouette, thoughtful details, and effortless summer comfort. The standout 4-inch big collar with a white contrast adds character without overpowering the look. Lightweight and breathable, this shirt is made to feel easy in warm we",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "khaki-contrast-collar-shirt",
    "name": "Khakhi Contrast Shirt",
    "price": 1299,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/1.jpg_1.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/3.jpg_1.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/2.jpg_1.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/5.jpg_1.jpg"
    ],
    "description": "Understated style. Quiet impact. The Khaki Contrast Collar Shirt is built around subtle detail and effortless versatility. Clean, structured, and intentional, it’s a shirt that works as hard as you do — without shouting for attention. The bold big collar with a crisp white contrast gives a modern twist to a classic neutral. With no prints, no pockets, and minimal branding, the design is focused pu",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "blue-contrast-collar-shirt",
    "name": "Blue Contrast Shirt",
    "price": 1299,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/4.jpg_2.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/1.jpg_2.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/3.jpg_2.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/7.jpg_2.jpg"
    ],
    "description": "Calm tone. Sharp detail. Designed to feel light, look refined, and stand apart without trying too hard. This contrast-collar shirt is all about balance — soft color, strong structure, zero excess. The bold big collar with a white contrast adds definition to an otherwise clean silhouette, making the shirt feel intentional rather than plain. With no prints, no pockets, and no visual clutter, the foc",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "invi-rebel-tee",
    "name": "REBEL TEE",
    "price": 599,
    "compareAt": 1099,
    "category": "graphic-tees",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1057.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1056.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1051.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1053.png"
    ],
    "description": "Unapologetic. Unstoppable. Unafraid. Not everyone follows the path — some create their own. The INVI Rebel Tee is for those who defy expectations and stand tall in their truth. This black oversized graphic t-shirt is crafted to reflect fearless individuality and a refusal to conform — a true essential for rebellious wardrobes across India and beyond. Made from 240 GSM 100% cotton , it offers a pre",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "vintage-car-tee",
    "name": "CLASSIC RIDE TEE",
    "price": 699,
    "compareAt": 1199,
    "category": "graphic-tees",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_095323.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-3296.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1066.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_095426.jpg"
    ],
    "description": "Chasing sunsets. Living memories. Nostalgia meets streetwear in the INVI Classic Ride Tee — a tribute to old road trips, timeless machines, and the freedom of the open road. Designed for those who carry the past with pride, this retro oversized t-shirt blends vintage soul with modern fit, making it a standout for anyone drawn to retro vibes and street culture in India. Made from 240 GSM 100% cotto",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "rustic-invi-tee",
    "name": "RUSTIC TEE",
    "price": 1199,
    "compareAt": null,
    "category": "graphic-tees",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_113109.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_112921.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_113021.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/41CEE681-5182-4FDF-977E-00D9870B7BA3.jpg"
    ],
    "description": "Crafted, not copied. Worn, not wasted. No two Rustic INVI Tees are ever the same — each piece is a canvas of individuality, crafted through unique handmade dyeing techniques. This is handmade streetwear at its most raw and expressive, created for those who embrace imperfection as part of their style. Made from 240 GSM 100% cotton , the tee delivers a heavyweight, premium feel with a relaxed oversi",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "invi-rebel",
    "name": "INVI SPEED CLUB",
    "price": 699,
    "compareAt": 1199,
    "category": "graphic-tees",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1714.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1059.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1061.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1063.jpg"
    ],
    "description": "Peace in motion. Clarity at speed. The INVI Speed Club Tee is for those who find stillness in acceleration and focus in the fast lane. Inspired by the raw energy of motorsport, this red oversized motorsport t-shirt blends adrenaline with streetwear, crafted for individuals in India who see driving not just as movement — but as therapy. Made from 240 GSM 100% cotton , it brings heavyweight comfort ",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "beige-polo",
    "name": "BEIGE POLO",
    "price": 999,
    "compareAt": null,
    "category": "polos",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/05BE45BB-450C-4AA7-8486-936D3C8A348E.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/5719C87F-8B91-4442-B7A2-59FBCF5EB683.jpg"
    ],
    "description": "Classic comfort. Timeless style. The INVI Beige Maroon Polo is designed for those who appreciate effortless versatility with a touch of sophistication. Crafted from 100% premium cotton, this polo offers breathable comfort and durability wrapped in a clean, regular fit. Featuring a regular collar and a rich beige maroon color, it’s the perfect balance of casual and refined — ideal for men in India ",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "coffee-brown-polo",
    "name": "COFFEE BROWN POLO",
    "price": 999,
    "compareAt": null,
    "category": "polos",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/58FE974E-9DBE-4F30-B5E8-AD12508D4C14.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/D86F7ED0-0B92-4824-B3DC-6A3BA886B517.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/D0C8BF17-DC9B-43A8-8B32-E8910893DAD1.jpg"
    ],
    "description": "Timeless warmth. Everyday comfort. The INVI Brown Polo is crafted from 100% pure cotton, offering breathable softness and durability for your daily wear. Designed with a classic regular collar and a comfortable regular fit, this polo brings effortless style to men in India who appreciate subtle sophistication. The rich brown color adds depth and versatility, making it an ideal pick for both casual",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "blue-stripped-polo",
    "name": "BLUE STRIPPED POLO",
    "price": 999,
    "compareAt": null,
    "category": "polos",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/06A0F12C-26D5-44BE-BD12-9A8CCE0FC906.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/EB90D5E2-045D-4316-9F9E-56945092925A.jpg"
    ],
    "description": "Fresh style. Lasting comfort. The INVI Blue Polo brings together timeless design and breathable comfort. Made from 100% pure cotton, this polo features a classic regular collar and a versatile regular fit, crafted for men in India who value effortless style that works all day long. The vibrant blue color adds a pop of energy, perfect for casual outings or smart-casual occasions. Why You’ll Love It",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "black-stripe-shirt",
    "name": "BLACK STRIPED SHIRT",
    "price": 1299,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_175133.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1110.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1111.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1109.jpg"
    ],
    "description": "Retro roots. Modern rhythm. The INVI Black Striped Shirt brings boldness to basics — a statement piece where streetwear meets retro fashion . Designed with a standout big collar , this shirt blends vintage influence with clean, modern lines. Whether you're dressing for a casual day or turning heads at night, this shirt speaks for itself. Made from a comfortable cotton blend , it offers durability ",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "coffee-brown-solid-shirt",
    "name": "COFFEE BROWN SOLID SHIRT",
    "price": 1299,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1106.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1107.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1108.jpg"
    ],
    "description": "Subtle sophistication. Bold statement. The INVI Coffee Brown Shirt is for those who believe minimalism doesn’t mean blending in. Featuring a striking big collar and crafted from a premium cotton blend, this shirt offers refined style with a confident edge. Its rich coffee brown hue brings warmth and depth, making it a versatile piece for anyone seeking understated elegance with a modern twist. Des",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "white-shirt",
    "name": "NATURAL WHITE SHIRT",
    "price": 999,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1112.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1113.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-1114.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_175546.jpg"
    ],
    "description": "Minimalism with impact. Timeless with attitude. The INVI White Shirt takes a classic staple and elevates it with a bold, oversized collar — a subtle twist that turns simplicity into statement. Crafted for versatile individuals who value premium quality and effortless style, this shirt blends modern design with timeless appeal. Made from a soft, breathable cotton blend , it offers all-day comfort i",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "blue-striped-shirt",
    "name": "BLUE STRIPED SHIRT",
    "price": 1299,
    "compareAt": null,
    "category": "shirts",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_175752.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_175710.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_175823.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/PSX_20250730_175626.jpg"
    ],
    "description": "Retro vibes. Modern edge. The INVI Striped Blue Shirt is where classic meets contemporary. With bold blue stripes and a standout big collar, this shirt is designed for those who aren’t afraid to be seen and remembered. Perfect for men in India who appreciate the charm of vintage style fused with today’s streetwear attitude. Crafted from a soft and durable cotton blend, its regular fit offers comfo",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "plain-5",
    "name": "CORE WHITE TEE",
    "price": 599,
    "compareAt": 999,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/rn-image_picker_lib_temp_5e5b5e04-0213-4eef-bf65-158dd548bbfc.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/rn-image_picker_lib_temp_e56aad9e-5942-4970-9c50-69b8818e20e9.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/rn-image_picker_lib_temp_a7fd5f40-7e65-497f-9e82-1ff16bf146b4.jpg"
    ],
    "description": "Simplicity that speaks volumes. The INVI Core White Tee is built for those who appreciate quiet confidence and timeless versatility. Made from 240 GSM 100% premium cotton, it brings a soft yet structured feel — ideal for every setting from casual days to urban evenings. With its baggy unisex fit, this tee defines effortless comfort and clean sophistication. WHY YOU'LL LOVE IT • Heavyweight 240 GSM",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "plain-4",
    "name": "CORE BLACK TEE",
    "price": 599,
    "compareAt": 999,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/B48BF1AD-D858-42BE-9A8B-098CF235D18A.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/29C069E3-F86A-4FAA-89FA-9CC98C2EB166.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/8A2C2AD6-CDE4-46C0-A175-42B12B424E09.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/018E1BA2-DABD-46B2-A81C-5C6C3B732A67.jpg"
    ],
    "description": "Classic. Confident. Effortless. The INVI Core Black Tee redefines everyday essentials with elevated simplicity. Crafted from 240 GSM 100% cotton, it offers a perfect balance of structure and softness. The oversized fit complements every silhouette, while the deep black tone brings timeless streetwear appeal. WHY YOU'LL LOVE IT • Heavyweight 240 GSM 100% cotton for durability and comfort • Oversize",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "plain-3",
    "name": "CORE BROWN TEE",
    "price": 599,
    "compareAt": 999,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/1F8D8F85-2F12-4650-A1F3-C2E148BF4315.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/E742CCDD-A9CB-4668-96D9-FB56A563B0CB.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/FEAA341B-D2C7-4DDA-A6B8-A041747BA483.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/2EBD904C-472D-4A73-BEFD-3792E31B07ED.jpg"
    ],
    "description": "Grounded. Modern. Effortlessly stylish. The INVI Core Brown Tee blends earthy tones with modern streetwear sensibility. Made from 240 GSM 100% cotton, it offers a rich, structured feel while maintaining all-day comfort. Its oversized unisex fit and warm brown hue make it the perfect everyday essential for versatile styling. WHY YOU'LL LOVE IT • 240 GSM heavyweight 100% cotton for premium texture •",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "plain-2",
    "name": "CORE GREEN TEE",
    "price": 599,
    "compareAt": 999,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/09B9F92C-233D-4B66-A4C5-E022690D2DDB.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/02B1C9EF-0DE7-43F0-B0C6-AB5E6B099C94.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/AA9C0482-524A-488B-876B-9BD3C2A2369B.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/6DD447C9-96DD-48B4-8276-0C2BF039D44E.jpg"
    ],
    "description": "Fresh energy. Everyday confidence. The INVI Core Green Tee adds calm strength and modern freshness to your wardrobe. Made from 240 GSM 100% cotton, it brings a premium, heavyweight feel that stays breathable and soft all day. The oversized fit and refreshing green tone make it a go-to for relaxed yet confident dressing. WHY YOU'LL LOVE IT • Heavyweight 240 GSM 100% cotton for lasting comfort • Ove",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "plain-1",
    "name": "CORE RED TEE",
    "price": 599,
    "compareAt": 999,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/CFB85CB2-A177-4B59-8A36-669FA379B58C.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/751C8776-6B3D-45B1-8063-1084FA243640.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/2FED1F78-BE8C-43EB-AED8-E971467D96E7.jpg"
    ],
    "description": "Bold presence. Clean energy. The INVI Core Red Tee brings bold color and refined comfort together. Crafted from 240 GSM 100% cotton, this tee delivers a smooth, heavyweight feel that’s designed to stand out while staying minimal. With its baggy unisex fit, it’s made for those who wear confidence with ease. WHY YOU'LL LOVE IT • 240 GSM premium cotton for structure and softness • Oversized, unisex s",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "black-logo-at-chest-regular-fit-polo-tshirt",
    "name": "TIMELESS REGULAR FIT POLO",
    "price": 899,
    "compareAt": null,
    "category": "polos",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/82491581-EA9F-4EDE-9CA2-BCC29BA5B22E.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/3A1D0F56-1A05-476F-B55A-382A09995A1E.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/B52D8A06-6609-4E3D-8A98-799401DA501B.png"
    ],
    "description": "Simplicity in strength. The INVI Timeless Polo in black blends understated class with everyday wearability. Made from 100% cotton, it offers the right balance of weight, softness, and structure. With the signature INVI crest embroidery, this piece speaks elegance through subtle detail. WHY YOU'LL LOVE IT • 100% cotton for long-lasting comfort • Regular fit offering sharp silhouette • Detailed embr",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "white-logo-at-chest-regular-fit-polo-tshirt",
    "name": "TIMELESS REGULAR FIT POLO",
    "price": 899,
    "compareAt": null,
    "category": "polos",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6532.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6533.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6531.png"
    ],
    "description": "Classic. Confident. Timeless. The INVI Timeless Polo in white redefines everyday elegance. Crafted from 100% cotton , it combines a structured feel with breathable softness. The embroidered INVI crest on the chest adds a refined touch to a wardrobe essential built for comfort and sophistication. WHY YOU'LL LOVE IT • 100% cotton for a smooth, premium texture • Regular fit for a clean and structured",
    "bestSeller": true,
    "oneOfOne": false
  },
  {
    "id": "polo-3",
    "name": "MONOGRAM CRAFTED REGULAR FIT POLO",
    "price": 899,
    "compareAt": null,
    "category": "polos",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/67806269-A820-425A-BE98-2ADC5E8BCD80.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/C7CE6824-7720-40B3-8F34-284E0B640D77.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/FDE473A7-CFCF-4904-86B9-0A280FEF0D91.png"
    ],
    "description": "Minimalism with depth. The INVI Monogram Polo in black is designed for those who appreciate sophistication in simplicity. Made from 100% cotton, it delivers a soft yet substantial feel. The finely stitched monogram detail adds an element of quiet refinement to this everyday classic. WHY YOU'LL LOVE IT • 100% cotton for comfort and structure • Regular fit with a polished shape • Signature INVI mono",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "white-2",
    "name": "AESTHETIC SUPIMA TEE",
    "price": 799,
    "compareAt": 1399,
    "category": "graphic-tees",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6479.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6481.png"
    ],
    "description": "Art in simplicity. The INVI Aesthetic Tee captures calm design and quiet expression. Made from 100% Supima Cotton, it combines softness and structure with artistic minimalism. The screen-crafted mountain line art celebrates balance, peace, and perspective — just like its wearer. WHY YOU'LL LOVE IT • 100% Supima Cotton — luxurious, breathable, long-lasting • True-to-size unisex fit for natural drap",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "white-supima",
    "name": "INVI WHITE SUPIMA TEE",
    "price": 799,
    "compareAt": 1399,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6480.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6481.png"
    ],
    "description": "Minimal design. Maximum comfort. The INVI White Tee redefines essentials with a luxurious touch. Made from 100% Supima Cotton , this tee combines softness, structure, and breathability. Its true-to-size fit ensures a clean, tailored silhouette — perfect for any mood or occasion. WHY YOU'LL LOVE IT • Premium Supima Cotton for rich texture and softness • Lightweight yet durable for all-day comfort •",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "bold-roar",
    "name": "TIGER TEE",
    "price": 499,
    "compareAt": 1099,
    "category": "graphic-tees",
    "sizes": [
      "S"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/A9539515-BB95-4DEE-8DCE-15BCE6E6CB72.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/AFC4D19F-0A71-4CCF-B0D1-1DD02F40B948.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/13B5FC2C-6F02-4821-B379-B01DF11F296E.png"
    ],
    "description": "Power in silence. Presence in motion. The INVI Tiger Tee symbolizes strength, focus, and fearlessness. Made from 240 GSM 100% cotton , it delivers a solid, heavyweight feel. Featuring a detailed tiger artwork crafted with Stitch and FilmFusion print, this piece fuses rugged energy with artistic precision. WHY YOU'LL LOVE IT • 240 GSM thick premium cotton with structured finish • Baggy unisex fit f",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "polo-2",
    "name": "MONOGRAM CRAFTED REGULAR FIT POLO",
    "price": 899,
    "compareAt": null,
    "category": "polos",
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6521.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/C19E30E6-5461-412E-9BE3-4720B7121906.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/056228CF-8488-4682-859E-88A1CC49639A.png"
    ],
    "description": "Subtle detail. Strong identity. The INVI Monogram Polo in white brings together modern design and timeless craftsmanship. Made with 100% cotton, it provides a premium touch and firm structure. The finely stitched INVI monogram on the chest adds a quiet luxury appeal, making it a refined essential for any wardrobe. WHY YOU'LL LOVE IT • 100% premium cotton — breathable, strong, and comfortable • Reg",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "brunet-sphere",
    "name": "Always be More TEE",
    "price": 599,
    "compareAt": 1099,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/94EF6F90-7042-4275-A9A7-1AC9EA79AA63.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/8E8F0F65-AE98-4E73-86E3-B7B06945C198.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/E1B51BAC-9D93-4A37-AF5E-ECD633B511AA.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/D9DE6481-984B-4F0F-B41C-FE5E00C857A3.jpg"
    ],
    "description": "Evolve. Express. Elevate. The INVI Always Be More Tee is built around the brand’s core mantra — to constantly push beyond limits. Crafted from 240 GSM 100% cotton , it offers a smooth, structured feel with the signature ‘Always Be More’ vinyl print in bold blue. A statement for those who live to grow. WHY YOU'LL LOVE IT • 240 GSM heavyweight cotton with premium softness • Baggy unisex fit with rel",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "black-versatile-oversized-t-shirt",
    "name": "VERSATILE TEE",
    "price": 699,
    "compareAt": 1099,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/D7B8AE61-9048-4838-AFB6-D95561B5DA57.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/97562CF6-8FCF-4B36-9212-D7EFD4298ABC.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/1EB30615-C095-46F2-9D68-F8A017D1C424.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/82460845-2660-47DD-9BE6-FA319A0043E8.jpg"
    ],
    "description": "Identity. Strength. Style. The INVI Versatile Tee embodies the brand’s core philosophy — being everything you choose to be. Crafted from 240 GSM 100% cotton , it delivers a perfect balance of structure, comfort, and attitude. The bold puff-printed back design adds depth, dimension, and power to your streetwear statement. WHY YOU'LL LOVE IT • 240 GSM premium cotton with a solid, structured feel • O",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "ambitious-edition",
    "name": "AMBITIOUS TEE",
    "price": 599,
    "compareAt": 1099,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/38F35BFF-C05D-4866-A247-E2D777EB2B21.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/388CAB5B-F3F4-4E74-99BB-B9966CD803BC.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/DCB71D92-3EEE-45FE-9D2C-D7B457D98D4B.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/19E75CD0-22F2-4568-A3A7-89EDD687D45C.jpg"
    ],
    "description": "Ambition stitched into style. The INVI Ambitious Tee is a bold expression of drive and identity. Designed in 240 GSM 100% cotton for superior comfort and structure, this tee celebrates the Indian Versatile Individual spirit with minimal yet impactful typography on the back. A symbol of passion and self-belief. WHY YOU'LL LOVE IT • 240 GSM heavyweight cotton for a premium texture • Baggy unisex fit",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "white-haveli",
    "name": "HAVELI TEE",
    "price": 699,
    "compareAt": 1099,
    "category": "graphic-tees",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/20CC0BDD-1438-4053-A4B8-0C4B42F1AA7A.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/8FB402FB-60D7-439A-AD0A-D969CB0C1616.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/rn-image_picker_lib_temp_baff5d36-e52d-4fe9-a41f-74db1e844664.jpg",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/CECCE8AA-87A5-47A0-8A3D-B191310765E0.jpg"
    ],
    "description": "Tradition meets modern comfort. The INVI Haveli Tee celebrates Indian heritage through a minimal yet powerful design. Made from premium 240 GSM 100% cotton , it brings structure and softness in balance. With a detailed FilmFusion print of an Indian haveli, this tee captures nostalgia, art, and craftsmanship in every thread. WHY YOU'LL LOVE IT • 240 GSM heavyweight 100% cotton for a rich, premium f",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "black-sunflower",
    "name": "SUPIMA SUNFLOWER TEE",
    "price": 799,
    "compareAt": 1399,
    "category": "graphic-tees",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6482.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6485.png"
    ],
    "description": "Subtle art. Supreme comfort. The INVI Sunflower Tee blends artistry with luxury. Crafted from 100% Supima Cotton , it’s soft, breathable, and made to last. The vibrant yellow INVI monogram is screen-crafted on rich black fabric — a bold symbol of optimism and energy. WHY YOU'LL LOVE IT • Supima Cotton for smooth, premium feel • Black base with screen-crafted yellow logo • True-to-size unisex fit f",
    "bestSeller": false,
    "oneOfOne": false
  },
  {
    "id": "basic-supima-black-t-shirt",
    "name": "INVI BLACK SUPIMA TEE",
    "price": 799,
    "compareAt": 1399,
    "category": "graphic-tees",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-2448.png",
      "https://cdn.shopify.com/s/files/1/0600/9425/1070/files/IMG-6485.png"
    ],
    "description": "Effortless. Refined. Timeless. The INVI Black Tee brings everyday sophistication in its purest form. Crafted from 100% Supima Cotton , it offers exceptional softness, long-lasting quality, and a naturally lustrous finish. Designed with a true-to-size unisex fit, this tee blends luxury comfort with streetwear minimalism. WHY YOU'LL LOVE IT • 100% Supima Cotton — soft, breathable, and ultra-smooth •",
    "bestSeller": true,
    "oneOfOne": false
  }
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
export const byCategory = (slug: string) => products.filter((p) => p.category === slug);
export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;
