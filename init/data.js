const sampleListings = [
    {
        title: "Cozy Beachfront Cottage",
        description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Malibu",
        country: "United States",
        sampleReviews: [
            { rating: 5, comment: "Absolutely loved the ocean view! Clean, cozy, and perfect sunset watching." },
            { rating: 4, comment: "Great location, right next to the beach. Highly recommend for weekends!" }
        ]
    },
    {
        title: "Modern Loft in Downtown",
        description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New York City",
        country: "United States",
        sampleReviews: [
            { rating: 5, comment: "Super sleek design and right in the center of everything. Checking in was flawless." },
            { rating: 2, comment: "The noise from the street below was incredibly loud all night. Hard to sleep." }
        ]
    },
    {
        title: "Mountain Retreat",
        description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
        },
        price: 1000,
        location: "Aspen",
        country: "United States",
        sampleReviews: [
            { rating: 5, comment: "A blissful escape from reality. Tucked away beautifully in the trees." }
        ]
    },
    {
        title: "Historic Villa in Tuscany",
        description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Florence",
        country: "Italy",
        sampleReviews: [
            { rating: 5, comment: "Pure magic. The vineyards, the history, the stone architecture—flawless stay." },
            { rating: 5, comment: "Exceeded all expectations. The host provided great local winery maps!" }
        ]
    },
    {
        title: "Secluded Treehouse Getaway",
        description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
        },
        price: 800,
        location: "Portland",
        country: "United States",
        sampleReviews: [
            { rating: 3, comment: "Very unique experience, but the Wi-Fi kept disconnecting and bugs got inside." }
        ]
    },
    {
        title: "Beachfront Paradise",
        description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Cancun",
        country: "Mexico",
        sampleReviews: [
            { rating: 4, comment: "Beautiful ocean waves right outside the bedroom door. Clean pool area too." }
        ]
    },
    {
        title: "Rustic Cabin by the Lake",
        description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
        },
        price: 900,
        location: "Lake Tahoe",
        country: "United States",
        sampleReviews: [
            { rating: 5, comment: "Perfect spot for kayaking! The property has its own dock access." }
        ]
    },
    {
        title: "Luxury Penthouse with City Views",
        description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Los Angeles",
        country: "United States",
        sampleReviews: [
            { rating: 5, comment: "Breathtaking views of the city skyline. Unrivaled luxury experience." },
            { rating: 4, comment: "High-end amenities and great pool deck, though parking was a hassle." }
        ]
    },
    {
        title: "Ski-In/Ski-Out Chalet",
        description: "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Verbier",
        country: "Switzerland",
        sampleReviews: [
            { rating: 5, comment: "The proximity to the slopes makes this place worth every single cent." }
        ]
    },
    {
        title: "Safari Lodge in the Serengeti",
        description: "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Serengeti National Park",
        country: "Tanzania",
        sampleReviews: [
            { rating: 5, comment: "Incredible wildlife visibility directly from the balcony. Worth the journey!" }
        ]
    },
    {
        title: "Historic Canal House",
        description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Amsterdam",
        country: "Netherlands",
        sampleReviews: [
            { rating: 4, comment: "Beautiful narrow architecture, very close to fantastic local cafes." }
        ]
    },
    {
        title: "Private Island Retreat",
        description: "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
        },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
        sampleReviews: [
            { rating: 5, comment: "Absolute perfection. Total privacy and exceptional white sand beaches." }
        ]
    },
    {
        title: "Charming Cottage in the Cotswolds",
        description: "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
        sampleReviews: [
            { rating: 4, comment: "Felt like stepping directly into a storybook. Very cozy fireplace." }
        ]
    },
    {
        title: "Historic Brownstone in Boston",
        description: "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Boston",
        country: "United States",
        sampleReviews: [
            { rating: 3, comment: "Beautiful antique furniture, but the central heating system was quite squeaky." }
        ]
    },
    {
        title: "Beachfront Bungalow in Bali",
        description: "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
        sampleReviews: [
            { rating: 5, comment: "Private pool overlooking the ocean layout was pure luxury. Will return!" }
        ]
    },
    {
        title: "Mountain View Cabin in Banff",
        description: "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
        },
        price: 1500,
        location: "Banff",
        country: "Canada",
        sampleReviews: [
            { rating: 5, comment: "Waking up to snow-peaked mountains right outside the window was incredible." }
        ]
    },
    {
        title: "Art Deco Apartment in Miami",
        description: "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
        image: {
            filename: "listingimage",
            url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Miami",
        country: "United States",
        sampleReviews: [
            { rating: 4, comment: "Vibrant designs and just steps away from all major nightspots." }
        ]
    },
    {
        title: "Tropical Villa in Phuket",
        description: "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Phuket",
        country: "Thailand",
        sampleReviews: [
            { rating: 5, comment: "The infinity pool layout is outstanding. Exceptional hospitality." }
        ]
    },
    {
        title: "Historic Castle in Scotland",
        description: "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Scottish Highlands",
        country: "United Kingdom",
        sampleReviews: [
            { rating: 5, comment: "Breathtakingly authentic castle. Felt like a movie set!" }
        ]
    },
    {
        title: "Desert Oasis in Dubai",
        description: "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
        },
        price: 5000,
        location: "Dubai",
        country: "United Arab Emirates",
        sampleReviews: [
            { rating: 5, comment: "Incredibly high standards of luxury. Dune tours right from the gate." }
        ]
    },
    {
        title: "Rustic Log Cabin in Montana",
        description: "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
        },
        price: 1100,
        location: "Montana",
        country: "United States",
        sampleReviews: [
            { rating: 4, comment: "Very isolated and peaceful cabin. Perfect for disconnecting." }
        ]
    },
    {
        title: "Beachfront Villa in Greece",
        description: "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
        },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
        sampleReviews: [
            { rating: 5, comment: "Stunning whitewashed architecture and deep blue sea views." }
        ]
    },
    {
        title: "Eco-Friendly Treehouse Retreat",
        description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
        },
        price: 750,
        location: "Costa Rica",
        country: "Costa Rica",
        sampleReviews: [
            { rating: 4, comment: "Incredible birds singing, truly eco-friendly setup." }
        ]
    },
    {
        title: "Historic Cottage in Charleston",
        description: "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
        },
        price: 1600,
        location: "Charleston",
        country: "United States",
        sampleReviews: [
            { rating: 4, comment: "Lovely private garden. Close to historic cobblestone streets." }
        ]
    },
    {
        title: "Modern Apartment in Tokyo",
        description: "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
        },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
        sampleReviews: [
            { rating: 5, comment: "Ultra-modern, high-tech amenities and right next to Shibuya lines." }
        ]
    },
    {
        title: "Lakefront Cabin in New Hampshire",
        description: "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
        },
        price: 1200,
        location: "New Hampshire",
        country: "United States",
        sampleReviews: [
            { rating: 4, comment: "Clean docks and very pleasant evenings on the patio." }
        ]
    },
    {
        title: "Luxury Villa in the Maldives",
        description: "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
        },
        price: 6000,
        location: "Maldives",
        country: "Maldives",
        sampleReviews: [
            { rating: 5, comment: "Paradise on earth. Clear glass flooring to see marine life below." }
        ]
    },
    {
        title: "Ski Chalet in Aspen",
        description: "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
        },
        price: 4000,
        location: "Aspen",
        country: "United States",
        sampleReviews: [
            { rating: 5, comment: "Exceptional hot tub setup post-skiing. Incredibly spacious." }
        ]
    },
    {
        title: "Secluded Beach House in Costa Rica",
        description: "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        image: {
            filename: "listingimage",
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
        sampleReviews: [
            { rating: 5, comment: "Incredible surf right out back. Very peaceful, private sanctuary." }
        ]
    }
];

module.exports = { data: sampleListings };