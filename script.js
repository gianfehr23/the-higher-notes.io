const items = [
    { name: "The Weeknd", value: 112569437, img: "https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae" },
    { name: "Bruno Mars", value: 110858063, img: "https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd" },
    { name: "Justin Bieber", value: 100676043, img: "https://i.scdn.co/image/ab6761610000e5ebaf20f7db5288bce9beede034" },
    { name: "Lady Gaga", value: 100450212, img: "https://i.scdn.co/image/ab6761610000e5ebaadc18cac8d48124357c38e6" },
    { name: "Coldplay", value: 93728726, img: "https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb" },
    { name: "Ed Sheeran", value: 93379158, img: "https://i.scdn.co/image/ab67616100005174d55c95ad400aed87da52daec" },
    { name: "Rihanna", value: 92573579, img: "https://i.scdn.co/image/ab6761610000e5ebcb565a8e684e3be458d329ac" },
    { name: "Billie Eilish", value: 95167039, img: "https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da" },
    { name: "Taylor Swift", value: 87526056, img: "https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676" },
    { name: "Drake", value: 81461101, img: "https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9" },
    { name: "Ariana Grande", value: 79492085, img: "https://i.scdn.co/image/ab6761610000e5eb6725802588d7dc1aba076ca5" },
    { name: "David Guetta", value: 78255585, img: "https://i.scdn.co/image/ab6761610000e5ebf150017ca69c8793503c2d4f" },
    { name: "Bad Bunny", value: 77567093, img: "https://i.scdn.co/image/ab6761610000e5eb81f47f44084e0a09b5f0fa13" },
    { name: "Kendrick Lamar", value: 73250011, img: "https://i.scdn.co/image/ab6761610000e5eb39ba6dcd4355c03de0b50918" },
    { name: "Sabrina Carpenter", value: 73527479, img: "https://i.scdn.co/image/ab6761610000e5eb78e45cfa4697ce3c437cb455" },
    { name: "Calvin Harris", value: 69507723, img: "https://i.scdn.co/image/ab6761610000e5eb1e4bcd2bef1896648762dd6b" },
    { name: "Maroon 5", value: 68898562, img: "https://i.scdn.co/image/ab6761610000e5ebf8349dfb619a7f842242de77" },
    { name: "SZA", value: 68544226, img: "https://i.scdn.co/image/ab67616d00001e0270dbc9f47669d120ad874ec1" },
    { name: "Eminem", value: 67837159, img: "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b" },
    { name: "Post Malone", value: 67195390, img: "https://i.scdn.co/image/ab6761610000e5ebe17c0aa1714a03d62b5ce4e0" },
    { name: "J Balvin", value: 65904678, img: "https://i.scdn.co/image/ab6761610000e5eb0405b03342c2e56751b9923d" },
    { name: "Shakira", value: 65530050, img: "https://i.scdn.co/image/ab6761610000e5eb2528c726e5ddb90a7197e527" },
    { name: "Travis Scott", value: 62480567, img: "https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71" },
    { name: "Dua Lipa", value: 62472596, img: "https://i.scdn.co/image/ab6761610000e5eb0c68f6c95232e716f0abee8d" },
    { name: "Katy Perry", value: 61790206, img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da840e0ed6cea2cbae532efdc16c" },
    { name: "Sia", value: 59852354, img: "https://i.scdn.co/image/ab6761610000e5eb64db06dfda27bb045bc1c2f5" },
    { name: "Kanye West", value: 59690067, img: "https://i.scdn.co/image/ab6761610000e5eb6e835a500e791bf9c27a422a" },
    { name: "Doja Cat", value: 59172931, img: "https://i.scdn.co/image/ab67616d00001e023b017bad9fa5f880745c59cc" },
    { name: "Lana Del Rey", value: 59020256, img: "https://i.scdn.co/image/ab6761610000e5ebb99cacf8acd5378206767261" },
    { name: "Chris Brown", value: 58482048, img: "https://i.scdn.co/image/ab6761610000e5eba48397e590a1c70e2cda7728" },
    { name: "Pitbull", value: 57962978, img: "https://i.scdn.co/image/ab6761610000e5eb4051627b19277613e0e62a34" },
    { name: "Beyoncé", value: 56560057, img: "https://i.scdn.co/image/ab6761610000e5eb7eaa373538359164b843f7c0" },
    { name: "Tate McRae", value: 54243537, img: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84bbcdc609bbd379628a298558" },
    { name: "Daddy Yankee", value: 53952264, img: "https://i.scdn.co/image/ab6761610000e5eb99a6ccc4aae5ae5404c9eb30" },
    { name: "Michael Jackson", value: 53262189, img: "https://i.scdn.co/image/ab6761610000e5eb997cc9a4aec335d46c9481fd" },
    { name: "Imagine Dragons", value: 53220978, img: "https://i.scdn.co/image/ab6761610000e5ebab47d8dae2b24f5afe7f9d38" },
    { name: "Arctic Monkeys", value: 52762786, img: "https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f" },
    { name: "Adele", value: 52423785, img: "https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17" },
    { name: "Marshmello", value: 52901875, img: "https://i.scdn.co/image/ab6761610000e5eb3b2498dc8a8c6eceed0a2db3" },
    { name: "Linkin Park", value: 51470029, img: "https://i.scdn.co/image/ab6761610000e5eb527d95dabbe8b8b527e8136f" },
    { name: "Miley Cyrus", value: 51398256, img: "https://i.scdn.co/image/ab6761610000e5ebf4cccd14ec026038d713e353" },
    { name: "Queen", value: 50262378, img: "https://i.scdn.co/image/af2b8e57f6d7b5d43a616bd1e27ba552cd8bfd42" },
    { name: "Shawn Mendes", value: 50121568, img: "https://i.scdn.co/image/ab6761610000e5eb58b4b9419486550f6fda0535" },
    { name: "SAINt JHN", value: 7727822, img: "https://i.scdn.co/image/ab676161000051745d18141fa518f77d006d6933" },
    { name: "JAY-Z", value: 34348431, img: "https://i.scdn.co/image/ab6761610000e5ebc75afcd5a9027f60eaebb5e4" },
    { name: "Jonas Brothers", value: 48934678, img: "https://i.scdn.co/image/ab676161000051749139f9139ae3eb6d4cbb1c17" },
    { name: "Harry Styles", value: 48602984, img: "https://i.scdn.co/image/ab6761610000e5ebf7db7c8ede90a019c54590bb" },
    { name: "Rammstein", value: 48526784, img: "https://i.scdn.co/image/ab6761610000e5eb32845b1556f9dbdfe8ee6575" },
    { name: "AC/DC", value: 48300387, img: "https://i.scdn.co/image/ab6761610000e5ebc4c77549095c86acb4e77b37" },
    { name: "Pink Floyd", value: 48184786, img: "https://i.scdn.co/image/ab6761610000517497885ce689d644c91dfba05c" },
    { name: "Guns N' Roses", value: 47815893, img: "https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c" },
    { name: "Nirvana", value: 47605687, img: "https://i.scdn.co/image/84282c28d851a700132356381fcfbadc67ff498b" },
    { name: "Eagles", value: 47402573, img: "https://i.scdn.co/image/ab6761610000e5eb0767e116a2307495e37cd7fb" },
    { name: "The Rolling Stones", value: 47203896, img: "https://i.scdn.co/image/ab6761610000e5ebe4cea917b68726aadb4854b8" },
    { name: "Metallica", value: 47697241, img: "https://i.scdn.co/image/ab6761610000e5eb69ca98dd3083f1082d740e44" },
    { name: "The Beatles", value: 46889756, img: "https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433" },
    { name: "Bon Jovi", value: 46665861, img: "https://i.scdn.co/image/ab6761610000e5eb52aade0d2ea19706074da4b9" },
    { name: "Red Hot Chili Peppers", value: 46408672, img: "https://i.scdn.co/image/ab6761610000e5ebc33cc15260b767ddec982ce8" },
    { name: "Elton John", value: 46223674, img: "https://i.scdn.co/image/ab6761610000e5eb0dc33a1c53bb58a84b45d6a7" },
    { name: "The Chainsmokers", value: 46023576, img: "https://i.scdn.co/image/ab6761610000e5eb4567279fac84a0375c3d819b" },
    { name: "Daft Punk", value: 45891784, img: "https://i.scdn.co/image/ab67616100005174d3aa7cc0e419b6c459b08e8e" },
    { name: "Avicii", value: 45626782, img: "https://i.scdn.co/image/ab6761610000e5ebae07171f989fb39736674113" },
    { name: "Kygo", value: 45401863, img: "https://i.scdn.co/image/ab6761610000e5ebe5ea1aa1404629c12ad86658" },
    { name: "Alan Walker", value: 45289318, img: "https://i.scdn.co/image/ab6761610000e5eb572a8eae56feae217f618078" },
    { name: "Martin Garrix", value: 45003875, img: "https://i.scdn.co/image/ab6761610000e5ebf5b8ee60f1f4ee3453aba40b" },
    { name: "Tiësto", value: 44802689, img: "https://i.scdn.co/image/ab6761610000e5ebe84e08fb1dfa2bf9b5a61563" },
    { name: "DJ Snake", value: 44606582, img: "https://i.scdn.co/image/ab6761610000517410c8494cf8c253f47be93448" },
    { name: "Zedd", value: 44405786, img: "https://i.scdn.co/image/ab6761610000e5ebe28762aed82cde1178fb3873" },
    { name: "Disclosure", value: 44224894, img: "https://i.scdn.co/image/ab6761610000e5eb3faf416d3be99d63fec18baa" },
    { name: "Swedish House Mafia", value: 44093450, img: "https://i.scdn.co/image/ab67616d00001e028997747ca2022f8b311a770f" },
    { name: "Skrillex", value: 43801872, img: "https://i.scdn.co/image/ab6761610000e5ebe32002317387b6d659308a94" },
    { name: "Diplo", value: 43600861, img: "https://i.scdn.co/image/ab6761610000e5ebdf01727aa674ddefa777797a" },
    { name: "Major Lazer", value: 43403964, img: "https://i.scdn.co/image/ab67616100005174d18eac6f1e653551fd05a793" },
    { name: "Halsey", value: 43200267, img: "https://i.scdn.co/image/ab6761610000e5eb15136101a0f63f0b2800b9dc" },
    { name: "Cardi B", value: 43083491, img: "https://i.scdn.co/image/ab6761610000e5eba23286f24edd4a7dbdc6311d" },
    { name: "Nicki Minaj", value: 42802971, img: "https://i.scdn.co/image/ab6761610000e5eb07a50f0a9a8f11e5a1102cbd" },
    { name: "Lil Nas X", value: 42602983, img: "https://i.scdn.co/image/ab67616d00001e02c4f02424746f626740a108d2" },
    { name: "J Balvin", value: 65904678, img: "https://i.scdn.co/image/ab6761610000e5eb0405b03342c2e56751b9923d" },
    { name: "Justin Timberlake", value: 42204893, img: "https://i.scdn.co/image/ab676161000051747a5cfe2597665a3d160e805e" },
    { name: "Stormzy", value: 9270187, img: "https://i.scdn.co/image/ab6761610000e5eb674d29e07df021a35df3ddf1" },
    { name: "Kyla", value: 160433, img: "https://i.scdn.co/image/ab6761610000e5eb7af9765581856eae3a6a3f50" },
    { name: "Skepta", value: 10418547, img: "https://i.scdn.co/image/ab6761610000e5eb247e3bd61bd004869b5bffc3" },
    { name: "Mike Posner", value: 17017801, img: "https://i.scdn.co/image/ab6761610000e5eb85e71ac37632766429b0c2cb" },
    { name: "Jason Derulo", value: 32763766, img: "https://i.scdn.co/image/ab6761610000e5eb94cf6c87c82ddb0eade61eb0" },
    { name: "Sean Kingston", value: 19997687, img: "https://i.scdn.co/image/ab6761610000e5ebee205e5029a04bd0460e16e4" },
    { name: "Iyaz", value: 12703874, img: "https://i.scdn.co/image/e5611d678c61f484cdeb18eee0d3c2674729dd1a" },
    { name: "AJ Tracey", value: 6028564, img: "https://i.scdn.co/image/ab6761610000e5ebc985e94681164c167ba00cca" },
    { name: "Khalid", value: 47410917, img: "https://i.scdn.co/image/ab676161000051748f77c3eddc1869e9542b04bc" },
    { name: "Juice WRLD", value: 29453568, img: "https://i.scdn.co/image/ab6761610000e5eb23a60030944f7853c21565ef" },
    { name: "XXXTENTACION", value: 31732064, img: "https://i.scdn.co/image/ab6761610000e5ebf0c20db5ef6c6fbe5135d2e4" },
    // Added artists (30 new, non-duplicates)
    { name: "Sam Smith", value: 48671894, img: "https://i.scdn.co/image/ab67616100005174d6b2f9db8528fc0cec4cd6c7" },
    { name: "Olivia Rodrigo", value: 45922761, img: "https://i.scdn.co/image/ab6761610000e5ebe03a98785f3658f0b6461ec4" },
    { name: "The Kid LAROI", value: 42106982, img: "https://i.scdn.co/image/ab6761610000e5ebb3fd5c8505c463f91d730ac3" },
    { name: "Karol G", value: 49798457, img: "https://i.scdn.co/image/ab6761610000e5eb66041ce9eb4497057cbc3496" },
    { name: "Feid", value: 38274727, img: "https://i.scdn.co/image/ab6761610000e5eb600ee3d2a14da8d038fa7bbf" },
    { name: "Peso Pluma", value: 39146402, img: "https://i.scdn.co/image/ab6761610000e5ebe5283f5b671cf618b82a2696" },
    { name: "Rauw Alejandro", value: 48606088, img: "https://i.scdn.co/image/ab6761610000e5ebb0611e8811c6868ae1fde4de" },
    { name: "Rosalía", value: 18912467, img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Rosal%C3%ADa_2019-07-02_001.jpg" },
    { name: "Bizarrap", value: 23766817, img: "https://i.scdn.co/image/ab6761610000e5eb14add0d3419426b84158b913" },
    { name: "Maluma", value: 42168932, img: "https://i.scdn.co/image/ab67616d00001e029fa9c0acaf11becc12d22300" },
    { name: "Ozuna", value: 45429610, img: "https://i.scdn.co/image/ab6761610000e5eb463e10d5f1a533ddd6eb9a04" },
    { name: "Nicky Jam", value: 34752577, img: "https://i.scdn.co/image/ab6761610000e5eb45780f160ed896e42b6d17b0" },
    { name: "Myke Towers", value: 37917516, img: "https://i.scdn.co/image/ab6761610000e5eb8372345609bebaf1e948ef7f" },
    { name: "Quevedo", value: 30288152, img: "https://i.scdn.co/image/ab6761610000e5eb9fabcfc29eafa94841a28a9b" },
    { name: "Mora", value: 20609502, img: "https://i.scdn.co/image/ab6761610000e5ebe6252cc367480d8fe43e711f" },
    { name: "Young Miko", value: 20601651, img: "https://i.scdn.co/image/ab6761610000e5eb6e3c3f86459730d6c8f74232" },
    { name: "Becky G", value: 24086224, img: "https://i.scdn.co/image/ab676161000051741b7aaeedafb29af4c513ebd3" },
    { name: "Anitta", value: 34519082, img: "https://i.scdn.co/image/ab6761610000e5ebda2a9d91c5f52a9088851251" },
    { name: "Alok", value: 22702651, img: "https://i.scdn.co/image/ab6761610000e5eb6b07a040a57d013a7e49f908" },
    { name: "Steve Aoki", value: 14459500, img: "https://i.scdn.co/image/ab6761610000e5ebcf85b39d94c486218a687248" },
    { name: "Camila Cabello", value: 45483702, img: "https://i.scdn.co/image/ab6761610000e5eb76470faf6330235edbcb90a9" },
    { name: "Ghost", value: 8518797, img: "https://i.scdn.co/image/ab6761610000e5eb2d972470f1f8110be7c07017" },
    { name: "OneRepublic", value: 46558999, img: "https://i.scdn.co/image/ab6761610000e5eb587687df50a967731901fcc2" },
    { name: "Glass Animals", value: 19972683, img: "https://upload.wikimedia.org/wikipedia/commons/5/57/Glass_Animals_2014.jpg" },
    { name: "The 1975", value: 18769137, img: "https://i.scdn.co/image/ab67616d00001e0295cbf32dfa1664d613774364" },
    { name: "The Killers", value: 25798986, img: "https://i.scdn.co/image/ab6761610000e5eb207b21f3ed0ee96adce3166a" },
    { name: "U2", value: 20524621, img: "https://i.scdn.co/image/ab6761610000e5ebe62be215d2ee31bcd97edaba" },
    { name: "21 Savage", value: 39769097, img: "https://i.scdn.co/image/ab6761610000e5eb4f8f76117470957c0e81e5b2" },
    { name: "Future", value: 51231592, img: "https://i.scdn.co/image/ab6761610000e5eb7565b356bc9d9394eefa2ccb" },
    { name: "Metro Boomin", value: 41155731, img: "https://i.scdn.co/image/ab6761610000e5eb28f1e72b31e756ea3f3a51e7" },
];

const winningGifs = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2pkNTAzMnk0dnk1ZzdmcXU4ZThjbGlkZmZuamIzcTZndXhrZmw0OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qw4X3FyDEfQrNgjl6M0/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZrMXdyOGt3OWdtaXZ2djhvejl6ancwZWNlb2l4Ymt1Z3Bxd2hvdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11sBLVxNs7v6WA/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWcybGN3bmtwN3ZmbXJiOWUzc3dyYmVmM29odHVhYjNsOGF5NzA4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tHIRLHtNwxpjIFqPdV/giphy.gif"
];

const losingGifs = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXk5Y2R5aTB5amdnYWpodzNnZ2FsenJwZWRtZ3psNmZtM3JxZDlhNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iJJ6E58EttmFqgLo96/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWVoYW9vcjk4dmpzdzhhc2F5Y2dmbDk4YWc4M3lrbXBvdWh0emhnciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J1XSaMzkdlqDl89NVf/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNtYXdkNGU0NnNkeng1MGU3ZmFndmNpMzlkdGk2dWp0anVrdjRreiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YLkZ9kwuKrBlt58AZh/giphy.gif"
];

// Elementos del DOM
const artist1Card = document.getElementById('artist1-card');
const artistName1 = document.getElementById('artist-name1');
const artistImg1 = document.getElementById('artist-img1');
const statValue1 = document.getElementById('stat-value1');

const artist2Card = document.getElementById('artist2-card');
const artistName2 = document.getElementById('artist-name2');
const artistImg2 = document.getElementById('artist-img2');
const artist2Question = document.getElementById('artist2-question');
const artist2Stats = document.getElementById('artist2-stats');
const statValue2 = document.getElementById('stat-value2');

const moreBtn = document.getElementById('more-btn');
const lessBtn = document.getElementById('less-btn');
const vsDivider = document.querySelector('.vs-divider');

const scoreText = document.getElementById('scoreText');
const highScoreText = document.getElementById('highScoreText');
let score = 0;
let highScore = 0;

// Función para obtener el highscore del usuario actual
function getUserHighScore(username) {
    if (!username) return 0;
    const userScores = JSON.parse(localStorage.getItem('userHighScores') || '{}');
    return userScores[username] || 0;
}

// Función para guardar el highscore del usuario actual
function setUserHighScore(username, score) {
    if (!username) return;
    
    console.log(`Setting high score for ${username}: ${score}`); // Debug log
    
    // Actualizar en userHighScores
    const userScores = JSON.parse(localStorage.getItem('userHighScores') || '{}');
    userScores[username] = score;
    localStorage.setItem('userHighScores', JSON.stringify(userScores));
    
    // También actualizar el highScore en el objeto de usuario para el leaderboard
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex(user => user.username === username);
    if (userIndex !== -1) {
        users[userIndex].highScore = score;
        localStorage.setItem('users', JSON.stringify(users));
        console.log(`Updated user ${username} in users array with score ${score}`); // Debug log
    } else {
        console.log(`User ${username} not found in users array!`); // Debug log
    }
    
    // Update global database
    updateGlobalHighScore(username, score);
    
    // Forzar actualización del leaderboard
    setTimeout(() => {
        if (typeof loadGlobalLeaderboard === 'function') {
            console.log('Updating global leaderboard after score change'); // Debug log
            loadGlobalLeaderboard();
        } else if (typeof updateLeaderboard === 'function') {
            console.log('Updating local leaderboard after score change'); // Debug log
            updateLeaderboard();
        }
    }, 100);
}

// Función para migrar highscore global existente al sistema por usuario
function migrateGlobalHighScore() {
    const globalHighScore = localStorage.getItem('highScore');
    if (globalHighScore && currentUser) {
        const currentUserScore = getUserHighScore(currentUser);
        // Solo migrar si el usuario no tiene un highscore o si el global es mayor
        if (currentUserScore === 0 || parseInt(globalHighScore) > currentUserScore) {
            setUserHighScore(currentUser, parseInt(globalHighScore));
            console.log(`Migrated global highscore ${globalHighScore} to user ${currentUser}`);
        }
        // Limpiar el highscore global después de la migración
        localStorage.removeItem('highScore');
    }
}

// Función de debug para ver todas las cuentas y sus highscores
function debugShowAllAccounts() {
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    const userScores = JSON.parse(localStorage.getItem('userHighScores') || '{}');
    
    console.log('=== CUENTAS REGISTRADAS ===');
    Object.keys(users).forEach(username => {
        const highscore = userScores[username] || 0;
        console.log(`Usuario: ${username} | Highscore: ${highscore}`);
    });
    console.log('========================');
    
    return { users: Object.keys(users), scores: userScores };
}

// Inicializar highscore (se actualizará cuando se cargue el usuario)
highScoreText.textContent = `Highscore: ${highScore}`;

const endScreen = document.getElementById('end-screen');
const endScreenGif = document.getElementById('end-screen-gif');
const endScreenMessage = document.getElementById('end-screen-message');
const yourScoreText = document.getElementById('your-score-text');
const yourHighscoreText = document.getElementById('your-highscore-text');
const playAgainBtn = document.getElementById('play-again-btn');
const userText = document.getElementById('userText');

const feedbackIcon = document.getElementById('feedback-icon');
const correctCheckmark = document.getElementById('correct-checkmark');
const incorrectCross = document.getElementById('incorrect-cross');

// Start screen elements
const startScreen = document.getElementById('start-screen');
const gameModeCards = document.querySelectorAll('.game-mode-card');

// Auth elements
const authScreen = document.getElementById('auth-screen');
const authUsername = document.getElementById('auth-username');
const authPassword = document.getElementById('auth-password');
const authRegisterBtn = document.getElementById('auth-register-btn');
const authLoginBtn = document.getElementById('auth-login-btn');
const authBackBtn = document.getElementById('auth-back-btn');
const authMessage = document.getElementById('auth-message');
const currentUserDisplay = document.getElementById('current-user-display');
const logoutBtn = document.getElementById('logout-btn');
const mainMenuBtn = document.getElementById('main-menu-btn');
const soundToggleBtn = document.getElementById('sound-toggle');
const gameSoundToggleBtn = document.getElementById('game-sound-toggle');
const musicPlayPauseBtn = document.getElementById('music-play-pause');
const volumeSlider = document.getElementById('volume-slider');
let currentUser = null;

let currentArtists = [];
let isAnimating = false;
let deck = [];

function getUniqueItems() {
    const map = new Map();
    for (const it of items) {
        if (!map.has(it.name)) map.set(it.name, it);
    }
    return Array.from(map.values());
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function initDeck(excludeNames = []) {
    const base = getUniqueItems().filter(a => !excludeNames.includes(a.name));
    return shuffle(base.slice());
}

// Spotify artist IDs for new entries (used to fetch official profile thumbnails via oEmbed)
const spotifyIds = {
    "Sam Smith": "2wY79sveU1sp5g7SokKOiI",
    "Olivia Rodrigo": "1McMsnEElThX1knmY4oliG",
    "The Kid LAROI": "2tIP7SsRs7vjIcLrU85W8J",
    "Karol G": "790FomKkXshlbRYZFtlgla",
    "Feid": "2LRoIwlKmHjgvigdNGBHNo",
    "Peso Pluma": "6TS9EqgQtf0z7v29IUc7Gn",
    "Rauw Alejandro": "1mcTU81TzQhprhouKaTkpq",
    "Rosalía": "7ltDVBr6mKbRvohxheJ9h1",
    "Bizarrap": "2hazSY4Ef3aB9ATXW7F5w3",
    "Maluma": "1bAftSH8umNcGZ0uyV7LMg",
    "Ozuna": "1i8SpTcr7yvPOmcqrbnVXY",
    "Nicky Jam": "1wmUQ1oZ8W6B4rSO118CkK",
    "Myke Towers": "3qsKSpcV3ncke3hw52JSMB",
    "Quevedo": "7GZJ20gmr6XmCXOe8Tqg3f",
    "Mora": "0QWv3tw8fD8hpBEZR18qyN",
    "Young Miko": "5m8H6zSpANx7VQeTzEu0x9",
    "Becky G": "4obzFoKoKRHIphyHzJ35G3",
    "Anitta": "45dkTj5sMRSjrmBSBeiHym",
    "Alok": "0NGAZxHanS9e0iNHpR8f2W",
    "Steve Aoki": "77AiFEVeAVj2ORpC85QVJs",
    "Camila Cabello": "4nDoRrQiYLoBzwC5BhVJzF",
    "Charlie Puth": "6jJ0s89eD6GaHleKKya26X",
    "OneRepublic": "5Pwc4xIPtQLFEnJriah9YJ",
    "Glass Animals": "4yvcSjfu4PC0CYQyLy4wSq",
    "The 1975": "3mIj9lX2MWuHmhNCA7LSCW",
    "The Killers": "0C0XlULifJtAgn6ZNCW2eu",
    "U2": "51Blml2LZPmy7TTiAg47vQ",
    "21 Savage": "1URnnhqYAYcrqrcwql10ft",
    "Future": "1RyvyyTE3xzB2ZywiAwp0i",
    "Metro Boomin": "0iEtIxbK0KxaSlF7G42ZOp"
};

const spotifyImageCache = new Map();
async function preferSpotifyImage(artistName, imgEl) {
    const id = spotifyIds[artistName];
    if (!id) return;
    try {
        if (spotifyImageCache.has(id)) {
            // Verificar que el elemento aún corresponde al mismo artista
            if (imgEl.dataset.artist === artistName) {
                imgEl.src = spotifyImageCache.get(id);
            }
            return;
        }
        const controller = new AbortController();
        const t = setTimeout(() => controller.abort(), 4000);
        const res = await fetch(`https://open.spotify.com/oembed?url=https://open.spotify.com/artist/${id}`, { signal: controller.signal });
        clearTimeout(t);
        if (!res.ok) return;
        const data = await res.json();
        if (data && data.thumbnail_url && imgEl.dataset.artist === artistName) {
            spotifyImageCache.set(id, data.thumbnail_url);
            imgEl.src = data.thumbnail_url;
        }
    } catch (_) {
        // Silenciar errores y mantener el fallback
    }
}

// Función para animar el contador
function animateCountUp(element, startValue, endValue, duration, callback) {
    if (isAnimating) return;
    isAnimating = true;

    const range = endValue - startValue;
    const stepTime = Math.abs(Math.floor(duration / range)) || 1;
    let current = startValue;

    const timer = setInterval(() => {
        const step = Math.ceil(range / (duration / stepTime));
        current += endValue > startValue ? step : -step;
        
        if ((endValue > startValue && current >= endValue) || (endValue < startValue && current <= endValue)) {
            current = endValue;
            clearInterval(timer);
            isAnimating = false;
            if (callback) callback();
        }

        element.textContent = current.toLocaleString('en-US');
    }, stepTime);
}

// Función para mostrar el feedback visual (tilde o cruz)
function showFeedback(isCorrect) {
    feedbackIcon.classList.remove('hidden');
    correctCheckmark.classList.remove('visible');
    incorrectCross.classList.remove('visible');

    if (isCorrect) {
        correctCheckmark.classList.add('visible');
    } else {
        incorrectCross.classList.add('visible');
    }

    feedbackIcon.classList.add('visible');

    setTimeout(() => {
        feedbackIcon.classList.remove('visible');
        feedbackIcon.classList.add('hidden');
    }, 1000);
}

function fadeOutElements(elements, duration, done) {
    isAnimating = true;
    const prev = elements.map(el => ({
        el,
        transition: el.style.transition,
        opacity: el.style.opacity
    }));

    elements.forEach(el => {
        el.style.transition = `opacity ${duration}ms ease`;
        el.style.opacity = '0';
    });

    setTimeout(() => {
        prev.forEach(p => {
            p.el.style.transition = p.transition;
        });
        isAnimating = false;
        if (typeof done === 'function') done();
    }, duration + 50);
}

function animateRightToLeftTransition(done) {
    // Bloquear interacciones durante la transición
    isAnimating = true;
    try {
        const fromRect = artistImg2.getBoundingClientRect();
        const toRect = artistImg1.getBoundingClientRect();

        const clone = artistImg2.cloneNode(true);
        clone.style.position = 'fixed';
        clone.style.left = fromRect.left + 'px';
        clone.style.top = fromRect.top + 'px';
        clone.style.width = fromRect.width + 'px';
        clone.style.height = fromRect.height + 'px';
        clone.style.borderRadius = window.getComputedStyle(artistImg2).borderRadius;
        clone.style.zIndex = '1000';
        clone.style.pointerEvents = 'none';
        clone.style.transition = 'transform 0.6s ease-in-out';

        document.body.appendChild(clone);

        // Preparar la imagen izquierda sin ocultarla (evitamos parpadeo)
        const prevTransition = artistImg1.style.transition;
        const prevTransform = artistImg1.style.transform;

        artistImg1.style.transition = 'transform 0.3s ease';
        artistImg1.style.transform = 'translateX(-10px)';

        // Atenuar progresivamente la imagen derecha durante la transición
        const prevTransition2 = artistImg2.style.transition;
        const prevOpacity2 = artistImg2.style.opacity;
        artistImg2.style.transition = 'opacity 0.4s ease';
        artistImg2.style.opacity = '0';

        // Asegurar que el navegador aplique el estado inicial antes de animar
        requestAnimationFrame(() => {
            const dx = toRect.left - fromRect.left;
            const dy = toRect.top - fromRect.top;
            clone.style.transform = `translate(${dx}px, ${dy}px)`;
        });

        let finished = false;
        const cleanup = () => {
            if (finished) return;
            finished = true;
            clone.removeEventListener('transitionend', cleanup);
            clone.remove();

            // Restaurar estilos
            artistImg1.style.transition = prevTransition;
            artistImg1.style.transform = prevTransform;
            artistImg2.style.transition = prevTransition2;
            artistImg2.style.opacity = prevOpacity2;

            isAnimating = false;
            if (typeof done === 'function') done();
        };

        clone.addEventListener('transitionend', cleanup);
        // Fallback por si no dispara el evento
        setTimeout(cleanup, 900);
    } catch (e) {
        isAnimating = false;
        if (typeof done === 'function') done();
    }
}

function startGame() {
    score = 0;
    scoreText.textContent = `Score: ${score}`;
    
    hideEndScreen();
    showGame();
    
    // Trigger Three.js game start effect
    if (window.threeEffects) {
        window.threeEffects.onGameStart();
    }
    
    // Dispatch custom event for Three.js
    document.dispatchEvent(new CustomEvent('gameStart'));
    
    loadNewArtists();
    deck = initDeck([]);
    generateCards();
}

// Simple auth system using localStorage
async function sha256(message) {
    const msgUint8 = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function showStartScreen() {
    if (!startScreen) return;
    startScreen.classList.remove('hidden');
    hideAuth();
    hideGame();
    
    // Hide user header in start screen
    const userHeader = document.querySelector('.user-header');
    if (userHeader) userHeader.style.display = 'none';
    
    // Music player now always visible
    
    // Hide in-game center badges (user + logout) on start screen
    const centerCtr = document.getElementById('center-badges');
    if (centerCtr) centerCtr.style.display = 'none';
}

function hideStartScreen() {
    if (!startScreen) return;
    startScreen.classList.add('hidden');
}

function showAuth() {
    if (!authScreen) return;
    authScreen.classList.remove('hidden');
    hideStartScreen();
    hideGame();
    
    // Hide user header in auth screen
    const userHeader = document.querySelector('.user-header');
    if (userHeader) userHeader.style.display = 'none';
    
    // Hide in-game center badges (user + logout) in auth screen
    const centerCtr = document.getElementById('center-badges');
    if (centerCtr) centerCtr.style.display = 'none';
}

function hideAuth() {
    if (!authScreen) return;
    authScreen.classList.add('hidden');
}

function showGame() {
    const gameContainer = document.querySelector('.game-container');
    if (gameContainer) gameContainer.style.display = 'block';
    
    // Show user header in game
    const userHeader = document.querySelector('.user-header');
    if (userHeader) userHeader.style.display = 'flex';
    
    // Music player now always visible
    
    // Ensure user and logout are centered in-game
    placeUserBadge();
    if (currentUser) {
        ensureLogoutBadge();
    }
    const centerCtr = document.getElementById('center-badges');
    if (centerCtr) centerCtr.style.display = 'flex';
    
    // Force update user display to show logout button
    updateUserDisplay();
}

function hideGame() {
    const gameContainer = document.querySelector('.game-container');
    if (gameContainer) gameContainer.style.display = 'none';
    
    // Hide user header when not in game
    const userHeader = document.querySelector('.user-header');
    if (userHeader) userHeader.style.display = 'none';

    // Music player now always visible

    // Hide in-game center badges when game is hidden
    const centerCtr = document.getElementById('center-badges');
    if (centerCtr) centerCtr.style.display = 'none';
}

async function registerUser() {
    console.log('registerUser called'); // Debug log
    
    const u = (authUsername?.value || '').trim();
    const p = authPassword?.value || '';
    
    console.log('Username:', u, 'Password length:', p.length); // Debug log
    
    if (!u || !p) { 
        authMessage.textContent = 'Enter username and password'; 
        return; 
    }
    
    const usersRaw = localStorage.getItem('users');
    const users = usersRaw ? JSON.parse(usersRaw) : [];
    
    // Verificar si el usuario ya existe (case-insensitive)
    const existingUser = users.find(user => (user.username || '').toLowerCase() === u.toLowerCase());
    if (existingUser) {
        authMessage.textContent = 'El usuario ya existe, elige otro nombre';
        authMessage.style.color = '#ff4444';
        return;
    }
    
    console.log('Creating new user:', u); // Debug log
    
    const newUser = { username: u, password: p, highScore: 0 };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    // Dedupe to ensure no duplicates remain
    dedupeUsersInLocalStorage();
    localStorage.setItem('currentUser', newUser.username);
    currentUser = newUser.username;
    
    // Inicializar el highscore del nuevo usuario en 0
    setUserHighScore(u, 0);
    highScore = 0;
    highScoreText.textContent = `Highscore: ${highScore}`;
    
    // Actualizar el leaderboard
    updateLeaderboard();
    
    authMessage.textContent = 'Account created!';
    authMessage.style.color = '#1ED760'; // Verde para éxito
    
    // Play success sound
    if (window.soundManager) {
        window.soundManager.play('success');
    }
    
    console.log('User registered successfully'); // Debug log
    
    // Update user display
    updateUserDisplay();
    
    // Save to global database
    saveUserToGlobalDB(u, p, 0);
    
    setTimeout(() => { 
        hideAuth(); 
        showGame(); 
        startGame(); 
    }, 500);
}

async function loginUser() {
    console.log('loginUser called'); // Debug log
    
    const u = (authUsername?.value || '').trim();
    const p = authPassword?.value || '';
    
    console.log('Login attempt - Username:', u, 'Password length:', p.length); // Debug log
    
    if (!u || !p) { 
        authMessage.textContent = 'Enter username and password'; 
        return; 
    }
    
    const usersRaw = localStorage.getItem('users');
    const users = usersRaw ? JSON.parse(usersRaw) : [];
    
    console.log('Users found:', users.length); // Debug log
    
    // Buscar el usuario en el array (case-insensitive)
    const user = users.find(user => (user.username || '').toLowerCase() === u.toLowerCase());
    
    if (!user) {
        authMessage.textContent = 'User not found';
        authMessage.style.color = '#ff4444'; // Rojo para error
        return;
    }
    
    if (user.password !== p) {
        authMessage.textContent = 'Invalid password';
        authMessage.style.color = '#ff4444'; // Rojo para error
        return;
    }
    
    console.log('Login successful for user:', u); // Debug log
    
    localStorage.setItem('currentUser', user.username);
    currentUser = user.username;
    
    // Cargar el highscore específico del usuario
    highScore = getUserHighScore(u);
    highScoreText.textContent = `Highscore: ${highScore}`;
    
    authMessage.textContent = 'Welcome!';
    authMessage.style.color = '#1ED760'; // Verde para éxito
    
    // Play success sound
    if (window.soundManager) {
        window.soundManager.play('success');
    }
    
    // Update user display
    updateUserDisplay();
    
    setTimeout(() => { 
        hideAuth(); 
        showGame(); 
        startGame(); 
    }, 300);
}

function dedupeUsersInLocalStorage() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userHighScores = JSON.parse(localStorage.getItem('userHighScores') || '{}');
    const map = new Map();
    users.forEach(u => {
        const uname = (u && u.username ? String(u.username) : '').trim();
        if (!uname) return;
        const key = uname.toLowerCase();
        const scoreFromUser = u.highScore || 0;
        const scoreFromHighScores = userHighScores[uname] || 0;
        const bestScore = Math.max(scoreFromUser, scoreFromHighScores);
        if (!map.has(key)) {
            map.set(key, { username: uname, password: u.password, highScore: bestScore });
        } else {
            const ex = map.get(key);
            ex.highScore = Math.max(ex.highScore || 0, bestScore);
        }
    });
    const newUsers = Array.from(map.values());
    const newUserHighScores = {};
    newUsers.forEach(u => {
        newUserHighScores[u.username] = Math.max(u.highScore || 0, userHighScores[u.username] || 0);
    });
    localStorage.setItem('users', JSON.stringify(newUsers));
    localStorage.setItem('userHighScores', JSON.stringify(newUserHighScores));
}
function reconcileCurrentUserCase() {
    const cu = localStorage.getItem('currentUser');
    if (!cu) return null;
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(u => (u.username || '').toLowerCase() === cu.toLowerCase());
    if (found) {
        localStorage.setItem('currentUser', found.username);
        return found.username;
    } else {
        try { localStorage.removeItem('currentUser'); } catch (e) {}
        return null;
    }
}
function boot() {
    dedupeUsersInLocalStorage();
    currentUser = reconcileCurrentUserCase();
    updateUserDisplay(); // Update user display on boot
    
    if (!currentUser) {
        showStartScreen();
    } else {
        // Migrar cualquier highscore global existente
        migrateGlobalHighScore();
        
        // Cargar el highscore del usuario actual
        highScore = getUserHighScore(currentUser);
        highScoreText.textContent = `Highscore: ${highScore}`;
        hideAuth();
        hideStartScreen();
        showGame();
        startGame();
    }
}

function ensureCenterContainer() {
    let ctr = document.getElementById('center-badges');
    if (!ctr) {
        ctr = document.createElement('div');
        ctr.id = 'center-badges';
        document.body.appendChild(ctr);
    }
    return ctr;
}

function ensureLogoutBadge() {
    const ctr = ensureCenterContainer();
    let badge = document.getElementById('logoutBadge');
    if (!badge) {
        badge = document.createElement('button');
        badge.id = 'logoutBadge';
        badge.className = 'score-text';
        badge.textContent = 'Logout';
        badge.addEventListener('click', logout);
    }
    if (badge.parentElement !== ctr) ctr.appendChild(badge);
}

function placeUserBadge() {
    const ctr = ensureCenterContainer();
    if (userText && userText.parentElement !== ctr) ctr.appendChild(userText);
}

function updateUserDisplay() {
    console.log('updateUserDisplay called, currentUser:', currentUser); // Debug
    console.log('logoutBtn element:', logoutBtn); // Debug
    console.log('mainMenuBtn element:', mainMenuBtn); // Debug
    
    if (currentUser) {
        if (currentUserDisplay) {
            currentUserDisplay.textContent = `User: ${currentUser}`;
        }
        if (userText) {
            userText.textContent = `User: ${currentUser}`;
        }
        if (logoutBtn) {
            logoutBtn.style.display = 'inline-block';
            logoutBtn.style.visibility = 'visible';
            console.log('Logout button should be visible now'); // Debug
        } else {
            console.log('Logout button NOT FOUND!'); // Debug
        }
        if (mainMenuBtn) {
            mainMenuBtn.style.display = 'inline-block';
            mainMenuBtn.style.visibility = 'visible';
            console.log('Main Menu button should be visible now'); // Debug log
        } else {
            console.log('Main Menu button NOT FOUND!'); // Debug log
        }
        if (gameSoundToggleBtn) {
            gameSoundToggleBtn.style.display = 'inline-block';
            gameSoundToggleBtn.style.visibility = 'visible';
            console.log('Game Sound button should be visible now'); // Debug log
        } else {
            console.log('Game Sound button NOT FOUND!'); // Debug log
        }
    } else {
        if (currentUserDisplay) {
            currentUserDisplay.textContent = 'User: -';
        }
        if (userText) {
            userText.textContent = 'User: -';
        }
        if (logoutBtn) {
            logoutBtn.style.display = 'none';
            logoutBtn.style.visibility = 'hidden';
        }
        if (mainMenuBtn) {
            mainMenuBtn.style.display = 'none';
            mainMenuBtn.style.visibility = 'hidden';
        }
        if (gameSoundToggleBtn) {
            gameSoundToggleBtn.style.display = 'none';
            gameSoundToggleBtn.style.visibility = 'hidden';
        }
    }
}

function goToMainMenu() {
    // Guardar el score actual antes de volver al menú
    if (currentUser && score > 0) {
        const currentHighScore = getUserHighScore(currentUser);
        if (score > currentHighScore) {
            setUserHighScore(currentUser, score);
        }
    }
    
    // Reset score for current session but keep user logged in
    score = 0;
    
    // Clear any feedback timeouts
    if (window.feedbackTimeout) {
        clearTimeout(window.feedbackTimeout);
    }
    
    // Reset feedback
    if (feedbackIcon) {
        feedbackIcon.classList.add('hidden');
        feedbackIcon.style.display = 'none';
    }
    if (correctCheckmark) correctCheckmark.style.display = 'none';
    if (incorrectCross) incorrectCross.style.display = 'none';
    
    // Hide game and auth, show start screen (but keep user logged in)
    hideGame();
    hideAuth();
    if (scoreText) scoreText.textContent = `Score: 0`;
    
    showStartScreen();
}

function logout() {
    // Guardar el score actual antes de hacer logout
    if (currentUser && score > 0) {
        const currentHighScore = getUserHighScore(currentUser);
        if (score > currentHighScore) {
            setUserHighScore(currentUser, score);
        }
    }
    
    try { localStorage.removeItem('currentUser'); } catch (e) {}
    currentUser = null;
    highScore = 0;
    score = 0;
    
    // Clear any feedback timeouts
    if (window.feedbackTimeout) {
        clearTimeout(window.feedbackTimeout);
    }
    
    // Reset feedback
    if (feedbackIcon) {
        feedbackIcon.classList.add('hidden');
        feedbackIcon.style.display = 'none';
    }
    if (correctCheckmark) correctCheckmark.style.display = 'none';
    if (incorrectCross) incorrectCross.style.display = 'none';
    
    // Hide game and auth, show start screen
    hideGame();
    hideAuth();
    updateUserDisplay();
    if (highScoreText) highScoreText.textContent = `Highscore: 0`;
    if (scoreText) scoreText.textContent = `Score: 0`;
    
    const badge = document.getElementById('logoutBadge');
    if (badge) badge.remove();
    showStartScreen();
}

function generateCards() {
    // Primera ronda: tomar dos del mazo
    if (currentArtists.length === 0) {
        if (deck.length < 2) deck = initDeck([]);
        currentArtists = [deck.shift(), deck.shift()];
    } else {
        // La derecha pasa a la izquierda; sacar nueva derecha del mazo
        const prevRight = currentArtists[1];
        currentArtists = [prevRight, null];
        if (deck.length === 0) {
            // Reponer mazo evitando repetir el que queda a la izquierda
            deck = initDeck([prevRight.name]);
        }
        currentArtists[1] = deck.shift();
    }

    updateUI(currentArtists[0], currentArtists[1]);
}

function updateUI(artist1, artist2) {
    // Reset VS status each round
    if (vsDivider) vsDivider.classList.remove('correct', 'incorrect');
    artistName1.textContent = artist1.name;
    artistImg1.dataset.artist = artist1.name;
    artistImg1.onerror = () => { artistImg1.onerror = null; artistImg1.src = '../images/logazopa.png'; };
    artistImg1.src = artist1.img;
    artistImg1.style.opacity = '1';
    statValue1.textContent = artist1.value.toLocaleString('en-US');
    // Intentar sustituir por foto oficial de Spotify si está disponible
    preferSpotifyImage(artist1.name, artistImg1);

    artist2Question.classList.remove('hidden');
    artist2Stats.classList.add('hidden');
    artistName2.textContent = artist2.name;
    artistImg2.dataset.artist = artist2.name;
    artistImg2.onerror = () => { artistImg2.onerror = null; artistImg2.src = '../images/logazopa.png'; };
    artistImg2.src = artist2.img;
    artistImg2.style.opacity = '1';
    // Intentar sustituir por foto oficial de Spotify si está disponible
    preferSpotifyImage(artist2.name, artistImg2);
}

// Live stats animation
function animateLiveStats() {
    const livePlayersEl = document.getElementById('live-players');
    const liveGamesEl = document.getElementById('live-games');
    const liveStreakEl = document.getElementById('live-streak');
    
    if (!livePlayersEl || !liveGamesEl || !liveStreakEl) return;
    
    setInterval(() => {
        // Simulate live player count changes
        const currentPlayers = parseInt(livePlayersEl.textContent.replace(',', ''));
        const change = Math.floor(Math.random() * 20) - 10; // -10 to +10
        const newPlayers = Math.max(1000, currentPlayers + change);
        livePlayersEl.textContent = newPlayers.toLocaleString();
        
        // Simulate active games changes
        const currentGames = parseInt(liveGamesEl.textContent);
        const gameChange = Math.floor(Math.random() * 10) - 5; // -5 to +5
        const newGames = Math.max(50, currentGames + gameChange);
        liveGamesEl.textContent = newGames.toString();
        
        // Simulate streak changes (less frequent)
        if (Math.random() < 0.3) {
            const currentStreak = parseInt(liveStreakEl.textContent);
            const streakChange = Math.floor(Math.random() * 6) - 3; // -3 to +3
            const newStreak = Math.max(100, currentStreak + streakChange);
            liveStreakEl.textContent = newStreak.toString();
        }
    }, 3000); // Update every 3 seconds
}

// Initialize live stats animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing...'); // Debug log
    
    // Re-initialize event listeners to ensure they work
    initializeEventListeners();
    
    setTimeout(animateLiveStats, 2000); // Start after 2 seconds
    
    // Add event listener for Play Now button
    const playNowBtn = document.getElementById('play-now-btn');
    if (playNowBtn) {
        console.log('Play Now button found and event listener added'); // Debug log
        playNowBtn.addEventListener('click', handlePlayNowClick);
    } else {
        console.log('Play Now button NOT found'); // Debug log
    }
    
    // Initialize leaderboard
    initializeLeaderboard();
    
    // Load global leaderboard if available, otherwise local
    setTimeout(() => {
        loadGlobalLeaderboard();
    }, 1000); // Wait for Firebase to initialize
    
    console.log('Initialization complete'); // Debug log
});

// Backup initialization in case DOMContentLoaded already fired
if (document.readyState === 'loading') {
    console.log('Document still loading, waiting for DOMContentLoaded');
} else {
    console.log('Document already loaded, initializing immediately');
    setTimeout(() => {
        const playNowBtn = document.getElementById('play-now-btn');
        if (playNowBtn && !playNowBtn.onclick) {
            console.log('Backup: Adding Play Now button event listener'); // Debug log
            playNowBtn.addEventListener('click', handlePlayNowClick);
        }
        
        initializeLeaderboard();
        populateLeaderboard();
    }, 100);
}

// Handle Play Now button click
async function handlePlayNowClick() {
    // Trigger screen transition effect
    if (window.screenTransition) {
        await window.screenTransition.playNowTransition();
    }
    
    // Check if user is already logged in
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
        // User is logged in, go directly to game
        hideStartScreen();
        showGame();
        startGame();
    } else {
        // User not logged in, show auth screen
        hideStartScreen();
        showAuth();
    }
}

// Initialize leaderboard functionality
function initializeLeaderboard() {
    const leaderboardToggle = document.getElementById('leaderboard-toggle');
    const leaderboard = document.querySelector('.leaderboard');
    
    if (leaderboardToggle && leaderboard) {
        leaderboardToggle.addEventListener('click', () => {
            leaderboard.classList.toggle('collapsed');
        });
    }
}

// Populate leaderboard with real users
function populateLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    if (!leaderboardList) return;
    
    // Get and dedupe users from localStorage (case-insensitive)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userHighScores = JSON.parse(localStorage.getItem('userHighScores') || '{}');

    const map = new Map(); // key: lower(username)
    users.forEach(user => {
        const uname = (user && user.username ? String(user.username) : '').trim();
        if (!uname) return;
        const key = uname.toLowerCase();
        const scoreFromUser = user.highScore || 0;
        const scoreFromHighScores = userHighScores[uname] || 0;
        const best = Math.max(scoreFromUser, scoreFromHighScores);
        if (!map.has(key)) {
            map.set(key, { username: uname, highScore: best });
        } else {
            const ex = map.get(key);
            ex.highScore = Math.max(ex.highScore || 0, best);
        }
    });

    const uniqueUsers = Array.from(map.values())
        .sort((a, b) => (b.highScore || 0) - (a.highScore || 0));

    if (uniqueUsers.length === 0) {
        leaderboardList.innerHTML = `
            <div class="leaderboard-item">
                <div class="player-info" style="text-align: center; color: rgba(255,255,255,0.5);">
                    <div class="player-name">No players yet</div>
                    <div class="player-score">Be the first to play!</div>
                </div>
            </div>
        `;
        return;
    }

    const leaderboardHTML = uniqueUsers.map((user, index) => {
        const rank = index + 1;
        const rankClass = rank <= 3 ? `rank-${rank}` : '';
        const crownIcon = rank === 1 && (user.highScore || 0) > 0 ? '<span class="crown-icon">👑</span>' : '';
        
        return `
            <div class="leaderboard-item">
                <div class="player-rank ${rankClass}">${rank}</div>
                <div class="player-info">
                    <div class="player-name">${user.username}</div>
                    <div class="player-score">${user.highScore || 0} points</div>
                </div>
                ${crownIcon}
            </div>
        `;
    }).join('');

    leaderboardList.innerHTML = leaderboardHTML;
    console.log('Leaderboard updated with', uniqueUsers.length, 'users');
}

// Update leaderboard when scores change
function updateLeaderboard() {
    populateLeaderboard();
}

// Debug function to check localStorage data (call this in console)
function debugLocalStorage() {
    console.log('=== LOCALSTORAGE DEBUG ===');
    console.log('users:', JSON.parse(localStorage.getItem('users') || '[]'));
    console.log('userHighScores:', JSON.parse(localStorage.getItem('userHighScores') || '{}'));
    console.log('currentUser:', localStorage.getItem('currentUser'));
    console.log('========================');
    
    // Force leaderboard update
    populateLeaderboard();
}

// Make debug function globally available
window.debugLocalStorage = debugLocalStorage;

// ===== FIREBASE GLOBAL LEADERBOARD =====

// Check if Firebase is available
function isFirebaseAvailable() {
    return typeof window.firebaseDB !== 'undefined';
}

// Save user to global database
async function saveUserToGlobalDB(username, password, highScore = 0) {
    if (!isFirebaseAvailable()) {
        console.log('Firebase not available, using local storage only');
        return;
    }
    
    try {
        const userRef = window.firebaseDoc(window.firebaseDB, 'users', username);
        await window.firebaseSetDoc(userRef, {
            username: username,
            password: password, // En producción, esto debería estar hasheado
            highScore: highScore,
            createdAt: new Date(),
            lastUpdated: new Date()
        });
        console.log('User saved to global database:', username);
    } catch (error) {
        console.error('Error saving user to global database:', error);
    }
}

// Update user high score in global database
async function updateGlobalHighScore(username, score) {
    if (!isFirebaseAvailable()) {
        console.log('Firebase not available, using local storage only');
        return;
    }
    
    try {
        const userRef = window.firebaseDoc(window.firebaseDB, 'users', username);
        const userDoc = await window.firebaseGetDoc(userRef);
        
        if (userDoc.exists()) {
            const currentScore = userDoc.data().highScore || 0;
            if (score > currentScore) {
                await window.firebaseSetDoc(userRef, {
                    ...userDoc.data(),
                    highScore: score,
                    lastUpdated: new Date()
                });
                console.log(`Global high score updated for ${username}: ${score}`);
            }
        }
    } catch (error) {
        console.error('Error updating global high score:', error);
    }
}

// Load global leaderboard
async function loadGlobalLeaderboard() {
    if (!isFirebaseAvailable()) {
        console.log('Firebase not available, loading local leaderboard');
        populateLeaderboard();
        return;
    }
    
    try {
        const usersCollection = window.firebaseCollection(window.firebaseDB, 'users');
        const q = window.firebaseQuery(usersCollection, window.firebaseOrderBy('highScore', 'desc'));
        const querySnapshot = await window.firebaseGetDocs(q);
        
        const globalUsers = [];
        querySnapshot.forEach((doc) => {
            globalUsers.push(doc.data());
        });
        
        // Merge global with local users and dedupe (case-insensitive)
        const localUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const userHighScores = JSON.parse(localStorage.getItem('userHighScores') || '{}');
        const map = new Map();
        const addUser = (uname, hs) => {
            if (!uname) return;
            const key = String(uname).trim().toLowerCase();
            if (!key) return;
            if (!map.has(key)) {
                map.set(key, { username: uname, highScore: hs || 0 });
            } else {
                const ex = map.get(key);
                ex.highScore = Math.max(ex.highScore || 0, hs || 0);
            }
        };

        globalUsers.forEach(u => addUser(u.username, u.highScore || 0));
        localUsers.forEach(u => {
            const uname = u && u.username ? u.username : '';
            const hs = Math.max(u.highScore || 0, userHighScores[uname] || 0);
            addUser(uname, hs);
        });

        const combined = Array.from(map.values());
        console.log('Combined users (global + local):', combined);
        populateGlobalLeaderboard(combined);
        
    } catch (error) {
        console.error('Error loading global leaderboard:', error);
        // Fallback to local leaderboard
        populateLeaderboard();
    }
}

// Populate leaderboard with global users
function populateGlobalLeaderboard(globalUsers) {
    const leaderboardList = document.getElementById('leaderboard-list');
    if (!leaderboardList) return;
    
    // Dedupe global list by username (case-insensitive)
    const map = new Map();
    for (const u of (globalUsers || [])) {
        const uname = (u && u.username ? String(u.username) : '').trim();
        if (!uname) continue;
        const key = uname.toLowerCase();
        const hs = u.highScore || 0;
        if (!map.has(key)) {
            map.set(key, { username: uname, highScore: hs });
        } else {
            const ex = map.get(key);
            ex.highScore = Math.max(ex.highScore || 0, hs);
        }
    }

    const sortedUsers = Array.from(map.values()).sort((a, b) => (b.highScore || 0) - (a.highScore || 0));

    if (sortedUsers.length === 0) {
        leaderboardList.innerHTML = `
            <div class="leaderboard-item">
                <div class="player-info" style="text-align: center; color: rgba(255,255,255,0.5);">
                    <div class="player-name">No players yet</div>
                    <div class="player-score">Be the first to play!</div>
                </div>
            </div>
        `;
        return;
    }

    const leaderboardHTML = sortedUsers.map((user, index) => {
        const rank = index + 1;
        const rankClass = rank <= 3 ? `rank-${rank}` : '';
        const crownIcon = rank === 1 && (user.highScore || 0) > 0 ? '<span class="crown-icon">👑</span>' : '';
        
        return `
            <div class="leaderboard-item">
                <div class="player-rank ${rankClass}">${rank}</div>
                <div class="player-info">
                    <div class="player-name">${user.username}</div>
                    <div class="player-score">${user.highScore || 0} points</div>
                </div>
                ${crownIcon}
            </div>
        `;
    }).join('');
    
    leaderboardList.innerHTML = leaderboardHTML;
    console.log('Global leaderboard updated with', sortedUsers.length, 'users');
}

// Continue with the rest of the updateUI function
function completeUpdateUI(artist2) {
    document.getElementById('artist-name2-stats').textContent = artist2.name;
}

// Removed duplicate handleGuess function - keeping only the one below

function endGame() {
    const finalArtistValue = currentArtists[1].value;

    yourScoreText.textContent = `Tu Score: ${score}`;
    
    if (score > highScore) {
        highScore = score;
        // Guardar el highscore usando el nuevo sistema por usuario
        setUserHighScore(currentUser, highScore);
        highScoreText.textContent = `Highscore: ${highScore}`;
    }
    
    yourHighscoreText.textContent = `Highscore: ${highScore}`;
    
    // Trigger Three.js game end effect
    if (window.threeEffects) {
        window.threeEffects.onGameEnd();
    }
    
    // Dispatch custom event for Three.js
    document.dispatchEvent(new CustomEvent('gameEnd'));

    endScreen.classList.remove('win', 'lose');
    if (score > 15) {
        endScreen.classList.add('win');
        endScreenMessage.textContent = 'CONGRATULATIONS';
        const randomGif = winningGifs[Math.floor(Math.random() * winningGifs.length)];
        endScreenGif.style.backgroundImage = `url("${randomGif}")`;
    } else {
        endScreen.classList.add('lose');
        endScreenMessage.innerHTML = `GAME OVER <br>The final artist had ${finalArtistValue.toLocaleString('en-US')} monthly listeners.`;
        const randomGif = losingGifs[Math.floor(Math.random() * losingGifs.length)];
        endScreenGif.style.backgroundImage = `url("${randomGif}")`;
    }
    
    endScreen.classList.remove('hidden');
}

// Diagnostic function to check DOM elements
function diagnoseDOMElements() {
    console.log('=== DOM DIAGNOSIS ===');
    console.log('authRegisterBtn:', authRegisterBtn ? 'FOUND' : 'NOT FOUND');
    console.log('authLoginBtn:', authLoginBtn ? 'FOUND' : 'NOT FOUND');
    console.log('authBackBtn:', authBackBtn ? 'FOUND' : 'NOT FOUND');
    console.log('authUsername:', authUsername ? 'FOUND' : 'NOT FOUND');
    console.log('authPassword:', authPassword ? 'FOUND' : 'NOT FOUND');
    console.log('authMessage:', authMessage ? 'FOUND' : 'NOT FOUND');
    console.log('play-now-btn:', document.getElementById('play-now-btn') ? 'FOUND' : 'NOT FOUND');
    console.log('moreBtn:', moreBtn ? 'FOUND' : 'NOT FOUND');
    console.log('lessBtn:', lessBtn ? 'FOUND' : 'NOT FOUND');
    console.log('===================');
}

// Event Listeners - Initialize after DOM is ready
function initializeEventListeners() {
    console.log('Initializing event listeners...'); // Debug log
    
    // Run diagnosis
    diagnoseDOMElements();
    
    // Game buttons
    if (moreBtn) {
        moreBtn.addEventListener('click', () => {
            if (window.soundManager) window.soundManager.play('click');
            handleGuess(true);
        });
        moreBtn.addEventListener('mouseenter', () => {
            if (window.soundManager) window.soundManager.play('hover');
        });
        console.log('More button event listener added'); // Debug log
    }
    if (lessBtn) {
        lessBtn.addEventListener('click', () => {
            if (window.soundManager) window.soundManager.play('click');
            handleGuess(false);
        });
        lessBtn.addEventListener('mouseenter', () => {
            if (window.soundManager) window.soundManager.play('hover');
        });
        console.log('Less button event listener added'); // Debug log
    }
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', () => {
            if (window.soundManager) window.soundManager.play('click');
            startGame();
        });
        playAgainBtn.addEventListener('mouseenter', () => {
            if (window.soundManager) window.soundManager.play('hover');
        });
        console.log('Play Again button event listener added'); // Debug log
    }

    // Auth buttons
    if (authRegisterBtn) {
        console.log('Register button found, adding event listener'); // Debug log
        authRegisterBtn.addEventListener('click', (e) => { 
            e.preventDefault(); // Prevenir comportamiento por defecto
            if (window.soundManager) window.soundManager.play('click');
            console.log('Register button clicked'); // Debug log
            registerUser(); 
        });
    } else {
        console.log('Register button NOT found'); // Debug log
    }
    
    if (authLoginBtn) {
        console.log('Login button found, adding event listener'); // Debug log
        authLoginBtn.addEventListener('click', (e) => { 
            e.preventDefault(); // Prevenir comportamiento por defecto
            if (window.soundManager) window.soundManager.play('click');
            console.log('Login button clicked'); // Debug log
            loginUser(); 
        });
    } else {
        console.log('Login button NOT found'); // Debug log
    }
    
    if (authBackBtn) {
        authBackBtn.addEventListener('click', () => { 
            // Limpiar campos y mensajes
            if (authUsername) authUsername.value = '';
            if (authPassword) authPassword.value = '';
            if (authMessage) {
                authMessage.textContent = '';
                authMessage.style.color = ''; // Reset color
            }
            // Volver a la pantalla de inicio
            showStartScreen(); 
        });
        console.log('Auth Back button event listener added'); // Debug log
    } else {
        console.log('Auth Back button NOT found'); // Debug log
    }
    
    // Main Menu button
    if (mainMenuBtn) {
        mainMenuBtn.addEventListener('click', () => {
            if (window.soundManager) window.soundManager.play('menu');
            goToMainMenu();
        });
        mainMenuBtn.addEventListener('mouseenter', () => {
            if (window.soundManager) window.soundManager.play('hover');
        });
        console.log('Main Menu button event listener added'); // Debug log
    } else {
        console.log('Main Menu button NOT found'); // Debug log
    }
    
    // Logout button
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            if (window.soundManager) window.soundManager.play('click');
            logout();
        });
        logoutBtn.addEventListener('mouseenter', () => {
            if (window.soundManager) window.soundManager.play('hover');
        });
        console.log('Logout button event listener added'); // Debug log
    } else {
        console.log('Logout button NOT found'); // Debug log
    }
    
    // Sound toggle button
    if (soundToggleBtn) {
        soundToggleBtn.addEventListener('click', () => {
            if (window.soundManager) {
                const isEnabled = window.soundManager.toggle();
                soundToggleBtn.textContent = isEnabled ? '🔊' : '🔇';
                soundToggleBtn.classList.toggle('muted', !isEnabled);
                soundToggleBtn.title = isEnabled ? 'Mute Sound' : 'Enable Sound';
                
                // Play a test sound if enabling
                if (isEnabled) {
                    window.soundManager.play('click');
                }
            }
        });
        console.log('Sound toggle button event listener added'); // Debug log
    } else {
        console.log('Sound toggle button NOT found'); // Debug log
    }
    
    // Game sound toggle button (in user header)
    if (gameSoundToggleBtn) {
        gameSoundToggleBtn.addEventListener('click', () => {
            if (window.soundManager) {
                const isEnabled = window.soundManager.toggle();
                gameSoundToggleBtn.textContent = isEnabled ? '🔊' : '🔇';
                gameSoundToggleBtn.classList.toggle('muted', !isEnabled);
                gameSoundToggleBtn.title = isEnabled ? 'Mute Sound' : 'Enable Sound';
                
                // Play a test sound if enabling
                if (isEnabled) {
                    window.soundManager.play('click');
                }
            }
        });
        console.log('Game sound toggle button event listener added'); // Debug log
    } else {
        console.log('Game sound toggle button NOT found'); // Debug log
    }
    
    // Music player controls
    if (musicPlayPauseBtn) {
        musicPlayPauseBtn.addEventListener('click', () => {
            console.log('Music play/pause clicked'); // Debug
            if (window.lofiMusic) {
                console.log('Current music state:', window.lofiMusic.isPlaying); // Debug
                if (window.lofiMusic.isPlaying) {
                    window.lofiMusic.stop();
                    musicPlayPauseBtn.textContent = '▶️';
                    musicPlayPauseBtn.title = 'Play';
                    console.log('Music stopped'); // Debug
                } else {
                    window.lofiMusic.startLoop();
                    musicPlayPauseBtn.textContent = '⏸️';
                    musicPlayPauseBtn.title = 'Pause';
                    console.log('Music started'); // Debug
                }
            } else {
                console.log('lofiMusic not found'); // Debug
            }
        });
        console.log('Music play/pause button event listener added'); // Debug log
    } else {
        console.log('Music play/pause button NOT found'); // Debug log
    }
    
    // Volume slider
    if (volumeSlider) {
        volumeSlider.addEventListener('input', (e) => {
            console.log('Volume slider changed to:', e.target.value); // Debug
            if (window.lofiMusic) {
                const volume = e.target.value / 100 * 0.3; // Max 30% volume
                console.log('Setting volume to:', volume); // Debug
                window.lofiMusic.setVolume(volume);
                
                // Update volume icon
                const volumeIcon = document.querySelector('.volume-icon');
                if (volumeIcon) {
                    if (volume === 0) {
                        volumeIcon.textContent = '🔇';
                    } else if (volume < 0.1) {
                        volumeIcon.textContent = '🔈';
                    } else if (volume < 0.2) {
                        volumeIcon.textContent = '🔉';
                    } else {
                        volumeIcon.textContent = '🔊';
                    }
                    console.log('Volume icon updated to:', volumeIcon.textContent); // Debug
                }
            } else {
                console.log('lofiMusic not found for volume control'); // Debug
            }
        });
        console.log('Volume slider event listener added'); // Debug log
    } else {
        console.log('Volume slider NOT found'); // Debug log
    }
}

// Game mode selection
gameModeCards.forEach(card => {
    card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        if (card.classList.contains('coming-soon')) {
            return; // No hacer nada si es "coming soon"
        }
        
        if (mode === 'spotify') {
            // Ir a la pantalla de autenticación
            showAuth();
        }
    });
});

// Funciones del juego que faltan

function initDeck(usedItems) {
    return items.filter(item => !usedItems.includes(item));
}

function getRandomArtist(excludeList = []) {
    const availableArtists = deck.filter(artist => !excludeList.includes(artist));
    if (availableArtists.length === 0) return null;
    return availableArtists[Math.floor(Math.random() * availableArtists.length)];
}

function loadNewArtists() {
    if (currentArtists.length === 0) {
        // Primera carga
        const artist1 = getRandomArtist();
        const artist2 = getRandomArtist([artist1]);
        currentArtists = [artist1, artist2];
    } else {
        // Mover el segundo artista al primer lugar
        currentArtists[0] = currentArtists[1];
        // Obtener nuevo segundo artista
        currentArtists[1] = getRandomArtist([currentArtists[0]]);
    }
    
    if (!currentArtists[0] || !currentArtists[1]) {
        endGame();
        return;
    }
    
    updateUI();
}

function updateUI() {
    const artist1 = currentArtists[0];
    const artist2 = currentArtists[1];
    
    // Actualizar primer artista
    if (artistName1) artistName1.textContent = artist1.name;
    if (artistImg1) {
        artistImg1.src = artist1.img;
        artistImg1.style.opacity = '1'; // Reset opacity
    }
    if (statValue1) statValue1.textContent = `${artist1.value.toLocaleString('en-US')}`;
    
    // Actualizar segundo artista
    if (artistName2) artistName2.textContent = artist2.name;
    if (artistImg2) {
        artistImg2.src = artist2.img;
        artistImg2.style.opacity = '1'; // Reset opacity
    }
    
    // Mostrar pregunta, ocultar stats
    if (artist2Question) artist2Question.classList.remove('hidden');
    if (artist2Stats) artist2Stats.classList.add('hidden');
    
    // Reset VS divider
    if (vsDivider) {
        vsDivider.classList.remove('correct', 'incorrect');
    }
    
    // Reset feedback completely
    if (feedbackIcon) {
        feedbackIcon.classList.add('hidden');
        feedbackIcon.style.display = 'none';
    }
    if (correctCheckmark) {
        correctCheckmark.style.display = 'none';
    }
    if (incorrectCross) {
        incorrectCross.style.display = 'none';
    }
}

function generateCards() {
    loadNewArtists();
}

function animateCountUp(element, start, end, duration, callback) {
    if (!element) {
        if (callback) callback();
        return;
    }
    
    const startTime = performance.now();
    const range = end - start;
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (range * progress));
        element.textContent = current.toLocaleString('en-US');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            if (callback) callback();
        }
    }
    
    requestAnimationFrame(update);
}

function showFeedback(isCorrect) {
    if (!feedbackIcon) return;
    
    // Play sound
    if (window.soundManager) {
        window.soundManager.play(isCorrect ? 'correct' : 'incorrect');
    }
    
    // Clear any existing timeouts
    if (window.feedbackTimeout) {
        clearTimeout(window.feedbackTimeout);
    }
    
    // Reset and show feedback
    feedbackIcon.classList.remove('hidden');
    feedbackIcon.style.display = 'block';
    
    if (isCorrect) {
        if (correctCheckmark) correctCheckmark.style.display = 'block';
        if (incorrectCross) incorrectCross.style.display = 'none';
    } else {
        if (correctCheckmark) correctCheckmark.style.display = 'none';
        if (incorrectCross) incorrectCross.style.display = 'block';
    }
    
    // Hide feedback after 1 second
    window.feedbackTimeout = setTimeout(() => {
        if (feedbackIcon) {
            feedbackIcon.classList.add('hidden');
            feedbackIcon.style.display = 'none';
        }
        if (correctCheckmark) correctCheckmark.style.display = 'none';
        if (incorrectCross) incorrectCross.style.display = 'none';
    }, 1000);
}

function animateRightToLeftTransition(callback) {
    if (isAnimating) return;
    isAnimating = true;
    
    setTimeout(() => {
        isAnimating = false;
        if (callback) callback();
    }, 500);
}

function fadeOutElements(elements, duration, callback) {
    if (!elements || elements.length === 0) {
        if (callback) callback();
        return;
    }
    
    elements.forEach(el => {
        if (el) {
            el.style.transition = `opacity ${duration}ms ease-out`;
            el.style.opacity = '0';
        }
    });
    
    setTimeout(() => {
        // Reset opacity and transition after fade out
        elements.forEach(el => {
            if (el) {
                el.style.transition = '';
                el.style.opacity = '1';
            }
        });
        if (callback) callback();
    }, duration);
}

function endGame() {
    const finalArtistValue = currentArtists[1] ? currentArtists[1].value : 0;

    // Play game over sound
    if (window.soundManager) {
        window.soundManager.play('gameOver');
    }

    if (yourScoreText) yourScoreText.textContent = `Your Score: ${score}`;
    
    if (score > highScore) {
        highScore = score;
        setUserHighScore(currentUser, highScore);
        if (highScoreText) highScoreText.textContent = `Highscore: ${highScore}`;
    }
    
    if (yourHighscoreText) yourHighscoreText.textContent = `Highscore: ${highScore}`;
    
    // Trigger Three.js game end effect
    if (window.threeEffects) {
        window.threeEffects.onGameEnd();
    }
    
    // Dispatch custom event for Three.js
    document.dispatchEvent(new CustomEvent('gameEnd'));

    if (endScreen) {
        endScreen.classList.remove('win', 'lose');
        if (score > 15) {
            endScreen.classList.add('win');
            if (endScreenMessage) endScreenMessage.textContent = 'CONGRATULATIONS';
            if (endScreenGif && winningGifs.length > 0) {
                const randomGif = winningGifs[Math.floor(Math.random() * winningGifs.length)];
                endScreenGif.style.backgroundImage = `url("${randomGif}")`;
            }
        } else {
            endScreen.classList.add('lose');
            if (endScreenMessage) {
                endScreenMessage.innerHTML = `GAME OVER <br>The final artist had ${finalArtistValue.toLocaleString('en-US')} monthly listeners.`;
            }
            if (endScreenGif && losingGifs.length > 0) {
                const randomGif = losingGifs[Math.floor(Math.random() * losingGifs.length)];
                endScreenGif.style.backgroundImage = `url("${randomGif}")`;
            }
        }
        
        endScreen.classList.remove('hidden');
    }
}

function handleGuess(isMore) {
    if (isAnimating) return;

    const artist1 = currentArtists[0];
    const artist2 = currentArtists[1];
    
    if (!artist1 || !artist2) return;

    const isCorrect = isMore ? artist2.value > artist1.value : artist2.value < artist1.value;
    
    // Mostrar stats del segundo artista
    if (artist2Question) artist2Question.classList.add('hidden');
    if (artist2Stats) artist2Stats.classList.remove('hidden');
    
    // Animar el conteo
    animateCountUp(statValue2, 0, artist2.value, 250, () => {
        if (isCorrect) {
            if (vsDivider) { 
                vsDivider.classList.remove('incorrect'); 
                vsDivider.classList.add('correct'); 
            }
            showFeedback(true);
            score++;
            if (scoreText) scoreText.textContent = `Score: ${score}`;
            
            // Play score sound
            if (window.soundManager) {
                window.soundManager.play('score');
            }
            
            // Trigger Three.js score update effect
            if (window.threeEffects) {
                window.threeEffects.onScoreUpdate(score);
            }
            
            // Dispatch custom event for Three.js
            document.dispatchEvent(new CustomEvent('scoreUpdate', { detail: score }));
                
            animateRightToLeftTransition(() => {
                generateCards();
            });

        } else {
            if (vsDivider) { 
                vsDivider.classList.remove('correct'); 
                vsDivider.classList.add('incorrect'); 
            }
            showFeedback(false);
            fadeOutElements([artistImg1, artistImg2], 400, endGame);
        }
    });
}

function hideEndScreen() {
    if (endScreen) endScreen.classList.add('hidden');
}

function startGame() {
    score = 0;
    if (scoreText) scoreText.textContent = `Score: ${score}`;
    
    // Play game start sound
    if (window.soundManager) {
        window.soundManager.play('gameStart');
    }
    
    // Clear any feedback timeouts
    if (window.feedbackTimeout) {
        clearTimeout(window.feedbackTimeout);
    }
    
    // Reset feedback
    if (feedbackIcon) {
        feedbackIcon.classList.add('hidden');
        feedbackIcon.style.display = 'none';
    }
    if (correctCheckmark) correctCheckmark.style.display = 'none';
    if (incorrectCross) incorrectCross.style.display = 'none';
    
    // Reset VS divider
    if (vsDivider) {
        vsDivider.classList.remove('correct', 'incorrect');
    }
    
    // Reset images opacity
    if (artistImg1) {
        artistImg1.style.opacity = '1';
        artistImg1.style.transition = '';
    }
    if (artistImg2) {
        artistImg2.style.opacity = '1';
        artistImg2.style.transition = '';
    }
    
    hideEndScreen();
    showGame();
    
    // Trigger Three.js game start effect
    if (window.threeEffects) {
        window.threeEffects.onGameStart();
    }
    
    // Dispatch custom event for Three.js
    document.dispatchEvent(new CustomEvent('gameStart'));
    
    deck = initDeck([]);
    currentArtists = []; // Reset current artists
    loadNewArtists();
    generateCards();
}

// Removed temporary force return function

// Iniciar el juego al cargar la página
document.addEventListener('DOMContentLoaded', boot);