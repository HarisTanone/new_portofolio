// data.js - Central data store for the portfolio website

const portfolioData = {
    // Personal Info
    personal: {
        name: "Haris Tanone",
        title: "Software Engineer",
        bio: "Saya seorang software engineer yang memiliki pengalaman menggunakan framework seperti CodeIgniter dan Laravel. Saya juga menguasai JavaScript serta manajemen database dengan Oracle, MySQL, dan SQL Server. Sekarang saya sedang memperluas pengetahuan dalam penggunaan Flutter dan Express.js, serta terbuka untuk mempelajari teknologi baru.",
        contact: {
            phone: "081225704292",
            phoneLink: "https://wa.me/+6281225704292",
            email: "Tanoneharis@gmail.com",
            emailLink: "mailto:Tanoneharis@gmail.com",
            location: "Salatiga, Jawa Tengah",
            locationLink: "https://www.google.com/maps/place/Salatiga,+Kota+Salatiga,+Jawa+Tengah"
        },
        social: {
            github: "https://github.com/haristanone",
            linkedin: "https://www.linkedin.com/in/haris-tanone/",
            instagram: "https://www.instagram.com/haris.t_/"
        },
        interests: ["Programming", "IT Security", "Quality Assurance (QA)"],
        profileImg: "assets/images/profile.png"
    },
    
    // Skills
    skills: [
        {
            name: "CodeIgniter",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codeigniter.svg"
        },
        {
            name: "Laravel",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/laravel.svg"
        },
        {
            name: "Bootstrap",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/bootstrap.svg"
        },
        {
            name: "JavaScript",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg"
        },
        {
            name: "Oracle",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/oracle.svg"
        },
        {
            name: "MySQL",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mysql.svg"
        },
        {
            name: "SQL Server",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoftsqlserver.svg"
        },
        {
            name: "MongoDB",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg"
        },
        {
            name: "Vue.js",
            icon: "https://unpkg.com/simple-icons@8.15.0/icons/vuedotjs.svg"
        },
        {
            name: "JQuery",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/jquery.svg"
        },
        {
            name: "Tailwind CSS",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tailwindcss.svg"
        },
        {
            name: "Flutter",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/flutter.svg"
        },
        {
            name: "Epicor ERP",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/epicgames.svg"
        },
        {
            name: "SSRS Report Builder",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoft.svg"
        }
    ],
    
    // Experience
    experience: [
        {
            title: "IT Staff",
            company: "Luby Indonesia",
            period: "Mei 2024 - Sekarang",
            location: "Jakarta Barat",
            responsibilities: [
                "Mengembangkan aplikasi mobile untuk tracking pengiriman barang sesuai surat jalan.",
                "Menyempurnakan modul Epicor ERP dengan menambahkan BAQ, memperbaiki laporan SSRS, dan memperbarui layout dashboard.",
                "Berhasil mengembangkan Epicor ERP hingga 30% untuk optimasi operasional perusahaan."
            ]
        },
        {
            title: "Software Developer",
            company: "Krafthaus Indonesia",
            period: "Agustus 2022 - April 2024",
            location: "Yogyakarta",
            responsibilities: [
                "Melakukan peningkatan fitur situs web, pembaruan rutin, dan penambahan fitur sesuai kebutuhan.",
                "Memimpin rapat harian serta bertanggung jawab atas perencanaan sprint dan evaluasi sprint.",
                "Memperbaiki bug yang dilaporkan tim QA untuk kelancaran operasional situs web."
            ]
        },
        {
            title: "ICT Staff",
            company: "PT Adyawinsa Stamping Industries",
            period: "Juni 2021 - Agustus 2022",
            location: "Karawang",
            responsibilities: [
                "Mengembangkan aplikasi Web, Mobile, dan IoT untuk optimasi proses produksi dan pelacakan real-time.",
                "Merancang dan membangun Sistem Elektronik GR (E-GR) untuk pengelolaan penerimaan barang digital.",
                "Migrasi modul ERP G5 ke web hingga 40%, serta mengelola proyek IoT produksi harian."
            ]
        }
    ],
    
    // Portfolio Projects
    projects: {
        'project1': {
            id: 'project1',
            title: 'Aplikasi Tracking',
            shortDescription: 'Aplikasi untuk melacak pengiriman barang dan perhitungan point untuk bonus driver',
            thumbnail: 'assets/images/tracker/a1.png',
            tags: ['Flutter', 'Laravel', 'Epicor'],
            details: `
                <h3>Tentang Proyek</h3>
                <p>Aplikasi untuk melacak pengiriman barang dan perhitungan point untuk bonus driver</p>
                <h3>Tantangan</h3>
                <p>Implementasi OpenStreet Maps dengan polylines, Integrasi dengan Epicor ERP, dan sinkronisasi data</p>
                <h3>Solusi</h3>
                <p>Menggunakan cronjob untuk sinkronisasi data Epicor ERP</p>
                <h3>Teknologi yang Digunakan</h3>
                <ul>
                    <li>Flutter</li>
                    <li>Laravel</li>
                    <li>OpenStreet Maps</li>
                    <li>Cron job</li>
                    <li>Jquery</li>
                </ul>
            `,
            images: [
                'assets/images/tracker/a1.png',
                'assets/images/tracker/a2.png',
                'assets/images/tracker/web1.png',
                'assets/images/tracker/web2.png',
                'assets/images/tracker/web3.png',
                'assets/images/tracker/web4.png',
                'assets/images/tracker/web5.png',
                'assets/images/tracker/web6.png',
                'assets/images/tracker/web7.png',
            ]
        },
        'project2': {
            id: 'project2',
            title: 'Dashboard Epicor ERP',
            shortDescription: 'Pengembangan dashboard untuk visualisasi data bisnis dengan analisis real-time.',
            thumbnail: '/api/placeholder/600/400',
            tags: ['Epicor ERP', 'SSRS', 'BAQ'],
            details: `
                <h3>Tentang Proyek</h3>
                <p>Pengembangan dashboard untuk visualisasi data bisnis dengan analisis real-time.</p>
                <h3>Tantangan</h3>
                <p>Menampilkan data kompleks dalam format yang mudah dipahami.</p>
                <h3>Solusi</h3>
                <p>Menggunakan SSRS dan BAQ untuk mengolah dan menampilkan data secara efisien.</p>
                <h3>Teknologi yang Digunakan</h3>
                <ul>
                    <li>Epicor ERP</li>
                    <li>Business Activity Query (BAQ)</li>
                    <li>SQL Server Reporting Services (SSRS)</li>
                    <li>Dashboard visualisasi data</li>
                    <li>API Integrasi</li>
                </ul>
            `,
            images: [
                '/api/placeholder/800/500',
                '/api/placeholder/800/500',
                '/api/placeholder/800/500',
                '/api/placeholder/800/500'
            ]
        },
        'project3': {
            id: 'project3',
            title: 'Sistem Elektronik GR (E-GR)',
            shortDescription: 'Sistem pengelolaan penerimaan barang digital untuk mengoptimalkan proses logistik.',
            thumbnail: '/api/placeholder/600/400',
            tags: ['Laravel', 'MySQL', 'Bootstrap'],
            details: `
                <h3>Tentang Proyek</h3>
                <p>Sistem pengelolaan penerimaan barang digital untuk mengoptimalkan proses logistik.</p>
                <h3>Tantangan</h3>
                <p>Mengelola data penerimaan barang dalam jumlah besar.</p>
                <h3>Solusi</h3>
                <p>Menggunakan Laravel dan MySQL untuk sistem yang scalable dan responsif.</p>
                <h3>Teknologi yang Digunakan</h3>
                <ul>
                    <li>Laravel</li>
                    <li>MySQL</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>RESTful API</li>
                </ul>
            `,
            images: [
                '/api/placeholder/800/500',
                '/api/placeholder/800/500',
                '/api/placeholder/800/500',
                '/api/placeholder/800/500'
            ]
        },
        'project4': {
            id: 'project4',
            title: 'Solusi IoT Produksi',
            shortDescription: 'Implementasi IoT untuk monitoring dan perhitungan produksi harian secara otomatis.',
            thumbnail: '/api/placeholder/600/400',
            tags: ['IoT', 'Node.js', 'MongoDB'],
            details: `
                <h3>Tentang Proyek</h3>
                <p>Implementasi IoT untuk monitoring dan perhitungan produksi harian secara otomatis.</p>
                <h3>Tantangan</h3>
                <p>Sinkronisasi data IoT secara real-time.</p>
                <h3>Solusi</h3>
                <p>Menggunakan Node.js dan MongoDB untuk pengelolaan data yang cepat dan efisien.</p>
                <h3>Teknologi yang Digunakan</h3>
                <ul>
                    <li>Arduino dan ESP32</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>Socket.io</li>
                    <li>Chart.js</li>
                </ul>
            `,
            images: [
                '/api/placeholder/800/500',
                '/api/placeholder/800/500',
                '/api/placeholder/800/500',
                '/api/placeholder/800/500'
            ]
        }
    },
    
    // Navigation
    navigation: [
        { name: "Home", link: "#home" },
        { name: "Skills", link: "#skills" },
        { name: "Experience", link: "#experience" },
        { name: "Portfolio", link: "#portfolio" }
    ]
};