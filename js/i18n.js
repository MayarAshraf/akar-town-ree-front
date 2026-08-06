/* ============================================================
   Akar Town — i18n
   Supports: English (en) · Arabic (ar)
   Mark any element: data-i18n="key"
   Placeholders:     data-i18n-placeholder="key"
   Aria-labels:      data-i18n-aria="key"
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "akar_lang";

  var T = {
    en: {
      /* Navigation */
      "nav.home":         "Home",
      "nav.properties":   "Properties",
      "nav.projects":     "Projects",
      "nav.about":        "About",
      "nav.blog":         "Blog",
      "nav.contact":      "Contact",
      "nav.find":         "Find Property",
      "nav.open_menu":    "Open menu",
      "nav.close_menu":   "Close menu",

      /* Hero slides */
      "hero.badge.sale":   "For Sale",
      "hero.badge.ready":  "Ready",
      "hero.badge.launch": "New Launch",
      "hero.cat.luxury_apts":  "Luxury Apartments",
      "hero.cat.mixed_use":    "Mixed-Use Tower",
      "hero.cat.luxury_villas":"Luxury Villas",
      "hero.cat.waterfront":   "Waterfront Residences",
      "hero.cat.premium_villas":"Premium Villas",
      "hero.cat.chalets":      "Coastal Chalets",
      "hero.loc.new_cairo":    "New Cairo, Cairo",
      "hero.loc.6th_oct":      "6th of October, Giza",
      "hero.loc.north_coast":  "North Coast, Alexandria",
      "hero.loc.ain_sokhna":   "Ain Sokhna, Suez",
      "hero.loc.sheikh_zayed": "Sheikh Zayed, Giza",
      "hero.stat.starting":    "Starting From",
      "hero.stat.area":        "Area Range",
      "hero.stat.units":       "Total Units",
      "hero.prev":             "Previous property",
      "hero.next":             "Next property",

      /* Finder */
      "finder.eyebrow":   "Configure Your Space",
      "finder.heading":   "Find Your Perfect Home Layout",
      "finder.bedrooms":  "Bedrooms",
      "finder.bathrooms": "Bathrooms",
      "finder.finishing": "Finishing",
      "finder.standard":  "Standard",
      "finder.luxury":    "Luxury",
      "finder.ultra":     "Ultra",
      "finder.cta":       "Find Properties →",

      /* Properties slider (index) */
      "props_slider.eyebrow": "Browse Properties",
      "props_slider.heading": "Find Your Perfect Property",

      /* Featured (index) */
      "feat.eyebrow": "Explore Now",
      "feat.heading": "Featured Units",

      /* Projects (index) */
      "proj.eyebrow":  "Our Projects",
      "proj.headline": "Your Next Chapter Starts With the Right Address.",
      "proj.cta":      "Explore All Projects",

      /* Contact (index) */
      "contact.eyebrow": "Get in Touch",

      /* Footer */
      "footer.tagline":      "Egypt's most trusted real estate partner — connecting families with premium developments across the country's finest addresses.",
      "footer.col.navigate": "Navigate",
      "footer.col.areas":    "Areas",
      "footer.col.contact":  "Contact",
      "footer.nav.home":       "Home",
      "footer.nav.properties": "Properties",
      "footer.nav.projects":   "Projects",
      "footer.nav.about":      "About Us",
      "footer.nav.blog":       "Blog",
      "footer.nav.contact":    "Contact",
      "footer.area.new_cairo":    "New Cairo",
      "footer.area.new_capital":  "New Capital",
      "footer.area.sheikh_zayed": "Sheikh Zayed",
      "footer.area.north_coast":  "North Coast",
      "footer.area.ain_sokhna":   "Ain Sokhna",
      "footer.area.6th_oct":      "6th of October",
      "footer.address":  "90 St. Mohamed Naguib, New Cairo, Cairo, Egypt",
      "footer.copy":     "© 2026 Akar Town. All rights reserved.",
      "footer.privacy":  "Privacy Policy",
      "footer.terms":    "Terms of Use",
      "footer.cookies":  "Cookie Settings",

      /* Properties page */
      "props.breadcrumb_home": "Home",
      "props.breadcrumb":      "Properties",
      "props.eyebrow":  "Browse Listings",
      "props.heading":  "Find Your Property",
      "props.desc":     "544 premium properties across Egypt's most sought-after locations — from studios to sky villas.",
      "props.stat.available": "properties available",
      "props.stat.locations": "prime locations",
      "filter.all":      "All",
      "filter.studio":   "Studio",
      "filter.1br":      "1 BR",
      "filter.2br":      "2 BR",
      "filter.3br":      "3 BR",
      "filter.villa":    "Villa",
      "filter.sky_villa":"Sky Villa",
      "filter.adv":      "Filters",
      "sort.prefix":     "Sort:",
      "sort.featured":   "Featured",
      "sort.price_asc":  "Price — Low to High",
      "sort.price_desc": "Price — High to Low",
      "sort.newest":     "Newest First",
      "sort.area":       "By Area",
      "adv.location":   "Location",
      "adv.price":      "Price Range (EGP)",
      "adv.area":       "Area (m²)",
      "adv.bedrooms":   "Bedrooms",
      "adv.delivery":   "Delivery",
      "adv.ready":      "Ready Now",
      "adv.q4_2026":    "Q4 2026",
      "adv.q2_2027":    "Q2 2027",
      "adv.off_plan":   "Off-Plan",
      "adv.finishing":  "Finishing",
      "adv.standard":   "Standard",
      "adv.luxury":     "Luxury",
      "adv.ultra":      "Ultra",
      "adv.clear":      "Clear All",
      "adv.apply":      "Apply Filters",
      "loc.new_cairo":    "New Cairo",
      "loc.north_coast":  "North Coast",
      "loc.sheikh_zayed": "Sheikh Zayed",
      "loc.new_capital":  "New Capital",
      "loc.ain_sokhna":   "Ain Sokhna",
      "loc.6th_oct":      "6th of October",
      "loc.more":         "+3 more",
      "results.of":      "of",
      "results.label":   "results",
      "card.view":       "View Details",

      /* Property detail */
      "pd.home":         "Home",
      "pd.properties":   "Properties",
      "pd.gallery_eyebrow":  "Unit Gallery",
      "pd.gallery_heading":  "Every Angle, Every Detail",
      "pd.about_eyebrow":    "About the Unit",
      "pd.amenities_eyebrow":"What's Included",
      "pd.amenities_heading":"Unit Amenities",
      "pd.payment_eyebrow":  "Payment Plan",
      "pd.payment_cta":      "Discuss Payment Options",
      "pd.pay.milestone":    "Milestone",
      "pd.pay.pct":          "%",
      "pd.pay.amount":       "Amount (EGP)",
      "pd.pay.due":          "Due",
      "pd.pay.down":         "Down Payment",
      "pd.pay.2nd":          "2nd Installment",
      "pd.pay.3rd":          "3rd Installment",
      "pd.pay.4th":          "4th Installment",
      "pd.pay.balance":      "Remaining Balance",
      "pd.pay.on_contract":  "On Contract",
      "pd.pay.on_delivery":  "On Delivery",
      "pd.similar_eyebrow":  "More Like This",
      "pd.similar_heading":  "Similar Properties",
      "pd.view":             "View Details",
      "pd.tag.ready":        "Ready",
      "pd.tag.offplan":      "Off-Plan",

      /* Hero — missing badge + locations */
      "hero.badge.offplan":           "Off-Plan",
      "hero.loc.new_alamein":         "New Alamein, Matrouh",
      "hero.loc.sidi_abdel_rahman":   "Sidi Abdel Rahman, North Coast",

      /* Props slider cards */
      "prop.cat.residential":  "Residential",
      "prop.cat.premium":      "Premium",
      "prop.cat.villa":        "Villa",
      "prop.cat.ultra":        "Ultra-Premium",
      "prop.card.studio_apt":  "Studio<br>Apartment",
      "prop.card.1br_apt":     "1BR<br>Apartment",
      "prop.card.2br_pent":    "2BR<br>Penthouse",
      "prop.card.3br_villa":   "3BR<br>Garden Villa",
      "prop.card.sky_villa":   "Sky<br>Villa",

      /* Props detail panel labels */
      "props.det.price_from":    "Price From",
      "props.det.living_space":  "Living Space",
      "props.det.bedrooms":      "Bedrooms",
      "props.det.delivery":      "Delivery",
      "props.det.cta":           "Find Listings →",

      /* Projects body */
      "proj.body": "From New Cairo's rising skyline to the North Coast's pristine shores, every project in our portfolio is hand-selected for location strength, developer credibility, and long-term investment value.<br><br>We partner exclusively with Egypt's most trusted developers — so every property you explore comes with a proven track record, transparent pricing, and a guaranteed delivery timeline. No surprises. No compromises.",

      /* Location section */
      "loc.section.eyebrow":  "Explore by Location",
      "loc.section.heading":  "Where Do You Want to <span class=\"mark\">Live?</span>",
      "loc.section.footer":   "Serving 6 prime destinations · 544+ active listings",
      "loc.section.cta":      "View All Locations",
      "loc.stat.properties":  "Properties",
      "loc.stat.price_from":  "Price from",
      "loc.stat.projects":    "Projects",

      /* Location tags */
      "loc.tag.east_cairo":    "East Cairo",
      "loc.tag.mediterranean": "Mediterranean",
      "loc.tag.west_cairo":    "West Cairo",
      "loc.tag.future_city":   "Future City",
      "loc.tag.red_sea":       "Red Sea",

      /* Location prop counts */
      "loc.new_cairo.count":    "148 properties",
      "loc.north_coast.count":  "96 properties",
      "loc.sheikh_zayed.count": "74 properties",
      "loc.new_capital.count":  "112 properties",
      "loc.ain_sokhna.count":   "53 properties",
      "loc.6th_oct.count":      "61 properties",

      /* Location districts */
      "loc.district.fifth_settlement": "Fifth Settlement",
      "loc.district.banafseg":         "El Banafseg",
      "loc.district.rehab":            "Rehab City",
      "loc.district.madinaty":         "Madinaty",
      "loc.district.sidi_abdel_rahman":"Sidi Abdel Rahman",
      "loc.district.hacienda":         "Hacienda Bay",
      "loc.district.marassi":          "Marassi",
      "loc.district.allegria":         "Allegria",
      "loc.district.zayed_2000":       "Zayed 2000",
      "loc.district.golf":             "Golf District",
      "loc.district.r7":               "R7 District",
      "loc.district.r8":               "R8 District",
      "loc.district.downtown_cap":     "Downtown",
      "loc.district.mu23":             "MU23",
      "loc.district.porto_sokhna":     "Porto Sokhna",
      "loc.district.azzurra":          "Azzurra",
      "loc.district.la_vista":         "La Vista",
      "loc.district.hadayek_october":  "Hadayek October",
      "loc.district.wadi_nile":        "Wadi El Nile",
      "loc.district.beverly":          "Beverly Hills",

      /* Mobile menu */
      "mob.home":       "Home",
      "mob.properties": "Properties",
      "mob.projects":   "Projects",
      "mob.about":      "About",
      "mob.blog":       "Blog",
      "mob.contact":    "Contact",

      /* Property detail */
      "pd.stat.beds":           "Beds",
      "pd.stat.baths":          "Baths",
      "pd.stat.floor":          "Floor",
      "pd.stat.view":           "Garden View",
      "pd.cta.request_viewing": "Request Viewing",
      "pd.cta.save":            "Save Property",
      "pd.spec.unit_type":      "Unit Type",
      "pd.spec.total_area":     "Total Area",
      "pd.spec.floor":          "Floor",
      "pd.spec.view":           "View",
      "pd.spec.project":        "Project",
      "pd.spec.location":       "Location",
      "pd.spec.finishing":      "Finishing",
      "pd.spec.delivery":       "Delivery",
      "pd.val.2bed_apt":        "2-Bed Apartment",
      "pd.val.garden_pool":     "Garden &amp; Pool",
      "pd.val.garden_view":     "Garden View",
      "pd.about.heading":       "Refined living in the heart of New Cairo",
      "pd.about.p1":            "This 148 m² garden-view apartment sits on the 5th floor of Azha Residence — one of New Cairo's most distinguished compounds. Designed for those who value both space and serenity, the unit faces an expansive landscaped garden and resort-style pool.",
      "pd.about.p2":            "The open-plan layout connects the living and dining zones seamlessly, while floor-to-ceiling windows flood every room with natural light. Both bedrooms are en-suite, with the master bedroom featuring a walk-in closet and private balcony access.",
      "pd.about.p3":            "Delivered fully finished with Italian marble flooring, custom built-in wardrobes, and a fully fitted kitchen — ready to move into immediately.",
      "pd.features.eyebrow":   "Interior Highlights",
      "pd.features.heading":   "Crafted with precision, finished with purpose",
      "pd.feature.open_plan":  "<strong>Open-Plan Living &amp; Dining</strong>Seamless flow between spaces, ideal for entertaining and everyday comfort.",
      "pd.feature.smart_home": "<strong>Smart Home System</strong>Pre-wired for full automation — lighting, climate, and security from your phone.",
      "pd.feature.marble":     "<strong>Italian Marble Flooring</strong>Botticino marble throughout all living areas and master bedroom.",
      "pd.feature.windows":    "<strong>Floor-to-Ceiling Windows</strong>Double-glazed, UV-filtered — maximum garden views, minimal heat gain.",
      "pd.gal.living_room":    "Living Room",
      "pd.gal.master_bedroom": "Master Bedroom",
      "pd.gal.kitchen":        "Open Kitchen",
      "pd.gal.bedroom2":       "Second Bedroom",
      "pd.gal.balcony":        "Balcony",
      "pd.gal.bathroom":       "Master Bathroom",
      "pd.amenity.balcony":    "Private Balcony",
      "pd.amenity.wardrobes":  "Built-in Wardrobes",
      "pd.amenity.ac":         "Central A/C",
      "pd.amenity.smart_home": "Smart Home System",
      "pd.amenity.kitchen":    "Open Kitchen",
      "pd.amenity.laundry":    "Laundry Room",
      "pd.amenity.storage":    "Storage Room",
      "pd.amenity.en_suite":   "En-Suite Master",
      "pd.sticky.beds":        "Beds",
      "pd.sticky.baths":       "Baths",
    },

    ar: {
      /* Navigation */
      "nav.home":         "الرئيسية",
      "nav.properties":   "العقارات",
      "nav.projects":     "المشاريع",
      "nav.about":        "عن الشركة",
      "nav.blog":         "المدونة",
      "nav.contact":      "تواصل معنا",
      "nav.find":         "ابحث عن عقار",
      "nav.open_menu":    "فتح القائمة",
      "nav.close_menu":   "إغلاق القائمة",

      /* Hero slides */
      "hero.badge.sale":   "للبيع",
      "hero.badge.ready":  "جاهز",
      "hero.badge.launch": "إطلاق جديد",
      "hero.cat.luxury_apts":   "شقق فاخرة",
      "hero.cat.mixed_use":     "برج متعدد الاستخدامات",
      "hero.cat.luxury_villas": "فلل فاخرة",
      "hero.cat.waterfront":    "وحدات على الواجهة المائية",
      "hero.cat.premium_villas":"فلل راقية",
      "hero.cat.chalets":       "شاليهات ساحلية",
      "hero.loc.new_cairo":    "القاهرة الجديدة، القاهرة",
      "hero.loc.6th_oct":      "السادس من أكتوبر، الجيزة",
      "hero.loc.north_coast":  "الساحل الشمالي، الإسكندرية",
      "hero.loc.ain_sokhna":   "العين السخنة، السويس",
      "hero.loc.sheikh_zayed": "الشيخ زايد، الجيزة",
      "hero.stat.starting":    "يبدأ من",
      "hero.stat.area":        "مساحة الوحدة",
      "hero.stat.units":       "إجمالي الوحدات",
      "hero.prev":             "العقار السابق",
      "hero.next":             "العقار التالي",

      /* Finder */
      "finder.eyebrow":   "خصّص مساحتك",
      "finder.heading":   "ابحث عن تصميم منزلك المثالي",
      "finder.bedrooms":  "غرف النوم",
      "finder.bathrooms": "دورات المياه",
      "finder.finishing": "التشطيب",
      "finder.standard":  "عادي",
      "finder.luxury":    "فاخر",
      "finder.ultra":     "الترا",
      "finder.cta":       "← ابحث عن عقارات",

      /* Properties slider (index) */
      "props_slider.eyebrow": "تصفح العقارات",
      "props_slider.heading": "ابحث عن عقارك المثالي",

      /* Featured (index) */
      "feat.eyebrow": "استكشف الآن",
      "feat.heading": "وحدات مميزة",

      /* Projects (index) */
      "proj.eyebrow":  "مشاريعنا",
      "proj.headline": "فصلك الجديد يبدأ بالعنوان الصحيح.",
      "proj.cta":      "استكشف جميع المشاريع",

      /* Contact (index) */
      "contact.eyebrow": "تواصل معنا",

      /* Footer */
      "footer.tagline":      "شريكك الأكثر ثقة في العقارات بمصر — نربط الأسر بأرقى المشاريع في أفضل المواقع.",
      "footer.col.navigate": "التنقل",
      "footer.col.areas":    "المناطق",
      "footer.col.contact":  "تواصل معنا",
      "footer.nav.home":       "الرئيسية",
      "footer.nav.properties": "العقارات",
      "footer.nav.projects":   "المشاريع",
      "footer.nav.about":      "عن الشركة",
      "footer.nav.blog":       "المدونة",
      "footer.nav.contact":    "تواصل معنا",
      "footer.area.new_cairo":    "القاهرة الجديدة",
      "footer.area.new_capital":  "العاصمة الإدارية",
      "footer.area.sheikh_zayed": "الشيخ زايد",
      "footer.area.north_coast":  "الساحل الشمالي",
      "footer.area.ain_sokhna":   "العين السخنة",
      "footer.area.6th_oct":      "السادس من أكتوبر",
      "footer.address":  "٩٠ شارع محمد نجيب، القاهرة الجديدة، القاهرة، مصر",
      "footer.copy":     "© 2026 عقار تاون. جميع الحقوق محفوظة.",
      "footer.privacy":  "سياسة الخصوصية",
      "footer.terms":    "شروط الاستخدام",
      "footer.cookies":  "إعدادات الكوكيز",

      /* Properties page */
      "props.breadcrumb_home": "الرئيسية",
      "props.breadcrumb":      "العقارات",
      "props.eyebrow":  "تصفح القوائم",
      "props.heading":  "ابحث عن عقارك",
      "props.desc":     "٥٤٤ عقاراً راقياً في أرقى مواقع مصر — من الاستوديوهات إلى فلل السماء.",
      "props.stat.available": "عقار متاح",
      "props.stat.locations": "موقع متميز",
      "filter.all":      "الكل",
      "filter.studio":   "استوديو",
      "filter.1br":      "١ غرفة",
      "filter.2br":      "٢ غرفة",
      "filter.3br":      "٣ غرف",
      "filter.villa":    "فيلا",
      "filter.sky_villa":"سكاي فيلا",
      "filter.adv":      "فلاتر",
      "sort.prefix":     "ترتيب:",
      "sort.featured":   "مميز",
      "sort.price_asc":  "السعر من الأقل",
      "sort.price_desc": "السعر من الأعلى",
      "sort.newest":     "الأحدث",
      "sort.area":       "حسب المساحة",
      "adv.location":   "الموقع",
      "adv.price":      "نطاق السعر (جنيه)",
      "adv.area":       "المساحة (م²)",
      "adv.bedrooms":   "غرف النوم",
      "adv.delivery":   "التسليم",
      "adv.ready":      "جاهز الآن",
      "adv.q4_2026":    "الربع الرابع 2026",
      "adv.q2_2027":    "الربع الثاني 2027",
      "adv.off_plan":   "على الخريطة",
      "adv.finishing":  "التشطيب",
      "adv.standard":   "عادي",
      "adv.luxury":     "فاخر",
      "adv.ultra":      "الترا",
      "adv.clear":      "مسح الكل",
      "adv.apply":      "تطبيق الفلاتر",
      "loc.new_cairo":    "القاهرة الجديدة",
      "loc.north_coast":  "الساحل الشمالي",
      "loc.sheikh_zayed": "الشيخ زايد",
      "loc.new_capital":  "العاصمة الإدارية",
      "loc.ain_sokhna":   "العين السخنة",
      "loc.6th_oct":      "السادس من أكتوبر",
      "loc.more":         "+٣ مزيد",
      "results.of":      "من",
      "results.label":   "نتيجة",
      "card.view":       "عرض التفاصيل",

      /* Property detail */
      "pd.home":         "الرئيسية",
      "pd.properties":   "العقارات",
      "pd.gallery_eyebrow":  "معرض الوحدة",
      "pd.gallery_heading":  "كل زاوية، كل تفصيلة",
      "pd.about_eyebrow":    "عن الوحدة",
      "pd.amenities_eyebrow":"ما يشمله العقار",
      "pd.amenities_heading":"مميزات الوحدة",
      "pd.payment_eyebrow":  "خطة الدفع",
      "pd.payment_cta":      "ناقش خيارات الدفع",
      "pd.pay.milestone":    "المرحلة",
      "pd.pay.pct":          "٪",
      "pd.pay.amount":       "المبلغ (جنيه)",
      "pd.pay.due":          "الاستحقاق",
      "pd.pay.down":         "المقدم",
      "pd.pay.2nd":          "القسط الثاني",
      "pd.pay.3rd":          "القسط الثالث",
      "pd.pay.4th":          "القسط الرابع",
      "pd.pay.balance":      "الرصيد المتبقي",
      "pd.pay.on_contract":  "عند التعاقد",
      "pd.pay.on_delivery":  "عند التسليم",
      "pd.similar_eyebrow":  "قد يعجبك أيضاً",
      "pd.similar_heading":  "عقارات مشابهة",
      "pd.view":             "عرض التفاصيل",
      "pd.tag.ready":        "جاهز",
      "pd.tag.offplan":      "على الخريطة",

      /* Hero — missing badge + locations */
      "hero.badge.offplan":           "على الخريطة",
      "hero.loc.new_alamein":         "العلمين الجديدة، مطروح",
      "hero.loc.sidi_abdel_rahman":   "سيدي عبد الرحمن، الساحل الشمالي",

      /* Props slider cards */
      "prop.cat.residential":  "سكني",
      "prop.cat.premium":      "راقي",
      "prop.cat.villa":        "فيلا",
      "prop.cat.ultra":        "الترا راقي",
      "prop.card.studio_apt":  "استوديو<br>سكني",
      "prop.card.1br_apt":     "١ غرفة<br>شقة",
      "prop.card.2br_pent":    "٢ غرفة<br>بنتهاوس",
      "prop.card.3br_villa":   "٣ غرف<br>فيلا حديقة",
      "prop.card.sky_villa":   "سكاي<br>فيلا",

      /* Props detail panel labels */
      "props.det.price_from":    "يبدأ من",
      "props.det.living_space":  "المساحة المعيشية",
      "props.det.bedrooms":      "غرف النوم",
      "props.det.delivery":      "التسليم",
      "props.det.cta":           "← عرض القوائم",

      /* Projects body */
      "proj.body": "من أفق القاهرة الجديدة الصاعد إلى شواطئ الساحل الشمالي الخلابة، كل مشروع في محفظتنا مختار بعناية لقوة موقعه ومصداقية المطور وقيمته الاستثمارية على المدى البعيد.<br><br>نتعاون حصرياً مع أكثر مطوري مصر ثقةً — لذا كل عقار تستعرضه يأتي بسجل حافل وأسعار شفافة وموعد تسليم مضمون. بلا مفاجآت. بلا تنازلات.",

      /* Location section */
      "loc.section.eyebrow":  "استكشف حسب الموقع",
      "loc.section.heading":  "أين تريد أن <span class=\"mark\">تسكن؟</span>",
      "loc.section.footer":   "نخدم ٦ وجهات رئيسية · ٥٤٤+ قائمة نشطة",
      "loc.section.cta":      "عرض جميع المناطق",
      "loc.stat.properties":  "عقار",
      "loc.stat.price_from":  "يبدأ من",
      "loc.stat.projects":    "مشروع",

      /* Location tags */
      "loc.tag.east_cairo":    "شرق القاهرة",
      "loc.tag.mediterranean": "البحر المتوسط",
      "loc.tag.west_cairo":    "غرب القاهرة",
      "loc.tag.future_city":   "مدينة المستقبل",
      "loc.tag.red_sea":       "البحر الأحمر",

      /* Location prop counts */
      "loc.new_cairo.count":    "١٤٨ عقاراً",
      "loc.north_coast.count":  "٩٦ عقاراً",
      "loc.sheikh_zayed.count": "٧٤ عقاراً",
      "loc.new_capital.count":  "١١٢ عقاراً",
      "loc.ain_sokhna.count":   "٥٣ عقاراً",
      "loc.6th_oct.count":      "٦١ عقاراً",

      /* Location districts */
      "loc.district.fifth_settlement": "التجمع الخامس",
      "loc.district.banafseg":         "البنفسج",
      "loc.district.rehab":            "مدينة الرحاب",
      "loc.district.madinaty":         "مدينتي",
      "loc.district.sidi_abdel_rahman":"سيدي عبد الرحمن",
      "loc.district.hacienda":         "هاسيندا باي",
      "loc.district.marassi":          "مراسي",
      "loc.district.allegria":         "أليجريا",
      "loc.district.zayed_2000":       "زايد 2000",
      "loc.district.golf":             "حي الجولف",
      "loc.district.r7":               "منطقة R7",
      "loc.district.r8":               "منطقة R8",
      "loc.district.downtown_cap":     "وسط البلد",
      "loc.district.mu23":             "MU23",
      "loc.district.porto_sokhna":     "بورتو السخنة",
      "loc.district.azzurra":          "أزورا",
      "loc.district.la_vista":         "لافيستا",
      "loc.district.hadayek_october":  "حدائق أكتوبر",
      "loc.district.wadi_nile":        "وادي النيل",
      "loc.district.beverly":          "بيفرلي هيلز",

      /* Mobile menu */
      "mob.home":       "الرئيسية",
      "mob.properties": "العقارات",
      "mob.projects":   "المشاريع",
      "mob.about":      "عن الشركة",
      "mob.blog":       "المدونة",
      "mob.contact":    "تواصل معنا",

      /* Property detail */
      "pd.stat.beds":           "سرير",
      "pd.stat.baths":          "حمام",
      "pd.stat.floor":          "الدور",
      "pd.stat.view":           "إطلالة حديقة",
      "pd.cta.request_viewing": "طلب مشاهدة",
      "pd.cta.save":            "حفظ العقار",
      "pd.spec.unit_type":      "نوع الوحدة",
      "pd.spec.total_area":     "إجمالي المساحة",
      "pd.spec.floor":          "الدور",
      "pd.spec.view":           "الإطلالة",
      "pd.spec.project":        "المشروع",
      "pd.spec.location":       "الموقع",
      "pd.spec.finishing":      "التشطيب",
      "pd.spec.delivery":       "التسليم",
      "pd.val.2bed_apt":        "شقة ٢ غرف",
      "pd.val.garden_pool":     "حديقة وحوض سباحة",
      "pd.val.garden_view":     "إطلالة حديقة",
      "pd.about.heading":       "حياة راقية في قلب القاهرة الجديدة",
      "pd.about.p1":            "تقع هذه الشقة بمساحة ١٤٨ م² ذات الإطلالة على الحديقة في الدور الخامس من مجمع أزها ريزيدنس — أحد أرقى مجمعات القاهرة الجديدة. صُممت لمن يقدّرون المساحة والهدوء معاً، إذ تطل الوحدة على حديقة منسقة فسيحة وحمام سباحة فندقي.",
      "pd.about.p2":            "يربط التصميم المفتوح مناطق المعيشة والطعام بسلاسة، فيما تملأ النوافذ الممتدة من الأرض إلى السقف كل غرفة بالضوء الطبيعي. كلتا غرفتي النوم لديهما حمامات خاصة، أما غرفة النوم الرئيسية فتتميز بغرفة ملابس وإمكانية الوصول إلى الشرفة الخاصة.",
      "pd.about.p3":            "تُسلَّم مكتملة التشطيب بأرضيات رخام إيطالي وخزائن مدمجة ومطبخ مجهز بالكامل — جاهزة للسكن فوراً.",
      "pd.features.eyebrow":   "أبرز التصميم الداخلي",
      "pd.features.heading":   "مصنوع بدقة، منتهٍ بهدف",
      "pd.feature.open_plan":  "<strong>معيشة وطعام مفتوح</strong>تدفق سلس بين المساحات، مثالي للترفيه والراحة اليومية.",
      "pd.feature.smart_home": "<strong>نظام المنزل الذكي</strong>مُجهَّز مسبقاً للأتمتة الكاملة — الإضاءة والمناخ والأمان من هاتفك.",
      "pd.feature.marble":     "<strong>أرضيات رخام إيطالي</strong>رخام بوتيتشينو في جميع مناطق المعيشة وغرفة النوم الرئيسية.",
      "pd.feature.windows":    "<strong>نوافذ من الأرض إلى السقف</strong>زجاج مزدوج ومعالج بالأشعة فوق البنفسجية — أقصى إطلالة على الحديقة وأدنى حرارة.",
      "pd.gal.living_room":    "غرفة المعيشة",
      "pd.gal.master_bedroom": "غرفة النوم الرئيسية",
      "pd.gal.kitchen":        "مطبخ مفتوح",
      "pd.gal.bedroom2":       "غرفة النوم الثانية",
      "pd.gal.balcony":        "الشرفة",
      "pd.gal.bathroom":       "حمام رئيسي",
      "pd.amenity.balcony":    "شرفة خاصة",
      "pd.amenity.wardrobes":  "خزائن مدمجة",
      "pd.amenity.ac":         "تكييف مركزي",
      "pd.amenity.smart_home": "نظام المنزل الذكي",
      "pd.amenity.kitchen":    "مطبخ مفتوح",
      "pd.amenity.laundry":    "غرفة الغسيل",
      "pd.amenity.storage":    "غرفة التخزين",
      "pd.amenity.en_suite":   "غرفة نوم رئيسية بحمام خاص",
      "pd.sticky.beds":        "سرير",
      "pd.sticky.baths":       "حمام",
    },
  };

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }

  function apply(lang) {
    var tr = T[lang] || T.en;

    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = tr[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = tr[el.dataset.i18nHtml];
      if (v !== undefined) el.innerHTML = v;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = tr[el.dataset.i18nPlaceholder];
      if (v !== undefined) el.placeholder = v;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = tr[el.dataset.i18nAria];
      if (v !== undefined) el.setAttribute("aria-label", v);
    });

    /* Switcher label */
    var toggle = document.getElementById("langToggle");
    if (toggle) {
      var ind = toggle.querySelector(".lang-indicator");
      if (ind) ind.textContent = lang === "ar" ? "EN" : "AR";
      toggle.setAttribute(
        "aria-label",
        lang === "ar" ? "Switch to English" : "التبديل إلى العربية"
      );
    }

    document.dispatchEvent(new CustomEvent("akar:langchange", { detail: { lang: lang } }));
  }

  function init() {
    apply(getLang());
    var toggle = document.getElementById("langToggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = getLang() === "en" ? "ar" : "en";
        localStorage.setItem(STORAGE_KEY, next);
        apply(next);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
