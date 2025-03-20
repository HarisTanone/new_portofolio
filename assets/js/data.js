// assets/js/data.js

const languageData = {
    en: {
        // Personal Info
        personal: {
            name: "Haris Tanone",
            title: "Software Engineer",
            bio: "I am a software engineer with experience using frameworks like CodeIgniter and Laravel. I am proficient in JavaScript and database management with Oracle, MySQL, and SQL Server. Currently, I am expanding my knowledge in Flutter and Express.js, and I am open to learning new technologies.",
            contact: {
                phone: "081225704292",
                phoneLink: "https://wa.me/+6281225704292",
                email: "Tanoneharis@gmail.com",
                emailLink: "mailto:Tanoneharis@gmail.com",
                location: "Salatiga, Central Java",
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
        
        // Skills (same for both languages)
        skills: [
            { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codeigniter.svg" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/laravel.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/bootstrap.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg" },
            { name: "Oracle", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/oracle.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mysql.svg" },
            { name: "SQL Server", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoftsqlserver.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg" },
            { name: "Vue.js", icon: "https://unpkg.com/simple-icons@8.15.0/icons/vuedotjs.svg" },
            { name: "JQuery", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/jquery.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tailwindcss.svg" },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/flutter.svg" },
            { name: "Epicor ERP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/epicgames.svg" },
            { name: "SSRS Report Builder", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoft.svg" }
        ],
        
        // Experience
        experience: [
            {
                title: "IT Staff",
                company: "Luby Indonesia",
                period: "May 2024 - Present",
                location: "West Jakarta",
                responsibilities: [
                    "Developed a mobile application for tracking goods delivery based on waybills.",
                    "Enhanced Epicor ERP modules by adding BAQs, fixing SSRS reports, and updating dashboard layouts.",
                    "Successfully developed Epicor ERP up to 30% for company operational optimization."
                ]
            },
            {
                title: "Software Developer",
                company: "Krafthaus Indonesia",
                period: "August 2022 - April 2024",
                location: "Yogyakarta",
                responsibilities: [
                    "Improved website features, performed routine updates, and added features as needed.",
                    "Led daily meetings and was responsible for sprint planning and evaluation.",
                    "Fixed bugs reported by the QA team to ensure smooth website operations."
                ]
            },
            {
                title: "ICT Staff",
                company: "PT Adyawinsa Stamping Industries",
                period: "June 2021 - August 2022",
                location: "Karawang",
                responsibilities: [
                    "Developed Web, Mobile, and IoT applications to optimize production processes and real-time tracking.",
                    "Designed and built an Electronic GR (E-GR) System for digital goods receipt management.",
                    "Migrated ERP G5 modules to the web up to 40% and managed daily production IoT projects."
                ]
            }
        ],
        
        // Portfolio Projects
        projects: {
            'project1': {
                id: 'project1',
                title: 'Tracking Application',
                shortDescription: 'An application to track goods delivery and calculate driver bonus points.',
                thumbnail: 'assets/images/tracker/a1.png',
                tags: ['Flutter', 'Laravel', 'Epicor'],
                details: `
                    <h3>About the Project</h3>
                    <p>An application to track goods delivery and calculate driver bonus points.</p>
                    <h3>Challenges</h3>
                    <p>Implementing OpenStreet Maps with polylines, integrating with Epicor ERP, and data synchronization.</p>
                    <h3>Solution</h3>
                    <p>Used cron jobs for Epicor ERP data synchronization.</p>
                    <h3>Technologies Used</h3>
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
                title: 'HRIS Web & Mobile',
                shortDescription: 'Development of an HRIS application for web and mobile versions.',
                thumbnail: 'assets/images/hris/2a.png',
                tags: ['Laravel', 'Filament', 'Flutter', 'Firebase', 'MySQL'],
                details: `
                    <h3>About the Project</h3>
                    <p>Development of an HRIS application for web and mobile versions.</p>
                    <h3>Challenges</h3>
                    <ul>
                        <li><strong>Complex Data Management:</strong> HRIS includes multiple modules like employee data, payroll, leave, attendance, etc. Managing data relationships can be challenging.</li>
                        <li><strong>API Optimization with Filament API Service:</strong> API endpoints must be fast and efficient to handle numerous mobile app requests.</li>
                        <li><strong>Real-time Push Notification with Firebase:</strong> Sending real-time notifications for leave, approvals, and important announcements.</li>
                        <li><strong>Authentication and Authorization Management:</strong> Must support user roles (e.g., Admin, Employee, HR) with different access levels.</li>
                        <li><strong>Data Security:</strong> Employee data is sensitive, requiring strict encryption and authorization.</li>
                    </ul>
                    <h3>Solution</h3>
                    <ul>
                        <li>Used Filament Admin Panel to streamline CRUD operations and data management efficiently.</li>
                        <li>Implemented Filament API Service to provide optimized APIs for the mobile app.</li>
                        <li>Utilized Firebase Cloud Messaging (FCM) for real-time push notifications.</li>
                        <li>Applied Role-Based Access Control (RBAC) in Laravel and Flutter.</li>
                        <li>Used Laravel Sanctum for secure backend-mobile communication.</li>
                    </ul>
                    <h3>Technologies Used</h3>
                    <ul>
                        <li>Filament PHP (Filament Admin & Filament API Service)</li>
                        <li>Flutter (Mobile Frontend)</li>
                        <li>Firebase Cloud Messaging (Push Notification)</li>
                        <li>Laravel + MySQL (Backend & Database)</li>
                        <li>API Integration for backend-frontend communication</li>
                    </ul>
                `,
                images: [
                    'assets/images/hris/1a.png',
                    'assets/images/hris/2a.png',
                    'assets/images/hris/3a.png',
                    'assets/images/hris/4a.png',
                    'assets/images/hris/web1.png',
                    'assets/images/hris/web2.png',
                    'assets/images/hris/web3.png',
                    'assets/images/hris/web4.png',
                    'assets/images/hris/web5.png',
                    'assets/images/hris/web6.png',
                    'assets/images/hris/web7.png',
                ]
            },
            'project3': {
                id: 'project3',
                title: 'Coming Soon',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                thumbnail: 'assets/images/dummy/dummy.jpg',
                tags: ['Laravel', 'MySQL', 'Bootstrap'],
                details: `
                    <h3>About the Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3>Challenges</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Solution</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h3>Technologies Used</h3>
                    <ul>
                        <li>Laravel</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>RESTful API</li>
                    </ul>
                `,
                images: [
                    'assets/images/dummy/dummy.jpg',
                ]
            },
            'project4': {
                id: 'project4',
                title: 'Coming Soon',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                thumbnail: 'assets/images/dummy/dummy.jpg',
                tags: ['IoT', 'Node.js', 'MongoDB'],
                details: `
                    <h3>About the Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3>Challenges</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Solution</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h3>Technologies Used</h3>
                    <ul>
                        <li>Arduino and ESP32</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Socket.io</li>
                        <li>Chart.js</li>
                    </ul>
                `,
                images: [
                    'assets/images/dummy/dummy.jpg',
                ]
            }
        },
        
        // Navigation
        navigation: [
            { name: "Home", link: "#home" },
            { name: "Skills", link: "#skills" },
            { name: "Experience", link: "#experience" },
            { name: "Portfolio", link: "#portfolio" }
        ],
        
        // Section Titles
        sectionTitles: {
            skills: "Skills",
            experience: "Work Experience",
            portfolio: "Portfolio"
        }
    },
    id: {
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
            interests: ["Programming", "Keamanan IT", "Quality Assurance (QA)"],
            profileImg: "assets/images/profile.png"
        },
        
        // Skills (same for both languages)
        skills: [
            { name: "CodeIgniter", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/codeigniter.svg" },
            { name: "Laravel", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/laravel.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/bootstrap.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/javascript.svg" },
            { name: "Oracle", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/oracle.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mysql.svg" },
            { name: "SQL Server", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoftsqlserver.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/mongodb.svg" },
            { name: "Vue.js", icon: "https://unpkg.com/simple-icons@8.15.0/icons/vuedotjs.svg" },
            { name: "JQuery", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/jquery.svg" },
            { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/tailwindcss.svg" },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/flutter.svg" },
            { name: "Epicor ERP", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/epicgames.svg" },
            { name: "SSRS Report Builder", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/microsoft.svg" }
        ],
        
        // Experience
        experience: [
            {
                title: "Staf IT",
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
                title: "Pengembang Perangkat Lunak",
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
                title: "Staf ICT",
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
                shortDescription: 'Aplikasi untuk melacak pengiriman barang dan perhitungan poin untuk bonus driver.',
                thumbnail: 'assets/images/tracker/a1.png',
                tags: ['Flutter', 'Laravel', 'Epicor'],
                details: `
                    <h3>Tentang Proyek</h3>
                    <p>Aplikasi untuk melacak pengiriman barang dan perhitungan poin untuk bonus driver.</p>
                    <h3>Tantangan</h3>
                    <p>Implementasi OpenStreet Maps dengan polylines, Integrasi dengan Epicor ERP, dan sinkronisasi data.</p>
                    <h3>Solusi</h3>
                    <p>Menggunakan cronjob untuk sinkronisasi data Epicor ERP.</p>
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
                title: 'HRIS Web & Mobile',
                shortDescription: 'Pengembangan aplikasi HRIS web dan juga versi mobile.',
                thumbnail: 'assets/images/hris/2a.png',
                tags: ['Laravel', 'Filament', 'Flutter', 'Firebase', 'MySQL'],
                details: `
                    <h3>Tentang Proyek</h3>
                    <p>Pengembangan aplikasi HRIS web dan juga versi mobile.</p>
                    <h3>Tantangan</h3>
                    <ul>
                        <li><strong>Manajemen Data yang Kompleks:</strong> HRIS memiliki banyak modul seperti data karyawan, payroll, cuti, absensi, dan lainnya. Mengelola relasi antar data bisa menjadi tantangan.</li>
                        <li><strong>Optimasi API dengan Filament API Service:</strong> Endpoint API harus cepat dan efisien untuk menangani banyak request dari aplikasi mobile.</li>
                        <li><strong>Real-time Push Notification dengan Firebase:</strong> Mengirimkan notifikasi real-time untuk cuti, persetujuan, dan pengumuman penting.</li>
                        <li><strong>Manajemen Autentikasi dan Otorisasi:</strong> Harus mendukung peran pengguna (misalnya Admin, Karyawan, HR) dengan akses yang berbeda.</li>
                        <li><strong>Keamanan Data:</strong> Data karyawan bersifat sensitif, sehingga harus menerapkan enkripsi dan otorisasi yang ketat.</li>
                    </ul>
                    <h3>Solusi</h3>
                    <ul>
                        <li>Menggunakan Filament Admin Panel untuk mempermudah CRUD dan pengelolaan data secara efisien.</li>
                        <li>Menerapkan Filament API Service untuk menyediakan API yang optimal bagi aplikasi mobile.</li>
                        <li>Menggunakan Firebase Cloud Messaging (FCM) untuk push notification real-time.</li>
                        <li>Menerapkan Role-Based Access Control (RBAC) di Laravel dan Flutter.</li>
                        <li>Menggunakan Laravel Sanctum untuk keamanan komunikasi antara backend dan mobile.</li>
                    </ul>
                    <h3>Teknologi yang Digunakan</h3>
                    <ul>
                        <li>Filament PHP (Filament Admin & Filament API Service)</li>
                        <li>Flutter (Frontend Mobile)</li>
                        <li>Firebase Cloud Messaging (Push Notification)</li>
                        <li>Laravel + MySQL (Backend & Database)</li>
                        <li>API Integrasi untuk komunikasi antara backend dan frontend</li>
                    </ul>
                `,
                images: [
                    'assets/images/hris/1a.png',
                    'assets/images/hris/2a.png',
                    'assets/images/hris/3a.png',
                    'assets/images/hris/4a.png',
                    'assets/images/hris/web1.png',
                    'assets/images/hris/web2.png',
                    'assets/images/hris/web3.png',
                    'assets/images/hris/web4.png',
                    'assets/images/hris/web5.png',
                    'assets/images/hris/web6.png',
                    'assets/images/hris/web7.png',
                ]
            },
            'project3': {
                id: 'project3',
                title: 'Coming Soon',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                thumbnail: 'assets/images/dummy/dummy.jpg',
                tags: ['Laravel', 'MySQL', 'Bootstrap'],
                details: `
                    <h3>About the Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3>Challenges</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Solution</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h3>Technologies Used</h3>
                    <ul>
                        <li>Laravel</li>
                        <li>MySQL</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>RESTful API</li>
                    </ul>
                `,
                images: [
                    'assets/images/dummy/dummy.jpg'
                ]
            },
            'project4': {
                id: 'project4',
                title: 'Coming Soon',
                shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                thumbnail: 'assets/images/dummy/dummy.jpg',
                tags: ['IoT', 'Node.js', 'MongoDB'],
                details: `
                    <h3>About the Project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <h3>Challenges</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>Solution</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <h3>Technologies Used</h3>
                    <ul>
                        <li>Arduino and ESP32</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                        <li>Socket.io</li>
                        <li>Chart.js</li>
                    </ul>
                `,
                images: [
                    'assets/images/dummy/dummy.jpg',
                ]
            }
        },
        
        // Navigation
        navigation: [
            { name: "Beranda", link: "#home" },
            { name: "Keterampilan", link: "#skills" },
            { name: "Pengalaman", link: "#experience" },
            { name: "Portofolio", link: "#portfolio" }
        ],
        
        // Section Titles
        sectionTitles: {
            skills: "Keterampilan",
            experience: "Pengalaman Kerja",
            portfolio: "Portofolio"
        }
    }
};

// Default to English
let portfolioData = languageData.en;