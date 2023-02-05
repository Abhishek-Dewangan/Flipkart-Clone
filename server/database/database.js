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
  {
    name: 'APPLE iPhone 11 (White, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742',
    current_price: 45999,
    original_price: 48900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-11-white-128-gb/p/itme32df47ea6742',
  },
  {
    name: 'APPLE iPhone 14 (Starlight, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676',
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676',
  },
  {
    name: 'APPLE iPhone 14 (Midnight, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-midnight-128-gb/p/itm9e6293c322a84',
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-midnight-128-gb/p/itm9e6293c322a84',
  },
  {
    name: 'APPLE iPhone 14 (Purple, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-purple-128-gb/p/itm0b581eba85e08',
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-purple-128-gb/p/itm0b581eba85e08',
  },
  {
    name: 'SAMSUNG Galaxy F23 5G (Forest Green, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f23-5g-forest-green-128-gb/p/itm4001e68fda319',
    current_price: 16999,
    original_price: 23999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/o/p/z/-original-imagcg22pf79cgau.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-forest-green-128-gb/p/itm4001e68fda319',
  },
  {
    name: 'SAMSUNG Galaxy F23 5G (Aqua Blue, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itme54bc0c2292f4',
    current_price: 16999,
    original_price: 23999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/h/k/-original-imagcg22czc3ggvw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itme54bc0c2292f4',
  },
  {
    name: 'SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f13-waterfall-blue-64-gb/p/itm583ef432b2b0c',
    current_price: 11999,
    original_price: 14999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-waterfall-blue-64-gb/p/itm583ef432b2b0c',
  },
  {
    name: 'SAMSUNG Galaxy F23 5G (Copper Blush, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm59c8bf3255ef6',
    current_price: 16999,
    original_price: 23999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/c/v/-original-imagehzbaw2wugme.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm59c8bf3255ef6',
  },
  {
    name: 'realme C33 (Sandy Gold, 32 GB)',
    link: 'https://www.flipkart.com/realme-c33-sandy-gold-32-gb/p/itma112335dbe78a',
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-sandy-gold-32-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Night Sea, 32 GB)',
    link: 'https://www.flipkart.com/realme-c33-night-sea-32-gb/p/itma112335dbe78a',
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-night-sea-32-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Aqua Blue, 32 GB)',
    link: 'https://www.flipkart.com/realme-c33-aqua-blue-32-gb/p/itma112335dbe78a',
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-aqua-blue-32-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Night Sea, 64 GB)',
    link: 'https://www.flipkart.com/realme-c33-night-sea-64-gb/p/itma112335dbe78a',
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-night-sea-64-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Aqua Blue, 64 GB)',
    link: 'https://www.flipkart.com/realme-c33-aqua-blue-64-gb/p/itma112335dbe78a',
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-aqua-blue-64-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Sandy Gold, 64 GB)',
    link: 'https://www.flipkart.com/realme-c33-sandy-gold-64-gb/p/itma112335dbe78a',
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-sandy-gold-64-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C30 (Lake Blue, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059',
    current_price: 5999,
    original_price: 8499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'realme C30 (Denim Black, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-denim-black-32-gb/p/itmfcf69b2db5059',
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/f/6/a/-original-imagfggrbywzk8r6.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-denim-black-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'POCO M4 Pro 5G (Cool Blue, 128 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/poco-m4-pro-5g-cool-blue-128-gb/p/itm509e4403d0303',
    current_price: 15499,
    original_price: 19999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/j/d/g/-original-imagcafg6hbeeqwf.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/poco-m4-pro-5g-cool-blue-128-gb/p/itm509e4403d0303',
  },
  {
    name: 'Infinix HOT 20 Play (Aurora Green, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/infinix-hot-20-play-aurora-green-64-gb/p/itm1e6903eb0203e',
    current_price: 8199,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/s/b/e/-original-imagkgrxdzzjuguw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/infinix-hot-20-play-aurora-green-64-gb/p/itm1e6903eb0203e',
  },
  {
    name: 'Infinix HOT 20 Play (Fantasy Purple, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/infinix-hot-20-play-fantasy-purple-64-gb/p/itm1e6903eb0203e',
    current_price: 8199,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/p/r/-original-imagkgrxwg386pjk.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/infinix-hot-20-play-fantasy-purple-64-gb/p/itm1e6903eb0203e',
  },
  {
    name: 'Infinix HOT 20 Play (Racing Black, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/infinix-hot-20-play-racing-black-64-gb/p/itm1e6903eb0203e',
    current_price: 8199,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/p/f/u/-original-imagkgrxdsqpdznh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/infinix-hot-20-play-racing-black-64-gb/p/itm1e6903eb0203e',
  },
  {
    name: 'APPLE iPhone 14 (Starlight, 128 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676',
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676',
  },
  {
    name: 'realme C33 (Sandy Gold, 32 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c33-sandy-gold-32-gb/p/itma112335dbe78a',
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-sandy-gold-32-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Night Sea, 32 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c33-night-sea-32-gb/p/itma112335dbe78a',
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-night-sea-32-gb/p/itma112335dbe78a',
  },
  {
    name: 'MOTOROLA G62 5G (Midnight Gray, 128 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/motorola-g62-5g-midnight-gray-128-gb/p/itm37da299ffb2d0',
    current_price: 14999,
    original_price: 21999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/r/b/-original-imagh29eqd3zrvaf.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/motorola-g62-5g-midnight-gray-128-gb/p/itm37da299ffb2d0',
  },
  {
    name: 'Infinix HOT 20 Play (Luna Blue, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/infinix-hot-20-play-luna-blue-64-gb/p/itm1e6903eb0203e',
    current_price: 8199,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/o/e/-original-imagkgrxzahq3egj.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/infinix-hot-20-play-luna-blue-64-gb/p/itm1e6903eb0203e',
  },
  {
    name: 'SAMSUNG Galaxy S21 FE 5G (Graphite, 128 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/samsung-galaxy-s21-fe-5g-graphite-128-gb/p/itm7be0f72fff180',
    current_price: 39999,
    original_price: 74999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kzrbiq80/mobile/h/x/n/galaxy-s21-fe-5g-sm-g990ezaiinu-samsung-original-imagbpfzbrnueypq.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-s21-fe-5g-graphite-128-gb/p/itm7be0f72fff180',
  },
  {
    name: 'vivo T1 44W (Starry Sky, 128 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/vivo-t1-44w-starry-sky-128-gb/p/itm2a08ebbea3689',
    current_price: 14499,
    original_price: 19990,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/vivo-t1-44w-starry-sky-128-gb/p/itm2a08ebbea3689',
  },
  {
    name: 'vivo T1 44W (Midnight Galaxy, 128 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/vivo-t1-44w-midnight-galaxy-128-gb/p/itm2a08ebbea3689',
    current_price: 14499,
    original_price: 19990,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/x/b/y/-original-imagdznhnzmzfbwx.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/vivo-t1-44w-midnight-galaxy-128-gb/p/itm2a08ebbea3689',
  },
  {
    name: 'MOTOROLA e40 (Carbon Gray, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/motorola-e40-carbon-gray-64-gb/p/itm0ca635007c9e2',
    current_price: 8299,
    original_price: 10999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/motorola-e40-carbon-gray-64-gb/p/itm0ca635007c9e2',
  },
  {
    name: 'POCO C31 (Shadow Gray, 32 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/poco-c31-shadow-gray-32-gb/p/itmffefb8bb085e3',
    current_price: 6499,
    original_price: 10999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/b/o/m/c31-mzb0a0min-poco-original-imag7bzqxekkpkrv.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/poco-c31-shadow-gray-32-gb/p/itmffefb8bb085e3',
  },
  {
    name: 'realme C30 (Lake Blue, 32 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059',
    current_price: 5999,
    original_price: 8499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'realme C33 (Night Sea, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c33-night-sea-64-gb/p/itma112335dbe78a',
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-night-sea-64-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Aqua Blue, 32 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c33-aqua-blue-32-gb/p/itma112335dbe78a',
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-aqua-blue-32-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Sandy Gold, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c33-sandy-gold-64-gb/p/itma112335dbe78a',
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-sandy-gold-64-gb/p/itma112335dbe78a',
  },
  {
    name: 'realme C33 (Aqua Blue, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c33-aqua-blue-64-gb/p/itma112335dbe78a',
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c33-aqua-blue-64-gb/p/itma112335dbe78a',
  },
  {
    name: 'MOTOROLA g52 (Charcoal Grey, 128 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/motorola-g52-charcoal-grey-128-gb/p/itmea9ebe003e26c',
    current_price: 12999,
    original_price: 19999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l29c9e80/mobile/l/g/m/-original-imagdnefhnhztahe.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/motorola-g52-charcoal-grey-128-gb/p/itmea9ebe003e26c',
  },
  {
    name: 'POCO M4 Pro 5G (Yellow, 64 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/poco-m4-pro-5g-yellow-64-gb/p/itm0c88c16a094e4',
    current_price: 12999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/i/m/b/-original-imagcafg8zjz4rej.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/poco-m4-pro-5g-yellow-64-gb/p/itm0c88c16a094e4',
  },
  {
    name: 'vivo T1 44W (Midnight Galaxy, 128 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/vivo-t1-44w-midnight-galaxy-128-gb/p/itm2a08ebbea3689',
    current_price: 15999,
    original_price: 20990,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/x/b/y/-original-imagdznhnzmzfbwx.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/vivo-t1-44w-midnight-galaxy-128-gb/p/itm2a08ebbea3689',
  },
  {
    name: 'realme C30 (Lake Blue, 32 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059',
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'realme C30 (Bamboo Green, 32 GB)',
    category: 'mobile',
    link: 'https://www.flipkart.com/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059',
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'realme C30 (Bamboo Green, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059',
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'realme C30 (Lake Blue, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059',
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'Realme C30 - Locked with Airtel Prepaid (Denim Black, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-locked-airtel-prepaid-denim-black-32-gb/p/itm938b2a52e171f',
    current_price: 5549,
    original_price: 8499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/i/b/c/-original-imaghafug7zpnemh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-locked-airtel-prepaid-denim-black-32-gb/p/itm938b2a52e171f',
  },
  {
    name: 'Realme C30 - Locked with Airtel Prepaid (Lake Blue, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-locked-airtel-prepaid-lake-blue-32-gb/p/itm938b2a52e171f',
    current_price: 5549,
    original_price: 8499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/l/w/-original-imaghafu8wqnkyvc.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-locked-airtel-prepaid-lake-blue-32-gb/p/itm938b2a52e171f',
  },
  {
    name: 'Realme C30 - Locked with Airtel Prepaid (Bamboo Green, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-locked-airtel-prepaid-bamboo-green-32-gb/p/itm938b2a52e171f',
    current_price: 5549,
    original_price: 8499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/u/p/3/-original-imagh9anjdvxdtfb.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-locked-airtel-prepaid-bamboo-green-32-gb/p/itm938b2a52e171f',
  },
  {
    name: 'realme 10 (Clash White, 64 GB)',
    link: 'https://www.flipkart.com/realme-10-clash-white-64-gb/p/itmd6481542c3c73',
    current_price: 13999,
    original_price: 15999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/1/7/l/-original-imaghgcj2z5cfugg.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-10-clash-white-64-gb/p/itmd6481542c3c73',
  },
  {
    name: 'realme 10 (Rush Black, 64 GB)',
    link: 'https://www.flipkart.com/realme-10-rush-black-64-gb/p/itmd6481542c3c73',
    current_price: 13999,
    original_price: 15999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/l/3/-original-imaghgcktmwxthzc.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-10-rush-black-64-gb/p/itmd6481542c3c73',
  },
  {
    name: 'realme C35 (Glowing Black, 64 GB)',
    link: 'https://www.flipkart.com/realme-c35-glowing-black-64-gb/p/itmafb045222b2cf',
    current_price: 11999,
    original_price: 13999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/1/k/g/-original-imagc7ukmgugpdfy.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c35-glowing-black-64-gb/p/itmafb045222b2cf',
  },
  {
    name: 'realme C35 (Glowing Green, 128 GB)',
    link: 'https://www.flipkart.com/realme-c35-glowing-green-128-gb/p/itmafb045222b2cf',
    current_price: 12999,
    original_price: 14999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c35-glowing-green-128-gb/p/itmafb045222b2cf',
  },
  {
    name: 'realme 10 Pro+ 5G (Dark Matter, 128 GB)',
    link: 'https://www.flipkart.com/realme-10-pro-5g-dark-matter-128-gb/p/itmd32a2fec1fb60',
    current_price: 24999,
    original_price: 25999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/v/j/h/-original-imagkp8fvenrrkth.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-10-pro-5g-dark-matter-128-gb/p/itmd32a2fec1fb60',
  },
  {
    name: 'realme C11 2021 (Cool Blue, 32 GB)',
    link: 'https://www.flipkart.com/realme-c11-2021-cool-blue-32-gb/p/itmbd856acb97c38',
    current_price: 7499,
    original_price: 7999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c11-2021-cool-blue-32-gb/p/itmbd856acb97c38',
  },
  {
    name: 'realme C30 (Bamboo Green, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059',
    current_price: 5999,
    original_price: 8499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'realme C30 (Denim Black, 32 GB)',
    link: 'https://www.flipkart.com/realme-c30-denim-black-32-gb/p/itmfcf69b2db5059',
    current_price: 5999,
    original_price: 8499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/f/6/a/-original-imagfggrbywzk8r6.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c30-denim-black-32-gb/p/itmfcf69b2db5059',
  },
  {
    name: 'realme C11 2021 (Cool Grey, 32 GB)',
    link: 'https://www.flipkart.com/realme-c11-2021-cool-grey-32-gb/p/itmbd856acb97c38',
    current_price: 7499,
    original_price: 7999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c11-2021-cool-grey-32-gb/p/itmbd856acb97c38',
  },
  {
    name: 'realme C35 (Glowing Green, 64 GB)',
    link: 'https://www.flipkart.com/realme-c35-glowing-green-64-gb/p/itmafb045222b2cf',
    current_price: 11999,
    original_price: 13999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-c35-glowing-green-64-gb/p/itmafb045222b2cf',
  },
  {
    name: 'realme 10 Pro 5G (Hyperspace, 128 GB)',
    link: 'https://www.flipkart.com/realme-10-pro-5g-hyperspace-128-gb/p/itm1e672d12a252e',
    current_price: 18999,
    original_price: 20999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/n/s/-original-imagkp8yxmxzhjes.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/realme-10-pro-5g-hyperspace-128-gb/p/itm1e672d12a252e',
  },
  {
    name: 'SAMSUNG Galaxy F13 (Waterfall Blue, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f13-waterfall-blue-128-gb/p/itm85a305642eb7b',
    current_price: 12999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-waterfall-blue-128-gb/p/itm85a305642eb7b',
  },
  {
    name: 'SAMSUNG Galaxy F13 (Nightsky Green, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f13-nightsky-green-128-gb/p/itma7ed2982bc08f',
    current_price: 12999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-nightsky-green-128-gb/p/itma7ed2982bc08f',
  },
  {
    name: 'SAMSUNG Galaxy F04 (Jade Purple, 64 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f04-jade-purple-64-gb/p/itm0934dc56a1df7',
    current_price: 9499,
    original_price: 11499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/7/p/9/-original-imaghgbyypzkzvud.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f04-jade-purple-64-gb/p/itm0934dc56a1df7',
  },
  {
    name: 'SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f13-nightsky-green-64-gb/p/itmeadfda1bd23fa',
    current_price: 11999,
    original_price: 14999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-nightsky-green-64-gb/p/itmeadfda1bd23fa',
  },
  {
    name: 'SAMSUNG Galaxy F13 (Sunrise Copper, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f13-sunrise-copper-128-gb/p/itm99a231fa8bbf6',
    current_price: 12999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-sunrise-copper-128-gb/p/itm99a231fa8bbf6',
  },
  {
    name: 'SAMSUNG GURU MUSIC 2',
    link: 'https://www.flipkart.com/samsung-guru-music-2/p/itm2c9ea56f8959f',
    current_price: 2063,
    original_price: 2287,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/ki4w0i80-0/mobile/k/k/u/sm-b310ezddins-samsung-guru-music-2-samsung-original-imafxzxgkzwygvy4.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm2c9ea56f8959f',
  },
  {
    name: 'SAMSUNG Galaxy F13 (Sunrise Copper, 64 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f13-sunrise-copper-64-gb/p/itm0d8c65ec17621',
    current_price: 11999,
    original_price: 14999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-sunrise-copper-64-gb/p/itm0d8c65ec17621',
  },
  {
    name: 'SAMSUNG Galaxy F04 (Opal Green, 64 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f04-opal-green-64-gb/p/itmd0c05f8b03876',
    current_price: 9499,
    original_price: 11499,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f04-opal-green-64-gb/p/itmd0c05f8b03876',
  },
  {
    name: 'SAMSUNG Guru Music 2',
    link: 'https://www.flipkart.com/samsung-guru-music-2/p/itm49eb59fe3373a',
    current_price: 2074,
    original_price: 2074,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm49eb59fe3373a',
  },
  {
    name: 'SAMSUNG Guru Music 2',
    link: 'https://www.flipkart.com/samsung-guru-music-2/p/itm9ccac402af2e5',
    current_price: 2099,
    original_price: 2099,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm9ccac402af2e5',
  },
  {
    name: 'SAMSUNG GURU 1200',
    link: 'https://www.flipkart.com/samsung-guru-1200/p/itm5cb492ccc2bef',
    current_price: 1880,
    original_price: 1880,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kx9as280/mobile/w/d/m/guru-1200-gt-e1215zkains-samsung-original-imag9rbacapgffzg.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-guru-1200/p/itm5cb492ccc2bef',
  },
  {
    name: 'SAMSUNG Galaxy M53 5G (Deep Ocean Blue, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-m53-5g-deep-ocean-blue-128-gb/p/itm559e22db888f5',
    current_price: 25990,
    original_price: 25990,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/o/0/-original-imagfzjymhrwrebm.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-m53-5g-deep-ocean-blue-128-gb/p/itm559e22db888f5',
  },
  {
    name: 'SAMSUNG Galaxy M33 5G (Mystique Green, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-m33-5g-mystique-green-128-gb/p/itm2aa4db0a58c8a',
    current_price: 19264,
    original_price: 19264,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/c/3/d/-original-imagdc8mjnhxbgxj.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-m33-5g-mystique-green-128-gb/p/itm2aa4db0a58c8a',
  },
  {
    name: 'SAMSUNG Guru Music 2',
    link: 'https://www.flipkart.com/samsung-guru-music-2/p/itm2c9ea56f8959f',
    current_price: 2150,
    original_price: 2250,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm2c9ea56f8959f',
  },
  {
    name: 'SAMSUNG Galaxy F23 5G (Copper Blush, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm2ba42930a4156',
    current_price: 15999,
    original_price: 22999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/c/v/-original-imagehzbaw2wugme.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm2ba42930a4156',
  },
  {
    name: 'SAMSUNG Guru Music 2',
    link: 'https://www.flipkart.com/samsung-guru-music-2/p/itm74e12c2a5c8fa',
    current_price: 2115,
    original_price: 2115,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm74e12c2a5c8fa',
  },
  {
    name: 'SAMSUNG Galaxy F23 5G (Aqua Blue, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itm89d3030e3857e',
    current_price: 15999,
    original_price: 22999,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/h/k/-original-imagcg22czc3ggvw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itm89d3030e3857e',
  },
  {
    name: 'SAMSUNG Guru Music 2',
    link: 'https://www.flipkart.com/samsung-guru-music-2/p/itmdde40382e86b8',
    current_price: 2069,
    original_price: 2099,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itmdde40382e86b8',
  },
  {
    name: 'SAMSUNG Guru Music 2 SM-B315E',
    link: 'https://www.flipkart.com/samsung-guru-music-2-sm-b315e/p/itmf050063b51944',
    current_price: 2038,
    original_price: 2180,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/ke7ff680pkrrdj/mobile/f/j/q/samsung-guru-music-2-sm-b310e-sm-b310e-original-imaeqzu4ycch8hhf.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2-sm-b315e/p/itmf050063b51944',
  },
  {
    name: 'SAMSUNG Galaxy F23 5G (Copper Blush, 128 GB)',
    link: 'https://www.flipkart.com/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm59c8bf3255ef6',
    current_price: 16999,
    original_price: 16999,
    discounted: false,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/c/v/-original-imagehzbaw2wugme.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm59c8bf3255ef6',
  },
  {
    name: 'APPLE iPhone 11 (Black, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-11-black-128-gb/p/itm8244e8d955aba',
    current_price: 45999,
    original_price: 48900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-11-black-128-gb/p/itm8244e8d955aba',
  },
  {
    name: 'APPLE iPhone 14 (Blue, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d',
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d',
  },
  {
    name: 'APPLE iPhone 13 (Starlight, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f',
    current_price: 62999,
    original_price: 69900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f',
  },
  {
    name: 'APPLE iPhone 12 (Purple, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-12-purple-128-gb/p/itmebc78f1cb26d3',
    current_price: 56999,
    original_price: 64900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-12-purple-128-gb/p/itmebc78f1cb26d3',
  },
  {
    name: 'APPLE iPhone 13 (Midnight, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-13-midnight-128-gb/p/itmca361aab1c5b0',
    current_price: 62999,
    original_price: 69900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-13-midnight-128-gb/p/itmca361aab1c5b0',
  },
  {
    name: 'APPLE iPhone 12 (White, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-12-white-128-gb/p/itm95393f4c6cc59',
    current_price: 56999,
    original_price: 64900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-12-white-128-gb/p/itm95393f4c6cc59',
  },
  {
    name: 'APPLE iPhone 13 (Blue, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-13-blue-128-gb/p/itm6c601e0a58b3c',
    current_price: 62999,
    original_price: 69900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-13-blue-128-gb/p/itm6c601e0a58b3c',
  },
  {
    name: 'APPLE iPhone 11 (White, 64 GB)',
    link: 'https://www.flipkart.com/apple-iphone-11-white-64-gb/p/itmfc6a7091eb20b',
    current_price: 41999,
    original_price: 43900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-11-white-64-gb/p/itmfc6a7091eb20b',
  },
  {
    name: 'APPLE iPhone 12 (Black, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-12-black-128-gb/p/itmf1f0a58f1ecd7',
    current_price: 56999,
    original_price: 64900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-12-black-128-gb/p/itmf1f0a58f1ecd7',
  },
  {
    name: 'APPLE iPhone 12 (Green, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-12-green-128-gb/p/itm4e0a120f7d9c4',
    current_price: 56999,
    original_price: 64900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dubf3nytw.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-12-green-128-gb/p/itm4e0a120f7d9c4',
  },
  {
    name: 'APPLE iPhone 14 (Purple, 256 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-purple-256-gb/p/itmb2bf402090fae',
    current_price: 82499,
    original_price: 89900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-purple-256-gb/p/itmb2bf402090fae',
  },
  {
    name: 'APPLE iPhone 14 Plus (Midnight, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-plus-midnight-128-gb/p/itm4199ea6bcd38b',
    current_price: 80999,
    original_price: 89900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/b/0/-original-imaghx9qnhzxegu2.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-plus-midnight-128-gb/p/itm4199ea6bcd38b',
  },
  {
    name: 'APPLE iPhone 14 (Midnight, 256 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-midnight-256-gb/p/itmdb32e3c997112',
    current_price: 82499,
    original_price: 89900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-midnight-256-gb/p/itmdb32e3c997112',
  },
  {
    name: 'APPLE iPhone 14 (Starlight, 256 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-starlight-256-gb/p/itmaeda15697bb79',
    current_price: 82499,
    original_price: 89900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-starlight-256-gb/p/itmaeda15697bb79',
  },
  {
    name: 'APPLE iPhone 14 Plus (Blue, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-plus-blue-128-gb/p/itmac8385391b02b',
    current_price: 80999,
    original_price: 89900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-plus-blue-128-gb/p/itmac8385391b02b',
  },
  {
    name: 'APPLE iPhone 14 Plus (Starlight, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-plus-starlight-128-gb/p/itmc922ddc8af349',
    current_price: 80999,
    original_price: 89900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-plus-starlight-128-gb/p/itmc922ddc8af349',
  },
  {
    name: 'APPLE iPhone 14 Plus (Purple, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-plus-purple-128-gb/p/itm7a759a472d863',
    current_price: 80999,
    original_price: 89900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/v/0/t/-original-imaghxa5rgcv5enm.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-plus-purple-128-gb/p/itm7a759a472d863',
  },
  {
    name: 'APPLE iPhone 14 (Blue, 256 GB)',
    link: 'https://www.flipkart.com/apple-iphone-14-blue-256-gb/p/itm04dba659735c7',
    current_price: 82499,
    original_price: 89900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-blue-256-gb/p/itm04dba659735c7',
  },
  {
    name: 'APPLE iPhone 13 ((PRODUCT)RED, 128 GB)',
    link: 'https://www.flipkart.com/apple-iphone-13-product-red-128-gb/p/itm99b5658d148b0',
    current_price: 62999,
    original_price: 69900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-13-product-red-128-gb/p/itm99b5658d148b0',
  },
  {
    name: 'APPLE iPhone 11 (Black, 64 GB)',
    link: 'https://www.flipkart.com/apple-iphone-11-black-64-gb/p/itm4e5041ba101fd',
    current_price: 41999,
    original_price: 43900,
    discounted: true,
    thumbnail:
      'https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70',
    query_url:
      'https://flipkart.dvishal485.workers.dev/product/apple-iphone-11-black-64-gb/p/itm4e5041ba101fd',
  },
];
