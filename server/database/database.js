const products = [
  {
    name: 'Happilo Premium Seedless Green Raisins',
    category: 'growcery',
    link: 'https://www.flipkart.com/happilo-premium-seedless-green-raisins/p/itmf4n9pzkhskxfv',
    current_price: 123,
    original_price: 165,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kwv0djk0/nut-dry-fruit/w/f/8/-original-imag9fust3uvgpmv.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/happilo-premium-seedless-green-raisins/p/itmf4n9pzkhskxfv',
  },
  {
    name: 'Maggi Pazzta Cheese Macaroni Pack Of 2 (70Gm * 2) Pasta',
    category: 'growcery',
    link: 'https://www.flipkart.com/maggi-pazzta-cheese-macaroni-pack-2-70gm-2-pasta/p/itm849465a8a3855',
    current_price: 122,
    original_price: 179,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/pasta/e/n/i/140-pazzta-cheese-macaroni-pack-of-2-70gm-2-instant-2-maggi-original-imagh96ztvwahrgd.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/maggi-pazzta-cheese-macaroni-pack-2-70gm-2-pasta/p/itm849465a8a3855',
  },
  {
    name: 'Maggi Coconut , 1 Kg Coconut Milk Powder',
    category: 'growcery',
    link: 'https://www.flipkart.com/maggi-coconut-1-kg-milk-powder/p/itm36d14d353b633',
    current_price: 819,
    original_price: 999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/milk-powder/p/t/y/1-coconut-milk-powder-1-kg-1-maggi-original-imaghjd8dyxhsgqy.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/maggi-coconut-1-kg-milk-powder/p/itm36d14d353b633',
  },
  {
    name: 'Farmley Popular California Almonds',
    category: 'growcery',
    link: 'https://www.flipkart.com/farmley-popular-california-almonds/p/itmad17a0f8c1581',
    current_price: 229,
    original_price: 449,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/nut-dry-fruit/v/u/t/250-popular-california-1-pouch-farmley-original-imagh97wgkcq257h.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/farmley-popular-california-almonds/p/itmad17a0f8c1581',
  },

  {
    name: 'Farmley Premium W320 Cashews',
    category: 'growcery',
    link: 'https://www.flipkart.com/farmley-premium-w320-cashews/p/itmcd617f7e4a93e',
    current_price: 240,
    original_price: 430,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/nut-dry-fruit/g/z/7/-original-imagkf42rfx4sffh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/farmley-premium-w320-cashews/p/itmcd617f7e4a93e',
  },

  {
    name: 'Clean &amp; Clear Facewash Face Wash',
    category: 'growcery',
    link: 'https://www.flipkart.com/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp',
    current_price: 239,
    original_price: 599,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l09w8sw0/face-wash/s/k/o/-original-imagc3y28zjhj8ed.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp',
  },
  {
    name: 'HORLICKS Classic Malt',
    category: 'growcery',
    link: 'https://www.flipkart.com/horlicks-classic-malt/p/itm62a45129654b4',
    current_price: 265,
    original_price: 265,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kgwld3k0/milk-drink-mix/f/u/a/500-classic-malt-plastic-bottle-horlicks-original-imafxf7xyubggpdn.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/horlicks-classic-malt/p/itm62a45129654b4',
  },
  {
    name: 'Dabur Red Paste Toothpaste',
    category: 'growcery',
    link: 'https://www.flipkart.com/dabur-red-paste-toothpaste/p/itmeub3rdymtsffw',
    current_price: 325,
    original_price: 486,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/toothpaste/0/y/3/-original-imaghauvhvmwf5qg.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/dabur-red-paste-toothpaste/p/itmeub3rdymtsffw',
  },

  {
    name: 'WONDERLAND California Almonds',
    category: 'growcery',
    link: 'https://www.flipkart.com/wonderland-california-almonds/p/itmf2gabghfpdtcy',
    current_price: 669,
    original_price: 1200,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l29c9e80/nut-dry-fruit/5/b/1/500-california-500g-pouch-1-pouch-wonderland-original-imagdmyhgxwxjzga.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/wonderland-california-almonds/p/itmf2gabghfpdtcy',
  },
  {
    name: 'Happilo Premium seedless green Value Pack Raisins',
    category: 'growcery',
    link: 'https://www.flipkart.com/happilo-premium-seedless-green-value-pack-raisins/p/itm3bbab25080afe',
    current_price: 419,
    original_price: 599,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kuczmvk0/nut-dry-fruit/w/a/c/500-premium-seedless-green-raisins-non-gmo-no-artificial-original-imag7hw2urg4xz2z.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/happilo-premium-seedless-green-value-pack-raisins/p/itm3bbab25080afe',
  },
  {
    name: 'Naturoz Popular California Almonds',
    category: 'growcery',
    link: 'https://www.flipkart.com/naturoz-popular-california-almonds/p/itm20bbe23cdb649',
    current_price: 179,
    original_price: 290,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/nut-dry-fruit/t/8/7/1-popular-california-1-pouch-naturoz-original-imaghwdugsmyyvys.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/naturoz-popular-california-almonds/p/itm20bbe23cdb649',
  },

  {
    name: 'FIGARO Olive Oil Tin',
    category: 'growcery',
    link: 'https://www.flipkart.com/figaro-olive-oil-tin/p/itm9e931e415dd06',
    current_price: 275,
    original_price: 299,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/knni7ww0/edible-oil/x/a/d/na-tin-olive-oil-figaro-original-imag2ad9hahgehv3.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/figaro-olive-oil-tin/p/itm9e931e415dd06',
  },

  {
    name: 'Parachute Coconut Hair Oil',
    category: 'growcery',
    link: 'https://www.flipkart.com/parachute-coconut-hair-oil/p/itmf3jyqfqpzayzj',
    current_price: 312,
    original_price: 390,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/khnqqa80/hair-oil/z/y/g/600-coconut-parachute-original-imafxmbuaaxgq46z.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/parachute-coconut-hair-oil/p/itmf3jyqfqpzayzj',
  },

  {
    name: 'FIAMA Gel bar Celebration Pack',
    category: 'growcery',
    link: 'https://www.flipkart.com/fiama-gel-bar-celebration-pack/p/itmf3cqqxnvnpeyx',
    current_price: 252,
    original_price: 360,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kh3qkcw0/soap/d/b/d/5-125-gel-bar-celebration-pack-fiama-original-imafx6qfdrqq6xpw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/fiama-gel-bar-celebration-pack/p/itmf3cqqxnvnpeyx',
  },
  {
    name: 'HORLICKS Health &amp; Nutrition Drink',
    category: 'growcery',
    link: 'https://www.flipkart.com/horlicks-health-nutrition-drink/p/itm66b88687fa42b',
    current_price: 391,
    original_price: 399,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/milk-drink-mix/c/y/c/900-health-nutrition-drink-pouch-1-horlicks-original-imagg43nfzbngmqf.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/horlicks-health-nutrition-drink/p/itm66b88687fa42b',
  },
  {
    name: "L'Oréal Paris 6 Oil Nourish Shampoo, 1 ltr",
    category: 'growcery',
    link: 'https://www.flipkart.com/l-oral-paris-6-oil-nourish-shampoo-1-ltr/p/itm09e2b8a71e5ce',
    current_price: 431,
    original_price: 959,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/shampoo/g/v/g/-original-imaghdy3rfhbpnjq.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/l-oral-paris-6-oil-nourish-shampoo-1-ltr/p/itm09e2b8a71e5ce',
  },
  {
    name: 'Bumtum Baby Pull-Up Diaper Pants - M',
    category: 'growcery',
    link: 'https://www.flipkart.com/bumtum-baby-pull-up-diaper-pants-m/p/itm49216409b7f92',
    current_price: 549,
    original_price: 999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kit6hzk0-0/diaper/n/w/g/m-baby-pull-up-diaper-pants-bumtum-original-imafyggfferunufv.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/bumtum-baby-pull-up-diaper-pants-m/p/itm49216409b7f92',
  },
  {
    name: 'Tata Agni Strong Leaf Black Tea Pouch',
    category: 'growcery',
    link: 'https://www.flipkart.com/tata-agni-strong-leaf-black-tea-pouch/p/itm3b538f9c1a1f6',
    current_price: 270,
    original_price: 300,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l1whaq80/tea/i/w/t/1-5-extra-strong-1-pouch-black-tea-tata-leaves-granules-original-imagdd3hxcrxfn2p.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/tata-agni-strong-leaf-black-tea-pouch/p/itm3b538f9c1a1f6',
  },
  {
    name: 'Nutraj Recipe Ready Kernels Walnuts',
    category: 'growcery',
    link: 'https://www.flipkart.com/nutraj-recipe-ready-kernels-walnuts/p/itm18d8c8a96904a',
    current_price: 295,
    original_price: 449,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/k02qnww0/nut-dry-fruit/j/s/q/2-half-quarter-walnut-250-g-8-2-kg-recipe-ready-box-nutraj-original-imafjyhjat2ymse9.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/nutraj-recipe-ready-kernels-walnuts/p/itm18d8c8a96904a',
  },

  {
    name: 'Naturoz Popular California Almonds',
    category: 'growcery',
    link: 'https://www.flipkart.com/naturoz-popular-california-almonds/p/itmf06f017668ab6',
    current_price: 429,
    original_price: 575,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/nut-dry-fruit/t/8/7/1-popular-california-1-pouch-naturoz-original-imaghwdugsmyyvys.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/naturoz-popular-california-almonds/p/itmf06f017668ab6',
  },

  {
    name: 'Nutraj Gold Kernels (Akhrot Giri) Walnuts',
    category: 'growcery',
    link: 'https://www.flipkart.com/nutraj-gold-kernels-akhrot-giri-walnuts/p/itm278b078a7f360',
    current_price: 271,
    original_price: 435,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kklhbbk0/nut-dry-fruit/i/p/u/gold-walnut-kernels-akhrot-giri-box-nutraj-original-imafzwky3g2baprf.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/nutraj-gold-kernels-akhrot-giri-walnuts/p/itm278b078a7f360',
  },

  {
    name: 'BIOTIQUE Bio Bhringraj Hair Oil',
    category: 'growcery',
    link: 'https://www.flipkart.com/biotique-bio-bhringraj-hair-oil/p/itmf3jypmgwecya6',
    current_price: 159,
    original_price: 159,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/hair-oil/r/s/t/-original-imaghrxes9mw6xyq.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/biotique-bio-bhringraj-hair-oil/p/itmf3jypmgwecya6',
  },

  {
    name: 'FIGARO Olive Oil Tin',
    category: 'growcery',
    link: 'https://www.flipkart.com/figaro-olive-oil-tin/p/itm9e931e415dd06',
    current_price: 275,
    original_price: 299,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/knni7ww0/edible-oil/x/a/d/na-tin-olive-oil-figaro-original-imag2ad9hahgehv3.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/figaro-olive-oil-tin/p/itm9e931e415dd06',
  },

  {
    name: 'Del Monte Extra Virgin Olive Oil Plastic Bottle',
    category: 'growcery',
    link: 'https://www.flipkart.com/del-monte-extra-virgin-olive-oil-plastic-bottle/p/itmce84ab28a697e',
    current_price: 299,
    original_price: 650,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kndi4y80/edible-oil/4/4/e/extra-virgin-plastic-bottle-olive-oil-del-monte-original-imag22fs8jqgsbyy.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/del-monte-extra-virgin-olive-oil-plastic-bottle/p/itmce84ab28a697e',
  },
  {
    name: 'BORGES Extra Virgin Olive Oil Plastic Bottle',
    category: 'growcery',
    link: 'https://www.flipkart.com/borges-extra-virgin-olive-oil-plastic-bottle/p/itm149d1741a97f8',
    current_price: 740,
    original_price: 1400,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l5h2xe80/edible-oil/y/p/0/1-extra-virgin-plastic-bottle-1-olive-oil-borges-original-imagg576x3najhtv.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/borges-extra-virgin-olive-oil-plastic-bottle/p/itm149d1741a97f8',
  },

  {
    name: 'Parachute Coconut Hair Oil',
    category: 'growcery',
    link: 'https://www.flipkart.com/parachute-coconut-hair-oil/p/itmf3jyqfqpzayzj',
    current_price: 249,
    original_price: 415,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/khnqqa80/edible-oil/a/w/f/1-na-can-coconut-oil-parachute-original-imafxmbtddyfctfr.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/parachute-coconut-hair-oil/p/itmf3jyqfqpzayzj',
  },
  {
    name: 'Parachute Pure Coconut Hair Oil',
    category: 'growcery',
    link: 'https://www.flipkart.com/parachute-pure-coconut-hair-oil/p/itmf95c2qhwmjyhw',
    current_price: 193,
    original_price: 251,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l0bbonk0/hair-oil/m/i/6/-original-imagc5ywfs9ux39g.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/parachute-pure-coconut-hair-oil/p/itmf95c2qhwmjyhw',
  },

  {
    name: 'HIMALAYA Baby Hair Oil 200 ml Hair Oil',
    category: 'growcery',
    link: 'https://www.flipkart.com/himalaya-baby-hair-oil-200-ml/p/itm352636f5a149e',
    current_price: 154,
    original_price: 230,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kcm9t3k0/hair-oil/z/q/5/100-baby-hair-oil-100-ml-himalaya-original-imaftpmbfffg2ywh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/himalaya-baby-hair-oil-200-ml/p/itm352636f5a149e',
  },
  {
    name: 'HIMALAYA Baby Hair Oil 100 ml Hair Oil',
    category: 'growcery',
    link: 'https://www.flipkart.com/himalaya-baby-hair-oil-100-ml/p/itmc043485153bd5',
    current_price: 100,
    original_price: 130,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kcm9t3k0/hair-oil/z/q/5/100-baby-hair-oil-100-ml-himalaya-original-imaftpmbfffg2ywh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/himalaya-baby-hair-oil-100-ml/p/itmc043485153bd5',
  },
  {
    name: 'Clean &amp; Clear Face Wash',
    category: 'growcery',
    link: 'https://www.flipkart.com/clean-clear-face-wash/p/itm799e7e96c238b',
    current_price: 270,
    original_price: 540,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kjkbv680-0/face-wash/l/r/7/450-face-wash-clean-clear-original-imafz3hz4fgwhfnf.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/clean-clear-face-wash/p/itm799e7e96c238b',
  },
  {
    name: 'moochtec Ocean  Men All Skin Types Face Wash',
    category: 'growcery',
    link: 'https://www.flipkart.com/moochtec-ocean-men-all-skin-types-face-wash/p/itmbd1416a6b4fcd',
    current_price: 203,
    original_price: 499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/face-wash/x/w/m/100-ocean-face-wash-moochtec-original-imagj2gpfhtgguds.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/moochtec-ocean-men-all-skin-types-face-wash/p/itmbd1416a6b4fcd',
  },

  {
    name: 'FIGARO Extra Virgin Olive Oil Plastic Bottle',
    category: 'growcery',
    link: 'https://www.flipkart.com/figaro-extra-virgin-olive-oil-plastic-bottle/p/itma228ba935d7ea',
    current_price: 249,
    original_price: 399,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/knni7ww0/edible-oil/w/v/5/extra-virgin-plastic-bottle-olive-oil-figaro-original-imag2ad88rmubsjf.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/figaro-extra-virgin-olive-oil-plastic-bottle/p/itma228ba935d7ea',
  },
  {
    name: 'Dabur Cold Pressed Mustard Oil Plastic Bottle',
    category: 'growcery',
    link: 'https://www.flipkart.com/dabur-cold-pressed-mustard-oil-plastic-bottle/p/itm6ec7b75e2e4ac',
    current_price: 248,
    original_price: 310,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kk4c13k0/edible-oil/6/j/v/cold-pressed-plastic-bottle-mustard-oil-dabur-original-imafzjfcnrmxxs75.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/dabur-cold-pressed-mustard-oil-plastic-bottle/p/itm6ec7b75e2e4ac',
  },
  {
    name: 'MUAC Strong and Healthy Hair Growth Oil 400ML Hair Oil',
    category: 'growcery',
    link: 'https://www.flipkart.com/muac-strong-healthy-hair-growth-oil-400ml/p/itm198352c41531a',
    current_price: 269,
    original_price: 996,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l3uhvgw0/shopsy-hair-oil/6/k/4/400-strong-and-healthy-hair-growth-oil-400ml-muac-original-imagevmupbz9qdyq.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/muac-strong-healthy-hair-growth-oil-400ml/p/itm198352c41531a',
  },
  {
    name: "GKD's Premium Pure Coconut Oil Pouch",
    category: 'growcery',
    link: 'https://www.flipkart.com/gkd-s-premium-pure-coconut-oil-pouch/p/itm9c1065fe15d7d',
    current_price: 266,
    original_price: 330,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l3uhvgw0/edible-oil/v/j/z/1-pure-pouch-1-coconut-oil-gkd-s-premium-original-imagevyg5kf3ke6z.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/gkd-s-premium-pure-coconut-oil-pouch/p/itm9c1065fe15d7d',
  },

  {
    name: 'Parachute Coconut Oil Can',
    category: 'growcery',
    link: 'https://www.flipkart.com/parachute-coconut-oil-can/p/itm39bf298b1a57a',
    current_price: 277,
    original_price: 370,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/khnqqa80/edible-oil/a/w/f/1-na-can-coconut-oil-parachute-original-imafxmbtddyfctfr.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/parachute-coconut-oil-can/p/itm39bf298b1a57a',
  },

  {
    name: "JOHNSON'S Baby Avacado  Hair Oil",
    category: 'growcery',
    link: 'https://www.flipkart.com/johnson-s-baby-avacado-hair-oil/p/itmf3jypykaa6b3w',
    current_price: 148,
    original_price: 160,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/jah3ngw0/hair-oil/5/f/t/200-baby-avacado-hair-oil-johnson-s-original-imafyfz6n2cscsdh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/johnson-s-baby-avacado-hair-oil/p/itmf3jypykaa6b3w',
  },

  {
    name: "JOHNSON'S Baby Hair Oil",
    category: 'growcery',
    link: 'https://www.flipkart.com/johnson-s-baby-hair-oil/p/itmf3jyqvvs3wdhc',
    current_price: 288,
    original_price: 320,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/hair-oil/r/y/f/400-baby-johnson-s-original-imaghfv8jktbyqdb.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/johnson-s-baby-hair-oil/p/itmf3jyqvvs3wdhc',
  },
  {
    name: 'Clean &amp; Clear Facewash Face Wash',
    category: 'growcery',
    link: 'https://www.flipkart.com/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp',
    current_price: 239,
    original_price: 599,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l09w8sw0/face-wash/s/k/o/-original-imagc3y28zjhj8ed.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp',
  },

  {
    name: 'INDIA GATE Select Basmati Rice',
    category: 'growcery',
    link: 'https://www.flipkart.com/india-gate-select-basmati-rice/p/itmfecw7shqteznp',
    current_price: 772,
    original_price: 840,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/juwzf680/rice/g/m/h/5-select-white-bag-basmati-rice-india-gate-original-imaffx5yrugx2yaf.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/india-gate-select-basmati-rice/p/itmfecw7shqteznp',
  },
  {
    name: 'INDIA GATE Dubar Basmati Rice (Medium Grain, Polished)',
    category: 'growcery',
    link: 'https://www.flipkart.com/india-gate-dubar-basmati-rice-medium-grain-polished/p/itmex3vww3vjpgdk',
    current_price: 630,
    original_price: 700,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/klscivk0/rice/g/s/s/white-dubar-basmati-rice-pouch-india-gate-original-imagytzcnyz8px4y.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/india-gate-dubar-basmati-rice-medium-grain-polished/p/itmex3vww3vjpgdk',
  },
  {
    name: 'UNITY Super Basmati Rice (Long Grain, Parboiled)',
    category: 'growcery',
    link: 'https://www.flipkart.com/unity-super-basmati-rice-long-grain-parboiled/p/itm75bf4d46a3ce8',
    current_price: 800,
    original_price: 800,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kv9urgw0/rice/a/q/m/5-white-super-parboiled-basmati-rice-bag-unity-long-grain-original-imag87kd29gh3mzd.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/unity-super-basmati-rice-long-grain-parboiled/p/itm75bf4d46a3ce8',
  },
  {
    name: 'ELINA Rice (Long Grain)',
    category: 'growcery',
    link: 'https://www.flipkart.com/elina-rice-long-grain/p/itmf7gc4fan3gcju',
    current_price: 748,
    original_price: 780,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/jqe38280/rice/h/e/r/5-white-na-plain-rice-bag-elina-original-imafcezmq2t8hpw8.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/elina-rice-long-grain/p/itmf7gc4fan3gcju',
  },
  {
    name: 'Octavius Classic Basmati Rice (Long Grain, Steam)',
    category: 'growcery',
    link: 'https://www.flipkart.com/octavius-classic-basmati-rice-long-grain-steam/p/itma1c38d4886a32',
    current_price: 582,
    original_price: 999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kic17rk0-0/rice/4/l/l/white-classic-bag-basmati-rice-octavius-original-imafy58f84c5fgaw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/octavius-classic-basmati-rice-long-grain-steam/p/itma1c38d4886a32',
  },

  {
    name: 'BEMISAL Popular Basmati Rice (Broken Grain)',
    category: 'growcery',
    link: 'https://www.flipkart.com/bemisal-popular-basmati-rice-broken-grain/p/itmeuc2yhfbsjuzy',
    current_price: 380,
    original_price: 950,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kjn6qvk0/rice/c/h/r/5-white-popular-choice-basmati-rice-basmati-rice-pouch-bemisal-original-imafz6ym7hfjjvuu.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/bemisal-popular-basmati-rice-broken-grain/p/itmeuc2yhfbsjuzy',
  },

  {
    name: 'OMSOM Idli Rice Idli Rice (Medium Grain, Raw)',
    category: 'growcery',
    link: 'https://www.flipkart.com/omsom-idli-rice-medium-grain-raw/p/itmfc5env9ym8sng',
    current_price: 600,
    original_price: 625,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kqjtd3k0/rice/m/2/r/5-white-idli-rice-raw-idli-rice-bag-omsom-original-imag4jgj3784zxug.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/omsom-idli-rice-medium-grain-raw/p/itmfc5env9ym8sng',
  },

  {
    name: 'OMSOM Sona Masoori Steam Rice (Medium Grain, Raw)',
    category: 'growcery',
    link: 'https://www.flipkart.com/omsom-sona-masoori-steam-rice-medium-grain-raw/p/itmfcdwggh5rvv9k',
    current_price: 580,
    original_price: 595,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kqjtd3k0/rice/h/t/7/5-white-sona-masoori-raw-steam-rice-bag-omsom-original-imag4jg9qfacqyah.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/omsom-sona-masoori-steam-rice-medium-grain-raw/p/itmfcdwggh5rvv9k',
  },
  {
    name: 'Fortune Hamesha Basmati Rice (Long Grain, Polished)',
    category: 'growcery',
    link: 'https://www.flipkart.com/fortune-hamesha-basmati-rice-long-grain-polished/p/itme4b0be5ec584c',
    current_price: 800,
    original_price: 900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/rice/6/5/l/5-hamesha-white-polished-bag-basmati-rice-fortune-long-grain-original-imagjsfczrng7qjm.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/fortune-hamesha-basmati-rice-long-grain-polished/p/itme4b0be5ec584c',
  },

  {
    name: 'LAL QILLA Majestic Basmati Rice (Long Grain)',
    category: 'growcery',
    link: 'https://www.flipkart.com/lal-qilla-majestic-basmati-rice-long-grain/p/itmfeyughsygcudk',
    current_price: 700,
    original_price: 710,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kqjtd3k0/rice/b/l/o/5-white-majestic-na-basmati-rice-bag-lal-qilla-original-imag4jgzsddsehsg.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/lal-qilla-majestic-basmati-rice-long-grain/p/itmfeyughsygcudk',
  },

  {
    name: 'B&amp;B Organics Red Rice ( Premium ) Red Boiled Rice',
    category: 'growcery',
    link: 'https://www.flipkart.com/b-b-organics-red-rice-premium-boiled/p/itm7b203a4528d47',
    current_price: 262,
    original_price: 275,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/kdkkdjk0/rice/h/g/3/1-red-red-boiled-rice-pouch-b-b-organics-original-imafufpwdc89kwfk.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/b-b-organics-red-rice-premium-boiled/p/itm7b203a4528d47',
  },
  {
    name: 'AEROPLANE 1121 Steam Basmati Rice (Long Grain)',
    category: 'growcery',
    link: 'https://www.flipkart.com/aeroplane-1121-steam-basmati-rice-long-grain/p/itmd68b844a3a7f8',
    current_price: 648,
    original_price: 850,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/xif0q/rice/b/x/x/5-1121-steam-white-na-bag-basmati-rice-aeroplane-long-grain-original-imaggnyhx4c6w2aq.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/aeroplane-1121-steam-basmati-rice-long-grain/p/itmd68b844a3a7f8',
  },

  {
    name: 'JTGEnterprises Super Basmati Rice (Long Grain)',
    category: 'growcery',
    link: 'https://www.flipkart.com/jtgenterprises-super-basmati-rice-long-grain/p/itm78fd6f188646e',
    current_price: 1099,
    original_price: 1200,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/612/612/l2z26q80/rice/a/a/s/6-250-super-basmati-rice-5-kg-1-250-kg-white-raw-bag-basmati-original-image75a8zzwtbyr.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/jtgenterprises-super-basmati-rice-long-grain/p/itm78fd6f188646e',
  },
];
