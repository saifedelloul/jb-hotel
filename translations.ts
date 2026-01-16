export type Language = 'en' | 'fr' | 'ar';

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      rooms: "Rooms",
      services: "Services",
      events: "Events",
      contact: "Contact",
      bookBtn: "Book Now",
      bookStay: "Book Your Stay"
    },
    hero: {
      titleLine1: "Luxury Redefined in the",
      titleLine2: "Heart of Biskra",
      subtitle: "Where Elegance Meets Comfort • 5-Star Experience",
      cta1: "Book Your Stay",
      cta2: "Discover Luxury"
    },
    about: {
      story: "Our Story",
      title: "A Sanctuary of",
      titleHighlight: "Prestige",
      titleEnd: "& Elegance",
      p1: "JB HOTEL is a refined luxury hotel offering premium hospitality, elegant rooms, and first-class service. Nestled in the vibrant heart of Biskra, we have curated a sanctuary where timeless architectural beauty meets modern sophistication.",
      p2: "From the moment you step through our golden doors, you are not just a guest, but royalty. Our commitment to exclusivity and personalized service ensures an unforgettable stay.",
      stat1: "Luxury Suites",
      stat2: "Rating",
      stat3: "Concierge"
    },
    rooms: {
      subtitle: "Accommodations",
      title: "Stay in",
      titleHighlight: "Luxury",
      night: "/ Night",
      details: "Details",
      list: [
        {
          id: 'deluxe',
          title: 'Deluxe Room',
          description: 'A perfect blend of comfort and style featuring city views and premium amenities.',
          features: ['King Bed', 'City View', '45m²']
        },
        {
          id: 'executive',
          title: 'Executive Room',
          description: 'Designed for business and leisure, offering exclusive lounge access and workspace.',
          features: ['Lounge Access', 'Work Desk', '55m²']
        },
        {
          id: 'suite',
          title: 'Luxury Suite',
          description: 'The pinnacle of opulence with a private terrace, jacuzzi, and dedicated butler service.',
          features: ['Private Terrace', 'Jacuzzi', 'Butler', '85m²']
        }
      ]
    },
    services: {
      subtitle: "Facilities",
      title: "First-Class",
      titleHighlight: "Services",
      viewAll: "View All Services",
      list: [
        { title: 'Luxury Dining', description: 'World-class gourmet cuisine prepared by award-winning chefs.' },
        { title: 'Spa & Wellness', description: 'Rejuvenate your senses with our exclusive spa treatments and pool.' },
        { title: 'Conference Halls', description: 'State-of-the-art facilities for seamless business meetings and events.' },
        { title: '24/7 Reception', description: 'Our dedicated concierge team is always available to assist you.' },
        { title: 'Secure Parking', description: 'Valet parking and 24-hour security surveillance for your vehicle.' },
        { title: 'Private Events', description: 'Exclusive venues for weddings, galas, and private celebrations.' }
      ]
    },
    events: {
      subtitle: "Entertainment",
      title: "Nightlife &",
      titleHighlight: "Events",
      viewAll: "View Calendar",
      reserve: "Reserve Table",
      learnMore: "Learn More",
      bookEvent: "Book Reservation",
      list: [
        {
          title: 'Arabian Nights Gala',
          date: 'Every Thursday',
          time: '20:00 - 00:00',
          description: 'Immerse yourself in traditional music and exquisite local cuisine under the stars.',
          longDescription: 'Experience the magic of the Orient with our signature Arabian Nights Gala. Featuring live Oud performances, a buffet of authentic Biskra delicacies, and a mesmerizing atmosphere on our main terrace. Perfect for cultural enthusiasts and food lovers alike.',
          tag: 'Cultural'
        },
        {
          title: 'Rooftop Jazz Lounge',
          date: 'Fridays & Saturdays',
          time: '21:00 - 02:00',
          description: 'Enjoy signature cocktails and smooth jazz performances with a panoramic view of Biskra.',
          longDescription: 'Elevate your weekend at our open-air Rooftop Jazz Lounge. Sip on handcrafted artisanal cocktails while listening to the smooth sounds of our resident jazz quartet. The panoramic view of the Biskra skyline provides the perfect backdrop for a sophisticated evening.',
          tag: 'Music'
        },
        {
          title: 'Exclusive DJ Sets',
          date: 'Special Weekends',
          time: '22:00 - 03:00',
          description: 'World-class DJs bring the energy to our luxury lounge for an unforgettable night.',
          longDescription: 'When the sun goes down, the energy rises. Join us for exclusive sets by renowned international and local DJs in our VIP lounge. Expect premium bottle service, a high-energy crowd, and a state-of-the-art sound system that keeps the party going until late.',
          tag: 'Nightlife'
        }
      ]
    },
    experience: {
      title: "An Unforgettable",
      titleHighlight: "Atmosphere",
      text: "Experience the epitome of luxury living. From our Michelin-starred dining options to our world-class wellness center, every detail at JB HOTEL is curated to exceed your expectations.",
      cta: "Explore The Experience"
    },
    testimonials: {
      title: "Guest Stories",
      reviews: [
        {
          name: 'Sarah Johnson',
          role: 'Business Traveler',
          content: "An absolute gem in Biskra. The executive suite was impeccable, and the staff treated me like royalty. The attention to detail is unmatched."
        },
        {
          name: 'Michael Chen',
          role: 'Vacancier',
          content: "The most luxurious hotel experience I've had in years. The spa services are world-class and the restaurant offers exquisite culinary delights."
        },
        {
          name: 'Amira Benali',
          role: 'Event Organizer',
          content: "We hosted our annual gala here. The conference facilities are state-of-the-art and the event management team was flawless."
        }
      ]
    },
    contact: {
      subtitle: "Contact Us",
      title: "Make a Reservation",
      placeholders: {
        fname: "First Name",
        lname: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        checkin: "Check In",
        checkout: "Check Out",
        special: "Special Requests"
      },
      cta: "Check Availability",
      infoTitle: "Information",
      labels: {
        location: "Location",
        locationVal: "Heart of Biskra, Algeria",
        phone: "Phone",
        email: "Email"
      },
      mapBtn: "View on Google Maps",
      validation: {
        required: "This field is required",
        email: "Please enter a valid email",
        phone: "Please enter a valid phone number",
        datePast: "Date cannot be in the past",
        dateOrder: "Check-out must be after check-in"
      }
    },
    footer: {
      tagline: "Experience the pinnacle of luxury in Biskra. Where every moment is crafted to perfection.",
      links: "Quick Links",
      legal: "Legal",
      follow: "Follow Us",
      rights: "© 2026 JB Hotel. All rights reserved.",
      designed: "Designed by delloul.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      logoText: "HOTEL"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À Propos",
      rooms: "Chambres",
      services: "Services",
      events: "Événements",
      contact: "Contact",
      bookBtn: "Réserver",
      bookStay: "Réservez Votre Séjour"
    },
    hero: {
      titleLine1: "Le Luxe Redéfini au",
      titleLine2: "Cœur de Biskra",
      subtitle: "Où l'Élégance Rencontre le Confort • Expérience 5 Étoiles",
      cta1: "Réserver",
      cta2: "Découvrir le Luxe"
    },
    about: {
      story: "Notre Histoire",
      title: "Un Sanctuaire de",
      titleHighlight: "Prestige",
      titleEnd: "& d'Élégance",
      p1: "JB HOTEL est un hôtel de luxe raffiné offrant une hospitalité haut de gamme, des chambres élégantes et un service de première classe. Niché au cœur vibrant de Biskra, nous avons créé un sanctuaire où la beauté architecturale intemporelle rencontre la sophistication moderne.",
      p2: "Dès que vous franchissez nos portes dorées, vous n'êtes pas seulement un client, mais un roi. Notre engagement envers l'exclusivité et le service personnalisé garantit un séjour inoubliable.",
      stat1: "Suites de Luxe",
      stat2: "Évaluation",
      stat3: "Conciergerie"
    },
    rooms: {
      subtitle: "Hébergements",
      title: "Séjournez dans le",
      titleHighlight: "Luxe",
      night: "/ Nuit",
      details: "Détails",
      list: [
        {
          id: 'deluxe',
          title: 'Chambre Deluxe',
          description: 'Un mélange parfait de confort et de style avec vue sur la ville et équipements haut de gamme.',
          features: ['Lit King', 'Vue Ville', '45m²']
        },
        {
          id: 'executive',
          title: 'Chambre Exécutive',
          description: 'Conçue pour les affaires et les loisirs, offrant un accès exclusif au salon et un espace de travail.',
          features: ['Accès Salon', 'Bureau', '55m²']
        },
        {
          id: 'suite',
          title: 'Suite Luxe',
          description: 'Le summum de l\'opulence avec terrasse privée, jacuzzi et service de majordome dédié.',
          features: ['Terrasse Privée', 'Jacuzzi', 'Majordome', '85m²']
        }
      ]
    },
    services: {
      subtitle: "Installations",
      title: "Services de",
      titleHighlight: "Première Classe",
      viewAll: "Voir Tous les Services",
      list: [
        { title: 'Restauration de Luxe', description: 'Cuisine gastronomique de classe mondiale préparée par des chefs primés.' },
        { title: 'Spa & Bien-être', description: 'Rajeunissez vos sens avec nos soins spa exclusifs et notre piscine.' },
        { title: 'Salles de Conférence', description: 'Installations ultramodernes pour des réunions et événements fluides.' },
        { title: 'Réception 24/7', description: 'Notre équipe de conciergerie dédiée est toujours disponible pour vous aider.' },
        { title: 'Parking Sécurisé', description: 'Service de voiturier et surveillance de sécurité 24h/24 pour votre véhicule.' },
        { title: 'Événements Privés', description: 'Lieux exclusifs pour mariages, galas et célébrations privées.' }
      ]
    },
    events: {
      subtitle: "Divertissement",
      title: "Vie Nocturne &",
      titleHighlight: "Événements",
      viewAll: "Voir le Calendrier",
      reserve: "Réserver",
      learnMore: "En Savoir Plus",
      bookEvent: "Réserver l'Événement",
      list: [
        {
          title: 'Gala des Mille et Une Nuits',
          date: 'Chaque Jeudi',
          time: '20h00 - 00h00',
          description: 'Plongez dans la musique traditionnelle et la cuisine locale exquise sous les étoiles.',
          longDescription: 'Vivez la magie de l\'Orient avec notre Gala signature des Mille et Une Nuits. Avec des performances de Oud en direct, un buffet de délices authentiques de Biskra et une atmosphère envoûtante sur notre terrasse principale.',
          tag: 'Culturel'
        },
        {
          title: 'Lounge Jazz Rooftop',
          date: 'Vendredis & Samedis',
          time: '21h00 - 02h00',
          description: 'Profitez de cocktails signature et de jazz doux avec une vue panoramique sur Biskra.',
          longDescription: 'Élevez votre week-end à notre lounge jazz sur le toit. Sirotez des cocktails artisanaux tout en écoutant les sons doux de notre quartet de jazz résident, avec une vue panoramique sur la skyline de Biskra.',
          tag: 'Musique'
        },
        {
          title: 'Soirées DJ Exclusives',
          date: 'Week-ends Spéciaux',
          time: '22h00 - 03h00',
          description: 'Des DJ de classe mondiale apportent l\'énergie à notre lounge de luxe pour une nuit inoubliable.',
          longDescription: 'Quand le soleil se couche, l\'énergie monte. Rejoignez-nous pour des sets exclusifs de DJ internationaux et locaux. Attendez-vous à un service de bouteilles premium et un système de son de pointe.',
          tag: 'Vie Nocturne'
        }
      ]
    },
    experience: {
      title: "Une Atmosphère",
      titleHighlight: "Inoubliable",
      text: "Vivez l'épitomé de la vie de luxe. De nos options de restauration étoilées Michelin à notre centre de bien-être de classe mondiale, chaque détail au JB HOTEL est conçu pour dépasser vos attentes.",
      cta: "Explorer l'Expérience"
    },
    testimonials: {
      title: "Témoignages",
      reviews: [
        {
          name: 'Sarah Johnson',
          role: 'Voyageuse d\'Affaires',
          content: "Un joyau absolu à Biskra. La suite exécutive était impeccable et le personnel m'a traitée comme une reine. L'attention aux détails est inégalée."
        },
        {
          name: 'Michael Chen',
          role: 'Vacancier',
          content: "L'expérience hôtelière la plus luxueuse que j'ai eue depuis des années. Les services de spa sont de classe mondiale et le restaurant offre des délices culinaires exquis."
        },
        {
          name: 'Amira Benali',
          role: 'Organisatrice d\'Événements',
          content: "Nous avons organisé notre gala annuel ici. Les installations de conférence sont ultramodernes et l'équipe de gestion d'événements était impeccable."
        }
      ]
    },
    contact: {
      subtitle: "Contactez-nous",
      title: "Faire une Réservation",
      placeholders: {
        fname: "Prénom",
        lname: "Nom",
        email: "Adresse Email",
        phone: "Numéro de Téléphone",
        checkin: "Arrivée",
        checkout: "Départ",
        special: "Demandes Spéciales"
      },
      cta: "Vérifier la Disponibilité",
      infoTitle: "Informations",
      labels: {
        location: "Localisation",
        locationVal: "Cœur de Biskra, Algérie",
        phone: "Téléphone",
        email: "Email"
      },
      mapBtn: "Voir sur Google Maps",
      validation: {
        required: "Ce champ est requis",
        email: "Veuillez entrer un email valide",
        phone: "Veuillez entrer un numéro valide",
        datePast: "La date ne peut pas être passée",
        dateOrder: "Le départ doit être après l'arrivée"
      }
    },
    footer: {
      tagline: "Vivez le summum du luxe à Biskra. Où chaque moment est conçu à la perfection.",
      links: "Liens Rapides",
      legal: "Légal",
      follow: "Suivez-nous",
      rights: "© 2026 JB Hotel. Tous droits réservés.",
      designed: "Conçu pour le Luxe.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      cookies: "Politique de Cookies",
      logoText: "HÔTEL"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عن الفندق",
      rooms: "الغرف",
      services: "الخدمات",
      events: "الحفلات",
      contact: "اتصل بنا",
      bookBtn: "احجز الآن",
      bookStay: "احجز إقامتك"
    },
    hero: {
      titleLine1: "الرفاهية بمفهوم جديد في",
      titleLine2: "قلب بسكرة",
      subtitle: "حيث تلتقي الأناقة بالراحة • تجربة 5 نجوم",
      cta1: "احجز إقامتك",
      cta2: "اكتشف الفخامة"
    },
    about: {
      story: "قصتنا",
      title: "ملاذ من",
      titleHighlight: "الهيبة",
      titleEnd: "والأناقة",
      p1: "فندق جي بي هو فندق فاخر يقدم ضيافة متميزة، غرف أنيقة، وخدمة من الدرجة الأولى. يقع في قلب بسكرة النابض بالحياة، لقد أنشأنا ملاذاً يلتقي فيه الجمال المعماري الخالد مع التطور الحديث.",
      p2: "من اللحظة التي تخطو فيها عبر أبوابنا الذهبية، لست مجرد ضيف، بل أنت من الملوك. التزامنا بالحصرية والخدمة الشخصية يضمن لك إقامة لا تُنسى.",
      stat1: "أجنحة فاخرة",
      stat2: "التقييم",
      stat3: "خدمة كونسيرج"
    },
    rooms: {
      subtitle: "الإقامة",
      title: "أقم في",
      titleHighlight: "فخامة",
      night: "/ ليلة",
      details: "التفاصيل",
      list: [
        {
          id: 'deluxe',
          title: 'غرفة ديلوكس',
          description: 'مزيج مثالي من الراحة والأناقة مع إطلالات على المدينة ووسائل راحة متميزة.',
          features: ['سرير كينج', 'إطلالة على المدينة', '45م²']
        },
        {
          id: 'executive',
          title: 'غرفة تنفيذية',
          description: 'مصممة للأعمال والترفيه، وتوفر دخولاً حصرياً إلى الصالة ومساحة للعمل.',
          features: ['دخول الصالة', 'مكتب عمل', '55م²']
        },
        {
          id: 'suite',
          title: 'جناح فاخر',
          description: 'قمة الفخامة مع تراس خاص، جاكوزي، وخدمة خادم شخصي مخصصة.',
          features: ['تراس خاص', 'جاكوزي', 'خادم شخصي', '85م²']
        }
      ]
    },
    services: {
      subtitle: "المرافق",
      title: "خدمات",
      titleHighlight: "من الدرجة الأولى",
      viewAll: "عرض جميع الخدمات",
      list: [
        { title: 'مطاعم فاخرة', description: 'مأكولات عالمية المستوى يعدها طهاة حائزون على جوائز.' },
        { title: 'سبا وعافية', description: 'جدد حواسك مع علاجات السبا الحصرية والمسبح.' },
        { title: 'قاعات مؤتمرات', description: 'مرافق حديثة لاجتماعات العمل والفعاليات السلسة.' },
        { title: 'استقبال 24/7', description: 'فريق الكونسيرج المخصص لدينا متاح دائماً لمساعدتك.' },
        { title: 'موقف آمن', description: 'خدمة صف السيارات ومراقبة أمنية على مدار 24 ساعة لسيارتك.' },
        { title: 'فعاليات خاصة', description: 'أماكن حصرية لحفلات الزفاف والحفلات والاحتفالات الخاصة.' }
      ]
    },
    events: {
      subtitle: "الترفيه",
      title: "السهرات",
      titleHighlight: "والحفلات",
      viewAll: "عرض الجدول",
      reserve: "احجز",
      learnMore: "اكتشف المزيد",
      bookEvent: "احجز تذكرتك",
      list: [
        {
          title: 'سهرات ليالي الشرق',
          date: 'كل يوم خميس',
          time: '٢٠:٠٠ - ٠٠:٠٠',
          description: 'استمتع بالموسيقى التقليدية والمأكولات المحلية الرائعة تحت النجوم.',
          longDescription: 'عش سحر الشرق مع حفلنا المميز "ليالي الشرق". استمتع بعروض العود الحية، وبوفيه من أشهى المأكولات البسكرية الأصيلة، وأجواء ساحرة على تراسنا الرئيسي. مثالية لعشاق الثقافة ومحبي الطعام.',
          tag: 'ثقافي'
        },
        {
          title: 'صالة الجاز',
          date: 'الجمعة والسبت',
          time: '٢١:٠٠ - ٠٢:٠٠',
          description: 'استمتع بالمشروبات المميزة وعروض الجاز الهادئة مع إطلالة بانورامية على بسكرة.',
          longDescription: 'ارتقِ بعطلة نهاية الأسبوع في صالة الجاز المفتوحة على السطح. استمتع بالمشروبات المصنوعة يدوياً أثناء الاستماع إلى أنغام الجاز الهادئة من فرقتنا الموسيقية، مع إطلالة بانورامية على أفق بسكرة توفر خلفية مثالية لأمسية راقية.',
          tag: 'موسيقى'
        },
        {
          title: 'حفلات دي جي حصرية',
          date: 'عطلات نهاية الأسبوع',
          time: '٢٢:٠٠ - ٠٣:٠٠',
          description: 'أفضل منسقي الأغاني يضفون جواً من الحماس في صالتنا الفاخرة لقضاء ليلة لا تُنسى.',
          longDescription: 'عندما تغيب الشمس، ترتفع الطاقة. انضم إلينا في حفلات حصرية لمنسقي أغانٍ عالميين ومحليين في صالة كبار الشخصيات. توقع خدمة مميزة، حشوداً مفعمة بالحيوية، ونظام صوتي متطور يبقي الحفل مستمراً حتى وقت متأخر.',
          tag: 'حياة ليلية'
        }
      ]
    },
    experience: {
      title: "أجواء",
      titleHighlight: "لا تُنسى",
      text: "عش قمة الحياة الفاخرة. من خيارات الطعام الحائزة على نجمة ميشلان إلى مركز العافية العالمي المستوى، تم تصميم كل تفصيل في فندق جي بي ليتجاوز توقعاتك.",
      cta: "اكتشف التجربة"
    },
    testimonials: {
      title: "قصص الضيوف",
      reviews: [
        {
          name: 'سارة جونسون',
          role: 'مسافرة أعمال',
          content: "جوهرة مطلقة في بسكرة. الجناح التنفيذي كان لا تشوبه شائبة، والموظفون عاملوني كملكة. الاهتمام بالتفاصيل لا مثيل له."
        },
        {
          name: 'مايكل تشن',
          role: 'سائح',
          content: "أفخم تجربة فندقية حظيت بها منذ سنوات. خدمات السبا عالمية المستوى والمطعم يقدم أطباقاً شهية."
        },
        {
          name: 'أميرة بن علي',
          role: 'منظمة فعاليات',
          content: "أقمنا حفلنا السنوي هنا. مرافق المؤتمرات حديثة جداً وفريق إدارة الفعاليات كان مثالياً."
        }
      ]
    },
    contact: {
      subtitle: "اتصل بنا",
      title: "قم بالحجز",
      placeholders: {
        fname: "الاسم الأول",
        lname: "الاسم الأخير",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        checkin: "تسجيل الدخول",
        checkout: "المغادرة",
        special: "طلبات خاصة"
      },
      cta: "تحقق من التوفر",
      infoTitle: "المعلومات",
      labels: {
        location: "الموقع",
        locationVal: "قلب بسكرة، الجزائر",
        phone: "الهاتف",
        email: "البريد الإلكتروني"
      },
      mapBtn: "عرض على خرائط جوجل",
      validation: {
        required: "هذا الحقل مطلوب",
        email: "يرجى إدخال بريد صحيح",
        phone: "يرجى إدخال رقم صحيح",
        datePast: "التاريخ غير صالح",
        dateOrder: "المغادرة بعد الوصول"
      }
    },
    footer: {
      tagline: "جرب قمة الفخامة في بسكرة. حيث صُنع كل لحظة بإتقان.",
      links: "روابط سريعة",
      legal: "قانوني",
      follow: "تابعنا",
      rights: "© 2026 فندق جي بي. جميع الحقوق محفوظة.",
      designed: " صمم من دلول.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookies: "سياسة ملفات الارتباط",
      logoText: "فندق"
    }
  }
};