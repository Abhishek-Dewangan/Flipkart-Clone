const products = [
  {
    name: "Happilo Premium Seedless Green Raisins",
    category: "growcery",
    link: "https://www.flipkart.com/happilo-premium-seedless-green-raisins/p/itmf4n9pzkhskxfv",
    current_price: 123,
    original_price: 165,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kwv0djk0/nut-dry-fruit/w/f/8/-original-imag9fust3uvgpmv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/happilo-premium-seedless-green-raisins/p/itmf4n9pzkhskxfv",
  },
  {
    name: "Maggi Pazzta Cheese Macaroni Pack Of 2 (70Gm * 2) Pasta",
    category: "growcery",
    link: "https://www.flipkart.com/maggi-pazzta-cheese-macaroni-pack-2-70gm-2-pasta/p/itm849465a8a3855",
    current_price: 122,
    original_price: 179,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/pasta/e/n/i/140-pazzta-cheese-macaroni-pack-of-2-70gm-2-instant-2-maggi-original-imagh96ztvwahrgd.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/maggi-pazzta-cheese-macaroni-pack-2-70gm-2-pasta/p/itm849465a8a3855",
  },
  {
    name: "Maggi Coconut , 1 Kg Coconut Milk Powder",
    category: "growcery",
    link: "https://www.flipkart.com/maggi-coconut-1-kg-milk-powder/p/itm36d14d353b633",
    current_price: 819,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/milk-powder/p/t/y/1-coconut-milk-powder-1-kg-1-maggi-original-imaghjd8dyxhsgqy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/maggi-coconut-1-kg-milk-powder/p/itm36d14d353b633",
  },
  {
    name: "Farmley Popular California Almonds",
    category: "growcery",
    link: "https://www.flipkart.com/farmley-popular-california-almonds/p/itmad17a0f8c1581",
    current_price: 229,
    original_price: 449,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/nut-dry-fruit/v/u/t/250-popular-california-1-pouch-farmley-original-imagh97wgkcq257h.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/farmley-popular-california-almonds/p/itmad17a0f8c1581",
  },
  {
    name: "Farmley Premium W320 Cashews",
    category: "growcery",
    link: "https://www.flipkart.com/farmley-premium-w320-cashews/p/itmcd617f7e4a93e",
    current_price: 240,
    original_price: 430,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/nut-dry-fruit/g/z/7/-original-imagkf42rfx4sffh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/farmley-premium-w320-cashews/p/itmcd617f7e4a93e",
  },
  {
    name: "Clean &amp; Clear Facewash Face Wash",
    category: "growcery",
    link: "https://www.flipkart.com/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp",
    current_price: 239,
    original_price: 599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l09w8sw0/face-wash/s/k/o/-original-imagc3y28zjhj8ed.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp",
  },
  {
    name: "HORLICKS Classic Malt",
    category: "growcery",
    link: "https://www.flipkart.com/horlicks-classic-malt/p/itm62a45129654b4",
    current_price: 265,
    original_price: 265,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kgwld3k0/milk-drink-mix/f/u/a/500-classic-malt-plastic-bottle-horlicks-original-imafxf7xyubggpdn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/horlicks-classic-malt/p/itm62a45129654b4",
  },
  {
    name: "Dabur Red Paste Toothpaste",
    category: "growcery",
    link: "https://www.flipkart.com/dabur-red-paste-toothpaste/p/itmeub3rdymtsffw",
    current_price: 325,
    original_price: 486,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/toothpaste/0/y/3/-original-imaghauvhvmwf5qg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dabur-red-paste-toothpaste/p/itmeub3rdymtsffw",
  },
  {
    name: "WONDERLAND California Almonds",
    category: "growcery",
    link: "https://www.flipkart.com/wonderland-california-almonds/p/itmf2gabghfpdtcy",
    current_price: 669,
    original_price: 1200,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l29c9e80/nut-dry-fruit/5/b/1/500-california-500g-pouch-1-pouch-wonderland-original-imagdmyhgxwxjzga.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/wonderland-california-almonds/p/itmf2gabghfpdtcy",
  },
  {
    name: "Happilo Premium seedless green Value Pack Raisins",
    category: "growcery",
    link: "https://www.flipkart.com/happilo-premium-seedless-green-value-pack-raisins/p/itm3bbab25080afe",
    current_price: 419,
    original_price: 599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kuczmvk0/nut-dry-fruit/w/a/c/500-premium-seedless-green-raisins-non-gmo-no-artificial-original-imag7hw2urg4xz2z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/happilo-premium-seedless-green-value-pack-raisins/p/itm3bbab25080afe",
  },
  {
    name: "Naturoz Popular California Almonds",
    category: "growcery",
    link: "https://www.flipkart.com/naturoz-popular-california-almonds/p/itm20bbe23cdb649",
    current_price: 179,
    original_price: 290,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/nut-dry-fruit/t/8/7/1-popular-california-1-pouch-naturoz-original-imaghwdugsmyyvys.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/naturoz-popular-california-almonds/p/itm20bbe23cdb649",
  },
  {
    name: "FIGARO Olive Oil Tin",
    category: "growcery",
    link: "https://www.flipkart.com/figaro-olive-oil-tin/p/itm9e931e415dd06",
    current_price: 275,
    original_price: 299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/knni7ww0/edible-oil/x/a/d/na-tin-olive-oil-figaro-original-imag2ad9hahgehv3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/figaro-olive-oil-tin/p/itm9e931e415dd06",
  },
  {
    name: "Parachute Coconut Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/parachute-coconut-hair-oil/p/itmf3jyqfqpzayzj",
    current_price: 312,
    original_price: 390,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/khnqqa80/hair-oil/z/y/g/600-coconut-parachute-original-imafxmbuaaxgq46z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/parachute-coconut-hair-oil/p/itmf3jyqfqpzayzj",
  },
  {
    name: "FIAMA Gel bar Celebration Pack",
    category: "growcery",
    link: "https://www.flipkart.com/fiama-gel-bar-celebration-pack/p/itmf3cqqxnvnpeyx",
    current_price: 252,
    original_price: 360,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kh3qkcw0/soap/d/b/d/5-125-gel-bar-celebration-pack-fiama-original-imafx6qfdrqq6xpw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fiama-gel-bar-celebration-pack/p/itmf3cqqxnvnpeyx",
  },
  {
    name: "HORLICKS Health &amp; Nutrition Drink",
    category: "growcery",
    link: "https://www.flipkart.com/horlicks-health-nutrition-drink/p/itm66b88687fa42b",
    current_price: 391,
    original_price: 399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/milk-drink-mix/c/y/c/900-health-nutrition-drink-pouch-1-horlicks-original-imagg43nfzbngmqf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/horlicks-health-nutrition-drink/p/itm66b88687fa42b",
  },
  {
    name: "L'Oréal Paris 6 Oil Nourish Shampoo, 1 ltr",
    category: "growcery",
    link: "https://www.flipkart.com/l-oral-paris-6-oil-nourish-shampoo-1-ltr/p/itm09e2b8a71e5ce",
    current_price: 431,
    original_price: 959,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/shampoo/g/v/g/-original-imaghdy3rfhbpnjq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/l-oral-paris-6-oil-nourish-shampoo-1-ltr/p/itm09e2b8a71e5ce",
  },
  {
    name: "Bumtum Baby Pull-Up Diaper Pants - M",
    category: "growcery",
    link: "https://www.flipkart.com/bumtum-baby-pull-up-diaper-pants-m/p/itm49216409b7f92",
    current_price: 549,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kit6hzk0-0/diaper/n/w/g/m-baby-pull-up-diaper-pants-bumtum-original-imafyggfferunufv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bumtum-baby-pull-up-diaper-pants-m/p/itm49216409b7f92",
  },
  {
    name: "Tata Agni Strong Leaf Black Tea Pouch",
    category: "growcery",
    link: "https://www.flipkart.com/tata-agni-strong-leaf-black-tea-pouch/p/itm3b538f9c1a1f6",
    current_price: 270,
    original_price: 300,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l1whaq80/tea/i/w/t/1-5-extra-strong-1-pouch-black-tea-tata-leaves-granules-original-imagdd3hxcrxfn2p.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/tata-agni-strong-leaf-black-tea-pouch/p/itm3b538f9c1a1f6",
  },
  {
    name: "Nutraj Recipe Ready Kernels Walnuts",
    category: "growcery",
    link: "https://www.flipkart.com/nutraj-recipe-ready-kernels-walnuts/p/itm18d8c8a96904a",
    current_price: 295,
    original_price: 449,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k02qnww0/nut-dry-fruit/j/s/q/2-half-quarter-walnut-250-g-8-2-kg-recipe-ready-box-nutraj-original-imafjyhjat2ymse9.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nutraj-recipe-ready-kernels-walnuts/p/itm18d8c8a96904a",
  },
  {
    name: "Naturoz Popular California Almonds",
    category: "growcery",
    link: "https://www.flipkart.com/naturoz-popular-california-almonds/p/itmf06f017668ab6",
    current_price: 429,
    original_price: 575,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/nut-dry-fruit/t/8/7/1-popular-california-1-pouch-naturoz-original-imaghwdugsmyyvys.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/naturoz-popular-california-almonds/p/itmf06f017668ab6",
  },
  {
    name: "Nutraj Gold Kernels (Akhrot Giri) Walnuts",
    category: "growcery",
    link: "https://www.flipkart.com/nutraj-gold-kernels-akhrot-giri-walnuts/p/itm278b078a7f360",
    current_price: 271,
    original_price: 435,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kklhbbk0/nut-dry-fruit/i/p/u/gold-walnut-kernels-akhrot-giri-box-nutraj-original-imafzwky3g2baprf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nutraj-gold-kernels-akhrot-giri-walnuts/p/itm278b078a7f360",
  },
  {
    name: "BIOTIQUE Bio Bhringraj Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/biotique-bio-bhringraj-hair-oil/p/itmf3jypmgwecya6",
    current_price: 159,
    original_price: 159,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/hair-oil/r/s/t/-original-imaghrxes9mw6xyq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/biotique-bio-bhringraj-hair-oil/p/itmf3jypmgwecya6",
  },
  {
    name: "FIGARO Olive Oil Tin",
    category: "growcery",
    link: "https://www.flipkart.com/figaro-olive-oil-tin/p/itm9e931e415dd06",
    current_price: 275,
    original_price: 299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/knni7ww0/edible-oil/x/a/d/na-tin-olive-oil-figaro-original-imag2ad9hahgehv3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/figaro-olive-oil-tin/p/itm9e931e415dd06",
  },
  {
    name: "Del Monte Extra Virgin Olive Oil Plastic Bottle",
    category: "growcery",
    link: "https://www.flipkart.com/del-monte-extra-virgin-olive-oil-plastic-bottle/p/itmce84ab28a697e",
    current_price: 299,
    original_price: 650,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kndi4y80/edible-oil/4/4/e/extra-virgin-plastic-bottle-olive-oil-del-monte-original-imag22fs8jqgsbyy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/del-monte-extra-virgin-olive-oil-plastic-bottle/p/itmce84ab28a697e",
  },
  {
    name: "BORGES Extra Virgin Olive Oil Plastic Bottle",
    category: "growcery",
    link: "https://www.flipkart.com/borges-extra-virgin-olive-oil-plastic-bottle/p/itm149d1741a97f8",
    current_price: 740,
    original_price: 1400,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/edible-oil/y/p/0/1-extra-virgin-plastic-bottle-1-olive-oil-borges-original-imagg576x3najhtv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/borges-extra-virgin-olive-oil-plastic-bottle/p/itm149d1741a97f8",
  },
  {
    name: "Parachute Coconut Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/parachute-coconut-hair-oil/p/itmf3jyqfqpzayzj",
    current_price: 249,
    original_price: 415,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/khnqqa80/edible-oil/a/w/f/1-na-can-coconut-oil-parachute-original-imafxmbtddyfctfr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/parachute-coconut-hair-oil/p/itmf3jyqfqpzayzj",
  },
  {
    name: "Parachute Pure Coconut Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/parachute-pure-coconut-hair-oil/p/itmf95c2qhwmjyhw",
    current_price: 193,
    original_price: 251,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l0bbonk0/hair-oil/m/i/6/-original-imagc5ywfs9ux39g.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/parachute-pure-coconut-hair-oil/p/itmf95c2qhwmjyhw",
  },
  {
    name: "HIMALAYA Baby Hair Oil 200 ml Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/himalaya-baby-hair-oil-200-ml/p/itm352636f5a149e",
    current_price: 154,
    original_price: 230,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kcm9t3k0/hair-oil/z/q/5/100-baby-hair-oil-100-ml-himalaya-original-imaftpmbfffg2ywh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-baby-hair-oil-200-ml/p/itm352636f5a149e",
  },
  {
    name: "HIMALAYA Baby Hair Oil 100 ml Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/himalaya-baby-hair-oil-100-ml/p/itmc043485153bd5",
    current_price: 100,
    original_price: 130,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kcm9t3k0/hair-oil/z/q/5/100-baby-hair-oil-100-ml-himalaya-original-imaftpmbfffg2ywh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-baby-hair-oil-100-ml/p/itmc043485153bd5",
  },
  {
    name: "Clean &amp; Clear Face Wash",
    category: "growcery",
    link: "https://www.flipkart.com/clean-clear-face-wash/p/itm799e7e96c238b",
    current_price: 270,
    original_price: 540,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kjkbv680-0/face-wash/l/r/7/450-face-wash-clean-clear-original-imafz3hz4fgwhfnf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clean-clear-face-wash/p/itm799e7e96c238b",
  },
  {
    name: "moochtec Ocean  Men All Skin Types Face Wash",
    category: "growcery",
    link: "https://www.flipkart.com/moochtec-ocean-men-all-skin-types-face-wash/p/itmbd1416a6b4fcd",
    current_price: 203,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/face-wash/x/w/m/100-ocean-face-wash-moochtec-original-imagj2gpfhtgguds.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/moochtec-ocean-men-all-skin-types-face-wash/p/itmbd1416a6b4fcd",
  },
  {
    name: "FIGARO Extra Virgin Olive Oil Plastic Bottle",
    category: "growcery",
    link: "https://www.flipkart.com/figaro-extra-virgin-olive-oil-plastic-bottle/p/itma228ba935d7ea",
    current_price: 249,
    original_price: 399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/knni7ww0/edible-oil/w/v/5/extra-virgin-plastic-bottle-olive-oil-figaro-original-imag2ad88rmubsjf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/figaro-extra-virgin-olive-oil-plastic-bottle/p/itma228ba935d7ea",
  },
  {
    name: "Dabur Cold Pressed Mustard Oil Plastic Bottle",
    category: "growcery",
    link: "https://www.flipkart.com/dabur-cold-pressed-mustard-oil-plastic-bottle/p/itm6ec7b75e2e4ac",
    current_price: 248,
    original_price: 310,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kk4c13k0/edible-oil/6/j/v/cold-pressed-plastic-bottle-mustard-oil-dabur-original-imafzjfcnrmxxs75.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dabur-cold-pressed-mustard-oil-plastic-bottle/p/itm6ec7b75e2e4ac",
  },
  {
    name: "MUAC Strong and Healthy Hair Growth Oil 400ML Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/muac-strong-healthy-hair-growth-oil-400ml/p/itm198352c41531a",
    current_price: 269,
    original_price: 996,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l3uhvgw0/shopsy-hair-oil/6/k/4/400-strong-and-healthy-hair-growth-oil-400ml-muac-original-imagevmupbz9qdyq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/muac-strong-healthy-hair-growth-oil-400ml/p/itm198352c41531a",
  },
  {
    name: "GKD's Premium Pure Coconut Oil Pouch",
    category: "growcery",
    link: "https://www.flipkart.com/gkd-s-premium-pure-coconut-oil-pouch/p/itm9c1065fe15d7d",
    current_price: 266,
    original_price: 330,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l3uhvgw0/edible-oil/v/j/z/1-pure-pouch-1-coconut-oil-gkd-s-premium-original-imagevyg5kf3ke6z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/gkd-s-premium-pure-coconut-oil-pouch/p/itm9c1065fe15d7d",
  },
  {
    name: "Parachute Coconut Oil Can",
    category: "growcery",
    link: "https://www.flipkart.com/parachute-coconut-oil-can/p/itm39bf298b1a57a",
    current_price: 277,
    original_price: 370,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/khnqqa80/edible-oil/a/w/f/1-na-can-coconut-oil-parachute-original-imafxmbtddyfctfr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/parachute-coconut-oil-can/p/itm39bf298b1a57a",
  },
  {
    name: "JOHNSON'S Baby Avacado  Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/johnson-s-baby-avacado-hair-oil/p/itmf3jypykaa6b3w",
    current_price: 148,
    original_price: 160,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jah3ngw0/hair-oil/5/f/t/200-baby-avacado-hair-oil-johnson-s-original-imafyfz6n2cscsdh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/johnson-s-baby-avacado-hair-oil/p/itmf3jypykaa6b3w",
  },
  {
    name: "JOHNSON'S Baby Hair Oil",
    category: "growcery",
    link: "https://www.flipkart.com/johnson-s-baby-hair-oil/p/itmf3jyqvvs3wdhc",
    current_price: 288,
    original_price: 320,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/hair-oil/r/y/f/400-baby-johnson-s-original-imaghfv8jktbyqdb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/johnson-s-baby-hair-oil/p/itmf3jyqvvs3wdhc",
  },
  {
    name: "Clean &amp; Clear Facewash Face Wash",
    category: "growcery",
    link: "https://www.flipkart.com/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp",
    current_price: 239,
    original_price: 599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l09w8sw0/face-wash/s/k/o/-original-imagc3y28zjhj8ed.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp",
  },
  {
    name: "INDIA GATE Select Basmati Rice",
    category: "growcery",
    link: "https://www.flipkart.com/india-gate-select-basmati-rice/p/itmfecw7shqteznp",
    current_price: 772,
    original_price: 840,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/juwzf680/rice/g/m/h/5-select-white-bag-basmati-rice-india-gate-original-imaffx5yrugx2yaf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/india-gate-select-basmati-rice/p/itmfecw7shqteznp",
  },
  {
    name: "INDIA GATE Dubar Basmati Rice (Medium Grain, Polished)",
    category: "growcery",
    link: "https://www.flipkart.com/india-gate-dubar-basmati-rice-medium-grain-polished/p/itmex3vww3vjpgdk",
    current_price: 630,
    original_price: 700,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/klscivk0/rice/g/s/s/white-dubar-basmati-rice-pouch-india-gate-original-imagytzcnyz8px4y.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/india-gate-dubar-basmati-rice-medium-grain-polished/p/itmex3vww3vjpgdk",
  },
  {
    name: "UNITY Super Basmati Rice (Long Grain, Parboiled)",
    category: "growcery",
    link: "https://www.flipkart.com/unity-super-basmati-rice-long-grain-parboiled/p/itm75bf4d46a3ce8",
    current_price: 800,
    original_price: 800,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kv9urgw0/rice/a/q/m/5-white-super-parboiled-basmati-rice-bag-unity-long-grain-original-imag87kd29gh3mzd.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/unity-super-basmati-rice-long-grain-parboiled/p/itm75bf4d46a3ce8",
  },
  {
    name: "ELINA Rice (Long Grain)",
    category: "growcery",
    link: "https://www.flipkart.com/elina-rice-long-grain/p/itmf7gc4fan3gcju",
    current_price: 748,
    original_price: 780,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jqe38280/rice/h/e/r/5-white-na-plain-rice-bag-elina-original-imafcezmq2t8hpw8.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/elina-rice-long-grain/p/itmf7gc4fan3gcju",
  },
  {
    name: "Octavius Classic Basmati Rice (Long Grain, Steam)",
    category: "growcery",
    link: "https://www.flipkart.com/octavius-classic-basmati-rice-long-grain-steam/p/itma1c38d4886a32",
    current_price: 582,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kic17rk0-0/rice/4/l/l/white-classic-bag-basmati-rice-octavius-original-imafy58f84c5fgaw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/octavius-classic-basmati-rice-long-grain-steam/p/itma1c38d4886a32",
  },
  {
    name: "BEMISAL Popular Basmati Rice (Broken Grain)",
    category: "growcery",
    link: "https://www.flipkart.com/bemisal-popular-basmati-rice-broken-grain/p/itmeuc2yhfbsjuzy",
    current_price: 380,
    original_price: 950,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kjn6qvk0/rice/c/h/r/5-white-popular-choice-basmati-rice-basmati-rice-pouch-bemisal-original-imafz6ym7hfjjvuu.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bemisal-popular-basmati-rice-broken-grain/p/itmeuc2yhfbsjuzy",
  },
  {
    name: "OMSOM Idli Rice Idli Rice (Medium Grain, Raw)",
    category: "growcery",
    link: "https://www.flipkart.com/omsom-idli-rice-medium-grain-raw/p/itmfc5env9ym8sng",
    current_price: 600,
    original_price: 625,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kqjtd3k0/rice/m/2/r/5-white-idli-rice-raw-idli-rice-bag-omsom-original-imag4jgj3784zxug.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/omsom-idli-rice-medium-grain-raw/p/itmfc5env9ym8sng",
  },
  {
    name: "OMSOM Sona Masoori Steam Rice (Medium Grain, Raw)",
    category: "growcery",
    link: "https://www.flipkart.com/omsom-sona-masoori-steam-rice-medium-grain-raw/p/itmfcdwggh5rvv9k",
    current_price: 580,
    original_price: 595,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kqjtd3k0/rice/h/t/7/5-white-sona-masoori-raw-steam-rice-bag-omsom-original-imag4jg9qfacqyah.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/omsom-sona-masoori-steam-rice-medium-grain-raw/p/itmfcdwggh5rvv9k",
  },
  {
    name: "Fortune Hamesha Basmati Rice (Long Grain, Polished)",
    category: "growcery",
    link: "https://www.flipkart.com/fortune-hamesha-basmati-rice-long-grain-polished/p/itme4b0be5ec584c",
    current_price: 800,
    original_price: 900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/rice/6/5/l/5-hamesha-white-polished-bag-basmati-rice-fortune-long-grain-original-imagjsfczrng7qjm.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fortune-hamesha-basmati-rice-long-grain-polished/p/itme4b0be5ec584c",
  },
  {
    name: "LAL QILLA Majestic Basmati Rice (Long Grain)",
    category: "growcery",
    link: "https://www.flipkart.com/lal-qilla-majestic-basmati-rice-long-grain/p/itmfeyughsygcudk",
    current_price: 700,
    original_price: 710,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kqjtd3k0/rice/b/l/o/5-white-majestic-na-basmati-rice-bag-lal-qilla-original-imag4jgzsddsehsg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lal-qilla-majestic-basmati-rice-long-grain/p/itmfeyughsygcudk",
  },
  {
    name: "B&amp;B Organics Red Rice ( Premium ) Red Boiled Rice",
    category: "growcery",
    link: "https://www.flipkart.com/b-b-organics-red-rice-premium-boiled/p/itm7b203a4528d47",
    current_price: 262,
    original_price: 275,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kdkkdjk0/rice/h/g/3/1-red-red-boiled-rice-pouch-b-b-organics-original-imafufpwdc89kwfk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/b-b-organics-red-rice-premium-boiled/p/itm7b203a4528d47",
  },
  {
    name: "AEROPLANE 1121 Steam Basmati Rice (Long Grain)",
    category: "growcery",
    link: "https://www.flipkart.com/aeroplane-1121-steam-basmati-rice-long-grain/p/itmd68b844a3a7f8",
    current_price: 648,
    original_price: 850,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/rice/b/x/x/5-1121-steam-white-na-bag-basmati-rice-aeroplane-long-grain-original-imaggnyhx4c6w2aq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/aeroplane-1121-steam-basmati-rice-long-grain/p/itmd68b844a3a7f8",
  },
  {
    name: "JTGEnterprises Super Basmati Rice (Long Grain)",
    category: "growcery",
    link: "https://www.flipkart.com/jtgenterprises-super-basmati-rice-long-grain/p/itm78fd6f188646e",
    current_price: 1099,
    original_price: 1200,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l2z26q80/rice/a/a/s/6-250-super-basmati-rice-5-kg-1-250-kg-white-raw-bag-basmati-original-image75a8zzwtbyr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/jtgenterprises-super-basmati-rice-long-grain/p/itm78fd6f188646e",
  },
  {
    name: "APPLE iPhone 11 (White, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-11-white-128-gb/p/itme32df47ea6742",
    current_price: 45999,
    original_price: 48900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-11-white-128-gb/p/itme32df47ea6742",
  },
  {
    name: "APPLE iPhone 14 (Starlight, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676",
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676",
  },
  {
    name: "APPLE iPhone 14 (Midnight, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-midnight-128-gb/p/itm9e6293c322a84",
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-midnight-128-gb/p/itm9e6293c322a84",
  },
  {
    name: "APPLE iPhone 14 (Purple, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-purple-128-gb/p/itm0b581eba85e08",
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-purple-128-gb/p/itm0b581eba85e08",
  },
  {
    name: "SAMSUNG Galaxy F23 5G (Forest Green, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f23-5g-forest-green-128-gb/p/itm4001e68fda319",
    current_price: 16999,
    original_price: 23999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/o/p/z/-original-imagcg22pf79cgau.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-forest-green-128-gb/p/itm4001e68fda319",
  },
  {
    name: "SAMSUNG Galaxy F23 5G (Aqua Blue, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itme54bc0c2292f4",
    current_price: 16999,
    original_price: 23999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/h/k/-original-imagcg22czc3ggvw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itme54bc0c2292f4",
  },
  {
    name: "SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f13-waterfall-blue-64-gb/p/itm583ef432b2b0c",
    current_price: 11999,
    original_price: 14999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-waterfall-blue-64-gb/p/itm583ef432b2b0c",
  },
  {
    name: "SAMSUNG Galaxy F23 5G (Copper Blush, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm59c8bf3255ef6",
    current_price: 16999,
    original_price: 23999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/c/v/-original-imagehzbaw2wugme.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm59c8bf3255ef6",
  },
  {
    name: "realme C33 (Sandy Gold, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-sandy-gold-32-gb/p/itma112335dbe78a",
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-sandy-gold-32-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Night Sea, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-night-sea-32-gb/p/itma112335dbe78a",
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-night-sea-32-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Aqua Blue, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-aqua-blue-32-gb/p/itma112335dbe78a",
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-aqua-blue-32-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Night Sea, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-night-sea-64-gb/p/itma112335dbe78a",
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-night-sea-64-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Aqua Blue, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-aqua-blue-64-gb/p/itma112335dbe78a",
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-aqua-blue-64-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Sandy Gold, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-sandy-gold-64-gb/p/itma112335dbe78a",
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-sandy-gold-64-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C30 (Lake Blue, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059",
    current_price: 5999,
    original_price: 8499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "realme C30 (Denim Black, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-denim-black-32-gb/p/itmfcf69b2db5059",
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/f/6/a/-original-imagfggrbywzk8r6.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-denim-black-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "POCO M4 Pro 5G (Cool Blue, 128 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/poco-m4-pro-5g-cool-blue-128-gb/p/itm509e4403d0303",
    current_price: 15499,
    original_price: 19999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/j/d/g/-original-imagcafg6hbeeqwf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/poco-m4-pro-5g-cool-blue-128-gb/p/itm509e4403d0303",
  },
  {
    name: "Infinix HOT 20 Play (Aurora Green, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/infinix-hot-20-play-aurora-green-64-gb/p/itm1e6903eb0203e",
    current_price: 8199,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/s/b/e/-original-imagkgrxdzzjuguw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/infinix-hot-20-play-aurora-green-64-gb/p/itm1e6903eb0203e",
  },
  {
    name: "Infinix HOT 20 Play (Fantasy Purple, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/infinix-hot-20-play-fantasy-purple-64-gb/p/itm1e6903eb0203e",
    current_price: 8199,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/p/r/-original-imagkgrxwg386pjk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/infinix-hot-20-play-fantasy-purple-64-gb/p/itm1e6903eb0203e",
  },
  {
    name: "Infinix HOT 20 Play (Racing Black, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/infinix-hot-20-play-racing-black-64-gb/p/itm1e6903eb0203e",
    current_price: 8199,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/p/f/u/-original-imagkgrxdsqpdznh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/infinix-hot-20-play-racing-black-64-gb/p/itm1e6903eb0203e",
  },
  {
    name: "APPLE iPhone 14 (Starlight, 128 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676",
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-starlight-128-gb/p/itm3485a56f6e676",
  },
  {
    name: "realme C33 (Sandy Gold, 32 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-sandy-gold-32-gb/p/itma112335dbe78a",
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-sandy-gold-32-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Night Sea, 32 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-night-sea-32-gb/p/itma112335dbe78a",
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-night-sea-32-gb/p/itma112335dbe78a",
  },
  {
    name: "MOTOROLA G62 5G (Midnight Gray, 128 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/motorola-g62-5g-midnight-gray-128-gb/p/itm37da299ffb2d0",
    current_price: 14999,
    original_price: 21999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/h/r/b/-original-imagh29eqd3zrvaf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/motorola-g62-5g-midnight-gray-128-gb/p/itm37da299ffb2d0",
  },
  {
    name: "Infinix HOT 20 Play (Luna Blue, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/infinix-hot-20-play-luna-blue-64-gb/p/itm1e6903eb0203e",
    current_price: 8199,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/o/e/-original-imagkgrxzahq3egj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/infinix-hot-20-play-luna-blue-64-gb/p/itm1e6903eb0203e",
  },
  {
    name: "SAMSUNG Galaxy S21 FE 5G (Graphite, 128 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-s21-fe-5g-graphite-128-gb/p/itm7be0f72fff180",
    current_price: 39999,
    original_price: 74999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kzrbiq80/mobile/h/x/n/galaxy-s21-fe-5g-sm-g990ezaiinu-samsung-original-imagbpfzbrnueypq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-s21-fe-5g-graphite-128-gb/p/itm7be0f72fff180",
  },
  {
    name: "vivo T1 44W (Starry Sky, 128 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/vivo-t1-44w-starry-sky-128-gb/p/itm2a08ebbea3689",
    current_price: 14499,
    original_price: 19990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/s/4/3/-original-imagdznhcbdfwfud.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vivo-t1-44w-starry-sky-128-gb/p/itm2a08ebbea3689",
  },
  {
    name: "vivo T1 44W (Midnight Galaxy, 128 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/vivo-t1-44w-midnight-galaxy-128-gb/p/itm2a08ebbea3689",
    current_price: 14499,
    original_price: 19990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/x/b/y/-original-imagdznhnzmzfbwx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vivo-t1-44w-midnight-galaxy-128-gb/p/itm2a08ebbea3689",
  },
  {
    name: "MOTOROLA e40 (Carbon Gray, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/motorola-e40-carbon-gray-64-gb/p/itm0ca635007c9e2",
    current_price: 8299,
    original_price: 10999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/motorola-e40-carbon-gray-64-gb/p/itm0ca635007c9e2",
  },
  {
    name: "POCO C31 (Shadow Gray, 32 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/poco-c31-shadow-gray-32-gb/p/itmffefb8bb085e3",
    current_price: 6499,
    original_price: 10999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/b/o/m/c31-mzb0a0min-poco-original-imag7bzqxekkpkrv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/poco-c31-shadow-gray-32-gb/p/itmffefb8bb085e3",
  },
  {
    name: "realme C30 (Lake Blue, 32 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059",
    current_price: 5999,
    original_price: 8499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "realme C33 (Night Sea, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-night-sea-64-gb/p/itma112335dbe78a",
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/e/n/j/-original-imaghuf9vphhbnkc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-night-sea-64-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Aqua Blue, 32 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-aqua-blue-32-gb/p/itma112335dbe78a",
    current_price: 8999,
    original_price: 11999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-aqua-blue-32-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Sandy Gold, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-sandy-gold-64-gb/p/itma112335dbe78a",
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/o/s/-original-imaghuf9mryjhf3m.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-sandy-gold-64-gb/p/itma112335dbe78a",
  },
  {
    name: "realme C33 (Aqua Blue, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c33-aqua-blue-64-gb/p/itma112335dbe78a",
    current_price: 9999,
    original_price: 12999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/z/o/-original-imaghuf9guqmb65z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c33-aqua-blue-64-gb/p/itma112335dbe78a",
  },
  {
    name: "MOTOROLA g52 (Charcoal Grey, 128 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/motorola-g52-charcoal-grey-128-gb/p/itmea9ebe003e26c",
    current_price: 12999,
    original_price: 19999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l29c9e80/mobile/l/g/m/-original-imagdnefhnhztahe.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/motorola-g52-charcoal-grey-128-gb/p/itmea9ebe003e26c",
  },
  {
    name: "POCO M4 Pro 5G (Yellow, 64 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/poco-m4-pro-5g-yellow-64-gb/p/itm0c88c16a094e4",
    current_price: 12999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/i/m/b/-original-imagcafg8zjz4rej.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/poco-m4-pro-5g-yellow-64-gb/p/itm0c88c16a094e4",
  },
  {
    name: "vivo T1 44W (Midnight Galaxy, 128 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/vivo-t1-44w-midnight-galaxy-128-gb/p/itm2a08ebbea3689",
    current_price: 15999,
    original_price: 20990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l2p23rk0/mobile/x/b/y/-original-imagdznhnzmzfbwx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vivo-t1-44w-midnight-galaxy-128-gb/p/itm2a08ebbea3689",
  },
  {
    name: "realme C30 (Lake Blue, 32 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059",
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "realme C30 (Bamboo Green, 32 GB)",
    category: "mobile",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059",
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "realme C30 (Bamboo Green, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059",
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "realme C30 (Lake Blue, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059",
    current_price: 6999,
    original_price: 9299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-lake-blue-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "Realme C30 - Locked with Airtel Prepaid (Denim Black, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-locked-airtel-prepaid-denim-black-32-gb/p/itm938b2a52e171f",
    current_price: 5549,
    original_price: 8499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/i/b/c/-original-imaghafug7zpnemh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-locked-airtel-prepaid-denim-black-32-gb/p/itm938b2a52e171f",
  },
  {
    name: "Realme C30 - Locked with Airtel Prepaid (Lake Blue, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-locked-airtel-prepaid-lake-blue-32-gb/p/itm938b2a52e171f",
    current_price: 5549,
    original_price: 8499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/l/w/-original-imaghafu8wqnkyvc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-locked-airtel-prepaid-lake-blue-32-gb/p/itm938b2a52e171f",
  },
  {
    name: "Realme C30 - Locked with Airtel Prepaid (Bamboo Green, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-locked-airtel-prepaid-bamboo-green-32-gb/p/itm938b2a52e171f",
    current_price: 5549,
    original_price: 8499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/u/p/3/-original-imagh9anjdvxdtfb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-locked-airtel-prepaid-bamboo-green-32-gb/p/itm938b2a52e171f",
  },
  {
    name: "realme 10 (Clash White, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-10-clash-white-64-gb/p/itmd6481542c3c73",
    current_price: 13999,
    original_price: 15999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/1/7/l/-original-imaghgcj2z5cfugg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-10-clash-white-64-gb/p/itmd6481542c3c73",
  },
  {
    name: "realme 10 (Rush Black, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-10-rush-black-64-gb/p/itmd6481542c3c73",
    current_price: 13999,
    original_price: 15999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/l/3/-original-imaghgcktmwxthzc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-10-rush-black-64-gb/p/itmd6481542c3c73",
  },
  {
    name: "realme C35 (Glowing Black, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c35-glowing-black-64-gb/p/itmafb045222b2cf",
    current_price: 11999,
    original_price: 13999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/1/k/g/-original-imagc7ukmgugpdfy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c35-glowing-black-64-gb/p/itmafb045222b2cf",
  },
  {
    name: "realme C35 (Glowing Green, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c35-glowing-green-128-gb/p/itmafb045222b2cf",
    current_price: 12999,
    original_price: 14999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c35-glowing-green-128-gb/p/itmafb045222b2cf",
  },
  {
    name: "realme 10 Pro+ 5G (Dark Matter, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-10-pro-5g-dark-matter-128-gb/p/itmd32a2fec1fb60",
    current_price: 24999,
    original_price: 25999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/v/j/h/-original-imagkp8fvenrrkth.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-10-pro-5g-dark-matter-128-gb/p/itmd32a2fec1fb60",
  },
  {
    name: "realme C11 2021 (Cool Blue, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c11-2021-cool-blue-32-gb/p/itmbd856acb97c38",
    current_price: 7499,
    original_price: 7999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c11-2021-cool-blue-32-gb/p/itmbd856acb97c38",
  },
  {
    name: "realme C30 (Bamboo Green, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059",
    current_price: 5999,
    original_price: 8499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-bamboo-green-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "realme C30 (Denim Black, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c30-denim-black-32-gb/p/itmfcf69b2db5059",
    current_price: 5999,
    original_price: 8499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/f/6/a/-original-imagfggrbywzk8r6.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c30-denim-black-32-gb/p/itmfcf69b2db5059",
  },
  {
    name: "realme C11 2021 (Cool Grey, 32 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c11-2021-cool-grey-32-gb/p/itmbd856acb97c38",
    current_price: 7499,
    original_price: 7999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c11-2021-cool-grey-32-gb/p/itmbd856acb97c38",
  },
  {
    name: "realme C35 (Glowing Green, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-c35-glowing-green-64-gb/p/itmafb045222b2cf",
    current_price: 11999,
    original_price: 13999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-c35-glowing-green-64-gb/p/itmafb045222b2cf",
  },
  {
    name: "realme 10 Pro 5G (Hyperspace, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/realme-10-pro-5g-hyperspace-128-gb/p/itm1e672d12a252e",
    current_price: 18999,
    original_price: 20999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/n/s/-original-imagkp8yxmxzhjes.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-10-pro-5g-hyperspace-128-gb/p/itm1e672d12a252e",
  },
  {
    name: "SAMSUNG Galaxy F13 (Waterfall Blue, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f13-waterfall-blue-128-gb/p/itm85a305642eb7b",
    current_price: 12999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/8/4/-original-imagfhu75eupxyft.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-waterfall-blue-128-gb/p/itm85a305642eb7b",
  },
  {
    name: "SAMSUNG Galaxy F13 (Nightsky Green, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f13-nightsky-green-128-gb/p/itma7ed2982bc08f",
    current_price: 12999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-nightsky-green-128-gb/p/itma7ed2982bc08f",
  },
  {
    name: "SAMSUNG Galaxy F04 (Jade Purple, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f04-jade-purple-64-gb/p/itm0934dc56a1df7",
    current_price: 9499,
    original_price: 11499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/7/p/9/-original-imaghgbyypzkzvud.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f04-jade-purple-64-gb/p/itm0934dc56a1df7",
  },
  {
    name: "SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f13-nightsky-green-64-gb/p/itmeadfda1bd23fa",
    current_price: 11999,
    original_price: 14999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/i/v/-original-imagfhu6bdzhnmkz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-nightsky-green-64-gb/p/itmeadfda1bd23fa",
  },
  {
    name: "SAMSUNG Galaxy F13 (Sunrise Copper, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f13-sunrise-copper-128-gb/p/itm99a231fa8bbf6",
    current_price: 12999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-sunrise-copper-128-gb/p/itm99a231fa8bbf6",
  },
  {
    name: "SAMSUNG GURU MUSIC 2",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-guru-music-2/p/itm2c9ea56f8959f",
    current_price: 2063,
    original_price: 2287,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ki4w0i80-0/mobile/k/k/u/sm-b310ezddins-samsung-guru-music-2-samsung-original-imafxzxgkzwygvy4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm2c9ea56f8959f",
  },
  {
    name: "SAMSUNG Galaxy F13 (Sunrise Copper, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f13-sunrise-copper-64-gb/p/itm0d8c65ec17621",
    current_price: 11999,
    original_price: 14999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/x/x/s/-original-imagfhu6dcpdnqkh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f13-sunrise-copper-64-gb/p/itm0d8c65ec17621",
  },
  {
    name: "SAMSUNG Galaxy F04 (Opal Green, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f04-opal-green-64-gb/p/itmd0c05f8b03876",
    current_price: 9499,
    original_price: 11499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/w/d/o/-original-imaghgbyhy6banxv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f04-opal-green-64-gb/p/itmd0c05f8b03876",
  },
  {
    name: "SAMSUNG Guru Music 2",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-guru-music-2/p/itm49eb59fe3373a",
    current_price: 2074,
    original_price: 2074,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm49eb59fe3373a",
  },
  {
    name: "SAMSUNG Guru Music 2",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-guru-music-2/p/itm9ccac402af2e5",
    current_price: 2099,
    original_price: 2099,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm9ccac402af2e5",
  },
  {
    name: "SAMSUNG GURU 1200",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-guru-1200/p/itm5cb492ccc2bef",
    current_price: 1880,
    original_price: 1880,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kx9as280/mobile/w/d/m/guru-1200-gt-e1215zkains-samsung-original-imag9rbacapgffzg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-guru-1200/p/itm5cb492ccc2bef",
  },
  {
    name: "SAMSUNG Galaxy M53 5G (Deep Ocean Blue, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-m53-5g-deep-ocean-blue-128-gb/p/itm559e22db888f5",
    current_price: 25990,
    original_price: 25990,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/g/o/0/-original-imagfzjymhrwrebm.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-m53-5g-deep-ocean-blue-128-gb/p/itm559e22db888f5",
  },
  {
    name: "SAMSUNG Galaxy M33 5G (Mystique Green, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-m33-5g-mystique-green-128-gb/p/itm2aa4db0a58c8a",
    current_price: 19264,
    original_price: 19264,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/c/3/d/-original-imagdc8mjnhxbgxj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-m33-5g-mystique-green-128-gb/p/itm2aa4db0a58c8a",
  },
  {
    name: "SAMSUNG Guru Music 2",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-guru-music-2/p/itm2c9ea56f8959f",
    current_price: 2150,
    original_price: 2250,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm2c9ea56f8959f",
  },
  {
    name: "SAMSUNG Galaxy F23 5G (Copper Blush, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm2ba42930a4156",
    current_price: 15999,
    original_price: 22999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/c/v/-original-imagehzbaw2wugme.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm2ba42930a4156",
  },
  {
    name: "SAMSUNG Guru Music 2",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-guru-music-2/p/itm74e12c2a5c8fa",
    current_price: 2115,
    original_price: 2115,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itm74e12c2a5c8fa",
  },
  {
    name: "SAMSUNG Galaxy F23 5G (Aqua Blue, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itm89d3030e3857e",
    current_price: 15999,
    original_price: 22999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/0/h/k/-original-imagcg22czc3ggvw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-aqua-blue-128-gb/p/itm89d3030e3857e",
  },
  {
    name: "SAMSUNG Guru Music 2",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-guru-music-2/p/itmdde40382e86b8",
    current_price: 2069,
    original_price: 2099,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kn6cxow0/mobile/q/4/z/guru-music-2-sm-b310ezkdins-samsung-original-imagfwzxgcgd3va3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2/p/itmdde40382e86b8",
  },
  {
    name: "SAMSUNG Guru Music 2 SM-B315E",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-guru-music-2-sm-b315e/p/itmf050063b51944",
    current_price: 2038,
    original_price: 2180,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ke7ff680pkrrdj/mobile/f/j/q/samsung-guru-music-2-sm-b310e-sm-b310e-original-imaeqzu4ycch8hhf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-guru-music-2-sm-b315e/p/itmf050063b51944",
  },
  {
    name: "SAMSUNG Galaxy F23 5G (Copper Blush, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm59c8bf3255ef6",
    current_price: 16999,
    original_price: 16999,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/f/c/v/-original-imagehzbaw2wugme.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-galaxy-f23-5g-copper-blush-128-gb/p/itm59c8bf3255ef6",
  },
  {
    name: "APPLE iPhone 11 (Black, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-11-black-128-gb/p/itm8244e8d955aba",
    current_price: 45999,
    original_price: 48900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-11-black-128-gb/p/itm8244e8d955aba",
  },
  {
    name: "APPLE iPhone 14 (Blue, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d",
    current_price: 72499,
    original_price: 79900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-blue-128-gb/p/itmdb77f40da6b6d",
  },
  {
    name: "APPLE iPhone 13 (Starlight, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f",
    current_price: 62999,
    original_price: 69900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f",
  },
  {
    name: "APPLE iPhone 12 (Purple, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-12-purple-128-gb/p/itmebc78f1cb26d3",
    current_price: 56999,
    original_price: 64900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/mobile/6/h/y/iphone-12-mjnm3hn-a-apple-original-imag2k2v6ehvnzfd.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-12-purple-128-gb/p/itmebc78f1cb26d3",
  },
  {
    name: "APPLE iPhone 13 (Midnight, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-13-midnight-128-gb/p/itmca361aab1c5b0",
    current_price: 62999,
    original_price: 69900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-13-midnight-128-gb/p/itmca361aab1c5b0",
  },
  {
    name: "APPLE iPhone 12 (White, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-12-white-128-gb/p/itm95393f4c6cc59",
    current_price: 56999,
    original_price: 64900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-12-white-128-gb/p/itm95393f4c6cc59",
  },
  {
    name: "APPLE iPhone 13 (Blue, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-13-blue-128-gb/p/itm6c601e0a58b3c",
    current_price: 62999,
    original_price: 69900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/2/y/o/iphone-13-mlpk3hn-a-apple-original-imag6vpyur6hjngg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-13-blue-128-gb/p/itm6c601e0a58b3c",
  },
  {
    name: "APPLE iPhone 11 (White, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-11-white-64-gb/p/itmfc6a7091eb20b",
    current_price: 41999,
    original_price: 43900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-11-white-64-gb/p/itmfc6a7091eb20b",
  },
  {
    name: "APPLE iPhone 12 (Black, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-12-black-128-gb/p/itmf1f0a58f1ecd7",
    current_price: 56999,
    original_price: 64900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-12-black-128-gb/p/itmf1f0a58f1ecd7",
  },
  {
    name: "APPLE iPhone 12 (Green, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-12-green-128-gb/p/itm4e0a120f7d9c4",
    current_price: 56999,
    original_price: 64900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/p/f/w/apple-iphone-12-dummyapplefsn-original-imafwg8dubf3nytw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-12-green-128-gb/p/itm4e0a120f7d9c4",
  },
  {
    name: "APPLE iPhone 14 (Purple, 256 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-purple-256-gb/p/itmb2bf402090fae",
    current_price: 82499,
    original_price: 89900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-purple-256-gb/p/itmb2bf402090fae",
  },
  {
    name: "APPLE iPhone 14 Plus (Midnight, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-plus-midnight-128-gb/p/itm4199ea6bcd38b",
    current_price: 80999,
    original_price: 89900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/a/b/0/-original-imaghx9qnhzxegu2.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-plus-midnight-128-gb/p/itm4199ea6bcd38b",
  },
  {
    name: "APPLE iPhone 14 (Midnight, 256 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-midnight-256-gb/p/itmdb32e3c997112",
    current_price: 82499,
    original_price: 89900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-midnight-256-gb/p/itmdb32e3c997112",
  },
  {
    name: "APPLE iPhone 14 (Starlight, 256 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-starlight-256-gb/p/itmaeda15697bb79",
    current_price: 82499,
    original_price: 89900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-starlight-256-gb/p/itmaeda15697bb79",
  },
  {
    name: "APPLE iPhone 14 Plus (Blue, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-plus-blue-128-gb/p/itmac8385391b02b",
    current_price: 80999,
    original_price: 89900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/c/4/d/-original-imaghx9qygjjg8hz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-plus-blue-128-gb/p/itmac8385391b02b",
  },
  {
    name: "APPLE iPhone 14 Plus (Starlight, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-plus-starlight-128-gb/p/itmc922ddc8af349",
    current_price: 80999,
    original_price: 89900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-plus-starlight-128-gb/p/itmc922ddc8af349",
  },
  {
    name: "APPLE iPhone 14 Plus (Purple, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-plus-purple-128-gb/p/itm7a759a472d863",
    current_price: 80999,
    original_price: 89900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/v/0/t/-original-imaghxa5rgcv5enm.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-plus-purple-128-gb/p/itm7a759a472d863",
  },
  {
    name: "APPLE iPhone 14 (Blue, 256 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-14-blue-256-gb/p/itm04dba659735c7",
    current_price: 82499,
    original_price: 89900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/3/5/l/-original-imaghx9qmgqsk9s4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-14-blue-256-gb/p/itm04dba659735c7",
  },
  {
    name: "APPLE iPhone 13 ((PRODUCT)RED, 128 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-13-product-red-128-gb/p/itm99b5658d148b0",
    current_price: 62999,
    original_price: 69900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/a/m/7/iphone-13-mlpj3hn-a-apple-original-imag6vpyk3w4zarg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-13-product-red-128-gb/p/itm99b5658d148b0",
  },
  {
    name: "APPLE iPhone 11 (Black, 64 GB)",
    category: "mobile",
    link: "https://www.flipkart.com/apple-iphone-11-black-64-gb/p/itm4e5041ba101fd",
    current_price: 41999,
    original_price: 43900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/apple-iphone-11-black-64-gb/p/itm4e5041ba101fd",
  },
  {
    name: "Hotkei (500 gm)Multipurpose Laptop Pc Computer Keyboard Dust Cleaner Cleaning Slime Gel for Computers,...",
    category: "appliance",
    link: "https://www.flipkart.com/hotkei-500-gm-multipurpose-laptop-pc-computer-keyboard-dust-cleaner-cleaning-slime-gel-computers-gaming-laptops-mobiles/p/itm8b687255db5ec",
    current_price: null,
    original_price: null,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/car-interior-cleaner/q/0/k/500-slime-gel-car-interior-reusable-cleaning-cleaner-hotkei-original-imaggp35dxyysnnn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/hotkei-500-gm-multipurpose-laptop-pc-computer-keyboard-dust-cleaner-cleaning-slime-gel-computers-gaming-laptops-mobiles/p/itm8b687255db5ec",
  },
  {
    name: "Hotkei (500 gm)Multipurpose Laptop Pc Computer Keyboard Dust Cleaner Cleaning Slime Gel for Computers,...",
    category: "appliance",
    link: "https://www.flipkart.com/hotkei-500-gm-multipurpose-laptop-pc-computer-keyboard-dust-cleaner-cleaning-slime-gel-computers-mobiles-laptops-gaming/p/itm679ce75c7a027",
    current_price: 349,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/car-interior-cleaner/q/0/k/500-slime-gel-car-interior-reusable-cleaning-cleaner-hotkei-original-imaggp35dxyysnnn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/hotkei-500-gm-multipurpose-laptop-pc-computer-keyboard-dust-cleaner-cleaning-slime-gel-computers-mobiles-laptops-gaming/p/itm679ce75c7a027",
  },
  {
    name: "BuyerHub High-Speed USB Type C Adapter, Female USB A to USB C 3.0 Male OTG Adapter/Converter CAABSUSBH...",
    category: "appliance",
    link: "https://www.flipkart.com/buyerhub-high-speed-usb-type-c-adapter-female-3-0-male-otg-adapter-converter-caabsusbhsblk01-hub/p/itmff7cf45c0e692",
    current_price: 499,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kn0n6a80/mobile-accessories-combo/q/6/z/wireless-mini-foldable-usb-hub-2-0-portable-splitter-abs-4-port-original-imagfsr3zkt9xyxg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/buyerhub-high-speed-usb-type-c-adapter-female-3-0-male-otg-adapter-converter-caabsusbhsblk01-hub/p/itmff7cf45c0e692",
  },
  {
    name: "Pureit Max Water Saver 10 L RO + UV + MF Water Purifier with Eco Recovery Technology",
    category: "appliance",
    link: "https://www.flipkart.com/pureit-max-water-saver-10-l-ro-uv-mf-purifier-eco-recovery-technology/p/itm7f39a109128ae",
    current_price: 13999,
    original_price: 22500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/water-purifier/b/c/y/-original-imagmgnrwe4m3zrv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pureit-max-water-saver-10-l-ro-uv-mf-purifier-eco-recovery-technology/p/itm7f39a109128ae",
  },
  {
    name: "SwapME USB Hub 3.0 Portable Mini USB Expander 4 Port USB Hub 3.0 for Pc Multiport Slim USB Hub Compati...",
    category: "appliance",
    link: "https://www.flipkart.com/swapme-usb-hub-3-0-portable-mini-expander-4-port-pc-multiport-slim-compatible-macbook-air-laptop-ipad-35-cm-cable-length/p/itm61f11b5b1fab4",
    current_price: 298,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l3os4280/docking-station/u/y/h/1-portable-mini-usb-expander-4-port-usb-2-0-hub-x2-rhonnium-original-imager298eqzjhff.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/swapme-usb-hub-3-0-portable-mini-expander-4-port-pc-multiport-slim-compatible-macbook-air-laptop-ipad-35-cm-cable-length/p/itm61f11b5b1fab4",
  },
  {
    name: "MVN CLEANER LCD SCREEN CLEANER 200 ML CLEAN/FLAT NORMAL SCREEN LED TV, LCD, LAPTOP, GAMING TABLET, CAM...",
    category: "appliance",
    link: "https://www.flipkart.com/mvn-cleaner-lcd-screen-200-ml-clean-flat-normal-led-tv-lcd-laptop-gaming-tablet-camera-1-microfibre-cloth-laptops-mobiles-gaming-computers/p/itm472f8727552d5",
    current_price: 169,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/klscivk0/cleaning-kit/g/b/g/lcd-screen-cleaner-200-ml-clean-flat-normal-screen-led-tv-lcd-original-imagytyhfhcatnkp.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/mvn-cleaner-lcd-screen-200-ml-clean-flat-normal-led-tv-lcd-laptop-gaming-tablet-camera-1-microfibre-cloth-laptops-mobiles-gaming-computers/p/itm472f8727552d5",
  },
  {
    name: "Butterfly Rapid plus / Rapid Plus 5J 750 W Mixer Grinder (5 Jars, Ink Blue)",
    category: "appliance",
    link: "https://www.flipkart.com/butterfly-rapid-plus-5j-750-w-mixer-grinder-5-jars-ink-blue/p/itmbac4365f7f0f2",
    current_price: 3199,
    original_price: 6499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ko0d6kw0/mixer-grinder-juicer/0/h/u/plus-butterfly-original-imag2kadbfjzzayj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/butterfly-rapid-plus-5j-750-w-mixer-grinder-5-jars-ink-blue/p/itmbac4365f7f0f2",
  },
  {
    name: "Pureit by HUL Copper+Mineral RO+UV+MF 8 L RO + UV Water Purifier with Copper Charge Technology",
    category: "appliance",
    link: "https://www.flipkart.com/pureit-hul-copper-mineral-ro-uv-mf-8-l-ro-uv-water-purifier-copper-charge-technology/p/itm9d14e431c6c58",
    current_price: 22490,
    original_price: 27990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l5iid8w0/water-purifier/a/t/n/-original-imagg6ebgv3hmbqx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pureit-hul-copper-mineral-ro-uv-mf-8-l-ro-uv-water-purifier-copper-charge-technology/p/itm9d14e431c6c58",
  },
  {
    name: "Orient Electric by orient Fabri Press DIFP10BP 1000 W Dry Iron",
    category: "appliance",
    link: "https://www.flipkart.com/orient-electric-fabri-press-difp10bp-1000-w-dry-iron/p/itm74bc3b21a2eb2",
    current_price: 549,
    original_price: 990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/iron/n/4/f/-original-imagghxryq5xntgt.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/orient-electric-fabri-press-difp10bp-1000-w-dry-iron/p/itm74bc3b21a2eb2",
  },
  {
    name: "Bajaj GX1 500 W Mixer Grinder",
    category: "appliance",
    link: "https://www.flipkart.com/bajaj-gx1-500-w-mixer-grinder/p/itm8bace9512553c",
    current_price: 1999,
    original_price: 3505,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l2f20sw0/mixer-grinder-juicer/t/q/x/-original-imagdrhaqwvdu7wh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bajaj-gx1-500-w-mixer-grinder/p/itm8bace9512553c",
  },
  {
    name: "Butterfly Arrow 500 W Mixer Grinder (3 Jars, Grey)",
    category: "appliance",
    link: "https://www.flipkart.com/butterfly-arrow-500-w-mixer-grinder-3-jars-grey/p/itm43c1ecc5289e0",
    current_price: 1799,
    original_price: 3699,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/jqv8ia80/mixer-grinder-juicer/w/n/6/butterfly-arrow-original-imafcz43zxwekpzc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/butterfly-arrow-500-w-mixer-grinder-3-jars-grey/p/itm43c1ecc5289e0",
  },
  {
    name: "Whirlpool 4 in 1 Convertible Cooling 1.5 Ton 3 Star Split Inverter AC  - White",
    category: "appliance",
    link: "https://www.flipkart.com/whirlpool-4-1-convertible-cooling-1-5-ton-3-star-split-inverter-ac-white/p/itmadca6acbc4182",
    current_price: 31990,
    original_price: 64600,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0pm3680/air-conditioner-new/1/s/x/-original-imagcfvuqf8tezzr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/whirlpool-4-1-convertible-cooling-1-5-ton-3-star-split-inverter-ac-white/p/itmadca6acbc4182",
  },
  {
    name: "Pigeon Favourite Electric Kettle",
    category: "appliance",
    link: "https://www.flipkart.com/pigeon-favourite-electric-kettle/p/itmeasgcgprvgjzf",
    current_price: 549,
    original_price: 1245,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/electric-kettle/w/g/r/-original-imaggkhdr4thnypr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pigeon-favourite-electric-kettle/p/itmeasgcgprvgjzf",
  },
  {
    name: "Pigeon Acer plus Induction Cooktop",
    category: "appliance",
    link: "https://www.flipkart.com/pigeon-acer-plus-induction-cooktop/p/itm4f089f1e6bf0a",
    current_price: 1749,
    original_price: 3595,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kyj0vbk0/induction-cook-top/v/3/j/-original-imagaqsmqrnfhrbf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pigeon-acer-plus-induction-cooktop/p/itm4f089f1e6bf0a",
  },
  {
    name: "Aqua Fresh EPICAQUA+RO+UV+UF+TDSADJUSTER 15 L RO + UV + UF + ATDS Water Purifier",
    category: "appliance",
    link: "https://www.flipkart.com/aqua-fresh-epicaqua-ro-uv-uf-tdsadjuster-15-l-ro-uv-uf-atds-water-purifier/p/itm7d7c9c61fb4eb",
    current_price: 4371,
    original_price: 16500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/klzhq4w0/water-purifier/b/y/e/new-audi-aqua-fresh-original-imagyzvhkbzdnzyb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/aqua-fresh-epicaqua-ro-uv-uf-tdsadjuster-15-l-ro-uv-uf-atds-water-purifier/p/itm7d7c9c61fb4eb",
  },
  {
    name: "Crompton 75 L Desert Air Cooler",
    category: "appliance",
    link: "https://www.flipkart.com/crompton-75-l-desert-air-cooler/p/itmfdzqqxypamuz9",
    current_price: 10599,
    original_price: 17200,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l1qrjbk0/air-cooler/l/w/u/-original-imagd8p5bw4sgpy6.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/crompton-75-l-desert-air-cooler/p/itmfdzqqxypamuz9",
  },
  {
    name: "Prestige Atlas 3.0 Induction Cooktop",
    category: "appliance",
    link: "https://www.flipkart.com/prestige-atlas-3-0-induction-cooktop/p/itm171641d916862",
    current_price: 1599,
    original_price: 2895,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l2ghgnk0/induction-cook-top/s/t/z/-original-imagdsgnauhuvskd.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/prestige-atlas-3-0-induction-cooktop/p/itm171641d916862",
  },
  {
    name: "BAJAJ Crest Neo 1200 mm 3 Blade Ceiling Fan",
    category: "appliance",
    link: "https://www.flipkart.com/bajaj-crest-neo-1200-mm-3-blade-ceiling-fan/p/itm73140916e43f1",
    current_price: 1299,
    original_price: 2670,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l1fc0i80/fan/e/6/s/-original-imagczzsevxhn2qw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bajaj-crest-neo-1200-mm-3-blade-ceiling-fan/p/itm73140916e43f1",
  },
  {
    name: "IFB 23 L Convection Microwave Oven",
    category: "appliance",
    link: "https://www.flipkart.com/ifb-23-l-convection-microwave-oven/p/itmdwmvzgvtbzcnz",
    current_price: 9499,
    original_price: 13990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/microwave-new/9/5/n/-original-imagk8skba6ebhnz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/ifb-23-l-convection-microwave-oven/p/itmdwmvzgvtbzcnz",
  },
  {
    name: "Crompton 25 L Storage Water Geyser (ASWH-3025 (ARNO NEO 5S), White)",
    category: "appliance",
    link: "https://www.flipkart.com/crompton-25-l-storage-water-geyser-aswh-3025-arno-neo-5s-white/p/itm062032163273b",
    current_price: 6999,
    original_price: 10000,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ksru0sw0/water-geyser/p/6/w/aswh-3015-crompton-original-imag69j6vnzpgfy6.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/crompton-25-l-storage-water-geyser-aswh-3025-arno-neo-5s-white/p/itm062032163273b",
  },
  {
    name: "Shopcivity USB HUB 4 Port 3.0 Adapter Splitter 5Gbps Speed, Laptop, PC Led Indication Cable Length 30C...",
    category: "appliance",
    link: "https://www.flipkart.com/shopcivity-usb-hub-4-port-3-0-adapter-splitter-5gbps-speed-laptop-pc-led-indication-cable-length-30cm/p/itm10105dba098a5",
    current_price: 399,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/usb-gadget/c/p/h/cable-length-30cm-shopcivity-original-imaghefhapf3fyqc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/shopcivity-usb-hub-4-port-3-0-adapter-splitter-5gbps-speed-laptop-pc-led-indication-cable-length-30cm/p/itm10105dba098a5",
  },
  {
    name: "Gizga Essentials Cleaning Kit (Grey ) for Computers",
    category: "appliance",
    link: "https://www.flipkart.com/gizga-essentials-cleaning-kit-grey-computers/p/itm9a5f7272c6859",
    current_price: 199,
    original_price: 529,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/cleaning-kit/d/a/u/cleaning-kit-grey-gz-ck-115-gry-gizga-essentials-original-imagmhwnzhjr8yqq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/gizga-essentials-cleaning-kit-grey-computers/p/itm9a5f7272c6859",
  },
  {
    name: "Hotkei Red (500 gm)Multipurpose Laptop Pc Keyboard Dust Cleaner Cleaning Slime Gel for Computers, Gami...",
    category: "appliance",
    link: "https://www.flipkart.com/hotkei-red-500-gm-multipurpose-laptop-pc-keyboard-dust-cleaner-cleaning-slime-gel-computers-gaming-laptops-mobiles/p/itm8a5440070bea0",
    current_price: 349,
    original_price: 699,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/car-interior-cleaner/8/y/n/500-slime-gel-car-interior-reusable-cleaning-cleaner-hotkei-original-imaggp3dfpcad8rb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/hotkei-red-500-gm-multipurpose-laptop-pc-keyboard-dust-cleaner-cleaning-slime-gel-computers-gaming-laptops-mobiles/p/itm8a5440070bea0",
  },
  {
    name: "Pureit by HUL ULTIMA MINERAL 10 L RO + UV + MF Water Purifier with Digital Purity Indicator",
    category: "appliance",
    link: "https://www.flipkart.com/pureit-hul-ultima-mineral-10-l-ro-uv-mf-water-purifier-digital-purity-indicator/p/itm139226f176300",
    current_price: 17990,
    original_price: 23500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l23mhzk0/water-purifier/u/y/w/-original-imagdgvw2vfmgfey.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pureit-hul-ultima-mineral-10-l-ro-uv-mf-water-purifier-digital-purity-indicator/p/itm139226f176300",
  },
  {
    name: "Yuwa Y32-S 80 cm (32 inch) HD Ready LED Smart Android TV 2023 Edition with Voice Assistant | 5000+ App...",
    category: "appliance",
    link: "https://www.flipkart.com/yuwa-y32-s-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-voice-assistant-5000-apps-games-20-content-partners/p/itm7aedafd497a25",
    current_price: 8299,
    original_price: 17999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/f/o/q/yuwa-32-smart-y-32-smart-yuwa-original-imagm7t5fr6hs3vr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/yuwa-y32-s-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-voice-assistant-5000-apps-games-20-content-partners/p/itm7aedafd497a25",
  },
  {
    name: "Yuwa Bezel Less/Frameless 80 cm (32 inch) HD Ready LED Smart Android TV 2023 Edition with Voice Assist...",
    category: "appliance",
    link: "https://www.flipkart.com/yuwa-bezel-less-frameless-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-voice-assistant-5000-games-apps-20-content-partners/p/itm1f3ba53440b14",
    current_price: 8439,
    original_price: 20999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/i/v/k/fl-y-32s-fl-yuwa-original-imagm3wn8kuhawye.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/yuwa-bezel-less-frameless-80-cm-32-inch-hd-ready-led-smart-android-tv-2023-voice-assistant-5000-games-apps-20-content-partners/p/itm1f3ba53440b14",
  },
  {
    name: "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV with 2022 Model",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-2022-model/p/itm3c07ddc2dd25d",
    current_price: 12490,
    original_price: 18900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/m/n/p/-original-imagkzctc2gkvfgf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-80-cm-32-inch-hd-ready-led-smart-tizen-tv-2022-model/p/itm3c07ddc2dd25d",
  },
  {
    name: "OnePlus Y1 80 cm (32 inch) HD Ready LED Smart Android TV with Dolby Audio",
    category: "appliance",
    link: "https://www.flipkart.com/oneplus-y1-80-cm-32-inch-hd-ready-led-smart-android-tv-dolby-audio/p/itme650a6bb8cee3",
    current_price: 11999,
    original_price: 19999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/oneplus-y1-80-cm-32-inch-hd-ready-led-smart-android-tv-dolby-audio/p/itme650a6bb8cee3",
  },
  {
    name: "OnePlus Y1 100 cm (40 inch) Full HD LED Smart Android TV with Dolby Audio",
    category: "appliance",
    link: "https://www.flipkart.com/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-dolby-audio/p/itmdcbd9784403b2",
    current_price: 18999,
    original_price: 27999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kph8h3k0/television/k/9/h/40y1-40fa1a00-oneplus-original-imag3p45tdgyvpqa.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/oneplus-y1-100-cm-40-inch-full-hd-led-smart-android-tv-dolby-audio/p/itmdcbd9784403b2",
  },
  {
    name: "OnePlus Y1S 80 cm (32 inch) HD Ready LED Smart Android TV with Android 11 and Bezel-Less Frame",
    category: "appliance",
    link: "https://www.flipkart.com/oneplus-y1s-80-cm-32-inch-hd-ready-led-smart-android-tv-11-bezel-less-frame/p/itm0a39edd7df236",
    current_price: 13999,
    original_price: 21999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kzfvzww0/television/e/b/b/32hd2a00-32-y1s-oneplus-original-imagbgcewfqywgk7.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/oneplus-y1s-80-cm-32-inch-hd-ready-led-smart-android-tv-11-bezel-less-frame/p/itm0a39edd7df236",
  },
  {
    name: "realme 80 cm (32 inch) HD Ready LED Smart Android TV",
    category: "appliance",
    link: "https://www.flipkart.com/realme-80-cm-32-inch-hd-ready-led-smart-android-tv/p/itm56d1cf16da75b",
    current_price: 11999,
    original_price: 17999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/h/a/r/-original-imaghgphdj9fsvzt.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-80-cm-32-inch-hd-ready-led-smart-android-tv/p/itm56d1cf16da75b",
  },
  {
    name: "OnePlus Y1S 108 cm (43 inch) Full HD LED Smart Android TV with Android 11 and Bezel-Less Frame",
    category: "appliance",
    link: "https://www.flipkart.com/oneplus-y1s-108-cm-43-inch-full-hd-led-smart-android-tv-11-bezel-less-frame/p/itm178846d2e1567",
    current_price: 23999,
    original_price: 31999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kzfvzww0/television/g/4/k/43fd2a00-43-y1s-oneplus-original-imagbgc44gerfphz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/oneplus-y1s-108-cm-43-inch-full-hd-led-smart-android-tv-11-bezel-less-frame/p/itm178846d2e1567",
  },
  {
    name: "Infinix Y1 80 cm (32 inch) HD Ready LED Smart Linux TV with Wall Mount",
    category: "appliance",
    link: "https://www.flipkart.com/infinix-y1-80-cm-32-inch-hd-ready-led-smart-linux-tv-wall-mount/p/itme5476ca89d1b0",
    current_price: 8999,
    original_price: 16999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l572ufk0/television/e/f/g/32y1-32y1-infinix-original-imagfxczrxjjwxvf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/infinix-y1-80-cm-32-inch-hd-ready-led-smart-linux-tv-wall-mount/p/itme5476ca89d1b0",
  },
  {
    name: "Thomson Alpha 80 cm (32 inch) HD Ready LED Smart Linux TV with 30 W Sound Output &amp; Bezel-Less Design",
    category: "appliance",
    link: "https://www.flipkart.com/thomson-alpha-80-cm-32-inch-hd-ready-led-smart-linux-tv-30-w-sound-output-bezel-less-design/p/itm0e90bcdadb9c9",
    current_price: 8499,
    original_price: 14999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l51d30w0/television/1/k/j/-original-imagfsyu8nrz5gzg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/thomson-alpha-80-cm-32-inch-hd-ready-led-smart-linux-tv-30-w-sound-output-bezel-less-design/p/itm0e90bcdadb9c9",
  },
  {
    name: "Mi 5A 80 cm (32 inch) HD Ready LED Smart Android TV with Dolby Audio (2022 Model)",
    category: "appliance",
    link: "https://www.flipkart.com/mi-5a-80-cm-32-inch-hd-ready-led-smart-android-tv-dolby-audio-2022-model/p/itm98501ffa297ba",
    current_price: 13999,
    original_price: 24999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l2ghgnk0/television/u/a/c/l32m7-5ain-mi-original-imagdsdwqf6bkmkz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/mi-5a-80-cm-32-inch-hd-ready-led-smart-android-tv-dolby-audio-2022-model/p/itm98501ffa297ba",
  },
  {
    name: "realme 108 cm (43 inch) Full HD LED Smart Android TV with Android 11 - 2022 Model",
    category: "appliance",
    link: "https://www.flipkart.com/realme-108-cm-43-inch-full-hd-led-smart-android-tv-11-2022-model/p/itmef2cbebb563ff",
    current_price: 21999,
    original_price: 35999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l3uhvgw0/television/g/c/c/-original-imageuxkfxhruvfx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-108-cm-43-inch-full-hd-led-smart-android-tv-11-2022-model/p/itmef2cbebb563ff",
  },
  {
    name: "LG 80 cm (32 inch) HD Ready LED Smart WebOS TV",
    category: "appliance",
    link: "https://www.flipkart.com/lg-80-cm-32-inch-hd-ready-led-smart-webos-tv/p/itm6207e6d122567",
    current_price: 13990,
    original_price: 21990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/television/7/x/9/-original-imagc8fnpx39evgc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-80-cm-32-inch-hd-ready-led-smart-webos-tv/p/itm6207e6d122567",
  },
  {
    name: "iFFALCON by TCL F53 79.97 cm (32 inch) HD Ready LED Smart Android TV with Android 11",
    category: "appliance",
    link: "https://www.flipkart.com/iffalcon-tcl-f53-79-97-cm-32-inch-hd-ready-led-smart-android-tv-11/p/itmf4e9c6c14ccb0",
    current_price: 9499,
    original_price: 26990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/n/k/q/-original-imaghu25za2hq7dy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/iffalcon-tcl-f53-79-97-cm-32-inch-hd-ready-led-smart-android-tv-11/p/itmf4e9c6c14ccb0",
  },
  {
    name: "acer I Series 80 cm (32 inch) HD Ready LED Smart Android TV with Android 11, 1.5GB RAM (2022 Model)",
    category: "appliance",
    link: "https://www.flipkart.com/acer-series-80-cm-32-inch-hd-ready-led-smart-android-tv-11-1-5gb-ram-2022-model/p/itm5767c4e3d5359",
    current_price: 11499,
    original_price: 19990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/2/3/k/-original-imagkcdaszup3fac.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/acer-series-80-cm-32-inch-hd-ready-led-smart-android-tv-11-1-5gb-ram-2022-model/p/itm5767c4e3d5359",
  },
  {
    name: "Sansui Neo 80 cm (32 inch) HD Ready LED Smart Linux TV with Bezel-less Design and Dolby Audio (Midnigh...",
    category: "appliance",
    link: "https://www.flipkart.com/sansui-neo-80-cm-32-inch-hd-ready-led-smart-linux-tv-bezel-less-design-dolby-audio-midnight-black-2022-model/p/itm93fe38a998c32",
    current_price: 8999,
    original_price: 19990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/7/h/e/-original-imagma6whbs2abtn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/sansui-neo-80-cm-32-inch-hd-ready-led-smart-linux-tv-bezel-less-design-dolby-audio-midnight-black-2022-model/p/itm93fe38a998c32",
  },
  {
    name: "realme 100.3 cm (40 inch) Full HD LED Smart Android TV with Android 11 - 2022 Model",
    category: "appliance",
    link: "https://www.flipkart.com/realme-100-3-cm-40-inch-full-hd-led-smart-android-tv-11-2022-model/p/itmfbee9155488c1",
    current_price: 18999,
    original_price: 31999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l3uhvgw0/television/x/q/x/-original-imageuxkcg2fbdkg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-100-3-cm-40-inch-full-hd-led-smart-android-tv-11-2022-model/p/itmfbee9155488c1",
  },
  {
    name: "OnePlus Y1S Pro 138 cm (55 inch) Ultra HD (4K) LED Smart Android TV",
    category: "appliance",
    link: "https://www.flipkart.com/oneplus-y1s-pro-138-cm-55-inch-ultra-hd-4k-led-smart-android-tv/p/itm5db9783099cbb",
    current_price: 39999,
    original_price: 49999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/r/n/x/55ud2a00-55-y1s-pro-oneplus-original-imagk9wcydhe7pbv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/oneplus-y1s-pro-138-cm-55-inch-ultra-hd-4k-led-smart-android-tv/p/itm5db9783099cbb",
  },
  {
    name: "BeethoSOL 80 cm (32 inch) HD Ready LED Smart Android TV",
    category: "appliance",
    link: "https://www.flipkart.com/beethosol-80-cm-32-inch-hd-ready-led-smart-android-tv/p/itm8d2b1963a203d",
    current_price: 7499,
    original_price: 19000,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/u/2/8/-original-imaghy7kkmnmgra4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/beethosol-80-cm-32-inch-hd-ready-led-smart-android-tv/p/itm8d2b1963a203d",
  },
  {
    name: "iFFALCON by TCL F53 100 cm (40 inch) Full HD LED Smart Android TV with Android 11",
    category: "appliance",
    link: "https://www.flipkart.com/iffalcon-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-11/p/itm4af56d3acdfc7",
    current_price: 14999,
    original_price: 36990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/i/w/y/-original-imaghu25revgpk2y.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/iffalcon-tcl-f53-100-cm-40-inch-full-hd-led-smart-android-tv-11/p/itm4af56d3acdfc7",
  },
  {
    name: "SAMSUNG Crystal 4K Neo Series 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV with (Black) (2022 Mod...",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-crystal-4k-neo-series-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-black-2022-model/p/itma076c4dd16aa4",
    current_price: 32990,
    original_price: 47900,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l47cu4w0/television/9/0/f/-original-imagf5qummst7t94.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-crystal-4k-neo-series-108-cm-43-inch-ultra-hd-4k-led-smart-tizen-tv-black-2022-model/p/itma076c4dd16aa4",
  },
  {
    name: "Vu 108 cm (43 inch) Ultra HD (4K) LED Smart WebOS TV",
    category: "appliance",
    link: "https://www.flipkart.com/vu-108-cm-43-inch-ultra-hd-4k-led-smart-webos-tv/p/itma19f5a1877178",
    current_price: 19999,
    original_price: 40000,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/o/d/k/43ut-webos-vu-original-imaggtsdjbstwtqr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vu-108-cm-43-inch-ultra-hd-4k-led-smart-webos-tv/p/itma19f5a1877178",
  },
  {
    name: "OnePlus U1S 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with Far field and Dolby Audio",
    category: "appliance",
    link: "https://www.flipkart.com/oneplus-u1s-139-cm-55-inch-ultra-hd-4k-led-smart-android-tv-far-field-dolby-audio/p/itmf1c99185dba18",
    current_price: 42999,
    original_price: 59999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kuwzssw0/television/b/1/v/u-series-55-u1s-55uc1a00-oneplus-original-imag7xtnzgaaxqrg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/oneplus-u1s-139-cm-55-inch-ultra-hd-4k-led-smart-android-tv-far-field-dolby-audio/p/itmf1c99185dba18",
  },
  {
    name: "acer I Series 109 cm (43 inch) Ultra HD (4K) LED Smart Android TV with Android 11, 30W Dolby Audio, ME...",
    category: "appliance",
    link: "https://www.flipkart.com/acer-series-109-cm-43-inch-ultra-hd-4k-led-smart-android-tv-11-30w-dolby-audio-memc-2022-model/p/itmccae6468b147a",
    current_price: 23999,
    original_price: 34990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/television/c/4/u/-original-imagkcdag59gr4dj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/acer-series-109-cm-43-inch-ultra-hd-4k-led-smart-android-tv-11-30w-dolby-audio-memc-2022-model/p/itmccae6468b147a",
  },
  {
    name: "Midea 482 L Frost Free Side by Side Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/midea-482-l-frost-free-side-refrigerator/p/itmda3fdb32f71da",
    current_price: 44990,
    original_price: 69990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kwmfqfk0/refrigerator-new/h/3/i/mdrs619fgg28ind-1775-na-na-81-midea-635-835-original-imag99eprecyh9bz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/midea-482-l-frost-free-side-refrigerator/p/itmda3fdb32f71da",
  },
  {
    name: "Whirlpool 240 L Frost Free Triple Door Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/whirlpool-240-l-frost-free-triple-door-refrigerator/p/itm78fcdc5b446da",
    current_price: 26090,
    original_price: 36400,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ky90scw0/refrigerator-new/g/q/s/-original-imagaj234t6qqayh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/whirlpool-240-l-frost-free-triple-door-refrigerator/p/itm78fcdc5b446da",
  },
  {
    name: "Whirlpool 245 L Frost Free Double Door 3 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/whirlpool-245-l-frost-free-double-door-3-star-refrigerator/p/itm9648997f0064b",
    current_price: 24190,
    original_price: 29700,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l51d30w0/refrigerator-new/j/y/q/neo-fresh-245l-3-star-magnum-steel-1490-3-2022-54-whirlpool-665-original-imagfsxhaermmh7g.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/whirlpool-245-l-frost-free-double-door-3-star-refrigerator/p/itm9648997f0064b",
  },
  {
    name: "Godrej 30 L Qube Personal Cooling Solution",
    category: "appliance",
    link: "https://www.flipkart.com/godrej-30-l-qube-personal-cooling-solution/p/itm76a4238995f2b",
    current_price: 7490,
    original_price: 8250,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kzygpzk0/refrigerator-new/d/w/c/-original-imagbuvf8hqmcaak.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/godrej-30-l-qube-personal-cooling-solution/p/itm76a4238995f2b",
  },
  {
    name: "Haier 195 L Direct Cool Single Door 4 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/haier-195-l-direct-cool-single-door-4-star-refrigerator/p/itm5fa1a2d07817e",
    current_price: 19799,
    original_price: 29800,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kua4r680/refrigerator-new/7/a/c/hrd-1954psg-e-1313-4-2021-44-haier-628-541-original-imag7fqqvkspkdbc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/haier-195-l-direct-cool-single-door-4-star-refrigerator/p/itm5fa1a2d07817e",
  },
  {
    name: "Whirlpool 260 L Frost Free Triple Door Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/whirlpool-260-l-frost-free-triple-door-refrigerator/p/itm4b730d2ceccb1",
    current_price: 27990,
    original_price: 34700,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ky90scw0/refrigerator-new/g/q/s/-original-imagaj234t6qqayh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/whirlpool-260-l-frost-free-triple-door-refrigerator/p/itm4b730d2ceccb1",
  },
  {
    name: "Haier 460 L Frost Free Double Door Bottom Mount 3 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/haier-460-l-frost-free-double-door-bottom-mount-3-star-refrigerator/p/itm84634e991678a",
    current_price: 50490,
    original_price: 83990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/i/1/b/hrb-4804ckg-1880-3-2022-91-haier-765-780-original-imaggazecezssz8f.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/haier-460-l-frost-free-double-door-bottom-mount-3-star-refrigerator/p/itm84634e991678a",
  },
  {
    name: "LG 260 L Frost Free Double Door Top Mount 2 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/lg-260-l-frost-free-double-door-top-mount-2-star-refrigerator/p/itmf03febe7ad78e",
    current_price: 24150,
    original_price: 28990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqzj7gw0/refrigerator-new/g/g/s/gl-n292brgy-2-2020-lg-original-imag4vkapwcydhzb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-260-l-frost-free-double-door-top-mount-2-star-refrigerator/p/itmf03febe7ad78e",
  },
  {
    name: "SAMSUNG 465 L Frost Free Double Door 3 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-465-l-frost-free-double-door-3-star-refrigerator/p/itmb6d6597841fd1",
    current_price: 56000,
    original_price: 70990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/z/e/c/rt47b623esl-tl-178-5-3-2022-78-samsung-72-6-70-original-imagggsjargjvujx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-465-l-frost-free-double-door-3-star-refrigerator/p/itmb6d6597841fd1",
  },
  {
    name: "LG 308 L Frost Free Double Door 2 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/lg-308-l-frost-free-double-door-2-star-refrigerator/p/itm1a33a9f1d59c7",
    current_price: 31850,
    original_price: 43899,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/2/w/f/gl-s322spzy-167-5-2-2022-33-lg-66-9-58-5-original-imaghfafbgqftyvr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-308-l-frost-free-double-door-2-star-refrigerator/p/itm1a33a9f1d59c7",
  },
  {
    name: "LG 190 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer",
    category: "appliance",
    link: "https://www.flipkart.com/lg-190-l-direct-cool-single-door-5-star-refrigerator-base-drawer/p/itm3803a700aa7b8",
    current_price: 19490,
    original_price: 24399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/d/q/o/gl-d201ascz-1326-5-2021-33-5-lg-633-534-original-imagjmpfwzsjzmgh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-190-l-direct-cool-single-door-5-star-refrigerator-base-drawer/p/itm3803a700aa7b8",
  },
  {
    name: "SAMSUNG 253 L Frost Free Double Door 2 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-253-l-frost-free-double-door-2-star-refrigerator/p/itm81191e59dac2c",
    current_price: 23698,
    original_price: 23990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqjtd3k0/refrigerator-new/x/x/2/rt28a3022gs-hl-2-2021-samsung-original-imag4j3yafcyaugq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-253-l-frost-free-double-door-2-star-refrigerator/p/itm81191e59dac2c",
  },
  {
    name: "LG 260 L Frost Free Double Door Top Mount 2 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/lg-260-l-frost-free-double-door-top-mount-2-star-refrigerator/p/itmd04a820cbe4ab",
    current_price: 26499,
    original_price: 30699,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqzj7gw0/refrigerator-new/g/g/s/gl-n292brgy-2-2020-lg-original-imag4vkapwcydhzb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-260-l-frost-free-double-door-top-mount-2-star-refrigerator/p/itmd04a820cbe4ab",
  },
  {
    name: "LG 260 L Frost Free Double Door Top Mount 2 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/lg-260-l-frost-free-double-door-top-mount-2-star-refrigerator/p/itm4d6c39fe750f1",
    current_price: 27789,
    original_price: 31990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqzj7gw0/refrigerator-new/g/g/s/gl-n292brgy-2-2020-lg-original-imag4vkapwcydhzb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-260-l-frost-free-double-door-top-mount-2-star-refrigerator/p/itm4d6c39fe750f1",
  },
  {
    name: "BOSCH 263 L Frost Free Double Door Top Mount 3 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/bosch-263-l-frost-free-double-door-top-mount-3-star-refrigerator/p/itmbfc26a44c44b2",
    current_price: 32990,
    original_price: 42390,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kynb6vk0/refrigerator-new/o/r/r/ctc27b23ei-156-3-2021-55-428-bosch-66-60-5-original-imagau3aghb8sznk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bosch-263-l-frost-free-double-door-top-mount-3-star-refrigerator/p/itmbfc26a44c44b2",
  },
  {
    name: "BOSCH 263 L Frost Free Double Door Top Mount 3 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/bosch-263-l-frost-free-double-door-top-mount-3-star-refrigerator/p/itm4e4ad21edbfb3",
    current_price: 30789,
    original_price: 38390,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kynb6vk0/refrigerator-new/o/r/r/ctc27b23ei-156-3-2021-55-428-bosch-66-60-5-original-imagau3aghb8sznk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bosch-263-l-frost-free-double-door-top-mount-3-star-refrigerator/p/itm4e4ad21edbfb3",
  },
  {
    name: "BOSCH 364 L Frost Free Triple Door Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/bosch-364-l-frost-free-triple-door-refrigerator/p/itm6bfc473e3db34",
    current_price: 48900,
    original_price: 68290,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/z/y/z/cmc36wt5ni-187-na-2022-72-6-bosch-68-67-original-imaggz2ewk82jhdw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bosch-364-l-frost-free-triple-door-refrigerator/p/itm6bfc473e3db34",
  },
  {
    name: "BOSCH 290 L Frost Free Double Door Top Mount 3 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/bosch-290-l-frost-free-double-door-top-mount-3-star-refrigerator/p/itm98c5f39f5afcf",
    current_price: 32604,
    original_price: 41490,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/e/f/5/ctc29s03ni-168-3-2022-61-45-bosch-66-60-5-original-imaggnz5hyt7jc8b.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bosch-290-l-frost-free-double-door-top-mount-3-star-refrigerator/p/itm98c5f39f5afcf",
  },
  {
    name: "Kelvinator 190 L Direct Cool Single Door 2 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/kelvinator-190-l-direct-cool-single-door-2-star-refrigerator/p/itm94b3e28837bae",
    current_price: 14129,
    original_price: 19990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0lbrm80/refrigerator-new/k/i/z/krd-a190mrp-1115-3-ratings-are-valid-for-a-specific-duration-of-original-imagcch5nqns5uy4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/kelvinator-190-l-direct-cool-single-door-2-star-refrigerator/p/itm94b3e28837bae",
  },
  {
    name: "LG 668 L Frost Free Side by Side Refrigerator  with with Instaview and Smart ThinQ(WiFi Enabled)",
    category: "appliance",
    link: "https://www.flipkart.com/lg-668-l-frost-free-side-refrigerator-instaview-smart-thinq-wifi-enabled/p/itmey5j9kkwprz5q",
    current_price: 159990,
    original_price: 188990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kf5pzm80/refrigerator-new/u/h/v/gc-x247csav-na-lg-original-imafvzhh43ttygkz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-668-l-frost-free-side-refrigerator-instaview-smart-thinq-wifi-enabled/p/itmey5j9kkwprz5q",
  },
  {
    name: "Haier 460 L Frost Free Double Door Bottom Mount 3 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/haier-460-l-frost-free-double-door-bottom-mount-3-star-refrigerator/p/itmd9c0b750b2cf1",
    current_price: 48990,
    original_price: 79990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/i/1/b/hrb-4804ckg-1880-3-2022-91-haier-765-780-original-imaggazecezssz8f.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/haier-460-l-frost-free-double-door-bottom-mount-3-star-refrigerator/p/itmd9c0b750b2cf1",
  },
  {
    name: "Haier 346 L Frost Free Double Door Bottom Mount 3 Star Refrigerator",
    category: "appliance",
    link: "https://www.flipkart.com/haier-346-l-frost-free-double-door-bottom-mount-3-star-refrigerator/p/itm847be6d9fa6e2",
    current_price: 35990,
    original_price: 63100,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/w/h/6/hrb-3664cis-e-1700-3-2022-73-haier-730-690-original-imaggjqyea9c3kdj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/haier-346-l-frost-free-double-door-bottom-mount-3-star-refrigerator/p/itm847be6d9fa6e2",
  },
  {
    name: "LG 694 L Frost Free Side by Side Refrigerator  with Smart Inverter DoorCooling+, Hygiene Fresh+, Expre...",
    category: "appliance",
    link: "https://www.flipkart.com/lg-694-l-frost-free-side-refrigerator-smart-inverter-doorcooling-hygiene-fresh-express-freeze/p/itmd80a7e83e6ad7",
    current_price: 99990,
    original_price: 132199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/y/j/l/-original-imagg4gggmd27r8k.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-694-l-frost-free-side-refrigerator-smart-inverter-doorcooling-hygiene-fresh-express-freeze/p/itmd80a7e83e6ad7",
  },
  {
    name: "Haier 195 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer",
    category: "appliance",
    link: "https://www.flipkart.com/haier-195-l-direct-cool-single-door-5-star-refrigerator-base-drawer/p/itmb3aa00df33e58",
    current_price: 22300,
    original_price: 32700,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/refrigerator-new/l/u/b/hrd-1955pmg-f-1120-5-2021-30-haier-450-400-original-imaghqskvxqmxwss.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/haier-195-l-direct-cool-single-door-5-star-refrigerator-base-drawer/p/itmb3aa00df33e58",
  },
  {
    name: "Whirlpool 6.5 kg with Hard Water Wash Fully Automatic Top Load Grey",
    category: "appliance",
    link: "https://www.flipkart.com/whirlpool-6-5-kg-hard-water-wash-fully-automatic-top-load-grey/p/itm8e0af714c7be1",
    current_price: 14990,
    original_price: 17800,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kmwcuq80/washing-machine-new/l/b/3/wm-royal-6-5-genx-satin-grey-5ymw-whirlpool-original-imagfpfaxbgpdhet.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/whirlpool-6-5-kg-hard-water-wash-fully-automatic-top-load-grey/p/itm8e0af714c7be1",
  },
  {
    name: "Whirlpool 6.5 kg Magic Clean 5 Star Fully Automatic Top Load Grey",
    category: "appliance",
    link: "https://www.flipkart.com/whirlpool-6-5-kg-magic-clean-5-star-fully-automatic-top-load-grey/p/itma3ff8d43c91e2",
    current_price: 14990,
    original_price: 18450,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l52sivk0/washing-machine-new/e/c/g/-original-imagfttbqkcdrge7.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/whirlpool-6-5-kg-magic-clean-5-star-fully-automatic-top-load-grey/p/itma3ff8d43c91e2",
  },
  {
    name: "SAMSUNG 7 kg Inverter 5 Star with Eco Bubble Technology Washing Machine Fully Automatic Top Load Grey",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-7-kg-inverter-5-star-eco-bubble-technology-washing-machine-fully-automatic-top-load-grey/p/itmfad620b791ea9",
    current_price: 17990,
    original_price: 21500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/k/r/i/-original-imagh74bepfgefhz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-7-kg-inverter-5-star-eco-bubble-technology-washing-machine-fully-automatic-top-load-grey/p/itmfad620b791ea9",
  },
  {
    name: "SAMSUNG 6 kg 5 Star With Hygiene Steam and Ceramic Heater Fully Automatic Front Load with In-built Hea...",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-6-kg-5-star-hygiene-steam-ceramic-heater-fully-automatic-front-load-in-built-white/p/itm2ee8237807ed7",
    current_price: 22490,
    original_price: 26500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/r/m/6/-original-imagh74aqnaxugg9.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-6-kg-5-star-hygiene-steam-ceramic-heater-fully-automatic-front-load-in-built-white/p/itm2ee8237807ed7",
  },
  {
    name: "Haier 6.5 kg 5 Star Oceanus Wave Drum Washing Machine Fully Automatic Top Load Brown, Grey",
    category: "appliance",
    link: "https://www.flipkart.com/haier-6-5-kg-5-star-oceanus-wave-drum-washing-machine-fully-automatic-top-load-brown-grey/p/itm2c899989a92d7",
    current_price: 12990,
    original_price: 22000,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ko382a80/washing-machine-new/p/t/a/6-5-hwm65-fe-haier-original-imag2m7nrccjzyfn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/haier-6-5-kg-5-star-oceanus-wave-drum-washing-machine-fully-automatic-top-load-brown-grey/p/itm2c899989a92d7",
  },
  {
    name: "SAMSUNG 6.5 kg Inverter 5 star Wobble Technology Fully Automatic Top Load Silver",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-6-5-kg-inverter-5-star-wobble-technology-fully-automatic-top-load-silver/p/itm3adf84b1d3824",
    current_price: 15990,
    original_price: 26200,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/f/x/k/-original-imaghuw5khhyej9d.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-6-5-kg-inverter-5-star-wobble-technology-fully-automatic-top-load-silver/p/itm3adf84b1d3824",
  },
  {
    name: "SAMSUNG 7 kg Semi Automatic Top Load Grey, Purple",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-7-kg-semi-automatic-top-load-grey-purple/p/itm5c2eea1d02979",
    current_price: 10490,
    original_price: 13500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0h1g280/washing-machine-new/v/e/t/7-48-5-wt70m3000uu-tl-5-160-83-23-samsung-96-5-original-imagc99nuuhyspgh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-7-kg-semi-automatic-top-load-grey-purple/p/itm5c2eea1d02979",
  },
  {
    name: "Whirlpool 7 kg Magic Clean 5 Star Semi Automatic Top Load Black, Grey",
    category: "appliance",
    link: "https://www.flipkart.com/whirlpool-7-kg-magic-clean-5-star-semi-automatic-top-load-black-grey/p/itmee28cf6539c3f",
    current_price: 10240,
    original_price: 13600,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/m/n/m/-original-imaggsh27bvznsbz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/whirlpool-7-kg-magic-clean-5-star-semi-automatic-top-load-black-grey/p/itmee28cf6539c3f",
  },
  {
    name: "LG 7 kg 5 star rating and Wind jet dry Semi Automatic Top Load Grey, White",
    category: "appliance",
    link: "https://www.flipkart.com/lg-7-kg-5-star-rating-wind-jet-dry-semi-automatic-top-load-grey-white/p/itmc9d497e9b58bb",
    current_price: 11990,
    original_price: 14190,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kqzj7gw0/washing-machine-new/k/t/a/7-p7020ngay-lg-original-imag4vnghhh5qzhq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-7-kg-5-star-rating-wind-jet-dry-semi-automatic-top-load-grey-white/p/itmc9d497e9b58bb",
  },
  {
    name: "realme TechLife 7.5 kg 5 Star Rating Fabric Safe Wash Fully Automatic Top Load Grey",
    category: "appliance",
    link: "https://www.flipkart.com/realme-techlife-7-5-kg-5-star-rating-fabric-safe-wash-fully-automatic-top-load-grey/p/itm048aca1726a71",
    current_price: 13290,
    original_price: 19990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/kufuikw0/washing-machine-new/a/c/c/rmfa75a5g-realme-techlife-original-imag7k8dp5xfsmg4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-techlife-7-5-kg-5-star-rating-fabric-safe-wash-fully-automatic-top-load-grey/p/itm048aca1726a71",
  },
  {
    name: "IFB 7 kg 5 Star 2X Power Steam,Hard Water Wash Fully Automatic Front Load with In-built Heater White",
    category: "appliance",
    link: "https://www.flipkart.com/ifb-7-kg-5-star-2x-power-steam-hard-water-wash-fully-automatic-front-load-in-built-heater-white/p/itmae1b351a1f461",
    current_price: 26290,
    original_price: 32490,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/u/t/e/-original-imaghuqxghxndsn8.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/ifb-7-kg-5-star-2x-power-steam-hard-water-wash-fully-automatic-front-load-in-built-heater-white/p/itmae1b351a1f461",
  },
  {
    name: "InnoQ 7.5 kg Tubo Wash Technology with Jet Dryer Semi Automatic Top Load Maroon, White",
    category: "appliances",
    link: "https://www.flipkart.com/innoq-7-5-kg-tubo-wash-technology-jet-dryer-semi-automatic-top-load-maroon-white/p/itmd5f8b2bca6ce5",
    current_price: 6989,
    original_price: 18896,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/5/n/i/7-5-46-5-iq-turbo-p-0-400-78-5-18-inno-q-95-original-imaghnx8hkmgvdga.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/innoq-7-5-kg-tubo-wash-technology-jet-dryer-semi-automatic-top-load-maroon-white/p/itmd5f8b2bca6ce5",
  },
  {
    name: "Whirlpool 7 kg Magic Clean 5 Star Fully Automatic Top Load Grey",
    category: "appliance",
    link: "https://www.flipkart.com/whirlpool-7-kg-magic-clean-5-star-fully-automatic-top-load-grey/p/itm50fdb8ca1e478",
    current_price: 16040,
    original_price: 20250,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l52sivk0/washing-machine-new/j/p/x/-original-imagfttbwwvygntg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/whirlpool-7-kg-magic-clean-5-star-fully-automatic-top-load-grey/p/itm50fdb8ca1e478",
  },
  {
    name: "IFB 6 kg 5 Star 2X Power Steam,Hard Water Wash Fully Automatic Front Load with In-built Heater White",
    category: "appliance",
    link: "https://www.flipkart.com/ifb-6-kg-5-star-2x-power-steam-hard-water-wash-fully-automatic-front-load-in-built-heater-white/p/itm3bf21ef8dc5e7",
    current_price: 21990,
    original_price: 26390,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l37mtu80/washing-machine-new/m/d/s/-original-imagedm8qgrzh6fb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/ifb-6-kg-5-star-2x-power-steam-hard-water-wash-fully-automatic-front-load-in-built-heater-white/p/itm3bf21ef8dc5e7",
  },
  {
    name: "realme TechLife 7 kg with Semi Automatic Top Load White, Black",
    category: "appliance",
    link: "https://www.flipkart.com/realme-techlife-7-kg-semi-automatic-top-load-white-black/p/itmc94e124668ec6",
    current_price: 7990,
    original_price: 12490,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l37mtu80/washing-machine-new/n/i/n/-original-imagednhyxjeh8xc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/realme-techlife-7-kg-semi-automatic-top-load-white-black/p/itmc94e124668ec6",
  },
  {
    name: "InnoQ 7.8 kg Glass Top Finish Tubo Wash Technology with Jet Dryer Semi Automatic Top Load Black, White",
    category: "appliance",
    link: "https://www.flipkart.com/innoq-7-8-kg-glass-top-finish-tubo-wash-technology-jet-dryer-semi-automatic-load-black-white/p/itma7543b11679f2",
    current_price: 7299,
    original_price: 22990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/v/0/u/7-8-46-5-iq-turbo-g-0-400-78-5-20-5-inno-q-99-original-imaghnx9fuwh9adp.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/innoq-7-8-kg-glass-top-finish-tubo-wash-technology-jet-dryer-semi-automatic-load-black-white/p/itma7543b11679f2",
  },
  {
    name: "Thomson 6.5 kg with Semi Automatic Top Load Blue, White",
    category: "appliance",
    link: "https://www.flipkart.com/thomson-6-5-kg-semi-automatic-top-load-blue-white/p/itm3445d687b320d",
    current_price: 6990,
    original_price: 9999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/w/1/o/-original-imaghhhgwhmht6bg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/thomson-6-5-kg-semi-automatic-top-load-blue-white/p/itm3445d687b320d",
  },
  {
    name: "LG 8 kg With Steam Fully Automatic Front Load with In-built Heater Silver",
    category: "appliance",
    link: "https://www.flipkart.com/lg-8-kg-steam-fully-automatic-front-load-in-built-heater-silver/p/itm8a3d5f6632cce",
    current_price: 33990,
    original_price: 46990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0igvww0/washing-machine-new/l/a/h/-original-imagca64wfz6uttg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-8-kg-steam-fully-automatic-front-load-in-built-heater-silver/p/itm8a3d5f6632cce",
  },
  {
    name: "SAMSUNG 8 kg 5 Star With Hygiene Steam and Digital Inverter Fully Automatic Front Load with In-built H...",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-8-kg-5-star-hygiene-steam-digital-inverter-fully-automatic-front-load-in-built-heater-white/p/itmc178c749b4a47",
    current_price: 31990,
    original_price: 39500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/f/c/i/-original-imagh74beewuvkk7.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-8-kg-5-star-hygiene-steam-digital-inverter-fully-automatic-front-load-in-built-heater-white/p/itmc178c749b4a47",
  },
  {
    name: "LG 6.5 kg with Smart Diagnosis and Smart Inverter Fully Automatic Top Load Silver",
    category: "appliance",
    link: "https://www.flipkart.com/lg-6-5-kg-smart-diagnosis-inverter-fully-automatic-top-load-silver/p/itme4cacbedc1c8f",
    current_price: 16990,
    original_price: 18999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/h/b/t/-original-imagm92hgkshgwxt.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lg-6-5-kg-smart-diagnosis-inverter-fully-automatic-top-load-silver/p/itme4cacbedc1c8f",
  },
  {
    name: "ONIDA 6.2 kg Fully Automatic Top Load Grey",
    category: "appliance",
    link: "https://www.flipkart.com/onida-6-2-kg-fully-automatic-top-load-grey/p/itmfd4jcbym9btxx",
    current_price: 11790,
    original_price: 19990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/km2clu80/washing-machine-new/f/a/1/t62cgn-crystal-62-onida-original-imagffsh5zugj2gg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/onida-6-2-kg-fully-automatic-top-load-grey/p/itmfd4jcbym9btxx",
  },
  {
    name: "SAMSUNG 7 kg 5 Star With AI Control &amp; Wi-Fi and Digital Inverter Fully Automatic Front Load with In-bu...",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-7-kg-5-star-ai-control-wi-fi-digital-inverter-fully-automatic-front-load-in-built-heater-silver/p/itmb2a2336207b22",
    current_price: 32990,
    original_price: 40000,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/xif0q/washing-machine-new/m/j/8/-original-imagh74byzqhffgf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-7-kg-5-star-ai-control-wi-fi-digital-inverter-fully-automatic-front-load-in-built-heater-silver/p/itmb2a2336207b22",
  },
  {
    name: "MarQ by Flipkart 6 kg 5 Star Rating Semi Automatic Top Load White, Maroon",
    category: "appliance",
    link: "https://www.flipkart.com/marq-flipkart-6-kg-5-star-rating-semi-automatic-top-load-white-maroon/p/itm125a12d8f3fef",
    current_price: 7090,
    original_price: 10010,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/ku1k4280/washing-machine-new/r/t/x/mqsa60h5m-marq-by-flipkart-original-imag793fghyygmbg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/marq-flipkart-6-kg-5-star-rating-semi-automatic-top-load-white-maroon/p/itm125a12d8f3fef",
  },
  {
    name: "SAMSUNG 6.5 kg Semi Automatic Top Load Blue, Grey",
    category: "appliance",
    link: "https://www.flipkart.com/samsung-6-5-kg-semi-automatic-top-load-blue-grey/p/itm0a721af2722c5",
    current_price: 9970,
    original_price: 12500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/312/312/l0h1g280/washing-machine-new/u/s/k/6-5-45-wt65r2200ll-tl-5-180-75-19-samsung-93-original-imagc99nc4jrycxm.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/samsung-6-5-kg-semi-automatic-top-load-blue-grey/p/itm0a721af2722c5",
  },
  {
    name: "Paras Brown, Silver Rod Rail Bracket, Curtain Knobs",
    category: "home",
    link: "https://www.flipkart.com/paras-brown-silver-rod-rail-bracket-curtain-knobs/p/itm37936d15e1d98",
    current_price: 629,
    original_price: 2000,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/curtain-accessory/7/l/l/10-5-r21t-combo-paras-original-imaghp4ggdxxrubz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/paras-brown-silver-rod-rail-bracket-curtain-knobs/p/itm37936d15e1d98",
  },
  {
    name: "Goodrik 140 TC Cotton Double 3D Printed Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/goodrik-140-tc-cotton-double-3d-printed-flat-bedsheet/p/itm073e14b1620ec",
    current_price: 199,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kjg1jm80-0/bedsheet/i/5/b/3d-new-brown-pati-101-3d-new-brown-pati-101-flat-goodrik-original-imafzy9frv9qt8rn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/goodrik-140-tc-cotton-double-3d-printed-flat-bedsheet/p/itm073e14b1620ec",
  },
  {
    name: "aniket 180 TC Polycotton Double Printed Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/aniket-180-tc-polycotton-double-printed-flat-bedsheet/p/itm1eb2328ec7023",
    current_price: 208,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l111lzk0/bedsheet/w/m/k/22-1-11-flat-aniket-original-imagczfkkwabree6.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/aniket-180-tc-polycotton-double-printed-flat-bedsheet/p/itm1eb2328ec7023",
  },
  {
    name: "METRO LIVING 104 TC Cotton Double Animal Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/metro-living-104-tc-cotton-double-animal-flat-bedsheet/p/itm770f3c8a50f08",
    current_price: 299,
    original_price: 1299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kbfeljk0pkrrdj/bedroom-furnishing/b/7/c/drl259-metro-living-original-imafsuy6es3vetyz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/metro-living-104-tc-cotton-double-animal-flat-bedsheet/p/itm770f3c8a50f08",
  },
  {
    name: "DAKSHINA SWASTIK Front Loading Washing Machine  Cover",
    category: "home",
    link: "https://www.flipkart.com/dakshina-swastik-front-loading-washing-machine-cover/p/itmaeabbaaed6533",
    current_price: 349,
    original_price: 1199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k0vbgy80/appliance-cover/a/v/u/swmcfl-lg-03-swastik-original-imafkke7g6zkxsyt.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dakshina-swastik-front-loading-washing-machine-cover/p/itmaeabbaaed6533",
  },
  {
    name: "Angel Homes 144 TC Cotton Double Floral Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/angel-homes-144-tc-cotton-double-floral-flat-bedsheet/p/itmf0bcf597c5c91",
    current_price: 199,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l572ufk0/bedsheet/m/9/7/bedsheet-1-3093-flat-angel-homes-original-imagfx5g6xwfztwq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/angel-homes-144-tc-cotton-double-floral-flat-bedsheet/p/itmf0bcf597c5c91",
  },
  {
    name: "Sleepyhead Microfibre Solid Cushion Pack of 5",
    category: "home",
    link: "https://www.flipkart.com/sleepyhead-microfibre-solid-cushion-pack-5/p/itm5bb8042909530",
    current_price: 949,
    original_price: 1299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l3hmwsw0/pillow/h/t/m/cushion-filler-shcf1616so5gy-sleepyhead-original-imagehd4jzuhhku6.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/sleepyhead-microfibre-solid-cushion-pack-5/p/itm5bb8042909530",
  },
  {
    name: "Kanushi Industries Refrigerator  Cover",
    category: "home",
    link: "https://www.flipkart.com/kanushi-industries-refrigerator-cover/p/itm048917d63216d",
    current_price: 179,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l4ssfww0/appliance-cover/4/3/j/98-91-fri-tree-brown-combo-m-11-kanushi-industries-20-original-imagfmdspvyrsy3r.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/kanushi-industries-refrigerator-cover/p/itm048917d63216d",
  },
  {
    name: "Case Genie Front Loading Washing Machine  Cover",
    category: "home",
    link: "https://www.flipkart.com/case-genie-front-loading-washing-machine-cover/p/itmae7d49cb83df0",
    current_price: 349,
    original_price: 1199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jw0zr0w0/appliance-cover/v/y/z/swmcflb-05-swastik-original-imafgsv6fmagpqrx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/case-genie-front-loading-washing-machine-cover/p/itmae7d49cb83df0",
  },
  {
    name: "VAS COLLECTIONS Solid Double Dohar for  AC Room",
    category: "home",
    link: "https://www.flipkart.com/vas-collections-solid-double-dohar-ac-room/p/itmdfcc844279778",
    current_price: 1699,
    original_price: 4999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kkprmvk0/blanket/r/i/i/sherpa-flennel-blanket-pinksherpasb-1-1-vas-collections-original-imafzzxavmeqxgak.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vas-collections-solid-double-dohar-ac-room/p/itmdfcc844279778",
  },
  {
    name: "ROMAN REIGNS Polycotton Double Bed Cover",
    category: "home",
    link: "https://www.flipkart.com/roman-reigns-polycotton-double-bed-cover/p/itm8cd61f8509575",
    current_price: 285,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kehfi4w0pkrrdj-0/bedsheet/f/s/s/b-bs-elex-fab-original-imafv6gfgbnnjgmf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/roman-reigns-polycotton-double-bed-cover/p/itm8cd61f8509575",
  },
  {
    name: "METRO LIVING 104 TC Cotton Double Animal Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/metro-living-104-tc-cotton-double-animal-flat-bedsheet/p/itmbd12c25aea68c",
    current_price: 299,
    original_price: 1200,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kbfeljk0pkrrdj/bedroom-furnishing/b/7/c/drl259-metro-living-original-imafsuy6es3vetyz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/metro-living-104-tc-cotton-double-animal-flat-bedsheet/p/itmbd12c25aea68c",
  },
  {
    name: "CLOTHOLOGY 144 TC Cotton Double Printed Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/clothology-144-tc-cotton-double-printed-flat-bedsheet/p/itm3629a5c5e12ba",
    current_price: 329,
    original_price: 2999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/bedsheet/l/y/m/sky-doreamon-1-mk-79-flat-clothology-original-imaghhg8vfk2tdcy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clothology-144-tc-cotton-double-printed-flat-bedsheet/p/itm3629a5c5e12ba",
  },
  {
    name: "Fab Genie Front Loading Washing Machine  Cover",
    category: "home",
    link: "https://www.flipkart.com/fab-genie-front-loading-washing-machine-cover/p/itm898cc82c69594",
    current_price: 349,
    original_price: 1199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kyhlfgw0/appliance-cover/6/u/s/59-59-8-sp-tkt-fl-big-02-suitable-for-8kg-8-5-kg-9kg-9-5kg-10kg-original-imagapgj7bngdcpz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fab-genie-front-loading-washing-machine-cover/p/itm898cc82c69594",
  },
  {
    name: "CLOTHOLOGY 144 TC Cotton Double Printed Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/clothology-144-tc-cotton-double-printed-flat-bedsheet/p/itm1791d6f6c2826",
    current_price: 329,
    original_price: 2999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/bedsheet/l/y/m/sky-doreamon-1-mk-79-flat-clothology-original-imaghhg8vfk2tdcy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clothology-144-tc-cotton-double-printed-flat-bedsheet/p/itm1791d6f6c2826",
  },
  {
    name: "Decorum 144 TC Microfiber Double Printed Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/decorum-144-tc-microfiber-double-printed-flat-bedsheet/p/itmafe1c5283eec6",
    current_price: 199,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k687wy80/bedsheet/c/g/v/printed-bedsheet-for-double-bed-ar-double-279-flat-new-click-original-imafzpyfeqwfpgdr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/decorum-144-tc-microfiber-double-printed-flat-bedsheet/p/itmafe1c5283eec6",
  },
  {
    name: "Decorum 165 TC Cotton Double Cartoon Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/decorum-165-tc-cotton-double-cartoon-flat-bedsheet/p/itm12a5fbaeecfa6",
    current_price: 199,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l12h1u80/bedsheet/k/2/u/6bg-1-dc7-flat-decorum-original-imagcq2djrvfjnh4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/decorum-165-tc-cotton-double-cartoon-flat-bedsheet/p/itm12a5fbaeecfa6",
  },
  {
    name: "Fabicoo Fitted King Size Waterproof Mattress Cover",
    category: "home",
    link: "https://www.flipkart.com/fabicoo-fitted-king-size-waterproof-mattress-cover/p/itmf55eb494f61b8",
    current_price: 697,
    original_price: 1799,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k0cqqvk0/mattress-protector/d/d/p/wmp01-kiara-furnishing-original-imafk5p7bzpx552j.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fabicoo-fitted-king-size-waterproof-mattress-cover/p/itmf55eb494f61b8",
  },
  {
    name: "Flipkart SmartBuy Refrigerator  Cover",
    category: "home",
    link: "https://www.flipkart.com/flipkart-smartbuy-refrigerator-cover/p/itm3ef2b51bccb3a",
    current_price: 189,
    original_price: 599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l0jwbrk0/appliance-cover/0/o/7/0-25-55-fksb-p-42-ftc-hc1-l-2-fm4-flipkart-smartbuy-97-original-imagcb5xtknqf6s4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/flipkart-smartbuy-refrigerator-cover/p/itm3ef2b51bccb3a",
  },
  {
    name: "The Wholeseller Cotton 650 GSM Bath Towel",
    category: "home",
    link: "https://www.flipkart.com/wholeseller-cotton-650-gsm-bath-towel/p/itmea069afd24c4f",
    current_price: 175,
    original_price: 1099,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jsqe7bk0/bath-towel/h/y/9/essential-cotton-bath-towel-ws-sr-0001-the-wholeseller-original-imafe7zkpchkqpce.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/wholeseller-cotton-650-gsm-bath-towel/p/itmea069afd24c4f",
  },
  {
    name: "SSDN Black Polyester Table Linen Set",
    category: "home",
    link: "https://www.flipkart.com/ssdn-black-polyester-table-linen-set/p/itm6a9443b424e91",
    current_price: 425,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kcnp8y80/table-cover/r/d/d/dinningtc00701-1-dinningtc007001-creativehomes-original-imaftqkyks8mhncp.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/ssdn-black-polyester-table-linen-set/p/itm6a9443b424e91",
  },
  {
    name: "METRO LIVING 104 TC Cotton Double Printed Flat Bedsheet",
    category: "home",
    link: "https://www.flipkart.com/metro-living-104-tc-cotton-double-printed-flat-bedsheet/p/itm7efc97684bb15",
    current_price: 299,
    original_price: 1299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kbfeljk0/bedsheet/t/s/j/polka-bedsheet-drl460-flat-metro-living-original-imafsrw3hqymybeh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/metro-living-104-tc-cotton-double-printed-flat-bedsheet/p/itm7efc97684bb15",
  },
  {
    name: "FurnitureKraft Nancy Metal Queen Bed",
    category: "home",
    link: "https://www.flipkart.com/furniturekraft-nancy-metal-queen-bed/p/itm0590ef6d90857",
    current_price: 7590,
    original_price: 9399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/bed/7/e/l/-original-imagg387ke4eqxrr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/furniturekraft-nancy-metal-queen-bed/p/itm0590ef6d90857",
  },
  {
    name: "Flipkart Perfect Homes Carol Engineered Wood King Bed",
    category: "home",
    link: "https://www.flipkart.com/flipkart-perfect-homes-carol-engineered-wood-king-bed/p/itm4aa7e6df83edd",
    current_price: 13858,
    original_price: 27999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jz1l7rk0/bed/k/w/y/king-na-particle-board-bkwen00nhbs200p-flipkart-perfect-homes-original-imaf9m4fr7qjch62.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/flipkart-perfect-homes-carol-engineered-wood-king-bed/p/itm4aa7e6df83edd",
  },
  {
    name: "Bharat Lifestyle Amsterdam Engineered Wood Queen Bed",
    category: "home",
    link: "https://www.flipkart.com/bharat-lifestyle-amsterdam-engineered-wood-queen-bed/p/itm3d027d352b25b",
    current_price: 10199,
    original_price: 24999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l09w8sw0/bed/b/w/m/-original-imagc3rxvg6gqtap.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bharat-lifestyle-amsterdam-engineered-wood-queen-bed/p/itm3d027d352b25b",
  },
  {
    name: "KHODAL ENTERPRIZE MATT BLACK Wood Portable Laptop Table",
    category: "home",
    link: "https://www.flipkart.com/khodal-enterprize-matt-black-wood-portable-laptop-table/p/itm30709b1266d0b",
    current_price: 455,
    original_price: 1549,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/km57hjk0/portable-laptop-table/1/0/0/mfb-melamine-fiberboard-smart-multipurpose-foldable-laptop-table-original-imagf3quqce3dmwg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/khodal-enterprize-matt-black-wood-portable-laptop-table/p/itm30709b1266d0b",
  },
  {
    name: "EEMWAY Metal, Plastic Shoe Stand",
    category: "home",
    link: "https://www.flipkart.com/eemway-metal-plastic-shoe-stand/p/itmf7277ccb9c9ea",
    current_price: 708,
    original_price: 1999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k58hwnk0/shoe-rack/v/f/v/shoe-stand-6-eemway-original-imafnyyq6y6qd3b4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/eemway-metal-plastic-shoe-stand/p/itmf7277ccb9c9ea",
  },
  {
    name: "Bharat Lifestyle Amsterdam Engineered Wood King Bed",
    category: "home",
    link: "https://www.flipkart.com/bharat-lifestyle-amsterdam-engineered-wood-king-bed/p/itm94b2d435b6f95",
    current_price: 12689,
    original_price: 26999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l09w8sw0/bed/k/n/u/-original-imagc3rywzdyzzx2.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bharat-lifestyle-amsterdam-engineered-wood-king-bed/p/itm94b2d435b6f95",
  },
  {
    name: "ERAWUD Engineered Wood TV Entertainment Unit",
    category: "home",
    link: "https://www.flipkart.com/erawud-engineered-wood-tv-entertainment-unit/p/itmd45daef86a3f5",
    current_price: 1747,
    original_price: 2999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kyeqjrk0/tv-entertainment-unit/u/p/d/20-plywood-80-11-ew-tu-rs-bw32-erawud-black-60-32-original-imaganhdwxvjzuea.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/erawud-engineered-wood-tv-entertainment-unit/p/itmd45daef86a3f5",
  },
  {
    name: "ANIKAA WNT/WT Engineered Wood TV Entertainment Unit",
    category: "home",
    link: "https://www.flipkart.com/anikaa-wnt-wt-engineered-wood-tv-entertainment-unit/p/itm8ba363c18a22b",
    current_price: 4028,
    original_price: 10999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l3929ow0/tv-entertainment-unit/d/y/b/25-00-130-00-particle-board-18-ak-laura-wnt-wt-anikaa-112-00-43-original-imageet2hwhtpngy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/anikaa-wnt-wt-engineered-wood-tv-entertainment-unit/p/itm8ba363c18a22b",
  },
  {
    name: "Flipkart Perfect Homes Engineered Wood 3 Door Wardrobe",
    category: "home",
    link: "https://www.flipkart.com/flipkart-perfect-homes-engineered-wood-3-door-wardrobe/p/itm65e8674fec4ee",
    current_price: 12956,
    original_price: 22999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/wardrobe-closet/y/e/i/-original-imageygpwvnytsep.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/flipkart-perfect-homes-engineered-wood-3-door-wardrobe/p/itm65e8674fec4ee",
  },
  {
    name: "Flipkart Perfect Homes Webster TV Entertainment Unit",
    category: "home",
    link: "https://www.flipkart.com/flipkart-perfect-homes-webster-tv-entertainment-unit/p/itmeuvqdu8mbgfby",
    current_price: 15490,
    original_price: 19599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kx9as280/tv-entertainment-unit/8/t/j/-original-imag9r3g8nc2fygs.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/flipkart-perfect-homes-webster-tv-entertainment-unit/p/itmeuvqdu8mbgfby",
  },
  {
    name: "FLIPZON 12 Pair Metal, Plastic Shoe Stand",
    category: "home",
    link: "https://www.flipkart.com/flipzon-12-pair-metal-plastic-shoe-stand/p/itm1aabbedffa23d",
    current_price: 360,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/krwec280/shoe-rack/q/v/d/fshoerack-flipzon-black-white-original-imag5kwjknxqsazg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/flipzon-12-pair-metal-plastic-shoe-stand/p/itm1aabbedffa23d",
  },
  {
    name: "dbeautify Plastic Shoe Stand",
    category: "home",
    link: "https://www.flipkart.com/dbeautify-plastic-shoe-stand/p/itmf5c468d3fcc3a",
    current_price: 374,
    original_price: 1477,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ku1k4280/shoe-rack/x/s/q/30-66-1-2-4-layer-mate-s-k-store-maroon-132-original-imag79frdfwuzefw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dbeautify-plastic-shoe-stand/p/itmf5c468d3fcc3a",
  },
  {
    name: "Trevi Kyoto Engineered Wood Queen Bed",
    category: "home",
    link: "https://www.flipkart.com/trevi-kyoto-engineered-wood-queen-bed/p/itma26fb4f6af500",
    current_price: 12990,
    original_price: 34990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/bed/i/f/w/king-185-9-brown-no-201-1-particle-board-no-75-kyoto-baton-oak-original-imaggqjdcn229qsd.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/trevi-kyoto-engineered-wood-queen-bed/p/itma26fb4f6af500",
  },
  {
    name: "FurnitureKraft Nancy Metal King Bed",
    category: "home",
    link: "https://www.flipkart.com/furniturekraft-nancy-metal-king-bed/p/itm83d66b9d242c8",
    current_price: 9490,
    original_price: 10999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kr6oeq80/bed/a/p/u/king-na-wrought-iron-no-fk-db-4015-king-r-furniturekraft-dark-original-imag5ffjfg279mqv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/furniturekraft-nancy-metal-king-bed/p/itm83d66b9d242c8",
  },
  {
    name: "Flipkart Perfect Homes Carol Engineered Wood Queen Bed",
    category: "home",
    link: "https://www.flipkart.com/flipkart-perfect-homes-carol-engineered-wood-queen-bed/p/itm02e1763f2ca95",
    current_price: 10790,
    original_price: 13999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k687wy80/bed/f/g/u/king-na-particle-board-bkwen00nhbs200p-flipkart-perfect-homes-original-imafzqnfp58xjgjy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/flipkart-perfect-homes-carol-engineered-wood-queen-bed/p/itm02e1763f2ca95",
  },
  {
    name: "ERAWUD Engineered Wood TV Entertainment Unit",
    category: "home",
    link: "https://www.flipkart.com/erawud-engineered-wood-tv-entertainment-unit/p/itme9e8ec9e5304d",
    current_price: 3723,
    original_price: 5299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kyeqjrk0/tv-entertainment-unit/u/p/d/20-plywood-80-11-ew-tu-rs-bw32-erawud-black-60-32-original-imaganhdwxvjzuea.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/erawud-engineered-wood-tv-entertainment-unit/p/itme9e8ec9e5304d",
  },
  {
    name: "Waken 28 W Decorative B22 LED Bulb",
    category: "home",
    link: "https://www.flipkart.com/waken-28-w-decorative-b22-led-bulb/p/itm75d48136bb294",
    current_price: 254,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kubk70w0/bulb/e/t/l/1-mini-fan-blade-5-led-panels-waken-original-imag7gvtwerhpha7.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/waken-28-w-decorative-b22-led-bulb/p/itm75d48136bb294",
  },
  {
    name: "Peafowl Wholesale 1200 LEDs 10 m Blue Rice Lights",
    category: "home",
    link: "https://www.flipkart.com/peafowl-wholesale-1200-leds-10-m-blue-rice-lights/p/itm3e17e474c9faf",
    current_price: 469,
    original_price: 1299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k3g73bk0/rice-light/s/2/w/1-re-blue-rope-5meter-radiato-energy-original-imafjqh9rkunqccg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/peafowl-wholesale-1200-leds-10-m-blue-rice-lights/p/itm3e17e474c9faf",
  },
  {
    name: "Party Propz 20 LEDs 3.68 m Yellow Rice Lights",
    category: "home",
    link: "https://www.flipkart.com/party-propz-20-leds-3-68-m-yellow-rice-lights/p/itm8c35966ec10ac",
    current_price: 249,
    original_price: 1499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jw2f6vk0/rice-light/d/h/3/1-warm-battery-operated-led-photo-clip-remote-fairy-string-original-imafg5et9zfkhcrk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/party-propz-20-leds-3-68-m-yellow-rice-lights/p/itm8c35966ec10ac",
  },
  {
    name: "EVEREADY 10 W Standard B22 LED Bulb",
    category: "home",
    link: "https://www.flipkart.com/eveready-10-w-standard-b22-led-bulb/p/itm09b3cd626b76d",
    current_price: 650,
    original_price: 1990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/bulb/9/3/4/-original-imaggzwy6zhj8gyr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/eveready-10-w-standard-b22-led-bulb/p/itm09b3cd626b76d",
  },
  {
    name: "PHILIPS 10 W Standard B22 LED Bulb",
    category: "home",
    link: "https://www.flipkart.com/philips-10-w-standard-b22-led-bulb/p/itmb1603bdd9f822",
    current_price: 383,
    original_price: 800,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/bulb/z/4/p/-original-imagg5kedt7gah4g.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/philips-10-w-standard-b22-led-bulb/p/itmb1603bdd9f822",
  },
  {
    name: "Waken 40 W Decorative B22 LED Bulb",
    category: "home",
    link: "https://www.flipkart.com/waken-40-w-decorative-b22-led-bulb/p/itme025300c1a380",
    current_price: 368,
    original_price: 799,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k7assy80/bulb/y/h/y/rock-light-rl-8102-renmax-original-imafpkfxs9bg8ag3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/waken-40-w-decorative-b22-led-bulb/p/itme025300c1a380",
  },
  {
    name: "GLINTAC Wallchiere Wall Lamp With Bulb",
    category: "home",
    link: "https://www.flipkart.com/glintac-wallchiere-wall-lamp-bulb/p/itm04ca1eacf560d",
    current_price: 228,
    original_price: 699,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kl2mljk0/wall-lamp/j/r/q/2033-2w-arus-original-imagya5pzxwjgzzd.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/glintac-wallchiere-wall-lamp-bulb/p/itm04ca1eacf560d",
  },
  {
    name: "TIMEX Analog Watch  - For Women",
    category: "home",
    link: "https://www.flipkart.com/timex-analog-watch-women/p/itm222f43d8140ba",
    current_price: 1647,
    original_price: 2995,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/watch/u/e/u/-original-imaghfn26kgcdvvz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/timex-analog-watch-women/p/itm222f43d8140ba",
  },
  {
    name: "BRIGHT LIGHT ONLITE New 2in1 2 Mode 60W Torch",
    category: "home",
    link: "https://www.flipkart.com/bright-light-onlite-new-2in1-2-mode-60w-torch/p/itm7acdbdc89c767",
    current_price: 379,
    original_price: 3268,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/torch/l/y/q/-original-imaggr98gmggjunq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bright-light-onlite-new-2in1-2-mode-60w-torch/p/itm7acdbdc89c767",
  },
  {
    name: "Blissbells Uplight Wall Lamp With Bulb",
    category: "home",
    link: "https://www.flipkart.com/blissbells-uplight-wall-lamp-bulb/p/itma5c37b4f7fcde",
    current_price: 275,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kuu4x3k0/wall-lamp/f/s/n/2-way-up-down-wall-outdoor-light-blissbells-1-original-imag7vbhmesxy6cv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/blissbells-uplight-wall-lamp-bulb/p/itma5c37b4f7fcde",
  },
  {
    name: "LUMINX Wallchiere Wall Lamp With Bulb",
    category: "home",
    link: "https://www.flipkart.com/luminx-wallchiere-wall-lamp-bulb/p/itmc71cfdecfcd41",
    current_price: 501,
    original_price: 1199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kvlaaa80/wall-lamp/j/u/z/8-watt-wall-lamp-black-body-led-waterproof-indoor-outdoor-up-original-imag8gthzawwnfra.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/luminx-wallchiere-wall-lamp-bulb/p/itmc71cfdecfcd41",
  },
  {
    name: "ghar ki khushiya 50 W Decorative B22 LED Bulb",
    category: "home",
    link: "https://www.flipkart.com/ghar-ki-khushiya-50-w-decorative-b22-led-bulb/p/itm492de9f7ffdf1",
    current_price: 389,
    original_price: 1265,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmds4nk0/fridge-freezer-light-bulb/r/t/5/music-bulb-renuraj-creation-original-imagfazzy99jzmz3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/ghar-ki-khushiya-50-w-decorative-b22-led-bulb/p/itm492de9f7ffdf1",
  },
  {
    name: "Shri Girraj Ji Chandelier Ceiling Lamp",
    category: "home",
    link: "https://www.flipkart.com/shri-girraj-ji-chandelier-ceiling-lamp/p/itm45e9f517aece9",
    current_price: 499,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kdoup3k0/ceiling-lamp/b/r/h/cie10-shri-girraj-ji-original-imafugp9vvvfwzsa.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/shri-girraj-ji-chandelier-ceiling-lamp/p/itm45e9f517aece9",
  },
  {
    name: "Crosscut Furniture Tripod Floor lamp",
    category: "home",
    link: "https://www.flipkart.com/crosscut-furniture-tripod-floor-lamp/p/itmbe4afd496a584",
    current_price: 1499,
    original_price: 4990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/floor-lamp/z/5/a/52-mp3-1-crosscut-furniture-original-imagkd9ffgydy6xz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/crosscut-furniture-tripod-floor-lamp/p/itmbe4afd496a584",
  },
  {
    name: "Home Delight 138 LEDs 2.49 m Yellow Rice Lights",
    category: "home",
    link: "https://www.flipkart.com/home-delight-138-leds-2-49-m-yellow-rice-lights/p/itm63f814e62fba6",
    current_price: 431,
    original_price: 1200,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k0tw13k0/rice-light/m/g/c/1-hdrl-new-star-fountain-01-home-delight-original-imafkgpndnvguzsk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/home-delight-138-leds-2-49-m-yellow-rice-lights/p/itm63f814e62fba6",
  },
  {
    name: "LAYER'R SHOT DEEP DESIRE 135ml Body Spray  -  For Men",
    category: "babycare",
    link: "https://www.flipkart.com/layer-r-shotdeep-desire-135ml-body-spray-men/p/itm49084e2177ce4",
    current_price: 153,
    original_price: 215,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ke7ff680/deodorant/f/s/w/135-shot-deep-desire-135ml-body-spray-layer-r-men-original-imafux93v2rgaqyh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/layer-r-shotdeep-desire-135ml-body-spray-men/p/itm49084e2177ce4",
  },
  {
    name: "Cuddles - Super Pants Pant Style Diaper - M",
    category: "babycare",
    link: "https://www.flipkart.com/cuddles-super-pants-pant-style-diaper-m/p/itm995ae5bd70d77",
    current_price: 579,
    original_price: 1099,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/2/f/p/-original-imagjpyepvez9qhn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cuddles-super-pants-pant-style-diaper-m/p/itm995ae5bd70d77",
  },
  {
    name: "Bumtum Baby Pull-Up Diaper Pants Combo Pack - M",
    category: "babycare",
    link: "https://www.flipkart.com/bumtum-baby-pull-up-diaper-pants-combo-pack-m/p/itm53cf635d33a95",
    current_price: 947,
    original_price: 2198,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kidgnm80-0/diaper/b/w/t/m-baby-pull-up-diaper-pants-combo-pack-144-bumtum-original-imafy6myxuhdsvct.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bumtum-baby-pull-up-diaper-pants-combo-pack-m/p/itm53cf635d33a95",
  },
  {
    name: "Cuddles - Super Pants Pant Style Diaper - XL",
    category: "babycare",
    link: "https://www.flipkart.com/cuddles-super-pants-pant-style-diaper-xl/p/itm0183497112918",
    current_price: 579,
    original_price: 1099,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/s/g/q/-original-imagjpyeqcp6cmcj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cuddles-super-pants-pant-style-diaper-xl/p/itm0183497112918",
  },
  {
    name: "Bumtum Baby Pull-Up Diaper Pants - M",
    category: "babycare",
    link: "https://www.flipkart.com/bumtum-baby-pull-up-diaper-pants-m/p/itm49216409b7f92",
    current_price: 540,
    original_price: 1099,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kit6hzk0-0/diaper/n/w/g/m-baby-pull-up-diaper-pants-bumtum-original-imafyggfferunufv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bumtum-baby-pull-up-diaper-pants-m/p/itm49216409b7f92",
  },
  {
    name: "Cuddles - Super Pants Pant Style Diaper - L",
    category: "babycare",
    link: "https://www.flipkart.com/cuddles-super-pants-pant-style-diaper-l/p/itm8fa4fd73abbe1",
    current_price: 579,
    original_price: 1099,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/g/z/g/-original-imagjpye83jpfcr2.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cuddles-super-pants-pant-style-diaper-l/p/itm8fa4fd73abbe1",
  },
  {
    name: "Miss &amp; Chief Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/miss-chief-cotton-baby-bed-sized-bedding-set/p/itm2a48e217e8c6e",
    current_price: 999,
    original_price: 1999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kzn17680/bedding-set/2/m/s/baby-complete-daily-essentail-bedding-set-baby-bed-nest-set-pink-original-imagbhrvtzhpzdrr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/miss-chief-cotton-baby-bed-sized-bedding-set/p/itm2a48e217e8c6e",
  },
  {
    name: "BeyBee Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/beybee-cotton-baby-bed-sized-bedding-set/p/itm01978c6f1ef8c",
    current_price: 149,
    original_price: 199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmf7ki80/bedding-set/x/n/f/fast-dry-sheet-quick-original-baby-dry-sheet-baby-bed-bb-bedding-original-imagfbk9bc7yyugz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/beybee-cotton-baby-bed-sized-bedding-set/p/itm01978c6f1ef8c",
  },
  {
    name: "My New Born Velvet, Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/my-new-born-velvet-cotton-baby-bed-sized-bedding-set/p/itmfd4hyb4bg7ns3",
    current_price: 584,
    original_price: 1899,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/bedding-set/n/d/s/velvt-meow-kitty-baby-bed-baby-bedding-set-with-attractive-new-original-imagg7ekkgzgzzpg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/my-new-born-velvet-cotton-baby-bed-sized-bedding-set/p/itmfd4hyb4bg7ns3",
  },
  {
    name: "NOVEL Baby Wipes 80 Sheets pack of 3/with Lid",
    category: "babycare",
    link: "https://www.flipkart.com/novel-baby-wipes-80-sheets-pack-3-with-lid/p/itmdcf09fa5a2be3",
    current_price: 193,
    original_price: 585,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ky1vl3k0/wipe/c/b/c/baby-wipes-80-sheets-pack-with-lid-240-8906006350090-novel-original-imagadpnfuxhyhbt.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/novel-baby-wipes-80-sheets-pack-3-with-lid/p/itmdcf09fa5a2be3",
  },
  {
    name: "NOVEL Baby Wipes 80 Sheets pack of 5/with Lid",
    category: "babycare",
    link: "https://www.flipkart.com/novel-baby-wipes-80-sheets-pack-5-with-lid/p/itma15e129d6a605",
    current_price: 312,
    original_price: 1170,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ky1vl3k0/wipe/t/x/b/baby-wipes-80-sheets-pack-with-lid-400-8906006350090-novel-original-imagadpzgczhhpyc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/novel-baby-wipes-80-sheets-pack-5-with-lid/p/itma15e129d6a605",
  },
  {
    name: "NOVEL Baby Wipes 80 Sheets pack of 6/with Lid",
    category: "babycare",
    link: "https://www.flipkart.com/novel-baby-wipes-80-sheets-pack-6-with-lid/p/itm996af8ef79d5d",
    current_price: 362,
    original_price: 1170,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ky1vl3k0/wipe/z/n/w/baby-wipes-80-sheets-pack-with-lid-480-8906006350090-novel-original-imagadppanf97cdk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/novel-baby-wipes-80-sheets-pack-6-with-lid/p/itm996af8ef79d5d",
  },
  {
    name: "Oral-B Kids Extra Extra Soft Toothbrush",
    category: "babycare",
    link: "https://www.flipkart.com/oral-b-kids-extra-soft-toothbrush/p/itm5ef5965ec1f53",
    current_price: 50,
    original_price: 50,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/toothbrush/5/l/b/-original-imagg6jzwv7wzgzn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/oral-b-kids-extra-soft-toothbrush/p/itm5ef5965ec1f53",
  },
  {
    name: "Bumtum Baby Pull-Up Diaper Pants Combo Pack - L",
    category: "babycare",
    link: "https://www.flipkart.com/bumtum-baby-pull-up-diaper-pants-combo-pack-l/p/itm83ad2dc163196",
    current_price: 947,
    original_price: 2198,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kidgnm80-0/diaper/n/e/z/l-baby-pull-up-diaper-pants-combo-pack-124-bumtum-original-imafy6mnydnep3j8.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bumtum-baby-pull-up-diaper-pants-combo-pack-l/p/itm83ad2dc163196",
  },
  {
    name: "MamyPoko Extra Absorb - L",
    category: "babycare",
    link: "https://www.flipkart.com/mamypoko-extra-absorb-l/p/itmf0c632374e19f",
    current_price: 929,
    original_price: 1499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/z/l/h/-original-imaghvheeqwbjkex.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/mamypoko-extra-absorb-l/p/itmf0c632374e19f",
  },
  {
    name: "MamyPoko Standard - XL",
    category: "babycare",
    link: "https://www.flipkart.com/mamypoko-standard-xl/p/itm8fe383906fee5",
    current_price: 299,
    original_price: 399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/9/e/s/-original-imaghvheuqvasnfh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/mamypoko-standard-xl/p/itm8fe383906fee5",
  },
  {
    name: "MamyPoko Standard - M",
    category: "babycare",
    link: "https://www.flipkart.com/mamypoko-standard-m/p/itmee505da6883d8",
    current_price: 299,
    original_price: 399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/m/q/4/-original-imaghsjsvtsr4zmh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/mamypoko-standard-m/p/itmee505da6883d8",
  },
  {
    name: "Bumtum Baby Pull-Up Diaper Pants - S",
    category: "babycare",
    link: "https://www.flipkart.com/bumtum-baby-pull-up-diaper-pants-s/p/itm525c5ba83b8b3",
    current_price: 540,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kit6hzk0-0/diaper/3/h/q/s-baby-pull-up-diaper-pants-bumtum-original-imafyggygaghq6mu.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bumtum-baby-pull-up-diaper-pants-s/p/itm525c5ba83b8b3",
  },
  {
    name: "BeyBee Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/beybee-cotton-baby-bed-sized-bedding-set/p/itm35ae5227bcb53",
    current_price: 136,
    original_price: 199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmf7ki80/bedding-set/x/n/f/fast-dry-sheet-quick-original-baby-dry-sheet-baby-bed-bb-bedding-original-imagfbk9bc7yyugz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/beybee-cotton-baby-bed-sized-bedding-set/p/itm35ae5227bcb53",
  },
  {
    name: "BeyBee Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/beybee-cotton-baby-bed-sized-bedding-set/p/itm7900a011da492",
    current_price: 279,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmf7ki80/bedding-set/x/n/f/fast-dry-sheet-quick-original-baby-dry-sheet-baby-bed-bb-bedding-original-imagfbk9bc7yyugz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/beybee-cotton-baby-bed-sized-bedding-set/p/itm7900a011da492",
  },
  {
    name: "BeyBee Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/beybee-cotton-baby-bed-sized-bedding-set/p/itm16f0d84013cf5",
    current_price: 279,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmf7ki80/bedding-set/x/n/f/fast-dry-sheet-quick-original-baby-dry-sheet-baby-bed-bb-bedding-original-imagfbk9bc7yyugz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/beybee-cotton-baby-bed-sized-bedding-set/p/itm16f0d84013cf5",
  },
  {
    name: "HIMALAYA Diaper Rash Cream",
    category: "babycare",
    link: "https://www.flipkart.com/himalaya-diaper-rash-cream/p/itmeqd6swr2hvge3",
    current_price: 118,
    original_price: 130,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k6jnfrk0/body-skin-treatment/u/q/h/50-diaper-rash-cream-himalaya-original-imafzzeav329j4mh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-diaper-rash-cream/p/itmeqd6swr2hvge3",
  },
  {
    name: "MamyPoko Extra Absorb - M",
    category: "babycare",
    link: "https://www.flipkart.com/mamypoko-extra-absorb-m/p/itm502222f6310b0",
    current_price: 929,
    original_price: 1499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/v/q/k/-original-imaghvhdr2nr3etn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/mamypoko-extra-absorb-m/p/itm502222f6310b0",
  },
  {
    name: "Pampers Diaper Pants - M",
    category: "babycare",
    link: "https://www.flipkart.com/pampers-diaper-pants-m/p/itmdf9336a496e0a",
    current_price: 861,
    original_price: 1399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/l/8/5/-original-imaggmxvdgnvkwdv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pampers-diaper-pants-m/p/itmdf9336a496e0a",
  },
  {
    name: "MAMY POKO PANTS Standard Diapers Combo - L",
    category: "babycare",
    link: "https://www.flipkart.com/mamy-poko-pants-standard-diapers-combo-l/p/itm27822f9df9af5",
    current_price: 582,
    original_price: 798,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l45xea80/diaper/y/d/m/-original-imagf4k7hpnyf6yz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/mamy-poko-pants-standard-diapers-combo-l/p/itm27822f9df9af5",
  },
  {
    name: "Pampers Diaper Pants - S",
    category: "babycare",
    link: "https://www.flipkart.com/pampers-diaper-pants-s/p/itm3a25f2cb3aa90",
    current_price: 853,
    original_price: 1199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/diaper/y/f/l/-original-imagghphs5asf3ct.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pampers-diaper-pants-s/p/itm3a25f2cb3aa90",
  },
  {
    name: "Fareto Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/fareto-cotton-baby-bed-sized-bedding-set/p/itm290e5c788fb8e",
    current_price: 599,
    original_price: 1299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kltryq80/bedding-set/n/z/k/sleeping-nest-baby-bed-new-born-baby-daily-essentail-bedding-original-imagyugykvgfuhyz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fareto-cotton-baby-bed-sized-bedding-set/p/itm290e5c788fb8e",
  },
  {
    name: "BeyBee Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/beybee-cotton-baby-bed-sized-bedding-set/p/itma1ef325dda49a",
    current_price: 268,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmf7ki80/bedding-set/x/n/f/fast-dry-sheet-quick-original-baby-dry-sheet-baby-bed-bb-bedding-original-imagfbk9bc7yyugz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/beybee-cotton-baby-bed-sized-bedding-set/p/itma1ef325dda49a",
  },
  {
    name: "BeyBee Cotton Baby Bed Sized Bedding Set",
    category: "babycare",
    link: "https://www.flipkart.com/beybee-cotton-baby-bed-sized-bedding-set/p/itmb07c972cf9d34",
    current_price: 279,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmf7ki80/bedding-set/x/n/f/fast-dry-sheet-quick-original-baby-dry-sheet-baby-bed-bb-bedding-original-imagfbk9bc7yyugz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/beybee-cotton-baby-bed-sized-bedding-set/p/itmb07c972cf9d34",
  },
  {
    name: "Nestle Lactogen Infant Formula (Stage 1)",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-lactogen-infant-formula-stage-1/p/itmf768vyaxt7kjf",
    current_price: 415,
    original_price: 415,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/infant-formula/c/4/a/-original-imaghpz7btgrsddr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-lactogen-infant-formula-stage-1/p/itmf768vyaxt7kjf",
  },
  {
    name: "Sebamed Baby Cleansing Bar (150 g)",
    category: "babycare",
    link: "https://www.flipkart.com/sebamed-baby-cleansing-bar-150-g/p/itmewfh4madxsgfv",
    current_price: 349,
    original_price: 410,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kxf0jgw0/soap/p/o/q/1-150-baby-cleansing-bar-150-g-sebamed-original-imag9vkd2wpgv53n.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/sebamed-baby-cleansing-bar-150-g/p/itmewfh4madxsgfv",
  },
  {
    name: "Easum Rice and Moog Dal Baby Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/easum-rice-moog-dal-baby-cereal/p/itmfcfmnu7hmzarz",
    current_price: 315,
    original_price: 315,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kt1u3rk0/baby-cereal/6/p/d/rice-and-moog-dal-baby-easum-original-imag6hpneazpcu8c.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/easum-rice-moog-dal-baby-cereal/p/itmfcfmnu7hmzarz",
  },
  {
    name: "Nestle Cerelac Wheat Apple Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-cerelac-wheat-apple-cereal/p/itmeusrfdhchd3zv",
    current_price: 240,
    original_price: 240,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/baby-cereal/b/q/e/-original-imagjhggzff8b9qv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-cerelac-wheat-apple-cereal/p/itmeusrfdhchd3zv",
  },
  {
    name: "Nestle Cerelac 5 Grains &amp; Fruits Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-cerelac-5-grains-fruits-cereal/p/itmewxcscfr4wzwb",
    current_price: 312,
    original_price: 312,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/baby-cereal/l/k/o/-original-imagjhgjemvqhqcf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-cerelac-5-grains-fruits-cereal/p/itmewxcscfr4wzwb",
  },
  {
    name: "Nestle Cerelac Wheat-Rice Mixed Vegetable Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-cerelac-wheat-rice-mixed-vegetable-cereal/p/itmeu2fy9ehc8hsw",
    current_price: 295,
    original_price: 295,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/baby-cereal/5/r/f/-original-imagjhggkcfd9dfc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-cerelac-wheat-rice-mixed-vegetable-cereal/p/itmeu2fy9ehc8hsw",
  },
  {
    name: "Nestle Cerelac Multi Grain Dal Veg Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-cerelac-multi-grain-dal-veg-cereal/p/itmeu2fy9czmhmyh",
    current_price: 304,
    original_price: 304,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/baby-cereal/1/e/j/-original-imagjhggvwnbpmay.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-cerelac-multi-grain-dal-veg-cereal/p/itmeu2fy9czmhmyh",
  },
  {
    name: "GERBER Oatmeal Peach Apple Cereal - 227g (8oz) Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/gerber-oatmeal-peach-apple-cereal-227g-8oz/p/itmfak2s3zpy4yjw",
    current_price: 749,
    original_price: 749,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jpodaq80/baby-cereal/z/t/w/277-baby-peach-apple-cereal-gerber-original-imafakabugey62em.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/gerber-oatmeal-peach-apple-cereal-227g-8oz/p/itmfak2s3zpy4yjw",
  },
  {
    name: "Nestle Nestum Rice Fruit Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-nestum-rice-fruit-cereal/p/itmfb3bhheka6vzz",
    current_price: 209,
    original_price: 209,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kc29n680/baby-cereal/e/g/d/300-rice-fruits-nestle-nestum-original-imaft9uxq8szc66j.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-nestum-rice-fruit-cereal/p/itmfb3bhheka6vzz",
  },
  {
    name: "Nestle Cerelac Multigrain &amp; Fruits Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-cerelac-multigrain-fruits-cereal/p/itmeu2fysumuhwgg",
    current_price: 305,
    original_price: 305,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/baby-cereal/y/q/7/-original-imagjhgjgdsqh85z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-cerelac-multigrain-fruits-cereal/p/itmeu2fysumuhwgg",
  },
  {
    name: "SIMILAC Follow-up Formula (Stage 2)",
    category: "babycare",
    link: "https://www.flipkart.com/similac-follow-up-formula-stage-2/p/itmf3zy4kvwhyfyz",
    current_price: 415,
    original_price: 425,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/infant-formula/q/m/c/-original-imagmf4weztycyhh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/similac-follow-up-formula-stage-2/p/itmf3zy4kvwhyfyz",
  },
  {
    name: "SIMILAC Advance Infant Formula (Stage 1)",
    category: "babycare",
    link: "https://www.flipkart.com/similac-advance-infant-formula-stage-1/p/itmf3xzgrfy7zqqa",
    current_price: 715,
    original_price: 715,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/infant-formula/3/s/y/-original-imagmf4wt7ryz2vf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/similac-advance-infant-formula-stage-1/p/itmf3xzgrfy7zqqa",
  },
  {
    name: "Nestle Cerelac Wheat Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-cerelac-wheat-cereal/p/itmeu2fyhvfgczgj",
    current_price: 229,
    original_price: 229,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/baby-cereal/6/g/0/-original-imagjhggxfcvgfaq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-cerelac-wheat-cereal/p/itmeu2fyhvfgczgj",
  },
  {
    name: "GERBER Blueberry Puff 42g + Banana Puff 42 g Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/gerber-blueberry-puff-42g-banana-42-g-cereal/p/itmfbj5snrjksntr",
    current_price: 1099,
    original_price: 1099,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jp8ngcw0-1/baby-cereal/s/6/5/84-blueberry-puff-42g-banana-puff-42-g-gerber-original-imafbeefpekd26mw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/gerber-blueberry-puff-42g-banana-42-g-cereal/p/itmfbj5snrjksntr",
  },
  {
    name: "Nestle Nestum Rice Vegetables Cereal",
    category: "babycare",
    link: "https://www.flipkart.com/nestle-nestum-rice-vegetables-cereal/p/itmfb3bhy7hqfvzw",
    current_price: 195,
    original_price: 195,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/baby-cereal/g/f/3/-original-imaggfappjvv2uxb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nestle-nestum-rice-vegetables-cereal/p/itmfb3bhy7hqfvzw",
  },
  {
    name: "Aptamil Gold Follow up Infant Formula Powder ( Stage 3)",
    category: "babycare",
    link: "https://www.flipkart.com/aptamil-gold-follow-up-infant-formula-powder-stage-3/p/itm379a903617b86",
    current_price: 795,
    original_price: 795,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/infant-formula/s/1/z/-original-imaggtj5m8qntzd8.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/aptamil-gold-follow-up-infant-formula-powder-stage-3/p/itm379a903617b86",
  },
  {
    name: "SIMILAC Advance Follow-Up Formula (Stage 2)",
    category: "babycare",
    link: "https://www.flipkart.com/similac-advance-follow-up-formula-stage-2/p/itmey9b2btyyfe7x",
    current_price: 620,
    original_price: 645,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/infant-formula/h/w/h/-original-imagmf4wgqk3rz7t.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/similac-advance-follow-up-formula-stage-2/p/itmey9b2btyyfe7x",
  },
  {
    name: "DEXOLAC Special Care Infant Formula Powder",
    category: "babycare",
    link: "https://www.flipkart.com/dexolac-special-care-infant-formula-powder/p/itmfcfm7bbmgcztb",
    current_price: 535,
    original_price: 535,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kt1u3rk0/infant-formula/0/y/x/special-care-infant-formula-powder-dexolac-original-imag6hpnvukuyuap.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dexolac-special-care-infant-formula-powder/p/itmfcfm7bbmgcztb",
  },
  {
    name: "HIMALAYA Baby powder(200g), Baby cream(100g)",
    category: "babycare",
    link: "https://www.flipkart.com/himalaya-baby-powder-200g-cream-100g/p/itm5be19e1ec3341",
    current_price: 289,
    original_price: 295,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kesv0y80/baby-care-combo/x/f/f/baby-powder-200g-baby-cream-100g-2-hp200c100-himalaya-original-imafvdz8btadgdqf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-baby-powder-200g-cream-100g/p/itm5be19e1ec3341",
  },
  {
    name: "munix SL-1183 Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/munix-sl-1183-scissors/p/itmfgxgueq973ev2",
    current_price: 129,
    original_price: 176,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jwgple80/scissor/h/n/y/sl-1183-scissors-munix-original-imafh4ypw6hezpkv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/munix-sl-1183-scissors/p/itmfgxgueq973ev2",
  },
  {
    name: "munix SL-1183 Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/munix-sl-1183-scissors/p/itmfgxgueq973ev2",
    current_price: 145,
    original_price: 153,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jwgple80/scissor/h/n/y/sl-1183-scissors-munix-original-imafh4ypw6hezpkv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/munix-sl-1183-scissors/p/itmfgxgueq973ev2",
  },
  {
    name: "munix GL-2185 Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/munix-gl-2185-scissors/p/itmfgxgukskdhtgv",
    current_price: 151,
    original_price: 234,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jwgple80/scissor/h/k/e/gl-2185-scissors-munix-original-imafh4yzt8kgkxzf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/munix-gl-2185-scissors/p/itmfgxgukskdhtgv",
  },
  {
    name: "NAVNEET Youva Kids Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/navneet-youva-kids-scissors/p/itm647f9be7d071f",
    current_price: 95,
    original_price: 100,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ky90scw0/scissor/j/h/r/-original-imagagpnqrj4mftg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/navneet-youva-kids-scissors/p/itm647f9be7d071f",
  },
  {
    name: "munix GL 2170 Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/munix-gl-2170-scissors/p/itmfgxgu2g6gzubg",
    current_price: 153,
    original_price: 167,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k0h12fk0/scissor/y/c/y/gl-2170-scissors-munix-original-imafk92xgpzj8dkc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/munix-gl-2170-scissors/p/itmfgxgu2g6gzubg",
  },
  {
    name: "munix GL-2185 Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/munix-gl-2185-scissors/p/itmfgxgukskdhtgv",
    current_price: 204,
    original_price: 256,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jwgple80/scissor/h/k/e/gl-2185-scissors-munix-original-imafh4yzt8kgkxzf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/munix-gl-2185-scissors/p/itmfgxgukskdhtgv",
  },
  {
    name: "Maped Expert Asymmetrical Left Handed Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/maped-expert-asymmetrical-left-handed-scissors/p/itmf4p879euxdxhb",
    current_price: 233,
    original_price: 330,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jgpfs7k0/scissor/f/4/j/expert-asymmetrical-left-handed-expert-maped-original-imaf4vvkhxzghcvy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/maped-expert-asymmetrical-left-handed-scissors/p/itmf4p879euxdxhb",
  },
  {
    name: "StealODeal 10.5 Inch Gold Professional Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/stealodeal-10-5-inch-gold-professional-scissors/p/itmf2z8fgygmnfqp",
    current_price: 379,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jduk2vk0/scissor/z/9/k/10-5-inch-gold-professional-tailor-stealodeal-original-imaf2z8febrcbr8v.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/stealodeal-10-5-inch-gold-professional-scissors/p/itmf2z8fgygmnfqp",
  },
  {
    name: "StealODeal Zig Zag Scissors",
    category: "babycare",
    link: "https://www.flipkart.com/stealodeal-zig-zag-scissors/p/itmeem6ygzzzexrc",
    current_price: 342,
    original_price: 449,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/scissor/q/g/m/stealodeal-paper-zig-zag-original-imaeehwyh83u5g3e.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/stealodeal-zig-zag-scissors/p/itmeem6ygzzzexrc",
  },
  {
    name: "NOVEL Baby Wipes 80 Sheets pack of 3/with Lid",
    category: "babycare",
    link: "https://www.flipkart.com/novel-baby-wipes-80-sheets-pack-3-with-lid/p/itmdcf09fa5a2be3",
    current_price: 193,
    original_price: 585,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ky1vl3k0/wipe/c/b/c/baby-wipes-80-sheets-pack-with-lid-240-8906006350090-novel-original-imagadpnfuxhyhbt.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/novel-baby-wipes-80-sheets-pack-3-with-lid/p/itmdcf09fa5a2be3",
  },
  {
    name: "NOVEL Baby Wipes 80 Sheets pack of 5/with Lid",
    category: "babycare",
    link: "https://www.flipkart.com/novel-baby-wipes-80-sheets-pack-5-with-lid/p/itma15e129d6a605",
    current_price: 312,
    original_price: 1170,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ky1vl3k0/wipe/t/x/b/baby-wipes-80-sheets-pack-with-lid-400-8906006350090-novel-original-imagadpzgczhhpyc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/novel-baby-wipes-80-sheets-pack-5-with-lid/p/itma15e129d6a605",
  },
  {
    name: "NOVEL Baby Wipes 80 Sheets pack of 6/with Lid",
    category: "babycare",
    link: "https://www.flipkart.com/novel-baby-wipes-80-sheets-pack-6-with-lid/p/itm996af8ef79d5d",
    current_price: 362,
    original_price: 1170,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ky1vl3k0/wipe/z/n/w/baby-wipes-80-sheets-pack-with-lid-480-8906006350090-novel-original-imagadppanf97cdk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/novel-baby-wipes-80-sheets-pack-6-with-lid/p/itm996af8ef79d5d",
  },
  {
    name: "HIMALAYA Gentle Baby Wipes",
    category: "babycare",
    link: "https://www.flipkart.com/himalaya-gentle-baby-wipes/p/itmezhg7vkb5zgvy",
    current_price: 165,
    original_price: 200,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k7z3afk0/wipe/b/g/d/gentle-baby-wipes-72-gentle-baby-wipes-himalaya-original-imafq3ezc8ydxqfq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-gentle-baby-wipes/p/itmezhg7vkb5zgvy",
  },
  {
    name: "JOHNSON'S Baby Skincare Wipes",
    category: "babycare",
    link: "https://www.flipkart.com/johnson-s-baby-skincare-wipes/p/itm0fe36b795701a",
    current_price: 648,
    original_price: 1350,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kp2y2kw0/wipe/l/n/y/baby-wipes-skincare-cloth-wipes-jbwipes144b2g1-johnson-s-baby-original-imag3edqh446knru.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/johnson-s-baby-skincare-wipes/p/itm0fe36b795701a",
  },
  {
    name: "HIMALAYA Gentle Baby Wipes Mega Offer Pack (4 N X 72's)",
    category: "babycare",
    link: "https://www.flipkart.com/himalaya-gentle-baby-wipes-mega-offer-pack-4-n-x-72-s/p/itmb24a6288825a0",
    current_price: 554,
    original_price: 699,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kabe9ow0/wipe/2/z/h/gentle-baby-wipes-mega-offer-pack-4-n-x-72-s-4-7004206-himalaya-original-imafrwwpv7q8jj5d.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-gentle-baby-wipes-mega-offer-pack-4-n-x-72-s/p/itmb24a6288825a0",
  },
  {
    name: "HIMALAYA Gentle Baby Wipes",
    category: "babycare",
    link: "https://www.flipkart.com/himalaya-gentle-baby-wipes/p/itmb817de449491d",
    current_price: 245,
    original_price: 350,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k7z3afk0/wipe/b/g/d/gentle-baby-wipes-72-gentle-baby-wipes-himalaya-original-imafq3ezc8ydxqfq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-gentle-baby-wipes/p/itmb817de449491d",
  },
  {
    name: "Morisons Baby Dreams Baby Wipes 72s (Pack of 6)",
    category: "babycare",
    link: "https://www.flipkart.com/morisons-baby-dreams-wipes-72s-pack-6/p/itm19a5b96dc0522",
    current_price: 358,
    original_price: 594,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l2ghgnk0/wipe/p/t/i/baby-wipes-72s-pack-of-6-432-2001570-morisons-baby-dreams-original-imagdssbrhzfx92w.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/morisons-baby-dreams-wipes-72s-pack-6/p/itm19a5b96dc0522",
  },
  {
    name: "Buddsbuddy Combo of 5 Coconut Based Skincare Wet Wipes",
    category: "babycare",
    link: "https://www.flipkart.com/buddsbuddy-combo-5-coconut-based-skincare-wet-wipes/p/itm4a61fed172098",
    current_price: 335,
    original_price: 645,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kw5ag7k0/wipe/l/c/o/combo-of-5-coconut-based-skincare-wet-wipes-360-1011-5-original-imag8vtevupeuuev.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/buddsbuddy-combo-5-coconut-based-skincare-wet-wipes/p/itm4a61fed172098",
  },
  {
    name: "JOHNSON'S Baby Skincare Wipes",
    category: "babycare",
    link: "https://www.flipkart.com/johnson-s-baby-skincare-wipes/p/itm6005abbb56d2c",
    current_price: 430,
    original_price: 450,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kp2y2kw0/wipe/l/n/y/baby-wipes-skincare-cloth-wipes-jbwipes144b2g1-johnson-s-baby-original-imag3edqh446knru.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/johnson-s-baby-skincare-wipes/p/itm6005abbb56d2c",
  },
  {
    name: "Lakmé Insta-Ready Kit Bronze",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-insta-ready-kit-bronze/p/itme55522c356ea7",
    current_price: 375,
    original_price: 550,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l51d30w0/kajal/7/v/v/30-insta-ready-kit-bronze-lakme-original-imagft23uaxww5mu.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-insta-ready-kit-bronze/p/itme55522c356ea7",
  },
  {
    name: "Lakmé Ananya�s Eyeconic�Makeup�Kit",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-ananyas-eyeconicmakeupkit/p/itm5ef9e9b776355",
    current_price: 655,
    original_price: 925,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kajal/g/2/x/-original-imagkzhtcwtg3emj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-ananyas-eyeconicmakeupkit/p/itm5ef9e9b776355",
  },
  {
    name: "Lakmé Eyeconic Kajal Pencil",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-eyeconic-kajal-pencil/p/itmegzvrqfgzfbez",
    current_price: 175,
    original_price: 185,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l2jcccw0/kajal/t/w/a/-original-imagduwut8urzemd.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-eyeconic-kajal-pencil/p/itmegzvrqfgzfbez",
  },
  {
    name: "Lakmé Eyeconic Kajal Twin Pack",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-eyeconic-kajal-twin-pack/p/itmf9edrxqnh8rhs",
    current_price: 283,
    original_price: 340,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kajal/u/z/q/-original-imaggdynczfj9pbt.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-eyeconic-kajal-twin-pack/p/itmf9edrxqnh8rhs",
  },
  {
    name: "MAYBELLINE NEW YORK Colossal Eyeliner 3 ml",
    category: "beauty",
    link: "https://www.flipkart.com/maybelline-new-york-colossal-eyeliner-3-ml/p/itmfghd69sqysbtv",
    current_price: 142,
    original_price: 249,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jx3kn0w0/eye-liner/9/8/e/3-colossal-eyeliner-maybelline-new-york-original-imafgyrysym4jydy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/maybelline-new-york-colossal-eyeliner-3-ml/p/itmfghd69sqysbtv",
  },
  {
    name: "Vaseline Lip Balm Original",
    category: "beauty",
    link: "https://www.flipkart.com/vaseline-lip-balm-original/p/itm47b8692d8183b",
    current_price: 221,
    original_price: 249,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kruyw7k0/lip-cream/3/7/t/17-lip-tins-original-care-vaseline-original-imag5kaunmmbcm3z.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vaseline-lip-balm-original/p/itm47b8692d8183b",
  },
  {
    name: "MAYBELLINE NEW YORK Colossal Kajal pack of 2",
    category: "beauty",
    link: "https://www.flipkart.com/maybelline-new-york-colossal-kajal-pack-2/p/itmba02210e98de0",
    current_price: 229,
    original_price: 360,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kajal/h/k/e/-original-imagkkzfzy6ygef5.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/maybelline-new-york-colossal-kajal-pack-2/p/itmba02210e98de0",
  },
  {
    name: "MARS Ultra Curl Long lasting Fabulash Mascara 12 ml",
    category: "beauty",
    link: "https://www.flipkart.com/mars-ultra-curl-long-lasting-fabulash-mascara-12-ml/p/itmf09463b56f9b5",
    current_price: 162,
    original_price: 199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ki96c280/mascara/t/p/k/12-ultra-curl-long-lasting-fabulash-mascara-mars-original-imafy36zc4yhqenb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/mars-ultra-curl-long-lasting-fabulash-mascara-12-ml/p/itmf09463b56f9b5",
  },
  {
    name: "Renee Black Magic PH Stick - Madness, 3g",
    category: "beauty",
    link: "https://www.flipkart.com/renee-black-magic-ph-stick-madness-3g/p/itmd42606b32dbc4",
    current_price: 399,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kzblocw0/lipstick/u/y/n/3-black-magic-ph-stick-madness-3g-renee-original-imagbczrk9qwhzta.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/renee-black-magic-ph-stick-madness-3g/p/itmd42606b32dbc4",
  },
  {
    name: "MAYBELLINE NEW YORK Hypercurl Mascara Washable 9.2 ml",
    category: "beauty",
    link: "https://www.flipkart.com/maybelline-new-york-hypercurl-mascara-washable-9-2-ml/p/itm9895a35367f30",
    current_price: 274,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/khwbde80/mascara/t/j/t/9-2-hypercurl-mascara-washable-maybelline-new-york-original-imafxt6ucwyfgvaf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/maybelline-new-york-hypercurl-mascara-washable-9-2-ml/p/itm9895a35367f30",
  },
  {
    name: "Lakmé Perfect Liquid  Foundation",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-perfect-liquid-foundation/p/itm759b3918a38d6",
    current_price: 136,
    original_price: 180,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jvzkb680/foundation/m/e/5/27-perfect-liquid-foundation-lakme-original-imafgrqahfvfd5zs.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-perfect-liquid-foundation/p/itm759b3918a38d6",
  },
  {
    name: "Sh.Huda 12 pc set Liquid matte lipstick",
    category: "beauty",
    link: "https://www.flipkart.com/sh-huda-12-pc-set-liquid-matte-lipstick/p/itm252d2bbb05cfe",
    current_price: 307,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l0o6nbk0/lipstick/b/q/h/60-12-pc-set-liquid-matte-lipstick-sh-huda-original-imagcdzdktgfdhkg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/sh-huda-12-pc-set-liquid-matte-lipstick/p/itm252d2bbb05cfe",
  },
  {
    name: "SUGAR POP Longwear Kajal - 01 Black",
    category: "beauty",
    link: "https://www.flipkart.com/sugar-pop-longwear-kajal-01-black/p/itm8f531740d636e",
    current_price: 161,
    original_price: 179,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/kajal/x/f/1/0-3-longwear-kajal-01-black-sugar-pop-original-imagkfybmnbhf3fg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/sugar-pop-longwear-kajal-01-black/p/itm8f531740d636e",
  },
  {
    name: "SUGAR POP Nourishing Lip Balm - 02 Cherry Cherry",
    category: "beauty",
    link: "https://www.flipkart.com/sugar-pop-nourishing-lip-balm-02-cherry/p/itma73d62e042d39",
    current_price: 134,
    original_price: 149,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/lip-balm/3/z/w/4-5-nourishing-lip-balm-02-cherry-1-sugar-pop-original-imagjt972ujz3tay.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/sugar-pop-nourishing-lip-balm-02-cherry/p/itma73d62e042d39",
  },
  {
    name: "Lakmé Eyeconic Liquid Eyeliner 4.5 ml",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-eyeconic-liquid-eyeliner-4-5-ml/p/itm6dc323d40988b",
    current_price: 219,
    original_price: 260,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kh0vonk0/eye-liner/y/y/g/4-5-eyeconic-liquid-eyeliner-lakme-original-imafx4pksk6mcz4p.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-eyeconic-liquid-eyeliner-4-5-ml/p/itm6dc323d40988b",
  },
  {
    name: "L'Oréal Paris Paris Kajal Magique",
    category: "beauty",
    link: "https://www.flipkart.com/l-oral-paris-kajal-magique/p/itm3862cf5fd9f59",
    current_price: 254,
    original_price: 299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k0463rk0/kajal/f/g/8/0-35-magique-kajal-l-oreal-paris-original-imafjzaa4g6wqxyx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/l-oral-paris-kajal-magique/p/itm3862cf5fd9f59",
  },
  {
    name: "Lakmé 9 to 5 Complexion Care CC Cream Foundation",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-9-5-complexion-care-cc-cream-foundation/p/itm658e13bfc3c55",
    current_price: 291,
    original_price: 360,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/khqllzk0/foundation/9/f/g/30-9-to-5-complexion-care-cc-cream-lakme-original-imafxzwczyqsc2gu.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-9-5-complexion-care-cc-cream-foundation/p/itm658e13bfc3c55",
  },
  {
    name: "MAYBELLINE NEW YORK Sensational Liquid Matte PO3",
    category: "beauty",
    link: "https://www.flipkart.com/maybelline-new-york-sensational-liquid-matte-po3/p/itm335dd71905e33",
    current_price: 677,
    original_price: 1047,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kql8sy80/lipstick/7/m/y/21-sara-s-favorite-sensational-liquid-matte-pack-of-3-touch-of-original-imag4kgnbmynydnw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/maybelline-new-york-sensational-liquid-matte-po3/p/itm335dd71905e33",
  },
  {
    name: "Dabur Vatika Naturals Ayurvedic Shampoo Damage Therapy",
    category: "beauty",
    link: "https://www.flipkart.com/dabur-vatika-naturals-ayurvedic-shampoo-damage-therapy/p/itm3ef1637225e27",
    current_price: 341,
    original_price: 525,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ku1k4280/shampoo/x/h/a/vatika-naturals-ayurvedic-shampoo-damage-therapy-dabur-original-imag79y68hsfzzym.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dabur-vatika-naturals-ayurvedic-shampoo-damage-therapy/p/itm3ef1637225e27",
  },
  {
    name: "Cetaphil Oily Skin Cleanser",
    category: "beauty",
    link: "https://www.flipkart.com/cetaphil-oily-skin-cleanser/p/itmeyfg5hdgxcrre",
    current_price: 463,
    original_price: 545,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/cleanser/j/o/o/-original-imagkrhamcjwgb44.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cetaphil-oily-skin-cleanser/p/itmeyfg5hdgxcrre",
  },
  {
    name: "Cetaphil Gentle Skin Cleanser 1 Lit",
    category: "beauty",
    link: "https://www.flipkart.com/cetaphil-gentle-skin-cleanser-1-lit/p/itmfdadzrwcsz76r",
    current_price: 1064,
    original_price: 1245,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l4x2rgw0/cleanser/p/n/c/1000-gentle-skin-cleanser-1-lt-for-all-skin-type-cetaphil-original-imagfppkn3pjc3ga.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cetaphil-gentle-skin-cleanser-1-lit/p/itmfdadzrwcsz76r",
  },
  {
    name: "The Derma Co Creamy Cleanser for Sensitive Skin",
    category: "beauty",
    link: "https://www.flipkart.com/derma-co-creamy-cleanser-sensitive-skin/p/itm7994733050976",
    current_price: 224,
    original_price: 249,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kr9jafk0/cleanser/n/p/w/creamy-cleanser-for-sensitive-skin-the-derma-co-original-imag53huzzufcrfh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/derma-co-creamy-cleanser-sensitive-skin/p/itm7994733050976",
  },
  {
    name: "VEGA Paddle Brush",
    category: "beauty",
    link: "https://www.flipkart.com/vega-paddle-brush/p/itme2quq7efwmwpx",
    current_price: 299,
    original_price: 299,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l1l1rww0/hair-brush/s/d/d/-original-imagd46qkqj5brht.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vega-paddle-brush/p/itme2quq7efwmwpx",
  },
  {
    name: "Wild Stone Code Chrome Combo Body Spray  -  For Men",
    category: "beauty",
    link: "https://www.flipkart.com/wild-stone-code-chrome-combo-body-spray-men/p/itm927c05467ac02",
    current_price: 371,
    original_price: 598,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/km9ht3k0/deodorant/b/y/j/300-code-chrome-combo-2-body-spray-wild-stone-men-original-imagf796vhhsxdn2.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/wild-stone-code-chrome-combo-body-spray-men/p/itm927c05467ac02",
  },
  {
    name: "NIVEA Men Dark Spot Reduction Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/nivea-men-dark-spot-reduction-face-wash/p/itm838d4ca8bfdbe",
    current_price: 168,
    original_price: 225,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kxf0jgw0/face-wash/x/p/y/-original-imag9vrgthxkt3mk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivea-men-dark-spot-reduction-face-wash/p/itm838d4ca8bfdbe",
  },
  {
    name: "FOGG Scent Perfume, Xtermo Eau de Parfum  -  50 ml",
    category: "beauty",
    link: "https://www.flipkart.com/fogg-scent-perfume-xtermo-eau-de-parfum-50-ml/p/itm5a8bf269cc9ac",
    current_price: 221,
    original_price: 399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kpcy5jk0/perfume/j/q/n/scent-xtermo-50ml-eau-de-parfum-fogg-men-original-imag3m22cjgyzazs.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fogg-scent-perfume-xtermo-eau-de-parfum-50-ml/p/itm5a8bf269cc9ac",
  },
  {
    name: "BIOTIQUE Bio Honey Gel Cleanser",
    category: "beauty",
    link: "https://www.flipkart.com/biotique-bio-honey-gel-cleanser/p/itmef3fzvtrpsq4u",
    current_price: 111,
    original_price: 149,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jq2np8w0/cleanser/q/a/w/120-bio-honey-gel-cleanser-biotique-original-imafc646de6zbyrg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/biotique-bio-honey-gel-cleanser/p/itmef3fzvtrpsq4u",
  },
  {
    name: "Cetaphil Bright Healthy Radiance Reveal Creamy Cleanser",
    category: "beauty",
    link: "https://www.flipkart.com/cetaphil-bright-healthy-radiance-reveal-creamy-cleanser/p/itmf476f8f1e5de8",
    current_price: 602,
    original_price: 700,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l4vnbm80/cleanser/m/w/0/100-bright-healthy-radiance-reveal-creamy-cleanser-cetaphil-original-imagfzj3vbxyrfmy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cetaphil-bright-healthy-radiance-reveal-creamy-cleanser/p/itmf476f8f1e5de8",
  },
  {
    name: "Dr. Batra's Natural Cleansing Milk",
    category: "beauty",
    link: "https://www.flipkart.com/dr-batra-s-natural-cleansing-milk/p/itmezwn32yzhgzgs",
    current_price: 136,
    original_price: 260,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/cleanser/y/n/g/dr-batra-200-natural-cleansing-milk-original-imaebnsf7k3qg2gh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dr-batra-s-natural-cleansing-milk/p/itmezwn32yzhgzgs",
  },
  {
    name: "FOGG Scent Impressio Eau de Parfum  -  100 ml",
    category: "beauty",
    link: "https://www.flipkart.com/fogg-scent-impressio-eau-de-parfum-100-ml/p/itmf96jec24hfqv6",
    current_price: 344,
    original_price: 650,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/perfume/v/z/i/-original-imagfhk8v5p8hdc2.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fogg-scent-impressio-eau-de-parfum-100-ml/p/itmf96jec24hfqv6",
  },
  {
    name: "Nat Habit Original Pumice Foot Rub | Single Pack",
    category: "beauty",
    link: "https://www.flipkart.com/nat-habit-original-pumice-foot-rub-single-pack/p/itm8ce54a5acb24e",
    current_price: 174,
    original_price: 180,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/pumice-stone/t/i/r/original-pumice-foot-rub-twin-pack-ac-pfr-ps-nat-habit-original-imaggczyavqqrysj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nat-habit-original-pumice-foot-rub-single-pack/p/itm8ce54a5acb24e",
  },
  {
    name: "HIMALAYA Purifying Neem Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/himalaya-purifying-neem-face-wash/p/itmf3vd96yywdfuy",
    current_price: 262,
    original_price: 375,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kj7gwi80-0/face-wash/4/i/e/purifying-neem-himalaya-original-imafytqnaj5f9htm.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-purifying-neem-face-wash/p/itmf3vd96yywdfuy",
  },
  {
    name: "Lakmé Perfect Radiance Intense Brightening  Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-perfect-radiance-intense-brightening-face-wash/p/itm628c689afde30",
    current_price: 262,
    original_price: 350,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/face-wash/e/x/r/100-perfect-radiance-intense-brightening-face-wash-lakme-original-imagh6ebrp3sxzpy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-perfect-radiance-intense-brightening-face-wash/p/itm628c689afde30",
  },
  {
    name: "Clean &amp; Clear Oil Free Foaming Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/clean-clear-oil-free-foaming-face-wash/p/itmfgpcth2cfesr7",
    current_price: 336,
    original_price: 420,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k98tdow0/face-wash/f/6/d/300-oil-free-foaming-clean-clear-original-imafr2pxsk9gzzpg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clean-clear-oil-free-foaming-face-wash/p/itmfgpcth2cfesr7",
  },
  {
    name: "Clean &amp; Clear Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/clean-clear-face-wash/p/itm799e7e96c238b",
    current_price: 334,
    original_price: 540,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kjkbv680-0/face-wash/l/r/7/450-face-wash-clean-clear-original-imafz3hz4fgwhfnf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clean-clear-face-wash/p/itm799e7e96c238b",
  },
  {
    name: "Clean &amp; Clear Facewash Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp",
    current_price: 419,
    original_price: 599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l09w8sw0/face-wash/s/k/o/-original-imagc3y28zjhj8ed.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clean-clear-facewash-face-wash/p/itmf3vdarf3bwrbp",
  },
  {
    name: "Pond's Men Energy Bright Facewash Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/pond-s-men-energy-bright-facewash-face-wash/p/itmd31cbf7f25e43",
    current_price: 231,
    original_price: 420,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/face-wash/c/6/q/150-energy-bright-facewash-ponds-men-original-imaggcyhkrgvs8z3.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pond-s-men-energy-bright-facewash-face-wash/p/itmd31cbf7f25e43",
  },
  {
    name: "POND's Bright Beauty Spot-less glow Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/pond-s-bright-beauty-spot-less-glow-face-wash/p/itma67d5eb3e2e43",
    current_price: 175,
    original_price: 175,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l1whaq80/face-wash/0/c/k/-original-imagdd3e4cegnsyy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pond-s-bright-beauty-spot-less-glow-face-wash/p/itma67d5eb3e2e43",
  },
  {
    name: "NIVEA Acne Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/nivea-acne-face-wash/p/itm72d77f0aa0b1a",
    current_price: 179,
    original_price: 398,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l3xcr680/face-wash/d/r/n/-original-imageyfn7kxggqcz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivea-acne-face-wash/p/itm72d77f0aa0b1a",
  },
  {
    name: "moochtec Ocean  Men All Skin Types Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/moochtec-ocean-men-all-skin-types-face-wash/p/itmbd1416a6b4fcd",
    current_price: 203,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/face-wash/x/w/m/100-ocean-face-wash-moochtec-original-imagj2gpfhtgguds.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/moochtec-ocean-men-all-skin-types-face-wash/p/itmbd1416a6b4fcd",
  },
  {
    name: "Everyuth Naturals Tulsi Turmeric Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/everyuth-naturals-tulsi-turmeric-face-wash/p/itmfehr5wrspygsj",
    current_price: 90,
    original_price: 165,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/face-wash/5/v/c/-original-imagkpjfu97xskkr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/everyuth-naturals-tulsi-turmeric-face-wash/p/itmfehr5wrspygsj",
  },
  {
    name: "NIVEA Men Dark Spot Reduction Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/nivea-men-dark-spot-reduction-face-wash/p/itm838d4ca8bfdbe",
    current_price: 168,
    original_price: 225,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kxf0jgw0/face-wash/x/p/y/-original-imag9vrgthxkt3mk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivea-men-dark-spot-reduction-face-wash/p/itm838d4ca8bfdbe",
  },
  {
    name: "NIVEA Milk Delights Moisturizing Honey Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/nivea-milk-delights-moisturizing-honey-face-wash/p/itmfdf7ucgujwqtr",
    current_price: 185,
    original_price: 370,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kuof5ow0/face-wash/d/a/n/milk-delights-moisturizing-honey-nivea-original-imag7qvhgmu8ffgb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivea-milk-delights-moisturizing-honey-face-wash/p/itmfdf7ucgujwqtr",
  },
  {
    name: "Lakmé Blush and Glow Strawberry Gel Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-blush-glow-strawberry-gel-face-wash/p/itmf84jgvg7eegqg",
    current_price: 180,
    original_price: 240,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kuk4u4w0/face-wash/0/f/6/blush-and-glow-strawberry-gel-lakme-original-imag7npwgyerhe8p.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-blush-glow-strawberry-gel-face-wash/p/itmf84jgvg7eegqg",
  },
  {
    name: "Simple Kind To Skin Refreshing Facial Wash Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/simple-kind-skin-refreshing-facial-wash-face/p/itmfh8cen4vuwzyh",
    current_price: 269,
    original_price: 385,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kuk4u4w0/cleanser/c/u/f/kind-to-skin-refreshing-facial-wash-simple-original-imag7npwfuzufsjk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/simple-kind-skin-refreshing-facial-wash-face/p/itmfh8cen4vuwzyh",
  },
  {
    name: "Dr. Batra's Instant Glow , 200g Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/dr-batra-s-instant-glow-200g-face-wash/p/itm1519dedebc543",
    current_price: 129,
    original_price: 350,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kf5pzm80/face-wash/g/m/h/200-instant-glow-face-wash-200g-dr-batra-s-original-imafvzf3aznhqt5q.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dr-batra-s-instant-glow-200g-face-wash/p/itm1519dedebc543",
  },
  {
    name: "Lakmé Blush and Glow Kiwi Crush Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/lakm-blush-glow-kiwi-crush-face-wash/p/itmffgy6gnbxr2jc",
    current_price: 187,
    original_price: 250,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jucz98w0/face-wash/g/f/z/100-blush-and-glow-kiwi-crush-lakme-original-imaffgf9hvrkxgjk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lakm-blush-glow-kiwi-crush-face-wash/p/itmffgy6gnbxr2jc",
  },
  {
    name: "MUUCHSTAC Ocean  Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/muuchstac-ocean-face-wash/p/itmf52a14429dc29",
    current_price: 275,
    original_price: 299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ksm49e80/face-wash/h/y/l/100-ocean-face-wash-muuchstac-original-imag655bjgttgggn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/muuchstac-ocean-face-wash/p/itmf52a14429dc29",
  },
  {
    name: "Everyuth Naturals Moisturising Fruit Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/everyuth-naturals-moisturising-fruit-face-wash/p/itmfehr5qfhmfywy",
    current_price: 90,
    original_price: 165,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/face-wash/5/t/g/-original-imagkpjfe7ftr2ag.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/everyuth-naturals-moisturising-fruit-face-wash/p/itmfehr5qfhmfywy",
  },
  {
    name: "Clean &amp; Clear Morning Energy Aqua Splash Face Wash",
    category: "beauty",
    link: "https://www.flipkart.com/clean-clear-morning-energy-aqua-splash-face-wash/p/itmfhtc4xdzzehdr",
    current_price: 142,
    original_price: 155,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kcgk1ow0/face-wash/b/f/e/100-morning-energy-aqua-splash-clean-clear-original-imafth35afrc5qx4.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/clean-clear-morning-energy-aqua-splash-face-wash/p/itmfhtc4xdzzehdr",
  },
  {
    name: "FIAMA Gel bar Celebration Pack",
    category: "beauty",
    link: "https://www.flipkart.com/fiama-gel-bar-celebration-pack/p/itmf3cqqxnvnpeyx",
    current_price: 288,
    original_price: 360,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kh3qkcw0/soap/d/b/d/5-125-gel-bar-celebration-pack-fiama-original-imafx6qfdrqq6xpw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fiama-gel-bar-celebration-pack/p/itmf3cqqxnvnpeyx",
  },
  {
    name: "FIAMA Blackcurrant &amp; Bearberry Shower Gel",
    category: "beauty",
    link: "https://www.flipkart.com/fiama-blackcurrant-bearberry-shower-gel/p/itmf3uph3yt37h4t",
    current_price: 157,
    original_price: 225,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kh3qkcw0/body-wash/j/u/h/500-blackcurrant-bearberry-shower-gel-fiama-original-imafx6qeu4jufy8q.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fiama-blackcurrant-bearberry-shower-gel/p/itmf3uph3yt37h4t",
  },
  {
    name: "Godrej No.1 Sandal Turmeric Bathing Soap",
    category: "beauty",
    link: "https://www.flipkart.com/godrej-no-1-sandal-turmeric-bathing-soap/p/itm17b0a8ecd1f97",
    current_price: 130,
    original_price: 130,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/n/w/e/-original-imaggpgjtswhbubf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/godrej-no-1-sandal-turmeric-bathing-soap/p/itm17b0a8ecd1f97",
  },
  {
    name: "Godrej No.1 Lime Aloe Vera Bathing Soap",
    category: "beauty",
    link: "https://www.flipkart.com/godrej-no-1-lime-aloe-vera-bathing-soap/p/itmae198c09a14f5",
    current_price: 189,
    original_price: 189,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/z/x/i/-original-imaggpgkrbmknwtf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/godrej-no-1-lime-aloe-vera-bathing-soap/p/itmae198c09a14f5",
  },
  {
    name: "NIVEA Frangipani Shower Gel",
    category: "beauty",
    link: "https://www.flipkart.com/nivea-frangipani-shower-gel/p/itmf3upgzzhkzrff",
    current_price: 337,
    original_price: 675,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kuof5ow0/body-wash/c/w/o/frangipani-shower-gel-nivea-original-imag7qvhjfxwkytr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivea-frangipani-shower-gel/p/itmf3upgzzhkzrff",
  },
  {
    name: "Pears Pure &amp; Gentle Bathing Bar",
    category: "beauty",
    link: "https://www.flipkart.com/pears-pure-gentle-bathing-bar/p/itmf3ccda8zjgzjy",
    current_price: 387,
    original_price: 645,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kq5iykw0/soap/n/s/d/pure-gentle-bathing-bar-pears-original-imag48gcxhfm3pmy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pears-pure-gentle-bathing-bar/p/itmf3ccda8zjgzjy",
  },
  {
    name: "Pears soft and fresh",
    category: "beauty",
    link: "https://www.flipkart.com/pears-soft-fresh/p/itmeyqw3uq2j94zv",
    current_price: 271,
    original_price: 339,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kwcfngw0/soap/c/y/o/-original-imag9f8zcffuugwn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pears-soft-fresh/p/itmeyqw3uq2j94zv",
  },
  {
    name: "Godrej No.1 Jasmine Milk Cream Bathing Soap",
    category: "beauty",
    link: "https://www.flipkart.com/godrej-no-1-jasmine-milk-cream-bathing-soap/p/itm2a5ae6c0e0aa6",
    current_price: 130,
    original_price: 130,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kyq62kw0/soap/y/b/z/-original-imagaw5waabfezy7.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/godrej-no-1-jasmine-milk-cream-bathing-soap/p/itm2a5ae6c0e0aa6",
  },
  {
    name: "Dettol Original Soap",
    category: "beauty",
    link: "https://www.flipkart.com/dettol-original-soap/p/itmf2zfmqg6abchg",
    current_price: 173,
    original_price: 199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l0pm3680/soap/u/c/5/-original-imagcfpvvhxraccy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dettol-original-soap/p/itmf2zfmqg6abchg",
  },
  {
    name: "CINTHOL Original Soap",
    category: "beauty",
    link: "https://www.flipkart.com/cinthol-original-soap/p/itmexaskgfr74cth",
    current_price: 356,
    original_price: 405,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/s/d/v/-original-imaggwzctu8f26ha.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cinthol-original-soap/p/itmexaskgfr74cth",
  },
  {
    name: "Santoor Sandal &amp; Almond Milk Soap(5 x 125 g) pack of 2",
    category: "beauty",
    link: "https://www.flipkart.com/santoor-sandal-almond-milk-soap-5-x-125-g-pack-2/p/itmf2bc32a78c24e",
    current_price: 313,
    original_price: 418,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/f/z/m/-original-imaghh7cqhbjuxd6.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/santoor-sandal-almond-milk-soap-5-x-125-g-pack-2/p/itmf2bc32a78c24e",
  },
  {
    name: "BAJAJ Almond Drops Moisturizing Soap 100Gm Pack of 4",
    category: "beauty",
    link: "https://www.flipkart.com/bajaj-almond-drops-moisturizing-soap-100gm-pack-4/p/itm40f6d5dfe201b",
    current_price: 163,
    original_price: 252,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/w/s/d/-original-imaghzqemehhft9g.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/bajaj-almond-drops-moisturizing-soap-100gm-pack-4/p/itm40f6d5dfe201b",
  },
  {
    name: "CINTHOL Lime Soap",
    category: "beauty",
    link: "https://www.flipkart.com/cinthol-lime-soap/p/itmexaskxyfk2yff",
    current_price: 360,
    original_price: 424,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/g/9/r/-original-imagh4h6kaqg9eyr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cinthol-lime-soap/p/itmexaskxyfk2yff",
  },
  {
    name: "FIAMA Bearberry &amp; Blackcurrant Gel Bar",
    category: "beauty",
    link: "https://www.flipkart.com/fiama-bearberry-blackcurrant-gel-bar/p/itmf2f32bhq4bqna",
    current_price: 397,
    original_price: 530,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kh3qkcw0/soap/8/v/e/6-750-gel-bar-blackcurrant-and-bearberry-125g-pack-of-6-fiama-original-imafx6qfd6xxyevr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fiama-bearberry-blackcurrant-gel-bar/p/itmf2f32bhq4bqna",
  },
  {
    name: "DOVE Deep Moisture BW",
    category: "beauty",
    link: "https://www.flipkart.com/dove-deep-moisture-bw/p/itm57d8665f15df8",
    current_price: 256,
    original_price: 395,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/body-wash/y/d/5/-original-imagg24hbmzvf4mv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dove-deep-moisture-bw/p/itm57d8665f15df8",
  },
  {
    name: "Pears Pure And Gentle Shower Gel",
    category: "beauty",
    link: "https://www.flipkart.com/pears-pure-gentle-shower-gel/p/itmf3upggwfjcj75",
    current_price: 135,
    original_price: 135,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/body-wash/p/x/e/-original-imaggc3q4mhzx2mu.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pears-pure-gentle-shower-gel/p/itmf3upggwfjcj75",
  },
  {
    name: "DOVE Cream Beauty Bar - Soft, Smooth, Moisturised Skin",
    category: "beauty",
    link: "https://www.flipkart.com/dove-cream-beauty-bar-soft-smooth-moisturised-skin/p/itm535a8126ef656",
    current_price: 224,
    original_price: 280,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l3t2fm80/soap/v/l/7/-original-imageuhwugcnrnhk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dove-cream-beauty-bar-soft-smooth-moisturised-skin/p/itm535a8126ef656",
  },
  {
    name: "Pears Naturale Brightening Pomegranate Bodywash",
    category: "beauty",
    link: "https://www.flipkart.com/pears-naturale-brightening-pomegranate-bodywash/p/itm8b3827132f8d9",
    current_price: 123,
    original_price: 210,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jyhl1u80/body-wash/m/b/s/250-naturale-brightening-pomegranate-bodywash-pears-original-imafgpty4hyncpzr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pears-naturale-brightening-pomegranate-bodywash/p/itm8b3827132f8d9",
  },
  {
    name: "HAMAM Neem Tulsi and Aloevera Soap",
    category: "beauty",
    link: "https://www.flipkart.com/hamam-neem-tulsi-aloevera-soap/p/itmfe32wjcrgpdvk",
    current_price: 171,
    original_price: 171,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/t/q/o/-original-imageh4p7z9dncgh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/hamam-neem-tulsi-aloevera-soap/p/itmfe32wjcrgpdvk",
  },
  {
    name: "Santoor Almond Soap with Sandal and Almond Milk",
    category: "beauty",
    link: "https://www.flipkart.com/santoor-almond-soap-sandal-milk/p/itm9bbf3d0d089dc",
    current_price: 179,
    original_price: 204,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/a/d/b/-original-imagjzqvzmm3gkvv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/santoor-almond-soap-sandal-milk/p/itm9bbf3d0d089dc",
  },
  {
    name: "Savlon Moisturizing Glycerin Soap with Germ Protection",
    category: "beauty",
    link: "https://www.flipkart.com/savlon-moisturizing-glycerin-soap-germ-protection/p/itm1ce455b0acce0",
    current_price: 276,
    original_price: 425,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/v/y/7/-original-imagkb4nnh3r7dgm.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/savlon-moisturizing-glycerin-soap-germ-protection/p/itm1ce455b0acce0",
  },
  {
    name: "Dettol Bathing Soap Bar, Original",
    category: "beauty",
    link: "https://www.flipkart.com/dettol-bathing-soap-bar-original/p/itm616b75466d625",
    current_price: 283,
    original_price: 322,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l0pm3680/soap/v/l/o/-original-imagcfpvnszyhs9u.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dettol-bathing-soap-bar-original/p/itm616b75466d625",
  },
  {
    name: "Dettol Cool Germ Protection Bathing Soap",
    category: "beauty",
    link: "https://www.flipkart.com/dettol-cool-germ-protection-bathing-soap/p/itm3084337ec879f",
    current_price: 145,
    original_price: 150,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l0pm3680/soap/z/r/i/-original-imagcfpvwrgvay4t.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/dettol-cool-germ-protection-bathing-soap/p/itm3084337ec879f",
  },
  {
    name: "Jo Fresh Lime Soap with Glycerine",
    category: "beauty",
    link: "https://www.flipkart.com/jo-fresh-lime-soap-glycerine/p/itmd4c2b573ce0e8",
    current_price: 247,
    original_price: 344,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/p/o/v/-original-imaghgkhph6ur7en.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/jo-fresh-lime-soap-glycerine/p/itmd4c2b573ce0e8",
  },
  {
    name: "HIMALAYA Neem &amp; Turmeric Soap",
    category: "beauty",
    link: "https://www.flipkart.com/himalaya-neem-turmeric-soap/p/itmfavmjufprfe3p",
    current_price: 54,
    original_price: 54,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kklhbbk0/soap/y/9/8/neem-turmeric-soap-himalaya-original-imafzwzhqeuhymmv.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/himalaya-neem-turmeric-soap/p/itmfavmjufprfe3p",
  },
  {
    name: "Godrej No.1 Kesar Milk Cream Bathing Soap",
    category: "beauty",
    link: "https://www.flipkart.com/godrej-no-1-kesar-milk-cream-bathing-soap/p/itm6da793eb538fe",
    current_price: 125,
    original_price: 125,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kyq62kw0/soap/u/b/b/-original-imagaw5wprhbvrs2.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/godrej-no-1-kesar-milk-cream-bathing-soap/p/itm6da793eb538fe",
  },
  {
    name: "Santoor Royal Sandal for Radiant Glowing Skin",
    category: "beauty",
    link: "https://www.flipkart.com/santoor-royal-sandal-radiant-glowing-skin/p/itmc02ebc8396830",
    current_price: 231,
    original_price: 231,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/soap/t/v/n/-original-imagmafruxg9jhjw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/santoor-royal-sandal-radiant-glowing-skin/p/itmc02ebc8396830",
  },
  {
    name: "LUX Jasmine &amp; Vitamin E Soap",
    category: "beauty",
    link: "https://www.flipkart.com/lux-jasmine-vitamin-e-soap/p/itm8b4264137978a",
    current_price: 328,
    original_price: 386,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/koixwnk0/soap/f/p/k/jasmine-vitamin-e-soap-lux-original-imag2yufq5bmwzmf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lux-jasmine-vitamin-e-soap/p/itm8b4264137978a",
  },
  {
    name: "HOTSTYLE Running Shoes For Men",
    category: "sports",
    link: "https://www.flipkart.com/hotstyle-running-shoes-men/p/itm5694b3a1d6910",
    current_price: 200,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/y/u/o/-original-imaghvb3gmh7t9zg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/hotstyle-running-shoes-men/p/itm5694b3a1d6910",
  },
  {
    name: "Cadbury Bournvita Health Drink Nutrition Drink",
    category: "sports",
    link: "https://www.flipkart.com/cadbury-bournvita-health-drink-nutrition/p/itmfhf8pfdw8gxb5",
    current_price: 214,
    original_price: 214,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k0igia80/milk-drink-mix/z/p/j/1-chocolate-health-drink-1kg-pouch-1-kg-pouch-bournvita-original-imafg2gkhdzrwszw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cadbury-bournvita-health-drink-nutrition/p/itmfhf8pfdw8gxb5",
  },
  {
    name: "Pediasure Vanilla Delight Flavor Nutrition Drink",
    category: "sports",
    link: "https://www.flipkart.com/pediasure-vanilla-delight-flavor-nutrition-drink/p/itm01be2c0fc0b40",
    current_price: 572,
    original_price: 590,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/krz97rk0/milk-drink-mix/v/r/i/400-complete-balanced-nutrition-to-help-kids-grow-box-box-original-imag5nk8z9hgfczc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pediasure-vanilla-delight-flavor-nutrition-drink/p/itm01be2c0fc0b40",
  },
  {
    name: "ENSURE Vanilla 1Kg Nutrition Drink",
    category: "sports",
    link: "https://www.flipkart.com/ensure-vanilla-1kg-nutrition-drink/p/itm16eda3282a761",
    current_price: 1263,
    original_price: 1300,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l58iaa80/milk-drink-mix/x/f/n/-original-imagfyd2rnpefsht.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/ensure-vanilla-1kg-nutrition-drink/p/itm16eda3282a761",
  },
  {
    name: "BRANDONN Microfiber 360 GSM Face Towel",
    category: "sports",
    link: "https://www.flipkart.com/brandonn-microfiber-360-gsm-face-towel/p/itm597cb62c1bf46",
    current_price: 549,
    original_price: 1499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kkbh8cw0/blanket/c/i/c/new-born-hooded-supersoft-wearable-envelope-wrap-cum-baby-original-imafzzrahbgvvjaz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/brandonn-microfiber-360-gsm-face-towel/p/itm597cb62c1bf46",
  },
  {
    name: "USI UNIVERSAL 628A Boxing Hand Wrap",
    category: "sports",
    link: "https://www.flipkart.com/usi-universal-628a-boxing-hand-wrap/p/itmc6680ece76bed",
    current_price: 127,
    original_price: 170,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/boxing-hand-wrap/o/j/q/275-628a-usi-universal-original-imaggfzcfwe9zzqh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/usi-universal-628a-boxing-hand-wrap/p/itmc6680ece76bed",
  },
  {
    name: "SportSoul Cotton Gym &amp; Athletic Abdomen Support",
    category: "sports",
    link: "https://www.flipkart.com/sportsoul-cotton-gym-athletic-abdomen-support/p/itmf9fc9t3ynmhg9",
    current_price: 249,
    original_price: 349,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l046he80/support/n/e/n/na-s-cotton-gym-athletic-30-gsdgs-sportsoul-32-original-imagbzf92knyysaj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/sportsoul-cotton-gym-athletic-abdomen-support/p/itmf9fc9t3ynmhg9",
  },
  {
    name: "NIVIA Storm Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-storm-football-size-5/p/itmf97qekruuxrxd",
    current_price: 399,
    original_price: 726,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jxqfonk0/kit/3/3/r/football-training-kit-kit2-nivia-original-imaf42fyevkzq8hz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-storm-football-size-5/p/itmf97qekruuxrxd",
  },
  {
    name: "YONEX MAVIS 350 Nylon Shuttle  - Yellow",
    category: "sports",
    link: "https://www.flipkart.com/yonex-mavis-350-nylon-shuttle-yellow/p/itmfcjdyhnghfyey",
    current_price: 1099,
    original_price: 1265,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kdkkdjk0/shuttle/u/r/3/mavis-350-green-cap-6-75-nylon-yonex-slow-original-imafug3vnxye6skh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/yonex-mavis-350-nylon-shuttle-yellow/p/itmfcjdyhnghfyey",
  },
  {
    name: "Pediasure Specialized Nutrition Energy Drink",
    category: "sports",
    link: "https://www.flipkart.com/pediasure-specialized-nutrition-energy-drink/p/itm522f393c1f435",
    current_price: 408,
    original_price: 425,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k6pd7680/energy-sport-drink-mix/y/5/7/400-specialized-nutrition-drink-powder-pediasure-original-imafp3xpymrusngj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pediasure-specialized-nutrition-energy-drink/p/itm522f393c1f435",
  },
  {
    name: "Pediasure Premium Chocolate Flavor Nutrition Drink",
    category: "sports",
    link: "https://www.flipkart.com/pediasure-premium-chocolate-flavor-nutrition-drink/p/itm709a9b5f37e85",
    current_price: 1338,
    original_price: 1375,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/krz97rk0/milk-drink-mix/s/q/p/1-complete-balanced-nutrition-to-help-kids-grow-box-box-original-imag5nk9xkzcrgnr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/pediasure-premium-chocolate-flavor-nutrition-drink/p/itm709a9b5f37e85",
  },
  {
    name: "REDMI 9i Sport (Metallic Blue, 64 GB)",
    category: "sports",
    link: "https://www.flipkart.com/redmi-9i-sport-metallic-blue-64-gb/p/itmeb95d0b4616cc",
    current_price: 7499,
    original_price: 9999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ku04o7k0/mobile/x/x/t/9i-sport-mzb0a10in-redmi-original-imag785rwf3q8sft.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/redmi-9i-sport-metallic-blue-64-gb/p/itmeb95d0b4616cc",
  },
  {
    name: "REDMI 9i Sport (Coral Green, 64 GB)",
    category: "sports",
    link: "https://www.flipkart.com/redmi-9i-sport-coral-green-64-gb/p/itmb5e8d8186b602",
    current_price: 7499,
    original_price: 9999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ku04o7k0/mobile/m/w/p/9i-sport-mzb0a0yin-redmi-original-imag785ryfspqg3a.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/redmi-9i-sport-coral-green-64-gb/p/itmb5e8d8186b602",
  },
  {
    name: "Spartan Sixer Heavy Bat PVC/Plastic Cricket  Bat",
    category: "sports",
    link: "https://www.flipkart.com/spartan-sixer-heavy-bat-pvc-plastic-cricket/p/itm4fba198de3bf0",
    current_price: 350,
    original_price: 380,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ksez24w0/bat/u/5/q/500-sixer-heavy-bat-short-handle-pb01-fs-grade-1-spartan-original-imag5znz5akmcyfb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/spartan-sixer-heavy-bat-pvc-plastic-cricket/p/itm4fba198de3bf0",
  },
  {
    name: "Adrenex by Flipkart Light Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/adrenex-flipkart-light-cricket-tennis-ball/p/itme98c3e88811de",
    current_price: 199,
    original_price: 349,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jsuoivk0/ball/p/m/k/100-150-standard-6-3-cricket-tennis-ball-medium-3-ad-ctb-1-original-imafeavzuptyppjz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/adrenex-flipkart-light-cricket-tennis-ball/p/itme98c3e88811de",
  },
  {
    name: "Adrenex by Flipkart Heavy Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/adrenex-flipkart-heavy-cricket-tennis-ball/p/itm55e3b66b8168f",
    current_price: 199,
    original_price: 349,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jsuoivk0/ball/c/c/8/100-150-standard-6-3-cricket-tennis-ball-heavy-3-ad-ctb-2-original-imafecef272pu8cw.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/adrenex-flipkart-heavy-cricket-tennis-ball/p/itm55e3b66b8168f",
  },
  {
    name: "COSCO Light Weight Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/cosco-light-weight-cricket-tennis-ball/p/itmf3umwpa6g9bg8",
    current_price: 419,
    original_price: 510,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k6v2ykw0/ball/w/8/z/70-standard-6-8-cricket-tennis-ball-1-12001-cricket-tennis-ball-original-imafp7hqf3tmjwgj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cosco-light-weight-cricket-tennis-ball/p/itmf3umwpa6g9bg8",
  },
  {
    name: "NIVIA Basic Duffle Bag",
    category: "sports",
    link: "https://www.flipkart.com/nivia-basic-duffle-bag/p/itmfdn2kyex5ru6r",
    current_price: 239,
    original_price: 370,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/sport-bag/m/4/i/-original-imagg5emekymkrbh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-basic-duffle-bag/p/itmfdn2kyex5ru6r",
  },
  {
    name: "FITKIT Classic Bottle 700 ml Shaker",
    category: "sports",
    link: "https://www.flipkart.com/fitkit-classic-bottle-700-ml-shaker/p/itm5628d9d1eb949",
    current_price: 179,
    original_price: 449,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/bottle/z/a/b/700-classic-bottle-titan-380ml-fitkit-original-imaftrp2jt4zsggj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fitkit-classic-bottle-700-ml-shaker/p/itm5628d9d1eb949",
  },
  {
    name: "Resh Black adjustable Ball Bearing Skipping Rope",
    category: "sports",
    link: "https://www.flipkart.com/resh-black-adjustable-ball-bearing-skipping-rope/p/itmfg7dt4yzetb2s",
    current_price: 149,
    original_price: 299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jxuq07k0/skipping-rope/b/n/m/black-adjustable-rblabbsr-01-resh-original-imafg7arnkz4czke.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/resh-black-adjustable-ball-bearing-skipping-rope/p/itmfg7dt4yzetb2s",
  },
  {
    name: "NIVIA Foam Hand Grip/Fitness Grip",
    category: "sports",
    link: "https://www.flipkart.com/nivia-foam-hand-grip-fitness-grip/p/itmexfuxe7ahmh3y",
    current_price: 199,
    original_price: 340,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/fitness-grip/o/h/n/-original-imagg5ekfnnxfac5.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-foam-hand-grip-fitness-grip/p/itmexfuxe7ahmh3y",
  },
  {
    name: "FITKIT FKSB07 Classic 700 ml Shaker",
    category: "sports",
    link: "https://www.flipkart.com/fitkit-fksb07-classic-700-ml-shaker/p/itm4821617feb19d",
    current_price: 179,
    original_price: 449,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kcp4osw0/bottle/t/8/v/700-fksb07-classic-7-fitkit-original-imaftrp2bhe3ehzc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fitkit-fksb07-classic-700-ml-shaker/p/itm4821617feb19d",
  },
  {
    name: "Quick Shel 100%EVA Eco Friendly Army 6 mm Yoga Mat",
    category: "sports",
    link: "https://www.flipkart.com/quick-shel-100-eva-eco-friendly-army-6-mm-yoga-mat/p/itm6103132d11b3a",
    current_price: 399,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/sport-mat/h/b/4/100-eva-eco-friendly-army-6-quickshel-original-imaghj36q3nmwhsx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/quick-shel-100-eva-eco-friendly-army-6-mm-yoga-mat/p/itm6103132d11b3a",
  },
  {
    name: "VICKY Heavy Tennis Ball, Maroon Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/vicky-heavy-tennis-ball-maroon-cricket-ball/p/itm1819c68676f83",
    current_price: 439,
    original_price: 594,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k95yhzk0/ball/z/x/t/125-standard-6-6-heavy-tennis-ball-maroon-6-na-cricket-tennis-original-imafryxsyzpff4mf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vicky-heavy-tennis-ball-maroon-cricket-ball/p/itm1819c68676f83",
  },
  {
    name: "SG iball with Cord Cricket Synthetic Ball",
    category: "sports",
    link: "https://www.flipkart.com/sg-iball-cord-cricket-synthetic-ball/p/itm8df3cd672dc73",
    current_price: 219,
    original_price: 279,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/j/w/k/-original-imagh3yedguzrqxz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/sg-iball-cord-cricket-synthetic-ball/p/itm8df3cd672dc73",
  },
  {
    name: "Headly Heavy Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/headly-heavy-cricket-tennis-ball/p/itmf4hvayybyhnky",
    current_price: 399,
    original_price: 540,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jgb5dow0/ball/v/e/n/80-85-cricket-tennis-ball-light-6-tennis-ball-headly-original-imaf4e8rmpzjktrz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/headly-heavy-cricket-tennis-ball/p/itmf4hvayybyhnky",
  },
  {
    name: "Jager-Smith Light 150 Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/jager-smith-light-150-cricket-tennis-ball/p/itm1896c3caf4155",
    current_price: 445,
    original_price: 445,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kuipea80/ball/2/u/9/70-80-light-150-6-standard-3-light-150-cricket-tennis-ball-jager-original-imag7m3cdyth6twn.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/jager-smith-light-150-cricket-tennis-ball/p/itm1896c3caf4155",
  },
  {
    name: "VICKY Cricket Tennis Ball, Maroon Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/vicky-cricket-tennis-ball-maroon-ball/p/itm5a6b3936de7c9",
    current_price: 399,
    original_price: 594,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k95yhzk0/ball/n/v/g/82-standard-6-6-cricket-tennis-ball-maroon-6-na-cricket-tennis-original-imafryxsqmruwcse.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vicky-cricket-tennis-ball-maroon-ball/p/itm5a6b3936de7c9",
  },
  {
    name: "Heega Heavy Quality Cricket Ball Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/heega-heavy-quality-cricket-ball-tennis/p/itmb372d146f9097",
    current_price: 269,
    original_price: 795,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jyj0how0/ball/x/d/z/110-110-standard-5-heavy-quality-cricket-ball-12-12viratred-original-imafgphjvgwbkksc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/heega-heavy-quality-cricket-ball-tennis/p/itmb372d146f9097",
  },
  {
    name: "VICKY Pro heavy cricket tennis ball Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/vicky-pro-heavy-cricket-tennis-ball/p/itmff9bksedyjfma",
    current_price: 319,
    original_price: 480,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/p/y/z/-original-imagghwhcwpzkukp.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vicky-pro-heavy-cricket-tennis-ball/p/itmff9bksedyjfma",
  },
  {
    name: "Unbranded KKR Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/unbranded-kkr-cricket-tennis-ball/p/itm94bbd0bb72ab1",
    current_price: 99,
    original_price: 250,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l1dwknk0/ball/k/t/a/80-90-kkr-6-3-standard-1-ipl-kkr-2022-cricket-tennis-ball-original-imagcyvbbdabgsec.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/unbranded-kkr-cricket-tennis-ball/p/itm94bbd0bb72ab1",
  },
  {
    name: "Fervor Spel Red Ball Combo 3 Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/fervor-spel-red-ball-combo-3-cricket-tennis/p/itmb3ffb726c4415",
    current_price: 259,
    original_price: 399,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k19lvgw0/ball/a/f/k/180-standard-6-red-ball-combo-3-3-gbc3-cricket-tennis-ball-original-imafkuxw5zehn5ta.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/fervor-spel-red-ball-combo-3-cricket-tennis/p/itmb3ffb726c4415",
  },
  {
    name: "GINWALA WIND BALL Cricket Rubber Ball",
    category: "sports",
    link: "https://www.flipkart.com/ginwala-wind-ball-cricket-rubber/p/itmf3umvhthjy9yn",
    current_price: 178,
    original_price: 199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l26hdow0/ball/q/o/v/240-wind-ball-standard-7-03-2-t-20-cricket-rubber-ball-ginwala-original-imagdh2ugfkwwhyf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/ginwala-wind-ball-cricket-rubber/p/itmf3umvhthjy9yn",
  },
  {
    name: "Unbranded CSK Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/unbranded-csk-cricket-tennis-ball/p/itmcbe2ec5136d13",
    current_price: 249,
    original_price: 250,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l1dwknk0/ball/u/k/4/80-90-csk-6-3-standard-1-ipl-csk-2022-cricket-tennis-ball-original-imagcyvbgngrm2e2.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/unbranded-csk-cricket-tennis-ball/p/itmcbe2ec5136d13",
  },
  {
    name: "Jager-Smith Heavy 350 Cricket Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/jager-smith-heavy-350-cricket-tennis-ball/p/itm85fe144858154",
    current_price: 369,
    original_price: 545,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ksuowi80/ball/n/w/9/110-120-6-standard-heavy-350-6-heavy-350-cricket-tennis-ball-original-imag6b3dfvc3hqhh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/jager-smith-heavy-350-cricket-tennis-ball/p/itm85fe144858154",
  },
  {
    name: "Jaspo T-20 Pink Soft Cricket Training Ball",
    category: "sports",
    link: "https://www.flipkart.com/jaspo-t-20-pink-soft-cricket-training-ball/p/itm1883147498084",
    current_price: 449,
    original_price: 629,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kpinwy80/ball/v/k/j/100-standard-7-t-20-pink-cricket-ball-6-50452-cricket-rubber-original-imag3qgpsfmddvuu.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/jaspo-t-20-pink-soft-cricket-training-ball/p/itm1883147498084",
  },
  {
    name: "NIMBOLIYA YLO 3 T20 Cricket Rubber Ball",
    category: "sports",
    link: "https://www.flipkart.com/nimboliya-ylo-3-t20-cricket-rubber-ball/p/itm8cb57762c4e47",
    current_price: 145,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/knm2s280/ball/d/a/f/50-100-standard-6-ylo-3-t20-3-1-cricket-rubber-ball-nimboliya-original-imag29b3zawanh99.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nimboliya-ylo-3-t20-cricket-rubber-ball/p/itm8cb57762c4e47",
  },
  {
    name: "HEAD Mx Spark Elite Black Unstrung Tennis Racquet",
    category: "sports",
    link: "https://www.flipkart.com/head-mx-spark-elite-black-unstrung-tennis-racquet/p/itm9292c52544ea2",
    current_price: 4320,
    original_price: 6599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k2c6rgw0/racquet/g/6/f/grip-size-0-3-75-inches-mx-spark-elite-unstrung-1-1102463-265-original-imafhphvxsuqdgzq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/head-mx-spark-elite-black-unstrung-tennis-racquet/p/itm9292c52544ea2",
  },
  {
    name: "LYCAN cricket tennis ball pack of 3 Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/lycan-cricket-tennis-ball-pack-3/p/itmc606adefc4dcf",
    current_price: 169,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k5cs87k0/ball/t/8/a/59-standard-6-86-cricket-tennis-ball-pack-of-3-3-9854-tennis-original-imafgs4yz6xwbqgq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/lycan-cricket-tennis-ball-pack-3/p/itmc606adefc4dcf",
  },
  {
    name: "Grizzly Premium Quality Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/grizzly-premium-quality-tennis-ball/p/itmfe3qmpz7htgkr",
    current_price: 290,
    original_price: 699,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jskofww0/ball/6/m/e/0-1-standard-25-premium-quality-10-premium-quality-tennis-ball-original-imafeytzssuh3het.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/grizzly-premium-quality-tennis-ball/p/itmfe3qmpz7htgkr",
  },
  {
    name: "County premium quality green tennis balls Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/county-premium-quality-green-tennis-balls-ball/p/itm9534de0fc90e2",
    current_price: 230,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/r/w/p/80-premium-quality-green-tennis-balls-standard-cgtbb1-tennis-original-imaghyza2hxxwkyy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/county-premium-quality-green-tennis-balls-ball/p/itm9534de0fc90e2",
  },
  {
    name: "YONEX TECH-501B Tacky Touch",
    category: "sports",
    link: "https://www.flipkart.com/yonex-tech-501b-tacky-touch/p/itm0c19961dfcaf9",
    current_price: 354,
    original_price: 425,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l15bxjk0/grip/7/2/d/tech-501b-5-tech-501b-1100-yonex-original-imagcrzexwzztbyf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/yonex-tech-501b-tacky-touch/p/itm0c19961dfcaf9",
  },
  {
    name: "WILSON Tour Premier All Court 2 can Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/wilson-tour-premier-all-court-2-can-tennis-ball/p/itm3fd3b05b275fd",
    current_price: 899,
    original_price: 1198,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kqttg280/ball/x/q/s/440-6-standard-tour-premier-all-court-2-can-6-na-tennis-ball-original-imag4ryretbdtgnd.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/wilson-tour-premier-all-court-2-can-tennis-ball/p/itm3fd3b05b275fd",
  },
  {
    name: "WILSON RF DNA (NA)",
    category: "sports",
    link: "https://www.flipkart.com/wilson-rf-dna-na/p/itm26c9c5a9d0062",
    current_price: 7856,
    original_price: 7999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/krp94sw0/sport-bag/s/r/4/standard-rf-dna-na-wr8005302001-wilson-8-original-imag5fcxzvdzayqg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/wilson-rf-dna-na/p/itm26c9c5a9d0062",
  },
  {
    name: "Luxilon 4G 125 Reel 1.25 Tennis String - 220 m",
    category: "sports",
    link: "https://www.flipkart.com/luxilon-4g-125-reel-1-25-tennis-string-220-m/p/itm256c63d4eb63a",
    current_price: 32500,
    original_price: 32500,
    discounted: false,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kybvo280/string/s/q/r/4g-125-string-reel-220m-1-1-25-220-luxilon-tennis-original-imagakyfm3rqhxfg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/luxilon-4g-125-reel-1-25-tennis-string-220-m/p/itm256c63d4eb63a",
  },
  {
    name: "HEAD Touch Radical S Multicolor Unstrung Tennis Racquet",
    category: "sports",
    link: "https://www.flipkart.com/head-touch-radical-s-multicolor-unstrung-tennis-racquet/p/itm3ac46902432dd",
    current_price: 18539,
    original_price: 21499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kamtsi80/racquet/j/9/k/g4-11-43-cm-touch-radical-s-unstrung-1-1102432-280-tennis-original-imafs5h3zcfpm9rt.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/head-touch-radical-s-multicolor-unstrung-tennis-racquet/p/itm3ac46902432dd",
  },
  {
    name: "YONEX VCOREPRO97 Green Unstrung Tennis Racquet",
    category: "sports",
    link: "https://www.flipkart.com/yonex-vcorepro97-green-unstrung-tennis-racquet/p/itmae7b8169e87a3",
    current_price: 16864,
    original_price: 24380,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kzvlua80/racquet/0/h/q/g3-4-3-8-inches-vcorepro97-unstrung-1-vcorepro97-310-tennis-original-imagbsbuyxspktyu.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/yonex-vcorepro97-green-unstrung-tennis-racquet/p/itmae7b8169e87a3",
  },
  {
    name: "WILSON Clash 100L Multicolor Unstrung Tennis Racquet",
    category: "sports",
    link: "https://www.flipkart.com/wilson-clash-100l-multicolor-unstrung-tennis-racquet/p/itm95634d04a51c9",
    current_price: 15899,
    original_price: 22990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kdhphu80/racquet/z/b/t/g2-4-1-4-inches-clash-100l-unstrung-1-wr008711-u2-280-tennis-original-imafudy27jk7rbez.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/wilson-clash-100l-multicolor-unstrung-tennis-racquet/p/itm95634d04a51c9",
  },
  {
    name: "WILSON WRT126400 ROLAND GARROS ALL 1 Can Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/wilson-wrt126400-roland-garros-all-1-can-tennis-ball/p/itm27ffdb0d99eb1",
    current_price: 489,
    original_price: 649,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kqttg280/ball/m/w/z/220-6-standard-wrt126400-roland-garros-all-1-can-3-na-tennis-original-imag4rysjzdecdtj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/wilson-wrt126400-roland-garros-all-1-can-tennis-ball/p/itm27ffdb0d99eb1",
  },
  {
    name: "County premium quality red tennis balls Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/county-premium-quality-red-tennis-balls-ball/p/itmc84d273e973e1",
    current_price: 221,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/u/k/4/130-premium-quality-red-tennis-balls-standard-crtbb2-tennis-ball-original-imaghyzauzs4mwht.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/county-premium-quality-red-tennis-balls-ball/p/itmc84d273e973e1",
  },
  {
    name: "TrofT Pack of 3 red balls Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/troft-pack-3-red-balls-tennis-ball/p/itmfh7hvrfjk3nfw",
    current_price: 280,
    original_price: 500,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jwjkh3k0/ball/9/n/8/400-standard-7-pack-of-3-red-balls-3-pack-of-3-red-balls-tennis-original-imafh7hcbbjeapya.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/troft-pack-3-red-balls-tennis-ball/p/itmfh7hvrfjk3nfw",
  },
  {
    name: "RJ Gallery Tennis /cricket ball set of 12 Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/rj-gallery-tennis-cricket-ball-set-12/p/itmf21746f576ae6",
    current_price: 272,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kq43iq80/ball/z/b/q/50-70-standard-white-tennis-cum-cricket-ball-set-of-12-na-tennis-original-imag478hw4kd8f4r.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/rj-gallery-tennis-cricket-ball-set-12/p/itmf21746f576ae6",
  },
  {
    name: "BABOLAT GOLD PET Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/babolat-gold-pet-tennis-ball/p/itmf9ghz5fbr9rhg",
    current_price: 11819,
    original_price: 13440,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jctemq80/ball/j/h/5/50-100-gold-pet-6-7-72-501043-113-72-tennis-ball-babolat-original-imaffudmrngnfhqc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/babolat-gold-pet-tennis-ball/p/itmf9ghz5fbr9rhg",
  },
  {
    name: "Hipkoo Sports Tennis Bag For Junior Players",
    category: "sports",
    link: "https://www.flipkart.com/hipkoo-sports-tennis-bag-junior-players/p/itm52a72746de785",
    current_price: 1158,
    original_price: 1200,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/l26hdow0/sport-bag/5/g/m/tennis-bag-for-junior-players-s-644-kit-bag-hipkoo-sports-50-original-imagdk7bmgxz57zf.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/hipkoo-sports-tennis-bag-junior-players/p/itm52a72746de785",
  },
  {
    name: "HEAD Radical 6R Combi",
    category: "sports",
    link: "https://www.flipkart.com/head-radical-6r-combi/p/itmc065f91a2a09f",
    current_price: 5629,
    original_price: 6199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kao98cw0/sport-bag/a/x/d/50-l-radical-6r-combi-283100-head-50-original-imafs7ysp3bgxme5.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/head-radical-6r-combi/p/itmc065f91a2a09f",
  },
  {
    name: "HEAD Gravity",
    category: "sports",
    link: "https://www.flipkart.com/head-gravity/p/itm96294c40c2edf",
    current_price: 6859,
    original_price: 7799,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k79dd3k0/sport-bag/w/h/z/standard-gravity-1103691-head-standard-original-imafpjk4nb63qsbb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/head-gravity/p/itm96294c40c2edf",
  },
  {
    name: "YONEX ASTREL115 Gold Unstrung Tennis Racquet",
    category: "sports",
    link: "https://www.flipkart.com/yonex-astrel115-gold-unstrung-tennis-racquet/p/itm9674381b8ac49",
    current_price: 15633,
    original_price: 22600,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kzvlua80/racquet/h/a/i/g3-4-3-8-inches-astrel115-unstrung-1-astrel115-260-tennis-original-imagbsbtaaqzxaha.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/yonex-astrel115-gold-unstrung-tennis-racquet/p/itm9674381b8ac49",
  },
  {
    name: "WILSON TOUR PREMIER ALL COURT Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/wilson-tour-premier-all-court-tennis-ball/p/itmfe6p2xnafmy7v",
    current_price: 540,
    original_price: 715,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmns7m80/ball/a/n/f/50-standard-5-tour-premier-all-court-3-wrt109400-tennis-ball-original-imagfgfyysz3dysh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/wilson-tour-premier-all-court-tennis-ball/p/itmfe6p2xnafmy7v",
  },
  {
    name: "YONEX GRIP TAPE ARC 9900 E Smooth Tacky",
    category: "sports",
    link: "https://www.flipkart.com/yonex-grip-tape-arc-9900-e-smooth-tacky/p/itm539e729712d2a",
    current_price: 394,
    original_price: 400,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kqb8pzk0/grip/m/3/y/grip-tape-arc-9900-e-2-grip-tapearc-9900e-yonex-original-imag4cmgvqy2dqbh.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/yonex-grip-tape-arc-9900-e-smooth-tacky/p/itm539e729712d2a",
  },
  {
    name: "shri shyam traders tennis ball pack of 6 Tennis Ball",
    category: "sports",
    link: "https://www.flipkart.com/shri-shyam-traders-tennis-ball-pack-6/p/itm55c1a4f9c6a5d",
    current_price: 205,
    original_price: 230,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kmgn0cw0/ball/y/p/t/700-800-standard-6-5-tennis-ball-pack-of-12-12-1212-tennis-ball-original-imagfcuzhzhkxzch.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/shri-shyam-traders-tennis-ball-pack-6/p/itm55c1a4f9c6a5d",
  },
  {
    name: "NIVIA Storm Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-storm-football-size-5/p/itmf97qekruuxrxd",
    current_price: 399,
    original_price: 726,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jxqfonk0/kit/3/3/r/football-training-kit-kit2-nivia-original-imaf42fyevkzq8hz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-storm-football-size-5/p/itmf97qekruuxrxd",
  },
  {
    name: "VECTOR X Attacker Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/vector-x-attacker-football-size-5/p/itmffmgpusgrhydv",
    current_price: 349,
    original_price: 639,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jyxaw7k0/ball/8/3/m/430-5-21-9-attacker-1-vectorxhx5-football-vector-x-original-imafj24h7vdswzhg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/vector-x-attacker-football-size-5/p/itmffmgpusgrhydv",
  },
  {
    name: "NIVIA Storm Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-storm-football-size-5/p/itmf9ghrvnswfpca",
    current_price: 369,
    original_price: 726,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jxqfonk0/kit/3/3/r/football-training-kit-kit2-nivia-original-imaf42fyevkzq8hz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-storm-football-size-5/p/itmf9ghrvnswfpca",
  },
  {
    name: "NIVIA Country Colour (Argentina) Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-country-colour-argentina-football-size-5/p/itmf9ghrgcprcwvf",
    current_price: 364,
    original_price: 440,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/s/n/5/400-country-colour-argentina-5-22-1-fb-1360-ar-football-nivia-original-imagmekbksfvb6pk.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-country-colour-argentina-football-size-5/p/itmf9ghrgcprcwvf",
  },
  {
    name: "NIVIA Storm Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-storm-football-size-5/p/itmf9ghreytypn55",
    current_price: 399,
    original_price: 726,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jxqfonk0/kit/3/3/r/football-training-kit-kit2-nivia-original-imaf42fyevkzq8hz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-storm-football-size-5/p/itmf9ghreytypn55",
  },
  {
    name: "NIVIA HOME-PLAY Football - Size: 1",
    category: "sports",
    link: "https://www.flipkart.com/nivia-home-play-football-size-1/p/itmf50604908c1c1",
    current_price: 169,
    original_price: 170,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/keekmfk0/ball/4/q/w/225-230-3-20-home-play-1-fb-4045yb-football-nivia-original-imafv3pzgjtuuv5g.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-home-play-football-size-1/p/itmf50604908c1c1",
  },
  {
    name: "COSCO Kick Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/cosco-kick-football-size-5/p/itm9461044960a08",
    current_price: 438,
    original_price: 949,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kr2e3680/ball/a/9/0/380-420-22-5-kick-1-101smufb01-football-cosco-original-imag4xhfvcdgn4gz.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/cosco-kick-football-size-5/p/itm9461044960a08",
  },
  {
    name: "Spartan Thunder Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/spartan-thunder-football-size-5/p/itmbe33d4f9d8e59",
    current_price: 286,
    original_price: 450,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/g/e/h/350-thunder-5-50-1-sb-5018-football-spartan-original-imaggey8ntdtrajj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/spartan-thunder-football-size-5/p/itmbe33d4f9d8e59",
  },
  {
    name: "RASCO MACHINE S Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/rasco-machine-s-football-size-5/p/itm15e2b57ddf556",
    current_price: 499,
    original_price: 999,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/k0h12fk0/ball/r/t/w/400-5-22-machine-s-2-rsf2502-football-rasco-original-imaffcm9vbzfgzyj.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/rasco-machine-s-football-size-5/p/itm15e2b57ddf556",
  },
  {
    name: "NIVIA Country Colour (France) Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-country-colour-france-football-size-5/p/itmf97qezkwmvaab",
    current_price: 399,
    original_price: 440,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/kiow6fk0-0/ball/7/g/f/400-22-country-colour-france-5-1-1360fr-football-nivia-original-imafyf6mvydcpyha.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-country-colour-france-football-size-5/p/itmf97qezkwmvaab",
  },
  {
    name: "NIVIA Country Colour (Italia) Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-country-colour-italia-football-size-5/p/itmf97qegxh4j6gw",
    current_price: 379,
    original_price: 440,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/f/z/b/400-country-colour-italia-5-22-1-1360it-football-nivia-original-imaghjkyrfj33grq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-country-colour-italia-football-size-5/p/itmf97qegxh4j6gw",
  },
  {
    name: "Adrenex by Flipkart Spark Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/adrenex-flipkart-spark-football-size-5/p/itmfg8x4kywwy54x",
    current_price: 399,
    original_price: 599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jt395zk0/ball/v/a/h/400-450-5-21-7-football-first-kick-1-ad-fb-1-3-football-flipkart-original-imafeg77w98ssgsb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/adrenex-flipkart-spark-football-size-5/p/itmfg8x4kywwy54x",
  },
  {
    name: "XXUMA Free Kick Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/xxuma-free-kick-football-size-5/p/itmd168770d5c7bc",
    current_price: 473,
    original_price: 499,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ksuowi80/ball/y/z/s/400-450-5-free-kick-xx-901-5-football-xxuma-original-imag6bnzhhqd74ef.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/xxuma-free-kick-football-size-5/p/itmd168770d5c7bc",
  },
  {
    name: "PUMA TeamFinal Wave Ball Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/puma-teamfinal-wave-ball-football-size-5/p/itmefd4315104e05",
    current_price: 779,
    original_price: 1299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/h/f/s/-original-imaghkmy3y66sg8f.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/puma-teamfinal-wave-ball-football-size-5/p/itmefd4315104e05",
  },
  {
    name: "NIVIA Country Colour (England) Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-country-colour-england-football-size-5/p/itmf97qezfezkwby",
    current_price: 369,
    original_price: 440,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/r/j/t/400-country-colour-england-5-22-1-1360eg-football-nivia-original-imaghjk2hgfykugg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-country-colour-england-football-size-5/p/itmf97qezfezkwby",
  },
  {
    name: "Marman Astra Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/marman-astra-football-size-5/p/itmfcee1fa0c9b83",
    current_price: 324,
    original_price: 699,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/krgohow0/ball/s/z/y/300-320-22-5-astra-1-108astrayellow-football-marman-original-imag58aa9vhkjvgy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/marman-astra-football-size-5/p/itmfcee1fa0c9b83",
  },
  {
    name: "RASCO BLACK CITY WITH FOOTBALL PUMP Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/rasco-black-city-football-pump-size-5/p/itmc35dc9b42b430",
    current_price: 549,
    original_price: 1299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/b/d/4/420-440-black-city-with-football-pump-5-22-2-rsct6528-football-original-imagkyrhyuj4wbeq.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/rasco-black-city-football-pump-size-5/p/itmc35dc9b42b430",
  },
  {
    name: "NIVIA Rabona Pro Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-rabona-pro-football-size-5/p/itm4643a849bc354",
    current_price: 648,
    original_price: 899,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/n/b/s/420-445-rabona-pro-5-22-1-fb-80075l-football-nivia-original-imaghjjn9puy3xwr.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-rabona-pro-football-size-5/p/itm4643a849bc354",
  },
  {
    name: "Marman Astra Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/marman-astra-football-size-5/p/itme338683f473c9",
    current_price: 318,
    original_price: 699,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/krgohow0/ball/s/z/y/300-320-22-5-astra-1-108astrayellow-football-marman-original-imag58aa9vhkjvgy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/marman-astra-football-size-5/p/itme338683f473c9",
  },
  {
    name: "NIVIA Country Colour (Germany) Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-country-colour-germany-football-size-5/p/itmf97qemk6zu37m",
    current_price: 395,
    original_price: 440,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/p/a/e/400-country-colour-germany-5-22-1-1360ge-football-nivia-original-imaghjkaypda9qp5.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-country-colour-germany-football-size-5/p/itmf97qemk6zu37m",
  },
  {
    name: "HRX Dominate Rubber Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/hrx-dominate-rubber-football-size-5/p/itm2ec751236cc82",
    current_price: 579,
    original_price: 1199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/d/5/7/-original-imagm7wfssxf96xx.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/hrx-dominate-rubber-football-size-5/p/itm2ec751236cc82",
  },
  {
    name: "Adrenex by Flipkart Spark Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/adrenex-flipkart-spark-football-size-5/p/itm9cf53b4f80073",
    current_price: 399,
    original_price: 599,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/jt395zk0/ball/v/a/h/400-450-5-21-7-football-first-kick-1-ad-fb-1-3-football-flipkart-original-imafeg77w98ssgsb.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/adrenex-flipkart-spark-football-size-5/p/itm9cf53b4f80073",
  },
  {
    name: "NIVIA Trainer Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-trainer-football-size-5/p/itmf9ghuacqnevze",
    current_price: 715,
    original_price: 830,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/g/t/f/375-395-trainer-4-fb-264-football-nivia-original-imaggqkff6axcm25.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-trainer-football-size-5/p/itmf9ghuacqnevze",
  },
  {
    name: "NIVIA Football Pro Street Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-football-pro-street-size-5/p/itmeh9cuawnzanby",
    current_price: 788,
    original_price: 1299,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/ball/a/j/y/229-1-nivia-football-football-pro-street-original-imaehufwyy2pfcfy.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-football-pro-street-size-5/p/itmeh9cuawnzanby",
  },
  {
    name: "NIVIA Black &amp; White Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-black-white-football-size-5/p/itmf97qd8tv8buaa",
    current_price: 740,
    original_price: 990,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/8/u/7/430-454-black-white-5-22-1-278-n-football-nivia-original-imaghazbngfcrbzg.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-black-white-football-size-5/p/itmf97qd8tv8buaa",
  },
  {
    name: "XXUMA HOME-PLAY Football - Size: 1",
    category: "sports",
    link: "https://www.flipkart.com/xxuma-home-play-football-size-1/p/itmdb49ccf4c1371",
    current_price: 149,
    original_price: 199,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/p/g/s/110-130-home-play-1-13-1-na-football-xxuma-original-imaghcdzbxbhy3xc.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/xxuma-home-play-football-size-1/p/itmdb49ccf4c1371",
  },
  {
    name: "NIVIA Classic Football - Size: 5",
    category: "sports",
    link: "https://www.flipkart.com/nivia-classic-football-size-5/p/itmf9ghsdtb877zy",
    current_price: 803,
    original_price: 1035,
    discounted: true,
    thumbnail:
      "https://rukminim1.flixcart.com/image/612/612/xif0q/ball/h/e/l/430-454-classic-5-22-1-281-n-football-nivia-original-imagk5jcveekxt5m.jpeg?q=70",
    query_url:
      "https://flipkart.dvishal485.workers.dev/product/nivia-classic-football-size-5/p/itmf9ghsdtb877zy",
  },
];

module.exports = products;
